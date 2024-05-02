import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Video } from './components/Video'
import './App.css'
import { VideoGrid } from './components/VideoGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-red-500'>
           hi there

      </div>
      <div>
        <VideoGrid />
      </div>
    </>
  )
}

export default App
