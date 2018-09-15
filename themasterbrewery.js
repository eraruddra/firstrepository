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
function generateHTML2() {
    elem = "";
    cocktails.forEach(function(v,i) {
            elem += `<div class="newone">`;
            elem += `<div>${v,name}</div>`;
            elem +=`<button id="addon${i}" onclick="screen()">+ ${v.name} with base ${v.base}</button><br>`; 
            elem += `</div>`;
    });
        list2.innerHTML = elem;
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
  function generatecart (){
      elem ="" ;
        mocktails.forEach(function(v,i){
                elem += `<div class="lm">`;
                elem += `<div>${v.name}</div>`;
                elem += `<div>${v.base}</div>`;
                elem += `</div>`
        });
        document.getElementById("array").innerHTML=elem;
    }
    generatecart();

    function generatecart2 (){
        elem ="" ;
          cocktails.forEach(function(v,i){
                  elem += `<div class="lmo">`;
                  elem += `<div>${v.name}</div>`;
                  elem += `<div>${v.base}</div>`;
                  elem += `</div>`
          });
          document.getElementById("array2").innerHTML=elem;
      }
      generatecart2();
      var original_array = mocktails.slice();
