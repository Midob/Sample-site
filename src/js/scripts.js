jQuery(document).ready(function($) {
	// click out of the box
	$(window).click(function() {
		$('.box').removeClass('active');
	});
	// filters
	$('.filter_li a').click(function(){
		var value = $(this).data('value');
		var refresh = true;
		var parentLi = $(this).parent();
		if ( parentLi.hasClass('selected') ) {
			refresh = false;
		}
		parentLi
			.addClass('selected')
			.siblings().removeClass('selected');
		refreshBoxes(value, refresh);
	});
	// box event
	$('.box').click(function(event){
		event.stopPropagation();
		$(this)
			.addClass('active')
			.siblings().removeClass('active');
	});
});

function refreshBoxes(filter, refresh){ // refresh filtering boxes
	var box = $('.box');
	var show = 'visible';
	var hide = 'non-visible';
	var data = 'category';
	if (refresh){
		box.removeClass(show);
		setTimeout(function(){
			box.addClass(hide);	
			if (filter == 'all'){
				box.removeClass(hide);
				setTimeout(function(){
					$('.box').addClass(show);
				},300);
			} else{
				box.each(function(){
					var cat = $(this).data(data);
					if (cat == filter){
						var that = $(this);
						$(this).removeClass(hide);
						setTimeout(function(){
							that.addClass(show);
						},300);
					}
				});	
			}
		},300); 
	}
}
