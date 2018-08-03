-------------------------------------------------------------------------------------
Simple Plan

-------------------------------------------------------------------------------------
Remember:
Main Aim - is to replicate the entire calculator to the best of my ability

- Configure a html and css clone of the Google Calculator
- The order of precedence is seen as the biggest problem, the plan is do a few mathematical sum at the start, using a plethera of values from the buttons, to mix and match possible calculations
- Current logic architecture
    - Create a file system where you can;
        - a file individual functions that can calculate the value
        - a file to takes able to take into the value and process
    - How each value will be processed
        - Buttons assigned events
            - describes how each button transcribes and store values in state
                - [Any value/except equals, backspace, rad|deg, ans] button -> inputs a value into state that are recognisable by regex
                - [equal] button is pressed -> state is casted into a string, regex is used to recognise specific parts of the string; regex will be used over and over again.
                Where the highest order of precedence is detected by regex, and values converted to numerical values. -> this process occurs again, until every value is
                converted to a string that can be processed by eval
                - [backspace] button (below is copied and pasted from user stories, with some alterations)
                    a) to delete the previous value, if I already entered that value; acts like CE on any other calculator: 123 -> 12, 4ln(5) -> 4ln(5
                    b) to delete the entire value, after I have pressed the equals button; acts like the AC on any other calculator: 123 -> ""  , the "" depicts an empty string
                - [rad|deg]toggle -> detects the use of sin, cos, tan, the alters the values within it's brackets
                - [ans] button -> returns ans values on the screen and us -> places it back into state
            - how those values will recognised by regex. Make it easier in sense where, if additional functionality, i.e. buttons were added, then how will this button fit into the applications
        - Precedence of each function over another
        - The end string state, must be able to process by eval, to spit out an answer
- Enter tests for the entire calculator

Discoveries
- Whenever you input specific values, the value of precedent also depends on whether the value is left of the operator such as 5! or 5%