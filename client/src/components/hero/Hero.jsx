import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'

function Hero () {
  return (
    <>
      <div className='text-center p-10 py-10'>
        <h2 className='text-5xl py-2 text-raisingBlack dark:text-seaShell font-bold md:text-6xl'>Luis Vasquez</h2>
        <h3 className='text-2xl py-2 md:text-3xl dark:text-jett'>Fullstack Developer</h3>
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
              console.log('Done typing!') // Place optional callbacks anywhere in the array
            }
          ]}
          wrapper='div'
          cursor
          repeat={Infinity}
        />
        <p className='text-md py-5 leading-8 text-gray-800 dark:text-seaShell md:text-xl max-w-xl mx-auto'>Freelancer providing services for programming and everything in need. Join me down below and let's get cracking!</p>
      </div>
      <div className='text-3xl flex justify-center gap-16 py-3 text-jett dark:text-blue-500'>
        <a href='https://github.com/vasquezluis' target='_blank' rel='noreferrer'><AiFillGithub /></a>
        <a href='https://likedin.com' target='_blank' rel='noreferrer'><AiFillLinkedin /></a>
        <a href='https://twitter.com/_vasquezluis' target='_blank' rel='noreferrer'><AiFillTwitterCircle /></a>
      </div>
    </>
  )
}

export default Hero
