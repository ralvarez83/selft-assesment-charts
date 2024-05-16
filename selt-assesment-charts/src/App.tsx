import {
  Route,
  Routes,
  useNavigate
} from 'react-router-dom'
import { createContext, useState } from 'react'
import './App.css'
import { LoadFile } from './components/LoadFile'
import { Assesments } from './components/Assesment';
import Navbar from './components/Navbar';
import { DevFooter } from './components/DevFooter';
import { Assesment } from './Domain/Assesment';
import { Team } from './components/Team';

export type AssesmentContextType = {
  assesment: Assesment | undefined,
  cargaAssesment: (newAssesment: Assesment) => void
}

export const AssesmentContext = createContext<AssesmentContextType|null>(null);

function App() {
  const [assesment, setAssesment] = useState<Assesment>();
  
  const navigate = useNavigate();

  const cargaAssesment = (newAssesment: Assesment) => {
    setAssesment(newAssesment)
    navigate('/assesment', {replace: true})
  }

  // const onUpload = (file : File) => {

  // }
  // Usar https://react-chartjs-2.js.org/
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <AssesmentContext.Provider value={{assesment, cargaAssesment}}>
          <Routes>
              <Route path="/" element={<LoadFile />}/>
              <Route path="/assesment/team/:id" element={<Team />} />
              <Route path="/assesment" element={<Assesments />}/>
          </Routes>
      </AssesmentContext.Provider>
      <DevFooter author="Rubén Álvarez" authorURL='https://github.com/ralvarez83' repositoryImgSrc='/github-mark.png' repositoryURL='https://github.com/ralvarez83/selft-assesment-charts'/>
    </>
  )
}

export default App
