const menu = document.getElementById("NavButton");
const menuOverlay = document.getElementById("menuOverlay");
const menubutton = document.getElementById("menubutton");
const menubutton1 = document.getElementById("menubutton1");
const menubutton2 = document.getElementById("menubutton2");
const menubutton3 = document.getElementById("menubutton3");







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