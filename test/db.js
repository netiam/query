import Sequelize from 'sequelize'
import User from './models/user'
import Project from './models/project'
import db from './utils/db'

describe('db', () => {

  let userId

  before(done => {
    db
      .sync({force: true})
      .then(() => done())
      .catch(done)
  })

  it('should create a user', done => {
    User
      .create({
        email: 'hannes@impossiblearts.com',
        password: 'test123'
      })
      .then(user => {
        userId = user.id
        done()
      })
      .catch(done)
  })

  it('should fail creating the same user', done => {
    User
      .create({
        email: 'hannes@impossiblearts.com',
        password: 'test123'
      })
      .then(() => done())
      .catch(err => {
        err.name.should.eql('SequelizeUniqueConstraintError')
        done()
      })
  })

  it('should create a project', done => {
    Project
      .create({
        name: 'netiam',
        team: []
      })
      .then(project => {
        done()
      })
      .catch(done)
  })

})
