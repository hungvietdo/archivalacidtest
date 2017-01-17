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
$(function() {
    $(window).bind('load', function() {
        //Calculate test 1 score
        test1 = ["a","b","c","d","e","f"];
        test1_score = 0;
        for (i=0;i<test1.length;i++) {
            test1_score = test1_score + Number($( "#score_test1" + test1[i]).text());
        }
    });
});
