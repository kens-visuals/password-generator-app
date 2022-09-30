interface CurrentObject {
  name: string;
  isChecked: boolean;
}

interface CheckboxOptions {
  obj: CurrentObject;
  handleChange: (item: CurrentObject) => void;
}

const Checkbox = ({ obj, handleChange }: CheckboxOptions) => {
  return (
    <>
      <input
        type="checkbox"
        name={obj.name}
        value={obj.name}
        onChange={() => handleChange({ ...obj, isChecked: !obj.isChecked })}
        className="mr-5 appearance-none border-2 p-3 checked:border-green checked:bg-green checked:bg-check-icon checked:bg-[length:20px_20px] checked:bg-center checked:bg-no-repeat focus:outline-dashed focus:outline-green"
      />
    </>
  );
};

export default Checkbox;
