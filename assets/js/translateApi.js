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
  $("#valueneed").change(function () {
    localStorage.setItem("lang", $(this).val());
    setLanguage();
    window.location.reload();
  });
  console.log(
    $("[data-i18n='element'][data-i18n='vegetable'][data-i18n='fruit']")
  );
});

const datafromi18n = document.querySelectorAll("[data-i18n]");

function setLanguage() {
  let valueoflanguage = localStorage.getItem("lang");
  datafromi18n.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    if (valueoflanguage === "en") {
      $("#valueneed").val("en");
      element.innerText = translations[valueoflanguage][translationKey];
      element.style.textAlign = "left";
      if (element.tagName === "SPAN") {
        element.style.display = "inline-block";
      }
      if (element.textContent === "July") {
        element.style.textAlign = "center";
      }
      document.dir = "ltr";
      document.querySelector(".menu-icons .theme-btn").style.direction = "rtl";
      $(".content").css("textAlign", "left");
      $("h2").css("textAlign", "center");
      $(".theme-btn").css("direction", "ltr");
      $(".hidden-bar").css("right", "0px");
    } else {
      $("#valueneed").val("ar");
      element.innerText = translations[valueoflanguage][translationKey];
      element.style.textAlign = "right";
      if (element.tagName === "SPAN" && element.textContent !== "يوليو") {
        element.style.display = "block";
      }
      if (element.textContent === "يوليو") {
        element.style.textAlign = "center";
      }
      document.dir = "rtl";
      document.querySelector(".menu-icons .theme-btn").style.direction = "ltr";
      $("h2").css("textAlign", "center");
      $(".content").css("textAlign", "right");
      $(".theme-btn").css("direction", "rtl");
      $(".copyright-area .footer-menu li:last-child").css({
        "margin-right": "35px",
      });
      $(".hidden-bar").css("right", "calc(100% - 350px)");
    }
  });
}
