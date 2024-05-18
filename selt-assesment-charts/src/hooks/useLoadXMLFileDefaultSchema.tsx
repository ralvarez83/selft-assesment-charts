
import { useState } from "react";
import readXlsxFile from 'read-excel-file'
import { type Input } from "../infraestructure/LoadExcelFile/types";
import { ExtFile } from "@files-ui/core";
import { Assesment } from "../Domain/Assesment";
import { AssesmentContextType } from "../App";
import { DefaultAssementExcelRepository } from "../infraestructure/LoadExcelFile/DefaultAssesment/DefaultAssesmentExcelRepository";

export interface XmlFile {
  files: ExtFile[],
  updateFiles: (incommingFiles: ExtFile[]) => void
}

export function useLoadXMLDefaultSchema (assesmentContext : AssesmentContextType | null, defaultAssesmentRespository : DefaultAssementExcelRepository, ) : XmlFile {
  const [files, setFiles] = useState(new Array<ExtFile>(0));

  const updateFiles = (incommingFiles: ExtFile[]) => {
    console.log("incomming files", incommingFiles);
    setFiles(incommingFiles);
    readXlsxFile(incommingFiles[0].file as Input, {schema: defaultAssesmentRespository.getSchema()}).then(({ rows, errors }) => {
      errors.length === 0
      // console.error("Errores carga Excel: ", errors)
      console.log("Datos: ", rows)
      
      const assesment : Assesment = defaultAssesmentRespository.transformRowsToAssesment(rows)
      
      // console.log("Assesment: ", assesment)

      assesmentContext?.cargaAssesment(assesment)
      
    })
  };

  return {
    files,
    updateFiles
  }
}