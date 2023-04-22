import ServiceCard from './ServiceCard'

const servicesInfo = [
  {
    image: 'design',
    title: 'Beautiful Designs',
    description: 'Creating elegant designs suited for you something',
    subTitle: 'Design tools I use',
    tool1: 'Photoshop',
    tool2: 'Illustrator',
    tool3: 'Figma'
  },
  {
    image: 'code',
    title: 'Beautiful Designs',
    description: 'Creating elegant designs suited for you something',
    subTitle: 'Design tools I use',
    tool1: 'Photoshop',
    tool2: 'Illustrator',
    tool3: 'Figma'
  },
  {
    image: 'consulting',
    title: 'Beautiful Designs',
    description: 'Creating elegant designs suited for you something',
    subTitle: 'Design tools I use',
    tool1: 'Photoshop',
    tool2: 'Illustrator',
    tool3: 'Figma'
  }
]

function Services () {
  return (
    <>
      <div>
        <h3 className='text-3xl py-1'>Services I offer</h3>
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
      <div className='lg:flex gap-10'>
        {servicesInfo.map((item, index) => (
          <ServiceCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            subTitle={item.subTitle}
            tool1={item.tool1}
            tool2={item.tool2}
            tool3={item.tool3}
          />
        ))}
      </div>
    </>
  )
}

export default Services
