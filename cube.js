(function( root ) {

var xAngle = 0, yAngle = 0;
    cube = document.querySelector( '.cube' ),
    transformPropName = getTransformPropNameByPrefix();

function getTransformPropNameByPrefix() {
    var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split( ' ' ),
    prop,
    el = document.createElement( 'div' );

    for ( var i = 0, ilen = props.length; i < ilen; i++ ) {
        if ( typeof el.style[ props[ i ] ] !== "undefined" ) {
            return props[ i ];
            break;
        }
    }
}

function keydownHandler( e ) {
    switch( e.keyCode ) {
        case 37: yAngle -= 90; break; // left
        case 38: xAngle += 90; break; // up
        case 39: yAngle += 90; break; // right
        case 40: xAngle -= 90; break; // down
    };

    cube.style[ transformPropName ] = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)";
}

document.body.onkeydown = keydownHandler;  

})( window );  