const full_name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const form = document.getElementById('form-c');
const successDialog = document.getElementById('success-dialog');

if (!form) {
    console.error('contact.js: form element #form-c not found');
} 
else {
    console.log('contact.js: form element #form-c found');
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous error messages
    clearErrors();

    let hasError = false;

    // Validate Name
    if (full_name.value.trim() === '') {
        setError(full_name, 'error-name', 'Name is required.');
        hasError = true;
    } else if (full_name.value.trim().length < 2) {
        setError(full_name, 'error-name', 'Name must be at least 2 characters long.');
        hasError = true;
    } else if (!/^[a-zA-Z\s]+$/.test(full_name.value.trim())) {
        setError(full_name, 'error-name', 'Name can only contain letters and spaces.');
        hasError = true;
    } else {
        full_name.style.borderColor = 'green';
    }

    // Validate Email
    if (email.value.trim() === '') {
        setError(email, 'error-email', 'Email is required.');
        hasError = true;
    } else if (!validateEmail(email.value.trim())) {
        setError(email, 'error-email', 'Please enter a valid email address.');
        hasError = true;
    } else {
        email.style.borderColor = 'green';
    }

    // Validate Subject
    if (subject.value.trim() === '') {
        setError(subject, 'error-subject', 'Subject is required.');
        hasError = true;
    } else {
        subject.style.borderColor = 'green';
    }

    // Validate Message
    if (message.value.trim() === '') {
        setError(message, 'error-message', 'Message is required.');
        hasError = true;
    }  else if (message.value.trim().length < 10) {
        setError(message, 'error-message', 'Message must be at least 10 characters long.');
        hasError = true;
    } else {
        message.style.borderColor = 'green';
    }

    if (!hasError) {
        // Form is valid, you can proceed with form submission (e.g., send data to server)
        successDialog.showModal();
        form.reset();

        setTimeout(() => {
            successDialog.close();
            window.location.reload();
        }, 3000);
    }
});

function setError(inputId, elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (message !== '') {
        errorElement.style.marginBottom = '1rem';
        inputId.style.marginBottom = '2rem';
    } else if (message === '') {
        inputId.style.marginBottom = '4rem';
    }
    inputId.style.borderColor = 'red';
    errorElement.textContent = message;
}

function clearErrors() {
    setError(full_name, 'error-name', '');
    setError(email, 'error-email', '');
    setError(subject, 'error-subject', '');
    setError(message, 'error-message', '');
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}