import { useState } from 'react'
import './App.css'
import { LoadFile } from './assets/components/LoadFile'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState("");

  const onUpload = (file : File) => {

  }

  return (
    <>
      {!data && 
        <LoadFile onUpload={onUpload}/>
      }
    </>
  )
}

export default App
