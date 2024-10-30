document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío tradicional del formulario

    // Limpiar mensajes de error previos
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";

    // Captura los datos del formulario
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    // Validación básica de campos
    let valid = true;

    if (name === "") {
      document.getElementById("nameError").textContent =
        "Por favor, ingresa tu nombre";
      valid = false;
    }

    if (email === "") {
      document.getElementById("emailError").textContent =
        "Por favor, ingresa tu correo electrónico";
      valid = false;
    }

    // Si todos los campos son válidos, proceder con la solicitud fetch
    if (valid) {
      const data = { name, email };

      fetch("process.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert("Registro exitoso");
            document.getElementById("userForm").reset(); // Limpiar formulario
          } else {
            alert("Hubo un error en el registro");
          }
        })
        .catch((error) => console.error("Error:", error));
    }
  });
