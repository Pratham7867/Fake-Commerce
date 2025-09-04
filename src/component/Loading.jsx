import React from 'react'

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-rose-600 border-solid"></div>
      <span className="ml-4 text-xl text-gray-700">Loading...</span>
    </div>
  )
}
