import { useQuery } from 'react-query'
import { getItems } from '../../api/projects'
import InfoCard from '../cards/InfoCard'

function Projects () {
  const { data: projects, error, isLoading, isError } = useQuery({
    queryKey: ['projects'],
    queryFn: getItems,
    select: (items) => items.reverse()
  })

  if (isLoading) return <p>Loading projects 😩... </p>
  else if (isError) return <p>Error 💔 {error.message} </p>

  return (
    <>
      <div className='pt-16 pb-4 text-center'>
        <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold py-1 dark:text-seaShell'>Proyectos personales</h3>
        <p className='text-md py-2 leading-8 dark:text-seaShell'>
          Lista de los proyectos personales que he realizado utilizando diferentes tecnologías.
          {/* <span className='font-bold text-raisingBlack dark:text-atomicTangerine'> technologies</span> I know and a
          <span className='font-bold text-raisingBlack dark:text-atomicTangerine'> picture</span> of them. */}
        </p>
      </div>
      <div className='flex flex-col justify-center gap-2 lg:gap-5 lg:flex-row lg:flex-nowrap'>
        {/* <div className='max-w-md rounded overflow-hidden shadow-lg'> */}

        {
          projects
            ? projects.map(item => (
              <InfoCard
                key={item._id}
                image={item.image}
                title={item.title}
                description={item.description}
                web={item.link_1}
                github={item.link_2}
                tech1={item.tech_1}
                tech2={item.tech_2}
                tech3={item.tech_3}
              />
            ))
            : (<h2 className='text-center text-gray-400'>Proyectos no disponibles por el momento 💔</h2>)
        }

        {/* </div> */}
      </div>
    </>
  )
}

export default Projects
