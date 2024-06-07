import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () => {
  const [catagory,setCatagory] = useState('general')
  return (
    <div >
      <Navbar setCatagory={setCatagory}/>
      <Home catagory={catagory}/>
    </div>
  )
}

export default App
