'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      courseName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      courseCode: {
        allowNull: false,
        type: Sequelize.STRING
      },
      courseUnit: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lecturerInCharge: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lecturerInChargeID: {
        type: Sequelize.UUID,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId',
        }
      },
      aboutCourse: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Courses')
};