import React from 'react';

const EnrolledListRow = ({enrollee}) => {
  return (
    <tr>
      <td>{enrollee.firstName}</td>
      <td>{enrollee.lastName}</td>
      <td>{enrollee.programType}</td>
      <td>{enrollee.programDuration}</td>
      <td>{enrollee.programDates}</td>
    </tr>
  );
};

export default EnrolledListRow;
