const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
// After this we will give a click to add button 
function addTask(){
    if(inputBox.value===''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        /*  here what will happen is - that an element named li will be created ,in which that text will be stored which is written in (a constant) named inputBox.
          And that li element will get apppend in the container named listcontainer, as it should be displayed under the list container.*/
          let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        /* here we want to add a cross icon beside the list items that we are adding so that if we want to remove that task from the list as it get completed,it get removed by clicking on that cross icon.
        "/u00d7 is the code to represent cross icon :)" */
    }
    inputBox.value='';
    saveData();
}
// to activate that cross icon we will write some javascript
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
// above function is used to save the data in local storage and when we will reload the site it'll show the previous stored data.
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();
// above function is used to display the saved data when we will reload the webpage.