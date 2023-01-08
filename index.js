let food = null;
let drink = null;
let dessert = null;

const phone = 5511999999999;

let msg = ``;

const c1 = {name:"Frango Yin Yang", price:14.90};
const c2 = {name:"Carne Yin Yang", price:20.90};
const c3 = {name:"Peixe Yin Yang", price:22.90};

const b1 = {name:"Coquinha gelada", price:5.90};
const b2 = {name:"Guaraná gelado", price:5.50};
const b3 = {name:"Suquinho gelado", price:6.90};

const s1 = {name:"Pudim", price:9.90};
const s2 = {name:"Sorvete", price:11.90};
const s3 = {name:"Mousse", price:8.90};

function cliqueFood(c) {
    document.getElementsByClassName("food1")[0].classList.remove("selected");
    document.getElementsByClassName("food2")[0].classList.remove("selected");
    document.getElementsByClassName("food3")[0].classList.remove("selected");
    document.getElementsByClassName("food1")[1].classList.remove("checked");
    document.getElementsByClassName("food2")[1].classList.remove("checked");
    document.getElementsByClassName("food3")[1].classList.remove("checked");


    document.getElementsByClassName(c)[0].classList.add("selected");
    document.getElementsByClassName(c)[1].classList.add("checked");
    
    if (c == "food1")
        food = c1;
    if (c == "food2")
        food = c2;
    if (c == "food3")
        food = c3;

    checkAll();
  };

  function cliqueDrink(c) {
    document.getElementsByClassName("drink1")[0].classList.remove("selected");
    document.getElementsByClassName("drink2")[0].classList.remove("selected");
    document.getElementsByClassName("drink3")[0].classList.remove("selected");
    document.getElementsByClassName("drink1")[1].classList.remove("checked");
    document.getElementsByClassName("drink2")[1].classList.remove("checked");
    document.getElementsByClassName("drink3")[1].classList.remove("checked");


    document.getElementsByClassName(c)[0].classList.add("selected");
    document.getElementsByClassName(c)[1].classList.add("checked");

    if (c == "drink1")
        drink = b1;
    if (c == "drink2")
        drink = b2;
    if (c == "drink3")
        drink = b3;

    checkAll();
  };

  function cliqueDessert(c) {
    document.getElementsByClassName("dessert1")[0].classList.remove("selected");
    document.getElementsByClassName("dessert2")[0].classList.remove("selected");
    document.getElementsByClassName("dessert3")[0].classList.remove("selected");
    document.getElementsByClassName("dessert1")[1].classList.remove("checked");
    document.getElementsByClassName("dessert2")[1].classList.remove("checked");
    document.getElementsByClassName("dessert3")[1].classList.remove("checked");


    document.getElementsByClassName(c)[0].classList.add("selected");
    document.getElementsByClassName(c)[1].classList.add("checked");

    if (c == "dessert1")
        dessert = s1;
    if (c == "dessert2")
        dessert = s2;
    if (c == "dessert3")
        dessert = s3;
    
    checkAll();
  };


  function checkAll() {
    if (food && drink && dessert){
        document.getElementById("order").classList.remove("locked");
        document.getElementById("order").removeAttribute("disabled");
        document.getElementById("order").innerHTML = "Fechar pedido";
  }
}

function sendOrder() {

    const total = parseFloat(food.price + drink.price + dessert.price).toFixed(2);
    document.getElementById("foodName").innerHTML = `${food.name}`;
    document.getElementById("foodValue").innerHTML = `R$ ${parseFloat(food.price).toFixed(2)}`;
    document.getElementById("drinkName").innerHTML = `${drink.name}`;
    document.getElementById("drinkValue").innerHTML = `R$ ${parseFloat(drink.price).toFixed(2)}`;
    document.getElementById("dessertName").innerHTML = `${dessert.name}`;
    document.getElementById("dessertValue").innerHTML = `R$ ${parseFloat(dessert.price).toFixed(2)}`;
    document.getElementById("total").innerHTML = `<b>R$ ${total}</b>`;

    document.getElementById("white").style.visibility = "visible"
    document.getElementById("green").style.visibility = "visible"

    msg = `Olá, gostaria de fazer o pedido: \n - Prato: ${food.name} \n 
        - Bebida: ${drink.name} \n - Sobremesa: ${dessert.name} \n Total: R$ ${total}`;
}

function cancelOrder() {
    document.getElementById("white").style.visibility = "hidden"
    document.getElementById("green").style.visibility = "hidden"
}

function confirmOrder() {

    const name = window.prompt("Por favor, digite o seu nome completo:");
    const address = window.prompt("Agora o seu endereço para entrega:");
    
    msg = encodeURIComponent(msg + `\n\nNome: ${name}\nEndereço: ${address}`);
    
    location.href=`https://wa.me/${phone}?text=${msg}`
}