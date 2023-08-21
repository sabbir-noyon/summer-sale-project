
let total=0;
let discount=0;
let grandTotal=0;

function cardClick(card) {

  const rightSideContainer = document.getElementById('before-right-side-container');



    // GETTING PRODUCTS NAMES AND PRICES
    const productName = card.parentNode.childNodes[3].childNodes[5].innerText;//[1].innerText;

    const productPrice = card.parentNode.childNodes[3].childNodes[7].innerText;

    // CREATING LIST

    

    const li = document.createElement("li")

    li.innerText = productName + " - " + productPrice;

    // APPENDING ELEMENT
    
    rightSideContainer.appendChild(li);

    
    // ENABLE BUTTON

    const makePurchaseEnable = document.getElementById('make-purchase');

    makePurchaseEnable.removeAttribute('disabled');

    
    //const price = 

    const productPriceFloat = parseFloat(productPrice);

    total=total+productPriceFloat;

    const totalPriceSpan = document.getElementById('total-price-span');

    totalPriceSpan.innerText= total+" TK";

    if(total>=200){

        document.getElementById('coupon-input-enable').removeAttribute('disabled');
        document.getElementById('coupon-button-enable').removeAttribute('disabled');

    }





}




function applyCoupon(){

const inputCoupon = document.getElementById('coupon-input-enable');
const inputCouponString = inputCoupon.value;

if(inputCouponString==="SELL200"){

    discount=total*0.2;

    grandTotal = total - discount;


const discountPrice =   document.getElementById('discount-span');

discountPrice.innerText=discount + " TK";



const grandTotalSpan =   document.getElementById('total-span');

grandTotalSpan.innerText=grandTotal + " TK";











}





}
