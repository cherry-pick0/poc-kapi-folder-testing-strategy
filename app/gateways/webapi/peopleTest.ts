import express from "express";
import request from "supertest";
import { describe } from "mocha";

const app = express();

describe("GET /people", function () {
  it("List all people", function (done) {
    request(app).get("/people").expect(200, done);
  });
});
