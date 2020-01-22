// Listen for submit
document.getElementById('loan-form').addEventListener('submit', (event) => {
  // Hide results
  document.getElementById('results').style.display = 'none';

  // Show loading gif
  document.getElementById('loading').style.display = 'block';

  window.setTimeout(calculateResults, 2000);

  event.preventDefault();
});

// Calculate Results
function calculateResults () {
  console.log('Calculating');
  // UI variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

    document.getElementById('loading').style.display = 'none';
    document.getElementById('results').style.display = 'block';
  } else {
    // Building alert rath'er than showing it
    showError('Please check your numbers!');
  }
}

// Show error
function showError (e) {
  // Create a div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(e));

  document.getElementById('loading').style.display = 'none';

  // Insert error above heading
  // When invoking the insertBefore() method using a parent element, you're gonna want to pass as parameters the element to insert and the thing you want it to be inserted before.
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  window.setTimeout(clearError, 2000);
}

// Clear error
function clearError () {
  document.querySelector('.alert').remove();
}
