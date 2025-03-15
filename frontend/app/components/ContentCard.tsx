"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ContentCardProps {
  title: string
  description: string
}

const ContentCard: React.FC<ContentCardProps> = ({ title, description }) => {
  return (
    <Card className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl hover:border-blue-500 transition-all">
      {/* Card Header - Title Section */}
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">{title}</CardTitle>
      </CardHeader>
      {/* Card Content - Description and Timestamp */}
      <CardContent>
        <p className="text-gray-300">{description}</p>
        <p className="text-sm text-gray-500 mt-2">
          Generated on: {new Date().toLocaleString()} // Display generation timestamp
        </p>
      </CardContent>
    </Card>
  )
}

export default ContentCard