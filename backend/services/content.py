from templates import blog, yt, hashtags, social_media, product_description, ai_post_caption  # Import all templates

# Available templates
TEMPLATES = {
    "blog-idea": blog.generate,  # Blog ideas
    "youtube-video-idea": yt.generate,  # YouTube video ideas
    "hashtags": hashtags.generate,  # Hashtag generator
    "social-media-post": social_media.generate,  # Social media post generator
    "product-description": product_description.generate,  # Product description generator
    "ai-post-caption": ai_post_caption.generate # Post caption generater
}

# Generate content
def generate_content(template_name: str, description: str):
    if template_name in TEMPLATES:
        return {"status": "success", "data": TEMPLATES[template_name](description)}  # Call template function
    return {"error": "Template not found"}  # Handle invalid template