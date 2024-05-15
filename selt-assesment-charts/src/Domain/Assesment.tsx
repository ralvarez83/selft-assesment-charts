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
  
  public getTeamEvaluations = (): Evaluation[] => {

    const evaluations = this.teamAssesments.reduce((totalArray, team) =>{
      return totalArray = totalArray.concat(team.evaluations)
    },new Array<Evaluation>(0))

    //console.log("Evaluations: ", evaluations)
    return evaluations
  }


  // public getTeamValorationComunications = (): number[] => {

  //   const valoration = this.teamAssesments.reduce((totalArray, team) =>{
  //     return totalArray = totalArray.concat(team.evaluations)
  //   },new Array<Evaluation>(0))

  //   //console.log("Evaluations: ", evaluations)
  //   return evaluations
  // }

}