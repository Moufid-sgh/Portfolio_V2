import Contact from "./components/Contact"
import HeroTitle from "./components/HeroTitle";
import dynamic from "next/dynamic"
import Name from "./components/Name";
import Footer from "./components/Footer";

const Scene = dynamic(() => import('./components/Scene'), { ssr: false })

export default function Home() {

  const mainImg = '/Hero/Cranium.jpg'
  const secondImg = '/Hero/lune.jpg'

  return (
    <main className="flex flex-col justify-between items-center h-full lg:h-screen p-4 md:p-10">

      <nav className="flex items-start justify-between w-full">
        <Name />
        <Contact />
      </nav>

      <section className="flex flex-col lg:flex-row items-center justify-center mt-28 mb-12 sm:mt-0 sm:mb-0">
        <HeroTitle />
        <div className="ml-20 sm:ml-0 h-80 md:h-80 w-72 relative">
          <div className="h-full">
            <Scene size={0.8} img={mainImg} />
          </div>
          <div className="h-full absolute top-[-115px] left-[-140px]">
            <Scene size={0.5} img={secondImg} />
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}
