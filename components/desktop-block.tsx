export function DesktopBlock() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <div className="max-w-md w-full flex flex-col items-center gap-16">
        {/* Paper airplane image with animation */}
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-32 h-32 animate-float">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%202-1-K9jOcs4XoAT8gAKwQwHnqMyKe3uB1F.png"
                alt="Paper airplane"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        
        <style jsx global>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            25% {
              transform: translateY(-8px) rotate(-1deg);
            }
            50% {
              transform: translateY(0) rotate(0deg);
            }
            75% {
              transform: translateY(-5px) rotate(1deg);
            }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>

        {/* Message text */}
        <div className="w-full flex flex-col items-center px-8">
          <p className="text-white text-3xl leading-[1.4] font-cursive text-center" 
             style={{ fontFamily: "'Biro Script', cursive" }}>
            Bruh, this site don't
          </p>
          <p className="text-white text-3xl leading-[1.4] font-cursive text-center" 
             style={{ fontFamily: "'Biro Script', cursive" }}>
            work for pc man, please use
          </p>
          <p className="text-white text-3xl leading-[1.4] font-cursive text-center" 
             style={{ fontFamily: "'Biro Script', cursive" }}>
            a phone and reload ~ Otonte
          </p>
        </div>
      </div>
    </div>
  )
}
