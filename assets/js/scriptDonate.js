var steps = 1;
var stepsCompleted = document.getElementById("steps-completed");
var formPrompt = document.getElementById("form-prompt");
var inputField = document.getElementById("input");
var arrow = document.getElementById("arrow");

var prompts = ["Input Your Email Address", "Input Your PPE Type", "Describe Your Donation", "Rough Monetary Estimate of Donation", "Submitted!"]

arrow.onclick = function() {
	steps += 1;
	if (steps <= 5) {
		stepsCompleted.innerHTML = steps.toString() + "/ 5";
		formPrompt.innerHTML = prompts[steps - 1];
		inputField.value = "";
	} else {
		formPrompt.innerHTML = "Already Submitted, expect an email soon :)"
		stepsCompleted.innerHTML =  "5 / 5";
		inputField.value = "";
	}
	
}

function openMenu() {
	document.getElementById("overall-menu").style.width = "100%";
}

function closeMenu() {
  document.getElementById("overall-menu").style.width = "0";
}
