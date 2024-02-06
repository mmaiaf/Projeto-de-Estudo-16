/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.
*/

let itens = [];

for(let item = 0; item < 10; item++) {
    itemName = prompt("Coloque o item" + (item+1))

    itens [item] = itemName
}

alert(itens[7])