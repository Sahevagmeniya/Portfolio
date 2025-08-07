import * as fn from "./function.js";

fn.navAnimation();
fn.homePageAnimation();
fn.imgAnimation();
fn.getResume();
fn.sendMail();

let home = document.querySelector("#home");
let about = document.querySelector("#about");
let work = document.querySelector("#work");
let skills = document.querySelector("#skills");
let homePage = document.querySelector("#homePage");
let aboutPage = document.querySelector("#aboutPage");
let workPage = document.querySelector("#workPage");
let skillsPage = document.querySelector("#skillsPage");

about.addEventListener("click", () => {
  aboutPage.classList.replace("hidden", "flex");
  homePage.classList.replace("flex", "hidden");
  workPage.classList.replace("flex", "hidden");
  skillsPage.classList.replace("flex", "hidden");
  fn.aboutPageAnimation();
});

home.addEventListener("click", () => {
  homePage.classList.replace("hidden", "flex");
  aboutPage.classList.replace("flex", "hidden");
  workPage.classList.replace("flex", "hidden");
  skillsPage.classList.replace("flex", "hidden");
  fn.homePageAnimation();
  fn.imgAnimation();
  fn.getResume();
});

work.addEventListener("click", () => {
  workPage.classList.replace("hidden", "flex");
  aboutPage.classList.replace("flex", "hidden");
  homePage.classList.replace("flex", "hidden");
  skillsPage.classList.replace("flex", "hidden");
  fn.workPageAnimation();
});

skills.addEventListener("click", () => {
  skillsPage.classList.replace("hidden", "flex");
  workPage.classList.replace("flex", "hidden");
  aboutPage.classList.replace("flex", "hidden");
  homePage.classList.replace("flex", "hidden");
  fn.skillsPageAnimation();
});
