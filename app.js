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

  console.log(principal);
  console.log(calculatedInterest);
  console.log(calculatedPayments);
  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
  } else {
    console.log("Check your number");
  }
}
