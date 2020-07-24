//Created Function
// Function for Plus Button
function updateByPlus(plusId, inputId, priceId){
var currentPrice = parseFloat(document.getElementById(priceId).innerText);
    const plusBtn = document.getElementById(plusId);
plusBtn.addEventListener('click', function(){
    var input = parseFloat(document.getElementById(inputId).value);
    input++;
    
    document.getElementById(inputId).value = input;
    document.getElementById(priceId).innerText = currentPrice * input;
    
    sumarry();    
})
}
// Function for Minus Button
function updateByMinus(minusId, inputId, priceId){
    var currentPrice = parseFloat(document.getElementById(priceId).innerText);
    const minusBtn = document.getElementById(minusId);
    minusBtn.addEventListener('click', function(){
    var input = parseFloat(document.getElementById(inputId).value);
    if(input>0){
    input--;
    }
    document.getElementById(inputId).value = input;
    document.getElementById(priceId).innerText = currentPrice * input;
    
    sumarry();
    })
    }
//Function for Fotter
function sumarry(){
    const phnT = parseFloat(document.getElementById('phn-price').innerText);
    const caseT = parseFloat(document.getElementById('case-price').innerText); 
    
    let tax = parseFloat(document.getElementById('tax').innerText);
    tax = parseInt(phnT*.05 + caseT*.05);
    document.getElementById('tax').innerText = tax;
    document.getElementById('sub-total').innerText = phnT + caseT;
    document.getElementById('total').innerText = phnT + caseT + tax;
}

//Created Function

updateByPlus("phn-plus", "phn-input", "phn-price");
updateByMinus("phn-minus", "phn-input", "phn-price");
updateByPlus("case-plus", "case-input", "case-price");
updateByMinus("case-minus", "case-input", "case-price");


