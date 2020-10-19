import PrimaryButton from '../buttons/primary-button';

type Props = {
  children: any;
};

const FormWhite = ({ children }: Props) => {
  return (
    <form className="bg-white shadow-sm rounded-sm" action="">
      <fieldset className="p-10">{children}</fieldset>

      <div className="flex bg-gray-100 py-5 justify-end px-10">
        <PrimaryButton text="Next" type="submit" />
      </div>
    </form>
  );
};

export default FormWhite;
