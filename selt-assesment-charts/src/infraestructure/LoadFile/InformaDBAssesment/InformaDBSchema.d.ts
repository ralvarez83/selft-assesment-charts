export const InformaDBSchema = {
  'Id': {
    prop: "id",
    type: Number
  },
  '¿A qué equipo perteneces?': {
    prop: 'equipo',
    type: String
  },
  'Somos un equipo multidisciplinar': {
    prop: 'multidisciplinar',
    type: String
  },
  'Todo el trabajo de nuestro equipo proviene del Backlog': {
    prop: 'trabajoDesdeBacklog',
    type: String
  },
  'Mejoramos continuamente nuestra forma de trabajar en equipo': {
    prop: 'mejoraContinua',
    type: String
  },
  'Todos nos responsabilizamos con el trabajo realizado por cualquier miembro del equipo': {
    prop: 'coResponsabilidad',
    type: String
  },
  'Recopilamos feedback de nuestros usuarios.': {
    prop: 'feedbackUsuarios',
    type: String
  },
  'Nos organizamos con otros equipos para optimizar la entrega de valor': {
    prop: 'coordinacionInterEquipos',
    type: String
  },
  'Medimos el progreso basado en el trabajo entregado': {
    prop: 'progresoPorTrabajoTerminado',
    type: String
  },
  'El equipo realiza los eventos de Scrum o Kanban': {
    prop: 'eventosScrumKanban',
    type: String
  },
  'El equipo tiene los roles de Scrum o Kanban': {
    prop: 'rolesScrumKanban',
    type: String
  },
  'El backlog del equipo está gestionado, priorizado y actualizado': {
    prop: 'backlogGestionadoPriorizadoActualizado',
    type: String
  },
  '¿Qué áreas os piden trabajo?': {
    prop: 'areasSolicitantes',
    type: String
  },
  '¿Qué canal o canales?': {
    prop: 'canalSolicitud',
    type: String
  },
  'Cómo calificarías la comunicación con las otras áreas (muy mala, mala, normal, buena o muy buena)': {
    prop: 'comunicacionOtrasAreas',
    type: Number
  },
  'Otras situaciones susceptibles de ser mejoradas': {
    prop: 'otrasMejoras',
    type: String
  }
}