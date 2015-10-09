export default function query(connection) {
  const o = {}

  function exec() {
    return o
  }

  function find(criteria = {}) {
    connection.then(db => {
      const collection = db.collection('documents')
      collection
        .find(criteria)
        .toArray((err, documents) => {
          console.log(documents)
        })
    })

    return o
  }

  Object.assign(o, {
    exec,
    find
  })

  return Object.freeze(o)
}
