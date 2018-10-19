import jwt from 'jsonwebtoken';
import model from '../models';

class SessionControl {
  static hasToken(request, response, next) {
    request.token = request.headers['x-access-token'] || request.headers.token || request.query.token;
    if (!request.token) {
      return response.status(401).json({
        message: 'You need to be logged in to perform this action'
      });
    }
    return next();
  }

  static isUser(request, response, next) {
    let verifiedJWT;
    try {
      verifiedJWT = jwt.verify(request.token, 'secretkeyhereforus')
    } catch (error) {
      return response.status(403).json({
        message: 'You need to be logged in to perform this action'
      });
    }
    model.User.findById(verifiedJWT.id).then(user => {
      if (!user) {
        const error = response.status(400).json({
          message: 'Invalid user token'
        })
        return next(error);
      }
      request.userObject = verifiedJWT;
      return next();
    }).catch(() => response.status(500).json({
      message: 'Oops... Something went wrong. Why not try again later'
    }));
  }
}

export default SessionControl;
