const containerValues = document.querySelectorAll('.container');
const billValue = document.getElementById('bill');
const numberOfPeople = document.getElementById('nop');
const tipPrice = document.querySelector('.tip-price');
const totalPrice = document.querySelector('.total-price');
const errorMessageBill = document.querySelector('.bill-msg')
const errorMessagePeople = document.querySelector('.nop-msg')
const reset = document.querySelector('.reset');
const custom = document.querySelector('.custom');

for(let value of containerValues)
{
    value.addEventListener('click', (e) => 
    {
        
        checkForZero();
        let tipPercentage = parseInt(e.target.innerHTML);
        let billCost = parseFloat(billValue.value);
        let people = parseInt(numberOfPeople.value);
        let total = (billCost / people);
        let tip =  tipPercentage / 100;
        let tipAmount = total * tip;
        tipPrice.textContent = `$${tipAmount.toFixed(2)}`;
        let totalPerson = total + tipAmount;
        totalPrice.textContent = `$${totalPerson.toFixed(2)}`;
        bigNumbers();
        notANumber();
        
        custom.addEventListener('input', (e) => 
        {
            let customVal = e.target.value
            let tip =  customVal / 100;
            let tipAmount = total * tip;
            tipPrice.textContent = `$${tipAmount.toFixed(2)}`;
            let totalPerson = total + tipAmount;
            totalPrice.textContent = `$${totalPerson.toFixed(2)}`;
            notANumber();
            bigNumbers();
        })
    })
}
reset.addEventListener('click', () => 
{
    clearAll();
    bigNumbers();
})
function clearAll()
{
    billValue.value = '';
    numberOfPeople.value = '';
    totalPrice.textContent = '$0.00';
    tipPrice.textContent = '$0.00';
    custom.value = '';
}

function checkForZero()
{
    if(billValue.value === '')
    {
        errorMessageBill.innerHTML = 'Cannot be zero';
    }
    else
    {
        errorMessageBill.innerHTML = '';
    }
    if(numberOfPeople.value === '')
    {
        errorMessagePeople.innerHTML = 'Cannot be zero';
    }
    else
    {
        errorMessagePeople.innerHTML = '';
    }
}


function notANumber()
{
    if(totalPrice.textContent === '$NaN')
    {
        totalPrice.textContent = '$0.00'
    }
    if(tipPrice.textContent === '$NaN')
    {
        tipPrice.textContent = '$0.00'
    }
}

function bigNumbers()
{
    if(totalPrice.innerHTML.length > 7)
    {
        totalPrice.style.fontSize = '13px';
    }
    else
    {
        totalPrice.style.fontSize = '2rem';
    }
    if(tipPrice.innerHTML.length > 7)
    {
        tipPrice.style.fontSize = '13px';
    }
    else
    {
        tipPrice.style.fontSize = '2rem';
    }
}

const body = document.querySelector('body');
const mainContainer = document.querySelector('.main-container');
const inputsContainer = document.querySelectorAll('.inputs');
const tipContainer = document.querySelector('.tip-container');
const billContainer = document.querySelector('.bill-container');

const darkMode = document.querySelector('.dark-mode');
const lightMode = document.querySelector('.light-mode');


darkMode.addEventListener('click', () => 
{
    body.classList.add('body-bg');
    mainContainer.classList.add('main-bg');
    for(let inputs of inputsContainer)
    {
        inputs.classList.add('tip-bg');
    }
    for(let percentages of containerValues)
    {
        percentages.classList.add('tip-bg');
    }
    custom.classList.add('tip-bg');
    tipContainer.classList.add('tip-container-bg');
    totalPrice.classList.add('white-texts');
    tipPrice.classList.add('white-texts');
    reset.classList.add('reset-btn');
    billContainer.classList.add('main-bg');
});

lightMode.addEventListener('click', () => 
{
    body.classList.remove('body-bg');
    mainContainer.classList.remove('main-bg');
    for(let inputs of inputsContainer)
    {
        inputs.classList.remove('tip-bg');
    }
    for(let percentages of containerValues)
    {
        percentages.classList.remove('tip-bg');
    }
    custom.classList.remove('tip-bg');
    tipContainer.classList.remove('tip-container-bg');
    totalPrice.classList.remove('white-texts');
    tipPrice.classList.remove('white-texts');
    reset.classList.remove('reset-btn');
    billContainer.classList.remove('main-bg');
})
