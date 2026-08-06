import React from "react";

interface Props {
  author: string
  authorURL: string
  repositoryImgSrc: string
  repositoryURL: string
}

export const DevFooter : React.FC<Props> = ({author, authorURL, repositoryImgSrc, repositoryURL}) => {
  return (
    <div className="dev-footer">
      <p>Creado por: <a href={authorURL} target="_blank" rel="noopener noreferrer">{author}.</a></p> <p>Puedes ver el código en: <a href={repositoryURL} target="_blank" rel="noopener noreferrer"><img src={repositoryImgSrc} alt="" /> {repositoryURL} </a></p>
    </div>
  )
}