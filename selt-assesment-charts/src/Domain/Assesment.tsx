import { Solicitudes } from "./Solicitudes";
import { TeamAssesment } from "./TeamAssesment";
import { Evaluation } from "./type";

export class Assesment {
  public teamAssesments : TeamAssesment[]

  public constructor (teamAssesments : TeamAssesment[]){
    this.teamAssesments = teamAssesments
  }

  public getTeamById (teamId: string): TeamAssesment | undefined{
    return this.teamAssesments.find(team => {
      return team.id === teamId
    })
  }

  public getGlobalAsATeam = (): TeamAssesment => {
    return new TeamAssesment("Global", this.getTeamsEvaluations(),this.getTeamsRequest(), this.getTeamsOtherImprovements() )
  }
  
  public getTeamsEvaluations = (): Evaluation[] => {

    const evaluations = this.teamAssesments.reduce((totalArray, team) =>{
      return totalArray = totalArray.concat(team.evaluations)
    },new Array<Evaluation>(0))

    //console.log("Evaluations: ", evaluations)
    return evaluations
  }


  private getTeamsRequest = (): Solicitudes[] => {

    const requests = this.teamAssesments.reduce((totalRequests, team) =>{
      return totalRequests = totalRequests.concat(team.solicitudes)
    },new Array<Solicitudes>(0))

    //console.log("Evaluations: ", evaluations)
    return requests
  }

  private getTeamsOtherImprovements = (): string[] => {
    const otherImprovements = this.teamAssesments.reduce((totalOtherImprovements, team) =>{
      return totalOtherImprovements = totalOtherImprovements.concat(team.otrasMejoras)
    },new Array<string>(0))

    //console.log("Evaluations: ", evaluations)
    return otherImprovements
  } 

}