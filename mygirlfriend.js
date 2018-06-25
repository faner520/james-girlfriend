window.onload=function() {
	alert("James Sucks");
	document.getElementsByTagName("form")[0].onsubmit=respond;
};

function respond() {
	var input = document.getElementsByTagName("input")[1].value;
	
	if (input == "How are you doing?") {
		alert("I am good");
	}
	else {
		alert("wtf");
	}
	
	return false;
}
