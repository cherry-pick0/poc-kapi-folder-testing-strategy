import { expect } from "chai"
import { describe } from "mocha"
import Person from "./Person"

describe("Test suite for entity 'Person'", () => {
  it("tests creating Person entity object", () => {
    let person: Person = { id: 1, name: "Rick" }
    expect(person.emailAddress).to.be.undefined
  })
})
