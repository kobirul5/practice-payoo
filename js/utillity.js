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