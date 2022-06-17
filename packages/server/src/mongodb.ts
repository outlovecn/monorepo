import { MongoClient } from 'mongodb'
import type { Application } from './declarations'

export default function (app: Application): void {
  const connection = app.get('mongodb')
  const database = connection.substr(connection.lastIndexOf('/') + 1)
  const mongoClient = MongoClient.connect(connection)
    .then(client => client.db(database))

  app.set('mongoClient', mongoClient)
}
