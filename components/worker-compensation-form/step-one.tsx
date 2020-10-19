import useRouter from 'next/router';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import FormWhite from 'components/ui/forms/form-white';
import InputVertical from 'components/ui/forms/input-vertical';
import updateStore from 'utils/updateStore';

const StepOne = () => {
  const formId = '12345';
  const { state, action } = useStateMachine(updateStore);
  const router = useRouter;

  const { handleSubmit, errors, register } = useForm({
    defaultValues: state[formId],
  });

  const onSubmit = (data) => {
    action({ formId, data });
    router.push('/step-two');
  };
  return (
    <section className="max-w-full h-auto sm:h-screen  container w-full sm:w-1/2 mx-auto">
      <FormWhite onSubmit={handleSubmit(onSubmit)}>
        <h3 className="mb-2 font-semibold text-lg">Who is the primary contact for this policy?</h3>
        <p className="text-sm text-gray-700 mb-5">
          This person will receive all communications from Newfront about this policy. You can change this contact
          information later. If you're not sure, just add your contact information.
        </p>

        <InputVertical
          label="Full name"
          inputType="text"
          name="fullName"
          register={register}
          errors={errors}
          errorMsg="Please add the Full name"
          isRequired
        />
        <InputVertical label="Role" inputType="text" name="role" register={register} />
        <InputVertical
          label="Phone number"
          inputType="text"
          name="phoneNumber"
          errors={errors}
          errorMsg="Phone number is required"
          register={register}
          isRequired
        />
      </FormWhite>
    </section>
  );
};

export default StepOne;
