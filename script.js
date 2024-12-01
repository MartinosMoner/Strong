
document.getElementById('installmentForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const price = parseFloat(document.getElementById('price').value);
  const years = parseInt(document.getElementById('years').value);


  if (isNaN(price) || isNaN(years) || price <= 0 || years <= 0) {
    alert("يرجى إدخال قيم صحيحة.");
    return;
  }

 
  const annualInterestRate = 0.20; 
  const totalInterest = price * annualInterestRate * years;
  const totalAmount = price + totalInterest;


  document.getElementById('totalInterest').textContent = `إجمالي الفائدة: ${totalInterest.toFixed(2)} وحدة نقدية`;
  document.getElementById('totalAmount').textContent = `المبلغ الإجمالي الذي سيدفعه المشتري: ${totalAmount.toFixed(2)} وحدة نقدية`;
});


document.getElementById('toggleDarkMode').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});

