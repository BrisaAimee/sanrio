const mainProducts = [
    { nombre: "Set Sanrio cartas", precio: 120, imagen: "media/productos/sanrio/sanrio-cartas.png", personaje: "Sanrio" },
    { nombre: "Set Sanrio makeup", precio: 90, imagen: "media/productos/sanrio/sanrio-makeup.png", personaje: "Sanrio" },
    { nombre: "Set tazas Sanrio", precio: 180, imagen: "media/productos/sanrio/sanrio-set-tazas.png", personaje: "Sanrio" },
    { nombre: "Set Sanrio útiles", precio: 150, imagen: "media/productos/sanrio/sanrio-utiles.png", personaje: "Sanrio" },
    { nombre: "Ramo de Sanrio", precio: 95, imagen: "media/productos/sanrio/sanrio-ramo.jpg", personaje: "Sanrio" },
    { nombre: "Super pack Sanrio", precio: 200, imagen: "media/productos/sanrio/sanrio-super-pack.png", personaje: "Sanrio" }
];

const moreProducts = [
    { nombre: "Peluche Kuromi", precio: 120, imagen: "media/productos/kuromi/kuromi-peluche.png", personaje: "Kuromi" },
    { nombre: "Peluche Cinnamoroll", precio: 120, imagen: "media/productos/cinnamonroll/cinnamonroll-peluche.png", personaje: "Cinnamonroll" },
    { nombre: "Peluche My Melody", precio: 120, imagen: "media/productos/mymelody/mymelody-peluche.png", personaje: "My Melody" },
    { nombre: "Peluche Pompompurin", precio: 120, imagen: "media/productos/pompompurin/pompompurin-peluche.png", personaje: "Pompompurin" },
    { nombre: "Paraguas Hello Kitty", precio: 85, imagen: "media/productos/hellokitty/hellokitty-paraguas.png", personaje: "Hello Kitty" },
    { nombre: "Bolsa Pochacco", precio: 80, imagen: "media/productos/pochacco/pochacco-bolsa.png", personaje: "Pochacco" },
    { nombre: "Mochila Kuromi", precio: 200, imagen: "media/productos/kuromi/kuromi-mochila.png", personaje: "Kuromi" },
    { nombre: "Remera Cinnamoroll", precio: 150, imagen: "media/productos/cinnamonroll/cinnamonroll-remera.png", personaje: "Cinnamonroll" },
    { nombre: "Orejas My Melody", precio: 95, imagen: "media/productos/mymelody/mymelody-orejas.png", personaje: "My Melody" },
    { nombre: "Mochila Pochacco", precio: 110, imagen: "media/productos/pochacco/pochacco-mochila.png", personaje: "Pochacco" },
    { nombre: "Útiles Sanrio", precio: 60, imagen: "media/productos/sanrio/sanrio-utiles2.png", personaje: "Sanrio" },
    { nombre: "Set peine Sanrio", precio: 50, imagen: "media/productos/sanrio/sanrio-peine.png", personaje: "Sanrio" },
    { nombre: "Billetera Sanrio", precio: 40, imagen: "media/productos/sanrio/sanrio-billetera.png", personaje: "Sanrio" },
    { nombre: "Billetera Kuromi", precio: 130, imagen: "media/productos/kuromi/kuromi-billetera.png", personaje: "Kuromi" },
    { nombre: "Buzo Kuromi", precio: 100, imagen: "media/productos/kuromi/kuromi-buzo.png", personaje: "Kuromi" },
    { nombre: "Hebillas Kuromi", precio: 80, imagen: "media/productos/kuromi/kuromi-hebillas.png", personaje: "Kuromi" },
    { nombre: "Llavero Kuromi", precio: 45, imagen: "media/productos/kuromi/kuromi-llavero.png", personaje: "Kuromi" },
    { nombre: "Peluche halloween Kuromi", precio: 78, imagen: "media/productos/kuromi/kuromi-peluche-halloween.png", personaje: "Kuromi" },
    { nombre: "Peluche navidad Kuromi", precio: 130, imagen: "media/productos/kuromi/kuromi-peluche-navidad.png", personaje: "Kuromi" },
    { nombre: "Pijama Kuromi", precio: 88, imagen: "media/productos/kuromi/kuromi-pijama.png", personaje: "Kuromi" },
    { nombre: "Pop Kuromi", precio: 130, imagen: "media/productos/kuromi/kuromi-pop.png", personaje: "Kuromi" },
    { nombre: "Peluche pascuas Kuromi", precio: 109, imagen: "media/productos/kuromi/kuromi-peluche-pascuas.png", personaje: "Kuromi" },
    { nombre: "Billetera Cinnamoroll", precio: 220, imagen: "media/productos/cinnamonroll/cinnamonroll-billetera.png", personaje: "Cinnamonroll" },
    { nombre: "Llavero Cinnamoroll", precio: 76, imagen: "media/productos/cinnamonroll/cinnamonroll-llavero.png", personaje: "Cinnamonroll" },
    { nombre: "Neceser Cinnamoroll", precio: 45, imagen: "media/productos/cinnamonroll/cinnamonroll-neceser.png", personaje: "Cinnamonroll" },
    { nombre: "Peluche halloween Cinnamoroll", precio: 87, imagen: "media/productos/cinnamonroll/cinnamonroll-peluche-halloween.png", personaje: "Cinnamonroll" },
    { nombre: "Peluche Navidad Cinnamoroll", precio: 100, imagen: "media/productos/cinnamonroll/cinnamonroll-peluche-navidad.png", personaje: "Cinnamonroll" },
    { nombre: "Peluche pascuas Cinnamoroll", precio: 43, imagen: "media/productos/cinnamonroll/cinnamonroll-peluche-pascuas.png", personaje: "Cinnamonroll" },
    { nombre: "Pop Cinnamoroll", precio: 211, imagen: "media/productos/cinnamonroll/cinnamonroll-pop.png", personaje: "Cinnamonroll" },
    { nombre: "Antifaz Cinnamoroll", precio: 120, imagen: "media/productos/cinnamonroll/cinnamonroll-sleep.png", personaje: "Cinnamonroll" },
    { nombre: "Taza Cinnamoroll", precio: 33, imagen: "media/productos/cinnamonroll/cinnamonroll-taza.png", personaje: "Cinnamonroll" },
    { nombre: "Billetera Pochacco", precio: 46, imagen: "media/productos/pochacco/pochacco-billetera.png", personaje: "Pochacco" },
    { nombre: "Cartuchera Pochacco", precio: 199, imagen: "media/productos/pochacco/pochacco-cartuchera.png", personaje: "Pochacco" },
    { nombre: "Lapiceras Pochacco", precio: 34, imagen: "media/productos/pochacco/pochacco-lapiceras.png", personaje: "Pochacco" },
    { nombre: "Lavero Pochacco", precio: 212, imagen: "media/productos/pochacco/pochacco-llavero.png", personaje: "Pochacco" },
    { nombre: "Peluche Pochacco", precio: 43, imagen: "media/productos/pochacco/pochacco-peluche.png", personaje: "Pochacco" },
    { nombre: "Peluche Halloween Pochacco", precio: 65, imagen: "media/productos/pochacco/pochacco-peluche-halloween.png", personaje: "Pochacco" },
    { nombre: "Peluche navidad Pochacco", precio: 58, imagen: "media/productos/pochacco/pochacco-peluche-navidad.png", personaje: "Pochacco" },
    { nombre: "Mochila Pochacco", precio: 200, imagen: "media/productos/pochacco/pochacco-peluche-pascuas.png", personaje: "Pochacco" },
    { nombre: "Billetera Pompompurin", precio: 49, imagen: "media/productos/pompompurin/pompompurin-billetera.png", personaje: "Pompompurin" },
    { nombre: "Colitas Pompompurin", precio: 100, imagen: "media/productos/pompompurin/pompompurin-colitas.png", personaje: "Pompompurin" },
    { nombre: "Llavero Pompompurin", precio: 56, imagen: "media/productos/pompompurin/pompompurin-llavero.png", personaje: "Pompompurin" },
    { nombre: "Medias Pompompurin", precio: 204, imagen: "media/productos/pompompurin/pompompurin-medias.png", personaje: "Pompompurin" },
    { nombre: "Mochila Pompompurin", precio: 120, imagen: "media/productos/pompompurin/pompompurin-mochila.png", personaje: "Pompompurin" },
    { nombre: "Neceser Pompompurin", precio: 96, imagen: "media/productos/pompompurin/pompompurin-neceser.png", personaje: "Pompompurin" },
    { nombre: "Peluche halloween Pompompurin", precio: 80, imagen: "media/productos/pompompurin/pompompurin-peluche-halloween.png", personaje: "Pompompurin" },
    { nombre: "Peluche navidad Pompompurin", precio: 67, imagen: "media/productos/pompompurin/pompompurin-peluche-navidad.png", personaje: "Pompompurin" },
    { nombre: "Peluche pascuas Pompompurin", precio: 100, imagen: "media/productos/pompompurin/pompompurin-peluche-pascuas.png", personaje: "Pompompurin" },
    { nombre: "Taza Pompompurin", precio: 110, imagen: "media/productos/pompompurin/pompompurin-taza.png", personaje: "Pompompurin" },
    { nombre: "Llavero Hello Kitty", precio: 65, imagen: "media/productos/hellokitty/hellokitty-llavero.png", personaje: "Hello Kitty" },
    { nombre: "Peluche pascuas Hello Kitty", precio: 100, imagen: "media/productos/hellokitty/hellokitty-pascuas.png", personaje: "Hello Kitty" },
    { nombre: "Billetera Hello Kitty", precio: 130, imagen: "media/productos/hellokitty/hellokitty-billetera.png", personaje: "Hello Kitty" },
    { nombre: "Bolsa Hello Kitty", precio: 40, imagen: "media/productos/hellokitty/hellokitty-bolsa.png", personaje: "Hello Kitty" },
    { nombre: "Peluche halloween Hello Kitty", precio: 52, imagen: "media/productos/hellokitty/hellokitty-halloween.png", personaje: "Hello Kitty" },
    { nombre: "Peluche unicornio Hello Kitty", precio: 76, imagen: "media/productos/hellokitty/hellokitty-peluche-unicorn.png", personaje: "Hello Kitty" },
    { nombre: "Peluche Hello Kitty", precio: 89, imagen: "media/productos/hellokitty/hellokitty-peluche.png", personaje: "Hello Kitty" },
    { nombre: "Vicha Hello Kitty", precio: 45, imagen: "media/productos/hellokitty/hellokitty-vincha.png", personaje: "Hello Kitty" },
    { nombre: "Cartuchera My Melody", precio: 212, imagen: "media/productos/mymelody/mymelody-cartuchera.png", personaje: "My Melody" },
    { nombre: "Hebillas My Melody", precio: 212, imagen: "media/productos/mymelody/mymelody-hebillas.png", personaje: "My Melody" },
    { nombre: "Lavero My Melody", precio: 212, imagen: "media/productos/mymelody/mymelody-llavero.png", personaje: "My Melody" },
    { nombre: "Mochila My Melody", precio: 212, imagen: "media/productos/mymelody/mymelody-mochila.png", personaje: "My Melody" },
    { nombre: "Peluche halloween My Melody", precio: 212, imagen: "media/productos/mymelody/mymelody-peluche-halloween.png", personaje: "My Melody" },
    { nombre: "Peluche navidad My Melody", precio: 212, imagen: "media/productos/mymelody/mymelody-peluche-navidad.png", personaje: "My Melody" },
    { nombre: "Peluche pascuas My Melody", precio: 212, imagen: "media/productos/mymelody/mymelody-peluche-pascuas.png", personaje: "My Melody" },
    { nombre: "Remera My Melody", precio: 212, imagen: "media/productos/mymelody/mymelody-remera.png", personaje: "My Melody" },
    { nombre: "Taza My Melody", precio: 212, imagen: "media/productos/mymelody/mymelody-taza.png", personaje: "My Melody" },
];

