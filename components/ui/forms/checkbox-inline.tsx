type Props = JSX.IntrinsicElements['label'] & {
  label: string;
  name: string;
};

// Here Im using a Tailwind Plugin called tailwindcss-custom-forms, that the form-checkbox className
// Docs https://tailwindcss-custom-forms.netlify.app/

const CheckboxInline = ({ label, name, ...props }: Props) => {
  return (
    <label className="inline-flex items-center mt-2 cursor-pointer" {...props}>
      <input type="checkbox" name={name} className="form-checkbox h-5 w-5 cursor-pointer" />
      <span className="ml-3 text-md">{label}</span>
    </label>
  );
};

export default CheckboxInline;
