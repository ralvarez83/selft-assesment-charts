import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Colors
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

import { DataChart } from "../../infraestructure/Charts/type";

interface Props{
  data: DataChart
}

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Colors
);

export const RadarChart: React.FC<Props> = ({data}) => {
  //console.log("Data Chart: ", data)

  const options = {
    scales: {
        r: {
            angleLines: {
                display: true
            },
            suggestedMin: 0,
            suggestedMax: 5
        }
    },
    layout: {
      autoPadding: true
    },
    plugins: {
      filler: {
        propagate: false
      },
      'samples-filler-analyser': {
        target: 'chart-analyser'
      }
    },
    interaction: {
      intersect: false
    }
};

  return (
    <>
      <Radar 
        data={data} 
        updateMode="resize"
        options={options}
      />
    </>
  )
}

