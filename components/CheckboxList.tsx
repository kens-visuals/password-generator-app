const CheckboxList = () => {
  // Write a state that will have all the options and then create a single function to see what was checked

  return (
    <ul className="my-8 space-y-4">
      <li className="flex items-center">
        <input
          value="" // DEBUG
          type="checkbox"
          className="mr-5 appearance-none border-2 border-secondary-light bg-green bg-check-icon bg-[length:20px_20px] bg-center bg-no-repeat p-3 text-green checked:border-green checked:bg-primary-light focus:ring focus:ring-green"
        />
        <span className="w-full text-secondary-light">
          Include Uppercase Letters
        </span>
      </li>
      <li className="flex items-center">
        <input
          value="" // DEBUG
          type="checkbox"
          className="mr-5 appearance-none border-2 border-secondary-light bg-green bg-check-icon bg-[length:20px_20px] bg-center bg-no-repeat p-3 text-green checked:border-green checked:bg-primary-light focus:ring focus:ring-green"
        />
        <span className="w-full text-secondary-light">
          Include Lowercase Letters
        </span>
      </li>
      <li className="flex items-center">
        <input
          value="" // DEBUG
          type="checkbox"
          className="mr-5 appearance-none border-2 border-secondary-light bg-green bg-check-icon bg-[length:20px_20px] bg-center bg-no-repeat p-3 text-green checked:border-green checked:bg-primary-light focus:ring focus:ring-green"
        />
        <span className="w-full text-secondary-light">Include Numbers</span>
      </li>
      <li className="flex items-center">
        <input
          value="" // DEBUG
          type="checkbox"
          className="mr-5 appearance-none border-2 border-secondary-light bg-green bg-check-icon bg-[length:20px_20px] bg-center bg-no-repeat p-3 text-green checked:border-green checked:bg-primary-light focus:ring focus:ring-green"
        />
        <span className="w-full text-secondary-light">Include Symbols</span>
      </li>
    </ul>
  );
};

export default CheckboxList;
