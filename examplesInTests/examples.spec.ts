
import { expect, request, use } from "chai";
import chaiHttp from "chai-http";
import { readFileSync } from "fs";
import { safeLoad } from "js-yaml";
import Swagger from "swagger-client";
import { app } from "./app";
import exampleFromSchema from "./oas3/example";

use(chaiHttp);

describe("POST /dogs", () => {
  let swaggerClient: any;

  before(async () => {
    const spec = safeLoad(readFileSync("./spec.yaml", { encoding: "UTF-8" }))
    swaggerClient = await Swagger({ spec });
  });

  it("creates new dog based on example values", async () => {
    const schema = swaggerClient.spec.paths["/dogs"].post.requestBody.content["application/json"].schema
    const exampleRequestDog = exampleFromSchema(schema)
    const exampleResponseDog = exampleFromSchema(schema, { includeReadOnly: true })

    const response = await request(app).post("/dogs").type("application/json").send(exampleRequestDog)

    expect(response).to.have.status(201)
    expect(response.body).to.deep.nested.include(exampleResponseDog)
  })
})
