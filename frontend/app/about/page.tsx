"use client";

import { Rocket, Users, Code, Globe, Sparkles, BrainCircuit, Layers, ShieldCheck } from "lucide-react";
import FeatureCard from "../components/FeatureCard";
import CtaButton from "../components/CtaButton";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center px-6 py-12">
      
      {/* DeepWrite AI Section - Introduction */}
      <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
        DeepWrite AI – The Future of Content Generation
      </h1>
      <p className="text-gray-300 text-xl text-center max-w-3xl mb-12">
        <span className="text-blue-400 font-semibold">DeepWrite AI</span> is an advanced AI-powered content generation platform designed to help businesses, creators, and professionals craft high-quality content effortlessly. Whether it&apos;s blogs, marketing copy, or technical documentation, DeepWrite AI makes content creation faster, smarter, and more efficient.
      </p>

      {/* Features Section - Core Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 w-full max-w-7xl">
        <FeatureCard
          icon={<Rocket className="w-8 h-8" />}
          title="AI-Powered Efficiency"
          description="Generate high-quality content in seconds using state-of-the-art AI models."
          iconColor="text-blue-400"
        />
        <FeatureCard
          icon={<Users className="w-8 h-8" />}
          title="For Everyone"
          description="Perfect for writers, developers, marketers, and businesses who need content at scale."
          iconColor="text-purple-400"
        />
        {/* Tech Stack */}
        <FeatureCard
          icon={<Code className="w-8 h-8" />}
          title="Built with Next.js & FastAPI"
          description="DeepWrite AI is powered by modern frameworks like Next.js, FastAPI, LangChain, and OpenAI API."
          iconColor="text-green-400"
        />
        <FeatureCard
          icon={<Globe className="w-8 h-8" />}
          title="Global Accessibility"
          description="Designed to be intuitive, scalable, and accessible worldwide."
          iconColor="text-pink-400"
        />
        <FeatureCard
          icon={<Sparkles className="w-8 h-8" />}
          title="Continuous Innovation"
          description="Regularly updated with smarter AI models and new features to improve content creation."
          iconColor="text-yellow-400"
        />
      </div>

      {/* About Deep Surati - Creator Introduction */}
      <div className="mt-16 text-center">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
          Meet the Creator – Deep Surati
        </h2>
        <p className="text-gray-300 text-lg max-w-4xl mb-8">
          I am <span className="text-blue-400 font-semibold">Deep Surati</span>, a passionate full-stack developer and AI innovator, dedicated to merging artificial intelligence with modern web technologies. My goal is to create powerful, AI-driven solutions that enhance productivity and creativity.
        </p>
      </div>

      {/* Skills & Expertise - Developer's Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        <FeatureCard
          icon={<BrainCircuit className="w-8 h-8" />}
          title="AI & Machine Learning"
          description="Building intelligent systems with OpenAI API, LangChain, and FastAPI."
          iconColor="text-blue-400"
        />
        <FeatureCard
          icon={<Code className="w-8 h-8" />}
          title="Full-Stack Development"
          description="Expert in Next.js, React, Tailwind CSS, and FastAPI for scalable applications."
          iconColor="text-green-400"
        />
        <FeatureCard
          icon={<Layers className="w-8 h-8" />}
          title="Database Management"
          description="Skilled in PostgreSQL, MongoDB, and database optimizations."
          iconColor="text-purple-400"
        />
        <FeatureCard
          icon={<ShieldCheck className="w-8 h-8" />}
          title="Secure & Scalable Solutions"
          description="Developing high-performance, security-first web applications."
          iconColor="text-yellow-400"
        />
      </div>

      {/* Mission & Vision - Core Values */}
      <div className="mt-16 text-center">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
          My Mission & Vision
        </h2>
        <p className="text-gray-300 text-lg max-w-4xl mb-8">
          My mission is to revolutionize the way we interact with AI-powered technology by creating tools that empower businesses and developers. Through innovation and research, I aim to push the boundaries of AI and software development.
        </p>
      </div>

      {/* Call to Action - User Engagement */}
      <div className="mt-12 text-center">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
          Join the AI Revolution
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Be a part of the future where AI enhances creativity, productivity, and efficiency. Start using DeepWrite AI today!
        </p>
        <CtaButton href="/projects" variant="primary">
          Try DeepWrite AI
        </CtaButton>
      </div>
    </div>
  );
};

export default AboutUsPage;
