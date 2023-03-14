export abstract class CustomError extends Error {

    abstract statusCode : number;

    constructor( message: string){
        super(message);
        Object.setPrototypeOf(this, CustomError.prototype);
    }

    abstract serializeCode() : { message: string, field?: string }[]
}