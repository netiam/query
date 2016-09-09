import Sequelize from 'sequelize'
import db from '../utils/db'
import User from './user'

const Project = db.define('project', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    unique: true
  },
  team: {
    type: Sequelize.STRING
  }
})

Project.belongsToMany(User, {through: 'UserProject'})

export default User
