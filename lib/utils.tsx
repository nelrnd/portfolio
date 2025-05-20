import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getYear() {
  const date = new Date()
  return date.getUTCFullYear()
}

export function formatText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g)

  // Map each part to either regular text or a <strong> element
  return parts.map((part, index) => {
    // Check if the part is bold (surrounded by **)
    if (part.startsWith("**") && part.endsWith("**")) {
      // Extract the text without the ** markers
      const boldText = part.slice(2, -2)
      return (
        <strong className="font-bold" key={index}>
          {boldText}
        </strong>
      )
    }
    // Return regular text
    return part ? <span key={index}>{part}</span> : null
  })
}
