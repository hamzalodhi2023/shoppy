import React from 'react'

function Title({ text1, text2 }) {
    return (
        <h2 className="mb-4 text-4xl text-center text-[#383838] font-bold dark:text-white"><span className='text-[#e97730]'>{text1}</span> {text2}</h2>
    )
}

export default Title