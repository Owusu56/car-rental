const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen?"ri-close-line":"ri-menu-line")
})

navLinks.addEventListener("click", (e)=>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
})

const scrollRevealOption = {
    distance: "50px",
    origin: "button",
    duration: 1000,
};

ScrollReveal().reveal(".headerimage img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".headercontent h1", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".headercontent p", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".headerlinks", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".stepscard", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".serviceimage img", {
    ...scrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(".servicecontent .sectionsubheader", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".servicecontent .sectionsubheader", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".servicelist li", {
    ...scrollRevealOption,
    delay: 1500,
    interval: 500,
});

ScrollReveal().reveal(".experiencecard", {
    duration: 1000,
    interval: 500,
});


ScrollReveal().reveal(".downloadimage img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".downloadcontent .sectionheader", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".downloadcontent p", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".downloadlinks", {
    ...scrollRevealOption,
    delay: 1500,
});