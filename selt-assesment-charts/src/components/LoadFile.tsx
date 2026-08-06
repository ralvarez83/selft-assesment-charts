import { Dropzone } from "@files-ui/react";
import {  useContext } from "react";
import { AssesmentContext, AssesmentContextType } from "../AssesmentContext";
import { useLoadXMLDefaultSchema } from "../hooks/useLoadXMLFileDefaultSchema";
import { DefaultAssementExcelRepository } from "../infraestructure/LoadExcelFile/DefaultAssesment/DefaultAssesmentExcelRepository";

export const LoadFile = (): React.JSX.Element => {
  const assesmentContext : AssesmentContextType | null = useContext(AssesmentContext);
  const defaultAssesmentRespository : DefaultAssementExcelRepository = new DefaultAssementExcelRepository()

  const {files, error, updateFiles} = useLoadXMLDefaultSchema(assesmentContext, defaultAssesmentRespository)

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
          <p key={file.id}>{file.name}</p>
        ))}
      </Dropzone>
      {error &&
        <aside role="alert">{error}</aside>
      }
    </main>
  );
}
