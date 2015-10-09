import {MongoClient} from 'mongodb'
import query from '../lib'

const url = 'mongodb://localhost:27017/netiam-query'
const connection = MongoClient.connect(url)

describe('query', () => {

  before(done => {
    connection
      .then(() => {
        done()
      })
      .catch(done)
  })

  it('should do stuff', done => {
    const q = query(connection)
      .find()
      .exec()
    done()
  })

})
