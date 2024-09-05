import React from 'react'
import { Link } from 'react-router-dom'

export default function Cards( {items }) {
    
  return (
    <>
    <Link  to={`/products/${items.id}`}  className="lg:w-1/4 md:w-1/2 p-4 shadow hover:bg-gray-100 border rounded">
    
    
     <div   >
  <a className="block relative h-48 rounded overflow-hidden">
    <img
      alt="ecommerce"
      className="object-center w-full h-full block"
      src={items.thumbnail}
    />
  </a>
  <div className="mt-4">
    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
      {items.category}
    </h3>
    <h2 className="text-gray-900 title-font text-lg font-medium">
      {items.title}
    </h2>
    <p className="mt-1">${items.price}</p>
  </div>
</div>
    </Link>
    </>
  )
}
