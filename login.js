//ログイン処理
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
login.addEventListener('click', function(e) {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then(() => {
      console.log('ログイン完了')
      //alert('ログイン完了')
      //画面切り替え
      document.location.href = "success2.html";
  })
  .catch((error) => {
      console.log('ログイン失敗', error);
      alert('ログイン失敗')
  });
});
