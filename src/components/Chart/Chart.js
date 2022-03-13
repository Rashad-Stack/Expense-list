import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  const dataPointValue = props.dataPoint.map((dataPoint) => dataPoint.value);
  const totalMaxValue = Math.max(...dataPointValue);
  return (
    <div className="chart">
      {props.dataPoint.map((dataPoint) => (
        <ChartBar
          key={Math.random()}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxValue}
        />
      ))}
    </div>
  );
};
export default Chart;
