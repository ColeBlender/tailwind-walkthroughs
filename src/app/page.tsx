import ProjectLink from "@/components/ProjectLink";
import {
  GitHubIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/ui/cole-social-icons";
import { links } from "@/lib/constants";
import { projects } from "@/projects";
import Link from "next/link";

function HomePage() {
  const totalFinishedProjects = projects.reduce(
    (total, project) => total + +!!project.youtubeLink,
    0,
  );
  const totalComingSoonVideos = projects.length - totalFinishedProjects;

  const messages = [
    "Thank You for Watching 🤩",
    "Subscribe to Me on youTubeProfile",
    `${totalFinishedProjects} Released Videos and Counting 🚀`,
    "Follow Me on x",
    `${totalComingSoonVideos || "More"} Video${totalComingSoonVideos !== 1 ? "s" : ""} Coming Soon 🎥`,
    "Follow Me on gitHubProfile",
  ];

  return (
    <main className="min-h-screen bg-black pt-16 text-white">
      <h1 className="text-center text-4xl font-bold">Tailwind Walkthroughs </h1>

      <div className="mt-6 flex items-center justify-center gap-2">
        <p className="text-center text-lg">By: Cole Blender</p>

        <img src="/prof-pic.png" className="size-7 rounded-full" />
      </div>

      <div className="mt-2 flex justify-center gap-6">
        <Link
          href={links.youTube}
          target="_blank"
          className="transition-transform duration-200 ease-in-out hover:scale-105"
        >
          <YouTubeIcon className="size-6" />
        </Link>
        <Link
          href={links.x}
          target="_blank"
          className="transition-transform duration-200 ease-in-out hover:scale-105"
        >
          <XIcon className="size-6" />
        </Link>
        <Link
          href={links.gitHub}
          target="_blank"
          className="transition-transform duration-200 ease-in-out hover:scale-105"
        >
          <GitHubIcon className="size-6" />
        </Link>
      </div>

      <div className="mt-6 flex overflow-hidden border-y border-zinc-700 bg-zinc-900">
        <ul className="animate-home-scroll hover:animate-home-scroll-slow flex gap-10 whitespace-nowrap py-4 text-white">
          {[...messages, ...messages, ...messages, ...messages].map(
            (message, index) => {
              const hoverColors = [
                "hover:text-neon-green",
                "hover:text-neon-purple",
                "hover:text-neon-orange",
                "hover:text-neon-pink",
              ];

              const hoverColor = hoverColors[index % hoverColors.length];

              const isLink =
                message.includes("Follow Me") || message.includes("Subscribe");

              const className = `gap-2 text-zinc-400 transition-colors duration-200 ease-in-out ${hoverColor}`;

              if (isLink) {
                const splitMessage = message.split(" ");
                const link = splitMessage[splitMessage.length - 1] as
                  | "youTubeProfile"
                  | "x"
                  | "gitHubProfile";

                return (
                  <li key={message} className={className}>
                    <Link
                      href={links[link]}
                      target="_blank"
                      className="flex items-center gap-2"
                    >
                      <p>{splitMessage.slice(0, -1).join(" ")}</p>
                      {link === "youTubeProfile" ? (
                        <YouTubeIcon className="size-5" />
                      ) : link === "x" ? (
                        <XIcon className="size-5 text-white" />
                      ) : (
                        <GitHubIcon className="size-5 text-white" />
                      )}
                    </Link>
                  </li>
                );
              } else {
                return (
                  <li key={message} className={className}>
                    <p>{message}</p>
                  </li>
                );
              }
            },
          )}
        </ul>
      </div>

      <div className="mt-10 flex flex-col items-center gap-2">
        {projects.map((project, index) => (
          <ProjectLink
            key={project.name}
            name={project.name}
            youtubeLink={project.youtubeLink}
            index={index}
          />
        ))}
      </div>
    </main>
  );
}

export default HomePage;
