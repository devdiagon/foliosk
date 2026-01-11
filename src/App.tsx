import { Navbar } from './components/Navbar';
import { AboutMe, Education, Home, Projects } from './sections';

function App() {
  return (
    <main className='relative scroll-smooth'>
      <Navbar />

      <section id='home' className='mt-24 scroll-mt-24 flex items-center justify-center'>
        <Home />
      </section>

      <section id='projects' className='scroll-mt-24'>
        <Projects />
      </section>

      <section id='education' className='scroll-mt-24'>
        <Education />
      </section>

      <section id='about-me' className='scroll-mt-24 mb-24'>
        <AboutMe />
      </section>

    </main>
  );
}

export default App
