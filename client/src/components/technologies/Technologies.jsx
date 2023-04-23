import TechnologyCard from './TechnologyCard'

const technologiesInfo = [
  {
    side: 'Frontend',
    technology: 'React'
  },
  {
    side: 'Backend',
    technology: 'Express'
  },
  {
    side: 'Styles',
    technology: 'Tailwind'
  },
  {
    side: 'Database',
    technology: 'MySQL'
  },

  {
    side: 'Database',
    technology: 'Mongodb'
  }
]

function Services () {
  return (
    <>
      <div className=''>
        <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold dark:text-seaShell pt-10 pb-6 md:pt-15 lg:pt-20 text-center'>Technologies I use</h3>
      </div>
      <div className='flex flex-wrap justify-center gap-2 p-2'>
        {technologiesInfo.map((item, index) => (
          <TechnologyCard
            key={index}
            side={item.side}
            technology={item.technology}
          />
        ))}
      </div>
    </>
  )
}

export default Services
