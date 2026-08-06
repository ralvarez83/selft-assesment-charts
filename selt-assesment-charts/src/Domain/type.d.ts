// Marcador: cada tipo de auto-evaluación define su propia forma concreta.
export type Evaluation = object

export interface Evaluations {
  getMediane: () => Evaluation
  get value () : Evaluation[]
}