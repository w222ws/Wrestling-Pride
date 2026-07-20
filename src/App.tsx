import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Groups from "./components/Groups";
import Coaches from "./components/Coaches";
import Gallery from "./components/Gallery";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  // Сеньйорський глобальний плавний скрол для всіх пристроїв (iOS та Android)
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        const targetElement = document.getElementById(anchor.hash.slice(1));

        if (targetElement) {
          e.preventDefault();

          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    /* Добавили w-full и overflow-x-hidden, чтобы на телефонах гарантированно убрать любые зазоры по бокам */
    <div className="min-h-screen w-full bg-bg-main text-text-main antialiased font-sans selection:bg-brand selection:text-bg-main overflow-x-hidden m-0 p-0">
      <Header />

      {/* УБРАЛИ pt-20! Теперь main чистый, и Hero летит под самый верх хедера */}
      <main className="w-full m-0 p-0">
        <Hero />
        <About />
        <Groups />
        <Coaches />
        <Gallery />
        <Contacts />
        <Footer />
      </main>
    </div>
  );
}

export default App;
