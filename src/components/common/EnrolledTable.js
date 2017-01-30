import React from 'react';
import { connect } from 'react-redux';


class Enrolled extends React.Component {
  constructor(props) {
    super(props);
  }

  enrolledRow(enrollee, index) {
    return <div key={index}>{enrollee.name}</div>;
  }

  render() {
    return(
      <div>
        <h1>Enrollees</h1>
        {this.props.enrolled.map(this.enrolledRow)}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    enrolled: state.enrolled
  };
}

export default connect(mapStateToProps)(Enrolled);
