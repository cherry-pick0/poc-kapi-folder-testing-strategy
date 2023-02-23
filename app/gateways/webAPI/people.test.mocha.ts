import chai, { expect } from "chai"
import chaiHttp from "chai-http"

const app = require("../../../index")
chai.use(chaiHttp)

describe("People test flow", () => {
  it("tests GET /people endpoint", async () => {
    const response = await chai.request(app).get("/people")
    expect(response.status).to.be.equal(200)
    expect(response.body).to.be.a('array')
    expect(response.body).length.to.be.greaterThanOrEqual(1)
    expect(response.body[0]).to.be.a('object')
    expect(response.body[0]).to.have.property('id')
    expect(response.body[0]).to.have.property('name')
  })
})
