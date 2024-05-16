import { ExcelAssesment } from "../types.d"
import { InformaDBSchemaData } from "./types.d"

export class InformaDBTransformation {

  private _excelAssesment : ExcelAssesment

  constructor(assesmentData: InformaDBSchemaData) {
    this._excelAssesment = {
      ... assesmentData,
      multidisciplinar: this.getOption(assesmentData.multidisciplinar),
      trabajoDesdeBacklog: this.getOption(assesmentData.trabajoDesdeBacklog),
      mejoraContinua: this.getOption(assesmentData.mejoraContinua),
      coResponsabilidad: this.getOption(assesmentData.coResponsabilidad),
      feedbackUsuarios: this.getOption(assesmentData.feedbackUsuarios),
      coordinacionInterEquipos: this.getOption(assesmentData.coordinacionInterEquipos),
      progresoPorTrabajoTerminado: this.getOption(assesmentData.progresoPorTrabajoTerminado),
      eventosScrumKanban: this.getOption(assesmentData.eventosScrumKanban),
      rolesScrumKanban: this.getOption(assesmentData.rolesScrumKanban),
      backlogGestionadoPriorizadoActualizado: this.getOption(assesmentData.backlogGestionadoPriorizadoActualizado),
      canalSolicitud: this.getChanels(assesmentData.canalSolicitud)
    }
  }

  private getOption = (value: string): number => {
    if (!value)
      return 0;
    return Number.parseInt(value.split(" ")[1])
  }

  private getChanels = (value:string) : string[] => {
    return value.split(";");
  }

  public get excelAssesment () {
    return this._excelAssesment
  }
}