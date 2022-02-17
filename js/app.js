// input value 

function input(names) {
    let inputValue = document.getElementById(names + '-input').value;
    if (inputValue != '') {
        return inputValue;
    } else {
        return inputValue = '0';
    }
}
// costing 

function cost() {
    const foodInput = parseInt(input('food'));
    const rentInput = parseInt(input('rent'));
    const clothesInput = parseInt(input('clothes'));
    if (foodInput >= 0 && rentInput >= 0 && clothesInput >= 0) {
        if (isNaN(foodInput) && isNaN(rentInput) && isNaN(clothesInput)) {
            return alert('Please enter a valid number');
        } else {
            const costCalculate = foodInput + rentInput + clothesInput;
            return costCalculate;
        }
    } else {
        return alert('Please enter a valid number');
    }
}
// calculation costing and balance

function calculation() {
    const incomeInput = input('income');
    const incomeInteger = parseInt(incomeInput);
    if (isNaN(incomeInteger)) {
        return alert('Please enter a valid number');
    }
    const costing = document.getElementById('cost');
    const costingInner = costing.innerText;
    const totalCosting = document.getElementById('total-cost');
    const totalCostingInner = totalCosting.innerText;
    const costSubTotal = cost();
    if (incomeInteger < costSubTotal) {
        return alert('Please enter a valid number');
    }

    if (costSubTotal != undefined) {
        costing.innerText = costSubTotal;
        if (isNaN(incomeInteger)) {
            totalCosting.innerText = totalCostingInner;
        } else {
            const balance = incomeInput - costSubTotal;
            totalCosting.innerText = balance;
        }
    } else {
        costing.innerText = costingInner;
        totalCosting.innerText = totalCostingInner;
    }
}
// calculation for saving

function saving() {
    const incomeInput = parseInt(input('income'));
    const savingInput = parseInt(input('saving'));
    if (isNaN(savingInput)) {
        return alert('Please enter a valid number');
    }
    const savingAmount = document.getElementById('saving-amount');
    const savingInner = savingAmount.innerText;
    if (isNaN(incomeInput)) {
        savingAmount.innerText = savingInner;
    } else {
        const persent = savingInput / 100;
        const savingBalence = incomeInput * persent;
        savingAmount.innerText = savingBalence;
        // remaining balance calculation 

        const remainingBalance = document.getElementById('remaining-balance');
        const costSubTotal = cost();
        const balance = incomeInput - costSubTotal;
        if (savingBalence > balance) {
            return alert('You do not have much money')
        } else {
            const checkBalance = balance - savingBalence;
            remainingBalance.innerText = checkBalance;
        }
    }
}