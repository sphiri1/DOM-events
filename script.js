var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
	return input.value.length;
}

function addDeleteButton(){

}

function createListElement(){
	var div = document.createElement("div");
    var li = document.createElement("li");
    var button = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	button.appendChild(document.createTextNode("Delete"));
	button.setAttribute("Id", "Delete");
	div.setAttribute("class", "listitem-wrapper");
	div.appendChild(li);
	div.appendChild(button);
	ul.appendChild(div);
	input.value = "";
}

function addListAfterClick(){
	if(inputLength() > 0){
		createListElement();
	}	
}

function addListAfterKeypress(event){
	if(inputLength() > 0 && event.keyCode == 13){
		createListElement();
	}
}

function toggleAndRemove(element){
	var li = element.target;
	 if(li.tagName == "LI"){
	 	li.classList.toggle("done")
	 } else if (li.tagName == "BUTTON"){
	 	li.parentNode.remove();
	 }
	
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleAndRemove);