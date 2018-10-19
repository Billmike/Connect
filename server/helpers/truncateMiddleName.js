const truncateMiddleName = (role, firstName, middleName, lastName) => {
  const middleNameFirstLetter = middleName.slice(0, 1);
  const truncatedMiddleName = `${role}. ${firstName} ${middleNameFirstLetter}. ${lastName}`;
  return truncatedMiddleName;
}

export default truncateMiddleName;
