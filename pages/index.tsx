import type { NextPage } from 'next';
import Head from 'next/head';

// Components
import Input from '../components/Input';
import RangeSlider from '../components/RangeSlider';
import CheckboxList from '../components/CheckboxList';

const Home: NextPage = () => {
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
            <RangeSlider />

            <CheckboxList />

            <div className="mb-4 flex items-center justify-between bg-primary p-3">
              <span className="text-body uppercase text-secondary">
                Strength
              </span>

              <div className="flex items-center justify-between gap-4">
                <span className="text-body uppercase text-secondary-light">
                  Medium
                </span>

                <div className="flex items-center justify-between gap-2">
                  <div className="h-7 w-2.5 border-2 border-secondary-light"></div>
                  <div className="h-7 w-2.5 border-2 border-secondary-light"></div>
                  <div className="h-7 w-2.5 border-2 border-secondary-light"></div>
                  <div className="h-7 w-2.5 border-2 border-secondary-light"></div>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="w-full border-2 border-transparent bg-green to-primary-light p-3 font-bold uppercase transition-all duration-300 hover:border-green hover:bg-primary-light hover:text-green"
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
