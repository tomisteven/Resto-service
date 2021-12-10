import { hamburguesa } from "./ingredientes.js"


export function Hamburguesa() {
    return `
    
    <button class="pedirComida" data-precio="${hamburguesa.precios[0]}"  data-producto="Queso">
    ${hamburguesa.ingredientes[0]}
    <br>
    <br>
    <img class="img-hamburgesa" src="./img/QueArmar/hamburguesa/${hamburguesa.ingredientes[0]}.png" alt="">
    </button>
    <button class="pedirComida" data-precio="${hamburguesa.precios[1]}"  data-producto="Carne"> ${hamburguesa.ingredientes[1]}
    <br>
    <br>
    <img class="img-hamburgesa" src="./img/QueArmar/hamburguesa/${hamburguesa.ingredientes[1]}.png" alt="">
</button>
<button class="pedirComida" data-precio="${hamburguesa.precios[2]}"  data-producto="Huevo"> ${hamburguesa.ingredientes[2]}
<br>
<br>
    <img class="img-hamburgesa" src="./img/QueArmar/hamburguesa/${hamburguesa.ingredientes[2]}.png" alt="">
</button>
<button class="pedirComida" data-precio="${hamburguesa.precios[3]}"  data-producto="Lechuga"> ${hamburguesa.ingredientes[3]}
    <br>
    <br>
    <img class="img-hamburgesa" src="./img/QueArmar/hamburguesa/${hamburguesa.ingredientes[3]}.png" alt="">
</button>
<button class="pedirComida" data-precio="${hamburguesa.precios[4]}"  data-producto="Tomate"> ${hamburguesa.ingredientes[4]}
    <br>
    <br> 
    <img class="img-hamburgesa"src="./img/QueArmar/hamburguesa/${hamburguesa.ingredientes[4]}.png" alt="">
</button>
<button class="pedirComida" data-precio="${hamburguesa.precios[5]}"  data-producto="Cebolla"> ${hamburguesa.ingredientes[5]} 
    <br>
    <br>
    <img class="img-hamburgesa" src="./img/QueArmar/hamburguesa/${hamburguesa.ingredientes[5]}.png"" alt="">
</button>
<button class="pedirComida" data-precio="${hamburguesa.precios[6]}"  data-producto="Pepinillos"> ${hamburguesa.ingredientes[6]}
    <br>
    <br>
    <img class="img-hamburgesa" src="./img/QueArmar/hamburguesa/${hamburguesa.ingredientes[6]}.png" alt="">
</button>
<button class="pedirComida" data-precio="${hamburguesa.precios[7]}"  data-producto="Barbacoa"> ${hamburguesa.ingredientes[7]}
    <br>
    <br>
    <img class="img-hamburgesa" src="./img/QueArmar/hamburguesa/${hamburguesa.ingredientes[7]}.png" alt="">
</button>
    
    `
}

