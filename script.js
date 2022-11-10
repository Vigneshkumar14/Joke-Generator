let jokeText = document.getElementById("joke");
let jokebtn = document.getElementById("jokeBtn");
let url = "https://api.chucknorris.io/jokes/random?category=food";

let getJ = () => {
  let j = fetch(url)
    .then((data) => data.json())
    .then((jokeText.textContent = "Joke loading...."))
    .then((jokes) => {
      jokeText.textContent = jokes.value;
    });
  console.log(j);
};
getJ();

jokebtn.addEventListener("click", getJ);
