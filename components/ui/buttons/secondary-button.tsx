const SecondaryButton = ({ type, text }) => {
  return (
    <button className="text-gray-800 border shadow-sm hover:bg-gray-200 px-6 py-2 rounded-sm" type={type}>
      {text}
    </button>
  );
};

export default SecondaryButton;
