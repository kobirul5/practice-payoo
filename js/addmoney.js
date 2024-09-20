document.getElementById('add-money-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        const addMoney = getInputFieldId('input-add-amount')
        const pinNumber = getInputFieldId('pin-number')
        const balance = getBalanceById('present-balance')
        // console.log(addMoney, pinNumber)

        if(pinNumber === 1234){
            const newBalance = balance + addMoney;

            document.getElementById('present-balance').innerText = newBalance
        }
        else{
            alert('failed add to the add money')
        }
    })