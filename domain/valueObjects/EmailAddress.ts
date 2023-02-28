import { z } from "zod"

const EmailAddressSchema = z.object({
  address: z.string(),
  display_name: z.string(),
})

export type EmailAddress = z.infer<typeof EmailAddressSchema>

export default { EmailAddressSchema }
