const anyart = document.querySelector(".anyartBox");
const footerLogo = document.querySelector(".f_logo");

const telegram = document.querySelector("#f_icon1");
const whatsup = document.querySelector("#f_icon2");
const viber = document.querySelector("#f_icon3");
const facebook = document.querySelector("#f_icon5");
const instagram = document.querySelector("#f_icon6");
const youtube = document.querySelector("#f_icon4");

anyart.onclick = () => {
  location.href = "http://anyart.space";
  // alert("Hello!")
};

footerLogo.onclick = () => {
  location.href = "/index.html";
};

telegram.onclick = () => {
  window.open("https://t.me/vikmotors");
};

whatsup.onclick = () => {
  window.open("https://wa.me/4915758064259");
};
viber.onclick = () => {
  window.open("https://viber.click./4915758064259");
};
facebook.onclick = () => {
  window.open(
    "https://m.facebook.com/story.php?story_fbid=pfbid0tVPHj3ddoVFHJ7SsSst9wpgFD2VQrA8xP772WtawJ6psWYgxTrUms7VeR6VvyNdal&id=100089877923046"
  );
};
instagram.onclick = () => {
  window.open(
    "https://www.instagram.com/vikmotors.de/"
  );
};
