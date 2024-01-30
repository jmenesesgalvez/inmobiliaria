const propiedadesAlquiler = [
  {
    nombre: "Alquiler 1",
    src: "https://media.istockphoto.com/id/155700839/es/foto/casa-cartel-de-alquiler.jpg?s=2048x2048&w=is&k=20&c=L86L0miSUuBLlqIza4NHa0qJD9cfilsiZP0AGJTjrrQ=",
    descripcion: "Acogedor apartamento con vista al mar.",
    ubicacion: "Ciudad B",
    habitaciones: 1,
    baños: 2,
    costo: 1200,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Alquiler 2",
    src: "https://media.istockphoto.com/id/155700839/es/foto/casa-cartel-de-alquiler.jpg?s=2048x2048&w=is&k=20&c=L86L0miSUuBLlqIza4NHa0qJD9cfilsiZP0AGJTjrrQ=",
    descripcion: "Oficina espaciosa con excelente ubicación.",
    ubicacion: "Ciudad C",
    habitaciones: 0,
    baños: 3,
    costo: 800,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Alquiler 3",
    src: "https://media.istockphoto.com/id/178180592/es/foto/asamblea-para-alquiler.jpg?s=2048x2048&w=is&k=20&c=ui7c3pff8blFTnNPrLGx-9faY8e8OthWt_3V6hSXuUk=",
    descripcion: "Local comercial en zona comercial.",
    ubicacion: "Ciudad A",
    habitaciones: 0,
    baños: 1,
    costo: 1000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Alquiler 4",
    src: "https://media.istockphoto.com/id/178180592/es/foto/asamblea-para-alquiler.jpg?s=2048x2048&w=is&k=20&c=ui7c3pff8blFTnNPrLGx-9faY8e8OthWt_3V6hSXuUk=",
    descripcion: "Apartamento amueblado con todas las comodidades.",
    ubicacion: "Ciudad B",
    habitaciones: 2,
    baños: 0,
    costo: 1500,
    smoke: true,
    pets: true,
  },
];

console.log("Propiedades en Alquiler:", propiedadesAlquiler);

var alquilerContainer = document.getElementById("alquiler-container");

for (var i = 0; i < propiedadesAlquiler.length; i++) {
  var propiedad = propiedadesAlquiler[i];
  var permitirFumarColor = propiedad.smoke ? 'green' : 'red';
  var permitirMascotasColor = propiedad.pets ? 'green' : 'red';
  var propiedadHTML = `
  <div class="container mt-5">
  <!-- Propiedades en venta -->
  <section id="venta">
    
    <div class="row">
      <div class="col-md-4 mb-4">

          <div class="card">
            <img
              src="${propiedad.src}"
              class="card-img-top"
              alt="Imagen del departamento"
            />
            <div class="card-body">
              <h5 class="card-title">
              ${propiedad.nombre}
              </h5>
              <p class="card-text">
              ${propiedad.descripcion}
                vistas espectaculares
              </p>
              <p>
                <i class="fas fa-map-marker-alt"></i>${propiedad.ubicacion}
              </p>
              <p>
                <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
                <i class="fas fa-bath"></i> ${propiedad.baños}
              </p>
              <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
              <p class="text-danger">
              <span style="color: ${permitirFumarColor};">${
  propiedad.smoke
    ? '<i class="fas fa-smoking"></i> Permitido Fumar'
    : '<i class="fas fa-smoking-ban"></i> No se permite fumar'
}</span>
              </p>
              <p class="text-success">
              <span style="color: ${permitirMascotasColor};">${
  propiedad.pets
    ? '<i class="fas fa-paw"></i> Mascotas Permitidas'
    : '<i class="fa-solid fa-ban"></i> No se permiten Mascotas'
}</span>

              </p>
            </div>
          </div>
          </div>
          </div>
          </div>

  `;
  alquilerContainer.innerHTML += propiedadHTML;
}
