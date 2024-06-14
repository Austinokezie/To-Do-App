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

        // adding a delete button icon  
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();

}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classlist.toggle("checked");
        saveData();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false);

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML =localStorage.getItem("data");
}
showTask();