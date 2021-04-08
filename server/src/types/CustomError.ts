import { IErrorResponse } from "../constants/ErrorResponses"

export class CustomError extends Error {

    code: number;

    constructor(err : IErrorResponse) {
      super();
  
      // Mantiene un seguimiento adecuado de la pila para el lugar donde se lanzó nuestro error (solo disponible en V8)
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, CustomError)

        this.code = err.code;
        this.message = err.msg;
      }
    }
  }