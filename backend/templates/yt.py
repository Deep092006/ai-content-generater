from google import genai  
import os  
import json  

# Gemini AI client setup  
client = genai.Client(api_key=os.getenv("MY_API_KEY"))

def generate(description):
    response = client.models.generate_content(
        model="gemini-1.5-flash",
        contents=f"Generate 5 YouTube video ideas for {description} in JSON format. Return a clean JSON array with 'title' and 'description'. No extra text."
    )
    
    try:
        return json.loads(response.text)  # Parse response
    except json.JSONDecodeError:
        return []  # Handle parsing error
