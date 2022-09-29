import type { NextPage } from 'next';
import Head from 'next/head';
import { ChangeEvent, SyntheticEvent, useState } from 'react';

// Components
import Input from '../components/Input';

const Home: NextPage = () => {
  const [range, setRange] = useState<number>(10);
  const [bg, setBg] = useState<string>(
    `linear-gradient(90deg,#A4FFAF ${50}%, #18171F ${50}%)`
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setRange(parseInt(event.target.value));
  };

  const setSliderBg = (e): void => {
    const { value, min, max } = e.target;
    const bgPercentage = ((value - min) / (max - min)) * 100;

    const backgroundColor = `linear-gradient(90deg,
      #A4FFAF ${bgPercentage}%,
      #18171F ${bgPercentage}%)`;

    setBg(backgroundColor);
  };

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
          <Input />

          <div className="mt-4 bg-primary-light p-4">
            <div className="flex items-center justify-between">
              <span className="font-bold text-secondary-light">
                Character Length
              </span>
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
              style={{ background: bg }}
              className={`${bg} h-1 w-full cursor-pointer appearance-none bg-green`}
            />

            <ul className="">
              <li className="">
                <div className="mt-4 flex items-center">
                  <input
                    type="checkbox"
                    value=""
                    className="mr-5 appearance-none border-2 border-secondary-light bg-green bg-check-icon bg-[length:20px_20px] bg-center bg-no-repeat p-3 text-green checked:border-green checked:bg-primary-light focus:ring focus:ring-green"
                  />
                  <span className="w-full text-secondary-light">
                    Include Uppercase Letters
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
