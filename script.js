// ================================
// Typing Animation
// ================================

const text = [
    "CIS Student",
    "Frontend Developer",
    "Web Designer",
    "JavaScript Learner"
];

let index = 0;
let char = 0;
let typing = true;

const typingElement = document.getElementById("typing");

function typeEffect() {

    if (!typingElement) return;

    if (typing) {

        if (char < text[index].length) {

            typingElement.innerHTML += text[index].charAt(char);

            char++;

            setTimeout(typeEffect, 100);

        } else {

            typing = false;

            setTimeout(typeEffect, 1500);

        }

    } else {

        if (char > 0) {

            typingElement.innerHTML = text[index].substring(0, char - 1);

            char--;

            setTimeout(typeEffect, 50);

        } else {

            typing = true;

            index++;

            if (index >= text.length) {

                index = 0;

            }

            setTimeout(typeEffect, 300);

        }

    }

}

typeEffect();


// ================================
// Back To Top Button
// ================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


// ================================
// Skill Progress Animation
// ================================

window.addEventListener("load", () => {

    document.querySelector(".html-bar").style.width = "90%";

    document.querySelector(".css-bar").style.width = "85%";

    document.querySelector(".bootstrap-bar").style.width = "80%";

    document.querySelector(".javascript-bar").style.width = "70%";

    document.querySelector(".c-bar").style.width = "75%";

    document.querySelector(".python-bar").style.width = "65%";

});


// ================================
// Contact Form Validation
// ================================

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function(e){

        e.preventDefault();

        let name = document.getElementById("name").value.trim();

        let email = document.getElementById("email").value.trim();

        let message = document.getElementById("message").value.trim();

        if(name==="" || email==="" || message===""){

            alert("Please fill in all fields.");

            return;

        }

        alert("Message sent successfully!");

        form.reset();

    });

}