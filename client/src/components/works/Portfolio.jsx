function Portfolio () {
  return (
    <>
      <div>
        <h3 className='texto-3xl py-1'>Portfolio</h3>
        <p className='text-md py-2 leading-8 text-gray-800'>
          Sinse the beginning of my journey as a freelancer something something
          <span className='text-teal-500'> agencies</span> consulting something else
          <span className='text-teal-500'> stand</span>
        </p>
        <p className='text-md py-2 leading-8 text-gray-800'>
          Sinse the beginning of my journey as a freelancer something something
          <span className='text-teal-500'> agencies</span> consulting something else
          <span className='text-teal-500'> stand</span>
        </p>
      </div>
      <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
        <div className='mb-1 basis-1/3 flex-1'>
          <img className='rounded-lg object-cover w-[100%] h-[100%]' src='/web1.png' alt='web1' />
        </div>
        <div className='mb-1 basis-1/3 flex-1'>
          <img className='rounded-lg object-cover w-[100%] h-[100%]' src='/web2.png' alt='web2' />
        </div>
        <div className='mb-1 basis-1/3 flex-1'>
          <img className='rounded-lg object-cover w-[100%] h-[100%]' src='/web3.png' alt='web3' />
        </div>
        <div className='mb-1 basis-1/3 flex-1'>
          <img className='rounded-lg object-cover w-[100%] h-[100%]' src='/web4.png' alt='web4' />
        </div>
        <div className='mb-1 basis-1/3 flex-1'>
          <img className='rounded-lg object-cover w-[100%] h-[100%]' src='/web5.png' alt='web5' />
        </div>
        <div className='mb-1 basis-1/3 flex-1'>
          <img className='rounded-lg object-cover w-[100%] h-[100%]' src='/web6.png' alt='web6' />
        </div>
      </div>
    </>
  )
}

export default Portfolio
