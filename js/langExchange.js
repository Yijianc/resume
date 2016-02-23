$(function() {

	var $navCenter,
		linkChn = 'index-en.html',
		linkEn = 'index.html',
		$html = $('html').attr('lang'),
		$asideControl = $('aside.controls'),
		langExchange = '<a href="index-en.html" class="navigate-center" langEx="英"></a>';

	
	if ($html === 'en') {
		
		langExchange = langExchange.replace(linkChn,linkEn);
		langExchange = langExchange.replace('英','中');
		
	} 

	$asideControl.append(langExchange);

/*	$('aside a').on('click', function(e) {
		e.preventDefault();
		var url = this.url,
			$content = $('#reveal');

		$('#slides').remove();

		$.ajax({
			type: "GET",
			url: url,
			timeout: 2000,
			beforeSend: function() {
				$content.append('<div id="load">Loading</div>');
			},
			complete: function() {
				$('#load').remove();
			},
			success: function(data) {
				$content.html( $(data).find('#slides') ).hide().fadeIn(700);
			},
			error: function() {
				$content.html('<div class="container">Please try again soon.</div>');
			}
		})
	})*/
});

