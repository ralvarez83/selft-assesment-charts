import{Assesment as AssesmentDomain} from '../../../Domain/Assesment'
import { DefaultEvaluations } from '../../../Domain/DefaultAssesment/DefaultEvaluations'
import { Evaluation } from '../../../Domain/DefaultAssesment/type'
import { Solicitudes } from '../../../Domain/Solicitudes'
import { TeamAssesment } from '../../../Domain/TeamAssesment'

export class Assesment {
  
  #assesment : AssesmentDomain
  
  constructor (assesment: AssesmentDomain){
    this.#assesment = assesment
  }

  public get teamAssesments() {
    return this.#assesment.teamAssesments
  }

  public getGlobalAsATeam (): TeamAssesment {
    return new TeamAssesment("Global", this.getTeamsEvaluations(), this.getTeamsRequest(), this.getTeamsOtherImprovements() )
  }

  private getTeamsEvaluations (): DefaultEvaluations {

    const evaluations = this.#assesment.teamAssesments.reduce((totalArray, team) =>{
      return totalArray = totalArray.concat(team.evaluations.value as Evaluation[])
    },new Array<Evaluation>(0))

    //console.log("Evaluations: ", evaluations)
    return new DefaultEvaluations (evaluations)
  }

  private getTeamsRequest (): Solicitudes[] {

    const requests = this.#assesment.teamAssesments.reduce((totalRequests, team) =>{
      return totalRequests = totalRequests.concat(team.solicitudes)
    },new Array<Solicitudes>(0))

    //console.log("Evaluations: ", evaluations)
    return requests
  }

  private getTeamsOtherImprovements (): string[] {
    const otherImprovements = this.#assesment.teamAssesments.reduce((totalOtherImprovements, team) =>{
      return totalOtherImprovements = totalOtherImprovements.concat(team.otrasMejoras)
    },new Array<string>(0))

    //console.log("Evaluations: ", evaluations)
    return otherImprovements
  } 

}