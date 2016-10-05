

<html>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>

<p>Test with 2 seconds</p>
<div id="2second"></div>

<p>Test with 6 seconds</p>
<div id="6second"></div>

<script>
//    $(function() {
//       var url = "createImage.php?sleep=2";
//       var url1 = "createImage.php?sleep=6";
//       $.ajax(url,
//       {
//          statusCode: {
//          404: function() {
//             document.getElementById("2second").innerHTML = 404;
//             //alert('page not found');
//          },
//          200: function() {
//             document.getElementById("2second").innerHTML = 200;
//             //alert('page not found');
//          }
//       }

 
//    });   
// });


 
$.ajax({
    type: "post", url: 'createImage.php?sleep=2',
    success: function (request, status, error) {
       
       document.getElementById("2second").innerHTML = "<img src='createImage.php?sleep=2'/>";

            $.ajax({
             type: "post", url: 'createImage.php?sleep=6',
             success: function (request, status, error) {
                
                document.getElementById("6second").innerHTML = 
                "<img src='createImage.php?sleep=6'/>"; 
             },
             error: function (request, status, error) {
                 document.getElementById("6second").innerHTML = 
                 "<img src='notpass.php?sleep=6'/>"; 
             }
            });
    },
    error: function (request, status, error) {
        document.getElementById("2second").innerHTML = 
        "<img src='notpass.php?sleep=2'/>"; 
    }
});

</script>


</html>
