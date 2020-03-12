export const notEmpty = (paramName: string) => `${paramName} cannot be a empty string`
export const invalidPattern = (paramName: string) => `${paramName} does not match the defined pattern`
export const invalidEmail = (paramName: string = 'email') => `'${paramName}' is not a valid email`
export const exactLength = (paramPath: string, number: number) => {
  const plural = number === 1 ? '' : 's'
  return `${paramPath} should have ${number} character${plural}`
}