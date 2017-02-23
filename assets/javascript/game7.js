	var randomNumber = (Math.floor(Math.random() * (120-19+1)) + 19);	
	var crystalNumbers=[];
	$('#compRandomNumber').text(randomNumber);

	for (var i=0; i <4; i++){
		var crystalRandomNumber = Math.floor(Math.random() * (12-1)) + 1;
		crystalNumbers.push(crystalRandomNumber);
	}
		var counter =0;
			$(".crystal-image").on("click",function() {
				counter+=1
			
			alert("Crystal Random Number is  "+crystalNumbers);

	});	
	


