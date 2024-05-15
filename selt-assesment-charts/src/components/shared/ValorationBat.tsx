interface Props {
  title: string,
  value: number,
  max: number
}

export const ValorationBar: React.FC<Props> = ({title, value, max}) => {
  return(
    <small className="valorationProgress">
      <p data-value={value + "/" + max}><strong>{title}</strong></p>
      <progress value={value} max={max}>
      </progress>
    </small>
  )
}