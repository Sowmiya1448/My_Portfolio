import React from 'react'
import Home from './html/Home'
import About from './html/About'
import Edu from './html/Edu'
import Contact from './html/Contact'
import { Routes,Route } from 'react-router-dom'
import Me from './html/Me'
import Project from './html/Project'


const App = () => {

  return (
    <div>
    <Home></Home>
    <Routes>
      <Route path='/' element={<Me/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/edu' element={<Edu/>}/>
      <Route path='/contact/' element={<Contact/>}/>
     
      
  </Routes>

{/* <About></About>
<Project></Project>
<Edu></Edu>
<Contact></Contact> */}


  </div>
  )
}

export default App