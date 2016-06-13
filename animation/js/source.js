var create_blx_54e284395b51ea741400003d_0000001 = function( element ) {
    return {
        init: function( options ) {
            this.element = element;
            this.element.textillate( options );
        }
    }
}

var options_blx_54e284395b51ea741400003d_0000001 =
{
    type: "char",
    loop: true,
    minDisplayTime: 1000,
    in: {
        effect: "zoomIn",
        delay: 500,
        delayScale: 1,
        shuffle: true,
        reverse: false
    },
    out: {
        effect: "shake",
        delay: 5,
        delayScale: 5,
        shuffle: true,
        reverse: false
    }
};

var init_blx_54e284395b51ea741400003d_0000001 = function( create, selector, options ) {
    var text = create( $( selector ) );
    text.init( options );
    return text;
}

$( document ).ready( function() {init_blx_54e284395b51ea741400003d_0000001( create_blx_54e284395b51ea741400003d_0000001, "#blx-54e284395b51ea741400003d-0000001", options_blx_54e284395b51ea741400003d_0000001 ); } );