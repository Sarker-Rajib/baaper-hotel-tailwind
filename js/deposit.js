document.getElementById('button-deposit').addEventListener('click', function () {
    
    // step 2 : get the deposit amount
    const depositField = document.getElementById('deposit-field');
    const newDepositAmout = parseFloat(depositField.value);
    // console.log(newDepositAmout);
    
    const deposityElement = document.getElementById('total-deposit');
    const previousTotalDeposit = parseFloat(deposityElement.innerText);
    
    const currentAmountDeposit = previousTotalDeposit + newDepositAmout;
    // previousTotalDeposit = newDepositAmout;
    deposityElement.innerText = currentAmountDeposit;




    // total balance calculation
    const previousBalanceElement = document.getElementById('balance');
    const previousBalance = parseFloat(previousBalanceElement.innerText);

    previousBalanceElement.innerText = previousBalance + newDepositAmout;

    depositField.value = '';
});