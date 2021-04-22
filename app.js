import axios from "axios";
import "regenerator-runtime/runtime";
const END_POINT = "https://swapi.dev/api/starships/";

// function getCatsFactsList(url) {
//   return axios
//     .get(url)
//     .then((res) => {
//       return starships;
//     })
//     .catch((err) => console.log(err, "GotError"));
// }

// async function init() {
//   try {
//     const {data} = await getCatsFactsList(END_POINT);
//     console.log(list);
//     list.forEach(
//       (e) =>
//         (document.querySelector("#app").innerHTML += `
//     <li>${e.name}</li>
//     `)
//     );
//   } catch (err) {
//     console.log(err);
//   }
// }

// init();

const getStarshipList = async((url) => {
  try {
    const { data } = await.get(url);
    return data;
  } catch (err) {
    console.log(err, "ERROR");
  }
});


const renderContent = () =>{
  const list = await getStarshipList(END_POINT);
  document.querySelector("#app").innerHTML = list;
}

renderContent()