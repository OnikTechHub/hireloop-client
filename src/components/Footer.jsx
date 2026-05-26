import Link from "next/link";
import {
  LogoFacebook,
  LogoLinkedin,
  LogoGithub,
} from "@gravity-ui/icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B0B0F] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* TOP SECTION */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* LEFT: BRAND & SOCIALS */}
          <div className="space-y-6">
            {/* Navbar */}
            <Link href="/" className="flex items-center gap-3 select-none">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 shadow-lg shadow-violet-500/10">
                <span className="text-xl font-bold text-white">P</span>
              </div>
              <div className="flex flex-col leading-tight font-bold">
                <div className="text-[15px] text-zinc-100 tracking-wide font-extrabold">Hire Loop</div>
                
              </div>
            </Link>

            {/* Description */}
            <p className="max-w-xs text-sm leading-7 text-gray-400">
              The AI-native career platform. Built for people who take
              their work seriously.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-500 hover:text-white hover:border-transparent hover:shadow-md hover:shadow-violet-500/20"
              >
                <LogoFacebook className="h-5 w-5" />
              </Link>

              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-500 hover:text-white hover:border-transparent hover:shadow-md hover:shadow-violet-500/20"
              >
                <LogoGithub className="h-5 w-5" />
              </Link>

              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-500 hover:text-white hover:border-transparent hover:shadow-md hover:shadow-violet-500/20"
              >
                <LogoLinkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* PRODUCT */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-violet-400">
              Product
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="/jobs" className="transition duration-200 hover:text-white">
                  Job discovery
                </Link>
              </li>
              <li>
                <Link href="/worker-ai" className="transition duration-200 hover:text-white">
                  Worker AI
                </Link>
              </li>
              <li>
                <Link href="/companies" className="transition duration-200 hover:text-white">
                  Companies
                </Link>
              </li>
              <li>
                <Link href="/salary" className="transition duration-200 hover:text-white">
                  Salary data
                </Link>
              </li>
            </ul>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-violet-400">
              Navigations
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="/help-center" className="transition duration-200 hover:text-white">
                  Help center
                </Link>
              </li>
              <li>
                <Link href="/career-library" className="transition duration-200 hover:text-white">
                  Career library
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition duration-200 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-violet-400">
              Resources
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="/brand-guideline" className="transition duration-200 hover:text-white">
                  Brand Guideline
                </Link>
              </li>
              <li>
                <Link href="/newsroom" className="transition duration-200 hover:text-white">
                  Newsroom
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-gray-500 md:flex-row">
          <p>Copyright {new Date().getFullYear()} — Hire Loop</p>

          <div className="flex items-center gap-6">
            <Link href="/terms" className="transition duration-200 hover:text-gray-300">
              Terms & Policy
            </Link>
            <Link href="/privacy" className="transition duration-200 hover:text-gray-300">
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}