function cost() {
    const foodInput = document.getElementById('food-input');
    const rentInput = document.getElementById('rent-input');
    const clothesInput = document.getElementById('clothes-input');
    const costCalculate = parseInt(foodInput.value) + parseInt(rentInput.value) + parseInt(clothesInput.value);
    return costCalculate;
}

function calculation() {
    const incomeInput = document.getElementById('income-input');
    const costing = document.getElementById('cost');
    const totalCosting = document.getElementById('total-cost');
    const costSubTotal = cost();
    costing.innerText = costSubTotal;
    const balanceCheck = parseInt(incomeInput.value) - costSubTotal;
    totalCosting.innerText = balanceCheck;
}

function saving() {
    const incomeInput = document.getElementById('income-input');
    const savingInput = document.getElementById('saving-input');
    const savingAmount = document.getElementById('saving-amount');
    const persent = parseInt(savingInput.value) / 100;
    const savingBalence = parseInt(incomeInput.value) * persent;
    savingAmount.innerText = savingBalence;

    // remaining balance 
    const remainingBalance = document.getElementById('remaining-balance');
    const costSubTotal = cost();
    const costing = document.getElementById('cost');
    const totalCosting = document.getElementById('total-cost');
    const checkBalance = parseInt(incomeInput.value) - costSubTotal - savingBalence;
    remainingBalance.innerText = checkBalance;
}