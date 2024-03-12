const toggle1 = document.querySelector("#toggle1");
const toggle2 = document.querySelector("#toggle2");
const toggle3 = document.querySelector("#toggle3");

const circle1 = document.querySelector("#circle1");
const circle2 = document.querySelector("#circle2");
const circle3 = document.querySelector("#circle3");

const btnCalculate = document.querySelector("#btnCalculate");

const inputPrice = document.querySelector("#inputPrice");
const inputKm = document.querySelector("#inputKm");

const servicePriceAmount = document.querySelector("#servicePriceAmount");
const roadToTheCarAmount = document.querySelector("#roadToTheCarAmount");
const registrationOurCompanyAmount = document.querySelector(
  "#registrationOurCompanyAmount"
);
const carRegistrationAmount = document.querySelector("#carRegistrationAmount");
const getCarAmount = document.querySelector("#getCarAmount");
const cashBackAmount = document.querySelector("#cashBackAmount");
const totalPriceAmount = document.querySelector("#totalPriceAmount");

const btnLinkContacts = document.querySelector("#btnLinkContacts");

let carPrice = 0;
let km = 0;

let servicePrice = 0;
let roadToTheCar = 0;
let registrationOurCompany = 0;
let carRegistration = 0;
let getCar = 0;
let cashBack = 0;

let chekToggle1 = false;
let chekToggle2 = false;
let chekToggle3 = false;

function toggle1On() {
  toggle1.classList.add("active");
  circle1.classList.add("active");
  chekToggle1 = true;
  toggle1.onclick = () => {
    toggle1Off();
  };
}

function toggle1Off() {
  toggle1.classList.remove("active");
  circle1.classList.remove("active");
  chekToggle1 = false;
  toggle1.onclick = () => {
    toggle1On();
  };
}

function toggle2On() {
  toggle2.classList.add("active");
  circle2.classList.add("active");
  chekToggle2 = true;
  toggle2.onclick = () => {
    toggle2Off();
  };
}

function toggle2Off() {
  toggle2.classList.remove("active");
  circle2.classList.remove("active");
  chekToggle2 = false;
  toggle2.onclick = () => {
    toggle2On();
  };
}

function toggle3On() {
  toggle3.classList.add("active");
  circle3.classList.add("active");
  chekToggle3 = true;
  toggle3.onclick = () => {
    toggle3Off();
  };
}

function toggle3Off() {
  toggle3.classList.remove("active");
  circle3.classList.remove("active");
  chekToggle3 = false;
  toggle3.onclick = () => {
    toggle3On();
  };
}

toggle1.onclick = () => {
  toggle1On();
};
toggle2.onclick = () => {
  toggle2On();
};
toggle3.onclick = () => {
  toggle3On();
};

btnCalculate.onclick = () => {
  carPrice = inputPrice.value;
  km = inputKm.value;
  servicePrice = carPrice >= 50000 ? 400 : 300;
  roadToTheCar = km * 1.2;
  registrationOurCompany =
    chekToggle1 === true ? Math.round(carPrice * 0.03) : 0;
  carRegistration = chekToggle2 === true ? 350 : 0;
  getCar = chekToggle3 === true ? 200 + km * 0.8 : 0;
  cashBack = carPrice * 0.1597;

  servicePriceAmount.innerHTML = "€ " + Math.round(servicePrice);
  roadToTheCarAmount.innerHTML = "€ " + Math.round(roadToTheCar);
  registrationOurCompanyAmount.innerHTML =
    "€ " + Math.round(registrationOurCompany);
  carRegistrationAmount.innerHTML = "€ " + Math.round(carRegistration);
  getCarAmount.innerHTML = "€ " + Math.round(getCar);
  cashBackAmount.innerHTML = "€ " + Math.round(cashBack);

  let total =
    Math.round(carPrice) +
    Math.round(servicePrice) +
    Math.round(roadToTheCar) +
    Math.round(registrationOurCompany) +
    Math.round(carRegistration) +
    Math.round(getCar) -
    Math.round(cashBack);
  totalPriceAmount.innerHTML = "€ " + total;
};

// BTN and LINKS
btnLinkContacts.onclick = () => {
  location.href = "./contacts.html";
};
