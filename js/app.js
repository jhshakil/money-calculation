function input(names) {
    let inputValue = document.getElementById(names + '-input').value;
    if (inputValue != '') {
        return inputValue;
    } else {
        return inputValue = '0';
    }
}

function cost() {
    // const foodInput = document.getElementById('food-input').value;
    // const rentInput = document.getElementById('rent-input').value;
    // const clothesInput = document.getElementById('clothes-input').value;
    // if (foodInput <= 0 && rentInput <= 0 && clothesInput <= 0) {
    //     const costCalculate = parseInt(foodInput) + parseInt(rentInput) + parseInt(clothesInput);
    //     return costCalculate;
    // } else {
    //     alert('Please enter a valid number');
    // }
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

// function incomeRemain() {
//     const incomeInput = document.getElementById('income-input');
//     const costSubTotal = cost();
//     const balanceCheck = parseInt(incomeInput.value) - costSubTotal;
//     return balanceCheck;
// }

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
    if (incomeInteger >= costSubTotal) {
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
    } else {
        alert('Please enter a valid number');
    }
    // const balance = parseInt(incomeInput) - costSubTotal;
    // console.log(typeof balance);
    // // totalCosting.innerText = balance;
    // if (balance != NaN) {
    //     totalCosting.innerText = balance;
    // } else {
    //     totalCosting.innerText = totalCostingInner;
    // }
}

function saving() {
    const incomeInput = input('income');
    const savingInput = document.getElementById('saving-input');
    const savingAmount = document.getElementById('saving-amount');
    const persent = parseInt(savingInput.value) / 100;
    const savingBalence = parseInt(incomeInput) * persent;
    savingAmount.innerText = savingBalence;

    // remaining balance 
    const remainingBalance = document.getElementById('remaining-balance');
    const costSubTotal = cost();
    const checkBalance = parseInt(incomeInput) - costSubTotal - savingBalence;
    remainingBalance.innerText = checkBalance;
}