import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {

  const handleClick = () => {
    toast.success("Hello Odilo!")
  }
  return (
    <div>
      <h1>Home page</h1>
    </div>
  )
}

export default Home
