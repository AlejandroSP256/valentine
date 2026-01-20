"use client";

import { useState } from 'react'
import { motion } from 'motion/react';
import Header from "./components/Header";
import Hero from './components/HeroSection';
import Quotes from "./components/Quotes";
import IntroScreen from './components/IntroScreen';
import Footer from './components/Footer';

export default function Home() {
  const [showIntro, setShowIntro] = useState<boolean>(true);

  return (
    <>
      {showIntro && (
        <IntroScreen onFinish={() => setShowIntro(false)} />
      )}

      {!showIntro && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Header />
            <main>
              <Hero />
              <Quotes />
            </main>
            <Footer />
          </motion.div>
        </>
      )}
    </>
  );
}
