function openMaps(){
  window.open("https://maps.app.goo.gl/", "_blank");
}

const grid = document.getElementById("productGrid");

db.ref("products").on("value", snapshot => {
  grid.innerHTML = "";
  snapshot.forEach(item => {
    const p = item.val();

    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>Rp ${p.price}</p>
      <p>${p.stock > 0 ? "Stok: " + p.stock : "SOLD OUT"}</p>
      <button onclick="orderWA('${p.name}')">Order WhatsApp</button>
    `;

    grid.appendChild(div);
  });
});

function orderWA(name){
  const text = encodeURIComponent("Halo kak, saya mau order: " + name);
  window.open("https://wa.me/62XXXXXXXXXX?text=" + text);
}
