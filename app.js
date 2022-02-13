console.log('I am in a separate file')

function productUpdate (product ,isIncreasing){
    const caseNumber = document.getElementById(product+'-number');
    const caseInput = caseNumber.value;
    console.log(caseInput);

    if(isIncreasing==true){

        caseNumber.value = parseInt (caseInput) +1;
    }

    else if(caseNumber.value > 0){
        caseNumber.value = parseInt (caseInput) -1;
    }

    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber.value * 59;

}
//phone increase and decrease button

document.getElementById('phone-plus-btn').addEventListener('click',function(){
    productUpdate('phone' , true);
})
document.getElementById('phone-minus-btn').addEventListener('click',function(){
    productUpdate('phone' ,false)

})

///case increase and decrease button
document.getElementById('plus-btn').addEventListener('click',function(){
    productUpdate( 'case' ,true);
})


document.getElementById('minus-btn').addEventListener('click',function(){
    productUpdate('case' ,false);
})