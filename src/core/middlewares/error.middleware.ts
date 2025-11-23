import logger from "config/logger";
import {
  ExpressErrorMiddlewareInterface,
  Middleware,
  NotFoundError,
} from "routing-controllers";

@Middleware({ type: "after" })
export class ErrorMiddleware implements ExpressErrorMiddlewareInterface {
  error(error: any, request: any, response: any, next: (err?: any) => any) {
    if (error instanceof NotFoundError) {
      response.status(404).json({
        statusCode: 404,
        message: "Resource not found",
      });
    } else {
      logger.error(`Error: ${error.message}`, { stack: error.stack });
      response.status(error.httpCode || 500).json({
        statusCode: error.httpCode || 500,
        message: error.message || "Internal Server Error",
        errors: error.errors || undefined,
      });
    }
  }
}

/**
 * Interceptor -> Request, Respose Transformation (Before, Still, After)
 */
