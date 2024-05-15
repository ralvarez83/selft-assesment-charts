import { Dropzone, FileMosaic } from "@files-ui/react";
import {  useContext, useState } from "react";
import readXlsxFile from 'read-excel-file'
import { type Input, schema, type ExcelAssesment } from "../infraestructure/LoadFile/types";
import { ExtFile } from "@files-ui/core";
import { TeamAssesment } from "../Domain/TeamAssesment";
import { Assesment } from "../Domain/Assesment";
import { Evaluation } from "../Domain/type";
import { AssesmentContext } from "../App";
import { Solicitudes } from "../Domain/Solicitudes";

// interface Props {
//   setAssesment: Dispatch<SetStateAction<Assesment | undefined>>
// }

export const LoadFile = (): JSX.Element => {
  const [files, setFiles] = useState(new Array<ExtFile>(0));
  const {
    cargaAssesment
  } = useContext(AssesmentContext);
  
  const updateFiles = (incommingFiles: ExtFile[]) => {
    // console.log("incomming files", incommingFiles);
    setFiles(incommingFiles);
    readXlsxFile(incommingFiles[0].file as Input, {schema}).then(({ rows, errors }) => {
      errors.length === 0

      // console.log("Datos: ", rows)

      const teamAssesments = rows.reduce((totalAssesment: TeamAssesment[], personAssesment) => {
        const {equipo, areasSolicitantes, comunicacionOtrasAreas, canalSolicitud, otrasMejoras} = (personAssesment as ExcelAssesment)

        if (totalAssesment.find((team: TeamAssesment) => {return team.name === equipo}) === undefined){
          const newTeam : TeamAssesment = new TeamAssesment(
            equipo, 
            [{... (personAssesment as Evaluation)}],
            [new Solicitudes(areasSolicitantes, comunicacionOtrasAreas, canalSolicitud)],
            [otrasMejoras]
          )

          totalAssesment = [
            ... totalAssesment,
            newTeam
          ]
        }
        else{
          totalAssesment = totalAssesment.map(team => {
            if (team.name === equipo)
              team.evaluations = [
                ... team.evaluations,
                {... (personAssesment as Evaluation)}
              ]
              team.solicitudes = [
                ... team.solicitudes,
                new Solicitudes(areasSolicitantes, comunicacionOtrasAreas, canalSolicitud)
              ]
              team.otrasMejoras = [
                ... team.otrasMejoras,
                otrasMejoras
              ]
            return team;
          })
        }

        return totalAssesment;

      }, Array<TeamAssesment>(0))
      
      const assesment : Assesment = new Assesment(teamAssesments)
      
      // console.log("Assesment: ", assesment)

      cargaAssesment(assesment)
      
    })
  };
  return (
    <main>
      <Dropzone
        onChange={updateFiles}
        maxFiles={1}
        value={files}
        label="Arrastre aquí el fichero"
        //accept="image/*"
      >
        {files.map((file) => (
          <FileMosaic key={file.id} {...file} info />
        ))}
      </Dropzone>
    </main>
  );
}