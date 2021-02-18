// remove buttons
var removeButtons =  document.getElementsByClassName('btn-remove');
for (var i = 0; i < removeButtons.length; i++) {
    var removeButton = removeButtons[i];
    removeButton.addEventListener('click', removeItem)
 }
function removeItem(e) {
    var Button = e.target
    console.log(Button)
    Button.parentNode.parentNode.parentNode.remove()
    totalUpdate()
}


//cart total update
function totalUpdate() {
   var itemContainer = document.getElementsByClassName('cart-container')[0]
   var itemRows = itemContainer.getElementsByClassName('item-row')
   var total = 0
   for (var i = 0; i < itemRows.length; i++) {
        var itemRow = itemRows[i]
        //updating (item price)
        var itemPrice = itemRow.getElementsByClassName('item-price')[0]
        var price = itemPrice.getElementsByClassName('price')[0]
        //updating (item quantity)
        var itemQuantity = itemRow.getElementsByClassName('item-quantity')[0]
        var quantity = itemQuantity.getElementsByClassName('quantity-input')[0]
        console.log(price,quantity)
        // updating (taking the mod value)
        var priceMod = parseFloat(price.innerText.replace("$",""))
        var quantityMod = quantity.value
        console.log(priceMod,quantityMod)
        total = total + (priceMod*quantityMod)
        console.log(total)
   }
   // Total update
   document.getElementsByClassName('total')[0].innerText ="$" + total
}


//quantity Update
var quantityInputs = document.getElementsByClassName('quantity-input')
for ( var i = 0; quantityInputs.length; i++) {
    var quantityInput = quantityInputs[i]
    quantityInput.addEventListener('change', updateQuantity)
}

function updateQuantity(e) {
    var quantityInput = e.target
    if (isNaN(quantityInput.value) || quantityInput.value <= 0) {
        quantityInput.value = 1
    }
    totalUpdate()
}

// add to cart
var addToCartButtons = document.getElementsByClassName('btn-add-to-cart') 
for (var i = 0; i < addToCartButtons.length; i++) {
    var addToCartButton = addToCartButtons[i]
    addToCartButton.addEventListener('click',addToCart)
}

function addToCart(e) {
    var addToCartButton =e.target
    console.log(addToCartButton)
    var itemBox = addToCartButton.parentElement.parentElement
    console.log(itemBox)
    //to add item name
    var item= itemBox.getElementsByClassName('book-box-images')[0]
    var itemName = item.getElementsByClassName('item-name')[0].innerText
    // to add item image
    var itemImage = item.getElementsByClassName('book-box-image')[0].src
    // to add item price
    var priceSec = itemBox.getElementsByClassName('book-box-des')[0]
    var itemPrice = priceSec.getElementsByClassName('item-price')[0].innerText
    console.log(itemName, itemPrice, itemImage)
    addItemToCart(itemName, itemPrice, itemImage) 
    totalUpdate()
}
function addItemToCart(itemName, itemPrice, itemImage) {
    var cartItemRow = document.createElement('div')
    cartItemRow.classList.add('item-row')
    var cartItems = document.getElementsByClassName('cart-container')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-name')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText === itemName) {
            alert("already exist")
            return
        }
    }
    var cartRowContent = ` 
        <div class="item-name">
            <img class="cart-item-image" src="${itemImage}">
            <p class="cart-item-name">${itemName}</p>
        </div>
            <div class="item-price">
                <span class="price">${itemPrice}</span>
            </div>
            <div class="item-quantity">
                <input class="quantity-input" type="number" value="1">
                <p class="button-remove">
                <button class="btn-remove">Remove</button>
                </p>
        </div> `
        cartItemRow.innerHTML = cartRowContent
    cartItems.append(cartItemRow)
    cartItemRow.getElementsByClassName('btn-remove')[0].addEventListener('click', removeItem)
    cartItemRow.getElementsByClassName('quantity-input')[0].addEventListener('change', updateQuantity)
}

//Purchase Alert
document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseAlert)
function purchaseAlert() {
    var x = document.getElementsByClassName('cusName')[0].value
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    else {
        alert("Dear " + document.getElementsByClassName('cusName')[0].value + " Your total bill is " + document.getElementsByClassName('total')[0].innerText)
    }  
}

// Changing font size
var min=20;
var max=40;
function increase() {
   var element = document.getElementsByTagName('*');
   for(i=0;i<element.length;i++) {
      if(element[i].style.fontSize) {
         var s = parseInt(element[i].style.fontSize.replace("px",""));
      } else {
         var s = 20;
      }
      if(s!=max) {
         s += 1;
      }
      element[i].style.fontSize = s+"px"
   }
}
function decrease() {
   var element = document.getElementsByTagName('*');
   for(i=0;i<element.length;i++) {
      if(element[i].style.fontSize) {
         var s = parseInt(element[i].style.fontSize.replace("px",""));
      } else {
         var s = 20;
      }
      if(s!=min) {
         s -= 1;
      }
      element[i].style.fontSize = s+"px"
   }   
}
