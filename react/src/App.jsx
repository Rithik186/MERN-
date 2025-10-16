import React from 'react'
import Navbar from './components/Navbar'
import SimpleForm from './components/form'
import LikeDislike from './components/like-dislike'


const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <SimpleForm></SimpleForm>
    <LikeDislike></LikeDislike>
    </>
  )
}

export default App