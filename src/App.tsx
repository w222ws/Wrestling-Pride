import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Groups from "./components/Groups";
import Coaches from "./components/Coaches";
import Price from "./components/Price";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-bg-main text-text-main antialiased font-sans selection:bg-brand selection:text-bg-main">
      <Header />

      <main className="pt-20">
        <Hero></Hero>
        <About></About>
        <Groups></Groups>
        <Coaches></Coaches>
        <Price></Price>
        <Contacts></Contacts>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
