
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-[#0B0B0F] text-white px-6 relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] bg-gradient-to-br from-violet-600/10 to-fuchsia-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="text-center space-y-6 relative z-10 max-w-md">
        
        
        <h1 className="text-8xl sm:text-9xl font-black tracking-extrawide bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(139,92,246,0.2)] animate-pulse">
          404
        </h1>


        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Oops! The page you are looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
        </div>


        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-xl shadow-md shadow-violet-500/20 hover:opacity-90 transition-all duration-200 text-center"
          >
            Go Back Home
          </Link>


          <Link
            href="/jobs"
            className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-gray-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:text-white transition-all duration-200 text-center"
          >
            Browse Jobs
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFound;