import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/context'

export default function AddProduct() {
  const [Product, setProduct] = useContext(ProductContext)
  const [formData, setFormData] = useState({
    imageLink: '',
    title: '',
    category: '',
    price: '',
    description: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validation
    const { imageLink, title, category, price, description } = formData

    if (
      title.trim().length < 0 ||
      imageLink.trim().length === 0 ||
      category.trim().length === 0 ||
      price.trim().length === 0 ||
      description.trim().length === 0
    ) {
      alert('Please fill all the fields correctly.')
      return
    }

    // Add new product to the product list
    setProduct([...Product, formData])

    // Reset form data
    setFormData({
      imageLink: '',
      title: '',
      category: '',
      price: '',
      description: ''
    })
  }

  return (
    <div className="min-h-screen flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-zinc-300 rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Add New Product</h2>
        
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="imageLink">
            Image Link
          </label>
          <input 
            type="text"
            id="imageLink"
            className="w-full px-3 py-2 bg-zinc-800 text-white border border-gray-300 rounded-md focus:outline-none focus:border-rose-500"
            placeholder="Enter image URL"
            value={formData.imageLink}
            onChange={(e) => setFormData({...formData, imageLink: e.target.value})}
          />
        </div>

        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input 
            type="text"
            id="title"
            className="w-full px-3 py-2 bg-zinc-800 text-white border border-gray-300 rounded-md focus:outline-none focus:border-rose-500"
            placeholder="Enter product title"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
          />
        </div>

        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="category">
              Category
            </label>
            <input 
              type="text"
              id="category"
              className="w-full px-3 py-2 bg-zinc-800 text-white border border-gray-300 rounded-md focus:outline-none focus:border-rose-500"
              placeholder="Enter product category"
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            />
          </div>

          <div className="w-1/2">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input 
              type="text"
              id="price"
              className="w-full px-3 py-2 bg-zinc-800 text-white border border-gray-300 rounded-md focus:outline-none focus:border-rose-500"
              placeholder="Enter product price"
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: e.target.value})}
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            className="w-full px-3 py-2 bg-zinc-800 text-white border border-gray-300 rounded-md focus:outline-none focus:border-rose-500"
            rows="4"
            placeholder="Enter product description"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          ></textarea>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-rose-600 text-white py-2 px-4 rounded-md hover:bg-rose-700 transition-colors"
        >
          Add Product
        </button>
      </div>
    </div>
  )
}
