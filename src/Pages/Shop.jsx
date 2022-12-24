import React from 'react'

import Cover from '../Components/Cover/Cover';
import Footer from '../Components/Footer/Footer';
import PageNavbar from '../Components/PageNavbar/PageNavbar';
import Products from '../Components/Products/Products'
import style from '../Styles/Shop.module.scss'

export default function Shop() {
  return (
    <>
    <PageNavbar />
    <Cover />
    <div className={`${style.shop} container py-5`}>    
    <Products/>
    </div>
    <Footer/>
   
    </>
  )
}
