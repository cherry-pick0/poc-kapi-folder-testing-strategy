Feature: Sites

    Scenario: Get sites
        When we get a list of sites
        Then we should receive
            | id | name   | displayName | status |
            | 1  | test  | test       | live   |
            | 2  | test2 | test2      | live   |


    Scenario: Clear cache
        Given the site exists
        When we clear cache
        Then we should receive
            """
            {
                "success": true
            }
            """

    Scenario: Restart PHP engine
        Given the site exists
        When we restart PHP engine
        Then we should receive
            """
            {
                "success": true
            }
            """
