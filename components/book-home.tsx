"use client"

import { Button } from "@/components/ui/button";
import Head from 'next/head';
import Link from 'next/link';

interface BookHomeProps {
  onStartReading: () => void
}

export function BookHome({ onStartReading }: BookHomeProps) {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
      <Head>
        <style jsx global>{`
          @font-face {
            font-family: 'Instrument Serif';
            src: url('/fonts/InstrumentSerif-Regular.ttf') format('truetype');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
        `}</style>
      </Head>
      <div className="max-w-md w-full flex flex-col items-center gap-8 overflow-hidden">
        {/* Disclaimer */}
        <p className="text-white text-lg text-center font-cursive">
          I want you to know this book is purely fictional ~ Otonte
        </p>
        
        {/* Title */}
        <div className="text-center mt-12">
          <h1 className="text-white text-[81px] leading-[0.9] tracking-tight" style={{ fontFamily: '"Instrument Serif", serif' }}>
            A breakfast club situation
          </h1>
        </div>

        <div className="relative w-full">
          <div className="w-[80%] aspect-[4/3] overflow-visible ml-auto">
            <div className="w-full h-full relative left-[10%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%202-QIT0b8WNSIsd0Wfn0eX8oqK8t6MTZo.png"
                alt="Breakfast plate with eggs and notes"
                className="w-full h-full object-contain object-right"
              />
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-[#9acd32] text-2xl text-center font-cursive">A college diary story</p>

        {/* Start button */}
        <Link href="/diary" className="w-full">
          <Button
            className="w-full bg-white hover:bg-gray-100 text-black text-lg py-6 rounded-xl font-medium mt-4 font-mono" style={{ fontFamily: 'Consola, monospace' }}
          >
            Start reading
          </Button>
        </Link>
      </div>
    </div>
  )
}
