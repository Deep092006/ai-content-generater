"use client"
import Link from "next/link"
import { Book, Video, MessageSquare, Hash, Smartphone, ShoppingCart } from "lucide-react"


const TemplatesPage = () => {
  const templates = [
    { slug: "blog-idea", name: "Blog Idea", icon: <Book className="w-8 h-8 text-blue-400" /> },
    { slug: "youtube-video-idea", name: "YouTube Video Idea", icon: <Video className="w-8 h-8 text-purple-400" /> },
    { slug: "ai-post-caption", name: "AI Post Caption", icon: <MessageSquare className="w-8 h-8 text-green-400" /> },
    { slug: "hashtags", name: "Hashtags", icon: <Hash className="w-8 h-8 text-pink-400" /> },
    { slug: "social-media-post", name: "Social Media Post", icon: <Smartphone className="w-8 h-8 text-yellow-400" /> },
    { slug: "product-description", name: "Product Description", icon: <ShoppingCart className="w-8 h-8 text-red-400" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center px-6 py-8">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
        Templates
      </h1>
      {/* Page Description */}
      <p className="text-gray-300 text-lg mb-8">
        Choose a template to generate content effortlessly with DeepWrite AI.
      </p>
      {/* Template Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {templates.map((template) => (
          <Link
            key={template.slug}
            href={`/generate/${template.slug}`}
            prefetch={true} // Prefetch for faster navigation
            className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:bg-gray-700 hover:border-blue-500 transition-all flex flex-col items-center text-center"
          >
            {/* Template Icon */}
            <div className="mb-4 p-4 bg-gray-700 rounded-full">
              {template.icon}
            </div>
            {/* Template Name */}
            <h2 className="text-2xl font-bold text-white">{template.name}</h2>
            {/* Template Description */}
            <p className="text-gray-300 mt-2">
              Generate {template.name.toLowerCase()} using AI.
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TemplatesPage
