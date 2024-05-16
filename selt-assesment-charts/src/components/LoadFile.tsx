import { Dropzone, FileMosaic } from "@files-ui/react";
import {  useContext, useState } from "react";
import readXlsxFile from 'read-excel-file'
import { type Input } from "../infraestructure/LoadFile/types";
import { ExtFile } from "@files-ui/core";
import { TeamAssesment } from "../Domain/TeamAssesment";
import { Assesment } from "../Domain/Assesment";
import { Evaluation } from "../Domain/type.d";
import { AssesmentContext, AssesmentContextType } from "../App";
import { Solicitudes } from "../Domain/Solicitudes";
import {InformaDBSchema} from "../infraestructure/LoadFile/InformaDBAssesment/InformaDBSchema.d"
import { InformaDBTransformation } from "../infraestructure/LoadFile/InformaDBAssesment/InformaDBTransformation";
import { InformaDBSchemaData } from "../infraestructure/LoadFile/InformaDBAssesment/types";

// interface Props {
//   setAssesment: Dispatch<SetStateAction<Assesment | undefined>>
// }

export const LoadFile = (): JSX.Element => {
  const [files, setFiles] = useState(new Array<ExtFile>(0));
  const assesmentContext : AssesmentContextType | null = useContext(AssesmentContext);

  
  const updateFiles = (incommingFiles: ExtFile[]) => {
    // console.log("incomming files", incommingFiles);
    setFiles(incommingFiles);
    readXlsxFile(incommingFiles[0].file as Input, {schema : InformaDBSchema}).then(({ rows, errors }) => {
      errors.length === 0

      //console.log("Datos: ", rows)

      const teamAssesments = rows.reduce((totalAssesment: TeamAssesment[], personAssesment) => {
        const assesmentData = new InformaDBTransformation(personAssesment as InformaDBSchemaData)
        const excelData = assesmentData.excelAssesment
        const {equipo, areasSolicitantes, comunicacionOtrasAreas, canalSolicitud, otrasMejoras} = excelData

        if (totalAssesment.find((team: TeamAssesment) => {return team.name === equipo}) === undefined){
          const newTeam : TeamAssesment = new TeamAssesment(
            equipo, 
            [{... (excelData as Evaluation)}],
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
                {... (excelData as Evaluation)}
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

      assesmentContext?.cargaAssesment(assesment)
      
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