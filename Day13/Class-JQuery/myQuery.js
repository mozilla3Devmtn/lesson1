$(document).ready(function(){

	
	var favLanguages =[
	{name: 'JavaScript', score: 5},
	{name: 'html', score: 6},
	{name: 'python', score: 3}
	]

	var favList = $("<ul></ul>")
	$.each(favLanguages, function(i, val){
		var li = $("<li>" + val.name + "</li>")
		favList.append(li)
	})

	$(".myList").append(favList) //select existing DOM element myList and inject favList at end//

	$('.container button').hide(); //.fadeOut .fade .slideUp .slideDown

	$('.container input').on('keyup', function(){
		var count = $('.container input').val().length;
		if (count > 0){
			$('.container button').show();
		}else{
			$('.container button').hide();
		}
	});

	$('.container button').on('click', function(){
	var el = $('.myList ul li:first').clone(true); //li: first last even odd .clone(false) is default//
	el.html($('.container input').val());
	$('.myList ul').prepend(el); //or .append(el)//
	})


});