
function RunAfterIFrameLoaded (){
alert ('iframe is ready');
//Test 3c, get iframe content
    var iframe = document.getElementById("test_iframe");
    var iframe_contents = iframe.contentDocument;

    alert (JSON.stringify(iframe_contents, null, 4));

};

$ (document).ready (function () {

//Test 3a, 3b, 3c
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

    var canPlay = false;
    $.ajax({
      url:'video/movie.mp4',
        async: false,
      error: function()
      {
        //file not exists
        document.getElementById('score_test3d').innerHTML = '0';
        document.getElementById('video_status').innerHTML = 'Can not play the movie.';
      },
      success: function()
      {
        //file exists
        document.getElementById('test3d').src = 'images/pixel.png';
        document.getElementById('score_test3d').innerHTML = '1';
        document.getElementById('video_status').innerHTML = 'Video courtesy of Big Buck Bunny (www.bigbuckbunny.org). ';
        var v = document.createElement('video');
        if(v.canPlayType && v.canPlayType('video/mp4').replace(/no/, '')) {
        } else {
          document.getElementById('test3d').src = 'images/red.png';
          document.getElementById('score_test3d').innerHTML = '0';
          document.getElementById('video_status').innerHTML = 'Can not play the movie.';
        }
      }
    });
    $('iframe').load(function(){
        var iframeDoc = document.getElementById('iframe').contentWindow.document;
        if ($(iframeDoc).find('#iframetext').text() == 'New HTML5 sandbox tag') {
          document.getElementById('test3c').src = 'images/pixel.png';
          document.getElementById('score_test3c').innerHTML = '1';
        }
        //Calculate test 3 score
          test3 = ["a","b","c","d"];
          test3_score = 0;
          for (i=0;i<test3.length;i++) {
              test3_score = test3_score + Number($( "#score_test3" + test3[i]).text());
          }
    });
    $('iframe').attr('src','tests/iframesandbox.html'); //add iframe src

 })();


  //Calculate test 1 score
  test1 = ["a","b","c","d","e","f"];
  test1_score = 0;
  for (i=0;i<test1.length;i++) {
      test1_score = test1_score + Number($( "#score_test1" + test1[i]).text());
  }

 //Calculate test 2 score
  test2 = ["a","b","c","d","e","f","g"];
  test2_fails = 0;
  for (i=0;i<test2.length;i++) {
    imgURL = "#test2" + test2[i];
    $(imgURL).error(function(){
      test2_fails++;
    });
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
 var protocol = "http://";
 var filename = protocol + "www.cs.odu.edu/~hdo/acidtest/consolidate/img_leak.php";
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

        //Test4: Depend on how many seconds a web crawler can wait
        totalImg = test4.length - test4_fails;
        if (totalImg<5) {
            switch(totalImg) {
                  case 1:
                        seconds = 2;
                        break;
                  case 2:
                        seconds = 4;
                        break;
                  case 3:
                        seconds = 5;
                        break;
                  case 4:
                        seconds = 7;
                  default:
                        seconds = 8;
                      }
            $("#score_test4a").html("Can wait no more than "+ seconds + " seconds.");
        } else {
            $("#score_test4a").html("Can wait for more than 8 seconds.");
        }
        //Test5: Compare two images if they have same source.
        var org_uri = decodeURIComponent($('#originimage')[0].src);
        var leak_uri= decodeURIComponent($('#leakingimage')[0].src);
        console.log('org_uri'+org_uri);
        console.log('leak_uri'+leak_uri);
        if (org_uri == leak_uri) {
            $("#pass").html("Pass");
            $('#test5_score' ).html('1 of 1');
        } else {
            $("#fail").html("Failed");
            $('#test5_score' ).html('0 of 1');
        }

        var score = 0;
        var totalScore = 0;
        for (i=1;i<6;i++) {
            if (i != 4) { //ignore test4 calculation
                mystr = $("#test" + i + "_score").text();
                console.log(mystr);
                myarr = mystr.split(" ");
                score = score + parseInt(myarr[0]);
                totalScore = totalScore + parseInt(myarr[2]);
            }
        };
        console.log(score);
        console.log(totalScore);
        $("#totalscore").html("<h2>Total Score: " + score + "/" + totalScore + "</h2>");

    });
});


