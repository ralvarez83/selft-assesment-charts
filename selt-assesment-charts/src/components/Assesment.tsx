
import { Assesment } from "../Domain/Assesment"
import { TeamAssesment } from "../Domain/TeamAssesment"
import { RadarChart } from "./Assesments/RadarChart"

interface Props{
  dataAssesment: Assesment
}

export const Assesments: React.FC<Props> = ({dataAssesment}) => {


  const globalEvaluation : TeamAssesment = new TeamAssesment ("Global", dataAssesment.getTeamEvaluations())

  return (
    <>
    <section>
      <h2>Datos globales</h2>
      <article>
        <figure>
          <figcaption>Datos globales</figcaption>
          <RadarChart teamsData={[globalEvaluation]} />
        </figure>
        <figure>
          <figcaption>Datos de todos los equipos juntos</figcaption>
          <RadarChart teamsData={dataAssesment.teamAssesments} />
        </figure>
      </article>
    </section>
    <section>
      <h2>Datos por equipo</h2>
        {dataAssesment.teamAssesments.map(teamAssesment => {
          return (
            <article>
              <figure>
                <figcaption>{teamAssesment.name}</figcaption>
                <RadarChart teamsData={[teamAssesment]} />
              </figure>
            </article>
          )
        })}
    </section>
    

    
    </>
  )
}