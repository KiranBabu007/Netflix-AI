import React from 'react'

const GptSearchbar = () => {
  return (
    <div className='flex p-[8%] justify-center'>
      <form className=' w-1/2 bg-black grid grid-cols-12 rounded-lg'>
        <input className='p-4 m-4 col-span-9 rounded' type="text" placeholder='What would you like to watch today?' />
        <button className='col-span-3 py-2 m-4 px-4 text-white rounded-lg bg-red-600 hover:bg-red-700'>Search</button>
      </form>
    </div>
  )
}

export default GptSearchbar