
import Banner from '../Components/Banner/Banner'
import Commercial from '../Components/Commercial/Commercial'
import Footer from '../Components/Footer/Footer'
import Gallery from '../Components/Gallery/Gallery'
import Navbar from '../Components/Navbar/Navbar'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import ProductsLimit from '../Components/ProductsLimit/ProductsLimit'
import ProductsLimitTwo from '../Components/ProductsLimitTwo/ProductsLimitTwo'
import Slider from '../Components/Slider/Slider'
import style from '../Styles/Home.module.scss'

export default function Home() {

  return (
   <>
   <Navbar/>
     <Slider/>
   <div className={`${style.home} py-5`}>
    <div className="container">
    <h2 className='py-5'>Featured Products</h2>
    <div className="row">
    <div className="col-md-4">
    <Commercial/>
       </div>
       <div className="col-md-8">
        <ProductsLimit/>   
       </div>  
    </div>
    </div>
   </div> 
   <Banner/>
   <div className={`${style.allProducts} py-3`}>
    <div className="container">
      <h2 className='py-4'>Daily Essentials</h2>
      <div>
      <ProductsLimitTwo/> 
      </div>
    </div>
   </div>
   <Gallery/>
   <NewsLetter/>
   <Footer/>
   </>
  )
}
