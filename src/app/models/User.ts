import { v4 as uuidv4 } from 'uuid'
import { Sequelize, Model, DataTypes, CreateOptions, FindOptions } from "sequelize";
import { notEmpty, invalidEmail } from "./utils/errorMessages";
import sequelize from '../../database'

interface IUser {
  name: string
  email: string
}

class User extends Model{
  id!: string
  name!: string
  email!: string
}

class UserService {
  // static init(sequelize: Sequelize){
    
  // }

  static create (values: IUser, options?: CreateOptions) {
    return User.create(values, options)
  }

  static findAll (options?: FindOptions) {
    return User.findAll(options)
  }
}

console.log('User INITTTTTTTTTTTTTTTTTTT');

User.init({
  id: {
    field: 'user_id',
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: notEmpty('name') }
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: { msg: invalidEmail() }
    }
  }
}, {
  sequelize,
  tableName: 'user',
  hooks: {
    beforeValidate: (instance) => {
      instance.setDataValue('id', uuidv4())
    },
    beforeBulkCreate: (instances) => {
      for (const instance of instances) {
        instance.setDataValue('id', uuidv4())
      }
    }

    // Tests
    // beforeBulkDestroy: () => { console.log('--------- User beforeBulkDestroy') },
    // beforeBulkSync: () => { console.log('--------- User beforeBulkSync') },
    // beforeBulkUpdate: () => { console.log('--------- User beforeBulkUpdate') },
    // beforeCreate: () => { console.log('--------- User beforeCreate') },
    // beforeCount: () => { console.log('--------- User beforeCount') },
    // beforeDestroy: () => { console.log('--------- User beforeDestroy') },
    // beforeFind: () => { console.log('--------- User beforeFind') },
    // beforeFindAfterExpandIncludeAll: () => { console.log('--------- User beforeFindAfterExpandIncludeAll') },
    // beforeFindAfterOptions: () => { console.log('--------- User beforeFindAfterOptions') },
    // beforeSave: () => { console.log('--------- User beforeSave') },
    // beforeSync: () => { console.log('--------- User beforeSync') },
    // beforeUpdate: () => { console.log('--------- User beforeUpdate') }
  }
});

export default UserService