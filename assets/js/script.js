console.log("connected"); // checking connection

/** This function changes the maxHeight when 
the button is clicked. Basically, in my CSS 
I start the maxHeight at 0, but when the 
button in clicked, I change the maxHeight so 
it is equivalent to the total scrollHeight so
it therefore expands as a FAQ should. */
function whenPlusClicked(faqAnswer) {
	var totalHeight = faqAnswer.scrollHeight;
	if (faqAnswer.style.maxHeight == 0) {
		faqAnswer.style.maxHeight = totalHeight + "px";
	} else {
		faqAnswer.style.maxHeight = null;
	}
}

/** Getting an array of all my buttons in the faq to loop through
and call the whenPlusClicked when each one is clicked. */
var totalQuestions = document.getElementsByClassName("total-button");
var questionNumber = 0; 

while (questionNumber < totalQuestions.length) {
	totalQuestions[questionNumber].onclick = function() {
		whenPlusClicked(this.nextElementSibling);
	}
	questionNumber += 1;
}

function openMenu() {
	document.getElementById("overall-menu").style.width = "100%";
}

function closeMenu() {
  document.getElementById("overall-menu").style.width = "0";
}


