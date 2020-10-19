type Props = JSX.IntrinsicElements['label'] & {
  label: string;
  subLabel?: string;
  name: string;
  value: string;
};

const RadioInline = ({ label, subLabel, name, value, ...props }: Props) => {
  return (
    <label {...props} className="inline-flex cursor-pointer border rounded-sm shadow-sm mb-3 px-5 py-3 hover:shadow-md">
      <input type="radio" className="form-radio mt-1 mr-4" name={name} value={value} />

      <div className="flex flex-col">
        <span className="font-semibold">{label}</span>
        <span className="text-sm">{subLabel}</span>
      </div>
    </label>
  );
};

export default RadioInline;
