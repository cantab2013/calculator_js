window.onload = function (event) {

	var arr = document.querySelectorAll(".button"), display = "";
	var updateDisplay = function (n) {
		document.getElementById("result_display").innerHTML = n;	
	}
	
	updateDisplay("0");

	for (var i = 0; i < arr.length; i++) {
		if ((i !== 12) && (i !== 14)) {
			arr[i].onclick = function (event) {
				display += this.innerHTML;
				updateDisplay(display);
			}
		}
		//CLR case
		else if (i === 12) {					
			arr[i].onclick = function (event) {
				display = "";		
				updateDisplay("0");
			}
		}
		//ENT case
		else {
			arr[i].onclick = function (event) {
				display = "";		
				updateDisplay("YAY");
				//Place holder "YAY" per instructor specification
			}
		}
	}
}