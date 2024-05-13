import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadDropzone } from "react-uploader";

interface Props {
  onUpload: (file: File) => void
}

export const LoadFile : React.FC<Props> = ({onUpload}) => {
// Initialize once (at the start of your app).
  const uploader = Uploader({
    apiKey: "free" // Get production API keys from Bytescale
  });

// Configuration options: https://www.bytescale.com/docs/upload-widget/frameworks/react#customize
  const options = { multi: true };

  return (
    <>
    Data is empty
      <UploadDropzone uploader={uploader}
                  options={options}
                  onUpdate={files => alert(files.map(x => x.fileUrl).join("\n"))}
                  width="600px"
                  height="375px" />
    </>
  );
}