"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0B0B0F] text-white px-4 py-10 relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-violet-600/10 to-fuchsia-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="text-center space-y-6 relative z-10 w-full max-w-lg">
        
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(139,92,246,0.2)] animate-pulse">
          404
        </h1>

        <div className="space-y-3 px-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
            Oops! The page you are looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 px-6 sm:px-0">
            
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-xl shadow-lg shadow-violet-500/20 hover:scale-105 transition-all duration-200"
          >
            Go Back Home
          </Link>

          <Link
            href="/jobs"
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-gray-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:text-white hover:scale-105 transition-all duration-200"
          >
            Browse Jobs
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFound;