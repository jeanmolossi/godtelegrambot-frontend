import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

// import { Container } from './styles';

export default function DoughnutComponent({
  labels,
  mainLabel,
  dataValues,
  ...rest
}) {
  const [data] = useState({
    labels,
    datasets: [
      {
        label: mainLabel,
        backgroundColor: [
          '#F53C56',
          '#FB6340',
          '#FEB969',
          '#11CEDF',
          '#7764E4',
        ],
        data: dataValues,
        fill: false,
        borderWidth: 0,
      },
    ],
    ...rest,
  });
  return <Doughnut data={data} />;
}

DoughnutComponent.propTypes = {
  labels: propTypes.arrayOf(propTypes.string).isRequired,
  mainLabel: propTypes.string.isRequired,
  dataValues: propTypes.arrayOf(propTypes.number).isRequired,
};
