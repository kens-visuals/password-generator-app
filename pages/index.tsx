import { useMemo, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

// Components
import Input from '../components/Input';
import RangeSlider from '../components/RangeSlider';
import CheckboxList from '../components/CheckboxList';
import Strength from '../components/Strength';

// Helpers
import { generatePassowrd } from '../utils/index';

/**
 *
 * If char length <= 5 && non of the options are selected: STRENGTH === TOO WEAK
 * If char length <= 5 && only one of the options is selected: STRENGTH === TOO WEAK
 * If char length <= 5 && only two of the options are selected: STRENGTH === WEAK
 * If char length <= 5 && all of the options are selected: STRENGTH === WEAK
 * If char length <= 10 && only one of the options are selected: STRENGTH === WEAK
 * If char length <= 10 && all of the options are selected: STRENGTH === MEDIUM
 * If char length <= 15 && two of the options are selected: STRENGTH === MEDIUM
 * If char length <= 15 && all of the options are selected: STRENGTH === STRONG
 * If char length <= 20 && one of the options is selected: STRENGTH === MEDIUM
 * If char length <= 20 && two or more of the options are selected: STRENGTH === STRONG
 *
 */

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

const Home: NextPage = () => {
  const [range, setRange] = useState<number>(18);
  const [password, setPassword] = useState<string>('');
  const [options, setOptions] = useState<CheckboxOptions[]>(initialValue);

  const handleGenerateClick = () =>
    setPassword(generatePassowrd(range, options));
  const handleResetClick = () => setPassword('');

  return (
    <div>
      <Head>
        <title>Password Generator App</title>
        <meta
          name="description"
          content="Simple password generator app built with Next.JS, TypeScript, and TailwindCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-primary">
        <h1 className="mb-4 text-center text-body text-secondary">
          Password Generator
        </h1>

        <div className="w-[90%] max-w-xl">
          <Input password={password} />

          <div className="mt-4 bg-primary-light p-4">
            <RangeSlider range={range} setRange={setRange} />

            <CheckboxList options={options} setOptions={setOptions} />

            <Strength />

            <button
              type="button"
              onClick={handleGenerateClick}
              className="w-full border-2 border-transparent bg-green p-3 font-bold uppercase text-primary-light transition-all duration-300 hover:border-green hover:bg-primary-light hover:text-green focus:outline-dashed focus:outline-green"
            >
              Generate
            </button>
            <button
              type="button"
              onClick={handleResetClick}
              className="mt-4 w-full border-2 border-green bg-transparent p-3 font-bold uppercase text-green transition-all duration-300 hover:border-green hover:bg-green hover:text-primary-light focus:outline-dashed focus:outline-green"
            >
              Reset
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
