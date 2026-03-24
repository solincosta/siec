
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const nombre = urlParams.get('nombre');
const imagen = urlParams.get('imagen');
const valor = urlParams.get('valor');
const jornada = urlParams.get('jornada');
const duracion = urlParams.get('duracion');
const descripcion = urlParams.get('descripcion');
const beneficios = urlParams.get('beneficios');

let contenedor = document.getElementById("section-curso");
contenedor.innerHTML =
    `<img class="banner" src="${imagen}" alt="">
                    <div class="fondo">
                        <h1 class="curso-name">${nombre}</h1>
                    </div>`;

let contenedorInfo = document.getElementById("details-course");

contenedorInfo.innerHTML =
    `               
    <div class="item-course">Duración: ${duracion}</div>
    <div class="item-course">Jornada: ${jornada}</div>
    <div class="item-course">Valor: ${valor}</div>`;

let contenedorInfoNombre = document.getElementById("nombre-info");
contenedorInfoNombre.innerHTML = `${nombre}`;
let contenedorInfoDescripcion = document.getElementById("descripcion-info");
contenedorInfoDescripcion.innerHTML = `${descripcion}`;
let contenedorInfoBeneficios = document.getElementById("beneficios-info");
contenedorInfoBeneficios.innerHTML = `${beneficios}`;