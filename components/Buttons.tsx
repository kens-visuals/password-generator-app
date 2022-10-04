interface ButtonsProps {
  handleGenerateClick: () => void;
  handleResetClick: () => void;
}

const Buttons = ({ handleGenerateClick, handleResetClick }: ButtonsProps) => {
  return (
    <>
      <button
        type="button"
        onClick={handleGenerateClick}
        className="w-full border-2 border-transparent bg-green p-3 font-bold uppercase text-primary-light transition-all duration-300 hover:border-green hover:bg-primary-light hover:text-green focus:outline-dashed focus:outline-green"
      >
        Generate
      </button>
      <button
        type="button"
        onClick={handleResetClick}
        className="mt-4 w-full border-2 border-green bg-transparent p-3 font-bold uppercase text-green transition-all duration-300 hover:border-green hover:bg-green hover:text-primary-light focus:outline-dashed focus:outline-green"
      >
        Reset
      </button>
    </>
  );
};

export default Buttons;
