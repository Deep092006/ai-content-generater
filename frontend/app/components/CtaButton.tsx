import Link from "next/link"

interface CtaButtonProps {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary"
}

const CtaButton = ({ href, children, variant = "primary" }: CtaButtonProps) => {
  // Define primary button styles
  const primaryClasses = "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
  // Define secondary button styles
  const secondaryClasses = "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"

  return (
    <Link href={href}>
      <button className={`px-6 py-3 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all ${variant === "primary" ? primaryClasses : secondaryClasses}`}>
        {children}
      </button>
    </Link>
  )
}

export default CtaButton