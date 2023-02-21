import EmailAddress from '../valueObjects/EmailAddress'

class User {
    name: String
    emailAddress: EmailAddress

    constructor(name: String, emailAddress: EmailAddress){
        this.name = name
        this.emailAddress = emailAddress
    }
}

export default User