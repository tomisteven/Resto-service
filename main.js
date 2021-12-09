import {
    Hamburguesa
} from "./hamburguesa.js";

const $pedido = document.getElementById('pedido');
let $total = document.createElement("h2")

//concatenar pedido dependiendo el click




const pedirComida = document.querySelectorAll('.pedirComida')
let precioPedido = [];
let arrayPedido = [];
let array = []
let paraconfirmar = []
pedirComida.forEach(pedir => {
    pedir.addEventListener('click', function pedidos(e) {
        console.log(e);
        let TEXTO = pedir.getAttribute('data-producto');



        //agregar pedido a un array

        if (arrayPedido.includes(TEXTO)) {
            console.log('si esta');
            array.push(TEXTO)
            console.log("repetidos", array);
            //contar cantidad de pedidos repetidos
            let comida = array.filter(comida => comida === TEXTO)
            let $li = document.getElementById(TEXTO)
            paraconfirmar.push(`${comida.length+1} ${TEXTO}`)
            $li.textContent = `${comida.length+1} ${TEXTO}`
            $pedido.appendChild($li);
        } else {
            console.log('no esta');
            arrayPedido.push(TEXTO);
            let li = document.createElement('li');
            li.classList.add('li');
            li.id = `${TEXTO}`
            
            li.innerHTML = `1 ${TEXTO}`;
            $pedido.appendChild(li);

        }
        
        
        console.log(arrayPedido);

        //verificar si el pedido esta en el array


        let attributePrecio = pedir.getAttribute('data-precio');
        let precio = parseInt(attributePrecio);
        precioPedido.push(precio);
        //console.log(precioPedido);

        let total = precioPedido.reduce((a, b) => a + b, 0);
        console.log(total);
        $total.innerHTML = `Total: $ ${total}`;
        $total.style.marginTop = '20px';
        $pedido.appendChild($total);

        //boton confirmar pedido
        const $confirmar = document.getElementById('confirmar').addEventListener('click', function () {
            //extraer del array de pedidos los unicos elementos que coinciden 

            //eliminar repetidos de array 
            let unico = paraconfirmar.filter((item, index) => paraconfirmar.indexOf(item) === index);
            console.log(unico);
            console.log(paraconfirmar)
            //console.log(paraconfirmar);
             swal("Pedido Realizado", `${unico.join(", ") }`, "success"); 
            

            //limpiar array
            arrayPedido = [];
            precioPedido = [];
            
            $pedido.innerHTML = '';
            $total.innerHTML = '';

        })

    })
    
})

//boton para resetear el pedido
document.getElementById("reseteo").addEventListener('click', function resetear () {
    window.location.reload();
})

const $hamburguesa = document.getElementById('hamburguesa').addEventListener('click', () => {
    swal("Buena Eleccion!", "Ahora solo tenes que elegir tus condimentos para completar tu Hamburguesa!!", "success");
    
    
    const $pedir = document.getElementById('pedir');
    const $banner = document.getElementById('banner');
    const banerHamburguer = document.createElement('h2');
    banerHamburguer.innerHTML = "Arma tu Hamburguesa a Gusto...";
    $banner.appendChild(banerHamburguer);

    $pedir.innerHTML = ""
    $pedir.innerHTML = Hamburguesa()



    //***************************************************************************************** */
    //seccion hamburguesa 
    let precioPedido = []; //array para guardar los precios de los pedidos
    let arrayPedido = []; //array de pedidos
    let array = [] //array para verificar si el pedido esta repetido
    let paraconfirmar = [] //
    const $pedido = document.getElementById('pedido');
    const $pedirHamburguesa = document.querySelectorAll(".pedirComida")
    $pedirHamburguesa.forEach(el => {
        el.addEventListener('click', (e) => {
            let TEXTO = el.getAttribute('data-producto');
            console.log(
                TEXTO
            );

            //agregar pedido a un array

            if (arrayPedido.includes(TEXTO)) {

                console.log('si esta');
                array.push(TEXTO)
                console.log(array, "--Repetidos");
                //contar cantidad de pedidos repetidos
                let comida = array.filter(comida => comida === TEXTO)
                let $li = document.getElementById(TEXTO)
                paraconfirmar.push(`${comida.length+1} ${TEXTO}s`)
                $li.innerHTML = `${comida.length+1} ${TEXTO}s`
                $pedido.appendChild($li);

            } else {
                console.log('no esta');
                arrayPedido.push(TEXTO);
                let li = document.createElement('li');
                li.classList.add('li');
                li.id = `${TEXTO}`
                li.innerHTML = `1 ${TEXTO}`;
                $pedido.appendChild(li);

            }


            //verificar si el pedido esta en el array


            let attributePrecio = el.getAttribute('data-precio');
            let precio = parseInt(attributePrecio);
            precioPedido.push(precio);
            //console.log(precioPedido);

            let total = precioPedido.reduce((a, b) => a + b, 0);
            console.log(total);
            $total.innerHTML = `Total: $ ${total}`;
            $total.style.marginTop = '20px';
            $pedido.appendChild($total);

            //boton confirmar pedido 
            const $confirmar = document.getElementById('confirmar').addEventListener('click', function () {
                let unico = paraconfirmar.filter((item, index) => paraconfirmar.indexOf(item) === index);
                //console.log(paraconfirmar);
                swal("Pedido Realizado", `${unico.join(", ")}`, "success");
                

                //limpiar array
                arrayPedido = [];
                precioPedido = [];

                $pedido.innerHTML = '';
                $total.innerHTML = '';
                

            })

        })
    })





})