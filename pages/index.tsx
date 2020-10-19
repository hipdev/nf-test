import LayoutForm from 'components/layout/layout';
import WorkerCompesationFormStepOne from 'components/worker-compensation-form/step-one';

export default function IndexPage() {
  return (
    <LayoutForm title="Index page - Something nice is cooking">
      <WorkerCompesationFormStepOne />
    </LayoutForm>
  );
}
