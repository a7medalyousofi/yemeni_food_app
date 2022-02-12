import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="space-y-2">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
