// Sample destination data (can be fetched from a server in a real application)
const destinations = [
    { name: "Paris", description: "The City of Light", image: "paris.jpg" },
    { name: "Tokyo", description: "The Capital of Japan", image: "tokyo.jpg" },
    { name: "Rome", description: "The Eternal City", image: "rome.jpg" }
];

// Function to display destinations
function displayDestinations() {
    const destinationList = document.getElementById("destination-list");

    destinations.forEach(destination => {
        const destinationCard = document.createElement("div");
        destinationCard.classList.add("destination-card");

        destinationCard.innerHTML = `
            <img src="images/${destination.image}" alt="${destination.name}">
            <h3>${destination.name}</h3>
            <p>${destination.description}</p>
        `;

        destinationList.appendChild(destinationCard);
    });
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    // Retrieve form data
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Sample action (can be replaced with sending data to a server in a real application)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Clear form fields
    event.target.reset();
}

// Event listeners
document.addEventListener("DOMContentLoaded", displayDestinations);
document.getElementById("contact-form").addEventListener("submit", handleFormSubmit);
