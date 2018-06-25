window.onload=function() {
	alert("James Sucks");
	document.getElementsByTagName("form")[0].onsubmit=respond;
};

function respond() {
	var input = document.getElementsByTagName("input")[1].value;
	
	if (input == "How are you doing?") {
		var num = Math.random() * 100;
		num = num / 1;
		if (num < 20) {
			alert("I'm okay");
		}
		else if (num < 60) {
			alert("I'm great!");
		}
		else if (num < 80) {
			alert("I'm alright");
		}
		else if (num < 90) {
			alert("I'm not feeling that great");
		}
		else {
			alert("I'm okay, thanks for asking!");
		}
	}
	else {
		alert("wtf");
	}
	
	return false;
}
