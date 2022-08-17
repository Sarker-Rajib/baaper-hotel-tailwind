document.getElementById('button-widthdraw').addEventListener('click', function () {
    
    // step 2 : get the deposit amount (input)
    const withdrawField = document.getElementById('widhdraw-field')
    const newWithdrawAmout = parseFloat(withdrawField.value);

    withdrawField.value = '';

    // number validation
    if(isNaN(newWithdrawAmout)){
        alert('Please enter a valid number');
        return;
    }
    
    // console.log('newWithdrawAmout');
    
    // step 3: where to add
    const widthdrawElement = document.getElementById('total-widthdraw');
    const previousTotalWithdraw = parseFloat(widthdrawElement.innerText);
    // totalDeposit = depositAmout;

    // step 5
    // total balance calculation
    const previousBalanceElement = document.getElementById('balance');
    const previousBalance = parseFloat(previousBalanceElement.innerText);

    
    if(newWithdrawAmout > previousBalance){
        alert('bank a ato taka nai');
        withdrawField.value = '';
        return;
    }

    // step 4
    const currentTotalrawAmount = previousTotalWithdraw + newWithdrawAmout;
    widthdrawElement.innerText = currentTotalrawAmount;

    // step 6
    const newBalance = previousBalance - newWithdrawAmout;
    previousBalanceElement.innerText = newBalance;
})
