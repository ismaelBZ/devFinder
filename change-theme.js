/* CSS VARIABLES */
const background = "--backgroundPrimary";
const card = "--card";
const font = "--fontPrimary";

/* IMG url */
const lightImgSrc = "./imgs/light-profile-circle.svg";
const darkImgSrc = "./imgs/dark-profile-circle.svg";

/* LIGHT THEME */
const lightBackground = "#F5F8FF";
const lightCard = "#FEFEFE";
const lightfont = "#141C2F";

/* DARKTHEME */
const darkBackground = "#141C2F";
const darkCard = "#1F2A48";
const darkfont = "#F6FAFD";

/* UTIL FUNCTIONs */
const changeColor = (property, value) => {
  document.body.style.setProperty(property, value);
};

const changeImg = (element, src) => {
  if (element.getAttribute("src").includes("avatars")) {
    return;
  } else {
    element.setAttribute("src", src);
  }
};

/* HTML ELEMENTS */
const profileIcon = document.querySelector(".profile-img");
const themeButton = document.getElementById("themeButton");
const themeIcon = document.getElementById("themeIcon");
const theme = document.getElementById("theme");

/* CHANGE THEME */

function changeTheme() {
  /* Light to Dark */
  if (theme.innerText === "LIGHT") {
    theme.innerText = "DARK";
    themeIcon.innerText = "nightlight";

    changeColor(background, lightBackground);
    changeColor(card, lightCard);
    changeColor(font, lightfont);

    console.log("Dark Theme");
    console.log(profileIcon);

    changeImg(profileIcon, lightImgSrc);
  } else if (theme.innerText === "DARK") {
    /* Dark to light */
    theme.innerText = "LIGHT";
    themeIcon.innerText = "light_mode";
    
    changeColor(background, darkBackground);
    changeColor(card, darkCard);
    changeColor(font, darkfont);
    
    changeImg(profileIcon, darkImgSrc);
  } else {
    return;
  }
}

themeButton.addEventListener("click", changeTheme);
