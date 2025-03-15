from google import genai
import os
import json
import time

# Gemini AI client setup
client = genai.Client(api_key=os.getenv("MY_API_KEY"))

def generate(description, max_retries=5):
    retries = 0
    while retries < max_retries:
        try:
            # Send request to Gemini API
            response = client.models.generate_content(
                model="gemini-1.5-flash",
                contents=f"Generate 5 hashtags for a social media post for {description}. Return a clean JSON array where each object has 'title' and 'description'. No extra text, no numbers, no markdown, no code blocks."
            )

            # Attempt to parse the response as JSON
            parsed_response = json.loads(response.text)
            if parsed_response:  # Check if the response is not empty
                return parsed_response

        except json.JSONDecodeError:
            # If JSON parsing fails, log the error and retry
            print(f"Attempt {retries + 1}: Failed to parse response as JSON. Retrying...")

        except Exception as e:
            # Handle other potential errors (e.g., API errors)
            print(f"Attempt {retries + 1}: Error occurred - {e}. Retrying...")

        retries += 1
        time.sleep(1)  # Add a small delay between retries

    # If all retries fail, raise an internal error
    raise Exception("Internal Error: Failed to generate captions after multiple attempts.")

