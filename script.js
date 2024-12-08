

window.addEventListener('keyup', function(){
    let price =Number(document.querySelector('#Phy').value);

    let discount =Number(document.querySelector('#Che').value);
    
   let discountgot=((discount*price)/100).toFixed(2);
   let adiscount = price - discountgot;
    
    document.querySelector('#saved').innerHTML=`You saved : ${discountgot} ₹`;
    document.querySelector('#discount').innerHTML=`Price after discount : ${adiscount}₹`;
});




