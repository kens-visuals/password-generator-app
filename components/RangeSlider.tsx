import { ChangeEvent, useState } from 'react';

// Helpers
import { setSliderBg } from '../utils/index';

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

  const handleSliderBg = (event: ChangeEvent<HTMLInputElement>): void => {
    const bgColor = setSliderBg(event);

    setRangeBg(bgColor);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <span className="font-bold text-secondary-light md:text-body">
          Password Length
        </span>
        <span className="text-heading-md text-green">{range}</span>
      </div>

      <label>
        <input
          min="8"
          max="28"
          step="1"
          type="range"
          value={range}
          onChange={(e) => {
            handleRangeChange(e);
            handleSliderBg(e);
          }}
          style={{ background: rangeBg }}
          className="slider-thumb"
        />
      </label>
    </>
  );
};

export default RangeSlider;
