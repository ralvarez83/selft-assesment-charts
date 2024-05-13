import { Evaluation } from "../../Domain/type";

const getOption = (value: string): number => {
  if (!value)
    return 0;
  return Number.parseInt(value.split(" ")[1])
}
export type Input = File | Blob | ArrayBuffer;

export const schema = {
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
    type: (value:string) => {return getOption(value)}
  },
  'Todo el trabajo de nuestro equipo proviene del Backlog': {
    prop: 'trabajoDesdeBacklog',
    type: (value:string) => {return getOption(value)}
  },
  'Mejoramos continuamente nuestra forma de trabajar en equipo': {
    prop: 'mejoraContinua',
    type: (value:string) => {return getOption(value)}
  },
  'Todos nos responsabilizamos con el trabajo realizado por cualquier miembro del equipo': {
    prop: 'coResponsabilidad',
    type: (value:string) => {return getOption(value)}
  },
  'Recopilamos feedback de nuestros usuarios.': {
    prop: 'feedbackUsuarios',
    type: (value:string) => {return getOption(value)}
  },
  'Nos organizamos con otros equipos para optimizar la entrega de valor': {
    prop: 'coordinacionInterEquipos',
    type: (value:string) => {return getOption(value)}
  },
  'Medimos el progreso basado en el trabajo entregado': {
    prop: 'progresoPorTrabajoTerminado',
    type: (value:string) => {return getOption(value)}
  },
  'El equipo realiza los eventos de Scrum o Kanban': {
    prop: 'eventosScrumKanban',
    type: (value:string) => {return getOption(value)}
  },
  'El equipo tiene los roles de Scrum o Kanban': {
    prop: 'rolesScrumKanban',
    type: (value:string) => {return getOption(value)}
  },
  'El backlog del equipo está gestionado, priorizado y actualizado': {
    prop: 'backlogGestionadoPriorizadoActualizado',
    type: (value:string) => {return getOption(value)}
  },
  '¿Qué áreas os piden trabajo?': {
    prop: 'areasSolicitantes',
    type: String
  },
  '¿Qué canal o canales?': {
    prop: 'canalSolicitud',
    type: (value:string) => {
      return value.split(";");
    }
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

export type ExcelAssesment = Evaluation & { 'equipo': string }
