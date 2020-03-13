import {Sequelize} from 'sequelize'
import dbConfig from './config/database'

export default new Sequelize(dbConfig)