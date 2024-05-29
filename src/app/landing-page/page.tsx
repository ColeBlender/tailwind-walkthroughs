import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";

function LandingPage() {
  return (
    <div className="bg-slate-800 flex flex-col min-h-screen text-white">
      <header className="flex justify-between items-center h-24 px-8">
        <Menu className="md:hidden size-10" />
        <Link
          href="/landing-page"
          className="text-xl font-semibold hidden md:block"
        >
          TraVelook
        </Link>
        <nav className="gap-10 font-light hidden md:flex">
          <Link href="/landing-page">Home</Link>
          <Link href="/landing-page">About</Link>
          <Link href="/landing-page">Destination</Link>
          <Link href="/landing-page">Tour</Link>
          <Link href="/landing-page">Blog</Link>
        </nav>
        <Link
          href="/landing-page"
          className="bg-orange-700 px-8 py-3 rounded-xl hover:brightness-110 transition-all duration-200 ease-in-out"
        >
          Book Now
        </Link>
      </header>

      <div className="px-6 pb-8">
        <div className="max-h-[62vh] rounded-xl relative">
          <h1 className="absolute text-3xl left-1/2 -translate-x-1/2 sm:text-5xl text-center top-10 text-slate-700 font-semibold bg-white/50 backdrop-blur py-2 rounded-xl px-2 w-full max-w-[60vw]">
            We're taking action to make the earth a better place
          </h1>
          <img
            src="/landing-page-image-1.jpg"
            className=" size-full object-cover max-h-[62vh] rounded-xl"
          />

          <form className="absolute -bottom-48 md:-bottom-6 rounded-xl p-4 bg-white left-1/2 -translate-x-1/2 flex flex-col md:flex-row gap-2">
            <div className="text-black">
              <h3 className="flex items-center text-xl">
                Location <ChevronDown className="size-5 ml-2" />
              </h3>
              <input
                type="text"
                className="border-b"
                placeholder="Where are you going"
              />
            </div>
            <div className="text-black">
              <h3 className="flex items-center text-xl">
                Date <ChevronDown className="size-5 ml-2" />
              </h3>
              <input
                type="text"
                className="border-b"
                placeholder="When you will go"
              />
            </div>
            <div className="text-black">
              <h3 className="flex items-center text-xl">
                Guests <ChevronDown className="size-5 ml-2" />
              </h3>
              <input
                type="text"
                className="border-b"
                placeholder="Number of guests"
              />
            </div>
            <button className="bg-orange-700 md:w-36 py-3 rounded-xl w-full">
              Explore Now
            </button>
          </form>
        </div>

        <div className="mt-56 md:mt-20 flex flex-col items-center">
          <h4 className="text-2xl">Popular Searches</h4>

          <hr className="w-16 mb-5 mt-2" />

          <div className="flex gap-4 flex-col md:flex-row">
            <button className="border rounded-xl px-6 py-3">London</button>
            <button className="border rounded-xl px-6 py-3 bg-orange-700">
              New York
            </button>
            <button className="border rounded-xl px-6 py-3">Paris</button>
            <button className="border rounded-xl px-6 py-3">San Diego</button>
            <button className="border rounded-xl px-6 py-3">Las Vegas</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
