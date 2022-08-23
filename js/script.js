function addNewItems(elementID){
    // step1 get text from selected element
    const element = document.getElementById(elementID);
    const elementValue = element.innerText
    console.log(elementValue);
    // step2 get the ol list and create an list
    const inputOl = document.getElementById('olItem');

    const inputOlChlids = inputOl.children.length;
    console.log(inputOlChlids);
    if(inputOlChlids< 5){
        const newList = document.createElement('li');
        // sted3 create class for the newlist
        const newListAtr = document.createAttribute('class');
        newListAtr.value = 'listItems';
        newList.setAttributeNode(newListAtr)
        // step4 added the selected element text into the new li add add tge lis into ol
        newList.innerText = elementValue;
        inputOl.appendChild(newList)

        // step-5 update the slected number
        const selectedNumber = document.getElementById('selectedNumber');
        const selectedNumberValueStr = selectedNumber.innerText;
        const selectedNumberValue = parseFloat(selectedNumberValueStr);
        const increseselectedNumber = selectedNumberValue + 1;
        selectedNumber.innerText = increseselectedNumber
    }
    else{
        alert('You Can Select Only 5 items')
        return
    }

}

document.getElementById('added-messi').addEventListener('click', function(){
    addNewItems('messi')
})
document.getElementById('added-neymer').addEventListener('click', function(){
    addNewItems('neymer')
})
document.getElementById('added-mabappy').addEventListener('click', function(){
    addNewItems('mabappy')
})
document.getElementById('added-machado').addEventListener('click', function(){
    addNewItems('machado')
})
document.getElementById('added-ramos').addEventListener('click', function(){
    addNewItems('ramos')
})
document.getElementById('added-sanches').addEventListener('click', function(){
    addNewItems('sanches')
})