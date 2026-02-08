import { ref, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const list = document.getElementById("productList");

onValue(ref(db,"produk"), snap=>{
  list.innerHTML="";
  snap.forEach(p=>{
    const d=p.val();
    list.innerHTML+=`
      <div class="card">
        <img src="${d.img}">
        <h3>${d.nama}</h3>
        <p>Rp ${d.harga}</p>
        <p class="${d.stok>0?'stok':'sold'}">
          ${d.stok>0?'Stok '+d.stok:'SOLD OUT'}
        </p>
        ${d.stok>0?`
          <button onclick="addToCart('${d.nama}','${d.harga}')">+ Keranjang</button>
        `:""}
      </div>
    `;
  });
});
