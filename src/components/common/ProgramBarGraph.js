import React from 'react';
import buildBarGraph from './programBarGraphBuild';

const ProgramBarGraph = ({barGraphOptions}) => {

  // switch(barGraphOptions.dataSet) {
  //   case 'total':
  //     buildBarGraph(barGraphOptions);
  //     break;
  //   default:
  //     break;
  // }

  buildBarGraph(barGraphOptions);

  return (
    <div id="my-bar-graph" style={{width:'100%', height: '300px'}}/>
  );
};

export default ProgramBarGraph;
