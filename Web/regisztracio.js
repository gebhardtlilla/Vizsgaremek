document.getElementById('registerForm').addEventListener('submit', function(e) {
  const pwd = document.getElementById('password').value;
  const confirmPwd = document.getElementById('confirmPassword').value;

  if (pwd !== confirmPwd) {
    e.preventDefault();
    alert('A jelszavak nem egyeznek!');
  }
});
