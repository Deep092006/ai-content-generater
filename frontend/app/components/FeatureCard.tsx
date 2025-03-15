import { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  iconColor: string
}

const FeatureCard = ({ icon, title, description, iconColor }: FeatureCardProps) => {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
      {/* Icon Container */}
      <div className={`mb-4 p-4 bg-gray-600 rounded-full w-12 h-12 flex items-center justify-center ${iconColor}`}>
        {icon}
      </div>
      {/* Feature Title */}
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      {/* Feature Description */}
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

export default FeatureCard