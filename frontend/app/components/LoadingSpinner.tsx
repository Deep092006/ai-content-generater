import { Loader2 } from "lucide-react"

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      {/* Loader2 Icon - Spinning Animation */}
      <Loader2 className="w-5 h-5 animate-spin" />
    </div>
  )
}

export default LoadingSpinner