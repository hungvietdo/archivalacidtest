<!DOCTYPE html>
<html lang="en">
    <head>
        <script type="text/javascript">
            function loadPage(href)
            {
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.open("GET", href, false);
                xmlhttp.send();
                document.getElementById('bottom').innerHTML = xmlhttp.responseText;
            }
        </script>
    </head>

    <body onload="loadPage('http://c76048e5.ngrok.io/acidtest/csp/geterrorlog.php')">
    <p>Here is the content</p>
        <div id="bottom"></div>
    </body>

</html>
