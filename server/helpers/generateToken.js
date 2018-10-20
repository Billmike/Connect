import jwt from 'jsonwebtoken';

const generateToken = (id, firstName, lastName, middleName, email, role, title) => {
  const token = jwt.sign({ id, firstName, lastName, middleName, email, role, title }, 'secretkeyhereforus');
  return token;
}

export default generateToken;
