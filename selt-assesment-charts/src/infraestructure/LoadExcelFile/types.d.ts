import { Evaluation } from "../../Domain/DefaultAssesment/type";

export type ExcelAssesment = Evaluation & { 
  equipo: string,
  areasSolicitantes: string,
  comunicacionOtrasAreas: number,
  canalSolicitud: string[],
  otrasMejoras: string
}
