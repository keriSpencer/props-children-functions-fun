import React, { Component } from 'react'
import '../styles/App.css'
import BaseLayout from './BaseLayout'
import Header from './Header'
import Footer from './Footer'
import ParentComponent from './ParentComponent'
// import ChildComponent from './ChildComponent'
// import DisplayComponent from './DisplayComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout />
        <ParentComponent />
      </div>
    )
  }
}

export default App