const personajes = {
    "Hello Kitty": {
        nombre: "Hello Kitty",
        descripcion: "Hello Kitty es una de las figuras más queridas del universo Sanrio. Esta icónica gatita blanca, reconocida por su lazo rojo característico, representa ternura, amistad y la idea de que un pequeño gesto puede iluminar el día de cualquiera.",
        backgroundImg: "media/banners/hellokitty/hellokitty-fondo.png",
        outfits: [
            "media/banners/hellokitty/hellokitty-outfit1.png",
            "media/banners/hellokitty/hellokitty-outfit2.png",
            "media/banners/hellokitty/hellokitty-outfit3.png"
        ]
    },

    "My Melody": {
        nombre: "My Melody",
        descripcion: "My Melody es una dulce conejita que siempre lleva una capucha roja o rosa que ella misma confeccionó junto a su mamá. Con un corazón amable y una actitud siempre positiva, My Melody encuentra alegría en las pequeñas cosas de la vida, ya sea horneando galletas o cuidando a sus amigos.",
        backgroundImg: "media/banners/mymelody/mymelody-fondo.png",
        outfits: [
            "media/banners/mymelody/mymelody-outfit1.png",
            "media/banners/mymelody/mymelody-outfit2.png",
            "media/banners/mymelody/mymelody-outfit3.png"
        ]
    },

    "Kuromi": {
        nombre: "Kuromi",
        descripcion: "Kuromi es la traviesa y encantadora rival de My Melody, aunque detrás de su apariencia rebelde y su estilo punk esconde un corazón más dulce de lo que deja ver. Le encanta escribir en su diario, hacer travesuras y mantener su imagen fuerte y atrevida.",
        backgroundImg: "media/banners/kuromi/kuromi-fondo.png",
        outfits: [
            "media/banners/kuromi/kuromi-outfit1.png",
            "media/banners/kuromi/kuromi-outfit2.png",
            "media/banners/kuromi/kuromi-outfit3.png"
        ]
    },

    "Cinnamonroll": {
        nombre: "Cinnamonroll",
        descripcion: "Cinnamonroll es un adorable perrito blanco con orejas largas y esponjosas que le permiten volar suavemente por el cielo. Es tímido al principio, pero muy cariñoso con quienes le demuestran amor. Le encanta dormir encima de las personas que quiere, acompañar a sus amigos y disfrutar de dulces caseros.",
        backgroundImg: "media/banners/cinnamonroll/cinnamonroll-fondo.png",
        outfits: [
            "media/banners/cinnamonroll/cinnamonroll-outfit1.png",
            "media/banners/cinnamonroll/cinnamonroll-outfit2.png",
            "media/banners/cinnamonroll/cinnamonroll-outfit3.png"
        ]
    },

    "Pompompurin": {
        nombre: "Pompompurin",
        descripcion: "Pompompurin es un perrito golden retriever encantador, conocido por su inseparable boina marrón y su personalidad cálida y amistosa. Es sociable, relajado y siempre está listo para hacer nuevos amigos. Le gusta salir a pasear, tomar siestas y disfrutar postres junto a quienes quiere.",
        backgroundImg: "media/banners/pompompurin/pompompurin-fondo.png",
        outfits: [
            "media/banners/pompompurin/pompompurin-outfit1.png",
            "media/banners/pompompurin/pompompurin-outfit2.png",
            "media/banners/pompompurin/pompompurin-outfit3.png"
        ]
    },

    "Pochacco": {
        nombre: "Pochacco",
        descripcion: "Pochacco es un perrito blanco lleno de energía, famoso por sus orejas negras y su espíritu aventurero. Le encanta el deporte, especialmente correr y explorar nuevos lugares. Su personalidad activa y curiosa lo lleva a descubrir siempre algo nuevo, pero también sabe ser cariñoso y leal con sus amigos.",
        backgroundImg: "media/banners/pochacco/pochacco-fondo.png",
        outfits: [
            "media/banners/pochacco/pochacco-outfit1.png",
            "media/banners/pochacco/pochacco-outfit2.png",
            "media/banners/pochacco/pochacco-outfit3.png"
        ]
    }
};


