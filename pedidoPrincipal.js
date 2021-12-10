export function pedidoPrincipal(){

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
}
