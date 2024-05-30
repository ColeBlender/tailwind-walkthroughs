import ProjectLink from "@/components/ProjectLink";
import {
  GitHubIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/ui/cole-social-icons";
import Link from "next/link";

function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 bg-black text-white">
      <div className="mt-16 w-full max-w-4xl flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center">
          Tailwind Walkthroughs
        </h1>

        <div className="w-full mt-6">
          <div className="flex justify-center items-center gap-2">
            <p className="text-center text-lg">By: Cole Blender</p>

            <img src="/prof-pic.png" className="rounded-full size-7" />
          </div>

          <div className="flex gap-6 w-full justify-center mt-2">
            <Link
              href="https://www.youtube.com/playlist?list=PLUyHhQn1KLAXK4qY0YIjGQPA5DI2zPWd6"
              target="_blank"
            >
              <YouTubeIcon className="size-6" />
            </Link>
            <Link href="https://twitter.com/coleblender" target="_blank">
              <XIcon className="size-6" />
            </Link>
            <Link
              href="https://github.com/ColeBlender/tailwind-walkthroughs"
              target="_blank"
            >
              <GitHubIcon className="size-6" />
            </Link>
          </div>
        </div>

        <hr className="border-muted-foreground w-full my-10" />

        <div className="flex flex-col gap-1 items-center">
          {projects.map((project) => (
            <ProjectLink
              key={project.name}
              name={project.name}
              youtubeLink={project.youtubeLink}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default HomePage;

const projects = [
  {
    name: "Article",
    youtubeLink:
      "https://www.youtube.com/watch?v=il5hpERJUjo&list=PLUyHhQn1KLAXK4qY0YIjGQPA5DI2zPWd6&index=1",
  },
  {
    name: "Login",
    youtubeLink:
      "https://www.youtube.com/watch?v=dt144O8BkT4&list=PLUyHhQn1KLAXK4qY0YIjGQPA5DI2zPWd6&index=2",
  },
  {
    name: "Travel",
    youtubeLink:
      "https://www.youtube.com/watch?v=EWtaRfOiUZs&list=PLUyHhQn1KLAXK4qY0YIjGQPA5DI2zPWd6&index=3",
  },
  {
    name: "Landing Page",
    youtubeLink:
      "https://www.youtube.com/watch?v=Bj2qvWDeYdw&list=PLUyHhQn1KLAXK4qY0YIjGQPA5DI2zPWd6&index=4",
  },
];
