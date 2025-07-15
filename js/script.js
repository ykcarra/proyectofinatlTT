const productos = [
    // PASEO 1(Palermo-Tour-Y-Vino)
    {id:"01",
     imagen:"imagenes/productos/micheile.jpg",
     alt:"Dos Copas de vino brindando",
     nombre:"Palermo: Tour y Vino",
     descripcion:"Degustaciones de exquisitos vinos argentinos,4 etiquetas de vinos de alta gama a cargo de sommeliers de basta experiencia.Previamente se realiza un walking tour en la zona de Palermo y alrededores. La cata estara acompañada de una degustación.",
     precio:30000,   
    },
    // PASEO 2(Circuito-heladerias)
    {id:"02",
     imagen:"imagenes/productos/mae.jpg",
     alt:"Tres cucuruchos de helado sobre un plato negro",
     nombre:"Circuito de heladerias",
     descripcion:"Buenos Aires se caracteriza por sus variadas opciones gastronomicas, y sus helados son muy famosos. Originarios de los primeros inmigrantes españoles e italianos que llegaron a la ciudad, hay distinguidas y variadas heladerias con los mas sabrosos sabores.",
     precio:15000,
    },
    // PASEO 3(Helitour-Buenos-Aires)
    {id:"03",
     imagen:"imagenes/productos/roman.jpg",
     alt:"Piloto de helicoptero sonriendo",
     nombre:"Helitour por Buenos Aires",
     descripcion:"Te llevamos a realizar un Helitour por la ciudad de Buenos Aires en uno de los helicopteros mas seguros y modernos que operan en el mundo.¿Queres recorrer los principales atractivos turisticos de la ciudad en un vuelo en helicoptero y en tan solo 35 minutos?",
     precio:50000,
    },
    // PASEO 4(Naturaleza-Interna)
    {id:"04",
     imagen:"imagenes/productos/yuliia.jpg",
     alt:"Rosas Blancas",
     nombre:"Naturaleza interna,viajar con otra mirada",
     descripcion:"Explora tus sentidos en un recorrido por el Rosedal, un lugar lleno de naturaleza y buena energia.En un espacio de bosques, rosas y lagos,podras descubrir un mundo de sentidos, conectar con aromas,colores y sensaciones.",
     precio:18000,},
    // PASEO 5(Buenos-Aires-Judia)
    {id:"05",
     imagen:"imagenes/productos/gustavo.jpg",
     alt:"Interior de un templo Judio",
     nombre:"Buenos Aires judia",
     descripcion:"Descubri la Plaza de la Memoria y el Templo de la Libertad.Explora la AMIA y el barrio de Once, hogar de la comunidad judia, donde puedes visitar sinagogas y disfrutar de su autentica cocina.Conoceremos el impresionante Gran Templo Paso.",
     precio:12000,
    },
    // PASEO 6(Amores-turbios)
    {id:"06",
     imagen:"imagenes/productos/jonathan.jpg",
     alt:"Pareja abrazandose delante de una puerta",
     nombre:"Amores turbios de la historia",
     descripcion:"Recorrido por Retiro donde develamos las historias de amores prohibidos,infidelidades, celos, venganza y traicion mas polemicos de los romances rioplatenses.Al final disfrutamos de un vino, musica y versos en una mansion de epoca.",
     precio:20000,
    },
    // PASEO 7(Estadios)
    {id:"07",
     imagen:"imagenes/productos/renato.jpg",
     alt:"Vista del costado del estadio de Boca",
     nombre:"Estadios y museo TOP",
     descripcion:"Este tour te lleva a conocer los templos mas emblematicos de futbol argentino La Bombonera y El Monumental y el Museo TOP.Una experiencia cargada de historia,cultura y pasion, ideal para fanaticos y curiosos por igual.Con guia y traslados incluido.",
     precio:32000,
    },
    // PASEO 8(MasterClass de Mate)
    {id:"08",
     imagen:"imagenes/productos/alexandre.jpg",
     alt:"Mujer tomando mate",
     nombre:"Masterclass de mate",
     descripcion:"En nuestra boutique descubriremos como se prepara esta famosa infusion,sus origenes, leyendas y procesos productivos de un icono latinoamericano.Vamos a maridar con pasteleria argentina y degustaremos yerbas de estacionamiento natural y blends de yerba mate.",
     precio:17000,
    },
    // PASEO 9(Buenos-Aires-Misteriosa)
    {id:"09",
     imagen:"imagenes/productos/iuliia.jpg",
     alt:"Vista de frente de un edificio de estilo gotico",
     nombre:"Buenos Aires misteriosa",
     descripcion:"Un paseo en bus contando historias de crimenes y leyendas urbanas, por los barrios de Monserrat,San Telmo, La Boca, Barracas, Constitucion y San cristobal.La visita es sobre el bus en los lugares donde transcurrieron las historias.",
     precio:16000,
    },
];

