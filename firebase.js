<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>

<script>
const firebaseConfig = {
  apiKey: "AIzaSyA42lKOIGWKgVQtW7Uu3W5rqv1cQr9r3zE",
  authDomain: "kazz-second-branded.firebaseapp.com",
  projectId: "kazz-second-branded",
  messagingSenderId: "831976619012",
  appId: "1:831976619012:web:d54479e50e3d245156c951"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
</script>
