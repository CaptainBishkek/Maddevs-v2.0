$(window).on('load', function () {
	$h2o_preloader = $('.preloader'),
	  $spinner = $h2o_preloader.find('.preloader__spinner');
	$spinner.fadeOut();
	$h2o_preloader.delay(350).fadeOut('slow');
});