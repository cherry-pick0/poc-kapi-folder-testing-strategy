//Copied
import {
  extendZodWithOpenApi,
  OpenAPIRegistry,
} from "@asteasolutions/zod-to-openapi"
import { z } from "zod"

let registry: OpenAPIRegistry

const getRegistry = () => {
  if (!registry) {
    registry = new OpenAPIRegistry()
    extendZodWithOpenApi(z)
  }

  return registry
}

export default getRegistry
