import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>

      <ul className="nav-bar">
        <li><a href="home.html">Home</a></li>
        <li><a href="explore.html">Explore</a></li> {/* will contain songs/albums */}
        <li><a href="login.html">Log In</a></li>
        <li><a href="about.html">About</a></li>
      </ul>
    
      <div className='gallery'>
        <a><img src="img.jpg" /></a>
      </div>

      <div className='gallery'>
        <a><img src="img.jpg" /></a>
      </div>

      <div className='gallery'>
        <a><img src="img.jpg" /></a>
      </div>

      <div className='gallery'>
        <a><img src="img.jpg" /></a>
      </div>
      
    
    </div>
  )
}

export default App
