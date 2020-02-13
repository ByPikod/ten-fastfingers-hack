console.clear();
var input = $("#inputfield");
var ev = $.Event("keyup");
ev.which = 32;
var interval;
var speed = 100;

var span = document.createElement("SPAN");
document.body.appendChild(span);
var hackEnabled = false;
span.style.position = "absolute";
span.style.top = 0;
span.style.width = "100%";
span.style.textAlign = "center";

var div = document.createElement("DIV");
span.appendChild(div);
div.style.borderBottomLeftRadius = "4px";
div.style.borderBottomRightRadius = "4px";
div.style.background = "#fa6b64";
div.style.padding = "10px";
div.style.transition = "all 0.1s ease-in";
div.style.userSelect = "none";
div.style.display = "inline-block";

var btn = document.createElement("BUTTON");
btn.style.transition = "all 0.1s ease-in";
btn.style.padding = "5px";
btn.style.borderRadius = "4px";
btn.style.paddingLeft = "20px";
btn.style.paddingRight = "20px";

btn.style.borderStyle = null;
btn.style.fontFamily = "verdana";
btn.style.cursor = "pointer";
btn.style.background = "#dbdbdb";
btn.onclick = function(){
	if(hackEnabled == false){
		enableHack();
	}else{
		disableHack();
	}
}
btn.onmouseover = function(){
	btn.style.background = "#bfbfbf";
	btn.style.transform = "scale(1.05)";
}
btn.onmouseleave = function(){

	btn.style.background = "#dbdbdb";

	btn.style.transform = "scale(1)";
}

div.appendChild(btn);
btn.innerHTML = "Enable";

var secenek = document.createElement("SELECT");
secenek.style.display = "block";
secenek.innerHTML = "<option value='3'>Fast</option><option value='2'>Medium</option><option value='1'>Slow</option>";
secenek.style.padding = "4px";
secenek.style.width = "100%";
secenek.style.marginTop = "5px";
secenek.style.fontFamily = "verdana";

div.appendChild(secenek);

var link = document.createElement("A");
link.href = "https://github.com/ByPikod";
link.style.display = "block";
link.style.padding = "5px";
link.innerHTML = "Programmed by Pikod";
link.style.color = "#22488a";
link.target = "_blank";
link.onmouseover = function(){
	link.style.color = "#3498d1";
	link.style.textDecoration = "underline";
}
link.onmouseleave = function(){

	link.style.color = "#22488a";
	link.style.textDecoration = "none";
}

link.style.textDecoration = "none";
link.style.fontFamily = "arial";
link.style.fontSize = 15;
div.appendChild(link);

function disableHack(){
	console.log("%cHack disabled!", 'color: red');
	clearInterval(interval);
	hackEnabled = false;
	div.style.background = "#fa6b64";
	btn.innerHTML = "Disabled";
}
var time;
function enableHack(){
	console.log("%cHack enabled!", 'color: green');
	time = 0;
	setSpeed();
	interval = setInterval(function(){
		time = time+speed;
		var kelime = $(".highlight").html();
		if(kelime == null) {
			alert("Finished in "+(time/1000)+" seconds.");
			console.log("%cHack finished in "+(time/1000)+" seconds.", 'color: blue');
			disableHack();
			return;
		}
		input.val(kelime);
		input.trigger(ev);
	}, speed);;
	hackEnabled = true;
	div.style.background = "#91ed8c";
	btn.innerHTML = "Enabled";
}

function setSpeed(){
	if(secenek.value == "3"){
		speed = 50;
	}
	if(secenek.value == "2"){
		speed = 100;
	}
	if(secenek.value == "1"){
		speed = 200;
	}
}
