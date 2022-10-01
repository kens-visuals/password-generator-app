import { ChangeEvent, useMemo, useState } from 'react';

interface RangeProps {
  range: number;
  setRange: (range: number) => void;
}

const RangeSlider = ({ range, setRange }: RangeProps) => {
  const [rangeBg, setRangeBg] = useState<string>(
    `linear-gradient(90deg,#A4FFAF ${50}%, #18171F ${50}%)`
  );

  const handleRangeChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
    <>
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
          handleRangeChange(e);
          setSliderBg(e);
        }}
        style={{ background: rangeBg }}
        className="slider-thumb"
      />
    </>
  );
};

export default RangeSlider;
