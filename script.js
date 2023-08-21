
let total=0;
let discount=0;
let grandTotal=0;
let productCount = 0;

function cardClick(card) {

//   const rightSideContainer = document.getElementById('before-right-side-container');
    const rightSideContainer = document.getElementById('ordered-list');


    // GETTING PRODUCTS NAMES AND PRICES
    

    const productName = card.childNodes[5].innerText;
    const productPrice = card.childNodes[7].innerText;
   

    // CREATING LIST

    

    const li = document.createElement("li")

    productCount++;
    li.innerText = productCount +". " + productName; //+ " - " + productPrice;

    // APPENDING ELEMENT
    
    rightSideContainer.appendChild(li);

    
    // ENABLE BUTTON

    const makePurchaseEnable = document.getElementById('make-purchase');

    makePurchaseEnable.removeAttribute('disabled');

    
    //const price = 

    const productPriceFloat = parseFloat(productPrice);

    total=total+productPriceFloat;

    const totalPriceSpan = document.getElementById('total-price-span');

    totalPriceSpan.innerText= total.toFixed(2)+" TK";

    grandTotal = total;
    
    const grandTotalSpan =   document.getElementById('total-span');

    grandTotalSpan.innerText=grandTotal.toFixed(2) + " TK";

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

    discountPrice.innerText=discount.toFixed(2) + " TK";



    const grandTotalSpan =   document.getElementById('total-span');

    grandTotalSpan.innerText=grandTotal.toFixed(2) + " TK";








    }





}


function goHome(){
    window.location.reload();
} 
