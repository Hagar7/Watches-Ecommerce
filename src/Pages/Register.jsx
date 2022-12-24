import React from 'react'
import AddForm from '../Components/AddForm/AddForm'
import Cover from '../Components/Cover/Cover'
import PageNavbar from '../Components/PageNavbar/PageNavbar'

export default function Register() {
  return (
   <>
   <PageNavbar />
      <Cover />
      <div className="container">
        <h3 className='py-4 text-center'>Register</h3>
   <AddForm/>
      </div>
   </>
  )
}
