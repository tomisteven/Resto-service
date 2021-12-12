import {
    empanadasController
} from "./controllers/controllerEmpanadas.js";
import {
    HamburguesaController
} from "./controllers/controllerHamburguesa.js";
import {
    controllerPizza
} from "./controllers/controllerPizza.js";
import {
    pedidoPrincipal
} from "./controllers/pedidoPrincipal.js";
import {
    postresControllers
} from "./controllers/controllerPostres.js";


// Inicializamos el controlador de pedido general
pedidoPrincipal()
//boton para resetear el pedido
//seccion hamburguesa
HamburguesaController()
//seccion de pizza 
controllerPizza()
//empanadas
empanadasController()
//postres
postresControllers()

//boton para resetear el pedido
document.getElementById("reseteo").addEventListener('click', function resetear() {
    swal({
            title: "Estas seguro?",
            text: "Se borrara todo el pedido",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("Pedido borrado!", {
                    icon: "success",
                })
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                swal("Genial !! Sigue agregando productos al pedido");
            }
        });
})
document.getElementById("info").addEventListener('click', function info() {
    swal({
        title: "Como pedir?",
        text: "Para pedir un producto, debe seleccionarlo en la seccion correspondiente y luego presionar el boton de agregar al pedido, luego presionar el boton de confirmar pedido para finalizar el pedido",
        icon: "info",
        button: "Aceptar",
    });
})