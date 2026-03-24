
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const id =  urlParams.get('id');

const curso = courses.find(cur => cur.id == id);

const nombre = curso.nombre;
const imagen = curso.imageCourse;
const valor = curso.valor;
const jornada = curso.jornada;
const duracion = curso.duracion;
const descripcion = curso.descripcion;
const beneficios = curso.beneficios;
const habilidades = curso.habilidades;
const planes = curso.planEstudios;

let contenedor = document.getElementById("section-curso");
contenedor.innerHTML =
    `<img class="banner" src="${imagen}" alt="">
                    <div class="fondo">
                        <h1 class="curso-name">${nombre}</h1>
                    </div>
                    <button class="button-suscribe-info open-sans-button">INSCRIBIRME</button>`;

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

let contenedorHabilidades = document.getElementById("content-learn");

for(habilidad of habilidades){
    contenedorHabilidades.innerHTML += `
        <div class="item-learn">${habilidad}</div>
    `;
}

let contenedorPlanes = document.getElementById("content-plan");

for(plan of planes){
    contenedorPlanes.innerHTML += `
        <div class="item-plan">${plan}</div>
    `;
}
