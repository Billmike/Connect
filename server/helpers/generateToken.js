import jwt from 'jsonwebtoken';

const generateToken = (id, firstName, lastName, middleName, email, role) => {
  const token = jwt.sign({ id, firstName, lastName, middleName, email, role }, 'secretkeyhereforus');
  return token;
}

export default generateToken;
