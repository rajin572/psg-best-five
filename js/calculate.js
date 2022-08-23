function getInputs(inputId){
    const getInputElement = document.getElementById(inputId);
    const gettElementInputValueStr = getInputElement.value;
    const gettElementInputValue = parseFloat(gettElementInputValueStr)
    return gettElementInputValue
}
function getElements(elementId){
    const getNumberElement = document.getElementById(elementId);
    const getNumberElementValueStr = getNumberElement.innerText;
    const getNumberElementValue = parseFloat(getNumberElementValueStr)
    return getNumberElementValue
}

document.getElementById('calculate-playerPrice').addEventListener('click', function(){
    const getInputValue = getInputs('Per-player-Price')
    const getNumberValue = getElements('selectedNumber');

    if(isNaN(getInputValue)){
        alert('please input a valid numbus')

    }
    else{
        const playerCalculate = getInputValue*getNumberValue;
        const playerPrice = document.getElementById('playerPrice');
        playerPrice.innerText = playerCalculate;
    }


})

document.getElementById('calculate-totalPrice').addEventListener('click', function(){
    const getManagerPrice = getInputs('Manager')
    const getCoachPrice = getInputs('coach')
    const getPlayerPrice = getElements('playerPrice');
    
    if(isNaN(getManagerPrice) || isNaN(getCoachPrice)){
        alert('please input a valid numbus')
    }
    else{
        const totalCalculate = getPlayerPrice+getManagerPrice+getCoachPrice;
        const totalPrice = document.getElementById('totalPrice');
        totalPrice.innerText = totalCalculate;
    }
})