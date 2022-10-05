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
        className="flex w-full items-center justify-center gap-4 border-2 border-transparent bg-green fill-primary-light p-3 font-bold uppercase text-primary-light transition-all duration-300 hover:border-green hover:bg-primary-light hover:fill-green hover:text-green focus:outline-dashed focus:outline-green"
      >
        Generate
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
        </svg>
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
