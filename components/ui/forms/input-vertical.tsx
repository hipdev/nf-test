type Props = {
  inputType: string;
  label: string;
  name: string;
};

const InputVertical = ({ inputType, label, name }: Props) => {
  return (
    <label className="flex flex-col mt-4">
      <span className="font-semibold mb-2">{label}</span>
      <input className="border rounded-sm px-3 py-2 shadow-sm" type={inputType} name={name} />
    </label>
  );
};

export default InputVertical;
