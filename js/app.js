function cost() {
    const foodInput = document.getElementById('food-input');
    const rentInput = document.getElementById('rent-input');
    const clothesInput = document.getElementById('clothes-input');
    const costCalculate = parseInt(foodInput.value) + parseInt(rentInput.value) + parseInt(clothesInput.value);
    return costCalculate;
}
function income() {
    const incomeInput = document.getElementById('income-input');
    const costSubTotal = cost();
    const balanceCheck = parseInt(incomeInput.value) - costSubTotal;
    return balanceCheck;
}

function calculation() {
    const costing = document.getElementById('cost');
    const totalCosting = document.getElementById('total-cost');
    const costSubTotal = cost();
    costing.innerText = costSubTotal;
    const balance = income();
    totalCosting.innerText = balance;
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
    const checkBalance = income() - savingBalence;
    remainingBalance.innerText = checkBalance;
}