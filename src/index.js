function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "I cried for you today as I have done many times",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
