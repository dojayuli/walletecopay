import React from 'react'

function LoaderLayout ({ children }) {
  return (
    <div className='flex items-center justify-center min-h-screen p-5 max-w-screen'>
      {children}
    </div>
  )
}

export default LoaderLayout
