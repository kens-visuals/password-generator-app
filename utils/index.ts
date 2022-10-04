import { ChangeEvent } from 'react';

export const setSliderBg = (event: ChangeEvent<HTMLInputElement>): string => {
  const { value, min, max } = event.target;
  const bgPercentage: number =
    ((parseInt(value) - parseInt(min)) / (parseInt(max) - parseInt(min))) * 100;

  const backgroundColor = `linear-gradient(90deg,
        #A4FFAF ${bgPercentage}%,
        #18171F ${bgPercentage}%)`;

  return backgroundColor;
};

const getAllCharacters = () => {
  const chars: string = Array.from(Array(94))
    .map((_, i) => i + 33)
    .map((el) => String.fromCharCode(el))
    .join('');

  const UPPER_CHARS = chars.match(/[A-Z]/g)!.join('');
  const LOWER_CHARS = chars.match(/[a-z]/g)!.join('');
  const NUMBER_CHARS = chars.match(/[0-9]/g)!.join('');
  const SYMBOL_CHARS = chars.match(/[$-/:-?{-~!"^_`\[\]]/g)!.join('');

  return [UPPER_CHARS, LOWER_CHARS, NUMBER_CHARS, SYMBOL_CHARS];
};

export const generatePassowrd = (
  range: number,
  options: { isChecked: boolean }[]
): string => {
  let sequence = '';
  const passwordChars = [];
  const [UPPER_CHARS, LOWER_CHARS, NUMBER_CHARS, SYMBOL_CHARS] =
    getAllCharacters();
  const [
    { isChecked: isUpperCase },
    { isChecked: isLowerCase },
    { isChecked: isNumber },
    { isChecked: isSymbol },
  ] = options;

  if (isUpperCase) sequence = sequence.concat(UPPER_CHARS);
  if (isLowerCase) sequence = sequence.concat(LOWER_CHARS);
  if (isNumber) sequence = sequence.concat(NUMBER_CHARS);
  if (isSymbol) sequence = sequence.concat(SYMBOL_CHARS);

  for (let i = 0; i < range; i++) {
    const randomChar = sequence[Math.floor(Math.random() * sequence.length)];
    passwordChars.push(randomChar);
  }

  return passwordChars.join('');
};
