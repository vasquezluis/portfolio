import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

function NavBar ({ darkMode, setDarkMode }) {
  const myString = '{dev: true}'

  return (
    <nav className='py-10 mb-12 flex justify-between' id='nav'>
      <h1 className='text-xl font-burtons dark:text-seaShell'>{myString}</h1>
      <ul className='flex items-center'>
        <li>
          {darkMode ? (<BsFillSunFill className='dark:text-seaShell cursor-pointer text-2xl' onClick={() => setDarkMode(!darkMode)} />) : (<BsFillMoonStarsFill className='cursor-pointer text-2xl' onClick={() => setDarkMode(!darkMode)} />)}
        </li>
        <li>
          <a className='bg-jett dark:bg-gradient-to-r from-blue-400 to-blue-700 text-white px-4 py-2 rounded-md ml-4' href='/curriculum.pdf' target='_blank' rel='noopener noreferrer'>Resume</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
