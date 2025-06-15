

function buttonAppear() {
    let textt = document.querySelector("#variable-box").value // this is the variable
    if (textt == "true"){ //checks if the variable is true
        document.querySelector("#variable-button").style.visibility = "visible" //makes it visible
    }
}


function multiply(x,y) {
    alert(x*y);
}
var lights = "on"
function toggleLight() {
    if (lights == "on") { //if light is already on
        lights = "off"
        document.querySelector("body").style.filter = "brightness(0.3)" //make everything dim
        document.querySelector("body").style.backgroundColor = "#353535" 

    } else { //otherwise
        lights = "on"
        document.querySelector("body").style.filter = "brightness(1)" //make t normal
        document.querySelector("body").style.backgroundColor = "#fafafa"
    }
}

function changeMessage() {
  const msg = document.getElementById('message'); //take the message
  msg.textContent = prompt("Enter your message"); //turn it into something else
}

const chores = [];

function addChore() {
  const input = document.getElementById("choreInput"); //these convert html obkects to variables
  const chore = input.value.trim();
  if (chore) {
    chores.push(chore); //add their values to list
    updateList();  //refresh list
    input.value = "";   //clear input box
  }
}

function updateList() {
  const list = document.getElementById("choreList");  //take the list
  list.innerHTML = ""; //delete all
  chores.forEach((chore, index) => { //rewrite it using newly updated list
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${chore}`; // adds 1. 2. 3. etc in front of list
    list.appendChild(li);
  });
}


function toggleFancy() {
  const body = document.body;
  const button = document.getElementById("fancyToggle");

  body.classList.toggle("fancy-mode"); //makes everything be labled fancy fofr css to kick in 

  if (body.classList.contains("fancy-mode")) {// button togglre
    button.textContent = "make it boring";
  } else {
    button.textContent = "make it fancy";
  }
}