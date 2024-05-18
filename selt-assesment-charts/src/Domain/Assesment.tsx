import { TeamAssesment } from "./TeamAssesment";

export class Assesment {

  public constructor (public teamAssesments : TeamAssesment[]){}

  public getTeamById (teamId: string): TeamAssesment | undefined{
    return this.teamAssesments.find(team => {
      return team.id === teamId
    })
  }

}