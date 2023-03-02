Feature: Applications

    Scenario: Get applications
        When we get a list of applications
        Then we should receive
            | id | name     | displayName | status            |
            | 1  | test     | test        | deploymentSuccess |
            | 2  | someSite | someSite    | deploymentSuccess |
            | 3  | test     | test2       | deploymentSuccess |


    Scenario: Get applications by name
        Given I have the following applications
            | id | name     | displayName | status            |
            | 1  | test     | test        | deploymentSuccess |
            | 2  | someSite | someSite    | deploymentSuccess |
            | 3  | test     | test2       | deploymentSuccess |

        When I search for applications by name test
        Then I find two applications
            | id | name | displayName | status            |
            | 1  | test | test        | deploymentSuccess |
            | 3  | test | test2       | deploymentSuccess |

    Scenario: Update application name
        Given I have application
            """
            {
                "id": "1",
                "name": "test"
            }
            """
        When I update name to newName
        When I search for applications by name newName
        Then I find one application
            | id | name    | displayName | status            |
            | 1  | newName | test        | deploymentSuccess |
