type Props = {
  type: "Location" | "Check In" | "Return" | "Travelers";
};

function Input({ type }: Props) {
  return (
    <div className="rounded-xl p-4 border shadow-md">
      <p className="text-gray-400 text-sm">{type}</p>
      <input type="text" className="border-b w-full font-bold mt-2" />
    </div>
  );
}

export default Input;
