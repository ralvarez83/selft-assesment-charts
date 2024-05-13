import { useState } from 'react'
import './App.css'
import { LoadFile } from './components/LoadFile'
import { Assesment } from './Domain/type';

function App() {
  const [assesment, setAssesment] = useState<Assesment>();

  // const onUpload = (file : File) => {

  // }

  return (
    <>
      {!assesment && 
        <LoadFile setAssesment={setAssesment} />
      }
      
    </>
  )
}

export default App
