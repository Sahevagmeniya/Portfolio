export let navAnimation = () => {
  let navTl = gsap.timeline();

  navTl.from("nav h1", {
    x: -90,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "back.out(1.7)",
  });

  navTl.from("nav a", {
    x: 90,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "sine.out",
  });
};

export let homePageAnimation = () => {
  let homePageTl = gsap.timeline();

  homePageTl.from(".introAnimation", {
    y: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });

  homePageTl.from("#intro button", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });

  homePageTl.from("#contact", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });
};

export let imgAnimation = () => {
  gsap.from("#imgcontainer img", {
    duration: 2.5,
    delay: 1,
    opacity: 0,
    scale: 0.2,
    ease: "elastic.out(1,0.3)",
  });
};

export let aboutPageAnimation = () => {
  let aboutTl = gsap.timeline();

  aboutTl.from("#aboutPage h2", {
    y: -50,
    opacity: 0,
    duration: 0.8,
  });

  aboutTl.from("#aboutData p", {
    y: -25,
    opacity: 0,
    duration: 1.5,
    stagger: 0.2,
  });
};

export let projectPageAnimation = () => {
  let projectTl = gsap.timeline();

  projectTl.from("#project-1 h2", {
    y: -50,
    opacity: 0,
    duration: 0.5,
  });
  projectTl.from("#project-1 h4", {
    x: -25,
    opacity: 0,
    duration: 0.3,
  });
  projectTl.from("#project-1 p", {
    y: -25,
    opacity: 0,
    duration: 0.5,
  });
  projectTl.from("#project-1 hr", {
    y: -25,
    opacity: 0,
    duration: 0.5,
  });
  projectTl.from("#project-1 li", {
    x: -25,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
  });
};

export let project2Animation = () => {
  let project2Tl = gsap.timeline();
  project2Tl.from("#project-2 h2", {
    y: -50,
    opacity: 0,
    duration: 0.5,
  });

  project2Tl.from("#project-2 p", {
    y: -25,
    opacity: 0,
    duration: 0.5,
  });
  project2Tl.from("#project-2 h4", {
    x: -25,
    opacity: 0,
    duration: 0.5,
  });
  project2Tl.from("#project-2 hr", {
    y: -25,
    opacity: 0,
    duration: 0.5,
  });
  project2Tl.from("#project-2 li", {
    x: -25,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
  });
};

export let skillsPageAnimation = () => {
  let skillsTl = gsap.timeline();

  skillsTl.from("#skillsPage h2", {
    y: -50,
    opacity: 0,
    duration: 0.8,
  });

  skillsTl.from(".skill-card", {
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
  });
};

export let getResume = () => {
  let button = document.querySelector("#intro button");

  button.addEventListener("click", () => {
    window.open("/resume/CV@sdmeniya.pdf", "_blank");
  });
};

export let sendMail = () => {
  let mail = document.querySelector("#email");

  mail.addEventListener("click", () => {
    window.location.href = "mailto:sdmeniya@gmail.com";
  });
};
