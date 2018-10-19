import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import model from '../models';
import generateToken from '../helpers/generateToken';

class UserClass {
  static signup (request, response) {
    const { email, password, role, firstName, lastName, middleName } = request.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    model.User.create({
      email,
      password: hashedPassword,
      role,
      firstName,
      lastName,
      middleName
    }).then(user => {
      const token = generateToken(user.dataValues.id, user.dataValues.firstName, user.dataValues.lastName, user.dataValues.middleName, user.dataValues.email, user.dataValues.role);
      return response.status(201).json({
        message: 'Signup successful',
        token
      })
    }).catch(error => response.status(500).json({
      message: 'An error occurred',
      error
    }))
  }

  static signin (request, response) {
    const { email, password } = request.body;
    model.User.findOne({ where: {
      email,
    }}).then(user => {
      const unhashedPassword = bcrypt.compareSync(password, user.dataValues.password);
      if (!unhashedPassword) {
        return response.status(400).json({
          message: 'Passwords don\'t match'
        });
      }
      const token = generateToken(user.dataValues.id, user.dataValues.firstName, user.dataValues.lastName, user.dataValues.middleName, user.dataValues.email, user.dataValues.role);
      return response.status(201).json({
        message: 'Successfully signed in',
        token,
      })
    }).catch(error => response.status(500).json({
      message: 'An error occured',
      error
    }));
  }
}

export default UserClass;
