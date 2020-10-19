import { ErrorMessage } from '@hookform/error-message'; // Great hook to handle custom error messages using RHF

type Props = JSX.IntrinsicElements['label'] & {
  label: string;
  subLabel?: string;
  name: string;
  value: string;
  defaultChecked?: boolean;
  register: any;
  control: any;
  errors?: {};
  errorMsg?: string;
  isRequired?: boolean;
  buttonLabel?: string;
};

const RadioInline = ({
  label,
  subLabel,
  name,
  value,
  defaultChecked,
  control,
  register,
  errors,
  errorMsg,
  isRequired,
  buttonLabel,
  ...props
}: Props) => {
  const radioControl = control.getValues()[name]; // Get the value from radio everytime is clicked
  const isChecked = radioControl == value; // Compare to each radio value to get the checked one

  return (
    <label
      {...props}
      className={
        isChecked
          ? 'inline-flex cursor-pointer  rounded-sm shadow-sm mb-3 px-5 py-3 hover:shadow-md border-blue-500 border'
          : 'inline-flex cursor-pointer border rounded-sm shadow-sm mb-3 px-5 py-3 hover:shadow-md'
      }
    >
      <input
        type="radio"
        className="form-radio mt-1 mr-4"
        name={name}
        value={value}
        ref={register({ required: isRequired ? (errorMsg ? errorMsg : 'This is required') : false })}
        defaultChecked={defaultChecked}
      />

      <div className="flex flex-col items-baseline">
        <span className="font-semibold">{label}</span>
        <span className="text-sm">{subLabel}</span>
        {buttonLabel && (
          <span className="text-xs font-semibold px-2 py-1 mt-2 bg-green-200 text-green-600 rounded-sm">
            {buttonLabel}
          </span>
        )}
      </div>
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

export default RadioInline;
