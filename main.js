const output = document.getElementById("output");
const times = document.getElementById("times");
const btn = document.getElementById("button");

var i = 0;
var txt = "";
var speed = 50;

var isStillTyping = false;
var prevText = btn.innerText;

function typeWriter() 
{
	if (i < txt.length) 
	{
		btn.innerText = "Speed up typing...";
		isStillTyping = true;
		output.innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
	else
	{
		btn.innerText = prevText;
		isStillTyping = false;
	}
}

function SendRequestAI() 
{
	if (!isStillTyping)
	{
		if (!isNullOrWhitespace(output.innerHTML)) { output.innerHTML += "<br><br>"; }
		
		// output.innerText += "You " + getRandArr(verbs) + " " + numberToWord(getRandInt(0, 100)) + " " + getRandArr(objects) + ".\n";
		txt += "I'm " + getRandArr(verbs) + "ance that " + getRandArr(nouns) + " is " + getRandArr(verbs) + "ing. "
		+ "I've got a " + getRandArr(verbs) + "ance. "
		+ "I hope they don't "+getRandArr(verbs)+"ed the " + getRandArr(objects) + ". "
		+ "I'm like " + getRandArr(objects) + " which are "+ getRandArr(verbs) +"ing the "+getRandArr(objects)+". "
		+ numberToWord(getRandInt(1, 10)) + "th day I had "+getRandArr(verbs)+"ed to "+getRandArr(objects)+" and "+getRandArr(verbs)+"ed "+getRandArr(objects)+"ly. "
		+ "I'm number "+ numberToWord(getRandInt(1, 10)) +" because I'm "+ getRandArr(verbs) +"ing the "+getRandArr(objects)+". ";
	}
	
	typeWriter();
}