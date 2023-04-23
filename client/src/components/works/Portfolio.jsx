import { useQuery } from 'react-query'
import { getItems } from '../../api/works'
import WorkCard from './WorkCard'

function Portfolio () {
  const { data: works, isLoading, isError, error } = useQuery({
    queryKey: ['works'],
    queryFn: getItems,
    select: (items) => items.reverse()
  })

  if (isLoading) return 'Loading...'
  if (isError) return 'Error: ' + error.message

  return (
    <>
      <div className='pt-16 pb-4 text-center'>
        <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold py-1 dark:text-seaShell'>Portfolio</h3>
        <p className='text-md py-2 leading-8 dark:text-seaShell'>
          Listing all the work I've done, using all
          <span className='font-bold text-raisingBlack dark:text-atomicTangerine'> technologies</span> I know and a
          <span className='font-bold text-raisingBlack dark:text-atomicTangerine'> picture</span> of them.
        </p>
      </div>
      <div className='flex flex-col gap-2 lg:gap-5 lg:flex-row lg:flex-nowrap'>
        {/* <div className='max-w-md rounded overflow-hidden shadow-lg'> */}

        {works.map(item => (
          <WorkCard
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
        ))}

        {/* <WorkCard
          image='web1'
          title='PELISPELIS'
          description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint eveniet architecto dolore, voluptatum nisi, expedita placeat molestiae nostrum esse eos quasi delectus, dicta itaque. Amet aspernatur explicabo quas alias molestiae!'
          tech1='React'
          tech2='Mongodb'
          tech3='Tailwind'
        />
        <WorkCard
          image='web2'
          title='Peluqueria San Martin'
          description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint eveniet architecto dolore, voluptatum nisi, expedita placeat molestiae nostrum esse eos quasi delectus, dicta itaque. Amet aspernatur explicabo quas alias molestiae!'
          tech1='React'
          tech2='MySQL'
          tech3='Express'
        />
        <WorkCard
          image='web1'
          title='Dulceria Juan x2'
          description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint eveniet architecto dolore, voluptatum nisi, expedita placeat molestiae nostrum esse eos quasi delectus, dicta itaque. Amet aspernatur explicabo quas alias molestiae!'
          tech1='React'
          tech2='Mongodb'
          tech3='Express'
        /> */}
        {/* </div> */}
      </div>
    </>
  )
}

export default Portfolio
