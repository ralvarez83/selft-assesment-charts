import { MedianFromArray } from "../../Shared/Math/MedianFromArray"
import { Evaluations } from "../type"
import { Evaluation } from "./type"

export class DefaultEvaluations implements Evaluations {

  private _mediane? : Evaluation


  public constructor (public value: Evaluation[]){}


  public getMediane (): Evaluation {
    if (!this._mediane){
      this._mediane = {
        backlogGestionadoPriorizadoActualizado: this.calcMedian(this.value.map(evaluation => {return evaluation.backlogGestionadoPriorizadoActualizado})),
        canalSolicitud: [],
        coResponsabilidad: this.calcMedian(this.value.map(evaluation => {return evaluation.coResponsabilidad})),
        coordinacionInterEquipos: this.calcMedian(this.value.map(evaluation => {return evaluation.coordinacionInterEquipos})),
        eventosScrumKanban: this.calcMedian(this.value.map(evaluation => {return evaluation.eventosScrumKanban})),
        feedbackUsuarios: this.calcMedian(this.value.map(evaluation => {return evaluation.feedbackUsuarios})),
        id: 0,
        mejoraContinua: this.calcMedian(this.value.map(evaluation => {return evaluation.mejoraContinua})),
        multidisciplinar: this.calcMedian(this.value.map(evaluation => {return evaluation.multidisciplinar})),
        progresoPorTrabajoTerminado: this.calcMedian(this.value.map(evaluation => {return evaluation.progresoPorTrabajoTerminado})),
        rolesScrumKanban: this.calcMedian(this.value.map(evaluation => {return evaluation.rolesScrumKanban})),
        trabajoDesdeBacklog: this.calcMedian(this.value.map(evaluation => {return evaluation.trabajoDesdeBacklog})),
        areasSolicitantes: '',
        comunicacionOtrasAreas: this.calcMedian(this.value.map(evaluation => {return evaluation.comunicacionOtrasAreas})),
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