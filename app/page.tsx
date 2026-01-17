import Header from "./components/Header";
import Quotes from "./components/Quotes";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="min-h-screen w-full gr-primary flex justify-center items-center">
        </div>
        <Quotes />
      </main>
    </>
  );
}
