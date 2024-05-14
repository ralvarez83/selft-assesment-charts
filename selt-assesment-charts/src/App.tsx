import { useState } from 'react'
import './App.css'
import { LoadFile } from './components/LoadFile'
import { Assesment } from './Domain/type';
import { Assesments } from './components/Assesment';

function App() {
  const [assesment, setAssesment] = useState<Assesment>();

  // const onUpload = (file : File) => {

  // }
  // Usar https://react-chartjs-2.js.org/
  return (
    <>
    <header>
      <h1>Datos de Auto-Evaluación</h1>
    </header>
    <main>
      {!assesment && 
        <LoadFile setAssesment={setAssesment} />
      }
      {assesment &&
        <Assesments dataAssesment={assesment} />
      }
    </main>
    </>
  )
}

export default App
