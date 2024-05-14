import React from 'react'
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";

const LatestMenProducts = () => {
  return (
    <section>
      <div className='lg:px-[7rem] md:px-[5rem] px-2 pt-20'>

        <h1 className='text-center text-4xl font-bold mb-5'>Latest Men products</h1>
        <hr />
        <div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
          
          <div className='px-2'>
          <div className=" p-4 w-full shadow hover:shadow-xl rounded-xl">
            <a className="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block hover:scale-125 transition" src="https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <div className='grid grid-cols-2'>
                <div className='flex'>
                  <p className="mt-1 me-3">$16.00</p>
                  <p className="mt-1 font-light line-through text-red-600">$20.00</p>
                </div>
                <div className='flex items-center justify-end cursor-pointer'>
                  <BsFillCartPlusFill />
                </div>

              </div>
            </div>
          </div>
          </div>

          <div className=" p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/447570/pexels-photo-447570.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">$16.00</p>
            </div>
          </div>
          
          <div className=" p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/11451503/pexels-photo-11451503.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">$16.00</p>
            </div>
          </div>
          
          <div className=" p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/6428968/pexels-photo-6428968.jpeg"/>
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">$16.00</p>
            </div>
          </div>
          
        </div>
        <div className='text-center'>
          <button className='btn btn-active animate-bounce'>Explore more</button>
        </div>
      </div>
    </section>
  )
}

export default LatestMenProducts
