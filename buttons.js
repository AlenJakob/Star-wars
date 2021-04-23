console.log("from btns");

const btnsList = document.querySelector(".buttons");
const btns = ["films", "people", "planets", "species", "starships", "vehicles"];

function insetActionButtons(buttons) {
  const domElements = document.createElement("ul");
  for (let category of buttons) {
    const li = document.createElement("li");
    li.className = "button";
    li.setAttribute("data-id", category);
    li.innerText = category;
    // There will be run method that will display the right category
    li.addEventListener("click", () =>
      console.log(`display right category, you clicked ${category} `)
    );
    domElements.append(li)
  }
//   console.log("btn list", domElements);
  btnsList.appendChild(domElements);
}

insetActionButtons(btns);
