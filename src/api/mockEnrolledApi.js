import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    id: "1",
    firstName: "Nagata",
    lastName: "Tamura",
    programType: "Youth-Empowerment",
    programDuration: "2 week",
    programDates: "May 22 - June 2"
  },
  {
    id: "2",
    firstName: "Kafka",
    lastName: "Matura",
    programType: "Youth-Empowerment",
    programDuration: "2 week",
    programDates: "May 22 - June 2"
  },
  {
    id: "3",
    firstName: "Kade",
    lastName: "Lane",
    programType: "Youth-Empowerment",
    programDuration: "4 week",
    programDates: "May 22 - June 16"
  },
  {
    id: "4",
    firstName: "Olive",
    lastName: "Tribeka",
    programType: "Health-Innovation",
    programDuration: "2 week",
    programDates: "June 19 - June 30"
  },
  {
    id: "5",
    firstName: "Elitta",
    lastName: "Kymara",
    programType: "Health-Innovation",
    programDuration: "4 week",
    programDates: "July 3 - July 28"
  },
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class enrolledApi {
  static getAllEnrolled() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }

  static saveEnrolled(course) {
    course = Object.assign({}, course); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (course.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id == course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          course.id = generateId(course);
          course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
          courses.push(course);
        }

        resolve(course);
      }, delay);
    });
  }

  static deleteEnrolled(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(course => {
          course.id == courseId;
        });
        courses.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default enrolledApi;
