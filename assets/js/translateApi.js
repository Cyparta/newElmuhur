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
      document.dir = "ltr";
      // console.log($("product-active").prevObject[0]);

      // $(".gallery-active").slick({
      //   dir: "ltr",
      //   // $(".gallery-active").slick({
      //   dots: false,
      //   infinite: true,
      //   autoplay: false,
      //   autoplaySpeed: 5000,
      //   arrows: true,
      //   speed: 1000,
      //   slidesToShow: 1,
      //   slidesToScroll: 1,
      //   variableWidth: true,
      //   prevArrow: $(".gallery-prev"),
      //   nextArrow: $(".gallery-next"),
      //   // });
      // });
      // console.log();

      // document.querySelector(".slick-list").style.direction = "ltr";
      // console.log($(".slick-slider"));
      // console.log($(".slick-list"));
    } else {
      element.innerText = translations[valueoflanguage][translationKey];
      element.style.textAlign = "right";
      if (element.tagName === "SPAN" && element.textContent !== "يوليو") {
        element.style.display = "block";
      }
      if (element.textContent === "يوليو") {
        element.style.textAlign = "center";
      }
      document.dir = "rtl";
      // $("product-active").style.dir = "rtl";
      // console.log(());
      // $(".gallery-active").slick({
      //   dir: "rtl",
      // });
      // $(".gallery-active").slick({
      //   dir: "rtl",
      //   // $(".gallery-active").slick({
      //   dots: false,
      //   infinite: true,
      //   autoplay: false,
      //   autoplaySpeed: 5000,
      //   arrows: true,
      //   speed: 1000,
      //   slidesToShow: 1,
      //   slidesToScroll: 1,
      //   variableWidth: true,
      //   prevArrow: $(".gallery-prev"),
      //   nextArrow: $(".gallery-next"),
      //   // });
      // });
      // console.log($(".gallery-active"));
      // document.querySelector(".slick-list").style.direction = "ltr";
      // console.log($(".slick-slider").css("direction", "rtl"));
      // console.log(translations[valueoflanguage][translationKey]);
    }
  });
}
