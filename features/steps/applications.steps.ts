import request from "supertest"
import { loadFeature, defineFeature } from "jest-cucumber"
const feature = loadFeature("features/sites.feature")
const app = require("../../index")

defineFeature(feature, (test) => {

})
