var removeCartItem = document.getElementsByClassName(`btn-danger`)

for (var i = 0; i<removeCartItem.length; i++){
    var button = removeCartItem[i]
    button.addEventListener(`click`,function(event){
        var buttonclicked = event.target
        buttonclicked.parentElement.parentElement.remove()
        updateTotal()

    })
}
function updateTotal(){
    var cartItemContainer = document.getElementsByClassName(`cart-items`)[0]
    var cartRows = cartItemContainer.getElementsByClassName(`cart-row`)
    var total = 0
    for (var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName(`cart-price`)[0]
        var quantitiyElement =  cartRow.getElementsByClassName(`cart-quantity-input`)[0]
        var price = Number(priceElement.innerText.replace(`$`, ``))
        var quantity = quantitiyElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total *100) / 100
    document.getElementsByClassName(`cart-total-price`)[0].innerText = '$' + total
}

var quantityInputs = document.getElementsByClassName(`cart-quantity-input`)
for (var i = 0; i<quantityInputs.length; i++){
    var input = quantityInputs[i]
    input.addEventListener(`change`,quantityChanged)
}


function quantityChanged(event){
    var input = event.target
    if (isNaN(input.value) || input.value<=0){
        input.value = 1
    }
    updateTotal()

        
}
var addToCartButtons = document.getElementsByClassName(`shop-item-button`)
for (var i = 0; i< addToCartButtons.length; i++){
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
}
function addToCartClicked(event){
    var button = event.target;

    var shopItemDet = button.parentElement;
    var price = shopItemDet.children[0].innerText;
    var title = shopItemDet.parentElement.children[0].innerText;
    var img = shopItemDet.parentElement.children[1];
    var cartitems = document.getElementsByClassName(`cart-items`)[0];
    var row = document.createElement("div");
    row.classList.add("cart-row");
    cartitems.appendChild(row);
    
    var cartitem = document.createElement("div");
    cartitem.classList.add("cart-item");
    cartitem.classList.add("cart-column");
    
    var cartimg = document.createElement("img");
    cartimg.classList.add("cart-item-image");
    cartimg.src = img.src;
    cartimg.height = 100;
    cartimg.width = 100;

    var divtitle = document.createElement("span");
    divtitle.classList.add("cart-item-title");
    divtitle.innerText = title
    cartitem.appendChild(cartimg);
    cartitem.appendChild(divtitle);

    var divprice = document.createElement("span");
    divprice.classList.add("cart-price");
    divprice.classList.add("cart-column");
    divprice.innerText = price
    console.log(divprice)

    var divQuanity = document.createElement("div");
    divQuanity.classList.add("cart-quanity");
    divQuanity.classList.add("cart-column");
    

    var txt = document.createElement ("input");
    txt.classList.add("cart-quantity-input");
    txt.type= "Number"
    txt.value = 1
    txt.addEventListener(`change`,quantityChanged)
    divQuanity.appendChild(txt);
   

    
    var removebutton = document.createElement("button");
    removebutton.classList.add("btn");
    removebutton.classList.add("btn-danger");
    removebutton.innerText = "REMOVE"
    removebutton.type = "button";
    removebutton.addEventListener(`click`,function(event){
        var buttonclicked = event.target;
        buttonclicked.parentElement.parentElement.remove();
        updateTotal();
    });
    divQuanity.appendChild(removebutton);

    row.appendChild(cartitem);
    row.appendChild(divprice);
    row.appendChild(divQuanity);

    updateTotal();

}

var purchaseButton = document.getElementsByClassName("btn-purchase")[0]
 purchaseButton.addEventListener(`click`,function(event){
        var cartitems = document.getElementsByClassName("cart-items")[0];
        cartitems.innerHTML = ""
        updateTotal();
    });