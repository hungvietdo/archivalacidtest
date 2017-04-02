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
