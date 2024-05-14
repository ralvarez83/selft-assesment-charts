import { MedianFromArray } from "../Shared/Math/MedianFromArray";
import { TeamAssesment } from "./TeamAssesment";
import { Evaluation } from "./type";

export class Assesment {
  public teamAssesments : TeamAssesment[]
  private _mediane : Evaluation

  public get mediane (){
    return this._mediane
  }

  public constructor (teamAssesments : TeamAssesment[]){
    this.teamAssesments = teamAssesments
    this._mediane = this.calculataMediane()
  }

  private calculataMediane = (): Evaluation =>  {

    const allEvaluations : Evaluation[] = this.getTeamEvaluations()

    const medianeEvaluation : Evaluation = {
      backlogGestionadoPriorizadoActualizado: this.calcMedian(allEvaluations.map(evaluation => {return evaluation.backlogGestionadoPriorizadoActualizado})),
      canalSolicitud: [],
      coResponsabilidad: this.calcMedian(allEvaluations.map(evaluation => {return evaluation.coResponsabilidad})),
      coordinacionInterEquipos: this.calcMedian(allEvaluations.map(evaluation => {return evaluation.coordinacionInterEquipos})),
      eventosScrumKanban: this.calcMedian(allEvaluations.map(evaluation => {return evaluation.eventosScrumKanban})),
      feedbackUsuarios: this.calcMedian(allEvaluations.map(evaluation => {return evaluation.feedbackUsuarios})),
      id: 0,
      mejoraContinua: this.calcMedian(allEvaluations.map(evaluation => {return evaluation.mejoraContinua})),
      multidisciplinar: this.calcMedian(allEvaluations.map(evaluation => {return evaluation.multidisciplinar})),
      progresoPorTrabajoTerminado: this.calcMedian(allEvaluations.map(evaluation => {return evaluation.progresoPorTrabajoTerminado})),
      rolesScrumKanban: this.calcMedian(allEvaluations.map(evaluation => {return evaluation.rolesScrumKanban})),
      trabajoDesdeBacklog: this.calcMedian(allEvaluations.map(evaluation => {return evaluation.trabajoDesdeBacklog})),
      areasSolicitantes: '',
      comunicacionOtrasAreas: this.calcMedian(allEvaluations.map(evaluation => {return evaluation.comunicacionOtrasAreas})),
      otrasMejoras: ''
    }
    
    return medianeEvaluation
  }
  
  public getTeamEvaluations = (): Evaluation[] => {

    const evaluations = this.teamAssesments.reduce((totalArray, team) =>{
      return totalArray = totalArray.concat(team.evaluations)
    },new Array<Evaluation>(0))

    //console.log("Evaluations: ", evaluations)
    return evaluations
  }

  private calcMedian = (arrayOfNumbers: number[]): number => {
    const mediaOperation = new MedianFromArray(arrayOfNumbers);
    return mediaOperation.run();
  }

}