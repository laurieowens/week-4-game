	var randomNumber = (Math.floor(Math.random() * (120-19+1)) + 19);
console.log(randomNumber);
	var crystalNumbers=[];
	document.getElementById('compRandomNumber').innerHTML = randomNumber;
	

for (var i=0; i <4; i++){
	var crystalRandomNumber = Math.floor(Math.random() * (12-1)) + 1;
		crystalNumbers.push(crystalRandomNumber);
		//alert("Crystal Random Number is  "+crystalNumbers);
	}






		//document.write("<p>" + randomNumber+ "</p>");
		/*<script src="assets/javascript/game.js">*/
		var counter =0;
			$(".crystal-image").on("click",function() {
				counter+=1
				//var crystalRandomNumber = Math.floor(Math.random() * (12-1)) + 1;
				//crystalNumbers.push(crystalRandomNumber);


		
			alert("Crystal Random Number is  "+crystalNumbers);

	});	
	


