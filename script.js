const form = document.querySelector("#habit-form");
const input = document.querySelector("#habit-input");
const list = document.querySelector("#habit-list");
const button = document.querySelector("#form-btn");

let habits = [];

// Create an eventListener on the form with submit.
// get the user input, remove unnecessary spaces
// if user adds nothing
// else add user input to the list
// empty entry

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let habitName = input.value.trim(); // get the user input, remove unnecessary spaces

  if (habitName === "") return; // if user adds nothing

  habits.push({
    name: habitName,
    completed: false,
  }); // else add user input to the list
  input.value = ""; // empty entry

  renderHabits();
  console.log(habits);
});

function renderHabits() {
  list.innerHTML = "";

  // for every habit,
  // create an li element for it
  // then add the innerHTML for that li element; insert a checklist and a habit text
  // Then add it to the array
  // we are looping through so we can display the array as a list

  for (let i = 0; i < habits.length; i++) {
    const habit = habits[i];
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" 
    ${habit.completed ? "checked" : ""}> ${habit.name}`;
    list.appendChild(li);
  }
}
