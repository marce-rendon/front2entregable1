/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Ingrese su nombre: ").trim();

  let anioNacimiento = prompt("Ingrese su año de nacimiento:").trim();
  let anioActual = new Date().getFullYear();
  datosPersona.edad = anioActual - parseInt(anioNacimiento);
  if (isNaN(datosPersona.edad) || datosPersona.edad <= 0) {
    datosPersona.edad = 0;
  }
  datosPersona.ciudad = prompt("Ingrese su ciudad: ").trim();
  datosPersona.interesPorJs = confirm(
    "Presiona Ok si te interesa Javascript o Cancel para no:"
  )
    ? "Si"
    : "No";

  console.log(datosPersona);
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

  if (
    datosPersona.nombre &&
    datosPersona.edad &&
    datosPersona.ciudad &&
    datosPersona.interesPorJs
  ) {
    console.log("Nombre: ", datosPersona.nombre);
    console.log("Edad: ", datosPersona.edad);
    console.log("Ciudad: ", datosPersona.ciudad);
    console.log("Interés por JS: ", datosPersona.interesPorJs);

    document.querySelector("#nombre").innerHTML = datosPersona.nombre;
    document.querySelector("#edad").innerHTML = datosPersona.edad;
    document.querySelector("#ciudad").innerHTML = datosPersona.ciudad;
    document.querySelector("#javascript").innerHTML = datosPersona.interesPorJs;
  } else {
    mensajeError = "Por favor complete todos los campos";
    console.error(mensajeError);
    alert(mensajeError);
  }
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */

  const fila = document.querySelector("#fila");

  if (fila.hasChildNodes()) {
    console.log("Las tarjetas ya están renderizadas");
    return;
  }

  listado.forEach((materia) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("caja");

    const imagen = document.createElement("img");
    imagen.src = materia.imgUrl;
    imagen.alt = `Imagen representativa de ${materia.lenguajes}`;
    tarjeta.appendChild(imagen);

    const lenguajes = document.createElement("p");
    lenguajes.classList.add("lenguajes");
    lenguajes.textContent = materia.lenguajes;
    tarjeta.appendChild(lenguajes);

    const bimestre = document.createElement("p");
    bimestre.classList.add("bimestre");
    bimestre.textContent = materia.bimestre;
    tarjeta.appendChild(bimestre);

    fila.appendChild(tarjeta);
  });
}

function alternarColorTema() {
  const sitio = document.querySelector("#sitio");
  sitio.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
document.addEventListener("keydown", function (event) {
  if (event.key === "F" || event.key === "f") {
    const sobreMiParrafo = document.querySelector("#sobre-mi");
    sobreMiParrafo.classList.remove("oculto");
  }
});
