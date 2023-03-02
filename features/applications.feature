Feature: Applications

    Scenario: Get applications
        When we get a list of applications
        Then we should receive
            | id | name   | displayName | status            | deployments        |
            | 1  | teste  | teste       | deploymentSuccess | {"id": "ac4d5d83"} |
            | 2  | teste2 | teste2      | deploymentSuccess | {"id": "95f81589"} |


    Scenario: Get applications by name
        Given I have the following applications in the store
            | id | name     | displayName | status            | deployments        |
            | 1  | teste    | teste       | deploymentSuccess | {"id": "ac4d5d83"} |
            | 2  | someSite | someSite    | deploymentSuccess | {"id": "95f81589"} |
            | 3  | teste    | teste2      | deploymentSuccess | {"id": "95f81589"} |

        When I search for applications by name teste
        Then I find two applications
            | id | name  | displayName | status            | deployments        |
            | 1  | teste | teste       | deploymentSuccess | {"id": "ac4d5d83"} |
            | 3  | teste | teste2      | deploymentSuccess | {"id": "95f81589"} |

    Scenario: Update application name
        Given I have application
            """
            {
                "id": 1,
                "name": "teste"
            }
            """
        When I update name to newName
        When I search for applications by name newName
        Then I find one application
            """
            {
                "id": 1,
                "name": "newName"
            }
            """
