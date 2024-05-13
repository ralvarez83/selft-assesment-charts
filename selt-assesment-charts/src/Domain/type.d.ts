export const BACKLOG_TRABAJADO = "Backlog trabajado"
export const CANAL_SOLICITUD = "Canal solicitud"
export const CO_RESPONSABILIDAD = "Co-responsabilidad"


export type Evaluation = {

  backlogGestionadoPriorizadoActualizado: number,
  canalSolicitud: Strint[],
  coResponsabilidad: number,
  coordinacionInterEquipos: number,
  eventosScrumKanban: number,
  feedbackUsuarios: number,
  id: number,
  mejoraContinua: number,
  multidisciplinar: number,
  progresoPorTrabajoTerminado: number,
  rolesScrumKanban: number,
  trabajoDesdeBacklog: number,
  areasSolicitantes: string,
  comunicacionOtrasAreas: number
  otrasMejoras: string,
}

export type Assesment = TeamAssesment[]