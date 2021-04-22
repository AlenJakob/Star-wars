import axios from "axios";
import "regenerator-runtime/runtime";
const END_POINT = "https://swapi.dev/api/starships/";
const starships = [];
function getCatsFactsList(url) {
  return axios
    .get(url)
    .then((res) => {
      starships.push(...res.data.results);
      return starships;
    })
    .catch((err) => console.log(err, "GotError"));
}

async function init() {
  try {
    const list = await getCatsFactsList(END_POINT);
    console.log(list);
    list.forEach(
      (e) =>
        (document.querySelector("#app").innerHTML += `
    <li>${e.name}</li>
    `)
    );
  } catch (err) {
    console.log(err);
  }
}

init();
