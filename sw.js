self.addEventListener("install",e=>{
  e.waitUntil(
    caches.open("kazz-cache").then(c=>{
      return c.addAll(["/","/index.html","/style.css"]);
    })
  );
});
