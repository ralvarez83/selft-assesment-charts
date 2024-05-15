
import { useContext } from "react";
import { TeamAssesment } from "../Domain/TeamAssesment"
import { RadarChart } from "./Assesments/RadarChart"
import { AssesmentContext } from "../App";
import { Link } from 'react-router-dom';
import { ValorationBar } from "./shared/ValorationBat";

// interface Props{
//   dataAssesment: Assesment
// }

export const Assesments = (): JSX.Element => {

  const {
    assesment
  } = useContext(AssesmentContext);
  
  const dataAssesment = assesment

  const globalEvaluation : TeamAssesment = new TeamAssesment ("Global", dataAssesment.getTeamEvaluations())

  return (
    <main>
    <h2>Datos globales</h2>
    <section className="grid">
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
    <section className="grid">
        {dataAssesment.teamAssesments.map(teamAssesment => {
          return (
            <article key={teamAssesment.id}>
              <figure>
                <figcaption><Link to={'/assesment/team/' + teamAssesment.id}>{teamAssesment.name}</Link></figcaption>
                <RadarChart teamsData={[teamAssesment]} />
              </figure>
              <ValorationBar title="Valoracion comunicación" max={5} value={Number.parseInt(teamAssesment.comunicationMediane)} />
            </article>
          )
        })}
    </section>
       
    </main>
  )
}