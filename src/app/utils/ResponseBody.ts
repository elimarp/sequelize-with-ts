interface IResponseBody {
  message: string
  payload?: object
  errors?: object[]
}

class ResponseBody {
  message: string
  payload: object
  errors: object[]
  
  constructor({ message, payload, errors }: IResponseBody) {
    this.message = message
    this.payload = payload || {}
    this.errors = errors || []
  }
}

export default ResponseBody
