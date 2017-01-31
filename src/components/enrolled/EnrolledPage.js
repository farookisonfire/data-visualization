import React from 'react';
import { connect } from 'react-redux';
import EnrolledList from './EnrolledList';

class EnrolledPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h1>Enrolled:</h1>
        <EnrolledList enrolled={this.props.enrolled}/>
      </div>
    );
  }
}

const mapStateToProps = ({ enrolled }) => {
  return {
    enrolled
  };
};

export default connect(mapStateToProps)(EnrolledPage);
