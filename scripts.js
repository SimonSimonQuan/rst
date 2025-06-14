

function buttonAppear() {
    let textt = document.querySelector("#variable-box").value // this is the variable
    if (textt == "true"){ //checks if the variable is true
        document.querySelector("#variable-button").style.visibility = "visible"
    }
}


function multiply(x,y) {
    alert(x*y);
}
var lights = "on"
function toggleLight() {
    if (lights == "on") {
        lights = "off"
        document.querySelector("body").style.filter = "brightness(0.3)"
        document.querySelector("body").style.backgroundColor = "#353535"

    } else {
        lights = "on"
        document.querySelector("body").style.filter = "brightness(1)"
        document.querySelector("body").style.backgroundColor = "#fafafa"
    }
}

function changeMessage() {
  const msg = document.getElementById('message');
  msg.textContent = prompt("Enter your message");
}

const chores = [];

function addChore() {
  const input = document.getElementById("choreInput");
  const chore = input.value.trim();
  if (chore) {
    chores.push(chore);
    updateList();
    input.value = "";
  }
}

function updateList() {
  const list = document.getElementById("choreList");
  list.innerHTML = "";
  chores.forEach((chore, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${chore}`;
    list.appendChild(li);
  });
}