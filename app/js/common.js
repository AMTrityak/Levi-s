$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

$('.apply_button').ready(function() {
	$('.apply_button, .order').hover(
	 function() {
	  $(this).addClass('animated flip'); 
	 },
	 function() {
	  $(this).removeClass('animated flip'); 
	 }
	
	)})

	$('.last_party--slider').slick({
		infinite: false,
		slidesToShow: 1,
		nextArrow: '<button type="button" class="slick-next"><img src="img/next_arrow.png" alt="" ></button>',
		prevArrow: '<button type="button" class="slick-prev"><img src="img/last_arrow.png" alt="" ></button>',
		//cssEase: null

	});
	
