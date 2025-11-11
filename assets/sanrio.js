const products = [
    { nombre: "Peluche Hello Kitty", precio: 120, imagen: "media/peluche-hello.png", personaje: "Hello Kitty" },
    { nombre: "Taza Kuromi", precio: 90, imagen: "media/taza-kuromi.png", personaje: "Kuromi" },
    { nombre: "Mochila Cinnamoroll", precio: 180, imagen: "media/mochila-cinna.png", personaje: "Cinnamoroll" },
    { nombre: "Remera My Melody", precio: 150, imagen: "media/remera-melody.png", personaje: "My Melody" },
    { nombre: "Gorro Pompompurin", precio: 95, imagen: "media/gorro-purin.png", personaje: "Pompompurin" },
    { nombre: "Taza Pochacco", precio: 80, imagen: "media/taza-pochacco.png", personaje: "Pochacco" }
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
    { nombre: "Peluche Kuromi", precio: 120, imagen: "media/peluche-kuromi.png", personaje: "Kuromi" },
    { nombre: "Peluche Cinnamoroll", precio: 120, imagen: "media/peluche-cinna.png", personaje: "Cinnamoroll" },
    { nombre: "Peluche My Melody", precio: 120, imagen: "media/peluche-melody.png", personaje: "My Melody" },
    { nombre: "Peluche Pompompurin", precio: 120, imagen: "media/peluche-purin.png", personaje: "Pompompurin" },
    { nombre: "Taza Hello Kitty", precio: 85, imagen: "media/taza-hello.png", personaje: "Hello Kitty" },
    { nombre: "Taza Pochacco", precio: 80, imagen: "media/taza-pochacco.png", personaje: "Pochacco" },
    { nombre: "Bolso Kuromi", precio: 200, imagen: "media/bolso-kuromi.png", personaje: "Kuromi" },
    { nombre: "Remera Cinnamoroll", precio: 150, imagen: "media/remera-cinna.png", personaje: "Cinnamoroll" },
    { nombre: "Gorro My Melody", precio: 95, imagen: "media/gorro-melody.png", personaje: "My Melody" },
    { nombre: "Tote Bag Pochacco", precio: 110, imagen: "media/bolso-pochacco.png", personaje: "Pochacco" },
    { nombre: "Llaveros Sanrio Set", precio: 60, imagen: "media/llaveros.png", personaje: "Sanrio" },
    { nombre: "Poster Sanrio", precio: 50, imagen: "media/poster-sanrio.png", personaje: "Sanrio" },
    { nombre: "Set Stickers Sanrio", precio: 40, imagen: "media/stickers-sanrio.png", personaje: "Sanrio" },
    { nombre: "Botella Hello Kitty", precio: 130, imagen: "media/botella-hello.png", personaje: "Hello Kitty" }

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

