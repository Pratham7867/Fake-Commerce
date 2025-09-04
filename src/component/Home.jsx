import React, { useContext, useEffect, useState } from 'react'
import VerticalNav from './VerticalNav'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../utils/context'
import Loading from './Loading'
import instant from '../utils/Axios'

export default function Home() {
  const [products] = useContext(ProductContext)
  const [filteredProducts, setFilteredProducts] = useState(products)
  const { search } = useLocation()
  const category = search ? decodeURIComponent(search.split('=')[1]) : null

  const getCategory = async () => {
    try {
      const { data } = await instant.get(`/products/category/${category}`)
      setFilteredProducts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (category) {
      getCategory()
    } else {
      setFilteredProducts(products)
    }
  }, [category, products])

  return (products ?
    <>
      <div className='flex flex-row w-full'>
        <VerticalNav />
        <div className='h-screen w-[85%] absolute right-0'>
          <div className="flex flex-wrap gap-4 p-4 ml-6 mt-10">
            {filteredProducts && filteredProducts.map((p, i) => (
              <div key={i} className="w-64 mt-10 bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-40 h-40 "
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{p.title}</h3>
                  <Link to={`/details/${p.id}`} className="text-rose-600 mt-2">Know More </Link>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-rose-600">${p.price}</span>
                    <Link className="bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700 transition-colors">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </> : <Loading />
  )
}
