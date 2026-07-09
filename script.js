const form = document.getElementById("contactForm");
if (form) {

    form.addEventListener("submit", function(e){
        e.preventDefault();
        alert(
            "Thank you for contacting Ayman Abdullahi Tahir. Your message has been received successfully."
        );
        form.reset();
    });

}

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        if(targetSection){
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active-link");
        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active-link");
        }
    });
});

const cards = document.querySelectorAll(
    ".card, .project-card"
);

function revealCards(){
    cards.forEach(card => {
        const cardTop =
            card.getBoundingClientRect().top;
        const windowHeight =
            window.innerHeight;
        if(cardTop < windowHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
}

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition =
        "all 0.8s ease";
});
window.addEventListener("scroll", revealCards);
revealCards();

window.addEventListener("load", () => {
    console.log(
        "Welcome to Ayman Abdullahi Tahir's Portfolio Website"
    );

});

const profileImage =
    document.querySelector(".hero-image img");
if(profileImage){
    profileImage.addEventListener("mouseenter", () => {
        profileImage.style.transform =
            "scale(1.05)";
        profileImage.style.transition =
            "0.4s";
    });
    profileImage.addEventListener("mouseleave", () => {
        profileImage.style.transform =
            "scale(1)";
    });
}
