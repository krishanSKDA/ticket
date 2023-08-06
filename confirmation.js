
/*
document.addEventListener("DOMContentLoaded", () => {
    // Get the table body element
    const tableBody = document.querySelector('#reservationTable tbody');
    
    // Get data from local storage
    const formData = JSON.parse(localStorage.getItem('formData'));
    const ticketData = JSON.parse(localStorage.getItem('ticketData'));
    const selectedData = JSON.parse(localStorage.getItem('selectedData'));
    
    // Function to populate the table
    function populateTable(data) {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const row = document.createElement('tr');
          const propertyCell = document.createElement('td');
          const valueCell = document.createElement('td');
    
          propertyCell.textContent = key;
          valueCell.textContent = data[key];
    
          row.appendChild(propertyCell);
          row.appendChild(valueCell);
    
          tableBody.appendChild(row);
        }
      }
    }
    
    // Populate the table with reservation data
    if (formData) {
      populateTable({
        "Name": formData.name,
        "Date": formData.date,
        "Time": formData.time,
        "Duration": formData.duration,
        "Mobile": formData.mobile,
        "E-mail": formData.email,
        "Gender": formData.gender
      });
    }
    
    // Populate the table with ticket data
    if (ticketData) {
      const ticketDetails = {};
      for (const key in ticketData.guestData) {
        if (ticketData.guestData.hasOwnProperty(key)) {
          ticketDetails[key] = ticketData.guestData[key];
        }
      }
      populateTable(ticketDetails);
    }
    
    // Calculate charges and total
    if (ticketData) {
      let totalCharges = 0;
      for (const key in ticketData.guestData) {
        if (ticketData.guestData.hasOwnProperty(key)) {
          const ticketQuantity = ticketData.guestData[key];
          const ticketPrice = ticketData.prices[key].normal;
          const ticketCharge = ticketQuantity * ticketPrice;
          totalCharges += ticketCharge;
          populateTable({ [`${key} Tickets`]: ticketQuantity, [`${key} Charges`]: ticketCharge });
        }
      }
      populateTable({
        "Charges": totalCharges,
        "Total": totalCharges + formData.totalPayable
      });
    }
    
    // Display PayPal information (Replace 'YOUR_PAYPAL_INFO' with actual data)
    const paypalInfo = {
      "PayPal Email": "YOUR_PAYPAL_EMAIL",
      "Currency": "YOUR_CURRENCY",
      "Amount": "TOTAL_AMOUNT"
    };
    populateTable(paypalInfo);
  });
  */

  document.addEventListener("DOMContentLoaded", () => {
    // Get the table body element
    const tableBody = document.querySelector('#reservationTable tbody');
    
    // Get data from local storage
    const formData = JSON.parse(localStorage.getItem('formData'));
    const ticketData = JSON.parse(localStorage.getItem('ticketData'));
    const selectedData = JSON.parse(localStorage.getItem('selectedData'));
    
    // Function to populate the table
    function populateTable(data) {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const row = document.createElement('tr');
          const propertyCell = document.createElement('td');
          const valueCell = document.createElement('td');
    
          propertyCell.textContent = key;
          valueCell.textContent = data[key];
    
          row.appendChild(propertyCell);
          row.appendChild(valueCell);
    
          tableBody.appendChild(row);
        }
      }
    }
    
    // Populate the table with reservation data
    if (formData) {
      populateTable({
        "Name": formData.name,
        "Date": formData.date,
        "Time": formData.time,
        "Duration": formData.duration,
        "Mobile": formData.mobile,
        "E-mail": formData.email,
        "Gender": formData.gender,
        "Total Payable": formData.totalPayable
      });
    }
    
    // Populate the table with ticket data
    if (ticketData) {
      const ticketDetails = {};
      for (const key in ticketData.guestData) {
        if (ticketData.guestData.hasOwnProperty(key)) {
          ticketDetails[key] = ticketData.guestData[key];
        }
      }
      populateTable(ticketDetails);
      
      // Calculate charges and total
      let totalCharges = 0;
      for (const key in ticketData.guestData) {
        if (ticketData.guestData.hasOwnProperty(key)) {
          const ticketQuantity = ticketData.guestData[key];
          const ticketPrice = ticketData.prices[key].normal;
          const ticketCharge = ticketQuantity * ticketPrice;
          totalCharges += ticketCharge;
          populateTable({ [`${key} Tickets`]: ticketQuantity, [`${key} Charges`]: ticketCharge });
        }
      }
      populateTable({
        "Charges": totalCharges,
        "Total Charges": totalCharges + ticketData.totalPayable,
        "Total Payable": ticketData.totalPayable
      });
    }
});