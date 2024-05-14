import { MedianFromArray } from "../Shared/Math/MedianFromArray"
import { Evaluation } from "./type"

export class TeamAssesment{
  /**
   * constructor
   */
  public constructor(public name: string, public evaluations: Evaluation[]) {
    
  }

  private _mediane? : Evaluation

  public get mediane (): Evaluation {
    if (!this._mediane){
      this._mediane = {
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
    }
    
    return this._mediane
  }

  private calcMedian = (arrayOfNumbers: number[]) => {
    const mediaOperation = new MedianFromArray(arrayOfNumbers);
    return mediaOperation.run();
  }
}