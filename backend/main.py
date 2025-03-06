from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv
from google import genai
import json

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Google GenAI Client
client = genai.Client(api_key=os.getenv("MY_API_KEY"))

@app.get("/{d}")
async def generate_content(d: str):
    # Request to Gemini with specific formatting instructions
    response = client.models.generate_content(
        model="gemini-1.5-flash",
        contents="Generate a Python course outline with 3 chapters. Return ONLY a JSON object.",
    )
    
    # Get text and find JSON content
    text = response.text
    start = text.find('{')
    end = text.rfind('}') + 1
    
    # Extract and parse JSON
    json_str = text[start:end]
    course_data = json.loads(json_str)
    
    # Return the parsed JSON directly
    return course_data

# Default route
@app.get("/")
async def read_root():
    return {"message": "Hi"}