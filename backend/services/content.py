from templates import blog, yt  # Import templates

# Available templates
TEMPLATES = {
    "blog": blog.generate,
    "yt": yt.generate
}

# Generate content
def generate_content(template_name: str, description: str):
    if template_name in TEMPLATES:
        return {"status": "success", "data": TEMPLATES[template_name](description)}  # Call template function
    return {"error": "Template not found"}  # Handle invalid template
