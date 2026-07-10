import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen bg-bg-main text-text-main antialiased font-sans selection:bg-brand selection:text-bg-main">
      <Header />

      <main className="pt-20">
        <Hero></Hero>
      </main>
    </div>
  );
}

export default App;
