/**
 * User Interface Typed Text plugin for jQuery v2.1.0
 * Copyright (C) 2015 Norberto Hernandez
 **/
(function($) {
    /**
     * @param text2Type - The text to animate.
     * @param space - the amount of milliseconds between each letter being displayed.
     **/
    $.fn.typedText = function(text2Type, space) {
        //check if the space variable is empty
        if(typeof space !== "number" && typeof space !== "string") { space = 66; }
        /**
         * Otherwise we should check what the string variable "space" is equal to
         * so our plug-in will respond appropriatley.
         **/
        else if(typeof space === "string") {
            switch(space) {
                //if the space var is equal to "fast"
                case "fast":
                    space = 99;
                break;

                //If the space var is equal to "medium"  or its not equal to any of the mentioned values.
                case "medium":
                default:
                    space = 66;
                break;
                case "slow":
                    space = 13;
                break;
            }
        }

        //store this element
        var element = $(this);

        //Clear the text from the element
        element.html('');

        //Store the string without html tags
        var strippedText = text2Type.replace(/(<([^>]+)>)/ig, "");

        //Store the size of the string that should be typed
        var textLength = strippedText.length;

        //Initialize the currentChar variable
        var currentChar;

        //Initialize the iterator variable.
        var i = 0;

        /**
         * Set an interval that will display each one of letters
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
                element.html(text2Type);
            }
        }, space);

        //enable chaining
        return this;
    }
}(jQuery));
