document.getElementById('registerForm').addEventListener('submit', async function(e) {
  e.preventDefault();
<<<<<<< HEAD
=======

>>>>>>> 0dba4a8b5e4078a2161cba5a3c36670e5a2b21ae
  const email = document.querySelector('input[type="email"]').value;
  const username = document.querySelector('input[type="text"]').value;
  const password = document.getElementById('password').value;
  const confirmPwd = document.getElementById('confirmPassword').value;
  const messageBox = document.getElementById('message');
<<<<<<< HEAD
  messageBox.textContent = "";
=======

  messageBox.textContent = ""; // Üzenet ürítése minden új próbálkozáskor

>>>>>>> 0dba4a8b5e4078a2161cba5a3c36670e5a2b21ae
  if (password !== confirmPwd) {
    messageBox.textContent = "A jelszavak nem egyeznek!";
    return;
  }
<<<<<<< HEAD
  try {
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: username, email: email, password: password })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Hiba történt a regisztráció során.');
    messageBox.style.color = "green";
    messageBox.textContent = "Sikeres regisztráció! Átirányítás...";
    setTimeout(() => {
      window.location.href = 'bejelentkezes.html';
    }, 1500);
  } catch (err) {
    messageBox.style.color = "red";
    messageBox.textContent = err.message;
=======

  try {
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: username,
        email: email,
        password: password
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Hiba történt a regisztráció során.');
    }

    // Sikeres regisztráció – zöld színnel visszajelzés
    messageBox.style.color = "green";
    messageBox.textContent = "Sikeres regisztráció! Átirányítás...";

    setTimeout(() => {
      window.location.href = 'bejelentkezes.html';
    }, 1500);

  } catch (error) {
    messageBox.style.color = "red";
    messageBox.textContent = error.message;
>>>>>>> 0dba4a8b5e4078a2161cba5a3c36670e5a2b21ae
  }
});
