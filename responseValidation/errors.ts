import { ErrorRequestHandler } from "express"

export const NotFoundError = { status: 404, title: "Not Found" }

export const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  res.status(err.status).json({
    status: err.status,
    title: err.errors.map((e: { message: string, path: string, errorCode: string, location: string }) => {
      if (e.errorCode == "required.openapi.validation") {
        return `${e.location} ${e.message}`
      }
      return `${e.path} ${e.message}`
    }).join(", "),
  })
}