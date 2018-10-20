const truncateMiddleName = (title, firstName, middleName, lastName) => {
  const middleNameFirstLetter = middleName.slice(0, 1);
  const truncatedMiddleName = `${title}. ${firstName} ${middleNameFirstLetter}. ${lastName}`;
  return truncatedMiddleName;
}

export default truncateMiddleName;
