import {
  useNavigate
} from 'react-router-dom'
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AssesmentContext, AssesmentContextType } from "../App";
import { RadarChart } from "./Assesments/RadarChart";
import { ValorationBar } from "./shared/ValorationBat";
import { Assesment } from '../Domain/Assesment';

export const Team = (): JSX.Element => {
  const {id} = useParams();

  const assesmentContext : AssesmentContextType | null = useContext(AssesmentContext);
  const navigate = useNavigate();
  
  if (!assesmentContext || !id){
    navigate('/', {replace: true})
  }
  
  const assesment : Assesment = (assesmentContext !== null && assesmentContext.assesment !== undefined)? assesmentContext.assesment : new Assesment([])
  
  const team = assesment.getTeamById(!id? "0": id)
  console.log(team?.comunicationMediane)
  
  console.log("Team: ", team)
  return (
    <main>
      {!team &&
        <aside>El equipo no se ha encontrado</aside>
      }
      {team &&
        <>
          <h2>{team.name}</h2>
          <section>
            <article className="detail">
              <figure>
                <figcaption>Mediana del equipo</figcaption>
                <RadarChart teamsData={[team]} />
              </figure>
            </article>
            <article>
            <ValorationBar title="Valoracion" max={5} value={team?.comunicationMediane} />
            </article>
          </section>
          <section>
            <details>
              <summary>
                <div>
                  <span>
                    <svg width="800px" height="800px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M26 33H29.5C36.4036 33 42 27.4036 42 20.5C42 13.5964 36.4036 8 29.5 8H18.5C11.5964 8 6 13.5964 6 20.5C6 28.4145 11.2167 33.2537 16.9239 36.2262C19.7585 37.7025 22.6136 38.6566 24.7728 39.2414C25.2149 39.3611 25.626 39.4649 26 39.5542V33ZM28 42C28 42 27.2439 41.8897 26 41.6077C20.2362 40.3007 4 35.305 4 20.5C4 12.4919 10.4919 6 18.5 6H29.5C37.5081 6 44 12.4919 44 20.5C44 28.5081 37.5081 35 29.5 35H28V42Z" fill="#333333"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 22C24.5523 22 25 21.5523 25 21C25 20.4477 24.5523 20 24 20C23.4477 20 23 20.4477 23 21C23 21.5523 23.4477 22 24 22ZM24 24C25.6569 24 27 22.6569 27 21C27 19.3431 25.6569 18 24 18C22.3431 18 21 19.3431 21 21C21 22.6569 22.3431 24 24 24Z" fill="#333333"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M32 22C32.5523 22 33 21.5523 33 21C33 20.4477 32.5523 20 32 20C31.4477 20 31 20.4477 31 21C31 21.5523 31.4477 22 32 22ZM32 24C33.6569 24 35 22.6569 35 21C35 19.3431 33.6569 18 32 18C30.3431 18 29 19.3431 29 21C29 22.6569 30.3431 24 32 24Z" fill="#333333"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 22C16.5523 22 17 21.5523 17 21C17 20.4477 16.5523 20 16 20C15.4477 20 15 20.4477 15 21C15 21.5523 15.4477 22 16 22ZM16 24C17.6569 24 19 22.6569 19 21C19 19.3431 17.6569 18 16 18C14.3431 18 13 19.3431 13 21C13 22.6569 14.3431 24 16 24Z" fill="#333333"/>
                    </svg>
                  </span>
                  <h3><strong>Comunicación con otras áreas</strong></h3>
                </div>
              </summary>
              <div>
                <dl>
                {team.solicitudes.map(solicitud => {
                  return(
                    <div>
                      <dt><strong>Solicitantes: </strong>{solicitud.areasSolicitantes}</dt>
                      <dd>
                        <ValorationBar title="Valoracion" max={5} value={solicitud.comunicacionOtrasAreas} />
                        <small className="canales">
                          <strong>Canales:</strong> 
                          <div>{solicitud.canalSolicitud.map(canal => {
                          return(
                            canal + " "
                          )
                        })}</div></small>
                      </dd>
                    </div>
                  )
                })}                
                </dl>
              </div>
            </details>
          </section>
          
          <section>
            <details>
              <summary>
                <div>
                  <span>
                  <svg fill="#000000" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="a"></g> <g id="b"> <path d="M46.5869,13.3867c-1.5309-2.4371-4.054-2.3994-4.2942-2.3867H19.5c-.1895,0-.3623,.1074-.4473,.2764-5.9639,11.9277-10.9951,40.8477-11.0454,41.1387-.0249,.1455,.0151,.2939,.1104,.4072,.0947,.1123,.2349,.1777,.3823,.1777h9.3262c.1836,0,.3525-.1006,.4399-.2627l1.5542-2.8789h14.2441l2.001,2.9238c.0938,.1367,.248,.2178,.4131,.2178h7.5c.1338,0,.2617-.0537,.3555-.1484s.1465-.2236,.1445-.3574l-.0314-2.6074h2.1534l1.5693,2.8545c.0879,.1592,.2559,.2588,.4385,.2588h6.8477c.1514,0,.2939-.0684,.3887-.1855,.0947-.1182,.1318-.2715,.1006-.4199-.8066-3.751-7.9189-36.7178-9.3584-39.0078Zm-9.8447,38.6133l-2.001-2.9238c-.0938-.1367-.248-.2178-.4131-.2178h-14.8062c-.1836,0-.3525,.1006-.4399,.2627l-1.5542,2.8789H9.0962c.7407-4.1318,5.3428-28.9932,10.7144-40h22.3789c.793,.3818,.832,.9326,.832,2.5059l.4512,37.4941h-6.7305Zm-8.8237-25.9219c-.0908-.1494-.2529-.2412-.4277-.2412s-.3369,.0918-.4277,.2412l-11,18.1631c-.0933,.1543-.0967,.3467-.0078,.5039,.0884,.1572,.2549,.2549,.4355,.2549h21.9995c.1807,0,.3467-.0977,.4355-.2549s.0859-.3496-.0078-.5039l-10.9995-18.1631Zm.0815,15.4219c0,.2764-.2236,.5-.5,.5s-.5-.2236-.5-.5v-1c0-.2764,.2236-.5,.5-.5s.5,.2236,.5,.5v1Zm0-3c0,.2764-.2236,.5-.5,.5s-.5-.2236-.5-.5v-6c0-.2764,.2236-.5,.5-.5s.5,.2236,.5,.5v6Zm11-21c0,.2764-.2236,.5-.5,.5H22.5c-.2764,0-.5-.2236-.5-.5s.2236-.5,.5-.5h16c.2764,0,.5,.2236,.5,.5Z"></path> </g> </g></svg>
                  </span>
                  <h3><strong>Otras áreas de mejora</strong></h3>
                </div>
              </summary>
              <div>
                <dl>
                  {team.otrasMejoras.map(mejora => {
                    return (
                      <div>
                        <dt><strong>Respuesta: </strong></dt>
                        <dd>{mejora}</dd>
                      </div>
                    )
                  })}
                </dl>
              </div>
            </details>
          </section>
        </>
      }
    </main>
  )
}