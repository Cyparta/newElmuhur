//https://api.mymemory.translated.net/get?q=Hello World!&langpair=en|it
const select = document.querySelectorAll("select");
const myselect = document.getElementById("my-select");
const valueneed = document.getElementById("valueneed");
const doneclick = document.getElementById("doneclick");

// const values=document.("values");
// document.querySelector("[data-i18n]");
const datafromi18n = document.querySelectorAll("[data-i18n]");
console.log(document.querySelectorAll("[data-i18n]"));
// select.forEach((element, id) => {
//   console.log(id);
//   for (const country_code in countries) {
//     // console.log(countries[country_code]);
//     let option = `<option value="${country_code}">${countries[country_code]}</option>`;
//     element.insertAdjacentHTML("beforeend", option);
//   }
// });
function setLanguage(language) {}
const mySelect = document.getElementsByName("country");
console.log(mySelect);
console.log(countries);
console.log(translations);
if (mySelect) {
  mySelect[0].addEventListener("change", function () {
    const selectedValue = mySelect.value;
    console.log("Selected option value: ", selectedValue);
  });
}
doneclick.addEventListener("click", (e) => {
  console.log(valueneed.value);
  console.log(e.target.value);
  datafromi18n.forEach((element) => {
    // if (element.innerText) {
    console.log(element.innerText);
    const translationKey = element.getAttribute("data-i18n");
    console.log(translations[valueneed.value][translationKey]);

    if (valueneed.value === "en") {
      element.innerText = translations[valueneed.value][translationKey];
      element.style.textAlign = "left";
      console.log(translations[valueneed.value][translationKey]);
      // let apiurl = `https://api.mymemory.translated.net/get?q=${element.innerText}&langpair=ar|en`;
      // fetch(apiurl)
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log(data.responseData.translatedText);
      //     // element.innerText=data.responseData.translatedText;
      //   });
    } else {
      element.innerText = translations[valueneed.value][translationKey];
      element.style.textAlign = "right";

      console.log(translations[valueneed.value][translationKey]);

      // let apiurl = `https://api.mymemory.translated.net/get?q=${element.innerText}&langpair=ar|${valueneed.value}`;
      // let apiurl = `https://api.mymemory.translated.net/get?q=${element.innerText}&langpair=en|ar`;
      // fetch(apiurl)
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log(data);
      //     // element.innerText=data.responseData.translatedText;
      //   });
    }
    // console.log(element.innerText);
  });
});

// myselect.addEventListener("click", (e) => {
//   // if (e.target.value) {
//   // }
// });
// console.log(valueneed.options[valueneed.selectedIndex]);
// console.log(mySelect);
// mySelect.addEventListener("change", function () {
//   const selectedValue = mySelect.value;
//   console.log("Selected option value: ", selectedValue);
// });
