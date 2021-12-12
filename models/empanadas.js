import { empanadas } from "../ingredientes.js"


export function Empanadas() {
    return `
    
    <button class="pedirComida" data-precio="${empanadas.precios[0]}"  data-producto="${empanadas.ingredientes[0]}">
    ${empanadas.ingredientes[0]}
    <br>
    <br>
    <img class="img-hamburgesa" src="./img/QueArmar/empanadas/${empanadas.ingredientes[0]}.png" alt="">
    </button>
    <button class="pedirComida" data-precio="${empanadas.precios[1]}"  data-producto="${empanadas.ingredientes[1]}"> ${empanadas.ingredientes[1]}
    <br>
    <br>
    <img class="img-hamburgesa" src="./img/QueArmar/empanadas/${empanadas.ingredientes[1]}.png" alt="">
</button>
<button class="pedirComida" data-precio="${empanadas.precios[2]}"  data-producto="${empanadas.ingredientes[2]}"> ${empanadas.ingredientes[2]}
<br>
<br>
    <img class="img-hamburgesa" src="./img/QueArmar/empanadas/${empanadas.ingredientes[2]}.png" alt="">
</button>
<button class="pedirComida" data-precio="${empanadas.precios[3]}"  data-producto="${empanadas.ingredientes[3]}"> ${empanadas.ingredientes[3]}
    <br>
    <br>
    <img class="img-hamburgesa" src="./img/QueArmar/empanadas/${empanadas.ingredientes[3]}.png" alt="">
</button>
<button class="pedirComida" data-precio="${empanadas.precios[4]}"  data-producto="${empanadas.ingredientes[4]}"> ${empanadas.ingredientes[4]}
    <br>
    <br> 
    <img class="img-hamburgesa"src="./img/QueArmar/empanadas/${empanadas.ingredientes[4]}.png" alt="">
</button>
<button class="pedirComida" data-precio="${empanadas.precios[5]}"  data-producto="${empanadas.ingredientes[5]}"> ${empanadas.ingredientes[5]} 
    <br>
    <br>
    <img class="img-hamburgesa" src="./img/QueArmar/empanadas/${empanadas.ingredientes[5]}.png"" alt="">
</button>
<button class="pedirComida" data-precio="${empanadas.precios[6]}"  data-producto="${empanadas.ingredientes[6]}"> ${empanadas.ingredientes[6]}
    <br>
    <br>
    <img class="img-hamburgesa" src="./img/QueArmar/empanadas/${empanadas.ingredientes[6]}.png" alt="">
</button>
<button class="pedirComida" data-precio="${empanadas.precios[7]}"  data-producto="${empanadas.ingredientes[7]}"> ${empanadas.ingredientes[7]}
    <br>
    <br>
    <img class="img-hamburgesa" src="./img/QueArmar/empanadas/${empanadas.ingredientes[7]}.png" alt="">
</button>
    
    `
}