import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import useRouter from 'next/router';

import FormWhite from 'components/ui/forms/form-white';
import InputVertical from 'components/ui/forms/input-vertical';
import CheckboxInline from 'components/ui/forms/checkbox-inline';

import updateStore from 'utils/updateStore';

const StepThree = () => {
  const formId = '12345';
  const { state, action } = useStateMachine(updateStore);

  const { handleSubmit, errors, register, watch } = useForm({
    defaultValues: state[formId],
  });

  const router = useRouter;
  const watchPaidVacation = watch('hasPaidVacation', false);

  const onSubmit = (data) => {
    action({ formId, data });
    router.push('/step-four');
  };

  return (
    <section className="max-w-full h-auto sm:h-screen  container w-full sm:w-1/2 mx-auto">
      <FormWhite onSubmit={handleSubmit(onSubmit)} back="/step-two">
        <h3 className="mb-6 font-semibold text-lg">Tell us about your employees</h3>

        <InputVertical
          label="What's the name of the clinic, physician, or ER used for work injuries?"
          inputType="text"
          name="providerName"
          register={register}
          errors={errors}
          errorMsg="Please add the clinic, phsician or ER name"
          isRequired
        />

        <CheckboxInline
          style={{ marginTop: '20px' }}
          label="Do you provide group medical insurance?"
          name="hasMedicalInsurance"
          register={register}
        />
        <CheckboxInline
          label="Do you offer a retirement or pension plan?"
          name="hasGroupMedicalInsurance"
          register={register}
        />
        <CheckboxInline label="Do you give paid vacation?" name="hasPaidVacation" register={register} />

        {(watchPaidVacation || state[formId]?.hasPaidVacation) && (
          <InputVertical
            label="Please provide details about the paid vacation"
            inputType="text"
            name="detailsPaidVacation"
            errors={errors}
            errorMsg="The details are required"
            register={register}
            isRequired
          />
        )}
      </FormWhite>
    </section>
  );
};

export default StepThree;
