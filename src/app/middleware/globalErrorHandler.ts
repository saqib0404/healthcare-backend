import { NextFunction, Request, Response } from "express";
import { envVar } from "../../config/env";
import status from "http-status";

export const globalErrorHandler = (err: any, req: Request, res: Response, _next: NextFunction) => {
    if (envVar.NODE_ENV === "development") {
        console.log("global ", err);
    }

    let statusCode: number = status.INTERNAL_SERVER_ERROR;
    let message: string = `Internal Server Error`;

    res.status(statusCode).json({
        success: false,
        message,
        error: err.message
    })
}