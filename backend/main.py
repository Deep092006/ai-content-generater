from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.content import router  # Import the content router

app = FastAPI()

# Enable CORS for all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Include the content router
app.include_router(router)

# Root endpoint
@app.get("/")
async def root():
    return {"message": "Welcome to AI Content Creator"}
