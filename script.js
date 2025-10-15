document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".register-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;

    if (!name || !email || !password || !confirm) {
      alert("Please fill in all fields!");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirm) {
      alert("Passwords do not match.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration successful!");

    form.reset();
  });
});