// Función de comparación para ordenar productos por ID de forma ascendente.
// Para usar con sort
function compararProductosPorIdAscendente(a, b) {
    if(a.id < b.id) {
        return 1;
    }
    if(a.id > b.id) {
        return -1;
    }
    return 0;
}

// Ordenar los productos por ID de forma descendente
productos.sort(compararProductosPorIdAscendente);

// Array para almacenar los productos en el carrito
let carrito = [];

// Agrega un producto al carrito o incrementa su cantidad si ya existe.
function agregarProductoAlCarrito(idProducto) {
        // Buscar si el producto ya está en el carrito
        let productoEnCarrito = null;
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].id === idProducto) {
            productoEnCarrito = carrito[i];
            break; // Salir del bucle una vez que se encuentra el producto
        }
    }

    if (productoEnCarrito) {
        // Si el producto ya está, incrementar la cantidad
        productoEnCarrito.cantidad++;
    } else {
        // Si no está, buscar el producto en el array 'productos' original
        let productoOriginal = null;
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].id === idProducto) {
                productoOriginal = productos[i];
                break; // Salir del bucle
            }
        }        
        
        // Añadir el producto al carrito con cantidad 1
        carrito.push({ ...productoOriginal, cantidad: 1 });
    }
    actualizarCarritoHTML(); // Actualizar la vista del carrito
}

// Maneja el evento de clic en los botones "Comprar".
function manejarClicComprar(evento) { 
    const boton = evento.target.closest(".btn-comprar");
    
    if (!boton) return; // Si no se hizo clic en nada relevante, salir
   
    const productoId = boton.dataset.id;
    agregarProductoAlCarrito(productoId);
    alert("Agregaste un paseo al carrito");   
}

// Agrega los productos del array 'productos' al DOM y configura los listeners de "Comprar".
function agregarProductos() {
    const divProductos = document.querySelector(".itemProductos");

    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];

        divProductos.insertAdjacentHTML("afterbegin",
            /*
            `
            <div class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="producto-contenido">
                    <h4>${producto.nombre}</h4>
                    <span>Precio: $ ${producto.precio}</span>
                    <button class="btn-comprar" type="button" data-id="${producto.id}">Agregar al carrito <i class="fa-solid fa-cart-plus"></i></button>
                </div>
            </div>
            `
            */
           `
           <div class="productoimgdesc">
                    <div>
                        <img src="${producto.imagen}" alt="${producto.alt}">
                    </div>
                    <h3>${producto.nombre}</h3>
                    <div class="descripcion">
                        <p>${producto.descripcion}</p>
                    </div>
                    <div class="precioproducto">
                        <p>$ ${producto.precio}</p>
                        <button class="btn-comprar" type="button" data-id="${producto.id}"> 
                            <span>Agregar al carrito <i class="fa-solid fa-cart-plus"></i></span>
                        </button>
                    </div>
                </div>
           `
        );
    }

    /*
    <div class="productoimgdesc">
                    <div>
                        <img src="${producto.imagen}" alt="${producto.alt}">
                    </div>
                    <h3>${producto.nombre}</h3>
                    <div class="descripcion">
                        <p>${producto.descripcion}
                        </p>

                    </div>
                    <div class="precioproducto">
                        <p>$ ${producto.precio}</p>
                        <button class="btn-comprar" type="button" data-id="${producto.id}">Agregar al carrito</button>
                    </div>
                </div>
    */
    // Delegación de eventos para los botones "Comprar"
    divProductos.addEventListener("click", manejarClicComprar); //handler
}

// Maneja el evento de clic en los botones de cantidad y eliminar del carrito.
function manejarClicCarrito(evento) {
    const target = evento.target;

    if (target.classList.contains("btn-cantidad") || target.classList.contains("btn-eliminar")) {
        const productoId = target.dataset.id;
        const accion = target.dataset.action;

        if (accion === "eliminar") {
            eliminarProductoDelCarrito(productoId);
        } else if (accion === "restar") {
            restarCantidadProducto(productoId);
        } else if (accion === "sumar") {
            sumarCantidadProducto(productoId);
        }
    }
}

