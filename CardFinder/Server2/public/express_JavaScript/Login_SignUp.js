/*function setFormMessage(formElement, type, message) 
{
    const messageEl = formElement.querySelector(".form_message");

    messageEl.textContent = message;
    messageEl.classList.remove("form_message-success", "form_message-error");
    messageEl.classList.add(`form_message-${type}`);
}

function setInputError(inputEl, message)
{
    inputEl.classList.add("form_input-error");
    inputEl.parentElement.querySelector(".form_input-error-message").textContent = message;
}

function clearInputError(inputEl) {
    inputEl.classList.remove
} */

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form_hidden");
        createAccountForm.classList.remove("form_hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form_hidden");
        createAccountForm.classList.add("form_hidden");
    });

    //loginForm.addEventListener("submit", e => {
        //e.preventDefault();

        // Perform AJAX/Fetch login but probably not using this....
        //setFormMessage(loginForm, "error", "Invalid username/password combination.")
    //});

});