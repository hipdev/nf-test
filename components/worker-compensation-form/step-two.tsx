import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import useRouter from 'next/router';

import FormWhite from 'components/ui/forms/form-white';
import InputVertical from 'components/ui/forms/input-vertical';

import updateStore from 'utils/updateStore';

const StepTwo = () => {
  const formId = '12345';

  const { state, action } = useStateMachine(updateStore);
  const { handleSubmit, errors, register } = useForm({
    defaultValues: state[formId],
  });

  const router = useRouter;

  const onSubmit = (data) => {
    action({ formId, data });
    router.push('/step-three');
  };
  return (
    <section className="max-w-full h-auto sm:h-screen  container w-full sm:w-1/2 mx-auto">
      <FormWhite onSubmit={handleSubmit(onSubmit)} back="/">
        <h3 className="mb-6 font-semibold text-lg">Tell us about your company</h3>

        <InputVertical
          label="Company name"
          inputType="text"
          name="companyName"
          register={register}
          errors={errors}
          errorMsg="Please add the company name"
          isRequired
        />

        <InputVertical
          label="What is your Federal Employer Identification Number? (FEIN)"
          inputType="text"
          name="fein"
          errors={errors}
          errorMsg="The FEIN is required"
          register={register}
          isRequired
        />

        <InputVertical label="Years in business" inputType="number" name="yearsInBusiness" register={register} />

        <InputVertical label="Number of locations" inputType="number" name="numberOfLocations" register={register} />

        <InputVertical
          label="In which states do you operate?"
          inputType="text"
          name="operationStates"
          register={register}
        />
      </FormWhite>
    </section>
  );
};

export default StepTwo;
