import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div className='my-5 py-5 px-3 text-center'>
        <h1> 404 - page Not Found </h1>
        <p className='fs20'>This page is not found <Link href="/hcp" >Go to Home page</Link></p>
        
    </div>
  )
}

export default notFound