// Actualiza el contenido HTML del carrito de compras basado en el array 'carrito'.
function actualizarCarritoHTML() {
    const carritoCompras = document.querySelector(".carritoCompras");

    if (!carritoCompras) {
        console.error("Error: No se encontró el contenedor con la clase 'CarritoCompras'. Asegúrate de que exista en tu HTML.");
        return;
    }

    // Limpiar el contenido actual del carrito y recrear la estructura base
    carritoCompras.innerHTML = `
        <h2>Tu Carrito de Paseos</h2>
        <ul class="lista-carrito"></ul>
        <p class="cantidad-carrito"></p>
        <p class="total-carrito"></p>
        <div class="pago">
            <button class="btn-comprar" onclick=pagar()>Continuar con el pago</button>
        </div>
    `;
    
    const listaCarrito = carritoCompras.querySelector(".lista-carrito");
    let totalPagar = 0;
    let cantidadProductosUnicos = 0;

    // Verificar si el carrito está vacío
    if (carrito.length === 0) {
        listaCarrito.innerHTML = "<p>El carrito está vacío.</p>";
    } else {
        for (let i = 0; i < carrito.length; i++) {
            const item = carrito[i];
            const li = document.createElement("li");
            li.innerHTML = `
                <div class="itemscompleto">
                <span>${item.nombre} - $${item.precio} x ${item.cantidad}</span>
                <div class="itemscarrito">
                    <button class="btn-cantidad" data-id="${item.id}" data-action="restar">-</button>
                    <button class="btn-cantidad" data-id="${item.id}" data-action="sumar">+</button>
                    <button class="btn-eliminar" data-id="${item.id}" data-action="eliminar">x</button>
                </div>
                </div>
            `;
            listaCarrito.appendChild(li);
            totalPagar += item.precio * item.cantidad;
            cantidadProductosUnicos++;
        }
    }

    // Mostrar el total a pagar y la cantidad de productos
    
    carritoCompras.querySelector(".cantidad-carrito").textContent = `Paseos en carrito: ${cantidadProductosUnicos}`;
    carritoCompras.querySelector(".total-carrito").textContent = `Total a pagar: $${totalPagar}`;

    // Configurar el Event Listener para los botones de cantidad y eliminar
    const nuevoListaCarrito = carritoCompras.querySelector(".lista-carrito");
    nuevoListaCarrito.addEventListener("click", manejarClicCarrito);
}

// Suma una unidad a la cantidad de un producto en el carrito.
function sumarCantidadProducto(idProducto) {
    let productoEnCarrito = null;

    // Buscar el producto en el carrito
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].id === idProducto) {
            productoEnCarrito = carrito[i];
            break;
        }
    }

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
        actualizarCarritoHTML(); // Actualizar la vista
    }
}

// Resta una unidad a la cantidad de un producto en el carrito.
function restarCantidadProducto(idProducto) {
    let productoEnCarrito = null;
    // Buscar el producto en el carrito
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].id === idProducto) {
            productoEnCarrito = carrito[i];
            break;
        }
    }

    if (productoEnCarrito) {
        productoEnCarrito.cantidad--;
        if (productoEnCarrito.cantidad <= 0) {
            eliminarProductoDelCarrito(idProducto); // Eliminar si la cantidad llega a 0
        } else {
            actualizarCarritoHTML(); // Solo actualizar si la cantidad aún es positiva
        }
    }
}

// Elimina completamente un producto del carrito.
function eliminarProductoDelCarrito(idProducto) {
    // Reconstruir el array carrito sin el producto a eliminar
    const nuevoCarrito = [];
    for (let i = 0; i < carrito.length; i++) {
        // Buscar los elementos distintos al que hay que eliminar
        if (carrito[i].id !== idProducto) {
            nuevoCarrito.push(carrito[i]);
        }
    }
    carrito = nuevoCarrito;
    actualizarCarritoHTML();
}


// Inicializar la aplicación
agregarProductos();
actualizarCarritoHTML(); // Llamar al inicio para mostrar el carrito vacío si no hay productos

function pagar(){
    alert("Proximamente! Gracias por confiar en nosotros");
}
