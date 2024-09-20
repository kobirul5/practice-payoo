function getInputFieldId(id){
    const inputValue = document.getElementById(id).value;
    const addMoneyNumber = parseFloat(inputValue);
    return addMoneyNumber
}
function getBalanceById(id){
    const inputValue = document.getElementById(id).innerText;
    const addMoneyNumber = parseFloat(inputValue);
    return addMoneyNumber
}

function showSectionId(id){
    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('transaction-history').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')


}