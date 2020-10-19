import { ErrorMessage } from '@hookform/error-message'; // Great hook to handle custom error messages using RHF

type Props = JSX.IntrinsicElements['label'] & {
  label: string;
  name: string;
  register: any;
  errors?: {};
  errorMsg?: string;
  isRequired?: boolean;
};

// Here Im using a Tailwind Plugin called tailwindcss-custom-forms, that the form-checkbox className
// Docs https://tailwindcss-custom-forms.netlify.app/

const CheckboxInline = ({ label, name, register, errors, errorMsg, isRequired, ...props }: Props) => {
  return (
    <label className="inline-flex items-center mt-2 cursor-pointer" {...props}>
      <input
        type="checkbox"
        name={name}
        className="form-checkbox h-5 w-5 cursor-pointer"
        ref={register({ required: isRequired ? (errorMsg ? errorMsg : 'This is required') : false })}
      />
      <span className="ml-3 text-md">{label}</span>
      {errors && (
        <ErrorMessage
          render={({ message }) => <span className="text-right text-sm">{message}</span>}
          errors={errors}
          name={name}
        />
      )}
    </label>
  );
};

export default CheckboxInline;
