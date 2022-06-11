//新規登録処理
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
register.addEventListener('click', function(e) {
var mailAddress = document.getElementById('mailAddress').value;
var password = document.getElementById('password').value;
const auth = getAuth();
createUserWithEmailAndPassword(auth,mailAddress, password)
//.then((userCredential) => {

//})
.catch(function(error) {
  alert('登録できません（' + error.message + '）');
});
});
