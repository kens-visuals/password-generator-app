import { useMemo, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

// Components
import Input from '../components/Input';
import RangeSlider from '../components/RangeSlider';
import CheckboxList from '../components/CheckboxList';
import Strength from '../components/Strength';

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

const Home: NextPage = () => {
  const [range, setRange] = useState<number>(10);
  const [password, setPassword] = useState<string>('');

  const getRandomNumbers = (range: number): string => {
    const alpha = Array.from(Array(94))
      .map((e, i) => i + 33)
      .map((el) => String.fromCharCode(el));

    const alphabet = alpha
      .map(
        (x) =>
          (x = alpha.join('').charAt(Math.floor(Math.random() * alpha.length)))
      )
      .join('');

    return alphabet.slice(0, range);
  };

  console.log(password);

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

            <CheckboxList />

            <Strength />

            <button
              type="button"
              onClick={() => setPassword(getRandomNumbers(range))}
              className="w-full border-2 border-transparent bg-green to-primary-light p-3 font-bold uppercase transition-all duration-300 hover:border-green hover:bg-primary-light hover:text-green focus:outline-dashed focus:outline-green"
            >
              Generate
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
