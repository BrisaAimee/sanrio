const products = [
    { nombre: "Set Sanrio cartas", precio: 120, imagen: "media/productos/sanrio/sanrio-cartas.png", personaje: "Sanrio" },
    { nombre: "Set Sanrio makeup", precio: 90, imagen: "media/productos/sanrio/sanrio-makeup.png", personaje: "Sanrio" },
    { nombre: "Set tazas Sanrio", precio: 180, imagen: "media/productos/sanrio/sanrio-set-tazas.png", personaje: "Sanrio" },
    { nombre: "Set Sanrio útiles", precio: 150, imagen: "media/productos/sanrio/sanrio-utiles.png", personaje: "Sanrio" },
    { nombre: "Ramo de Sanrio", precio: 95, imagen: "media/productos/sanrio/sanrio-ramo.jpg", personaje: "Sanrio" },
    { nombre: "Super pack Sanrio", precio: 200, imagen: "media/productos/sanrio/sanrio-super-pack.png", personaje: "Sanrio" }
];

const grid = document.getElementById("productGrid");

for (let i = 0; i < products.length; i++) {
    const p = products[i];

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

const moreProducts = [
    { nombre: "Peluche Kuromi", precio: 120, imagen: "media/productos/kuromi/kuromi-peluche.png", personaje: "Kuromi" },
    { nombre: "Peluche Cinnamoroll", precio: 120, imagen: "media/productos/cinnamonroll/cinnamonroll-peluche.png", personaje: "Cinnamoroll" },
    { nombre: "Peluche My Melody", precio: 120, imagen: "media/productos/mymelody/mymelody-peluche.png", personaje: "My Melody" },
    { nombre: "Peluche Pompompurin", precio: 120, imagen: "media/productos/pompompurin/pompompurin-peluche.png", personaje: "Pompompurin" },
    { nombre: "Paraguas Hello Kitty", precio: 85, imagen: "media/productos/hellokitty/hellokitty-paraguas.png", personaje: "Hello Kitty" },
    { nombre: "Bolsa Pochacco", precio: 80, imagen: "media/productos/pochacco/pochacco-bolsa.png", personaje: "Pochacco" },
    { nombre: "Mochila Kuromi", precio: 200, imagen: "media/productos/kuromi/kuromi-mochila.png", personaje: "Kuromi" },
    { nombre: "Remera Cinnamoroll", precio: 150, imagen: "media/productos/cinnamonroll/cinnamonroll-remera.png", personaje: "Cinnamoroll" },
    { nombre: "Orejas My Melody", precio: 95, imagen: "media/productos/mymelody/mymelody-orejas.png", personaje: "My Melody" },
    { nombre: "Mochila Pochacco", precio: 110, imagen: "media/productos/pochacco/pochacco-mochila.png", personaje: "Pochacco" },
    { nombre: "Útiles Sanrio", precio: 60, imagen: "media/productos/sanrio/sanrio-utiles2.png", personaje: "Sanrio" },
    { nombre: "Set peine Sanrio", precio: 50, imagen: "media/productos/sanrio/sanrio-peine.png", personaje: "Sanrio" },
    { nombre: "Billetera Sanrio", precio: 40, imagen: "media/productos/sanrio/sanrio-billetera.png", personaje: "Sanrio" },
    { nombre: "Llavero Hello Kitty", precio: 130, imagen: "media/productos/hellokitty/hellokitty-llavero.png", personaje: "Hello Kitty" }

];

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

