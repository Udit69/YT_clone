import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Video } from './components/Video'
import { Appbar } from './components/Appbar'
import './App.css'
import { VideoGrid } from './components/VideoGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>
        <Appbar />
        <VideoGrid />
      </div>
    </>
  )
}

export default App
