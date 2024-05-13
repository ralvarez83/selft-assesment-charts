import { Evaluation } from "./type"

export class TeamAssesment{
  public name: string = ""

  public evaluations: Evaluation[] = []

  public get mediane (): Evaluation {
    const medianeEvaluation : Evaluation = {
      backlogGestionadoPriorizadoActualizado: this.calcMedian(this.evaluations.map(evaluation => {return evaluation.backlogGestionadoPriorizadoActualizado})),
      canalSolicitud: [],
      coResponsabilidad: this.calcMedian(this.evaluations.map(evaluation => {return evaluation.coResponsabilidad})),
      coordinacionInterEquipos: this.calcMedian(this.evaluations.map(evaluation => {return evaluation.coordinacionInterEquipos})),
      eventosScrumKanban: this.calcMedian(this.evaluations.map(evaluation => {return evaluation.eventosScrumKanban})),
      feedbackUsuarios: this.calcMedian(this.evaluations.map(evaluation => {return evaluation.feedbackUsuarios})),
      id: 0,
      mejoraContinua: this.calcMedian(this.evaluations.map(evaluation => {return evaluation.mejoraContinua})),
      multidisciplinar: this.calcMedian(this.evaluations.map(evaluation => {return evaluation.multidisciplinar})),
      progresoPorTrabajoTerminado: this.calcMedian(this.evaluations.map(evaluation => {return evaluation.progresoPorTrabajoTerminado})),
      rolesScrumKanban: this.calcMedian(this.evaluations.map(evaluation => {return evaluation.rolesScrumKanban})),
      trabajoDesdeBacklog: this.calcMedian(this.evaluations.map(evaluation => {return evaluation.trabajoDesdeBacklog})),
      areasSolicitantes: '',
      comunicacionOtrasAreas: this.calcMedian(this.evaluations.map(evaluation => {return evaluation.comunicacionOtrasAreas})),
      otrasMejoras: ''
    }
    
    return medianeEvaluation
  }

  private calcMedian = (arrayOfNumbers: number[]) => {
    const half = Math.floor(arrayOfNumbers.length / 2);
    arrayOfNumbers.sort(function(a, b) { return a - b;});
  
    if (arrayOfNumbers.length % 2) {
      return arrayOfNumbers[half];
    } else {
      return arrayOfNumbers[half];
    }
  }
}