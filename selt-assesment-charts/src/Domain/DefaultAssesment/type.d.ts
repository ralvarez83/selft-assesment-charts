export const BACKLOG_TRABAJADO = "Backlog trabajado"
export const CO_RESPONSABILIDAD = "Co-responsabilidad"
export const COORDINACION_INTER_EQUIPOS = "Coordinación Inter-Equipos"
export const EVENTOS_SCRUM_KANBAN = "Eventos (Scrum/Kanban)"
export const FEEDBACK_USUARIOS = "Feedback Usuarios"
export const MEJORA_CONTINUA = "Mejora Continua"
export const EQUIPOS_MULTIDISCIPLINARES = "Equipos Multidisciplinares"
export const PROGRESO_TRABAJO_TERMINADO = "Progreso por Trabajo Terminado"
export const ROLES_SCRUM_KANBAN = "Roles (Scrum/Kanban)"
export const TRABAJO_DESDE_BACKLOG = "Trabajo desde el backlog"



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