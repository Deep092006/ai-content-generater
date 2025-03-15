"use client"
import { Wand2, Book, MessageSquare, Hash, Smartphone, Code } from "lucide-react"
import FeatureCard from "../components/FeatureCard"
import CtaButton from "../components/CtaButton"

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center px-6 py-12">
      {/* Page Title - Features Overview */}
      <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
        Features
      </h1>
      {/* Page Description */}
      <p className="text-gray-300 text-lg text-center max-w-2xl mb-12">
        Discover the powerful features of DeepWrite AI designed to help you create high-quality content effortlessly. From blog ideas to social media captions, we’ve got you covered.
      </p>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        <FeatureCard
          icon={<Wand2 className="w-6 h-6" />}
          title="AI-Powered Content"
          description="Generate high-quality content in seconds using advanced AI models."
          iconColor="text-blue-400"
        />
        <FeatureCard
          icon={<Book className="w-6 h-6" />}
          title="Multiple Templates"
          description="Choose from a variety of templates for blogs, social media, and more."
          iconColor="text-purple-400"
        />
        <FeatureCard
          icon={<MessageSquare className="w-6 h-6" />}
          title="Tone Customization"
          description="Adjust the tone of your content to match your brand voice."
          iconColor="text-green-400"
        />
        <FeatureCard
          icon={<Hash className="w-6 h-6" />}
          title="Hashtag Generator"
          description="Automatically generate relevant hashtags for your posts."
          iconColor="text-pink-400"
        />
        <FeatureCard
          icon={<Smartphone className="w-6 h-6" />}
          title="Mobile-Friendly"
          description="Access DeepWrite AI on any device and create content on the go."
          iconColor="text-yellow-400"
        />
        <FeatureCard
          icon={<Code className="w-6 h-6" />}
          title="API Integration"
          description="Integrate DeepWrite AI with your existing tools and workflows."
          iconColor="text-indigo-400"
        />
      </div>

      {/* Call to Action Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
          Ready to Transform Your Content Creation?
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Join thousands of users who are already creating amazing content with DeepWrite AI.
        </p>
        <CtaButton href="/templates" variant="primary">
          Get Started
        </CtaButton>
      </div>
    </div>
  )
}

export default FeaturesPage