var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
	return input.value.length;
}

function addDeleteButton(){

}

function createListElement(){
	//create Element
    var li = document.createElement("li");
    var button = document.createElement("button");
	var span = document.createElement("span");

	//append to element
	li.appendChild(document.createTextNode(input.value));
	button.appendChild(document.createTextNode("done"));

	//set attributes
	li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center done")
	button.setAttribute("Id", "delete");
	button.setAttribute("class", "material-symbols-outlined")

	//append child to parent
	li.appendChild(button);
	ul.appendChild(li);
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
	var button = element.target;
	 if(button.tagName == "LI"){
	 	button.classList.toggle("done")
	 } else if (button.tagName == "BUTTON"){
	 	button.parentNode.remove();
	 }
	
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleAndRemove);