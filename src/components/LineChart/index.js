import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

// import { Container } from './styles';

export default function LineChart({ labels, mainLabel, dataValues, ...rest }) {
  const [data] = useState({
    labels,
    datasets: [
      {
        label: mainLabel,
        backgroundColor: '#7764E4',
        borderColor: '#7764E4',
        data: dataValues,
        fill: false,
        borderWidth: 4,
      },
    ],
    ...rest,
  });
  return (
    <Line
      data={data}
      options={{
        scales: {
          yAxes: [
            {
              gridLines: {
                borderDash: [5, 6],
                drawTicks: false,
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

LineChart.propTypes = {
  labels: propTypes.arrayOf(propTypes.string).isRequired,
  mainLabel: propTypes.string.isRequired,
  dataValues: propTypes.arrayOf(propTypes.number).isRequired,
};
