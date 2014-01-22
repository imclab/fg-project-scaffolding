// DOM-ready auto-init of plugins.
// Many plugins bind to an "enhance" event to init themselves on dom ready, or when new markup is inserted into the DOM
(function( $ ){
	$( function(){
		$( ".page:not(.page-hidden)", document ).trigger( "enhance" );
		setTimeout(function(){
			$( document.documentElement ).removeClass( "enhancing" );
		}, 0);
	});
}( jQuery ));