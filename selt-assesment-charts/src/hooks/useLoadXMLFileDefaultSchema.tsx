
import { useState } from "react";
import { readSheet } from 'read-excel-file/browser'
import type { ExtFile } from "@files-ui/core";
import { Assesment } from "../Domain/Assesment";
import { AssesmentContextType } from "../AssesmentContext";
import { DefaultAssementExcelRepository } from "../infraestructure/LoadExcelFile/DefaultAssesment/DefaultAssesmentExcelRepository";

export interface XmlFile {
  files: ExtFile[],
  error: string | null,
  updateFiles: (incommingFiles: ExtFile[]) => void
}

export function useLoadXMLDefaultSchema (assesmentContext : AssesmentContextType | null, defaultAssesmentRespository : DefaultAssementExcelRepository, ) : XmlFile {
  const [files, setFiles] = useState(new Array<ExtFile>(0));
  const [error, setError] = useState<string | null>(null);

  const updateFiles = (incommingFiles: ExtFile[]) => {
    setFiles(incommingFiles);
    setError(null);

    // El Dropzone también llama aquí al quitar el fichero, así que la lista
    // puede llegar vacía o sin el File asociado si el navegador lo rechazó.
    const file = incommingFiles[0]?.file
    if (!file) return;

    // En read-excel-file v9 el parseo con esquema vive en `readSheet`;
    // `readXlsxFile` ya solo devuelve las hojas en crudo.
    readSheet(file, {schema: defaultAssesmentRespository.getSchema()})
      .then((resultado) => {
        // v9 devuelve `objects` o `errors`, nunca ambos: si alguna celda no
        // encaja con el esquema no hay datos parciales que aprovechar.
        if (resultado.errors) {
          console.error("Errores de carga del Excel: ", resultado.errors)
          setError("El fichero no tiene el formato esperado: " + resultado.errors.length + " celda(s) no encajan con el cuestionario.")
          return
        }

        const assesment : Assesment = defaultAssesmentRespository.transformRowsToAssesment(resultado.objects)

        assesmentContext?.cargaAssesment(assesment)
      })
      .catch((cause) => {
        console.error("No se ha podido leer el Excel: ", cause)
        setError("No se ha podido leer el fichero. Compruebe que es un Excel generado por Microsoft Forms.")
      })
  };

  return {
    files,
    error,
    updateFiles
  }
}
