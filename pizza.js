import { pizza } from "./ingredientes.js"


export function Pizza() {
    return `
    
    <button class="pedirComida" data-precio="${pizza.precios[0]}"  data-producto="${pizza.ingredientes[0]}">
    ${pizza.ingredientes[0]}
    <br>
    <br>
    <img class="img-hamburgesa" src="./img/QueArmar/pizza/${pizza.ingredientes[0]}.png" alt="">
    </button>
    <button class="pedirComida" data-precio="${pizza.precios[1]}"  data-producto="${pizza.ingredientes[1]}"> ${pizza.ingredientes[1]}
    <br>
    <br>
    <img class="img-hamburgesa" src="./img/QueArmar/pizza/${pizza.ingredientes[1]}.png" alt="">
</button>
<button class="pedirComida" data-precio="${pizza.precios[2]}"  data-producto="${pizza.ingredientes[2]}"> ${pizza.ingredientes[2]}
<br>
<br>
    <img class="img-hamburgesa" src="./img/QueArmar/pizza/${pizza.ingredientes[2]}.png" alt="">
</button>
<button class="pedirComida" data-precio="${pizza.precios[3]}"  data-producto="${pizza.ingredientes[3]}"> ${pizza.ingredientes[3]}
    <br>
    <br>
    <img class="img-hamburgesa" src="./img/QueArmar/pizza/${pizza.ingredientes[3]}.png" alt="">
</button>
<button class="pedirComida" data-precio="${pizza.precios[4]}"  data-producto="${pizza.ingredientes[4]}"> ${pizza.ingredientes[4]}
    <br>
    <br> 
    <img class="img-hamburgesa"src="./img/QueArmar/pizza/${pizza.ingredientes[4]}.png" alt="">
</button>
<button class="pedirComida" data-precio="${pizza.precios[5]}"  data-producto="${pizza.ingredientes[5]}"> ${pizza.ingredientes[5]} 
    <br>
    <br>
    <img class="img-hamburgesa" src="./img/QueArmar/pizza/${pizza.ingredientes[5]}.png"" alt="">
</button>
<button class="pedirComida" data-precio="${pizza.precios[6]}"  data-producto="${pizza.ingredientes[6]}"> ${pizza.ingredientes[6]}
    <br>
    <br>
    <img class="img-hamburgesa" src="./img/QueArmar/pizza/${pizza.ingredientes[6]}.png" alt="">
</button>
<button class="pedirComida" data-precio="${pizza.precios[7]}"  data-producto="${pizza.ingredientes[7]}"> ${pizza.ingredientes[7]}
    <br>
    <br>
    <img class="img-hamburgesa" src="./img/QueArmar/pizza/${pizza.ingredientes[7]}.png" alt="">
</button>
    
    `
}
