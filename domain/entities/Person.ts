import EmailAddressSchema from "../valueObjects/EmailAddress"
import { z } from "zod"

const PersonSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
  emailAddress: z.object(EmailAddressSchema).optional(),
})

export type Person = z.infer<typeof PersonSchema>

export default { PersonSchema }
