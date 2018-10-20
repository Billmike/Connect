import model from '../models';
import truncateMiddleName from '../helpers/truncateMiddleName'

class CoursesClass {
  static createCourse (request, response) {
    const { courseName, courseCode, courseUnit, aboutCourse } = request.body;
    const lecturerName = truncateMiddleName(request.userObject.title, request.userObject.firstName, request.userObject.middleName, request.userObject.lastName)

    if (request.userObject.role.trim().toLowerCase() !== "lecturer") {
      return response.status(400).json({
        message: 'You do not have the privileges required to create a course'
      })
    }
    model.Course.create({
      courseName,
      courseCode,
      courseUnit,
      aboutCourse,
      lecturerInCharge: lecturerName,
      lecturerInChargeID: request.userObject.id,
    }).then(course => {
      return response.status(201).json({
        message: 'Course created successfully',
        course,
      })
    }).catch(error => response.status(500).json({
      message: 'An error occurred',
      error,
    }))
  }
}

export default CoursesClass;
