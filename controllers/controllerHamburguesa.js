import {
    Hamburguesa
} from "../hamburguesa.js";

export function HamburguesaController(){
    let $total = document.createElement("h2")

    const $hamburguesa = document.getElementById('hamburguesa').addEventListener('click', () => {
        swal("Hamburguesa!", "Ahora solo tenes que elegir tus condimentos para completarla", "success");
        
        
        const $pedir = document.getElementById('pedir');
        const $banner = document.getElementById('banner');
        
        $banner.innerText = "Arma tu Hamburguesa a Gusto...";
        
    
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
                    swal("Pedido Realizado", `${unico.join(", ")} `+ "Son " + "$" +total, "success");
                    
    
                    //limpiar array
                    arrayPedido = [];
                    precioPedido = [];
    
                    $pedido.innerHTML = '';
                    $total.innerHTML = '';
                    
    
                })
    
            })
        })
    
    
    
    
    
    })
}
