"use client"

import { useEffect, useState } from "react"
import { DesktopBlock } from "@/components/desktop-block"
import { BookHome } from "@/components/book-home"
import { BookReader } from "@/components/book-reader"

export default function Page() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isReading, setIsReading] = useState(false)

  useEffect(() => {
    // Check if device is desktop/tablet
    const checkDevice = () => {
      const width = window.innerWidth
      setIsDesktop(width >= 768) // 768px is typical tablet breakpoint
    }

    checkDevice()
    window.addEventListener("resize", checkDevice)

    return () => window.removeEventListener("resize", checkDevice)
  }, [])

  const handleStartReading = () => {
    setIsReading(true)
  }

  const handleBackToHome = () => {
    setIsReading(false)
  }

  // Show desktop block screen on larger devices
  if (isDesktop) {
    return <DesktopBlock />
  }

  // Show book reader if user is reading
  if (isReading) {
    return <BookReader onBackToHome={handleBackToHome} />
  }

  // Show home screen
  return <BookHome onStartReading={handleStartReading} />
}
