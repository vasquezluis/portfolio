function ServiceCard ({ side, technology }) {
  return (
    <div className='shadow-lg rounded-xl'>
      <div className='w-full sm:w-auto bg-jett hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-1.5 dark:bg-jett dark:hover:bg-gray-600 dark:focus:ring-gray-700'>
        {/* <svg className='mr-3 w-7 h-7' aria-hidden='true' focusable='false' data-prefix='fab' data-icon='google-play' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='currentColor' d='M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z' /></svg> */}
        <img className='mr-3 w-7 h-7 lg:w-10 lg:h-10' src={`/${technology}.svg`} alt={`${technology} image`} />
        <div className='text-left'>
          <div className='mb-1 text-xs lg:text-sm dark:text-atomicTangerine'>{side}</div>
          <div className='-mt-1 font-sans text-sm lg:text-[17px] font-semibold'>{technology}</div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
