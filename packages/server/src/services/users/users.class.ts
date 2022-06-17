import type { Db } from 'mongodb'
import type { MongoDBServiceOptions } from 'feathers-mongodb'
import { Service } from 'feathers-mongodb'
import type { Application } from '../../declarations'

export class Users extends Service {
  constructor(options: Partial<MongoDBServiceOptions>, app: Application) {
    super(options)

    const client: Promise<Db> = app.get('mongoClient')

    client.then((db) => {
      this.Model = db.collection('users')
    })
  }
}
