import React from 'react'
import Movie from './Movie'
import Event from './Event'
import Carousel from './Carousel'
import Support from './Support'
export default function HomePage() {

  return (
    <div style={{backgroundColor: '#212121'}}>
      <Carousel/>
      <Movie/>
      <Event/>
      <Support/>
    </div>
  )
}
