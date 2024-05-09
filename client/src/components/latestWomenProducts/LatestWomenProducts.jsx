import React from 'react'

const LatestWomenProducts = () => {
  return (
    <section>
      <div className='lg:px-[7rem] md:px-[5rem] px-2 pt-20'>

        <h1 className='text-center text-4xl font-bold mb-5'>Latest Women products</h1>
        <hr />
        <div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
          
          <div className=" p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/1127000/pexels-photo-1127000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">$16.00</p>
            </div>
          </div>
          
          <div className=" p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/1383869/pexels-photo-1383869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">$16.00</p>
            </div>
          </div>
          
          <div className=" p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/821413/pexels-photo-821413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">$16.00</p>
            </div>
          </div>
          
          <div className=" p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/3555936/pexels-photo-3555936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">$16.00</p>
            </div>
          </div>
          
        </div>
        <div className='text-center'>
          <button className='btn btn-active '>Explore more</button>
        </div>
      </div>
    </section>
  )
}

export default LatestWomenProducts
