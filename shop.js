let add = document.querySelectorAll(".btn-add");

let mince = document.querySelectorAll(".btn-mince");

let remove = document.querySelectorAll(".remove");

let favoris = document.querySelectorAll(".fa-heart");

let total = document.querySelector("valuePrice");
// test
// let quantity= document.querySelectorAll(".quantityValue");
//    for (let i = 0; i< quantity.length; i++) {
//         quantity[i].addEventListener("click",function(){
//             console.log('click');
//         })

//     }

//Add
for (let i = 0; i < add.length; i++) {
  let quantity = document.querySelectorAll(".quantityValue");
  add[i].addEventListener("click", function () {
    quantity[i].innerHTML++;
    Total();
  });
  // --
  mince[i].onclick = function () {
    if (quantity[i].innerHTML > 0) {
      quantity[i].innerHTML--;
    }
    Total();
  };
}
//remove
for (let i = 0; i < remove.length; i++) {
  let total = document.querySelector(".valuePrice");
  let quantity = document.querySelectorAll(".quantityValue");

  remove[i].addEventListener("click", function () {
    remove[i].parentElement.parentElement.remove();
    
    
    Total();
  });
}

//favoris
for (let i = 0; i < favoris.length; i++) {
  favoris[i].onclick = function () {
    favoris[i].classList.toggle("favoris");
  };
}

//Total

function Total() {
  let quantity = document.querySelectorAll(".quantityValue");
  let price = document.querySelectorAll(".priceValue");
  let total = document.querySelector(".valuePrice");
  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    sum += price[i].innerHTML * quantity[i].innerHTML;
  }
  return (total.innerHTML = sum);
}
