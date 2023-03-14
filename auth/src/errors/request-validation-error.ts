import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

export class RequestValidationError extends CustomError{
    statusCode = 400;

    constructor( public errors: ValidationError[]){
        super("invalid request parameters");
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeCode(): { message: string; field?: string | undefined; }[] {
        return this.errors.map( err =>{
            return { message: err.msg, field: err.param}
        });
    }
}