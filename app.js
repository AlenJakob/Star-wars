import axios from "axios";
import "regenerator-runtime/runtime";
const starships = "https://swapi.dev/api/planets/";
const people = "https://swapi.dev/api/people/";
const api = "https://swapi.dev/api/";

function addToDom(list, dom) {
  for (const e of list) {
    dom.innerHTML += `<li>${e.name}</li>`;
  }
}
const getList = async (url) => {
  try {
    const { data } = await axios.get(url);
    console.log(data.results);
    // console.log(  data.results ? true : false);

    return data.results;
  } catch (err) {
    return err;
  }
};

const renderContent = async (url) => {
  const list = await getList(url);
  // console.log("lista", list);

  // addToDom(list, document.querySelector("#app"));
};

// renderContent(END_POINT);
// renderContent(api);
renderContent(starships);
