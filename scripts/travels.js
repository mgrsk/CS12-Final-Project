$(document).ready(function(){

	var imageLinks = ["../img/zion.png", "../img/space_needle.png", "../img/seattle.png", 
					"../img/chinatown.jpg", "../img/santa_barbara.png", "../img/big_ben.png", "../img/stone_henge.png"];
	var captions = ["A creek in Zion National Park, UT", "The glass floor from the top of the Seattle Space Needle, WA",
					"A view of Seattle's skyline from a ferris wheel, WA", "San Francisco's Chinatown, CA",
					 "A fountain in a mission in Santa Barbara, CA", "Big Ben in London, England",
					 "Stonehenge in Wiltshire, England"];
	var currentPosition = 0;
	var maxPosition = imageLinks.length - 1;

	$("#left-button").click(scrollLeft);

	$("#right-button").click(scrollRight);


	function scrollLeft() {
		currentPosition -= 1;
		if (currentPosition < 0) {
			currentPosition = maxPosition;
		}
		changeImage();

	}

	function scrollRight() {
		currentPosition += 1;
		if (currentPosition > maxPosition) {
			currentPosition = 0;
		}
		changeImage();
	}

	function changeImage() {
		$("#travel-image").attr("src", imageLinks[currentPosition]);
		$("#travel-image").attr("alt", captions[currentPosition]);
		$("#travel-caption").text(captions[currentPosition]);
	}

});