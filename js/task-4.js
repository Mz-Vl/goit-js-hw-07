const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();
    
    const formFields = loginForm.elements;
    const emailField = formFields.email.value.trim();
    const passwordField = formFields.password.value.trim();

    if (emailField === "" || passwordField === "") {
        alert("All form fields must be filled in");
        return;
    }

    const formData = {
        email: emailField,
        password: passwordField,
    };

    console.log(formData);
    loginForm.reset();
    }
