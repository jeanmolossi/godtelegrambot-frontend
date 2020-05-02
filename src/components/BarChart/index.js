import React from 'react';
import propTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

export default function BarChartComponent({
  mainLabel,
  labels,
  datasets,
  ...rest
}) {
  return (
    <Bar
      {...rest}
      data={datasets}
      options={{
        scales: {
          yAxes: [
            {
              gridLines: {
                borderDash: [5, 6],
                tickMarkLength: 7,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
      }}
    />
  );
}

BarChartComponent.propTypes = {
  labels: propTypes.arrayOf(propTypes.string).isRequired,
  mainLabel: propTypes.arrayOf(propTypes.string).isRequired,
  datasets: propTypes.oneOfType([
    propTypes.object,
    propTypes.element,
    propTypes.array,
  ]).isRequired,
};
