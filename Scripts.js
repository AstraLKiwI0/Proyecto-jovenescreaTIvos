// Obtener usuarios del localStorage o inicializar un array vacío
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Manejo del registro
document.getElementById("registro").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("nombre").value;
    const email = document.getElementById("correo").value;
    const pswd = document.getElementById("contraseña").value;

    const usuario = {
        name: name,
        email: email,
        password: pswd,
    };

    const usuarioExiste = usuarios.find((user) => user.email === email);

    if (usuarioExiste) {
        alert("Este correo ya está registrado");
    } else {
        usuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        alert("Registro exitoso");
        document.getElementById("registro").reset();
        
        // Cambiar a formulario de inicio de sesión
        document.getElementById("tituloInicioSesion").style.display = 'block';
        document.getElementById("inicio").style.display = 'block';
        document.getElementById("saludo").style.display = 'none'; // Ocultar saludo inicial
        document.getElementById("registro").style.display = 'none'; // Ocultar el formulario de registro
    }
});

// Manejo del inicio de sesión
document.getElementById("inicio").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("Icorreo").value;
    const pswd = document.getElementById("Icontraseña").value;

    const usuarioExiste = usuarios.find(
        (user) => user.email === email && user.password === pswd
    );

    if (usuarioExiste) {
        alert('Inicio de sesión correcto');
        document.getElementById("saludo").innerText = 'Hola ' + usuarioExiste.name; // Actualiza el saludo
        document.getElementById("saludo").style.display = 'block'; // Mostrar saludo
        document.getElementById("tituloInicioSesion").style.display = 'none'; // Ocultar título de inicio de sesión
        document.getElementById("inicio").style.display = 'none'; // Ocultar formulario de inicio de sesión
    } else {
        alert('Usuario y/o contraseña inválido. Debes registrarte.');
    }
});