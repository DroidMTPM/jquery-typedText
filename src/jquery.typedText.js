/**
 * User Interface Typed Text plugin for jQuery v1.6.4 or >.
 *
 * Version: 1.2.2
 *
 * Copyright (C) 2015 Norberto Hernandez
 **/

// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function($) {
    /**
     * The plugin takes 0 to 3 arguments; If only one argument is supplied it must be
     * a string; if no arguments are supplied the plugin will attempt to get the
     * text from within the selector element. Or you could choose to customize the
     * plugin's effect even further by also using either or both of
     * the other possible parameters.
     *
     * @param [string] - The text to animate the plugin should animate.
     * @param [int] - The amount of milliseconds between each letter being displayed. [OPTIONAL]
     * @param [function] - The function you would like the plugin to execute upon
     *                     successful completion of the text animation.
     **/
    $.fn.typedText = function() {
        var $this = $(this);

        /**
         * Proccess each given argument by determining what each argument
         * is referring to.
         **/
        var processArgs = function(args) {
            //Store the number of arguments
            var numOfArgs = args.length;

            // Set the variable we're going to return at the end of the function.
            // The variable will hold an object that will contain the given parameters
            // if possible.
            var givenArgs = {
                text2Type: "",
                space: 63,
                callback: ""
            };

            //Make sure that the amount of arguments is only 1-3
            if(numOfArgs >= 1 && numOfArgs <= 3) {
                //Set the "currentArg" & "argType" vars before the loop so it won't get initiated multiple times.
                var currentArg;
                var argType;

                /**
                 * Go through each argument and and check if it is valid for any
                 * of the necessary parameters.
                 **/
                for(var i = 0; i < numOfArgs; i++) {
                    //Store the argument
                    currentArg = args[i];

                    //Store the type of the argument
                    argType = typeof currentArg;

                    //Determine what variable we should assign this argument to.
                    switch(argType) {
                        case "string":
                             //Check if the var that holds the desired text to animate has not been set.
                             if(givenArgs.text2Type.length === 0) {
                                givenArgs.text2Type = currentArg;
                             }
                        break;
                        case "number":
                             givenArgs.space = currentArg;
                        break;
                        case "function":
                             // Check if the var that holds the callback that should be executed upon
                             // completion has not been set yet.
                             if(givenArgs.callback === "") {
                                givenArgs.callback = currentArg;
                             }
                        break;
                        default:
                    }
                }

                //Return all of the given parameters.
                return givenArgs;
            }
            /**
             * If the function was given no arguments attempt to retieve
             * the text that should be typed out.
             **/
            else if(numOfArgs === 0) {
                //Check if the selector has html inside
                if($this.html().length != 0) {
                    givenArgs.text2Type = $this.html();

                    return givenArgs;
                } else {
                    //Return false because there was no text to type.
                    return false;
                }
            }
            //Otherwise stop the function.
            else {
                return false;
            }
        };

        /**
         * This function will be the function that actually animates the given
         * string as if it is being typed out.
         **/
        var typeText = function(elementIdentifier, givenArgs) {
            /**
             * Check if the given arguments are invalid and if they are
             * make sure to display an error on the developer's console
             * instead of running the typedText function.
             **/
            if(!givenArgs) {
                console.log("jQuery TypedText Plugin ERROR: Invalid argument(s).");
                return false;
            }
            else {
                //store this element
                var element = $(elementIdentifier);

                //Clear the text from the element
                element.html('');

                //Store the string without html tags
                var strippedText = givenArgs.text2Type.replace(/(<([^>]+)>)/ig, "");

                //Store the size of the string that should be typed
                var textLength = strippedText.length;

                //Initialize the currentChar variable
                var currentChar;

                // Initialize the iterator variable for the interval
                // that will gradually display the whole string.
                var i = 0;

                /**
                 * Set an interval that will display each one of the letters
                 * in the string individually as if it were being typed.
                 **/
                var typedTextInterval = setInterval(function() {
                    //Check if the string has not been fully printed.
                    if(i < (textLength - 1)) {
                        //Update the current character that should be printed.
                        currentChar = strippedText.charAt(i);

                        //Add the current character
                        element.html(element.html() + currentChar);

                        //increase the iterator
                        i++;
                    }
                    //Otherwise the interval should be cleared.
                    else {
                        clearInterval(typedTextInterval);

                        //update the text with any HTML styling now that its done being typed.
                        element.html(givenArgs.text2Type);

                        // Now that we finished displaying the text we'll check if the "callback" argument
                        // is actually a function; if it is then we execute the function.
                        if(typeof givenArgs.callback === "function") {
                            givenArgs.callback();
                        }
                    }
                }, givenArgs.space);

                return true;
            }
        };

        var processedArgs = processArgs(arguments);

        typeText(this, processedArgs);

        //enable chaining
        return this;
    }
}(jQuery));