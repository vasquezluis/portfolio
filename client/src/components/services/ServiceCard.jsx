function ServiceCard ({ image, title, description, subTitle, tool1, tool2, tool3 }) {
  return (
    <div className='shadow-lg p-10 rounded-xl my-10'>
      <div className='flex justify-center'>
        <img className='w-[100px] h-[100px]' src={`/${image}.png`} alt={`${image}`} />
      </div>
      <div className='text-center'>
        <h3 className='text-lg font-medium pt-8 pb-2'>{title}</h3>
        <p className='py-2'>{description}</p>
        <h4 className='py-4 text-teal-600'>{subTitle}</h4>
        <p className='text-gray-800 py-1'>{tool1}</p>
        <p className='text-gray-800 py-1'>{tool2}</p>
        <p className='text-gray-800 py-1'>{tool3}</p>
      </div>
    </div>
  )
}

export default ServiceCard
