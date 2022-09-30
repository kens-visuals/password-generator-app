import { ChangeEvent, useState } from 'react';

import Checkbox from './Checkbox';

interface CheckboxOptions {
  name: string;
  isChecked: boolean;
}

const CheckboxList = () => {
  const [options, setOptions] = useState<CheckboxOptions[]>([
    {
      name: 'Include Uppercase Letters',
      isChecked: false,
    },
    {
      name: 'Include Lowercase Letters',
      isChecked: false,
    },
    {
      name: 'Include Numbers',
      isChecked: false,
    },
    {
      name: 'Include Symbols',
      isChecked: false,
    },
  ]);

  console.log(options);

  return (
    <ul className="my-8 space-y-4">
      {options.map(({ name, isChecked }) => (
        <li key={name} className="flex items-center">
          <Checkbox
            obj={{ name, isChecked }}
            handleChange={(item) => {
              setOptions(
                options.map((opt) => (opt.name === item.name ? item : opt))
              );
            }}
          />
          <span className="w-full text-secondary-light">{name}</span>
        </li>
      ))}
    </ul>
  );
};

export default CheckboxList;
