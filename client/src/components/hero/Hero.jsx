import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

function Hero () {
  return (
    <>
      <div className='text-center p-10 py-10'>
        <h2 className='text-5xl py-2 text-raisingBlack dark:text-seaShell font-bold md:text-6xl'>Luis Vasquez</h2>
        <h3 className='text-2xl py-2 md:text-3xl dark:text-jett'>Fullstack Developer</h3>
        <p className='text-md py-5 leading-8 text-gray-800 dark:text-seaShell md:text-xl max-w-xl mx-auto'>Freelancer providing services for programming and everything in need. Join me down below and let's get cracking!</p>
      </div>
      <div className='text-3xl flex justify-center gap-16 py-3 text-jett dark:text-atomicTangerine'>
        <a href='https://github.com/vasquezluis' target='_blank' rel='noreferrer'><AiFillGithub /></a>
        <a href='https://likedin.com' target='_blank' rel='noreferrer'><AiFillLinkedin /></a>
        <a href='https://twitter.com/_vasquezluis' target='_blank' rel='noreferrer'><AiFillTwitterCircle /></a>
      </div>
    </>
  )
}

export default Hero
