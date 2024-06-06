import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";

function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-800 text-white">
      <header className="flex h-24 items-center justify-between px-8">
        <Menu className="size-10 md:hidden" />
        <Link
          href="/landing-page"
          className="hidden text-xl font-semibold md:block"
        >
          TraVelook
        </Link>
        <nav className="hidden gap-10 font-light md:flex">
          <Link href="/landing-page">Home</Link>
          <Link href="/landing-page">About</Link>
          <Link href="/landing-page">Destination</Link>
          <Link href="/landing-page">Tour</Link>
          <Link href="/landing-page">Blog</Link>
        </nav>
        <Link
          href="/landing-page"
          className="rounded-xl bg-orange-700 px-8 py-3 transition-all duration-200 ease-in-out hover:brightness-110"
        >
          Book Now
        </Link>
      </header>

      <div className="px-6 pb-8">
        <div className="relative max-h-[62vh] rounded-xl">
          <h1 className="absolute left-1/2 top-10 w-full max-w-[60vw] -translate-x-1/2 rounded-xl bg-white/50 px-2 py-2 text-center text-3xl font-semibold text-slate-700 backdrop-blur sm:text-5xl">
            We're taking action to make the earth a better place
          </h1>
          <img
            src="/landing-page-image-1.jpg"
            className="size-full max-h-[62vh] rounded-xl object-cover"
          />

          <form className="absolute -bottom-48 left-1/2 flex -translate-x-1/2 flex-col gap-2 rounded-xl bg-white p-4 md:-bottom-6 md:flex-row">
            <div className="text-black">
              <h3 className="flex items-center text-xl">
                Location <ChevronDown className="ml-2 size-5" />
              </h3>
              <input
                type="text"
                className="border-b"
                placeholder="Where are you going"
              />
            </div>
            <div className="text-black">
              <h3 className="flex items-center text-xl">
                Date <ChevronDown className="ml-2 size-5" />
              </h3>
              <input
                type="text"
                className="border-b"
                placeholder="When you will go"
              />
            </div>
            <div className="text-black">
              <h3 className="flex items-center text-xl">
                Guests <ChevronDown className="ml-2 size-5" />
              </h3>
              <input
                type="text"
                className="border-b"
                placeholder="Number of guests"
              />
            </div>
            <button className="w-full rounded-xl bg-orange-700 py-3 md:w-36">
              Explore Now
            </button>
          </form>
        </div>

        <div className="mt-56 flex flex-col items-center md:mt-20">
          <h4 className="text-2xl">Popular Searches</h4>

          <hr className="mb-5 mt-2 w-16" />

          <div className="flex flex-col gap-4 md:flex-row">
            <button className="rounded-xl border px-6 py-3">London</button>
            <button className="rounded-xl border bg-orange-700 px-6 py-3">
              New York
            </button>
            <button className="rounded-xl border px-6 py-3">Paris</button>
            <button className="rounded-xl border px-6 py-3">San Diego</button>
            <button className="rounded-xl border px-6 py-3">Las Vegas</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
