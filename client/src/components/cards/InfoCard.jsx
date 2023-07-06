import { AiFillEye } from 'react-icons/ai'

function InfoCard ({
  image,
  title,
  description,
  web,
  github,
  tech1,
  tech2,
  tech3
}) {
  return (
    <div className='max-w-xs rounded-sm border dark:border-none overflow-hidden shadow-lg mt-3'>
      <img className='w-full boder dark:border-none' src={image} alt={`${title} image`} />
      <div className='dark:bg-jett flex justify-between px-2 pt-3 pb-1'>
        <AiFillEye className='ml-1 w-8 h-8 text-jett dark:text-seaShell cursor-pointer hover:scale-110 transition-all duration-100' title='Proximamente' />
        <div>
          {github &&
          (
            <a
              className='inline-block ml-1'
              href={github.url}
              target='_blank'
              rel='noreferrer'
            >
              <div className='bg-blue-200 dark:bg-seaShell flex items-center rounded-full px-2 py-1 text-xs font-semibold text-gray-700'>
                <img className='w-5 h-5' src='/Github.svg' alt='internet' />
                <span className='ml-1 dark:text-raisingBlack'>Repo</span>
              </div>
            </a>
          )}
          {web &&
          (
            <a
              className='inline-block ml-1'
              href={web.url}
              target='_blank'
              rel='noreferrer'
            >
              <div className='bg-atomicTangerine dark:bg-seaShell flex items-center rounded-full px-2 py-1 text-xs font-semibold text-gray-700'>
                <img className='w-5 h-5' src='/Internet.svg' alt='internet' />
                <span className='ml-1 dark:text-'>Web</span>
              </div>
            </a>
          )}
        </div>
      </div>
      <div className='dark:bg-jett px-6'>
        <div className='dark:text-seaShell font-bold text-xl mb-2'>{title}</div>
        <p className='text-gray-600 dark:text-gray-300 text-base'>
          {description}
        </p>
      </div>
      <div className='dark:bg-jett flex justify-start px-2 py-2'>
        <div className='flex bg-gray-200 dark:bg-raisingBlack rounded-full items-center px-2 py-2 text-xs font-semibold text-gray-700 dark:text-seaShell mr-2'>
          <img
            className='w-4 h-4 inline-block mr-1'
            src={`/${tech1.name}.svg`}
            alt={`${tech1.name} image`}
          />
          <span>{tech1.name}</span>
        </div>
        {tech2 &&
          (
            <div className='flex bg-gray-200 dark:bg-raisingBlack rounded-full items-center px-2 py-2 text-xs font-semibold text-gray-700 dark:text-seaShell mr-2'>
              <img
                className='w-4 h-4 inline-block mr-1'
                src={`/${tech2.name}.svg`}
                alt={`${tech2} image`}
              />
              <span>{tech2.name}</span>
            </div>
          )}
        {tech3 &&
          (
            <div className='flex bg-gray-200 dark:bg-raisingBlack rounded-full items-center px-2 py-2 text-xs font-semibold text-gray-700 dark:text-seaShell mr-2'>
              <img
                className='w-4 h-4 inline-block mr-1'
                src={`/${tech3.name}.svg`}
                alt={`${tech3.name} image`}
              />
              <span>{tech3.name}</span>
            </div>
          )}
        {/* <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#winter</span> */}
      </div>
    </div>
  )
}

export default InfoCard
