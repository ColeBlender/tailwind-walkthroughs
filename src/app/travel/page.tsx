import {
  ChevronRight,
  FlagIcon,
  HomeIcon,
  Loader,
  Menu,
  MoveRight,
  Star,
} from "lucide-react";
import Tag from "./components/Tag";
import Input from "./components/Input";

function TravelPage() {
  const tags = [
    "Travel Stories",
    "Vacation Rentals",
    "Things to Do",
    "Hotels",
    "Restaurants",
    "More",
  ];

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="flex h-24 w-full items-center justify-between px-4 md:px-8">
        <Menu className="size-10 sm:hidden" />
        <nav className="hidden gap-12 sm:flex">
          <button className="text-start text-2xl font-semibold leading-5 text-emerald-700">
            <p>trip</p>
            <p>mate</p>
          </button>
          <button>Review</button>
          <button>Trips</button>
          <button>Alerts</button>
          <button>Contact Us</button>
        </nav>

        <button className="h-10 w-28 rounded-full bg-emerald-700 text-white">
          Sign Up
        </button>
      </header>

      <main className="flex w-full flex-1 flex-col items-center">
        <div className="flex w-full flex-1">
          <div className="flex flex-1 flex-col px-4 py-12">
            <h1 className="text-6xl font-semibold">
              Explore the <p>horizon with us</p>
            </h1>

            <div className="mt-20">
              <p className="text-lg font-semibold">What are you looking for?</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Tag key={tag} tag={tag} index={index} />
                ))}
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <Input type="Location" />
                <Input type="Check In" />
                <Input type="Return" />
                <Input type="Travelers" />
              </div>
            </div>

            <button className="mt-4 h-10 w-full rounded-full bg-emerald-700 text-white shadow-sm">
              Explore Now
            </button>

            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Star />
                <p>900K+ reviews on Trust Pilot</p>
                <ChevronRight />
              </div>
              <div className="flex items-center gap-4">
                <MoveRight />
                <FlagIcon />
                <Loader />
                <HomeIcon />
              </div>
            </div>
          </div>

          <div className="hidden flex-1 lg:block">
            <img src="/travel-image-1.jpg" className="size-full object-cover" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default TravelPage;
