import FormWhite from 'components/ui/forms/form-white';
import InputVertical from 'components/ui/forms/input-vertical';

import useRouter from 'next/router';
import CheckboxInline from 'components/ui/forms/checkbox-inline';
const StepThree = () => {
  const router = useRouter;

  const onSubmit = (e) => {
    e.preventDefault();
    router.push('/step-four');
  };

  return (
    <section className="max-w-full h-auto sm:h-screen  container w-full sm:w-1/2 mx-auto">
      <FormWhite onSubmit={onSubmit} back="/step-two">
        <h3 className="mb-6 font-semibold text-lg">Tell us about your employees</h3>

        <InputVertical
          label="What's the name of the clinic, physician, or ER used for work injuries?"
          inputType="text"
          name="companyName"
        />

        <CheckboxInline
          style={{ marginTop: '20px' }}
          label="Do you provide group medical insurance?"
          name="isMedicalInsurance"
        />
        <CheckboxInline label="Do you offer a retirement or pension plan?" name="isGroupMedicalInsurance" />
        <CheckboxInline label="Do you give paid vacation?" name="isPaidVacation" />

        <InputVertical
          label="Please provide details about the paid vacation"
          inputType="text"
          name="detailsPaidVacation"
        />
      </FormWhite>
    </section>
  );
};

export default StepThree;