// primera sección de productos

const grid = document.getElementById("productGrid");

for (let i = 0; i < mainProducts.length; i++) {
    const p = mainProducts[i];

    const card = document.createElement("div");
    card.classList.add("product-card");

    const top = document.createElement("div");
    top.classList.add("card-top");

    const img = document.createElement("img");
    img.src = p.imagen;
    img.alt = p.nombre;

    top.appendChild(img);

    const bottom = document.createElement("div");
    bottom.classList.add("card-bottom");

    const info = document.createElement("div");
    info.classList.add("info");

    const name = document.createElement("h3");
    name.textContent = p.nombre;

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = `$${p.precio}`;

    info.appendChild(name);
    info.appendChild(price);
    bottom.appendChild(info);

    card.appendChild(top);
    card.appendChild(bottom);

    img.addEventListener("click", () => {
        window.location.href = `producto.html?producto=main-${i}`;
    });
    grid.appendChild(card);
}

// segunda sección de productos

const grid2 = document.getElementById("productGrid2");

function mostrarProductos(lista) {
    grid2.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {
        const p = lista[i];

        const card = document.createElement("div");
        card.classList.add("product-card");

        const top = document.createElement("div");
        top.classList.add("card-top");

        const img = document.createElement("img");
        img.src = p.imagen;
        img.alt = p.nombre;

        top.appendChild(img);

        const bottom = document.createElement("div");
        bottom.classList.add("card-bottom");

        const info = document.createElement("div");
        info.classList.add("info");

        const name = document.createElement("h3");
        name.textContent = p.nombre;

        const price = document.createElement("p");
        price.classList.add("price");
        price.textContent = `$${p.precio}`;

        info.appendChild(name);
        info.appendChild(price);
        bottom.appendChild(info);

        card.appendChild(top);
        card.appendChild(bottom);

        img.addEventListener("click", () => {
            window.location.href = `producto.html?producto=more-${i}`;
        });

        grid2.appendChild(card);
    }
}

