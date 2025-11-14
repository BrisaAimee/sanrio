const stickers = [
    {imagen: "media/productos/stickers/sticker1.jpg"},
    {imagen: "media/productos/stickers/sticker2.jpg" },
    {imagen: "media/productos/stickers/sticker4.png" },
    {imagen: "media/productos/stickers/sticker5.png" },
    {imagen: "media/productos/stickers/sticker6.jpg" },
    {imagen: "media/productos/stickers/sticker7.png" },
    {imagen: "media/productos/stickers/sticker8.jpg" },
    {imagen: "media/productos/stickers/sticker9.jpg" },
    {imagen: "media/productos/stickers/sticker10.jpg" },
    {imagen: "media/productos/stickers/sticker11.png" },
    {imagen: "media/productos/stickers/sticker12.jpg" },
    {imagen: "media/productos/stickers/sticker13.jpg" },
    {imagen: "media/productos/stickers/sticker14.png" },
]

const stickergrid = document.getElementById("sticker-grid");

for (let i = 0; i < stickers.length; i++) {
    const p = stickers[i];

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

    stickergrid.appendChild(downloadLink);
}
