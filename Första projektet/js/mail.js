function test(){
alert("testing");
}

function answer(svar){
alert(svar);
}
function calc(number1, number2){
return +number1 + +number2;
}

function calcbefore(){
var returned = 0;
var s1 = 0;
var s2 = 0;
var s3 = 0;
s1 = document.getElementById('textruta1').value
s2 = document.getElementById('textruta2').value
s3 = document.getElementById('textruta3').value
returned = calc(s1, s2);
if (returned == s3){
alert ("rätt svar");
}else{
	alert("fel svar");
}
}
