import React from 'react'


const Addproducts = () => {
  return (
    <div className=' bg-gray-100 min-h-screen p-4 flex justify-center items-center ' >
      <form action="" className='bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4 ' >
        <h2 className='text-2xl font-bold text-gray-700 col-span-full mb-4 text-center' > Add new product </h2>
        <input type="text" placeholder='name' />
        <textarea type="text" className='border border-gray-300  rounded px-4 ' placeholder='decription' />
        <input type="number"  className=' ' placeholder='price' />
        <input type="text"  placeholder='category' />
        <input type="number" placeholder='stock quantity' />
        <input type="date" placeholder='release date' />
        <input type="file" placeholder='image' />
        <input type="checkbox" placeholder='product aviable ?' />
        
      </form>
    </div>
  )
}

export default Addproducts
