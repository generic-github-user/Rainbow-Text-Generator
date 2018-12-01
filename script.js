document.getElementById("input").innerText = loremIpsum;

function getInformation(){
	input = document.getElementById("input").value + "";
	output = document.getElementById("output");
	rainbowFrequency = document.getElementById("rainbow-frequency").value;
}

function generate(){
	getInformation();
	output.innerHTML = "";
	function addCharacter(character){
		output.innerHTML += "<span class='no-spacing' style='color:hsla("+i*rainbowFrequency+", 100%, 50%, 1);'>"+character+"</span>";
	}
	
	if(input == ""){
		alert("No text entered.");
	}
	else{
		for(i=0;i<input.length;i++){
			if(input.charAt(i) == " "){
				addCharacter("&nbsp;");
			}
			else{
				addCharacter(input.charAt(i));
			}
		}
	}
}



function clearFields(){
	getInformation();
	if(input == loremIpsum){
		document.getElementById("input").value = "";
	}
}
function resetFields(){
	getInformation();
	if(input == ""){
		document.getElementById("input").value = loremIpsum;
	}
}