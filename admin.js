const USER = "admin";
const PASS = "12345";
const IMGBB_API = "450fadf17da34b9423ba7a95051103f9";

function login(){
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if(u === USER && p === PASS){
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    loadProducts();
  }else{
    alert("Username atau password salah");
  }
}

async function addProduct(){
  const name = document.getElementById("pname").value;
  const price = document.getElementById("pprice").value;
  const stock = document.getElementById("pstock").value;
  const fileInput = document.getElementById("pimageFile");
  const status = document.getElementById("uploadStatus");

  if(!fileInput.files[0]){
    alert("Pilih foto dulu");
    return;
  }

  status.innerText = "Uploading gambar...";

  const formData = new FormData();
  formData.append("image", fileInput.files[0]);

  try{
    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${IMGBB_API}`,
      { method:"POST", body: formData }
    );

    const data = await res.json();
    const imageUrl = data.data.url;

    db.ref("products").push({
      name,
      price,
      stock,
      image: imageUrl
    });

    status.innerText = "Produk berhasil ditambahkan ✅";
    fileInput.value = "";

  }catch(err){
    status.innerText = "Upload gagal ❌";
    console.error(err);
  }
}

function loadProducts(){
  const list = document.getElementById("adminList");

  db.ref("products").on("value", snapshot => {
    list.innerHTML = "";
    snapshot.forEach(item => {
      const p = item.val();
      const key = item.key;

      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>Stok: ${p.stock}</p>
        <button onclick="deleteProduct('${key}')">Hapus</button>
      `;

      list.appendChild(div);
    });
  });
}

function deleteProduct(id){
  db.ref("products/" + id).remove();
    }
