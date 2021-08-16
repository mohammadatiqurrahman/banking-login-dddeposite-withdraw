


// all codes here for banking withdraw

document.getElementById('deposit-btn').addEventListener('click', function(){

    //  get input value and store it to a variable
    const depositField = document.getElementById('deposite-input');
    const getDepositeAmount = depositField.value;

    if(depositField.value == '' || depositField.value <= 0){
        alert('please enter amount')
    }
    else{
        const setDeposite = document.getElementById('depositte-amount')

    // setDeposite.innerText = getDepositeAmount;
    const previousDepositeAmount = setDeposite.innerText;

    const newDepositeAmount = getDepositeAmount;

    // calculate total deposite amount including previous deposite amount and new deposite amount!
    const newDepositeTotal = parseFloat(previousDepositeAmount) + parseFloat(newDepositeAmount)

    setDeposite.innerText = newDepositeTotal;

    // update total balance
    const currentBalance = document.getElementById('balance-amount');

    const previousBalance = currentBalance.innerText;

    const currentTotalBalance = parseFloat(previousBalance) + parseFloat(newDepositeAmount);

    currentBalance.innerText = currentTotalBalance;

    depositField.value = '';
    }
    


  });



document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-input')
    const previousWithdrawAmount = withdrawField.value;
    // convert the new withdrwal amount to parseFloat and reduce from main balance!
     if(withdrawField.value == '' || withdrawField.value <= 0){
         alert('please enter amount')
     }
     else{
        const convertedPreviousWithdrawAmount = parseFloat(previousWithdrawAmount);

        const previousWithdrwalBalance = document.getElementById('withdraw-amount')
        const newPreviousWithdrwalBalance = previousWithdrwalBalance.innerText;
        const convertedNewPreviousWithdrwalBalance = parseFloat(newPreviousWithdrwalBalance);
       //  console.log(convertedNewPreviousWithdrwalBalance);
   
        const totalWithdrawlBalance = convertedNewPreviousWithdrwalBalance + convertedPreviousWithdrawAmount;
   
        previousWithdrwalBalance.innerText = totalWithdrawlBalance;
   
   
       // update reduce balance after withdrwal
       const currentBalance = document.getElementById('balance-amount');
   
       const previousBalance = currentBalance.innerText;
   
       const currentPreviousTotalBalance = parseFloat(previousBalance)-convertedPreviousWithdrawAmount
   
       currentBalance.innerText = currentPreviousTotalBalance;
   
   
        withdrawField.value = ''
     }

});