import { useState } from 'react'
import './App.css'
import { LoadFile } from './components/LoadFile'

function App() {
  const [data, setData] = useState("");

  // const onUpload = (file : File) => {

  // }

  return (
    <>
      {!data && 
        <LoadFile />
      }
    </>
  )
}

export default App
