const Discordie = require("discordie");

var Bot = new Discordie({
    // TODO: Options lol
});

// TODO: Literally everything

// Pseudocode Plans
/*
    - Command Parser
        - support for pipes
        - support for multi-word arguments
        - support for quick variables (i.e. [%2d3])
    - Command Class
        - general layout
            - unique id (name)
            - name, description, usage
            - run callback
                - resolves with return
                    - command class handles passing to next pipe or outputting

    - Extremely configurable
    - Customizable, most core stuff as modules
    - Easy to make commands, possibly a CustomCommand command for creating commands from Discord 
        - Would work like Nightbot's custom commands, i.e. would be able to specify a command such as
            - cc add countdown [%countdown(epoch or similiar)]
                - botprefix countdown = returns [%countdown(epoch or similiar)]
                - botprefix countdown > asciiart = returns [%countdown(epoch or similiar)] ascii artified

    - WAY DOWN THE LINE -
    - web interface using node
        - able to modify bot stuff
        - able to send messages as bot, control like user acct (albeit limited)
        - able to modify custom commands
*/