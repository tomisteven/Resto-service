import { postres } from "./ingredientes.js"


export function Postres() {
    return `
    
    <button class="pedirComida" data-precio="${postres.precios[0]}"  data-producto="${postres.ingredientes[0]}">
    ${postres.ingredientes[0]}
    <br>
    <br>
    <img class="img-hamburgesa" src="./img/QueArmar/postres/${postres.ingredientes[0]}.png" alt="">
    </button>
    <button class="pedirComida" data-precio="${postres.precios[1]}"  data-producto="${postres.ingredientes[1]}"> ${postres.ingredientes[1]}
    <br>
    <br>
    <img class="img-hamburgesa" src="./img/QueArmar/postres/${postres.ingredientes[1]}.png" alt="">
</button>
<button class="pedirComida" data-precio="${postres.precios[2]}"  data-producto="${postres.ingredientes[2]}"> ${postres.ingredientes[2]}
<br>
<br>
    <img class="img-hamburgesa" src="./img/QueArmar/postres/${postres.ingredientes[2]}.png" alt="">
</button>
<button class="pedirComida" data-precio="${postres.precios[3]}"  data-producto="${postres.ingredientes[3]}"> ${postres.ingredientes[3]}
    <br>
    <br>
    <img class="img-hamburgesa" src="./img/QueArmar/postres/${postres.ingredientes[3]}.png" alt="">
</button>
<button class="pedirComida" data-precio="${postres.precios[4]}"  data-producto="${postres.ingredientes[4]}"> ${postres.ingredientes[4]}
    <br>
    <br> 
    <img class="img-hamburgesa"src="./img/QueArmar/postres/${postres.ingredientes[4]}.png" alt="">
</button>
<button class="pedirComida" data-precio="${postres.precios[5]}"  data-producto="${postres.ingredientes[5]}"> ${postres.ingredientes[5]} 
    <br>
    <br>
    <img class="img-hamburgesa" src="./img/QueArmar/postres/${postres.ingredientes[5]}.png"" alt="">
</button>
<button class="pedirComida" data-precio="${postres.precios[6]}"  data-producto="${postres.ingredientes[6]}"> ${postres.ingredientes[6]}
    <br>
    <br>
    <img class="img-hamburgesa" src="./img/QueArmar/postres/${postres.ingredientes[6]}.png" alt="">
</button>
<button class="pedirComida" data-precio="${postres.precios[7]}"  data-producto="${postres.ingredientes[7]}"> ${postres.ingredientes[7]}
    <br>
    <br>
    <img class="img-hamburgesa" src="./img/QueArmar/postres/${postres.ingredientes[7]}.png" alt="">
</button>
    
    `
}
