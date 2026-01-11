import './App.css'
import { Navbar } from './components/Navbar';
import { Home } from './sections';

function App() {
  return (
    <main className='relative scroll-smooth'>
      <Navbar />

      <section id='home' className='mt-24 scroll-mt-24 flex items-center justify-center'>
        <Home />
      </section>

      <section id='projects' className='min-h-screen scroll-mt-24'>
        <h2>Projects</h2>
      </section>

      <section id='education' className='min-h-screen scroll-mt-24'>
        <h2>Education</h2>
      </section>

      <section id='about-me' className='min-h-screen scroll-mt-24'>
        <h2>About Me</h2>
      </section>

    </main>
  );
}

export default App
