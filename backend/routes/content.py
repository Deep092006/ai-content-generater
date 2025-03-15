from fastapi import APIRouter, Query
from services.content import generate_content  # Import function

router = APIRouter(prefix="/content", tags=["Content"])  # Define router

@router.get("/generate/{template}")  # Path: template, Query: description
async def get_content(template: str, description: str = Query(..., min_length=1)):
    return generate_content(template, description)  # Generate content