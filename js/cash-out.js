document.getElementById('cash-out-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        const cashOut = getInputFieldId('input-cash-out')
        const pinNumber = getInputFieldId('cas-out-pin')
        const balance = getBalanceById('present-balance')
        // console.log(addMoney, pinNumber)

        if(pinNumber === 1234){
            const newBalance = balance - cashOut;

            document.getElementById('present-balance').innerText = newBalance
        }
        else{
            alert('failed cash Out the add money')
        }
    })