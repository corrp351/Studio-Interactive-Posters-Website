$(document).ready(function(){
 	$('#vase').click(function() {
		$('.circular').each(function() {
			$(this).toggleClass('animcircles');
		});
	});
	$("#vase").click(function(){
	    var colors=['#003366', '#ffb3cc', '#e6e6ff', '#4d004d', 'black', '#003300', '#000066', '#b3b3ff', '#ffff00'];
	    var random_color= colors[Math.floor(Math.random() * colors.length)];
		$(".body").css('background-color', random_color);
	});
});
