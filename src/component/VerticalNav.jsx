import React, { useContext } from 'react'
import { ProductContext } from '../utils/context'
import { Link } from 'react-router-dom'

export default function VerticalNav() {
  const [products] = useContext(ProductContext)

  const uniqueCategories = products?.reduce((acc, vc) => {
    if (!acc.includes(vc.category)) {
      return [...acc, vc.category]
    }
    return acc                                                                                                                                                                     
  }, [])

  return (
    <div className="w-[15%] h-screen bg-white shadow-lg fixed left-0">
      <div className="">
        <Link to="/AddProduct" className="w-full bg-rose-600 text-white mt-5 py-2 px-4 rounded-md hover:bg-rose-700 transition-colors flex items-center justify-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">

            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          <span>Add Products</span>
        </Link>
      </div>
      <div className="p-4 space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2 uppercase">Categories Filter</h2>
          <div className="space-y-2">
            <Link to='/' className="text-gray-600 hover:text-rose-600 transition-colors block capitalize">All Products</Link>
            {uniqueCategories?.map((category, index) => (
              <Link 
                key={index}
                to={`/?category=${category}`} 
                className="text-gray-600 hover:text-rose-600 transition-colors block capitalize"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}