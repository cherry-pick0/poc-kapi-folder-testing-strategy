Feature: Person creation

    Scenario: Add person
        When we create a person
        Then we should receive
            | id | name |
            |  1 | Rick |