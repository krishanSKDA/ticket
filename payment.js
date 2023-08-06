/*const form = document.querySelector("#credit-card");
const summaryTable = document.querySelector("#summary-table");
const clearDataBtn = document.querySelector("#clear-data");

const cardNumber = document.querySelector("#card-number");
const cardHolder = document.querySelector("#name-text");
const cardExpiration = document.querySelector("#valid-thru-text");
const cardCVV = document.querySelector("#cvv-text");
const payBtn = document.querySelector("#pay-btn");

const cardNumberText = document.querySelector(".number-vl");
const cardHolderText = document.querySelector(".name-vl");
const cardExpirationText = document.querySelector(".expiration-vl");
const cardCVVText = document.querySelector(".cvv-vl");

// Event listeners for input fields
cardNumber.addEventListener("input", (e) => {
  const formattedNumber = formatCardNumber(e.target.value);
  cardNumberText.textContent = formattedNumber;
  updateSummaryTable();
  validateForm();
});

cardHolder.addEventListener("input", (e) => {
  const cardHolderValue = e.target.value.trim();
  cardHolderText.textContent = cardHolderValue ? cardHolderValue.toUpperCase() : "Name on Card";
  updateSummaryTable();
  validateForm();
});

cardExpiration.addEventListener("input", (e) => {
  const formattedDate = formatExpirationDate(e.target.value);
  cardExpirationText.textContent = formattedDate;
  updateSummaryTable();
  validateForm();
});

cardCVV.addEventListener("input", (e) => {
  cardCVVText.textContent = e.target.value;
  updateSummaryTable();
  validateForm();
});

// Form submit handler
form.addEventListener("submit", (e) => {
  e.preventDefault();
  saveToLocalStorage();
  updateSummaryTable();
  form.reset();
  payBtn.disabled = true;
  showPaymentSuccess();
  setTimeout(() => {
    window.location.href = "confirmation.html";
  }, 3000); 
});

// Clear data button click handler
clearDataBtn.addEventListener("click", () => {
  clearLocalStorage();
  updateSummaryTable();
  payBtn.disabled = true;
});

function formatCardNumber(number) {
 
}

// Function to format the expiration date
function formatExpirationDate(date) {
 
}

// Function to validate the form
function validateForm() {
  
  const isValidCardNumber = cardNumber.checkValidity();
  const isValidCardHolder = cardHolder.checkValidity();
  const isValidExpiration = cardExpiration.checkValidity();
  const isValidCVV = cardCVV.checkValidity();

  if (isValidCardNumber && isValidCardHolder && isValidExpiration && isValidCVV) {
    payBtn.disabled = false;
  } else {
    payBtn.disabled = true;
  }
}

// Function to save data to local storage
function saveToLocalStorage() {
  // Save the card details to local storage
  const cardDetails = {
    cardNumber: cardNumber.value,
    cardHolder: cardHolder.value,
    cardExpiration: cardExpiration.value,
    cardCVV: cardCVV.value,
  };

  // Get existing data from local storage
  let storedData = JSON.parse(localStorage.getItem("cardDetails")) || [];

  // Add the new data to the existing data
  storedData.push(cardDetails);

  // Save the updated data back to local storage
  localStorage.setItem("cardDetails", JSON.stringify(storedData));
}

// Function to clear data from local storage
function clearLocalStorage() {

  localStorage.removeItem("cardDetails");
}

// Function to update the summary table with data from local storage
function updateSummaryTable() {
  
  summaryTable.innerHTML = `
    <thead>
      <tr>
          <th>Card Number</th>
          <th>Name on Card</th>
          <th>Expiry Date</th>
          <th>CVC / CVV</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  `;


  const storedData = JSON.parse(localStorage.getItem("cardDetails")) || [];

  
  storedData.forEach((data) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${data.cardNumber}</td>
      <td>${data.cardHolder}</td>
      <td>${data.cardExpiration}</td>
      <td>${data.cardCVV}</td>
    `;
    summaryTable.appendChild(row);
  });
}


document.addEventListener("DOMContentLoaded", () => {
  updateSummaryTable();
});

const urlParams = new URLSearchParams(window.location.search);
const paymentAmount = urlParams.get("amount");

// Display the payment amount on the ticket page
const paymentAmountElement = document.querySelector("#payment-amount");
paymentAmountElement.textContent = paymentAmount ? `$${paymentAmount}` : "Unknown Amount";

// Function to show the payment success message
function showPaymentSuccess() {
  const successMessage = document.createElement("div");
  successMessage.textContent = "Payment Successfully!";
  successMessage.classList.add("payment-success");
  document.body.appendChild(successMessage);
  setTimeout(() => {
    successMessage.remove();
  }, 3000); // Remove the message after 3 seconds
}



*/
/*

document.addEventListener("DOMContentLoaded", () => {
  const userMobileElement = document.querySelector("#user-mobile");
  const userEmailElement = document.querySelector("#user-email");
  const userNameElement = document.querySelector("#user-name");
  const ticketDetailsTable = document.querySelector("#ticket-details-table");
  const totalPayableElement = document.querySelector("#total-payable");
  const storedCardData = JSON.parse(localStorage.getItem("cardDetails")) || [];
  const tab = localStorage.getItem("ticketData");
  const ticketData = JSON.parse(tab);
  
  const prices = {
    "Foreigner Adult": { normal: 10, peak: 13 },
    "Foreigner Child": { normal: 5, peak: 8 },
    "SL Adult": { normal: 4, peak: 6 },
    "SL Child": { normal: 2, peak: 3 },
    "Infant": { normal: 0, peak: 0 }
  };

  // Display user mobile number and email
  const userData = JSON.parse(localStorage.getItem("formData"));
  if (userData) {
    userNameElement.textContent = userData.name;
    userMobileElement.textContent = userData.phone;
    userEmailElement.textContent = userData.email;
  }

  // Display ticket details and payment summary
  if (ticketData) {
    let totalPayable = 0;

    for (const key in ticketData.guestData) {
      if (ticketData.guestData.hasOwnProperty(key)) {
        const quantity = ticketData.guestData[key];
        const price = prices[key].normal * quantity;

        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${key}</td>
          <td>${quantity}</td>
          <td>$${price}</td>
        `;

        ticketDetailsTable.appendChild(row);
        totalPayable += price;
      }
    }

    totalPayableElement.textContent = `$${totalPayable.toFixed(2)}`;
  }
});
*/
document.addEventListener("DOMContentLoaded", () => {
  const userMobileElement = document.querySelector("#user-mobile");
  const userEmailElement = document.querySelector("#user-email");
  const userNameElement = document.querySelector("#user-name");
  const ticketDetailsTable = document.querySelector("#ticket-details-table");
  const totalPayableElement = document.querySelector("#total-payable");
  const storedCardData = JSON.parse(localStorage.getItem("cardDetails")) || [];
  const tab = localStorage.getItem("ticketData");
  const ticketData = JSON.parse(tab);

  const cardNumber = document.querySelector("#card-number");
  const cardHolder = document.querySelector("#name-text");
  const cardExpiration = document.querySelector("#valid-thru-text");
  const cardCVV = document.querySelector("#cvv-text");
  const payBtn = document.querySelector("#pay-btn");

  const cardNumberText = document.querySelector(".number-vl");
  const cardHolderText = document.querySelector(".name-vl");
  const cardExpirationText = document.querySelector(".expiration-vl");
  const cardCVVText = document.querySelector(".cvv-vl");

  const form = document.querySelector("#credit-card");
  const summaryTable = document.querySelector("#summary-table");
  const clearDataBtn = document.querySelector("#clear-data");

  // Prices for ticket categories
  const prices = {
    "Foreigner Adult": { normal: 10, peak: 13 },
    "Foreigner Child": { normal: 5, peak: 8 },
    "SL Adult": { normal: 4, peak: 6 },
    "SL Child": { normal: 2, peak: 3 },
    "Infant": { normal: 0, peak: 0 },
  };

  // Event listeners for input fields
  cardNumber.addEventListener("input", (e) => {
    const formattedNumber = formatCardNumber(e.target.value);
    cardNumberText.textContent = formattedNumber;
    updateSummaryTable();
    validateForm();
  });

  cardHolder.addEventListener("input", (e) => {
    const cardHolderValue = e.target.value.trim();
    cardHolderText.textContent = cardHolderValue ? cardHolderValue.toUpperCase() : "Name on Card";
    updateSummaryTable();
    validateForm();
  });

  cardExpiration.addEventListener("input", (e) => {
    const formattedDate = formatExpirationDate(e.target.value);
    cardExpirationText.textContent = formattedDate;
    updateSummaryTable();
    validateForm();
  });

  cardCVV.addEventListener("input", (e) => {
    cardCVVText.textContent = e.target.value;
    updateSummaryTable();
    validateForm();
  });

  // Form submit handler
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    saveToLocalStorage();
    updateSummaryTable();
    form.reset();
    payBtn.disabled = true;
    showPaymentSuccess();
    setTimeout(() => {
      window.location.href = "confirmation.html";
    }, 3000);
  });

  // Clear data button click handler
  clearDataBtn.addEventListener("click", () => {
    clearLocalStorage();
    updateSummaryTable();
    payBtn.disabled = true;
  });

  // Display user mobile number and email
  const userData = JSON.parse(localStorage.getItem("formData"));
  if (userData) {
    userNameElement.textContent = userData.name;
    userMobileElement.textContent = userData.phone;
    userEmailElement.textContent = userData.email;
  }

  // Display ticket details and payment summary
  if (ticketData) {
    let totalPayable = 0;

    for (const key in ticketData.guestData) {
      if (ticketData.guestData.hasOwnProperty(key)) {
        const quantity = ticketData.guestData[key];
        const price = prices[key].normal * quantity;

        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${key}</td>
          <td>${quantity}</td>
          <td>$${price}</td>
        `;

        ticketDetailsTable.appendChild(row);
        totalPayable += price;
      }
    }

    totalPayableElement.textContent = `$${totalPayable.toFixed(2)}`;
  }

  // Function to format card number
  function formatCardNumber(number) {
    // Implement your formatting logic here
    // For example: Add spaces every 4 digits
    const formattedNumber = number.replace(/(\d{4})/g, '$1 ').trim();
    return formattedNumber;
  }

  // Function to format the expiration date
  function formatExpirationDate(date) {
    // Implement your formatting logic here
    // For example: Convert MMYY to MM/YY format
    const formattedDate = date.replace(/(\d{2})(\d{2})/, '$1/$2');
    return formattedDate;
  }

  // Function to validate the form
  function validateForm() {
    const isValidCardNumber = cardNumber.checkValidity();
    const isValidCardHolder = cardHolder.checkValidity();
    const isValidExpiration = cardExpiration.checkValidity();
    const isValidCVV = cardCVV.checkValidity();

    if (isValidCardNumber && isValidCardHolder && isValidExpiration && isValidCVV) {
      payBtn.disabled = false;
    } else {
      payBtn.disabled = true;
    }
  }

  // Function to save data to local storage
  function saveToLocalStorage() {
    // Save the card details to local storage
    const cardDetails = {
      cardNumber: cardNumber.value,
      cardHolder: cardHolder.value,
      cardExpiration: cardExpiration.value,
      cardCVV: cardCVV.value,
    };

    // Get existing data from local storage
    let storedData = JSON.parse(localStorage.getItem("cardDetails")) || [];

    // Add the new data to the existing data
    storedData.push(cardDetails);

    // Save the updated data back to local storage
    localStorage.setItem("cardDetails", JSON.stringify(storedData));
  }

  // Function to clear data from local storage
  function clearLocalStorage() {
    localStorage.removeItem("cardDetails");
  }

  // Function to update the summary table with data from local storage
  function updateSummaryTable() {
    summaryTable.innerHTML = `
      <thead>
        <tr>
          <th>Card Number</th>
          <th>Name on Card</th>
          <th>Expiry Date</th>
          <th>CVC / CVV</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    `;

    const storedData = JSON.parse(localStorage.getItem("cardDetails")) || [];

    storedData.forEach((data) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${data.cardNumber}</td>
        <td>${data.cardHolder}</td>
        <td>${data.cardExpiration}</td>
        <td>${data.cardCVV}</td>
      `;
      summaryTable.appendChild(row);
    });
  }

  // Function to show the payment success message
  function showPaymentSuccess() {
    const successMessage = document.createElement("div");
    successMessage.textContent = "Payment Successfully!";
    successMessage.classList.add("payment-success");
    document.body.appendChild(successMessage);
    setTimeout(() => {
      successMessage.remove();
    }, 3000); // Remove the message after 3 seconds
  }
  
  updateSummaryTable();
});
