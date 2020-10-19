import FormWhite from 'components/ui/forms/form-white';
import RadioInline from 'components/ui/forms/radio-inline';

const StepThree = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('finished!');
  };

  return (
    <section className="max-w-full h-auto sm:h-screen  container w-full sm:w-1/2 mx-auto">
      <FormWhite onSubmit={onSubmit} back="/step-three">
        <h3 className="mb-6 font-semibold text-lg">How do you want to pay for your policy?</h3>

        <RadioInline
          name="willPayNewfront"
          value="Yes"
          label="I want to pay Newfront"
          subLabel="You'll pay Newfront instead of paying each insurance company separately. There are no fees"
        />
        <RadioInline
          name="willPayNewfront"
          value="No"
          label="I want to pay the insurance company directly"
          subLabel="You'll receive bills from the insurance company and it will be your resonsibility to make sure they are paid to keep your coverage"
        />
      </FormWhite>
    </section>
  );
};

export default StepThree;
