const PrimaryButton = ({ type, text }) => {
  return (
    <button className="text-white bg-blue-main hover:bg-blue-main-hover px-6 py-2 rounded-sm" type={type}>
      {text}
    </button>
  );
};

export default PrimaryButton;
