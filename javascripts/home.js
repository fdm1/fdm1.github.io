window.showSection = function(){
	$('.slide-down').click(function(e){
	   	$(this).parent().siblings('.main-section').slideDown();
	   	$(this).siblings('.slide-up').show();
	   	$(this).hide();
	    e.preventDefault();
  });
}

window.hideSection = function(){
	$('.slide-up').click(function(e){
	   	$(this).parent().siblings('.main-section').slideUp();
	   	$(this).siblings('.slide-down').show();
	   	$(this).hide();
	   	console.log($(this))
	    e.preventDefault();
  });
}

$(document).ready(function() {
	showSection();
	hideSection();
});
