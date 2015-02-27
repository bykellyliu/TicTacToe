
var turn = 1;
var imgType = "o";
var x = "x";
var o = "o";
function allowDrop(ev) {
	ev.preventDefault();
}
function drag(ev) {
	ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev) {

// change color when the image changes
	var data = ev.dataTransfer.getData("Text");
	
	if(data == "drag1" ||  data == "drag2" || data == "drag3" ||data == "drag4"){
		ev.target.style.backgroundColor = "#FFFF66" ;
		imgType = "x";
	}	
	else{
		ev.target.style.backgroundColor = "#FF99FF";
		imgType = "o";
	}
	
//take turns
	ev.target.appendChild(document.getElementById(data));
	ev.preventDefault();	
	document.getElementById(data).setAttribute('draggable',false);
	ev.target.setAttribute("class", imgType);
    ev.target.removeAttribute("ondragover");
	

	
	if (turn == 1) {
		document.getElementById("drag1").setAttribute('draggable',true);
	} 
	else if (turn == 2){
		document.getElementById("drag6").setAttribute('draggable',true);
	} 
	else if (turn == 3){
		document.getElementById("drag2").setAttribute('draggable',true);
	} 
	else if (turn == 4){
		document.getElementById("drag7").setAttribute('draggable',true);
	}
	else if (turn == 5){
		document.getElementById("drag3").setAttribute('draggable',true);
	} 
	else if (turn == 6){
		document.getElementById("drag8").setAttribute('draggable',true);
	} 
	else if (turn == 7){
		document.getElementById("drag4").setAttribute('draggable',true);
	} 
	else if (turn == 8){
		document.getElementById("drag9").setAttribute('draggable',true);
	}	
	turn++;
	console.log(turn);
	
// winning condition
	if(document.getElementById("div1").className == x && document.getElementById("div2").className == x && document.getElementById("div3").className == x){
	   alert("pig wins");
	} 
	else if 
	(document.getElementById("div1").className == o && document.getElementById("div2").className == o && document.getElementById("div3").className == o){
	alert("goat wins");
	} 
	
	else if (document.getElementById("div4").className == x && document.getElementById("div5").className == x && document.getElementById("div6").className == x){
	   alert("pig wins");
	} 
	else if (document.getElementById("div4").className == o && document.getElementById("div5").className == o && document.getElementById("div6").className == o){
	   alert("goat wins");
	}
	
	else if (document.getElementById("div7").className == x && document.getElementById("div8").className == x && document.getElementById("div9").className == x){
	   alert("pig wins");
	} 
	else if (document.getElementById("div7").className == o && document.getElementById("div8").className == o && document.getElementById("div9").className == o){
	   alert("goat wins");
	}
	
	else if (document.getElementById("div1").className == x && document.getElementById("div4").className == x && document.getElementById("div7").className == x){
	   alert("pig wins");
	} 
	else if (document.getElementById("div1").className == o && document.getElementById("div4").className == o && document.getElementById("div7").className == o){
	   alert("goat wins");
	} 
	
	else if (document.getElementById("div2").className == x && document.getElementById("div5").className == x && document.getElementById("div8").className == x){
	   alert("pig wins");
	} 
	else if (document.getElementById("div2").className == o && document.getElementById("div5").className == o && document.getElementById("div8").className == o){
	   alert("goat wins");
	} 
	
	else if (document.getElementById("div3").className == x && document.getElementById("div6").className == x && document.getElementById("div9").className == x){
	   alert("pig wins");
	}
	else if (document.getElementById("div3").className == o && document.getElementById("div6").className == o && document.getElementById("div9").className == o){
	   alert("goat wins");
	} 
    
	else if (document.getElementById("div1").className == x && document.getElementById("div5").className == x && document.getElementById("div9").className == x){
	   alert("pig wins");
	} 
	else if (document.getElementById("div1").className == o && document.getElementById("div5").className == o && document.getElementById("div9").className == o){
	   alert("goat wins");
	}
	
	else if (document.getElementById("div3").className == x && document.getElementById("div5").className == x && document.getElementById("div7").className == x){
	   alert("pig wins");
	} 
	else if (document.getElementById("div3").className == o && document.getElementById("div5").className == o && document.getElementById("div7").className == o){
	   alert("goat wins");
	}

}	
//else
//		{alert("DRAW")};