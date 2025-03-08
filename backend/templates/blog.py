from google import genai
import os
import json
# Gemini AI client setup 
client = genai.Client(api_key=os.getenv("MY_API_KEY"))  

def generate(description):
    response = client.models.generate_content(
        model="gemini-1.5-flash",
        contents=f"Generate 5 blog ideas for {description}. Return a clean JSON array where each object has 'title' and 'description'. No extra text, no numbers, no markdown, no code blocks."
    )

    try:
        return json.loads(response.text)  # Parse AI response to JSON
    except json.JSONDecodeError:
        return []  # Return empty list on parsing failure
