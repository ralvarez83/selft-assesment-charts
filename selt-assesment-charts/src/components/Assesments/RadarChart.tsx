import { TeamAssesment } from "../../Domain/TeamAssesment"
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Colors
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

import { BACKLOG_TRABAJADO, COORDINACION_INTER_EQUIPOS, CO_RESPONSABILIDAD, EQUIPOS_MULTIDISCIPLINARES, EVENTOS_SCRUM_KANBAN, FEEDBACK_USUARIOS, MEJORA_CONTINUA, PROGRESO_TRABAJO_TERMINADO, ROLES_SCRUM_KANBAN, TRABAJO_DESDE_BACKLOG } from "../../Domain/type.d"

interface Props{
  teamsData: TeamAssesment[]
}

type DataSetElement = {
  label: string,
  data: number[]
}

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Colors
);

export const RadarChart: React.FC<Props> = ({teamsData}) => {

  const labels : string[] = [BACKLOG_TRABAJADO, CO_RESPONSABILIDAD, COORDINACION_INTER_EQUIPOS, EVENTOS_SCRUM_KANBAN, ROLES_SCRUM_KANBAN, FEEDBACK_USUARIOS, MEJORA_CONTINUA, EQUIPOS_MULTIDISCIPLINARES, PROGRESO_TRABAJO_TERMINADO, TRABAJO_DESDE_BACKLOG]

  const datasets = teamsData.reduce((totalDada, teamData) => {
    totalDada = [
      ... totalDada,
      {
        label: teamData.name,
        data: [
          teamData.mediane.backlogGestionadoPriorizadoActualizado, 
          teamData.mediane.coResponsabilidad,
          teamData.mediane.coordinacionInterEquipos,
          teamData.mediane.eventosScrumKanban,
          teamData.mediane.rolesScrumKanban,
          teamData.mediane.feedbackUsuarios,
          teamData.mediane.mejoraContinua,
          teamData.mediane.multidisciplinar,
          teamData.mediane.progresoPorTrabajoTerminado,
          teamData.mediane.trabajoDesdeBacklog
        ]
      }
    ]
    return totalDada
  },new Array<DataSetElement>(0))

  const data = {
    labels,
    datasets
  };

  console.log("Data Chart: ", data)

  const options = {
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: false
      }
    },
    scales: {
        r: {
            angleLines: {
                display: true
            },
            suggestedMin: 0,
            suggestedMax: 5
        }
    },
    layout: {
      autoPadding: true
    },
    plugins: {
      filler: {
        propagate: false
      },
      'samples-filler-analyser': {
        target: 'chart-analyser'
      }
    },
    interaction: {
      intersect: false
    }
};

  return (
    <>
      <Radar 
        data={data} 
        updateMode="resize"
        options={options}
      />
    </>
  )
}

