
function cargarCursos() {
    let contenedor = document.getElementById("content-courses");

    for (curso of courses) {
        let card = document.createElement("div");
        card.className = "card open-sans-card";

        card.innerHTML = `
         <img class="image-card" src="${curso.imageCourse}" alt="">
                <h3 class="name-course">${curso.nombre}</h3>
                <div  class="detail-course">
                    <span> ${curso.jornada}  </span><span>  ${curso.duracion} </span>
                </div>
                <div class="content-card-button">

                    <button  class="button-course open-sans-button-card">
                    <a href="curso-info.html?nombre=${curso.nombre}&imagen=${curso.imageCourse}&duracion=${curso.duracion}&jornada=${curso.jornada}&valor=${curso.valor}&descripcion=${curso.descripcion}&beneficios=${curso.beneficios}">Mas Información</a>
                    </button>
                </div>
    `;
        contenedor.appendChild(card);
    }
}





cargarCursos();