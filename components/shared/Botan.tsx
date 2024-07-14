"use client"

import React from 'react'

const Botan = ({ text }: { text: string }) => {
  return (
    <button className='border border-kasutamu-600 duration-200 ease-linear
    px-6 py-2 rounded-lg text-black font-light bg-white dark:bg-kasutamu
    hover:bg-kasutamu-500' >
        {text}
    </button>
  )
}

export default Botan