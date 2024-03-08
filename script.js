const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask(){
    if(inputbox.value === ''){
        alert("Add a task please!");
    }
    else{
        // To create one html element with tagname li 
        let li = document.createElement("li");

        // Adding text from the input field into the html li
        li.innerHTML = inputbox.value;

        //display li in the list container
        listcontainer.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";

}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classlist.toggle("checked");

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }

},false);