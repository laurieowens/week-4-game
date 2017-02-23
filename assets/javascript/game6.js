var randomNumber = (Math.floor(Math.random() * (120-19+1)) + 19);
var crystalNumbers=[];
var counter=0;
var crystalPics=["assets/images/3be3b8fe3ea97c6f41dc316e8250ae31_view-full-size-gem-clipart_6000-5999.png","assets/images/148644adad23b9fcc5b2c152d27df08e_gem-clip-art-gem-clipart_256-256.png","assets/images/8751fac33c8a259835ae2be9ddc290c5_purple-gem-clipart-1-gem-clipart_285-298.png","assets/images/50daa71863747eaed0c6fc8e7c316c82_aquamarine-png-clipart-gems-clipart_4000-3170.png"];
$('#compRandomNumber').text(randomNumber);
for (var i=0; i <4; i++){
var crystalRandomNumber = Math.floor(Math.random() * (12-1)) + 1;
crystalNumbers.push(crystalRandomNumber);
var imageCrystal = $("<img>");
imageCrystal.addClass("crystal-image");
imageCrystal.attr("src",crystalPics[i]);
console.log(imageCrystal);
imageCrystal.attr("data-crystalvalue", crystalNumbers[i]);
console.log(crystalNumbers[i]);
console.log(imageCrystal.attr);
$("#crystals").append(imageCrystal);

}

$(".crystal-image").on("click",function() {
var crystalValue = ($(this).attr("data-crystalvalue"));
crystalValue = parseInt(crystalValue)
counter += crystalValue;

$('#runningTot').text(counter);
if (counter === randomNumber) {
alert("You win!");
}
else if (counter >= randomNumber) {
alert("You lose!!");
}
});