"use client"
import React, { useEffect, useState } from "react"
import axios from "axios"
import { SubmitHandler } from "react-hook-form"
import ContentCard from "@/app/components/ContentCard"
import GenerateForm from "@/app/components/GenerateForm"

interface PageProps {
  params: Promise<{ slug: string }>
}

type Inputs = {
  name: string
  theme: string
}

const Generate: React.FC<PageProps> = ({ params }) => {
  const [data, setData] = useState<{ title: string; description: string }[]>([])
  const [slug, setSlug] = useState<string | null>(null)

  useEffect(() => {
    params.then((resolvedParams) => {
      setSlug(resolvedParams.slug)
    })
  }, [params])

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    if (!slug) return

    console.log("Form submitted:", formData)
    try {
      const response = await axios.get(
        `https://ai-content-generater.onrender.com/content/generate/${slug}?description=deep`
      )
      setData(response.data.data || [])
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  return (
    <div className="h-full flex flex-col bg-background px-6 py-8">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-primary">DeepWrite AI Content Generator</h1>
        <p className="text-secondary mt-2">Generate AI-powered content effortlessly with DeepWrite.</p>
      </div>
      <div className="max-w-2xl w-full mx-auto">
        <GenerateForm onSubmit={onSubmit} />
      </div>
      <h2 className="text-2xl font-semibold text-center mt-6 text-primary">Generated Content</h2>
      <div className="flex flex-col space-y-4 mt-4 max-w-2xl mx-auto">
        {slug ? (
          data.length > 0 ? (
            data.map((item, index) => (
              <ContentCard key={index} title={item.title} description={item.description} />
            ))
          ) : (
            <p className="text-center text-secondary">No AI-generated content yet. Submit the form to generate.</p>
          )
        ) : (
          <p className="text-center text-secondary">Loading slug...</p>
        )}
      </div>
    </div>
  )
}

export default Generate
