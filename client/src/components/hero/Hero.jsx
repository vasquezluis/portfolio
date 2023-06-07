import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillBook
} from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'

function Hero () {
  return (
    <>
      <div className='text-center p-4 py-10'>
        <h2 className='text-5xl py-2 text-raisingBlack dark:text-seaShell font-bold md:text-6xl'>
          Luis Vásquez
        </h2>
        <h3 className='text-2xl py-2 md:text-3xl dark:text-jett'>
          Fullstack Developer
        </h3>
        <TypeAnimation
          className='dark:text-blue-500 md:text-3xl text-xl lg:text-3xl font-bold md:p-4 pl-2'
          sequence={[
            'Backend', // Types 'One'
            3000, // Waits 1s
            'Frontend', // Deletes 'One' and types 'Two'
            3000, // Waits 2s
            'Database', // Types 'Three' without deleting 'Two'
            3000,
            () => {
              // console.log('Done typing!') // Place optional callbacks anywhere in the array
            }
          ]}
          wrapper='div'
          cursor
          repeat={Infinity}
        />
        <p className='text-md py-5 leading-2 text-gray-800 dark:text-seaShell md:text-xl max-w-2xl mx-auto'>Soy un programador que durante mis estudios me especialicé en la creación de proyectos. Mi objetivo es aplicar mis conocimientos y aptitudes profesionales para desarrollar aplicaciones que satisfagan las necesidades de distintos tipos de usuarios.
        </p>
      </div>
      <div className='text-3xl flex justify-center gap-16 py-3 text-jett dark:text-blue-500'>
        <a
          href='https://mnf.red/c75532d9-8bc0-494f-ad65-3d3564cb4993/timeline'
          target='_blank'
          rel='noreferrer'
          title='Manfred'
        >
          <AiFillBook />
        </a>
        <a
          href='https://github.com/vasquezluis'
          target='_blank'
          rel='noreferrer'
          title='Github'
        >
          <AiFillGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/vasquez-luis'
          target='_blank'
          rel='noreferrer'
          title='Linkedin'
        >
          <AiFillLinkedin />
        </a>
      </div>
    </>
  )
}

export default Hero
