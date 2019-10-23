import { Response } from "express";
import { IOpenAPIResponseValidator } from "openapi-response-validator";

export type OpenAPIResponse = Response & IOpenAPIResponseValidator
