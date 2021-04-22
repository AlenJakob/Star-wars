import axios from "axios";
import "regenerator-runtime/runtime";
const END_POINT = "https://swapi.dev/api/starships/";

function addToDom(list, dom) {
  for (const e of list) {
    dom.innerHTML += `<li>${e.name}</li>`;
  }
}
const getStarshipList = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data.results;
  } catch (err) {
    return err;
  }
};

const renderContent = async () => {
  const list = await getStarshipList(END_POINT);
  addToDom(list, document.querySelector("#app"));
};

renderContent();
