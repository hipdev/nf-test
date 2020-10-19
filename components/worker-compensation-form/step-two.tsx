import useRouter from 'next/router';
import FormWhite from 'components/ui/forms/form-white';
import InputVertical from 'components/ui/forms/input-vertical';

const StepTwo = () => {
  const router = useRouter;

  const onSubmit = (e) => {
    e.preventDefault();
    router.push('/step-three');
  };
  return (
    <section className="max-w-full h-auto sm:h-screen  container w-full sm:w-1/2 mx-auto">
      <FormWhite onSubmit={onSubmit} back="/">
        <h3 className="mb-6 font-semibold text-lg">Tell us about your company</h3>

        <InputVertical label="Company name" inputType="text" name="companyName" />

        <InputVertical
          label="What is your Federal Employer Identification Number? (FEIN)"
          inputType="text"
          name="fein"
        />

        <InputVertical label="Years in business" inputType="number" name="yearsInBusiness" />

        <InputVertical label="Number of locations" inputType="number" name="numberOfLocations" />

        <InputVertical label="In which states do you operate?" inputType="text" name="operationStates" />
      </FormWhite>
    </section>
  );
};

export default StepTwo;
