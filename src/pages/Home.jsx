import React from 'react'
import background from '../assets/picture1.jpg'

export default function Home() {
  return (
    <div style={{backgroundImage: `url(${background})`,
        backgroundRepeat:'none',
        backgroundSize:'cover'
    }}>
      Home
    </div>
  )
}
