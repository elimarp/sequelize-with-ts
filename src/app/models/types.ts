import { Sequelize } from "sequelize/types";

interface IModelService{
  init(connection: Sequelize): void
  associate?(): void
}

export { IModelService }