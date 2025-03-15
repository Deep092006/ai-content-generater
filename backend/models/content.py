from pydantic import BaseModel

# Request model for content generation
class ContentRequest(BaseModel):
    template: str  # Template format
    description: str  # Description input