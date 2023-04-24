function WorkCard ({
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
    <div className='max-w-sm rounded overflow-hidden shadow-lg mt-3'>
      <img className='w-full' src={image} alt={`${title} image`} />
      <div className='dark:bg-jett flex justify-end px-2 pt-3 pb-1'>
        {github
          ? (
            <a
              className='inline-block ml-1'
              href={github.url}
              target='_blank'
              rel='noreferrer'
            >
              <div className='bg-gray-200 dark:bg-seaShell flex items-center rounded-full px-2 py-1 text-xs font-semibold text-gray-700'>
                <img className='w-6 h-6' src='/Github.svg' alt='internet' />
                <span className='ml-1 dark:text-raisingBlack'>Repo</span>
              </div>
            </a>
            )
          : (
              ''
            )}
        {web
          ? (
            <a
              className='inline-block ml-1'
              href={web.url}
              target='_blank'
              rel='noreferrer'
            >
              <div className='bg-gray-200 dark:bg-seaShell flex items-center rounded-full px-2 py-1 text-xs font-semibold text-gray-700'>
                <img className='w-6 h-6' src='/Internet.svg' alt='internet' />
                <span className='ml-1 dark:text-'>Web</span>
              </div>
            </a>
            )
          : (
              ''
            )}
      </div>
      <div className='dark:bg-jett px-6'>
        <div className='dark:text-seaShell font-bold text-xl mb-2'>{title}</div>
        <p className='text-gray-700 dark:text-seaShell text-base'>
          {description}
        </p>
      </div>
      <div className='dark:bg-jett flex justify-start px-2 py-2'>
        <div className='inline-block bg-gray-200 dark:bg-raisingBlack rounded-full px-2 py-1 text-xs font-semibold text-gray-700 dark:text-seaShell mr-2 mb-2'>
          <img
            className='w-6 h-6 inline-block mr-1'
            src={`/${tech1.name}.svg`}
            alt={`${tech1.name} image`}
          />
          <span>{tech1.name}</span>
        </div>
        {tech2
          ? (
            <div className='inline-block bg-gray-200 dark:bg-raisingBlack rounded-full px-2 py-1 text-xs font-semibold text-gray-700 dark:text-seaShell mr-2 mb-2'>
              <img
                className='w-6 h-6 inline-block mr-1'
                src={`/${tech2.name}.svg`}
                alt={`${tech2} image`}
              />
              <span>{tech2.name}</span>
            </div>
            )
          : (
              ''
            )}
        {tech3
          ? (
            <div className='inline-block bg-gray-200 dark:bg-raisingBlack rounded-full px-2 py-1 text-xs font-semibold text-gray-700 dark:text-seaShell mr-2 mb-2'>
              <img
                className='w-6 h-6 inline-block mr-1'
                src={`/${tech3.name}.svg`}
                alt={`${tech3.name} image`}
              />
              <span>{tech3.name}</span>
            </div>
            )
          : (
              ''
            )}
        {/* <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#winter</span> */}
      </div>
    </div>
  )
}

export default WorkCard
