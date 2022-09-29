import { ChangeEvent, useState } from 'react';

// Components
import CheckboxList from './CheckboxList';

const RangeSlider = () => {
  const [rangeBg, setRangeBg] = useState<string>(
    `linear-gradient(90deg,#A4FFAF ${50}%, #18171F ${50}%)`
  );
  const [range, setRange] = useState<number>(10);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setRange(parseInt(event.target.value));
  };

  const setSliderBg = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value, min, max } = event.target;
    const bgPercentage: number =
      ((parseInt(value) - parseInt(min)) / (parseInt(max) - parseInt(min))) *
      100;

    const backgroundColor = `linear-gradient(90deg,
        #A4FFAF ${bgPercentage}%,
        #18171F ${bgPercentage}%)`;

    setRangeBg(backgroundColor);
  };

  return (
    <div className="mt-4 bg-primary-light p-4">
      <div className="flex items-center justify-between">
        <span className="font-bold text-secondary-light">Character Length</span>
        <span className="text-heading-md text-green">{range}</span>
      </div>

      <input
        min="1"
        max="20"
        step="1"
        type="range"
        value={range}
        onChange={(e) => {
          handleChange(e);
          setSliderBg(e);
        }}
        style={{ background: rangeBg }}
        className="h-2 w-full cursor-pointer appearance-none bg-green"
      />

      <CheckboxList />
    </div>
  );
};

export default RangeSlider;
