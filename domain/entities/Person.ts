import EmailAddress from "../valueObjects/EmailAddress"

type Person = {
  id: number
  name: String
  emailAddress?: EmailAddress
}

export default Person
