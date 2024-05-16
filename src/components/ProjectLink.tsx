import Link from "next/link";
import { YouTubeIcon } from "./ui/cole-social-icons";

type Props = {
  name: string;
  youtubeLink: string;
};

function ProjectLink({ name, youtubeLink }: Props) {
  const projectLink = name.toLowerCase().replace(" ", "-");

  return (
    <div className="flex items-center gap-2">
      <Link href={projectLink} className="underline">
        {name}
      </Link>

      <Link href={youtubeLink} target="_blank">
        <YouTubeIcon className="size-6" />
      </Link>
    </div>
  );
}

export default ProjectLink;
