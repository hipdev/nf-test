import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';

import FormWhite from 'components/ui/forms/form-white';
import RadioInline from 'components/ui/forms/radio-inline';

import updateStore from 'utils/updateStore';

const StepThree = () => {
  const formId = '12345';
  const { state, action } = useStateMachine(updateStore);
  const [log, setLog] = useState(false);

  const { handleSubmit, register, control, watch } = useForm({
    defaultValues: state[formId],
  });

  watch('willPayNewfront'); //to make the border blue detail
  const onSubmit = (data) => {
    action({ formId, data });
    setLog(true);
  };

  return (
    <section className="max-w-full h-auto min-h-screen  container w-full sm:w-1/2 mx-auto pb-10">
      <FormWhite onSubmit={handleSubmit(onSubmit)} back="/step-three" finish>
        <h3 className="mb-6 font-semibold text-lg">How do you want to pay for your policy?</h3>

        <RadioInline
          name="willPayNewfront"
          value="Yes"
          label="I want to pay Newfront"
          subLabel="You'll pay Newfront instead of paying each insurance company separately. There are no fees"
          register={register}
          control={control}
          defaultChecked
          buttonLabel="RECOMMENDED"
        />
        <RadioInline
          name="willPayNewfront"
          value="No"
          label="I want to pay the insurance company directly"
          subLabel="You'll receive bills from the insurance company and it will be your resonsibility to make sure they are paid to keep your coverage"
          register={register}
          control={control}
        />
      </FormWhite>

      {log && (
        <div className="bg-white mt-10 p-10 shadow-sm">
          <pre>{JSON.stringify(state[formId], undefined, 2)}</pre>
        </div>
      )}
    </section>
  );
};

export default StepThree;
