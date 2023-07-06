import { useState } from 'react'

import NavBar from '../components/_partials/NavBar'
import Hero from '../components/hero/Hero'
import Poster from '../components/poster/Poster'
import Technologies from '../components/technologies/Technologies'
import Portfolio from '../components/works/Portfolio'
import Projects from '../components/projects/Projects'
import MoreTechnologies from '../components/technologies/MoreTechnologies'
// import ContactForm from '../components/contact/ContactForm'

function Index () {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className='bg-white dark:bg-raisingBlack lg:flex justify-center'>
        <div className='lg:w-[1500px] px-5 md:px-20 lg:px-40'>
          <section className='min-h-screen'>
            <NavBar
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
            <Hero />
            <Poster />
          </section>
          <section>
            <Technologies />
          </section>
          <section>
            <Portfolio />
          </section>
          <section className='pb-10'>
            <Projects />
          </section>
          <section className='pb-10'>
            <MoreTechnologies />
          </section>
          <section className='pb-10'>
            {/* <ContactForm /> */}
          </section>

          {/* <button className='bg-jett dark:bg-gradient-to-r from-red-500 to-atomicTangerine text-white font-bold py-2 px-4 rounded-full fixed bottom-5 right-2 z-10'> */}
          <a className='bg-transparent text-white font-bold rounded-full fixed bottom-5 right-2 lg:right-72 z-10' href='#nav'>
            <img className='w-12 h-12' src='/ArrowUp.svg' alt='arrow up' />
          </a>
          {/* </button> */}
        </div>
      </main>
    </div>
  )
}

export default Index
