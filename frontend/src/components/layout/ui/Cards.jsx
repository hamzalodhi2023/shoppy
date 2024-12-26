import React from 'react'
import { Button1 } from './Button'

function Cards({ _id, name, price, description, photos }) {

  return (
    <div className="flex justify-center gap-4 p-4 flex-wrap w-[410px]">
      <div className="max-w-sm bg-white dark:bg-[#383838] rounded-lg shadow-md overflow-hidden transition-colors duration-200 hover:shadow-xl flex flex-col">
        <img className="object-cover w-full h-48" src={photos[0]} alt="Product" />
        <div className="flex flex-col flex-grow p-4">
          <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">{name}</h2>
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">{description}</p>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-lg font-bold text-[#e97730] dark:text-[#e97730]">PKR. {price}</span>
            <Button1 text={"View More"} size={"fit"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
