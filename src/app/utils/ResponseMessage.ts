class ResponseMessage {
  static QUERY_SUCCESSFULLY () {
    return 'Query done successfully'
  }

  static QUERY_FAILED () {
    return 'Sorry! Something went wrong in your query. Plis, try again later.'
  }

  static CREATE_SUCCESSFULLY (subject: string) {
    const initial = subject.substr(0, 1).toUpperCase()
    const rest = subject.substr(1, subject.length - 1)
    return `${initial}${rest} created successfully.`
  }

  static CREATE_FAILED (subject: string) {
    const initial = subject.substr(0, 1).toUpperCase()
    const rest = subject.substr(1, subject.length - 1)
    return `${initial}${rest} failed to create.`
  }

  static INTERNAL_ERROR () {
    return 'Sorry! Something went wrong. Plis, try again later.'
  }
  // static VALIDATION_ERROR () {
  //   return 'Plis, provide the data correctly.'
  // }

  // static UNIQUE_VIOLATION (subject) {
  //   return `The ${subject} you're trying to create already exists.`
  // }
}

export default ResponseMessage