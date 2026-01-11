import './App.css'
import { Navbar } from './components/Navbar';

function App() {
  return (
    <main className='relative scroll-smooth'>
      <Navbar />

      <div className="bg-[url(/react.svg)]">
        <div className="bg-white/30 backdrop-blur-sm ..."></div>
      </div>

      <section id='home' className='min-h-screen flex items-center justify-center'>
        <h1 className='text-5xl font-bold'>HOME</h1>
      </section>

      <section id='projects' className='min-h-screen'>
        <h2>Projects</h2>
      </section>

      <section id='education' className='min-h-screen'>
        <h2>Education</h2>
      </section>

      <section id='about-me' className='min-h-screen'>
        <h2>About Me</h2>
      </section>

    </main>
  );
}

export default App
