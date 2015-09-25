# jquery.TypedText Plugin
A jQuery plugin that animates text in an element to make it seem as if it is being typed.

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
         * The second parameter could either be a string (Possible values: slow, medium, fast),
         * an integer, or it could be left blank and in that case the amount of milliseconds that 
         * will pass before typing the upcoming letter will be 66.
         **/
        $("#MyTypedText").typedText("This text will now be typed.", "slow");
      });
    </script>
  </body>
</html>
```
