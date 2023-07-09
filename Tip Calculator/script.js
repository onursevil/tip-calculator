function calculateTip() {
     var bill = parseFloat(document.getElementById('bill').value);
     var tipPercentage = parseFloat(document.getElementById('tip').value);
   
     if (isNaN(bill) || isNaN(tipPercentage)) {
       alert("Please enter valid inputs.");
       return;
     }
   
     var tipAmount = bill * tipPercentage / 100;
     document.getElementById('totalTip').textContent = "Total Tip: $" + tipAmount.toFixed(2);
   }
   