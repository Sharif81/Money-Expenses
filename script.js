document.getElementById('btn-calculate').addEventListener('click', function(){
   const IncomeInput = document.getElementById('income');
   const IncomeAmount = IncomeInput.value;
//    IncomeInput.value = '';

   const TotalIncome = document.getElementById('total-income');
   TotalIncome.innerText = IncomeAmount;

   const FoodInput = document.getElementById('food').value;
   const RentInput = document.getElementById('rent').value;
   const ClothesInput = document.getElementById('clothes').value;
   const Expenses = document.getElementById('expenses'); 
   Expenses.innerText = parseInt(FoodInput) + parseInt(RentInput) + parseInt(ClothesInput);


   const Balance = document.getElementById('balance');
   Balance.innerText = parseInt(TotalIncome.innerText) - parseInt(Expenses.innerText);

});


document.getElementById('btn-save').addEventListener('click', function(){
   
    const IncomeInput = document.getElementById('income');
    const IncomeAmount = IncomeInput.value;


   const SaveingInput = parseInt(document.getElementById('saving').value);  
   const SavingAmount = document.getElementById('saving-amount');

   SavingAmount.innerText = (parseInt(IncomeAmount * SaveingInput)) / 100;

   const Balance = document.getElementById('balance');
  // Balance.innerText = parseInt(TotalIncome.innerText) - parseInt(Expenses.innerText);

   const RemainingBalance = document.getElementById('remaining-balance');
   RemainingBalance.innerText = parseInt(Balance.innerText) - parseInt(SavingAmount.innerText);
   
});