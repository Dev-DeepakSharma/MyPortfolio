import React, { Children } from 'react'
import Navbar from '../common/Navbar'

const PortfolioLayout = ({children }) => {
  return (
    <div>
      <Navbar/>
      <main>{children }</main>
    </div>
  )
}

export default PortfolioLayout;
