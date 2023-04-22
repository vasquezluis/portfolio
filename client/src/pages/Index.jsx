import { useState } from 'react'

import NavBar from '../components/_partials/NavBar'
import Hero from '../components/hero/Hero'
import Poster from '../components/poster/Poster'
import Services from '../components/services/Services'
import Portfolio from '../components/works/Portfolio'
import ProjectCard from '../components/projects/ProjectCard'

function Index () {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className='bg-white dark:bg-gray-900 lg:flex justify-center'>
        <div className='lg:w-[1500px] px-5 md:px-20 lg:px-40'>
          <section className='min-h-screen'>
            <NavBar
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
            <Hero />
            <Poster />
          </section>
          <section className='min-h-screen'>
            <Services />
          </section>
          <section className='min-h-screen'>
            <Portfolio />
          </section>
          <section className='min-h-screen'>
            <ProjectCard />
          </section>
        </div>
      </main>
    </div>
  )
}

export default Index
