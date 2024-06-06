type Props = {
  tag: string;
  index: number;
};

function Tag({ tag, index }: Props) {
  return (
    <div
      className={`flex h-10 items-center rounded-full border border-gray-400 px-4 ${
        index === 0 && "bg-yellow-500"
      }`}
    >
      {tag}
    </div>
  );
}

export default Tag;
