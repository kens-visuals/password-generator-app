interface CheckboxOptions {
  name: string;
  isChecked: boolean;
}

interface CheckboxInterface {
  obj: CheckboxOptions;
  handleChange: (item: CheckboxOptions) => void;
}

const Checkbox = ({ obj, handleChange }: CheckboxInterface) => {
  const { name, isChecked } = obj;

  return (
    <>
      <input
        type="checkbox"
        name={name}
        value={name}
        aria-label={name}
        checked={isChecked}
        onChange={() => handleChange({ ...obj, isChecked: !isChecked })}
        className="mr-5 cursor-pointer appearance-none border-2 p-3 checked:border-green checked:bg-green checked:bg-check-icon checked:bg-[length:20px_20px] checked:bg-center checked:bg-no-repeat focus:outline-dashed focus:outline-green"
      />
    </>
  );
};

export default Checkbox;
