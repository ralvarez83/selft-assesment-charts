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
      <p>Creado por: <a href={authorURL} target="_blank">{author}.</a></p> <p>Puedes ver el código en: <a href={repositoryURL} target="_blank"><img src={repositoryImgSrc} /> {repositoryURL} </a></p>
    </div>
  )
}