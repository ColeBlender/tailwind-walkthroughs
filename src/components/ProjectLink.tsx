import Link from "next/link";
import { YouTubeIcon } from "./ui/cole-social-icons";

type Props = {
  name: string;
  youtubeLink: string | null;
  index: number;
};

function ProjectLink({ name, youtubeLink, index }: Props) {
  const projectLink = name.toLowerCase().split(" ").join("-");

  const hoverColors = [
    "hover:text-neon-green",
    "hover:text-neon-purple",
    "hover:text-neon-orange",
    "hover:text-neon-pink",
  ];

  const hoverColor = hoverColors[index % hoverColors.length];

  return (
    <div className="flex items-center gap-2">
      <Link
        href={projectLink}
        className={`underline transition-colors duration-200 ease-in-out ${hoverColor}`}
      >
        {name}
      </Link>

      {youtubeLink ? (
        <Link
          href={youtubeLink}
          target="_blank"
          className="transition-transform duration-200 ease-in-out hover:scale-105"
        >
          <YouTubeIcon className="size-6" />
        </Link>
      ) : (
        <p className="text-center text-[10px] leading-3 text-zinc-400">
          <p>Coming</p>
          <p>Soon</p>
        </p>
      )}
    </div>
  );
}

export default ProjectLink;
