import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

function Hero () {
  return (
    <>
      <div className='text-center p-10 py-10'>
        <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Luis Vasquez</h2>
        <h3 className='text-2xl py-2 md:text-3xl'>Fullstack Developer</h3>
        <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto'>Freelancer providing services for programming and everything in need. Join me down below and let's get cracking!</p>
      </div>
      <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
        <a href='https://github.com/vasquezluis' target='_blank' rel='noreferrer'><AiFillGithub /></a>

        <AiFillLinkedin />
        <AiFillTwitterCircle />
      </div>
    </>
  )
}

export default Hero
