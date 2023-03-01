Feature: Person creation

    Scenario: Add person
        When we create a person
        Then we should receive
            """
            {
                "id": 1,
                "name": "Rick",
                "email_address": ""
            }
            """