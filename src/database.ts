import {Sequelize} from 'sequelize'
import dbConfig from './config/database'

// class Database {
//   models: IModelService[]
//   connection: Sequelize
  
//   constructor() {
//     this.models = [User]
//     this.connection = new Sequelize(dbConfig)
//     this.init()
//   }

//   init() {
//     for (const model of this.models) {
//       model.init(this.connection)
//     }

//     for (const model of this.models) {
//       if (model.associate) model.associate()
//     }
//   }
// }

export default new Sequelize(dbConfig)