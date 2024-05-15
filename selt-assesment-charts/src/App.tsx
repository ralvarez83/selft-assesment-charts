import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom'
import { createContext, useState } from 'react'
import './App.css'
import { LoadFile } from './components/LoadFile'
import { Assesments } from './components/Assesment';
import Navbar from './components/Navbar';
import { DevFooter } from './components/DevFooter';
import { Assesment } from './Domain/Assesment';


export const AssesmentContext = createContext(null);

function App() {
  const [assesment, setAssesment] = useState<Assesment>();

  const cargaAssesment = (newAssesment: Assesment) => {
    setAssesment(newAssesment)
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
        <Router>
          <Routes>
            {/* <Route path="/team/:id" element={<Team />} /> */}
            {!assesment && 
              <Route path="/" element={<LoadFile />}/>
            }
            {assesment &&
              <Route path="/" element={<Assesments />}/>
            }
          </Routes>
        </Router>
      </AssesmentContext.Provider>
      <DevFooter author="Rubén Álvarez" authorURL='https://github.com/ralvarez83' repositoryImgSrc='/github-mark.png' repositoryURL='https://github.com/ralvarez83/selft-assesment-charts'/>
    </>
  )
}

export default App
