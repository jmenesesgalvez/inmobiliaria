const propiedadesVenta = [
  {
    nombre: "Venta 1",
    src: "https://media.istockphoto.com/id/1351189975/es/foto/preciosa-casa-listada-en-venta.jpg?s=2048x2048&w=is&k=20&c=1wxfGurLSeOmsNw_saYvKDKBwtBN04Mpvtf9GqUD5L0=",
    descripcion: "Hermosa casa con amplios espacios.",
    ubicacion: "Ciudad A",
    habitaciones: 4,
    baños: 2,
    costo: 300000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Venta 2",
    src: "https://media.istockphoto.com/id/1390092018/es/foto/casa-con-paneles-solares.jpg?s=612x612&w=0&k=20&c=WpoLDpC77AaIyXb4rf-mp2MMTWePRkbkiBMPIMBA1bI=",
    descripcion: "Moderno apartamento en el centro de la ciudad.",
    ubicacion: "Ciudad B",
    habitaciones: 2,
    baños: 3,
    costo: 150000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Terreno en Venta 3",
    src: "https://media.istockphoto.com/id/1390092018/es/foto/casa-con-paneles-solares.jpg?s=612x612&w=0&k=20&c=WpoLDpC77AaIyXb4rf-mp2MMTWePRkbkiBMPIMBA1bI=",
    descripcion: "Gran terreno ideal para construcción.",
    ubicacion: "Ciudad C",
    habitaciones: 0,
    baños: 1,
    costo: 80000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa en Venta 4",
    src: "https://media.istockphoto.com/id/1335968722/es/foto/hermosa-casa-con-letrero-en-venta-en-el-patio-delantero.jpg?s=2048x2048&w=is&k=20&c=xOygMyFh73qQnKqJg019t30zKBfo_M1YZMjkjyI0JkQ=",
    descripcion: "Casa con jardín y piscina.",
    ubicacion: "Ciudad A",
    habitaciones: 3,
    baños: 0,
    costo: 250000,
    smoke: true,
    pets: true,
  },
];

console.log("Propiedades en Venta:", propiedadesVenta);

var ventasContainer = document.getElementById("ventas-container");

for (var i = 0; i < propiedadesVenta.length; i++) {
  var propiedad = propiedadesVenta[i];
  var permitirFumarColor = propiedad.smoke ? "green" : "red";
  var permitirMascotasColor = propiedad.pets ? "green" : "red";
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
  ventasContainer.innerHTML += propiedadHTML;
}
