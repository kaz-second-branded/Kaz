<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA42lKOIGWKgVQtW7Uu3W5rqv1cQr9r3zE",
  authDomain: "kazz-second-branded.firebaseapp.com",
  databaseURL: "https://kazz-second-branded-default-rtdb.firebaseio.com",
  projectId: "kazz-second-branded",
  storageBucket: "kazz-second-branded.appspot.com",
  messagingSenderId: "831976619012",
  appId: "1:831976619012:web:d54479e50e3d245156c951"
};

window.app = initializeApp(firebaseConfig);
window.db = getDatabase(app);
</script>
