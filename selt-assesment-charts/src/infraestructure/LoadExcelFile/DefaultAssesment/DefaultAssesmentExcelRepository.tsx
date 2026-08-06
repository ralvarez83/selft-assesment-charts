import { Assesment } from "../../../Domain/Assesment";
import { AssesmentExcelRepository } from "../AssesmentExcelRepository";
import { Solicitudes } from "../../../Domain/Solicitudes";
import { TeamAssesment } from "../../../Domain/TeamAssesment";
import { DefaultPersonAssesmentTransformation } from "./DefaultPersonAssesmentTransformation";
import { DefaultAssesmentSchemaData } from "./types";
import type { Schema } from "read-excel-file/browser";
import { DefaultAssesmentSchema } from "./DefaultAssesmentSchema";
import { DefaultEvaluations } from "../../../Domain/DefaultAssesment/DefaultEvaluations";
import { Evaluation } from "../../../Domain/DefaultAssesment/type";

export class DefaultAssementExcelRepository implements AssesmentExcelRepository<DefaultAssesmentSchemaData> {
  
  getSchema = () : Schema<DefaultAssesmentSchemaData> =>{
    return DefaultAssesmentSchema
  }

  transformRowsToAssesment (rows: DefaultAssesmentSchemaData[]) : Assesment {

    const teamAssesments = rows.reduce((totalAssesment: TeamAssesment[], personAssesment) => {
      const assesmentData = new DefaultPersonAssesmentTransformation(personAssesment)
      const excelData = assesmentData.excelAssesment
      const {equipo, areasSolicitantes, comunicacionOtrasAreas, canalSolicitud, otrasMejoras} = excelData

      if (totalAssesment.find((team: TeamAssesment) => {return team.name === equipo}) === undefined){
        const newTeam : TeamAssesment = new TeamAssesment(
          equipo, 
          new DefaultEvaluations([{... (excelData as Evaluation)}]),
          [new Solicitudes(areasSolicitantes, comunicacionOtrasAreas, canalSolicitud)],
          [otrasMejoras]
        )

        totalAssesment = [
          ... totalAssesment,
          newTeam
        ]
      }
      else{
        totalAssesment = totalAssesment.map(team => {
          if (team.name === equipo)
            team.evaluations = new DefaultEvaluations([
              ... (team.evaluations.value as Evaluation[]),
              {... (excelData as Evaluation)}
            ])
            team.solicitudes = [
              ... team.solicitudes,
              new Solicitudes(areasSolicitantes, comunicacionOtrasAreas, canalSolicitud)
            ]
            team.otrasMejoras = [
              ... team.otrasMejoras,
              otrasMejoras
            ]
          return team;
        })
      }

      return totalAssesment;

    }, Array<TeamAssesment>(0))
    
    return new Assesment(teamAssesments)
  }
}