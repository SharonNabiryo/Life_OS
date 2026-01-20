const inputHabit = document.getElementById("habit-input");
const habitList = document.getElementById("habit-list");

function addHabit() {
  if (inputHabit.value === "") {
    alert("Please write something first");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputHabit.value;
    habitList.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputHabit.value = "";
  saveData();
}
// event listener for the list container
habitList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// local storage
function saveData() {
  localStorage.setItem("data", habitList.innerHTML); // save where the list will be
}

function showTask() {
  habitList.innerHTML = localStorage.getItem("data");
}
showTask();
