Feature: Applications

    Scenario: Get applications
        When we get a list of applications
        Then we should receive
            | id | name  | displayName | status            | deployments        |
            | 1  | test  | test        | deploymentSuccess | {"id": "ac4d5d83"} |
            | 2  | test2 | test2       | deploymentSuccess | {"id": "95f81589"} |


    Scenario: Get applications by name
        Given I have the following applications
            | id | name     | displayName | status            | deployments        |
            | 1  | test     | test        | deploymentSuccess | {"id": "ac4d5d83"} |
            | 2  | someSite | someSite    | deploymentSuccess | {"id": "95f81589"} |
            | 3  | test     | test2       | deploymentSuccess | {"id": "95f81589"} |

        When I search for applications by name test
        Then I find two applications
            | id | name | displayName | status            | deployments        |
            | 1  | test | test        | deploymentSuccess | {"id": "ac4d5d83"} |
            | 3  | test | test2       | deploymentSuccess | {"id": "95f81589"} |

    Scenario: Update application name
        Given I have application
            """
            {
                "id": 1,
                "name": "test"
            }
            """
        When I update name to newName
        When I search for applications by name newName
        Then I find one application
            | id | name    | displayName | status            | deployments        |
            | 1  | newName | test        | deploymentSuccess | {"id": "95f81589"} |

