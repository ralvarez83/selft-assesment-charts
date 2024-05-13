import { Evaluation } from "../../Domain/type";

const getOption = (value: string): number => {
  if (!value)
    return 0;
  return Number.parseInt(value.split(" ")[1])
}
export type Input = File | Blob | ArrayBuffer;

export const schema = {
  'Id': {
    prop: 'Id',
    type: Number
  },
  '¿A qué equipo perteneces?': {
    prop: 'Equipo',
    type: String
  },
  'Somos un equipo multidisciplinar': {
    prop: 'Multidisciplinar',
    type: (value:string) => {return getOption(value)}
  },
  'Todo el trabajo de nuestro equipo proviene del Backlog': {
    prop: 'Trabajo desde Backlog',
    type: (value:string) => {return getOption(value)}
  },
  'Mejoramos continuamente nuestra forma de trabajar en equipo': {
    prop: 'Mejora continua',
    type: (value:string) => {return getOption(value)}
  },
  'Todos nos responsabilizamos con el trabajo realizado por cualquier miembro del equipo': {
    prop: 'Co-responsabilidad',
    type: (value:string) => {return getOption(value)}
  },
  'Recopilamos feedback de nuestros usuarios.': {
    prop: 'Feedback usuarios',
    type: (value:string) => {return getOption(value)}
  },
  'Nos organizamos con otros equipos para optimizar la entrega de valor': {
    prop: 'Coordinación inter-equipos',
    type: (value:string) => {return getOption(value)}
  },
  'Medimos el progreso basado en el trabajo entregado': {
    prop: 'Progreso por trabajo terminado',
    type: (value:string) => {return getOption(value)}
  },
  'El equipo realiza los eventos de Scrum o Kanban': {
    prop: 'Evento (Scrum o Kanban)',
    type: (value:string) => {return getOption(value)}
  },
  'El equipo tiene los roles de Scrum o Kanban': {
    prop: 'Roles (Scrum o Kanban)',
    type: (value:string) => {return getOption(value)}
  },
  'El backlog del equipo está gestionado, priorizado y actualizado': {
    prop: 'Backlog trabajado',
    type: (value:string) => {return getOption(value)}
  },
  '¿Qué áreas os piden trabajo?': {
    prop: 'Áreas solicitantes',
    type: String
  },
  '¿Qué canal o canales?': {
    prop: 'Canal solicitud',
    type: (value:string) => {
      return value.split(";");
    }
  },
  'Cómo calificarías la comunicación con las otras áreas (muy mala, mala, normal, buena o muy buena)': {
    prop: 'Comunicación con otras áreas',
    type: Number
  },
  'Otras situaciones susceptibles de ser mejoradas': {
    prop: 'Otras mejoras',
    type: String
  }
}

export type ExcelAssesment = Evaluation & { 'Equipo': string }
