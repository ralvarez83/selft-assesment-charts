import type { Schema } from 'read-excel-file/browser'
import type { DefaultAssesmentSchemaData } from './types'

// read-excel-file v9 invierte el esquema: se indexa por la propiedad del
// objeto resultante y el título de la columna del Excel va en `column`.
export const DefaultAssesmentSchema: Schema<DefaultAssesmentSchemaData> = {
  id: {
    column: 'Id',
    type: Number
  },
  equipo: {
    column: '¿A qué equipo perteneces?',
    type: String
  },
  multidisciplinar: {
    column: 'Somos un equipo multidisciplinar',
    type: String
  },
  trabajoDesdeBacklog: {
    column: 'Todo el trabajo de nuestro equipo proviene del Backlog',
    type: String
  },
  mejoraContinua: {
    column: 'Mejoramos continuamente nuestra forma de trabajar en equipo',
    type: String
  },
  coResponsabilidad: {
    column: 'Todos nos responsabilizamos con el trabajo realizado por cualquier miembro del equipo',
    type: String
  },
  feedbackUsuarios: {
    column: 'Recopilamos feedback de nuestros usuarios.',
    type: String
  },
  coordinacionInterEquipos: {
    column: 'Nos organizamos con otros equipos para optimizar la entrega de valor',
    type: String
  },
  progresoPorTrabajoTerminado: {
    column: 'Medimos el progreso basado en el trabajo entregado',
    type: String
  },
  eventosScrumKanban: {
    column: 'El equipo realiza los eventos de Scrum o Kanban',
    type: String
  },
  rolesScrumKanban: {
    column: 'El equipo tiene los roles de Scrum o Kanban',
    type: String
  },
  backlogGestionadoPriorizadoActualizado: {
    column: 'El backlog del equipo está gestionado, priorizado y actualizado',
    type: String
  },
  areasSolicitantes: {
    column: '¿Qué áreas os piden trabajo?',
    type: String
  },
  canalSolicitud: {
    column: '¿Qué canal o canales?',
    type: String
  },
  comunicacionOtrasAreas: {
    column: 'Cómo calificarías la comunicación con las otras áreas (muy mala, mala, normal, buena o muy buena)',
    type: Number
  },
  otrasMejoras: {
    column: 'Otras situaciones susceptibles de ser mejoradas',
    type: String
  }
}
