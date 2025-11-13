const print = [
    { imagen: "media/productos/print/cinna-kitty-print.jpg", personaje: "Sanrio" },
    { imagen: "media/productos/print/cinna-poch-print.jpg", personaje: "Sanrio" },
    { imagen: "media/productos/print/cinna-print.jpg", personaje: "Cinnamonroll" },
    { imagen: "media/productos/print/cinna-print2.jpg", personaje: "Cinnamonroll" },
    { imagen: "media/productos/print/cinna-print3.jpg", personaje: "Cinnamonroll" },
    { imagen: "media/productos/print/kitty-print.jpg", personaje: "Hello Kitty" },
    { imagen: "media/productos/print/kitty-print2.jpg", personaje: "Hello Kitty" },
    { imagen: "media/productos/print/kuromi-mymelody-print.jpg", personaje: "Sanrio" },
    { imagen: "media/productos/print/kuromi-mymelody-print2.jpg", personaje: "Sanrio" },
    { imagen: "media/productos/print/kuromi-print.jpg", personaje: "Kuromi" },
    { imagen: "media/productos/print/kuromi-print2.jpg", personaje: "Kuromi" },
    { imagen: "media/productos/print/mymelody-print.jpg", personaje: "My Melody" },
    { imagen: "media/productos/print/mymelody-print2.jpg", personaje: "My Melody" },
    { imagen: "media/productos/print/pompom-print.jpg", personaje: "Pompompurin" },
    { imagen: "media/productos/print/pompom-print2.jpg", personaje: "Pompompurin" },
    { imagen: "media/productos/print/sanrio-print.jpg", personaje: "Sanrio" },
    { imagen: "media/productos/print/poch-melody-print.jpg", personaje: "Sanrio" },
]

const printgrid = document.getElementById("print-grid");

for (let i = 0; i < print.length; i++) {
    const p = print[i];

    const card = document.createElement("div");
    card.classList.add("product-card");

    const img = document.createElement("img");
    img.src = p.imagen;
    img.alt = p.personaje;

    card.appendChild(img);
    printgrid.appendChild(card);
}

