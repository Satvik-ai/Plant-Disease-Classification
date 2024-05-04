import React from 'react'
import Home from './Component/Home'
import About from './Component/About'
import Navbar from './Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Input from './Component/input'
import Error from './Component/Error'
import ContactPage from './Component/ContactPage'
function App() {
  return (
    <>
     <BrowserRouter>
    <Navbar/>
       <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Form' element={<About/>}/>
        <Route path='/input' element={<Input/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/ContactPage' element={<ContactPage/>}/>
        <Route path='/*' element={<Error/>}/>
       </Routes>
   </BrowserRouter>
    </>
  )
}

export default App