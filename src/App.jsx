import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/main/Main'
import { ToastContainer } from 'react-toastify'


const App = () => {
  return (
    <>
    <Sidebar/>
    <Main/>
    <ToastContainer/>


    </>
  )
}

export default App