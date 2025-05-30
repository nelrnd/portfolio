import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getYear() {
  const date = new Date()
  return date.getUTCFullYear()
}

// Linear interpolation
export function lerp(a: number, b: number, n: number) {
  return (1 - n) * a + n * b
}

export function distance(x1: number, y1: number, x2: number, y2: number) {
  const dx = x1 - x2
  const dy = y1 - y2
  return Math.hypot(dx, dy)
}
