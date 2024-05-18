import { MedianFromArray } from "../Shared/Math/MedianFromArray"
import { Solicitudes } from "./Solicitudes"
import { Evaluations, Evaluation } from "./type"

export class TeamAssesment{
  /**
   * constructor
   */
  public constructor(public name: string, public evaluations: Evaluations, public solicitudes: Solicitudes[], public otrasMejoras: string[]) {
    this._id = this.name.replace(' ', '-')
  }

  private _id : string

  public get id () : string {
    return this._id
  }

  public get mediane (): Evaluation {
    return this.evaluations.getMediane()
  }

  private _comunicationMediane? : number

  /**
   * get comunicacionMedian
   */
  public get comunicationMediane(): number {
    if (!this._comunicationMediane){
      this._comunicationMediane = this.calComunicationMediane()
    }

    return this._comunicationMediane
  }

  private calComunicationMediane  = (): number => {
    const comunicaciontValorations = this.solicitudes.map<number>((solicitud) => {
      return solicitud.comunicacionOtrasAreas
    })
    return (new MedianFromArray(comunicaciontValorations)).run()
  }

}