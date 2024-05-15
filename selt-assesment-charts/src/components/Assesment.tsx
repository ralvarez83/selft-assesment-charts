
import { useContext } from "react";
import { Assesment } from "../Domain/Assesment"
import { TeamAssesment } from "../Domain/TeamAssesment"
import { RadarChart } from "./Assesments/RadarChart"
import { AssesmentContext } from "../App";

// interface Props{
//   dataAssesment: Assesment
// }

export const Assesments: React.FC<Props> = () => {

  const {
    assesment
  } = useContext(AssesmentContext);
  
  const dataAssesment = assesment

  const globalEvaluation : TeamAssesment = new TeamAssesment ("Global", dataAssesment.getTeamEvaluations())

  return (
    <main>
    <h2>Datos globales</h2>
    <section>
      <article>
        <figure>
          <figcaption>Datos globales</figcaption>
          <RadarChart teamsData={[globalEvaluation]} />
        </figure>
      </article>
      <article>
        <figure>
          <figcaption>Datos de todos los equipos juntos</figcaption>
          <RadarChart teamsData={dataAssesment.teamAssesments} />
        </figure></article>
    </section>
    
    <h2>Datos por equipo</h2>
    <section>
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
    

    
    </main>
  )
}