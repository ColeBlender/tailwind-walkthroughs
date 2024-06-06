type Props = {
  type: "Location" | "Check In" | "Return" | "Travelers";
};

function Input({ type }: Props) {
  return (
    <div className="rounded-xl border p-4 shadow-md">
      <p className="text-sm text-gray-400">{type}</p>
      <input type="text" className="mt-2 w-full border-b font-bold" />
    </div>
  );
}

export default Input;
