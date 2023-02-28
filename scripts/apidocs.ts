// Copied

import { exit } from 'process'
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi'
import { z } from 'zod'
import writeDocumentation from '../app/utils/openapi/writer'
import '../index'

extendZodWithOpenApi(z)
console.log('Generating OpenAPI YAML....')

writeDocumentation()

console.log('API docs generation succeeded.')

exit(0)
