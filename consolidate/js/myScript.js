//$( window ).load(function() {
$ (document).ready (function () {

  //Calculate test 1 score
  test1 = ["a","b","c","d","e","f"];
  test1_fails = 0;
  for (i=0;i<test1.length;i++) {
    imgURL = "#test1" + test1[i];
    $(imgURL).error(function(){
      test1_fails++;
    });
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

$ (window).load (function () {
  $("#test1_score").html((test1.length-test1_fails) +" of "+ test1.length);
  $("#test2_score").html((test2.length-test2_fails) +" of "+ test2.length);

  $("#test4_score").html((test4.length-test4_fails) +" of "+ test4.length);

  //Test5: Compare two images if they have same source.
  var org_uri = $('#originimage')[0].src;
  var leak_uri= $('#leakingimage')[0].src;
  if (org_uri == leak_uri)
    {
      $("#pass").html("Pass");
    } else {
      $("#fail").html("Failed");
    }
});


