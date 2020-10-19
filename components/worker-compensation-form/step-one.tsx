import useRouter from 'next/router';
import FormWhite from 'components/ui/forms/form-white';
import InputVertical from 'components/ui/forms/input-vertical';

const StepOne = () => {
  const router = useRouter;

  const onSubmit = (e) => {
    e.preventDefault();
    router.push('/step-two');
  };
  return (
    <section className="max-w-full h-auto sm:h-screen  container w-full sm:w-1/2 mx-auto">
      <FormWhite onSubmit={onSubmit}>
        <h3 className="mb-2 font-semibold text-lg">Who is the primary contact for this policy?</h3>
        <p className="text-sm text-gray-700 mb-5">
          This person will receive all communications from Newfront about this policy. You can change this contact
          information later. If you're not sure, just add your contact information.
        </p>

        <InputVertical label="Full name" inputType="text" name="fullName" />
        <InputVertical label="Role" inputType="text" name="role" />
        <InputVertical label="Phone number" inputType="text" name="phoneNumber" />
      </FormWhite>
    </section>
  );
};

export default StepOne;
