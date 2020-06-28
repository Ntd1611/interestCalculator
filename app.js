// Query Selector
const interest = document.querySelector("#interest");
const amount = document.querySelector("#amount");
const years = document.querySelector("#years");
const monthlyPayment = document.querySelector("#monthly-payment");
const totalPayment = document.querySelector("#total-payment");
const totalInterest = document.querySelector("#total-interest");

// Listen for submit
document
  .querySelector("#interest-form")
  .addEventListener("submit", calculateResult);

// Functions
function calculateResult(e) {
  e.preventDefault();

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
  } else {
    showError("Please check your number");
  }

  function showError(error) {
    // Create a div
    const errorDiv = document.createElement("div");
    // Get elements
    const card = document.querySelector(".card");
    const heading = document.querySelector(".heading");
    // Add class
    errorDiv.className = "alert alert-danger";
    // Create text note and append to div
    errorDiv.appendChild(document.createTextNode(error));
    // Insert error above heading
    card.insertBefore(errorDiv, heading);
    // Clear error after 2s
    setTimeout(clearError, 2000);
  }

  function clearError() {
    document.querySelector(".alert").remove();
  }
}
