import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../utils/context'
import { useParams } from 'react-router-dom'
import Loading from './Loading'

export default function Details() {
  const [products,setproducts] = useContext(ProductContext)

  const { id } = useParams()
  const product = products?.find(p => p.id === parseInt(id))


   
  return (product ?
    <div className='w-full h-screen '>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-lg"
            />
          </div>

          <div className="md:w-1/2 space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
            <p className="text-gray-600">
              {product.description}
            </p>

            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-rose-600">${product.price}</span>
            </div>
            <div className="space-y-3">
              <button className="w-full bg-rose-600 text-white py-3 px-6 rounded-md hover:bg-rose-700 transition-colors">
                Add to Cart
              </button>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors">
                Edit Product
              </button>
              <button className="w-full bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors">
                Delete Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    : <Loading />
  )
}
