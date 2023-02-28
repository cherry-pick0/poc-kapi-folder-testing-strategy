// Copied

import { OpenAPIGenerator } from '@asteasolutions/zod-to-openapi'
import baseOpenApiSchema from './base'
import getRegistry from './registry'

const generateOpenApiDocument = () => {
  const registry = getRegistry()
  const generator = new OpenAPIGenerator(registry.definitions, '3.1.0')

  return generator.generateDocument({
    ...baseOpenApiSchema,
    servers: [{ url: 'v1' }],
  })
}

export default generateOpenApiDocument
