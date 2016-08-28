// The user has to click on the image and make 1 choice out of 6
// Smoothscroll to next topic
// Once complete, user clicks submit
// Take the information and calculate the answer


$(function() {

	//smooth scroll begins
	$('a').smoothScroll();

	$("#startButton").on("click", function(){
		$.smoothScroll({
			scrollTarget: "#drinks"
		});
	});

	$("input[name='drinks']").on("click", function(){
			$.smoothScroll({
				scrollTarget: "#clothing"
			});
		});

	$("input[name='clothing']").on("click", function(){
		$.smoothScroll({
			scrollTarget: "#music"
		});
	});

	$("input[name='music']").on("click", function(){
		$.smoothScroll({
			scrollTarget: "#transportation"
		});
	});

	$("input[name='transportation']").on("click", function(){
		$.smoothScroll({
			scrollTarget: "#style"
		});
	});

	$("input[name='style']").on("click", function(){
		$.smoothScroll({
			scrollTarget: "#submitButton"
		});
	});

	$("#submitButton").on("click", function(){
		$.smoothScroll({
			scrollTarget: ".results"
		});
	});
	// smooth scroll ends

	// when submit button is pressed, results appear
	$("form").on("submit", function(event) {
		event.preventDefault();
		var resultMessage = "";
		var resultPhoto = "";
		var resultParagraph = "";
		var userChoices = $('input[type=radio]:checked');
		// var points = $('input[type=radio]:checked').data('points');

		var totalScore = 0;
		for(var i = 0; i < userChoices.length; i = i + 1) {
			totalScore = totalScore + Number($(userChoices[i]).val()) ;
		}

		if(totalScore <= 17) {
			resultMessage = "you missed the hip train";
			resultPhoto = "notHipster.jpg";
			resultParagraph = "Well, well, well.  Like the great Phil Collins song, Against All Odds you're not a Hipster.  How did this happen?  Where do you live? Where are you from?  You're not the least bit interested in being Cool?  How dare you?  No tight jeans?  HOW DARE YOU?  No trendy music subculture of stinky beards and thrift shop smelling jacket vests?  How dare you? In reality be proud of yourself for not following along.  You have strong character and a great vision of who you are.  Even though you may wear white socks with Birkenstocks, being a Hipster is definitely not for you!";
		} else if(totalScore <= 29) {
			resultMessage = "You're not as hip as you thought";
			resultPhoto = "midHipster.jpg";
			resultParagraph = "You don't even know it yet, but you're one pair of black rimmed glasses away from being a full blown Hipster! Yes, you shop at the Gap or American Eagle, so you can't be a Hipster right?!  In theory you're correct but these stores ride the wave of the Hipster counter culture and the clothes you buy from these establishments are as Hipster as ever.  You're actually riding the same wave you just don't have a surfboard. Stay strong. Stay vigilant. Maybe being a Hipster isn't that bad after all.";
	
		} else {
			resultMessage = "you are a definitive hipster!";
			resultPhoto = "hipsterWinner2.png";
			resultParagraph = "You value the counter culture.  You are progressive with your politics. You have a deep appreciation for indie music and tighter than tight jeans.  You love American Apparel and are not at odds with their advertising.  You wish you lived in New York but anywhere town, wherever will do.  You reject mainstream consumerism by buying all of your shit at second hand thrift stores.  Your androgynous trendy barber cut or Walmart shag allows you to seamlessly fit into most social demographics. At the end of the day however…You're still just, a Hipster!";
		}

		var finalAnswer = $('<h3>').text(resultMessage);
		$("div.results").append(finalAnswer);

		var finalText = $('<p>').text(resultParagraph);
		$("div.results").append(finalText);

		var finalPhoto = $('<img src="images/' + resultPhoto + '">');
		$("div.results").append(finalPhoto);

		//shows retake quiz button
		$("button.reset").removeClass("hidden");
	
	}); // closes form sumbit

	// Refreshes page when button is clicked
	$(".reset").on("click", function(){
		location.reload();
		$("body").scrollTop(0);
	});

}); // closes document ready
