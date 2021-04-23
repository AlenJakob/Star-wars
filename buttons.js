console.log("from btns");

const btnsList = document.querySelector("#buttons");
const btns = ["films", "people", "planets", "species", "starships", "vehicles"];

function insetActionButtons(buttons) {
  console.log(buttons);
  const buttonsList = buttons.forEach((category) => {
    const li = document.createElement("li");
    li.className = "button";
    li.setAttribute("data-id", category);
    li.innerText = category;
    btnsList.appendChild(li);
    // There will be run method that will display the right category
    li.addEventListener("click", () =>
      console.log(`display right category, you clicked ${category} `)
    );
  });
}

insetActionButtons(btns);
