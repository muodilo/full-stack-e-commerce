import React from 'react'
import { Carousel } from "flowbite-react";
import M2 from '../../assets/cloth1.webp'
import M3 from '../../assets/cloth2.jpeg'
import M4 from '../../assets/cloth3.webp'
import M5 from '../../assets/cloth4.jpeg'


const HeroCourosel = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel pauseOnHover>
      <img src={M2} alt="..." />
      <img src={M3} alt="..." />
      <img src={M4} alt="..." />
      <img src={M5} alt="..." />
    </Carousel>
  </div>
  )
}

export default HeroCourosel
