Feature: People

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

    Scenario: Get person
        When we get a person by ID
        Then we should receive
            """
            {
                "id": 1,
                "name": "Rick",
                "email_address": ""
            }
            """

    Scenario: Get people
        When we get a list of people
        Then we should receive
            |id|name|email_address|
            |1|Rick||