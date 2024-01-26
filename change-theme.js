/* CSS VARIABLES */
const background = "--backgroundPrimary";
const card = "--card";
const font = "--fontPrimary";

/* LIGHT THEME */
const lightBackground = "#F5F8FF";
const lightCard = "#FEFEFE";
const lightfont = "#141C2F";

/* DARKTHEME */
const darkBackground = "#141C2F";
const darkCard = "#1F2A48";
const darkfont = "#F6FAFD";

/* UTIL FUNCTION */
const changeColor = (property, value) => {
  document.body.style.setProperty(property, value);
};

/* HTML ELEMENTS */
const profileIcon = document.querySelector('.profile-img');
const themeButton = document.getElementById("theme-button");
const theme = document.getElementById("theme");

/* CHANGE THEME */

function changeTheme() {
  if (theme.innerText === "LIGHT") {
    theme.innerText = "DARK";
    changeColor(background, lightBackground);
    changeColor(card, lightCard);
    changeColor(font, lightfont);
    profileIcon.setAttribute("src","./imgs/light-profile-circle.svg");
  } else if (theme.innerText === "DARK") {
    theme.innerText = "LIGHT";
    changeColor(background, darkBackground);
    changeColor(card, darkCard);
    changeColor(font, darkfont);
    profileIcon.setAttribute("src","./imgs/dark-profile-circle.svg");
  } else {
    return;
  }
}

themeButton.addEventListener("click", changeTheme);
