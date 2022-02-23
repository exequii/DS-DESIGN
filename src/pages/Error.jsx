import React from 'react'

import Navbar from '../components/NavBar'
import Whatsapp from '../components/Whatsapp'
import NotFound from '../components/NotFound'
import Footer from '../components/Footer'

export const Error = () => {
  return (
    <div>
        <Navbar></Navbar>
        <NotFound></NotFound>
        <Whatsapp></Whatsapp>
        <Footer></Footer>
    </div>
  )
}
