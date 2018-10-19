import model from '../models';
import truncateMiddleName from '../helpers/truncateMiddleName'

class CoursesClass {
  static createCourse (request, response) {
    const { courseName, courseCode, courseUnit, aboutCourse } = request.body;
    const lecturerName = truncateMiddleName(request.userObject.role, request.userObject.firstName, request.userObject.middleName, request.userObject.lastName)

    console.log('the resuet', request.userObject.id)
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
