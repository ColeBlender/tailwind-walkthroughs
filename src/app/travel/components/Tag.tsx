type Props = {
  tag: string;
  index: number;
};

function Tag({ tag, index }: Props) {
  return (
    <div
      className={`border-gray-400 border rounded-full px-4 h-10 flex items-center ${
        index === 0 && "bg-yellow-500"
      }`}
    >
      {tag}
    </div>
  );
}

export default Tag;
