let cart = JSON.parse(localStorage.getItem("cart")) || [];

window.addToCart = (nama, harga) => {
  cart.push({ nama, harga });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Ditambahkan ke keranjang");
};

window.checkoutWA = () => {
  if(cart.length===0){
    alert("Keranjang kosong");
    return;
  }
  let total=0;
  let text="Halo, saya mau order:%0A";
  cart.forEach((i,n)=>{
    total+=Number(i.harga);
    text+=`${n+1}. ${i.nama} - Rp${i.harga}%0A`;
  });
  text+=`%0ATotal: Rp${total}`;
  window.open(`https://wa.me/62xxxxxxxxxx?text=${text}`);
};
