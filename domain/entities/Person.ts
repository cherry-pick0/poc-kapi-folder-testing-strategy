import EmailAddress from "../valueObjects/EmailAddress"

type Person = {
  id?: number
  name: string
  emailAddress?: EmailAddress
}

export default Person
