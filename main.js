//Header Button Click Function
const menuBtn = document.querySelector(".hamburger-menu");

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

//Accordions
//First
let details1Open = false;
function iconChanger() {
  const matches = document.getElementsByClassName("summary")[0];
  if (!details1Open) {
    matches.classList.remove("fa-plus");
    matches.classList.add("fa-minus");
    details1Open = true;
  } else {
    matches.classList.remove("fa-minus");
    matches.classList.add("fa-plus");
    details1Open = false;
  }
}

//Second
let details2Open = false;
function iconChanger1() {
  const matches = document.getElementsByClassName("summary")[1];
  if (!details2Open) {
    matches.classList.remove("fa-plus");
    matches.classList.add("fa-minus");
    details2Open = true;
  } else {
    matches.classList.remove("fa-minus");
    matches.classList.add("fa-plus");
    details2Open = false;
  }
}

//Third
let details3Open = false;
function iconChanger2() {
  const matches = document.getElementsByClassName("summary")[2];
  if (!details3Open) {
    matches.classList.remove("fa-plus");
    matches.classList.add("fa-minus");
    details3Open = true;
  } else {
    matches.classList.remove("fa-minus");
    matches.classList.add("fa-plus");
    details3Open = false;
  }
}

//Fourth
let details4Open = false;
function iconChanger3() {
  const matches = document.getElementsByClassName("summary")[3];
  if (!details4Open) {
    matches.classList.remove("fa-plus");
    matches.classList.add("fa-minus");
    details4Open = true;
  } else {
    matches.classList.remove("fa-minus");
    matches.classList.add("fa-plus");
    details4Open = false;
  }
}

//Fifth
let details5Open = false;
function iconChanger4() {
  const matches = document.getElementsByClassName("summary")[4];
  if (!details5Open) {
    matches.classList.remove("fa-plus");
    matches.classList.add("fa-minus");
    details5Open = true;
  } else {
    matches.classList.remove("fa-minus");
    matches.classList.add("fa-plus");
    details5Open = false;
  }
}

//Sixth
let details6Open = false;
function iconChanger5() {
  const matches = document.getElementsByClassName("summary")[5];
  if (!details6Open) {
    matches.classList.remove("fa-plus");
    matches.classList.add("fa-minus");
    details6Open = true;
  } else {
    matches.classList.remove("fa-minus");
    matches.classList.add("fa-plus");
    details6Open = false;
  }
}

//Seventh
let details7Open = false;
function iconChanger6() {
  const matches = document.getElementsByClassName("summary")[6];
  if (!details7Open) {
    matches.classList.remove("fa-plus");
    matches.classList.add("fa-minus");
    details7Open = true;
  } else {
    matches.classList.remove("fa-minus");
    matches.classList.add("fa-plus");
    details7Open = false;
  }
}

//Eighth
let details8Open = false;
function iconChanger7() {
  const matches = document.getElementsByClassName("summary")[7];
  if (!details8Open) {
    matches.classList.remove("fa-plus");
    matches.classList.add("fa-minus");
    details8Open = true;
  } else {
    matches.classList.remove("fa-minus");
    matches.classList.add("fa-plus");
    details8Open = false;
  }
}

//Nineth
let details9Open = false;
function iconChanger8() {
  const matches = document.getElementsByClassName("summary")[8];
  if (!details9Open) {
    matches.classList.remove("fa-plus");
    matches.classList.add("fa-minus");
    details9Open = true;
  } else {
    matches.classList.remove("fa-minus");
    matches.classList.add("fa-plus");
    details9Open = false;
  }
}

//Tenth
let details10Open = false;
function iconChanger9() {
  const matches = document.getElementsByClassName("summary")[9];
  if (!details10Open) {
    matches.classList.remove("fa-plus");
    matches.classList.add("fa-minus");
    details10Open = true;
  } else {
    matches.classList.remove("fa-minus");
    matches.classList.add("fa-plus");
    details10Open = false;
  }
}

/*
const summary = document.querySelector(".summary");

let detailsOpen = false;
summary.onClick("click", () => {
  if (!detailsOpen) {
    summary.classList.remove("fa-plus");
    summary.classList.add("fa-minus");
    detailsOpen = true;
  } else {
    summary.classList.remove("fa-minus");
    summary.classList.add("fa-plus");
    detailsOpen = false;
  }
});
*/
