function Poster () {
  return (
    <div className='relative mx-auto bg-gradient-to-r from-blue-600 to-atomicTangerine rounded-full w-80 h-80 mt-10 mb-10 overflow-hidden md:h-96 md:w-96'>
      <img className='absolute inset-0 w-full h-full object-cover' src='/dev-ed-wave.png' alt='image of me' />
    </div>
  )
}

export default Poster
