import chai, {expect} from "chai"
import chaiHttp from "chai-http"

const app = require("../../../index")
chai.use(chaiHttp)

describe("GET /people", () => {
  it("List all people", async () => {
    const response = await chai.request(app).get("/people")
    expect(response.status).to.be.equal(200)
  })
})
