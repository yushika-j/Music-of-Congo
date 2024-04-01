import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <ul className="nav-bar">
        <li>Home</li>
         <li>Explore</li> {/* will contain songs/albums */}
        <li>Sign Up</li>
        <li>About</li>
      </ul>
    </div>
    <div>
      body
    </div>
    <footer>footer</footer>
    </>
  )
}

export default App
