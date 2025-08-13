const menu = document.getElementById("NavButton");
const menuOverlay = document.getElementById("menuOverlay");
const menubutton = document.getElementById("menubutton");
const menubutton1 = document.getElementById("menubutton1");
const menubutton2 = document.getElementById("menubutton2");
const menubutton3 = document.getElementById("menubutton3");
const themeButton = document.getElementById("themeI");
const themeMbileButton = document.getElementById('MobileTheme');
const CloseOverLayMenue = document.getElementById('close');
let lightMode = true;
let DarkMode = false;

function SetLightMode() {
  document.documentElement.style.setProperty('--mainBodyColor','#f7f7f7bb');
  document.documentElement.style.setProperty('--mainColor','rgb(66, 66, 192)');
  document.documentElement.style.setProperty('--mainHeadColor','#ffffffd2');
  document.documentElement.style.setProperty('--TitlesColor','black');
  document.documentElement.style.setProperty('--ShadowColor','rgb(207, 207, 207)')
  document.documentElement.style.setProperty('--SerCardColor','white')
  document.documentElement.style.setProperty('--serCardIconColor','black')
  document.documentElement.style.setProperty('--projectCardTitleColor','white')
  document.documentElement.style.setProperty('--FooterSectionbackgroundColor','white')
  document.documentElement.style.setProperty('--emailScetionBackgroundColor','#f7f7f7c2')
  document.documentElement.style.setProperty('--contactAndEmailSEctiontitlesColor','rgb(94, 94, 94)')
  document.documentElement.style.setProperty('--mainColorHover','rgb(149, 149, 255)')
  document.documentElement.style.setProperty('--mobileBarColor','gray')
  document.documentElement.style.setProperty('--menuColoricon','rgb(216, 216, 216)')
  console.log('lightmode');
  DarkMode = false;
  lightMode = true;
}

function SetDarkMode() {
  document.documentElement.style.setProperty('--mainBodyColor','#1C1C1E');
  document.documentElement.style.setProperty('--mainColor','#4FD1C5');
  document.documentElement.style.setProperty('--mainHeadColor','black')
  document.documentElement.style.setProperty('--TitlesColor','white');
  document.documentElement.style.setProperty('--ShadowColor','rgb(37, 37, 37)')
  document.documentElement.style.setProperty('--SerCardColor','black')
  document.documentElement.style.setProperty('--serCardIconColor','#4FD1C5')
  document.documentElement.style.setProperty('--projectCardTitleColor','#4FD1C5')
  document.documentElement.style.setProperty('--FooterSectionbackgroundColor','#5b5b5b')
  document.documentElement.style.setProperty('--emailScetionBackgroundColor','#5b5b5b')
  document.documentElement.style.setProperty('--contactAndEmailSEctiontitlesColor','#cececeff')
  document.documentElement.style.setProperty('--mainColorHover','#4FD1C5')
  document.documentElement.style.setProperty('--mobileBarColor','black')
  document.documentElement.style.setProperty('--menuColoricon','#4FD1C5');


  console.log('Darktmode');
    lightMode = false;
  DarkMode = true;
}

function switchTheme() {
  if(lightMode === true){
    SetDarkMode();
  }
  else{
    SetLightMode();
  }
}



themeButton.addEventListener("click",switchTheme);
themeMbileButton.addEventListener("click",switchTheme)
menu.addEventListener("click", () => {
  menuOverlay.style.display = "flex";
});

menubutton.addEventListener("click", () => {
  menuOverlay.style.display = "none";
});
menubutton1.addEventListener("click", () => {
  menuOverlay.style.display = "none";
});
menubutton2.addEventListener("click", () => {
  menuOverlay.style.display = "none";
});
menubutton3.addEventListener("click", () => {
  menuOverlay.style.display = "none";
});

CloseOverLayMenue.addEventListener("click",() => {
  menuOverlay.style.display = "none";
})