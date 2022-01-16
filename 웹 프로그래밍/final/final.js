$(document).ready(
	function(){
	$("#container img").css("width",420);
	$("#container img").css("height",200);
	$("#container img").hide();
	$("#container img:first").show();
	var container = $("#container");
	var timer;
	function startTimer() {
		timer = setInterval(switching, 3000);
	}

	function switching() {
		var imgs = container.find("img");
		var first = imgs.eq(0);
		var second = imgs.eq(1);
		var third = imgs.eq(2);

		first.appendTo(container).fadeOut(2000);
		second.fadeIn();
		first.hide();
	}

	function stopTimer() {
		clearInterval(timer);
	}

	container.hover(stopTimer,startTimer);
	startTimer();

	$("#left").css("cursor","pointer");
	$("#right").css("cursor","pointer");

	$("#right").on("click",function(){
		var imgs = container.find("img");
		var first = imgs.eq(0);
		var second = imgs.eq(1);
		var third = imgs.eq(2);

		first.appendTo(container).hide();
		second.show();
	})

	$("#left").on("click",function(){
		var imgs = container.find("img");
		var first = imgs.eq(0);
		var second = imgs.eq(1);
		var third = imgs.eq(2);

		first.appendTo(container).hide();
		second.appendTo(container).hide();
		third.show();
	})	



})
