import React from 'react'
import { Button1 } from './Button'

function Cards({ products }) {
  return (
    products?.map((item) => {
      const { _id, name, price, description, photos } = item

      return (
        <div key={_id} className="flex flex-wrap justify-center gap-4 p-4">
          <div className="max-w-sm bg-white dark:bg-[#383838] rounded-lg shadow-md overflow-hidden transition-colors duration-200 hover:shadow-xl">
            <img className="object-cover w-full h-48" src={photos[0]} alt="Product" />
            <div className="p-4">
              <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">{name}</h2>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">{description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-[#e97730] dark:text-[#e97730]">PKR. {price}</span>
                <Button1 text={"View More"} size={"fit"} />
              </div>
            </div>
          </div>
        </div>
      )
    })
  )
}

export default Cards