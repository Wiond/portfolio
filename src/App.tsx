import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectDashboard } from "./components/ProjectDashboard";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-ink-900">
      <Header />
      <main>
        <Hero />
        <ProjectDashboard />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
