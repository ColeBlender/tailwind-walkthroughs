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
    <div className="flex flex-col w-full min-h-screen">
      <header className="w-full h-24 flex items-center justify-between px-4 md:px-8">
        <Menu className="sm:hidden size-10" />
        <nav className="gap-12 hidden sm:flex">
          <button className="text-emerald-700 leading-5 text-2xl font-semibold text-start">
            <p>trip</p>
            <p>mate</p>
          </button>
          <button>Review</button>
          <button>Trips</button>
          <button>Alerts</button>
          <button>Contact Us</button>
        </nav>

        <button className="bg-emerald-700 text-white h-10 w-28 rounded-full">
          Sign Up
        </button>
      </header>

      <main className="flex flex-col items-center flex-1 w-full">
        <div className="flex w-full flex-1 max-w-7xl">
          <div className="flex-1 px-4 py-12 flex flex-col">
            <h1 className="text-6xl font-semibold">
              Explore the <p>horizon with us</p>
            </h1>

            <div className="mt-20">
              <p className="text-lg font-semibold">What are you looking for?</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Tag tag={tag} index={index} />
                ))}
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <Input type="Location" />
                <Input type="Check In" />
                <Input type="Return" />
                <Input type="Travelers" />
              </div>
            </div>

            <button className="bg-emerald-700 w-full text-white rounded-full mt-4 h-10 shadow-sm">
              Explore Now
            </button>

            <div className="flex items-center justify-between mt-auto">
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

          <div className="flex-1 hidden lg:block">
            <img src="/travel-image-1.jpg" className="size-full object-cover" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default TravelPage;
