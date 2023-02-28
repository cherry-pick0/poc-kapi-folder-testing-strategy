// Copied
import type { OpenAPIObject } from 'openapi3-ts'

const baseOpenApiSchema: OpenAPIObject = {
  openapi: '3.1.0',
  info: {
    title: 'API',
    version: '0.0.1',
    description: 'Api docs with zod',
  },
  servers: [
    {
      url: 'http://localhost:4000',
    },
  ],
  paths: [],
}

export default baseOpenApiSchema
