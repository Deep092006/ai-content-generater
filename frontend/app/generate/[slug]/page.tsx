"use client"
import React, { useEffect, useState } from "react"
import { SubmitHandler } from "react-hook-form"
import ContentCard from "@/app/components/ContentCard"
import GenerateForm from "@/app/components/GenerateForm"
import { Loader2 } from "lucide-react"
import { generateContent } from "@/utils/api" // Import the API utility

interface PageProps {
  params: Promise<{ slug: string }>
}

type Inputs = {
  name: string
  tone: string
}

const Generate: React.FC<PageProps> = ({ params }) => {
  const [data, setData] = useState<{ title: string; description: string }[]>([])
  const [slug, setSlug] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isGenerating, setIsGenerating] = useState(false)

  useEffect(() => {
    params.then((resolvedParams) => {
      setSlug(resolvedParams.slug)
      setIsLoading(false)
    })
  }, [params])

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    if (!slug) return

    setIsGenerating(true)
    console.log("Form submitted:", formData)
    try {
      const generatedData = await generateContent(slug, formData.name) // Use the API utility
      setData(generatedData)
    } catch (error) {
      console.error("Error generating content:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  const formatSlugToHeading = (slug: string | null) => {
    if (!slug) return "ContentAI AI Content Generator"
    const formattedSlug = slug.replace(/-/g, " ")
    return `ContentAI AI ${formattedSlug.charAt(0).toUpperCase() + formattedSlug.slice(1)} Generator`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center px-6 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          {formatSlugToHeading(slug)}
        </h1>
        <p className="text-gray-300 mt-4 text-lg">
          Generate AI-powered content effortlessly with ContentAI.
        </p>
      </div>
      <div className="w-full max-w-2xl">
        <GenerateForm onSubmit={onSubmit} isGenerating={isGenerating} />
      </div>
      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mt-8">
        Generated Content
      </h2>
      <div className="w-full max-w-2xl mt-6 space-y-6">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
          </div>
        ) : slug ? (
          <>
            <p className="text-center text-gray-300">
              You are generating content for:{" "}
              <span className="font-bold text-blue-400">
                {slug.replace(/-/g, " ")}
              </span>
            </p>
            {isGenerating ? (
              <div className="flex justify-center items-center">
                <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
                <p className="ml-2 text-gray-300">Generating content for {slug.replace(/-/g, " ")}...</p>
              </div>
            ) : data.length > 0 ? (
              data.map((item, index) => (
                <ContentCard key={index} title={item.title} description={item.description} />
              ))
            ) : (
              <p className="text-center text-gray-300">No AI-generated content yet. Submit the form to generate.</p>
            )}
          </>
        ) : (
          <p className="text-center text-gray-300">Loading slug...</p>
        )}
      </div>
    </div>
  )
}

export default Generate