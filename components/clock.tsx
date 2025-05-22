"use client"

import { useEffect, useState } from "react"

function getTime(timezone: string) {
  const date = new Date()
    .toLocaleString("en-US", { timeZone: timezone })
    .split(", ")[1]
  return date.split(":").slice(0, 2).join(":") + " " + date.slice(-2)
}

export default function Clock({ timezone }: { timezone: string }) {
  const [time, setTime] = useState(getTime(timezone))

  useEffect(() => {
    let interval = setInterval(() => {
      const time = getTime(timezone)
      setTime(time)
    }, 1000)

    return () => clearInterval(interval)
  })

  return time
}
