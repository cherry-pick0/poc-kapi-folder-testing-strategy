import { z } from "zod"
import getRegistry from "../../app/utils/openapi/registry"

const registry = getRegistry()

const EmailAddressSchema = registry.register(
  "EmailAddressSchema",
  z.object({
    address: z.string(),
    display_name: z.string(),
  })
)

export type EmailAddress = z.infer<typeof EmailAddressSchema>

export default { EmailAddressSchema }
