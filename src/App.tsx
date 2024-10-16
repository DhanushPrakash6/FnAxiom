import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/nav'
import bg from '../src/images/bg.png'
function App() {

  return (
    <>
      <Nav/>
      <div className='w-full h-full'>
        <img src={bg} alt="" />
      </div>
    </>
  )
}

export default App
