import Link from "next/link";
import { YouTubeIcon } from "./ui/cole-social-icons";

type Props = {
  name: string;
  youtubeLink: string | null;
};

function ProjectLink({ name, youtubeLink }: Props) {
  const projectLink = name.toLowerCase().split(" ").join("-");

  return (
    <div className="flex items-center gap-2">
      <Link href={projectLink} className="underline">
        {name}
      </Link>

      {youtubeLink ? (
        <Link href={youtubeLink} target="_blank">
          <YouTubeIcon className="size-6" />
        </Link>
      ) : (
        <p className="text-[10px] text-center leading-3 text-zinc-400">
          <p>Coming</p>
          <p>Soon</p>
        </p>
      )}
    </div>
  );
}

export default ProjectLink;