const destacados = moreProducts.slice(0, 14);
mostrarProductos(destacados); //

// agrega eventos a las imágenes de los personajes
document.querySelectorAll(".characters img").forEach(img => {
    img.addEventListener("click", () => {
        const personaje = img.dataset.character; // obtiene el personaje
        cargarPersonaje(personaje);

        document.body.className = "";
        document.body.classList.add(personaje.toLowerCase().replace(" ", "-"));


        grid2.innerHTML = "";

        for (let i = 0; i < moreProducts.length; i++) {
            const p = moreProducts[i];
            if (p.personaje === personaje) {

                const card = document.createElement("div");
                card.classList.add("product-card");

                const top = document.createElement("div");
                top.classList.add("card-top");


                const imgP = document.createElement("img");
                imgP.src = p.imagen;
                imgP.alt = p.nombre;

                top.appendChild(imgP);

                const bottom = document.createElement("div");
                bottom.classList.add("card-bottom");

                const info = document.createElement("div");
                info.classList.add("info");

                const name = document.createElement("h3");
                name.textContent = p.nombre;

                const price = document.createElement("p");
                price.classList.add("price");
                price.textContent = `$${p.precio}`;

                info.appendChild(name);
                info.appendChild(price);
                bottom.appendChild(info);

                card.appendChild(top);
                card.appendChild(bottom);

                grid2.appendChild(card);
            }
        }
    });
});

//interacción con los outfits

function cargarPersonaje(personajeID) {
    const p = personajes[personajeID];

    // Ocultar el banner default
    document.getElementById("banner-default").classList.add("hidden");
    document.getElementById("banner-personaje").classList.remove("hidden");

    // Datos del personaje
    document.getElementById("personaje-nombre").textContent = p.nombre;
    document.getElementById("personaje-descripcion").textContent = p.descripcion;
    document.getElementById("banner-personaje").style.backgroundImage = `url(${p.backgroundImg})`;

    // Imagen completa outfit 1
    const img = document.getElementById("personaje-img");
    img.src = p.outfits[0];
    img.dataset.personaje = personajeID;
    img.dataset.outfit = 0;
}


const botones = document.querySelectorAll(".outfit-btn");

botones.forEach(btn => {
    btn.addEventListener("click", () => {
        const outfitIndex = btn.dataset.outfit;
        const img = document.getElementById("personaje-img");
        const personajeID = img.dataset.personaje;

        // animación opcional
        img.style.opacity = 0;

        setTimeout(() => {
            img.src = personajes[personajeID].outfits[outfitIndex];
            img.dataset.outfit = outfitIndex;
            img.style.opacity = 1;
        }, 200);
    });
});

