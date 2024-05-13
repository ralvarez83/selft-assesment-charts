import { Dropzone, FileMosaic } from "@files-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import readXlsxFile from 'read-excel-file'
import { type Input, schema, type ExcelAssesment } from "../infraestructure/LoadFile/types";
import { ExtFile } from "@files-ui/core";
import { Assesment, Evaluation, TeamAssesment } from "../Domain/type";

interface Props {
  setAssesment: Dispatch<SetStateAction<Assesment | undefined>>
}

export const LoadFile : React.FC<Props> = ({setAssesment}) => {
  const [files, setFiles] = useState(new Array<ExtFile>(0));
  
  const updateFiles = (incommingFiles: ExtFile[]) => {
    // console.log("incomming files", incommingFiles);
    setFiles(incommingFiles);
    readXlsxFile(incommingFiles[0].file as Input, {schema}).then(({ rows, errors }) => {
      errors.length === 0

      // console.log("Datos: ", rows)

      const assesment = rows.reduce((totalAssesment: Assesment, personAssesment) => {
        const {Equipo} = (personAssesment as ExcelAssesment)

        if (totalAssesment.find((team: TeamAssesment) => {return team.name === Equipo}) === undefined){
          totalAssesment = [
            ... totalAssesment,
            {
              name: Equipo,
              evaluations: [{... (personAssesment as Evaluation)}]
            }
          ]
        }
        else{
          totalAssesment = totalAssesment.map(team => {
            if (team.name === Equipo)
              team.evaluations = [
                ... team.evaluations,
                {... (personAssesment as Evaluation)}
              ]
            return team;
          })
        }

        return totalAssesment;

      }, Array<TeamAssesment>(0))
      
      setAssesment(assesment)
      
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