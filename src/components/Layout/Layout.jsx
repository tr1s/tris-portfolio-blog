import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = (props) => {
  const { children, location } = props

  return (
    <div>
      <Header />
      {children}
      {/* {location.pathname !== "/" && (
      <Footer />
    )} */}
      <Footer />
    </div>
  )
}

export default Layout
