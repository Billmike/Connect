module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    courseName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    courseCode: {
      allowNull: false,
      type: DataTypes.STRING
    },
    courseUnit: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    lecturerInCharge: {
      allowNull: false,
      type: DataTypes.STRING
    },
    aboutCourse: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    lecturerInChargeID: {
      allowNull: false,
      type: DataTypes.UUID
    }
  });

  Course.associate = (models) => {
    Course.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  }

  return Course;
}