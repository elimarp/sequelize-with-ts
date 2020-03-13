import { v4 as uuidv4 } from 'uuid'
import { Model, DataTypes, CreateOptions, FindOptions } from "sequelize";
import { notEmpty, invalidEmail } from "./utils/errorMessages";
import sequelize from '../../database'

interface IUser {
  name: string
  email: string
}

class User extends Model {
  id!: string
  name!: string
  email!: string

  createdAt!: string
  updatedAt!: string
}

class UserService {
  static async findAll(options?: FindOptions) {
    const instances = await User.findAll(options)
    return instances.map(({ id, name, email }) => ({ id, name, email }))
  }

  static findOne(options?: FindOptions) {
    return User.findOne(options)
  }

  static async create(values: IUser, options?: CreateOptions) {
    const { id, createdAt } = await User.create(values, options)
    return { id, createdAt }
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
      // TODO: test it: instance.id = uuidv4()
      instance.setDataValue('id', uuidv4())
    },
    beforeBulkCreate: (instances) => {
      for (const instance of instances) {
        instance.setDataValue('id', uuidv4())
      }
    }
  }
});

export default UserService