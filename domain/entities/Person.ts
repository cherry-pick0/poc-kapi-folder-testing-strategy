import EmailAddress from "../valueObjects/EmailAddress"

interface Person {
  id?: number
  name: string
  emailAddress?: EmailAddress
}

export default Person
