import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Groups from "./components/Groups";
import Coaches from "./components/Coaches";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  // Сеньйорський глобальний плавний скрол для всіх пристроїв (iOS та Android)
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Знаходимо найближчий тег <a> (це рятує, якщо клікнули на іконку чи спан всередині посилання)
      const anchor = target.closest("a");

      // Перевіряємо, чи це внутрішнє якірне посилання на нашому ж сайті
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        const targetElement = document.getElementById(anchor.hash.slice(1));

        if (targetElement) {
          e.preventDefault(); // Відміняємо різкий дефолтний стрибок браузера

          targetElement.scrollIntoView({
            behavior: "smooth", // М'яка анімація ковзання
            block: "start", // Рівняємо верхній край секції до верху екрана
          });
        }
      }
    };

    // Вішаємо один легкий слухач подій на весь документ
    document.addEventListener("click", handleAnchorClick);

    // Чистимо за собою при розмонтуванні компонента (good practice)
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-bg-main text-text-main antialiased font-sans selection:bg-brand selection:text-bg-main">
      <Header />

      <main className="pt-20">
        <Hero />
        <About />
        <Groups />
        <Coaches />
        <Contacts />
        <Footer />
      </main>
    </div>
  );
}

export default App;
