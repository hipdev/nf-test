import { ErrorMessage } from '@hookform/error-message';

type Props = {
  inputType: string;
  label: string;
  name: string;
  register: any;
  errors?: {};
  errorMsg?: string;
  isRequired?: boolean;
};

const InputVertical = ({ inputType, label, name, register, errors, errorMsg, isRequired }: Props) => {
  return (
    <label className="flex flex-col mt-4">
      <span className="font-semibold mb-2">{label}</span>
      <input
        className="border rounded-sm px-3 py-2 shadow-sm"
        type={inputType}
        name={name}
        ref={register({ required: isRequired ? (errorMsg ? errorMsg : 'This is required') : false })}
      />
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

export default InputVertical;
