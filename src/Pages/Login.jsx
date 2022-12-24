import React from 'react'
import Cover from '../Components/Cover/Cover'
import LoginForm from '../Components/LoginForm/LoginForm'
import PageNavbar from '../Components/PageNavbar/PageNavbar'

export default function Login() {
  return (
    <>
    <PageNavbar />
      <Cover />
      <div className="container">
      <h3 className='py-4 text-center'>Login</h3>
       <LoginForm/>
      </div>
    </>
  )
}
