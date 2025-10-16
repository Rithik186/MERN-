import React from 'react'
import Navbar from './components/Navbar'
import SimpleForm from './components/form'
import LikeDislike from './components/like-dislike'
import Counter from './components/hooks'

const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <SimpleForm></SimpleForm>
    <LikeDislike></LikeDislike>
    <Counter></Counter>
    </>
  )
}

export default App