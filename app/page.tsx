"use client";

import { useState } from 'react'
import Header from "./components/Header";
import Quotes from "./components/Quotes";
import IntroScreen from './components/IntroScreen';

export default function Home() {
  const [showIntro, setShowIntro] = useState<boolean>(true);

  return (
    <>
      {showIntro && (
        <IntroScreen onFinish={() => setShowIntro(false)} />
      )}

      {!showIntro && (
        <>
          <Header />
          <main>
            <div className="min-h-screen w-full gr-primary flex justify-center items-center">
            </div>
            <Quotes />
          </main>
        </>
      )}
    </>
  );
}
