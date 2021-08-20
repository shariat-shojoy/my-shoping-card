function updateCaseNumber(inputNumberId,producttotalId,Price,isIncreasing){
    const productinpute=document.getElementById(inputNumberId)
    let productnumber=productinpute.value;
    if(isIncreasing==true){
        productnumber=parseInt(productnumber)+1
    }
    else if(productnumber>0){
        productnumber=parseInt(productnumber)-1;
    }
    productinpute.value=productnumber;
    const producttotal= document.getElementById(producttotalId);
    producttotal.innerText=productnumber*Price ;
}
function getSubtotal(){
    const caseNumber=document.getElementById('case-number').value
    const casenumber=parseFloat(caseNumber)
    const mobileNumber=document.getElementById('mobile-number').value
    const mobilenumber=parseFloat(mobileNumber)
    const mobiletotal=mobilenumber*1219;
    const casetotal=casenumber*59;
    const subtotal=mobiletotal+casetotal;
    const mobilesubtotal= document.getElementById('sub-total')
    mobilesubtotal.innerText=subtotal;
    const texAmount=subtotal/10;
    const textotal=document.getElementById('tex-total');
    textotal.innerText=texAmount;
    const totalAmount=subtotal+texAmount;
    const allTotal=document.getElementById('total-amount')
    allTotal.innerText=totalAmount;
}
// document.getElementById('case-plus','case-minus','mobile-plus','mobile-minus').addEventListener('click'function)


document.getElementById('case-plus').addEventListener('click',function(){
     updateCaseNumber('case-number','case-total',59,true)
     getSubtotal()
    
})
document.getElementById('case-minus').addEventListener('click',function(){
    updateCaseNumber('case-number','case-total',59,false)
    getSubtotal()
})
document.getElementById('mobile-plus').addEventListener('click',function(){
    updateCaseNumber('mobile-number','mobile-total',1219,true)
    getSubtotal()
})
document.getElementById('mobile-minus').addEventListener('click',function(){
    updateCaseNumber('mobile-number','mobile-total',1219,false)
    getSubtotal()
})
