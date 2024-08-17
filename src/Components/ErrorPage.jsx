import React from 'react'

function ErrorPage() {
  return (
    <div className='min-h-screen bg-white flexs  flex logg'>
        <div className=' w-[50%] m-auto max-sm:w-full '>
        <img className='w-[70%] m-auto opacity-60 ' src="404 error lost in space-cuate.png" alt=""  />
        <p className='text-center text-2xl text-gray-400  max-sm:text-sm'>Can't connected Try again !</p>
        </div>
    </div>
  )
}

export default ErrorPage