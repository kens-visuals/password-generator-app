// Components
import Checkbox from './Checkbox';

interface CheckboxOptions {
  name: string;
  isChecked: boolean;
}

interface CheckboxListProps {
  options: CheckboxOptions[];
  setOptions: (options: CheckboxOptions[]) => void;
}

const CheckboxList = ({ options, setOptions }: CheckboxListProps) => {
  const handleChange = (item: CheckboxOptions) => {
    setOptions(options.map((opt) => (opt.name === item.name ? item : opt)));
  };

  return (
    <ul className="my-8 space-y-4">
      {options.map(({ name, isChecked }) => (
        <li key={name} className="flex items-center">
          <Checkbox obj={{ name, isChecked }} handleChange={handleChange} />
          <span className="w-full text-secondary-light md:text-body">
            {name}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default CheckboxList;
