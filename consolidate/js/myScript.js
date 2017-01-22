//$( window ).load(function() {
$ (document).ready (function () {

//Test 3a, 3b
(function(){
  var elem = document.createElement('canvas');
  if (!!(elem.getContext && elem.getContext('2d'))) {
    document.getElementById('test3a').src = 'images/pixel.png';
    document.getElementById('score_test3a').innerHTML = '1';
  }

 var test = 'test';
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      document.getElementById('test3b').src = 'images/pixel.png';
      document.getElementById('score_test3b').innerHTML = '1';
    } catch(e) {
      document.getElementById('test3b').src = 'images/red.png';
      document.getElementById('score_test3b').innerHTML = '0';
    }
})();

//Test 3b


  //Calculate test 1 score
  test1 = ["a","b","c","d","e","f"];
  test1_score = 0;
  for (i=0;i<test1.length;i++) {
      test1_score = test1_score + Number($( "#score_test1" + test1[i]).text());
  }

 //Calculate test 2 score
  test2 = ["a","b","c"];
  test2_fails = 0;
  for (i=0;i<test2.length;i++) {
    imgURL = "#test2" + test2[i];
    $(imgURL).error(function(){
      test2_fails++;
    });
  }

  //Calculate test 3 score
  test3 = ["a","b"];
  test3_score = 0;
  for (i=0;i<test3.length;i++) {
      test3_score = test3_score + Number($( "#score_test3" + test3[i]).text());
  }

  //Create images in different in 1, 2, 4, 6, 8 seconds for test4
  test4 = ["1","2","4","6","8"];
  test4_fails = 0;
  for (i=0;i<test4.length;i++) {
    imgURL = "#img_" + test4[i];
    $(imgURL).error(function(){
      test4_fails++;
    });
  }

  //test5: image inside script
  var protocol = "http://www.cs.odu.edu/~hdo/cs697/acidtest/consolidate/";
  var filename = protocol + "img_leak.php";
  $("#leakingimage").attr("src",filename);

})

function imgError(image){
   $( image ).attr('src','images/red.png');
    switch(image.id) {
    case 'test1a':
        $('#score_test1a' ).html('0');
        break;
    case 'test1b':
        $('#score_test1b' ).html('0');
        break;
    case 'test1c':
        $('#score_test1c' ).html('0');
        break;
    case 'test1d':
        $('#score_test1d' ).html('0');
        break;
    case 'test1e':
        $('#score_test1e' ).html('0');
        break;
    case 'test1f':
        $('#score_test1f' ).html('0');
        break;
    }
}

//Make final score
$(function() {
    $(window).bind('load', function() {
        $("#test1_score").html((test1_score) +" of "+ test1.length);
        $("#test2_score").html((test2.length-test2_fails) +" of "+ test2.length);
        $("#test3_score").html((test3_score) +" of "+ test3.length);
        $("#test4_score").html((test4.length-test4_fails) +" of "+ test4.length);
        //Test5: Compare two images if they have same source.
        var org_uri = $('#originimage')[0].src;
        var leak_uri= $('#leakingimage')[0].src;
        if (org_uri == leak_uri) {
            $("#pass").html("Pass");
        } else {
            $("#fail").html("Failed");
        }
    });
});


