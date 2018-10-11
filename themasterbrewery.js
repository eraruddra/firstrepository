function myFunction() {
    var popup = document.getElementById("popdata");
    popup.classList.toggle("show");
}
function function2() {
    var offers = document.getElementById("offermenu")
    offers.className = "view"
    setTimeout(function(){ offers.className = offers.className.replace("view", ""); }, 3000);
}
var mocktails = [
    {
        name: "Virgin Mary",
        base: "fruit"
    },
    {
        name: "Classic Mojito",
        base: "lemonade"
    },
    {
        name: "Hurricane Mocktail",
        base: "fruit-lime"
    },
    {
        name: "Bella Bellini",
        base: "ice-tea"
    },
]
var cocktails = [
    {
        name: "Martini",
        base: "gin"
    },
    {
        name: "Bloody Mary",
        base: "vodka"
    },
    {
        name: "Margarita",
        base: "tequila"
    },
    {
        name: "Gimlet",
        base: "gin"
    },
]
var alldrinks= [

{
    name:"Virgin Mary",
    type: "mocktail"
},

{
    name: "classic mojito",
    type:"mocktail"
},
{
    name:"hurricane mocktail",
    type:"mocktail"
},
{
    name:"bella belini",
    type:"mocktail"
},
{
    name:"martini",
    type:"cocktail"
},
{
    name:"bloody mary",
    type:"cocktail"
},
{
    name:"margarita",
    type:"cocktail"
},
{
    name:"gimlet",
    type:"cocktail"
}
]
var orirginal_array = cocktails.slice();


function generateHTML() {
    elem = "";
    mocktails.forEach(function(v,i) {
            elem += `<div class="new">`;
            elem += `<div>${v,name}</div>`;
            elem +=`<button id="addon${i}" onclick="screen()">+ ${v.name} with base ${v.base}</button><br>`; 
            elem += `</div>`;
    });
        list1.innerHTML = elem;
    }
    generateHTML();
function screen() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  var cartpop = [];
  console.log("cartpop");
  function cartmenu() {
    //   document.getElementById("cart")
    //   console.log("cartpop")
    cart.style.display = "flex";
  }
  function closeCart(){
      cart.style.display = "none";
  }
  var orirginal_array = alldrinks.slice();
function alldrink(){
    elem="";
    alldrinks.forEach(function(v,i){
        elem +=  `<div ="finalcart">`;
        elem +=  `<div>${v.name}</div>`;
        elem +=  `<input type="number" id="quantity">`;
        elem +=  `<div>${v.type}</div>`;
        elem +=  `</div>`;
    });
    array.innerHTML = elem;
}
alldrink();

function added(){
    elem="";
    }
)   
}