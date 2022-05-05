const inputBill = document.querySelector('#bill');
const percentage = document.querySelectorAll('.btn');
const pep = document.querySelector('.pepole');
const reee =document.querySelector('.ree');
let custbill = '';
let per = '';
let numpep= '';


pep.addEventListener('input',function(e){
    numpep = pep.value;
});


inputBill.addEventListener('input',function(e){
    custbill = inputBill.value;
});

// click 

percentage.forEach((btn) => {
    btn.addEventListener('click', tipClick);
})

function tipClick(e){
    //turn off other active buttons
    clearBtns();
    //set clicked button as active
    e.target.classList.add("activeBtn");
    per = e.target.value;

    updateTip();
}

function clearBtns(){
    document.querySelectorAll(".btn")
        .forEach((btn)=>{
            btn.classList.remove("act");
    });
}

function updateTip(){
    document.querySelector("#tip-value")
        .textContent = "$"+(custbill/numpep * per/100).toFixed(2);
    document.querySelector("#total-value")
        .textContent = "$"+(custbill/numpep * (1+per/100)).toFixed(2);
}

reee.addEventListener('click',reset);

function reset() {
    inputBill.value = ''
    pep.value = ''
    document.querySelector("#tip-value").textContent = "$0.00"
    document.querySelector("#total-value").textContent = "$0.00"
}



