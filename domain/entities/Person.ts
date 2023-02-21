import EmailAddress from "../valueObjects/EmailAddress";

class Person {
  id: number;
  name: String;
  emailAddress: EmailAddress;

  constructor(id: number, name: String, emailAddress: EmailAddress) {
    this.id = id;
    this.name = name;
    this.emailAddress = emailAddress;
  }
}

export default Person;
