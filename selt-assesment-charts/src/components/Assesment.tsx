import {
  useNavigate
} from 'react-router-dom'
import { useContext } from "react";
import { TeamAssesment } from "../Domain/TeamAssesment"
import { AssesmentContext, AssesmentContextType } from "../App";
import { Link } from 'react-router-dom';
import { ValorationBar } from "./shared/ValorationBat";
import { Assesment } from '../Domain/Assesment';
import { Assesment as AssesmentView } from '../infraestructure/AssesmentView/DefaultAssesment/Assesment'
import { RadarData } from '../infraestructure/Charts/DefaultAssesment/RadarData';
import { RadarChart } from './shared/RadarChart';

export const Assesments = (): JSX.Element => {

  const assesmentContext : AssesmentContextType | null = useContext(AssesmentContext);
  const navigate = useNavigate();
  
  if (!assesmentContext){
    navigate('/', {replace: true})
  }
  
  const dataAssesment : AssesmentView = new AssesmentView((assesmentContext !== null && assesmentContext.assesment !== undefined)? assesmentContext.assesment : new Assesment([]))
  
  const globalEvaluation : TeamAssesment = dataAssesment.getGlobalAsATeam()

  const globalData : RadarData = new RadarData([globalEvaluation]);

  const teamsData : RadarData = new RadarData(dataAssesment.teamAssesments);


  return (
    <main>
    <h2>Datos globales</h2>
    <section className="grid">
      <article>
        <figure>
          <figcaption>Datos globales</figcaption>
          <RadarChart data={globalData.getDataChart()} />
        </figure>
      </article>
      <article>
        <figure>
          <figcaption>Datos de todos los equipos juntos</figcaption>
          <RadarChart data={teamsData.getDataChart()} />
        </figure></article>
    </section>
    
    <h2>Datos por equipo</h2>
    <section className="grid">
        {dataAssesment.teamAssesments.map(teamAssesment => {
          return (
            <article key={teamAssesment.id}>
              <figure>
                <figcaption><Link to={'/assesment/team/' + teamAssesment.id}>{teamAssesment.name}</Link></figcaption>
                <RadarChart data={(new RadarData([teamAssesment])).getDataChart()} />
              </figure>
              <ValorationBar title="Valoracion comunicación" max={5} value={teamAssesment.comunicationMediane} />
            </article>
          )
        })}
    </section>
       
    </main>
  )
}