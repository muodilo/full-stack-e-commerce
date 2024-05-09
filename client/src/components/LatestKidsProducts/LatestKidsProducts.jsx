import React from 'react'

const LatestKidsProducts = () => {
  return (
    <section>
      <div className='lg:px-[7rem] md:px-[5rem] px-2 pt-20'>

        <h1 className='text-center text-4xl font-bold mb-5'>Latest Kid's products</h1>
        <hr />
        <div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
          
          <div className=" p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/7970115/pexels-photo-7970115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">$16.00</p>
            </div>
          </div>
          
          <div className=" p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/8035982/pexels-photo-8035982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">$16.00</p>
            </div>
          </div>
          
          <div className=" p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/8363165/pexels-photo-8363165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">$16.00</p>
            </div>
          </div>
          
          <div className=" p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/6685997/pexels-photo-6685997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
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

export default LatestKidsProducts
