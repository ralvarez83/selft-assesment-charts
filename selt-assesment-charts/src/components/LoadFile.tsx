import { Dropzone, FileMosaic } from "@files-ui/react";
import {  useContext } from "react";
import { AssesmentContext, AssesmentContextType } from "../App";
import { useLoadXMLDefaultSchema } from "../hooks/useLoadXMLFileDefaultSchema";
import { DefaultAssementExcelRepository } from "../infraestructure/LoadExcelFile/DefaultAssesment/DefaultAssesmentExcelRepository";

export const LoadFile = (): JSX.Element => {
  const assesmentContext : AssesmentContextType | null = useContext(AssesmentContext);
  const defaultAssesmentRespository : DefaultAssementExcelRepository = new DefaultAssementExcelRepository()
  
  const {files, updateFiles} = useLoadXMLDefaultSchema(assesmentContext, defaultAssesmentRespository)

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