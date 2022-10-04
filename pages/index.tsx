import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

// Components
import Input from '../components/Input';
import RangeSlider from '../components/RangeSlider';
import CheckboxList from '../components/CheckboxList';
import Strength from '../components/Strength';
import Buttons from '../components/Buttons';

// Helpers
import { generatePassowrd } from '../utils/index';

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

            <Strength password={password} />

            <Buttons
              handleGenerateClick={handleGenerateClick}
              handleResetClick={handleResetClick}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
