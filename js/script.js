function addNewItems(elementID, buttonId){
    // step-1 get text from selected element
    const element = document.getElementById(elementID);
    const elementValue = element.innerText
    // step-2 get the ol and get the ol list chlidern
    const inputOl = document.getElementById('olItem');
    const inputOlChlids = inputOl.children.length;

    // step-3 create an new li element and create an net class and set  the class into new li add elementvalue into newli
    const newList = document.createElement('li');
    const newListAtr = document.createAttribute('class');
    newListAtr.value = 'listItems';
    newList.setAttributeNode(newListAtr)
    newList.innerText = elementValue;

    // step-5 check the list chlidern lenght to add new li  
    if(inputOlChlids< 5){
        // step-6 add the new li into the ol list
        inputOl.appendChild(newList);
        // step-7 disable the click button and change it color
        document.querySelector(buttonId).disabled = true;
        document.querySelector(buttonId).style.backgroundColor = 'gray';
        // step-8 update the slected number
        const selectedNumber = document.getElementById('selectedNumber');
        const selectedNumberValueStr = selectedNumber.innerText;
        const selectedNumberValue = parseFloat(selectedNumberValueStr);
        const increseselectedNumber = selectedNumberValue + 1;
        selectedNumber.innerText = increseselectedNumber; 
    }
    // step-9 if the childrens are geater then 5 then show alert
    else{
        alert('You Can Select Only 5 items')
        return
    }

}

document.getElementById('added-messi').addEventListener('click', function(){
    addNewItems('messi','#added-messi')
    // disableButton()
})
document.getElementById('added-neymer').addEventListener('click', function(){
    addNewItems('neymer','#added-neymer')
})
document.getElementById('added-mabappy').addEventListener('click', function(){
    addNewItems('mabappy','#added-mabappy')
})
document.getElementById('added-machado').addEventListener('click', function(){
    addNewItems('machado','#added-machado')
})
document.getElementById('added-ramos').addEventListener('click', function(){
    addNewItems('ramos','#added-ramos')
})
document.getElementById('added-sanches').addEventListener('click', function(){
    addNewItems('sanches','#added-sanches')
})