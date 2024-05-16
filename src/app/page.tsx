import ProjectLink from "@/components/ProjectLink";
import {
  GitHubIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/ui/cole-social-icons";
import Link from "next/link";

function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4">
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
            <Link href="https://www.youtube.com/@coleblender" target="_blank">
              <YouTubeIcon className="size-6" />
            </Link>
            <Link href="https://twitter.com/coleblender" target="_blank">
              <XIcon className="size-6" />
            </Link>
            <Link href="https://github.com/coleblender" target="_blank">
              <GitHubIcon className="size-6" />
            </Link>
          </div>
        </div>

        <hr className="border-muted-foreground w-full my-10" />

        <div className="flex flex-col gap-1">
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
    name: "Dashboard",
    youtubeLink: "https://www.youtube.com/@coleblender",
  },
];
