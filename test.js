function onover()
{
    document.getElementById("onmouseover").style.color = "#180781";
}
function onout()
{
    document.getElementById("onmouseover").style.color = "black";
}
function ab(){
let speech = new SpeechSynthesisUtterance("YouVe Clicked the mic button");
speechSynthesis.speak(speech);
speechSynthesis.stop();
}
function abc(){
let speech = new SpeechSynthesisUtterance("Address Card");
speechSynthesis.speak(speech);
speechSynthesis.stop();
}

