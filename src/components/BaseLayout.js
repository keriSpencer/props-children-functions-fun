import React, { Component } from 'react'
import '../styles/App.css'
import Header from './Header'
import Footer from './Footer'
import ChildComponent from './ChildComponent'
import DisplayComponent from './DisplayComponent'

class BaseLayout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="base">
        This should house Header and Footer components and be able to house any children components.
        <Header />
        {/* <DisplayComponent /> */}
        {/* <ChildComponent /> */}
        <Footer />
      </div>
    )
  }
}

export default BaseLayout
