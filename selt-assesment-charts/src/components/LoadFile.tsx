import { Dropzone, FileMosaic } from "@files-ui/react";
import { useState } from "react";
import readXlsxFile from 'read-excel-file'
import { type Input, schema, type ExcelAssesment } from "../infraestructure/LoadFile/types";
import { ExtFile } from "@files-ui/core";
import { Assesment, TeamAssesment } from "../Domain/type";
// interface Props {
//   onUpload: (file: File) => void
// }

export const LoadFile : React.FC = () => {
  const [files, setFiles] = useState(new Array<ExtFile>(0));
  
  const updateFiles = (incommingFiles: ExtFile[]) => {
    console.log("incomming files", incommingFiles);
    setFiles(incommingFiles);
    readXlsxFile(incommingFiles[0].file as Input, {schema}).then(({ rows, errors }) => {
      errors.length === 0

      console.log("Datos: ", rows)

      const assesments: Assesment = rows.reduce((totalAssesment, personAssesment) => {
        const teamMemberAssesment: string = (personAssesment as ExcelAssesment).Equipo
        const teamAssesment: TeamAssesment = (totalAssesment as Assesment).find((evaluation) => {
          return (evaluation.equipo === teamMemberAssesment)
        }) || {
          equipo: teamMemberAssesment,
          evaluaciones: []
        }
        const newTeamAssesment: TeamAssesment = {
          equipo: teamAssesment.equipo,
          evaluaciones: [
            ... teamAssesment.evaluaciones,
            personAssesment as ExcelAssesment
          ]
        }
        totalAssesment = [
          ...totalAssesment as Assesment,
          newTeamAssesment
        ]
        return totalAssesment
      })

      console.log("Datos agregados", assesments)
      
    })
  };
  return (
    <>
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
    </>
  );
}