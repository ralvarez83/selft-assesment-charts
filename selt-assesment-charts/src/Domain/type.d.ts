
export type Evaluation = {

  "Backlog trabajado": number,
  "Canal solicitud": Strint[],
  "Co-responsabilidad": number,
  "Coordinación inter-equipos": number,
  "Evento (Scrum o Kanban)": number,
  "Feedback usuarios": number,
  Id: number,
  "Mejora continua": number,
  Multidisciplinar: number,
  "Progreso por trabajo terminado": number,
  "Roles (Scrum o Kanban)": number,
  "Trabajo desde Backlog": number,
  "Áreas solicitantes": string,
  "Comunicación con otras áreas": number
  "Otras mejoras": string,
}

export type TeamAssesment = {
  equipo: string,
  evaluaciones: Evaluation[]
}

export type Assesment = TeamAssesment[]