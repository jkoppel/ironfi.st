/* Automatically scroll to div id's by starting the link with #*/


	var slider = new MasterSlider();

		slider.control('arrows');	
		slider.control('lightbox');	
		slider.control('thumblist' , {autohide:false ,dir:'h',align:'bottom', width:130, height:85, margin:5, space:5 , hideUnder:400});

		slider.setup('masterslider' , {
			width:750,
			height:500,
			space:5,
			loop:true,
			view:'fade'
		});

$("document").ready(function() {

	var offset = 100;
    var speed = 250;
    var duration = 500;
	   $(window).scroll(function(){
            if ($(this).scrollTop() < offset) {
			     $('.topbutton') .fadeOut(duration);
            } else {
			     $('.topbutton') .fadeIn(duration);
            }
        });
	$('.topbutton').on('click', function(){
		$('html, body').animate({scrollTop:0}, speed);
		return false;
		});
	
	$('a[href^="#"]').click(function(event) {
		var target = $( $(this).attr('href') );
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}

	});	
		
		
			$("a[rel^='prettyPhoto']").prettyPhoto();
		

});

