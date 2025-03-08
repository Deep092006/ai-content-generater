from fastapi import FastAPI
from routes.content import router  # Import the content router

app = FastAPI()

# Include the content router
app.include_router(router)

# Root endpoint
@app.get("/")
async def root():
    return {"message": "Welcome to AI Content Creator"}
