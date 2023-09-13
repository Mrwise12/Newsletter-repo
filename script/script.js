// Get the elements
const emailInput = document.getElementById("email");
const subscribeBtn = document.getElementById("subscribeBtn");
const message = document.getElementById("message");

// Function to handle email validation and redirection
function handleSubscription() {
  // Get the email value
  const email = emailInput.value;

  // Regular expression for email validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (emailPattern.test(email)) {
    // Valid email address
    message.classList.add("hidden");
    emailInput.classList.remove("invalid");

    // Redirect to the "thank-you.html" page with the email as a parameter
    window.location.href = `thanks.html?email=${encodeURIComponent(email)}`;
  } else {
    // Invalid email address
    message.classList.remove("hidden");
    emailInput.classList.add("invalid");
  }
}

// Add an event listener to the "Subscribe" button
subscribeBtn.addEventListener("click", handleSubscription);

// Add an event listener to the email input for Enter key press
emailInput.addEventListener("keydown", function (event) {
  // Check if the Enter key (key code 13) is pressed
  if (event.keyCode === 13) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the email value
    const email = emailInput.value;

    // Check if the email is empty
    if (!email.trim()) {
      // Show the "invalid email" message
      message.classList.remove("hidden");
      emailInput.classList.add("invalid");
    } else {
      // Trigger the subscription function
      handleSubscription();
    }
  }
});

// Add an input event listener to hide the message when input changes
emailInput.addEventListener("input", function () {
  message.classList.add("hidden");
  emailInput.classList.remove("invalid");
});
