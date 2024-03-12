const line = document.querySelector(".theLine");

const pointLine1 = document.querySelector("#pointLine1");
const pointLine2 = document.querySelector("#pointLine2");
const pointLine3 = document.querySelector("#pointLine3");
const pointLine4 = document.querySelector("#pointLine4");
const pointLine5 = document.querySelector("#pointLine5");
const pointLine6 = document.querySelector("#pointLine6");
const pointLine7 = document.querySelector("#pointLine7");
const pointLine8 = document.querySelector("#pointLine8");
const sectionBoxDescription1 = document.querySelector(
  "#sectionBoxDescription1"
);
const sectionBoxDescription2 = document.querySelector(
  "#sectionBoxDescription2"
);
const sectionBoxDescription3 = document.querySelector(
  "#sectionBoxDescription3"
);
const sectionBoxDescription4 = document.querySelector(
  "#sectionBoxDescription4"
);
const sectionBoxDescription5 = document.querySelector(
  "#sectionBoxDescription5"
);
const sectionBoxDescription6 = document.querySelector(
  "#sectionBoxDescription6"
);
const sectionBoxDescription7 = document.querySelector(
  "#sectionBoxDescription7"
);
const sectionBoxDescription8 = document.querySelector(
  "#sectionBoxDescription8"
);
const thePoint1 = document.querySelector("#thePoint1");
const thePoint2 = document.querySelector("#thePoint2");
const thePoint3 = document.querySelector("#thePoint3");
const thePoint4 = document.querySelector("#thePoint4");
const thePoint5 = document.querySelector("#thePoint5");
const thePoint6 = document.querySelector("#thePoint6");
const thePoint7 = document.querySelector("#thePoint7");
const thePoint8 = document.querySelector("#thePoint8");

const sec3TitleBox = document.querySelector("#sec3TitleBox");

const btnLinkContacts = document.querySelectorAll("#btnLinkContacts");
const btnLinkCalculator = document.querySelector("#btnLinkCalculator");
const btnLinkCars = document.querySelector("#btnLinkCars");

document.addEventListener("scroll", () => {
  line_height();
  pointLineAnim();
});

// function line_height() {
//   if (scrollY > 1100) {
//     line.style = "height: " + (scrollY - 1549) + "px;";
//   } else {
//     line.height = 0;
//   }
// }

function line_height() {
  let point8Top = pointLine8.getBoundingClientRect().top;
  let lineTop = line.getBoundingClientRect().top;
  let lineBottom = line.getBoundingClientRect().bottom;
  let lineHeight = lineBottom - lineTop;
  let maxLineHeight = point8Top - lineTop;

  if (scrollY > 1100) {
    if (lineHeight < maxLineHeight) {
      line.style.height = scrollY - 1549 + "px";
      if (lineHeight >= maxLineHeight) {
        line.style.height = maxLineHeight + "px";
      }
    }
  } else {
    line.style.height = 0;
  }
}

function pointLineAnim() {
  let theLinePoss = line.getBoundingClientRect().bottom;
  let line1Poss = pointLine1.getBoundingClientRect().top;
  let line2Poss = pointLine2.getBoundingClientRect().top;
  let line3Poss = pointLine3.getBoundingClientRect().top;
  let line4Poss = pointLine4.getBoundingClientRect().top;
  let line5Poss = pointLine5.getBoundingClientRect().top;
  let line6Poss = pointLine6.getBoundingClientRect().top;
  let line7Poss = pointLine7.getBoundingClientRect().top;
  let line8Poss = pointLine8.getBoundingClientRect().top;

  // POINT 1
  if (theLinePoss >= line1Poss) {
    pointLine1.style = "width: 90%;";
    sectionBoxDescription1.classList.add("active1");
    thePoint1.classList.add("active");
  }

  if (theLinePoss < line1Poss) {
    pointLine1.style = "width: 0%;";
    sectionBoxDescription1.classList.remove("active1");
    thePoint1.classList.remove("active");
  }

  // POINT 2
  if (theLinePoss >= line2Poss) {
    pointLine2.style = "width: 90%;";
    sectionBoxDescription2.classList.add("active2");
    thePoint2.classList.add("active");
  }

  if (theLinePoss < line2Poss) {
    pointLine2.style = "width: 0%;";
    sectionBoxDescription2.classList.remove("active2");
    thePoint2.classList.remove("active");
  }

  // POINT 3
  if (theLinePoss >= line3Poss) {
    pointLine3.style = "width: 90%;";
    sectionBoxDescription3.classList.add("active3");
    thePoint3.classList.add("active");
  }
  if (theLinePoss < line3Poss) {
    pointLine3.style = "width: 0%;";
    sectionBoxDescription3.classList.remove("active3");
    thePoint3.classList.remove("active");
  }

  // POINT 4
  if (theLinePoss >= line4Poss) {
    pointLine4.style = "width: 90%;";
    sectionBoxDescription4.classList.add("active4");
    thePoint4.classList.add("active");
  }
  if (theLinePoss < line4Poss) {
    pointLine4.style = "width: 0%;";
    sectionBoxDescription4.classList.remove("active4");
    thePoint4.classList.remove("active");
  }

  // POINT 5
  if (theLinePoss >= line5Poss) {
    pointLine5.style = "width: 90%;";
    sectionBoxDescription5.classList.add("active5");
    thePoint5.classList.add("active");
  }
  if (theLinePoss < line5Poss) {
    pointLine5.style = "width: 0%;";
    sectionBoxDescription5.classList.remove("active5");
    thePoint5.classList.remove("active");
  }

  // POINT 6
  if (theLinePoss >= line6Poss) {
    pointLine6.style = "width: 90%;";
    sectionBoxDescription6.classList.add("active6");
    thePoint6.classList.add("active");
  }
  if (theLinePoss < line6Poss) {
    pointLine6.style = "width: 0%;";
    sectionBoxDescription6.classList.remove("active6");
    thePoint6.classList.remove("active");
  }

  // POINT 7
  if (theLinePoss >= line7Poss) {
    pointLine7.style = "width: 90%;";
    sectionBoxDescription7.classList.add("active7");
    thePoint7.classList.add("active");
  }
  if (theLinePoss < line7Poss) {
    pointLine7.style = "width: 0%;";
    sectionBoxDescription7.classList.remove("active7");
    thePoint7.classList.remove("active");
  }
  // POINT 8
  if (theLinePoss >= line8Poss) {
    sectionBoxDescription8.classList.add("active8");
    thePoint8.classList.add("active");
    pointLine8.style = "width: 90%;";
  }
  if (theLinePoss < line8Poss) {
    sectionBoxDescription8.classList.remove("active8");
    thePoint8.classList.remove("active");
    pointLine8.style = "width: 0%;";
  }
}

// BTN and LINKS
for (let i = 0; i < btnLinkContacts.length; i++) {
  btnLinkContacts[i].onclick = () => {
    location.href = "html/contacts.html";
  };
}

btnLinkCalculator.onclick = () => {
  location.href = "html/price.html";
};

btnLinkCars.onclick = () => {
  location.href = "html/carsForSale.html";
};
