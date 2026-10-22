$('document').ready(function(){
	$(document).on('click', 'someyourContainer .dropdown-menu', function (e) {
	  e.stopPropagation();
	});

	$( '.toggle' ).click(function() {
	  $( '.wiki-menu>ul' ).css('display', 'block');
	});
});


$( '.toggle' ).click(function() {
  $( '.wiki-main-menu' ).toggle( "display", function() {});
});

$("li a[href='#']").on('click', function(e) {
	e.preventDefault();
	$(this).closest('li').find('ul').slideToggle();

});