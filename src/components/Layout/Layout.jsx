import React from 'react'
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import { CartContextProvider } from '../../context/cartContext.jsx';
const Layout = ({ children }) => {
  return (

      <>
      <CartContextProvider>
        <NavBar />
      </CartContextProvider>
      <div id='container'>
   
        {children}
        <Footer />
      </div>
      </>

  )
}

export default Layout