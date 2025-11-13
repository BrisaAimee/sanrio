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
];


const wallpapers = [
    { imagen: "media/productos/wallaper/hellokitty.jpg", personaje: "Hello Kitty" },
    { imagen: "media/productos/wallaper/hellokitty2.jpg", personaje: "Hello Kitty" },
    { imagen: "media/productos/wallaper/hellokitty3.jpg", personaje: "Hello Kitty" },
    { imagen: "media/productos/wallaper/hellokitty4.jpg", personaje: "Hello Kitty" },
    { imagen: "media/productos/wallaper/hellokitty5.jpg", personaje: "Hello Kitty" },
    { imagen: "media/productos/wallaper/cinnamonroll.jpg", personaje: "Cinnamonroll" },
    { imagen: "media/productos/wallaper/cinnamonroll2.jpg", personaje: "Cinnamonroll" },
    { imagen: "media/productos/wallaper/cinnamonroll3.jpg", personaje: "Cinnamonroll" },
    { imagen: "media/productos/wallaper/cinnamonroll4.jpg", personaje: "Cinnamonroll" },
    { imagen: "media/productos/wallaper/cinnamonroll5.jpg", personaje: "Cinnamonroll" },
    { imagen: "media/productos/wallaper/kuromi.jpg", personaje: "Kuromi" },
    { imagen: "media/productos/wallaper/kuromi2.png", personaje: "Kuromi" },
    { imagen: "media/productos/wallaper/kuromi3.jpg", personaje: "Kuromi" },
    { imagen: "media/productos/wallaper/kuromi4.jpg", personaje: "Kuromi" },
    { imagen: "media/productos/wallaper/kuromi5.jpg", personaje: "Kuromi" },
    { imagen: "media/productos/wallaper/mymelody.jpg", personaje: "My Melody" },
    { imagen: "media/productos/wallaper/mymelody2.jpg", personaje: "My Melody" },
    { imagen: "media/productos/wallaper/mymelody3.jpg", personaje: "My Melody" },
    { imagen: "media/productos/wallaper/mymelody4.jpg", personaje: "My Melody" },
    { imagen: "media/productos/wallaper/mymelody5.jpg", personaje: "My Melody" },
    { imagen: "media/productos/wallaper/pompompurin.jpg", personaje: "Pompompurin" },
    { imagen: "media/productos/wallaper/pompompurin2.jpg", personaje: "Pompompurin" },
    { imagen: "media/productos/wallaper/pompompurin3.jpg", personaje: "Pompompurin" },
    { imagen: "media/productos/wallaper/pompompurin4.jpg", personaje: "Pompompurin" },
    { imagen: "media/productos/wallaper/pompompurin5.jpg", personaje: "Pompompurin" },
    { imagen: "media/productos/wallaper/pochacco.jpg", personaje: "Pochacco" },
    { imagen: "media/productos/wallaper/pochacco2.jpg", personaje: "Pochacco" },
    { imagen: "media/productos/wallaper/pochacco3.jpg", personaje: "Pochacco" },
    { imagen: "media/productos/wallaper/pochacco4.jpg", personaje: "Pochacco" },
    { imagen: "media/productos/wallaper/pochacco5.jpg", personaje: "Pochacco" },
    { imagen: "media/productos/wallaper/sanrio.jpg", personaje: "Sanrio" },
    { imagen: "media/productos/wallaper/sanrio2.jpg", personaje: "Sanrio" },
    { imagen: "media/productos/wallaper/sanrio3.jpg", personaje: "Sanrio" },
    { imagen: "media/productos/wallaper/sanrio4.jpg", personaje: "Sanrio" },
    { imagen: "media/productos/wallaper/sanrio5.jpg", personaje: "Sanrio" }
]

// primera sección de productos

const grid = document.getElementById("productGrid");

for (let i = 0; i < mainProducts.length; i++) {
    const p = mainProducts[i];

    const card = document.createElement("div");
    card.classList.add("product-card");

    const top = document.createElement("div");
    top.classList.add("card-top");

    const fav = document.createElement("div");
    fav.classList.add("favorite");
    const heart = document.createElement("img");
    heart.src = "media/corazon.png";
    heart.alt = "Me gusta";
    fav.appendChild(heart);

    const img = document.createElement("img");
    img.src = p.imagen;
    img.alt = p.nombre;

    top.appendChild(img);
    top.appendChild(fav);

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

    grid.appendChild(card);
}

// segunda sección de productos

const grid2 = document.getElementById("productGrid2");

for (let i = 0; i < moreProducts.length; i++) {
    const p = moreProducts[i];

    const card = document.createElement("div");
    card.classList.add("product-card");

    const top = document.createElement("div");
    top.classList.add("card-top");

    const fav = document.createElement("div");
    fav.classList.add("favorite");
    const heart = document.createElement("img");
    heart.src = "media/corazon.png";
    heart.alt = "Me gusta";
    fav.appendChild(heart);

    const img = document.createElement("img");
    img.src = p.imagen;
    img.alt = p.nombre;

    top.appendChild(img);
    top.appendChild(fav);

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

// agrega eventos a las imágenes de los personajes
document.querySelectorAll(".characters img").forEach(img => {
    img.addEventListener("click", () => {
        const personaje = img.dataset.character; // obtiene el personaje
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

                const fav = document.createElement("div");
                fav.classList.add("favorite");
                const heart = document.createElement("img");
                heart.src = "media/corazon.png";
                heart.alt = "Me gusta";
                fav.appendChild(heart);

                const imgP = document.createElement("img");
                imgP.src = p.imagen;
                imgP.alt = p.nombre;

                top.appendChild(imgP);
                top.appendChild(fav);

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
