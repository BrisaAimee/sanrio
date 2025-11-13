const wallpapers = [
    { imagen: "media/productos/wallpaper/hellokitty.jpg", personaje: "Hello Kitty" },
    { imagen: "media/productos/wallpaper/hellokitty2.jpg", personaje: "Hello Kitty" },
    { imagen: "media/productos/wallpaper/hellokitty3.jpg", personaje: "Hello Kitty" },
    { imagen: "media/productos/wallpaper/hellokitty4.jpg", personaje: "Hello Kitty" },
    { imagen: "media/productos/wallpaper/hellokitty5.jpg", personaje: "Hello Kitty" },
    { imagen: "media/productos/wallpaper/cinnamonroll.jpg", personaje: "Cinnamonroll" },
    { imagen: "media/productos/wallpaper/cinnamonroll2.jpg", personaje: "Cinnamonroll" },
    { imagen: "media/productos/wallpaper/cinnamonroll3.jpg", personaje: "Cinnamonroll" },
    { imagen: "media/productos/wallpaper/cinnamonroll4.jpg", personaje: "Cinnamonroll" },
    { imagen: "media/productos/wallpaper/cinnamonroll5.jpg", personaje: "Cinnamonroll" },
    { imagen: "media/productos/wallpaper/kuromi.jpg", personaje: "Kuromi" },
    { imagen: "media/productos/wallpaper/kuromi2.png", personaje: "Kuromi" },
    { imagen: "media/productos/wallpaper/kuromi3.jpg", personaje: "Kuromi" },
    { imagen: "media/productos/wallpaper/kuromi4.jpg", personaje: "Kuromi" },
    { imagen: "media/productos/wallpaper/kuromi5.jpg", personaje: "Kuromi" },
    { imagen: "media/productos/wallpaper/mymelody.jpg", personaje: "My Melody" },
    { imagen: "media/productos/wallpaper/mymelody2.jpg", personaje: "My Melody" },
    { imagen: "media/productos/wallpaper/mymelody3.jpg", personaje: "My Melody" },
    { imagen: "media/productos/wallpaper/mymelody4.jpg", personaje: "My Melody" },
    { imagen: "media/productos/wallpaper/mymelody5.jpg", personaje: "My Melody" },
    { imagen: "media/productos/wallpaper/pompompurin.jpg", personaje: "Pompompurin" },
    { imagen: "media/productos/wallpaper/pompompurin2.jpg", personaje: "Pompompurin" },
    { imagen: "media/productos/wallpaper/pompompurin3.jpg", personaje: "Pompompurin" },
    { imagen: "media/productos/wallpaper/pompompurin4.jpg", personaje: "Pompompurin" },
    { imagen: "media/productos/wallpaper/pompompurin5.jpg", personaje: "Pompompurin" },
    { imagen: "media/productos/wallpaper/pochacco.jpg", personaje: "Pochacco" },
    { imagen: "media/productos/wallpaper/pochacco2.jpg", personaje: "Pochacco" },
    { imagen: "media/productos/wallpaper/pochacco3.jpg", personaje: "Pochacco" },
    { imagen: "media/productos/wallpaper/pochacco4.jpg", personaje: "Pochacco" },
    { imagen: "media/productos/wallpaper/sanrio1.jpg", personaje: "Sanrio" },
    { imagen: "media/productos/wallpaper/sanrio2.jpg", personaje: "Sanrio" },
    { imagen: "media/productos/wallpaper/sanrio3.jpg", personaje: "Sanrio" },
    { imagen: "media/productos/wallpaper/sanrio4.jpg", personaje: "Sanrio" },
    { imagen: "media/productos/wallpaper/sanrio5.jpg", personaje: "Sanrio" }
]

const wallpapergrid = document.getElementById("wallpaper-grid");

for (let i = 0; i < wallpapers.length; i++) {
    const p = wallpapers[i];

    const downloadLink = document.createElement("a");
    downloadLink.href = p.imagen;

    const filename = `${p.personaje}_${i + 1}.jpg`;
    downloadLink.download = filename;

    const card = document.createElement("div");
    card.classList.add("product-card");

    const img = document.createElement("img");
    img.src = p.imagen;
    img.alt = p.personaje;

    card.appendChild(img);

    downloadLink.appendChild(card);

    wallpapergrid.appendChild(downloadLink);
}

