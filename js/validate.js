function validateForm(level) {
	// GETTING THE ANSWER FIELD AND VALIDATING
	var answer = document.getElementById("frmAnswer");

	switch(level) {
		case 1:
			if (answer.value == "something")
				return true;
			else {
				answer.value = "";
				return false;
			}
			break;
		case 2:
			if (answer.value == "happened")
				return true;
			else {
				answer.value = "";
				return false;
			}
			break;
		case 3:
			if (answer.value == "long time ago")
				return true;
			else {
				answer.value = "";
				return false;
			}
			break;
		case 4:
			if (answer.value == "i need your help")
				return true;
			else {
				answer.value = "";
				return false;
			}
		case 5:
			if (answer.value == "something happened long time ago i need your help")
				return true;
			else {
				answer.value = "";
				return false;
			}
	}
}
