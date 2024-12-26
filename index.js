const orderButtons = document.querySelectorAll('.order, .active-btn, .footer-btn');
const submitButton = document.querySelector('.submit');
const navLinks = document.querySelectorAll('.header-nav ul li a');
const checkbox = document.querySelector('#checkbox');
const inputs = document.querySelectorAll('input[type="text"]');

orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Order placed!');
    });
});

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const nameInput = document.querySelector('input[placeholder="Name"]').value;
    const emailInput = document.querySelector('input[placeholder="E-mail"]').value;
    if (nameInput && emailInput && checkbox.checked) {
        alert('Form submitted successfully!');
    } else {
        alert('Please fill in all fields and accept the privacy policy.');
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        alert(`Navigating to ${link.textContent}`);
    });
});

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        alert('Privacy policy accepted.');
    } else {
        alert('Please accept the privacy policy.');
    }
});

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.backgroundColor = '#f0f0f0';
    });

    input.addEventListener('blur', () => {
        input.style.backgroundColor = '#ffffff';
    });

    input.addEventListener('input', () => {
        if (input.value.trim() === '') {
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = 'green';
        }
    });
});
