import type { NextPage } from 'next';
import Head from 'next/head';

// Components
import Input from '../components/Input';
import RangeSlider from '../components/RangeSlider';

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

          <RangeSlider />
        </div>
      </main>
    </div>
  );
};

export default Home;
