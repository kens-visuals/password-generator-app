import { useState } from 'react';

// Components
import Checkbox from './Checkbox';

// Interfaces
interface CheckboxOptions {
  name: string;
  isChecked: boolean;
}

const initialValue: CheckboxOptions[] = [
  {
    name: 'Include Uppercase Letters',
    isChecked: true,
  },
  {
    name: 'Include Lowercase Letters',
    isChecked: true,
  },
  {
    name: 'Include Numbers',
    isChecked: false,
  },
  {
    name: 'Include Symbols',
    isChecked: false,
  },
];

const CheckboxList = () => {
  const [options, setOptions] = useState<CheckboxOptions[]>(initialValue);

  const handleChange = (item: CheckboxOptions) => {
    setOptions(options.map((opt) => (opt.name === item.name ? item : opt)));
  };

  return (
    <ul className="my-8 space-y-4">
      {options.map(({ name, isChecked }) => (
        <li key={name} className="flex items-center">
          <Checkbox obj={{ name, isChecked }} handleChange={handleChange} />
          <span className="w-full text-secondary-light">{name}</span>
        </li>
      ))}
    </ul>
  );
};

export default CheckboxList;
