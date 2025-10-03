"use client"

import { useEffect, useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast, Toaster } from "sonner"
import Link from "next/link"

interface DiaryEntry {
  filename: string
  title: string
  content: string
  day: number
  displayLabel: string
}

export default function DiaryPage() {
  const [entries, setEntries] = useState<DiaryEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedEntry, setSelectedEntry] = useState<DiaryEntry | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    fetch('/api/diary')
      .then(res => res.json())
      .then(data => {
        setEntries(data.entries || [])
        setLoading(false)
      })
      .catch(error => {
        console.error('Error loading diary entries:', error)
        setLoading(false)
      })
  }, [])

  const goToNextEntry = () => {
    if (currentIndex < entries.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setSelectedEntry(entries[currentIndex + 1])
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const goToPrevEntry = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setSelectedEntry(entries[currentIndex - 1])
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl font-mono" style={{ fontFamily: 'Consola, monospace' }}>
          Loading diary...
        </div>
      </div>
    )
  }

  if (selectedEntry) {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        {/* Header with back button */}
        <div className="p-4 flex items-center gap-4">
          <Button 
            onClick={() => {
              setSelectedEntry(null)
              setCurrentIndex(0)
            }} 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 pb-24">
          <div className="max-w-md mx-auto space-y-6">
            <p className="text-[#9acd32] text-xl text-center font-mono" style={{ fontFamily: 'Consola, monospace' }}>
              {selectedEntry.displayLabel === 'Preface' ? 'Preface' : `${selectedEntry.displayLabel} ${selectedEntry.day}`}
            </p>

            <h1 
              className="text-white text-4xl text-center leading-tight" 
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              {selectedEntry.title}
            </h1>

            <div 
              className="text-white text-base leading-relaxed whitespace-pre-line"
              style={{ fontFamily: '"Biro Script", cursive' }}
            >
              {selectedEntry.content}
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black to-transparent">
          <div className="max-w-md mx-auto flex gap-4">
            <Button
              onClick={goToPrevEntry}
              disabled={currentIndex === 0}
              className="flex-1 bg-white hover:bg-gray-100 text-black py-6 rounded-xl font-mono disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontFamily: 'Consola, monospace' }}
            >
              Previous day
            </Button>
            <Button
              onClick={() => {
                if (currentIndex < entries.length - 1) {
                  goToNextEntry();
                } else {
                  toast("There is no next day. Maybe this nigga will upload later.", {
                    duration: 3000,
                    style: {
                      background: '#1a1a1a',
                      color: '#fff',
                      border: '1px solid #333',
                      borderRadius: '0.5rem',
                      fontFamily: '"Instrument Serif", serif',
                      fontSize: '1rem',
                      padding: '0.75rem 1rem',
                    },
                  });
                }
              }}
              className="flex-1 bg-white hover:bg-gray-100 text-black py-6 rounded-xl font-mono disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ 
                fontFamily: 'Consola, monospace',
                opacity: currentIndex === entries.length - 1 ? 0.5 : 1,
                cursor: currentIndex === entries.length - 1 ? 'not-allowed' : 'pointer'
              }}
            >
              Next day
            </Button>
          </div>
        </div>
        <Toaster position="bottom-center" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      <div className="p-4 flex items-center gap-4">
        <Link href="/">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <ArrowLeft className="w-6 h-6" />
          </Button>
        </Link>
        <span className="text-white/60 text-sm font-mono" style={{ fontFamily: 'Consola, monospace' }}>
          Diary entries
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-md mx-auto space-y-6">
          <h1 
            className="text-white text-[81px] leading-[0.9] text-center mb-12" 
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            My Diary
          </h1>

          {entries.length === 0 ? (
            <div className="text-center">
              <p className="text-white/60 text-lg font-mono" style={{ fontFamily: 'Consola, monospace' }}>
                No diary entries yet. Start writing!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {entries.map((entry, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedEntry(entry)
                    setCurrentIndex(index)
                  }}
                  className="w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 transition-all text-left"
                >
                  <p className="text-[#9acd32] text-sm font-mono mb-2" style={{ fontFamily: 'Consola, monospace' }}>
                    {entry.displayLabel === 'Preface' ? 'Preface' : `${entry.displayLabel} ${entry.day}`}
                  </p>
                  <h2 
                    className="text-white text-2xl leading-tight" 
                    style={{ fontFamily: '"Instrument Serif", serif' }}
                  >
                    {entry.title}
                  </h2>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
