"use client"
import React from 'react'
import Head from 'next/head'
import { Wand2, Book, MessageSquare, Hash, Smartphone, Code } from 'lucide-react'
import FeatureCard from './components/FeatureCard'
import CtaButton from './components/CtaButton'

const DeepWriteAI = () => {
  return (
    <>
      <Head>
        <title>DeepWrite AI - AI Content Generator</title>
        <meta name="description" content="DeepWrite AI helps you generate high-quality content using advanced AI models." />
      </Head>

      {/* Hero Section - Main Landing Area */}
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-fade-in">
          DeepWrite AI
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl text-center animate-fade-in-up">
          Create high-quality, engaging content effortlessly with the power of AI. Let DeepWrite AI generate blog posts, articles, and more for you.
        </p>

        {/* Hero Section Buttons */}
        <div className="mt-6 flex gap-4 animate-fade-in-up">
          <CtaButton href="/templates" variant="primary">
            Start Writing
          </CtaButton>
          <CtaButton href="/about" variant="secondary">
            Learn More
          </CtaButton>
        </div>
      </div>

      {/* Features Section - Highlight Key Capabilities */}
      <div className="bg-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
            Why Choose DeepWrite AI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </div>

      {/* Call to Action Section - Encourage User Engagement */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
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
    </>
  )
}

export default DeepWriteAI