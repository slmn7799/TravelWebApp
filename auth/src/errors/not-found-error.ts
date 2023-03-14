import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError{
    statusCode = 400;

    constructor(){
        super("Not Found");

        Object.setPrototypeOf( this, NotFoundError.prototype);
    }

    serializeCode(): { message: string; field?: string | undefined; }[] {
        return [
            {
                message: "Route not found"
            }
        ]
    }
}