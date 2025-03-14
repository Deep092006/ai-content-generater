"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ContentCardProps {
  title: string
  description: string
}

const ContentCard: React.FC<ContentCardProps> = ({ title, description }) => {
  return (
    <Card className="bg-surface shadow-md border border-default rounded-lg p-4">
      <CardHeader>
        <CardTitle className="text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-secondary">{description}</p>
      </CardContent>
    </Card>
  )
}

export default ContentCard
