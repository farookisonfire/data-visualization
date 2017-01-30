import React from 'react';
import { connect } from 'react-redux';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps)(CoursesPage);
