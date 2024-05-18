import { TeamAssesment } from "../../../Domain/TeamAssesment"
import { BACKLOG_TRABAJADO, COORDINACION_INTER_EQUIPOS, CO_RESPONSABILIDAD, EQUIPOS_MULTIDISCIPLINARES, EVENTOS_SCRUM_KANBAN, FEEDBACK_USUARIOS, MEJORA_CONTINUA, PROGRESO_TRABAJO_TERMINADO, ROLES_SCRUM_KANBAN, TRABAJO_DESDE_BACKLOG } from "../../../Domain/DefaultAssesment/type.d"
import { ChartDataGenerator, DataChart, DataSetElement } from "../type.d"
import { Evaluation } from "../../../Domain/DefaultAssesment/type.d"

export class RadarData implements ChartDataGenerator {

  private _teamsData : TeamAssesment[]

  public constructor ( teamsData: TeamAssesment[]) {
    this._teamsData = teamsData
  }

  getDataChart = () : DataChart => {
    const labels : string[] = [BACKLOG_TRABAJADO, CO_RESPONSABILIDAD, COORDINACION_INTER_EQUIPOS, EVENTOS_SCRUM_KANBAN, ROLES_SCRUM_KANBAN, FEEDBACK_USUARIOS, MEJORA_CONTINUA, EQUIPOS_MULTIDISCIPLINARES, PROGRESO_TRABAJO_TERMINADO, TRABAJO_DESDE_BACKLOG]

    const datasets = this._teamsData.reduce((totalDada, teamData) => {
      const medianeEvaluation : Evaluation = teamData.evaluations.getMediane() as Evaluation
      totalDada = [
        ... totalDada,
        {
          label: teamData.name,
          data: [
            medianeEvaluation.backlogGestionadoPriorizadoActualizado, 
            medianeEvaluation.coResponsabilidad,
            medianeEvaluation.coordinacionInterEquipos,
            medianeEvaluation.eventosScrumKanban,
            medianeEvaluation.rolesScrumKanban,
            medianeEvaluation.feedbackUsuarios,
            medianeEvaluation.mejoraContinua,
            medianeEvaluation.multidisciplinar,
            medianeEvaluation.progresoPorTrabajoTerminado,
            medianeEvaluation.trabajoDesdeBacklog
          ]
        }
      ]
      return totalDada
    },new Array<DataSetElement>(0))
  
    return {
      labels,
      datasets
    }
  }

  
 

}