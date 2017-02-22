	var randomNumber = Math.floor(Math.random() * (120-19+1)) + 19;
	console.log(randomNumber)

		//randomNumber.addClass("compPick");
		//randomNumber=$("#compPick")
	$(document).ready(function(){
		//$("randomNumber").addClass("compPick");
		document.getElementById('compRandomNumber').innerHTML = randomNumber;
		//document.getElementById('runningTot').innerHTML = 24;
		console.log(compRandomNumber)
});
		//document.write("<p>" + randomNumber+ "</p>");
		/*<script src="assets/javascript/game.js">*/
		var counter =0;
			$(".crystal-image").on("click",function() {
				counter+=1
				var crystalRandomNumber = Math.floor(Math.random() * (12-1)) + 1;
		
			alert("Crystal Random Number is  "+crystalRandomNumber);
	});	
	

  



  
   