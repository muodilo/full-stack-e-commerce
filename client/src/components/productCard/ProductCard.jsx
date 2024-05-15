import React from 'react'
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";

const ProductCard = ({product}) => {
  return (
    <div className='px-2'>
    <div className=" p-4 w-full shadow hover:shadow-xl rounded-xl">
      <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block hover:scale-125 transition" src={ product.images[0]} />
      </a>
      <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{ product.type}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{product.name }</h2>
        <div className='grid grid-cols-2'>
          <div className='flex'>
              <p className="mt-1 me-3">Rwf { product.discountPrice}</p>
              <p className="mt-1 font-light line-through text-red-600">Rwf { product.price}</p>
          </div>
          <div className='flex items-center justify-end cursor-pointer'>
            <BsFillCartPlusFill />
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductCard
