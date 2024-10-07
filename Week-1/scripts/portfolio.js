const navLinks = document.querySelectorAll(".links");

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    })
});

const inquiryPage = document.querySelector('#inquiry-section');
const submitButton = document.querySelector('#submit-question');

submitButton.addEventListener('click', function(e) {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const phoneNumber = document.querySelector("#phone").value;
    const email = document.querySelector("#email").value;
    const question = document.querySelector("#question").value;

    inquiryPage.id = 'inquiry-message-section';
    inquiryPage.innerHTML = `
        <p id="submit-message">Thank you for your inquiry! We will get back to you shortly.</p>
        <h4 id="your-details-title">Your Details:</h4>
        <div id="your-details">
            <p class="details-item"><span class="details-labels">Name: </span>${name}</p>
            <p class="details-item"><span class="details-labels">Phone Number: </span>${phoneNumber}</p>
            <p class="details-item"><span class="details-labels">Email: </span>${email}</p>
            <p class="details-item"><span class="details-labels">Question: </span>${question}</p>
        </div>
        `;
});