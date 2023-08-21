
let total=0;

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

    console.log(total);

























}
