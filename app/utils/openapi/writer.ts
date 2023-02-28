// Copied

import fs from 'fs'
import yaml from 'yaml'
import generateOpenApiDocument from './generator'

const writeDocumentation = (): void => {
  // OpenAPI JSON
  const docs = generateOpenApiDocument()

  // YAML equivalent
  const fileContent = yaml.stringify(docs)

  fs.writeFileSync(`api-docs.yml`, fileContent, {
    encoding: 'utf-8',
  })
}

export default writeDocumentation
