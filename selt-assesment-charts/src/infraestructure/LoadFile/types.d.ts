import { Evaluation } from "../../Domain/type";

export type Input = File | Blob | ArrayBuffer;

export type ExcelAssesment = Evaluation & { 
  equipo: string,
  areasSolicitantes: string,
  comunicacionOtrasAreas: number,
  canalSolicitud: string[],
  otrasMejoras: string
}
