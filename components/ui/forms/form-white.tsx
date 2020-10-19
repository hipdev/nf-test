import Link from 'next/link';
import PrimaryButton from '../buttons/primary-button';
import SecondaryButton from '../buttons/secondary-button';

type Props = {
  children: any;
  back?: string;
  onSubmit: any;
};

const FormWhite = ({ children, back, onSubmit }: Props) => {
  return (
    <form onSubmit={onSubmit} className="bg-white shadow-sm rounded-sm">
      <fieldset className="p-10">{children}</fieldset>

      {back ? (
        <div className="flex bg-gray-100 py-5 justify-between px-10">
          <Link href={back}>
            <a>
              <SecondaryButton text="Back" type="button" />
            </a>
          </Link>
          <PrimaryButton text="Next" type="submit" />
        </div>
      ) : (
        <div className="flex bg-gray-100 py-5 justify-end px-10">
          <PrimaryButton text="Next" type="submit" />
        </div>
      )}
    </form>
  );
};

export default FormWhite;
