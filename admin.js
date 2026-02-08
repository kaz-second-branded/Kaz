import { ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

window.login = ()=>{
  if(user.value==="admin" && pass.value==="12345"){
    loginBox.style.display="none";
    dashboard.style.display="block";
  } else {
    alert("Login salah");
  }
};

window.upload = async ()=>{
  const file = foto.files[0];
  if(!file){ alert("Pilih foto"); return; }

  const fd = new FormData();
  fd.append("image",file);

  const r = await fetch("https://api.imgbb.com/1/upload?key=450fadf17da34b9423ba7a95051103f9",{
    method:"POST",body:fd
  });
  const j = await r.json();

  push(ref(db,"produk"),{
    nama:nama.value,
    harga:harga.value,
    stok:stok.value,
    img:j.data.url
  });

  alert("Produk ditambahkan");
};

const list=document.getElementById("adminList");
onValue(ref(db,"produk"),snap=>{
  list.innerHTML="";
  snap.forEach(p=>{
    list.innerHTML+=`
      <div>
        ${p.val().nama}
        <button onclick="hapus('${p.key}')">Hapus</button>
      </div>`;
  });
});

window.hapus=(id)=>{
  if(confirm("Hapus produk?")){
    remove(ref(db,"produk/"+id));
  }
};
