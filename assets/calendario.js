const calendario = [
    {imagen: "media/productos/calendarios/calendario1.jpg"},
    {imagen: "media/productos/calendarios/calendario2.png" },
    {imagen: "media/productos/calendarios/calendario3.jpg" },
    {imagen: "media/productos/calendarios/calendario4.jpg" },
    {imagen: "media/productos/calendarios/calendario5.jpg" },
    {imagen: "media/productos/calendarios/calendario6.jpg" },
    {imagen: "media/productos/calendarios/calendario7.jpg" },
    {imagen: "media/productos/calendarios/calendario8.jpg" },
    {imagen: "media/productos/calendarios/calendario9.jpg" },
    {imagen: "media/productos/calendarios/calendario10.jpg" },
    {imagen: "media/productos/calendarios/calendario11.jpg" },
];


const calendargrid = document.getElementById("calendario-grid");

for (let i = 0; i < calendario.length; i++) {
    const p = calendario[i];

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

    calendargrid.appendChild(downloadLink);
}
