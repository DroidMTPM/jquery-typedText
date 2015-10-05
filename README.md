# jQuery.TypedText
[![Build Status](https://travis-ci.org/Droid047/jquery-typedText.svg?branch=master)](https://travis-ci.org/Droid047/jquery-typedText)

A jQuery plugin that animates text in an element to make it seem as if it is being typed.


# Version
1.1.1

#Download
You can download the latest version at the following link:
https://github.com/Droid047/jquery-typedText/releases/latest

# Usage
```html
<html>
  <head>
    <!-- This script tag will include the jQuery framework. -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <!-- This script tag will include the Typed Text UI plugin. -->
    <script type="text/javascript" src="/js/jquery.typedtext.js"></script>
  </head>
  <body>
    <!--This element will be the element that will display the text we want to animate with the effect. -->
    <div id="MyTypedText"></div>
    <script type="text/javascript">
      $(document).ready(function() {
        /**
         * The plugin takes 1 to 3 arguments; If only one argument is supplied it must be
         * a string. Or you could choose to customize the plugin's effect even further by
         * also using either or both of the other possible parameters.
         *
         * @param [string] - The text to animate the plugin should animate.
         * @param [int] - The amount of milliseconds between each letter being displayed. [OPTIONAL]
         * @param [function] - The function you would like the plugin to execute upon
         *                     successful completion of the text animation.
         **/
        $("#MyTypedText").typedText("This text was just typed!", 100, function() {
        	alert("The plugin has successfully typed the given text.");
        });
      });
    </script>
  </body>
</html>
```

# Example
If you'd like to try a working example you could visit the following link:
https://jsfiddle.net/Droid047/40tovd7q/