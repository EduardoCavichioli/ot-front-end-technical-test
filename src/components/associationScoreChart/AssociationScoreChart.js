import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { datatypesType } from '../../helpers/types';

function AssociationScoreChart(props) {
  const { datatypes } = props;
  const chartData = Object.entries(datatypes).map((el) => Object.assign({ name: el[0], value: el[1] }));

  return (
    <div>
      <h3>Association Score vs Data Type</h3>
      <RadarChart cx={250} cy={125} outerRadius={100} width={500} height={250} data={chartData} >
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar dataKey="value" stroke="#398AC8" fill="#398AC8" fillOpacity={0.5} dot />
      </RadarChart>
    </div>
  );
}

AssociationScoreChart.propTypes = {
  datatypes: datatypesType
}


export default AssociationScoreChart;
