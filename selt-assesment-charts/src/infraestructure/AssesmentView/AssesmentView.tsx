import { TeamAssesment } from "../../Domain/TeamAssesment";

export interface AssesmentView {
  get teamAssesments(): TeamAssesment[]
  getGlobalAsATeam (): TeamAssesment
}