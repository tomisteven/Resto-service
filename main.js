import { empanadasController } from "./controllerEmpanadas.js";
import { HamburguesaController } from "./controllerHamburguesa.js";
import { controllerPizza } from "./controllerPizza.js";
import { pedidoPrincipal } from "./pedidoPrincipal.js";


// Inicializamos el controlador de pedido general
pedidoPrincipal()
//boton para resetear el pedido
//seccion hamburguesa
HamburguesaController()
//seccion de pizza 
controllerPizza()
//empanadas
empanadasController()

//boton para resetear el pedido
document.getElementById("reseteo").addEventListener('click', function resetear () {
    window.location.reload();
})