
export const Navbar = () => {
  return (
    <nav className='fixed top-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-sm bg-white/60 border border-white/30 rounded-full px-6 py-3 shadow-lg'>
      <ul className='flex gap-6 text-xs font-light text-black'>
        <li>
          <a href='#home' className='hover:opacity-70 transition'>Home</a>
        </li>
        <li>
          <a href='#projects' className='hover:opacity-70 transition'>Projects</a>
        </li>
        <li>
          <a href='#education' className='hover:opacity-70 transition'>Education</a>
        </li>
        <li>
          <a href='#about-me' className='hover:opacity-70 transition'>About Me</a>
        </li>
      </ul>
    </nav>
  );
}