export type DataSetElement = {
  label: string,
  data: number[]
}

export type DataChart = {
  labels: string [],
  datasets: DataSetElement[]
}

export interface ChartDataGenerator {
  getDataChart : () => DataChart
}