console.log("fucks sake")
// chrome.runtime.sendMessage({"title":name, "message":text}, function(response) {
  // console.log("response is " + response)
// });

function getCost(){
  var real_cost = "lol i messed up sry";

  var cost1 = document.getElementById("priceblock_ourprice")
  var cost2 = document.getElementById("priceblock_dealprice")
  var cost3 = document.getElementById("actualPriceValue")

  if(cost1 != null){
    real_cost = cost1.innerHTML
  }
  else if(cost2 != null){
    real_cost = cost2.innerHTML
  }
  else if (cost3 != null){
    real_cost = cost3
  }
  else{
    var cost4 = document.getElementsByClassName("offer-price")[0].innerHTML
    real_cost = cost4
  }
  return real_cost
}

// https://stackoverflow.com/questions/2155737/remove-css-class-from-element-with-javascript-no-jquery
function removeClassName(elem, name){
    var remClass = elem.className;
    var re = new RegExp('(^| )' + name + '( |$)');
    remClass = remClass.replace(re, '$1');
    remClass = remClass.replace(/ $/, '');
    elem.className = remClass;
}

function createDiv(real_cost, balance, color, right, top, text){
  if(real_cost != "lol i messed up sorry"){
    var div = document.createElement('div');
    var span = document.createElement('span');
    document.body.appendChild(div);
    div.appendChild( span );

    div.id = 'myDivId';
    div.style.position = 'fixed';
    div.style.top = top;
    div.style.right = right;
    div.style.width = '20%';
    div.style.height = '25%';

    div.style.backgroundColor = '#fff';
    div.style.border = "3px solid"
    div.style.borderColor = color
    div.style.opacity = '0.9'
    div.style.textAlign = 'center'
    div.style.zIndex = '2'

    span.innerHTML = text
    span.style.width = "70%"
    span.style.color = "#333"
    span.style.fontSize = '16px'
    span.style.height = "100%"
    span.style.margin = '0 auto'
    span.style.display = "inline-block"
    //set attributes for div
  }
}


function createImage(real_cost, balance, color, right, top, src){
  if(real_cost != "lol i messed up sorry"){
    var div = document.createElement('div');
    var img = document.createElement('img');
    document.body.appendChild(div);
    div.appendChild(img);

    div.id = 'myDivId';
    div.style.position = 'fixed';
    div.style.top = top;
    div.style.right = right;
    div.style.width = '10%';
    div.style.height = '30%';

    div.style.backgroundColor = '#fff';
    div.style.border = "3px solid"
    div.style.borderColor = color
    div.style.opacity = '0.9'
    div.style.textAlign = 'center'
    div.style.zIndex = '2'

    img.src = src
    img.style.width = "100%"
    img.style.color = "#333"
    img.style.fontSize = '16px'
    img.style.height = "100%"
    img.style.margin = '0 auto'
    img.style.display = "inline-block"

    // var buyBackground = document.getElementById("submit.buy-now")
    // removeClassName(buyBackground, "a-button-oneclick")
    // buyBackground.style.backgroundColor = "#aaa"
  }
}

chrome.storage.sync.get("balance", function(callback) {
  var real_cost = getCost().replace('$','')
  var balance = callback.balance
  console.log(real_cost)
  console.log(balance)
  var remaining_balance = (balance-real_cost).toString().substring(0,5)
  var productTitle = document.getElementById("productTitle").innerHTML

  var buyBackground = document.getElementById("submit.buy-now")
  removeClassName(buyBackground, "a-button-oneclick")
  buyBackground.style.backgroundColor = "#aaa"

  var buyButton = document.getElementById("submit.buy-now-announce")
  buyButton.innerHTML = "do u rly wanna tho"

  createImage(real_cost, balance,'#6AF5FF', '30%', '40%', "https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/1/11/Chibi_rem_by_nyphi-dae3j6n.png/revision/latest?cb=20170107005945")
  createDiv(real_cost, balance,'#E5D300', '20%', '80%', "Your balance will only be <b>$" + remaining_balance + "</b><br> you could spend that on food. You're broke")
  createDiv(real_cost, balance, '#f32f3e', '75%', '60%', "Just think what else you could buy instead of a stupid" + productTitle)
});
