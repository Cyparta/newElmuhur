//https://api.mymemory.translated.net/get?q=Hello World!&langpair=en|it
const select = document.querySelectorAll("select");
const myselect = document.getElementById("my-select");
const valueneed = document.getElementById("valueneed");
const doneclick = document.getElementById("doneclick");
let documentspan = document.getElementsByTagName("span");
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("lang")) {
    setLanguage();
  }
});

const datafromi18n = document.querySelectorAll("[data-i18n]");

const mySelect = document.getElementsByName("country");

if (mySelect) {
  mySelect[0].addEventListener("change", function () {
    const selectedValue = mySelect.value;
    console.log("Selected option value: ", selectedValue);
  });
}
doneclick.addEventListener("click", () => {
  localStorage.setItem("lang", valueneed.value);
  setLanguage();
});
function setLanguage() {
  let valueoflanguage = localStorage.getItem("lang");
  datafromi18n.forEach((element) => {
    console.log(element.tagName);
    const translationKey = element.getAttribute("data-i18n");
    console.log(translations[valueoflanguage][translationKey]);
    if (valueoflanguage === "en") {
      element.innerText = translations[valueoflanguage][translationKey];
      element.style.textAlign = "left";
      if (element.tagName === "SPAN") {
        element.style.display = "inline-block";
      }
      if (element.textContent === "July") {
        element.style.textAlign = "center";
      }
      console.log(translations[valueoflanguage][translationKey]);
    } else {
      element.innerText = translations[valueoflanguage][translationKey];
      element.style.textAlign = "right";
      if (element.tagName === "SPAN" && element.textContent !== "يوليو") {
        element.style.display = "block";
      }
      if (element.textContent === "يوليو") {
        element.style.textAlign = "center";
      }
      console.log(translations[valueoflanguage][translationKey]);
    }
  });
}
