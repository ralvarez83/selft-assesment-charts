import { createContext } from 'react'
import { Assesment } from './Domain/Assesment'

// Vive fuera de App.tsx para que ese fichero solo exporte componentes y el
// Fast Refresh de Vite pueda recargar la aplicación sin perder el estado.
export type AssesmentContextType = {
  assesment: Assesment | undefined,
  cargaAssesment: (newAssesment: Assesment) => void
}

export const AssesmentContext = createContext<AssesmentContextType|null>(null);
