import React from 'react';
import EnrolledListRow from './EnrolledListRow';

const EnrolledList = ({ enrolled }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Program Type</th>
          <th>Program Duration</th>
          <th>Program Dates</th>
        </tr>
      </thead>
      <tbody>
        {enrolled.map((enrollee, index) => {
          return <EnrolledListRow key={index} enrollee={enrollee} />;
        })}
      </tbody>
    </table>
  );
};

export default EnrolledList;
