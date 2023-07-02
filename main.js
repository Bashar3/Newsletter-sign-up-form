let mainBtn = document.querySelectorAll(".main-btn");
let msgBtn = document.querySelector(".msg-btn");
let message = document.querySelector(".message");
let card = document.querySelector(".card");
let form = document.querySelector("form");
let p = document.querySelector(".changeable-content");
let emailInput = document.querySelector("input[type='text']");
errorMsg = document.querySelector(".error-msg");

// prevent reloading
function handleForm(event) {
    event.preventDefault();
}
form.addEventListener("submit", handleForm);

let valid = false;

mainBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        // check if email value is valid
        if (
            emailInput.value.match(
                /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
            ) &&
            emailInput.value !== ""
        ) {
            valid = true;
        } else {
            valid = false;
            emailInput.value = "";
        }

        if (valid === true) {
            // toggle
            card.classList.toggle("disabled");
            message.classList.toggle("disabled");
            // change p content
            p.innerHTML = emailInput.value;
        } else {
            // show an error message
            errorMsg.style.visibility = "visible";
        }
    });
});

msgBtn.onclick = function () {
    emailInput.value = "";
};
