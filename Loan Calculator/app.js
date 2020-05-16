// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Calculte Results
function calculateResults(e){
  console.log('Calculating...');
  // UI Variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculateInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculateInterest, calculatedPayments);
  const monthly = (principal * x * calculateInterest)/(x -1);

  //
  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2)
  } else {
    showError('Please check your numbers');
  }

  e.preventDefault();
}

// Show Error

function showError(error){
  // Create a Div 
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add Class 
  errorDiv.className = 'alert alert-danger';

  // Create  textnode and appen to div 
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above headinig
  card.insertBefore(errorDiv, heading);

}