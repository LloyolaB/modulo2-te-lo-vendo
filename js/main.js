let table = new DataTable("#myTable");

$(document).ready(function () {
  $("#tablaProductosFetchAjax").DataTable({
    responsive: true,
    ajax: {
      url: "https://dummyjson.com/products",
      dataSrc: "products",
      type: "GET",
      dataType: "json",
      //   data: {},
      //   serverside: true,
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/1.13.4/i18n/es-CL.json",
    },
    columns: [
      {
        render: function (data, type, row) {
          return '<img class="img-fluid" src="' + row.thumbnail + '" alt="' + row.title + '">';
        },
        title: "Imagen",
      },
      { data: "title", title: "Nombre del producto" },
      { data: "description", title: "Descripción del producto" },
      { data: "brand", title: "Marca" },
      { data: "stock", title: "Stock disponible" },
      { data: "price", title: "Precio del producto" },
    ],
    columnDefs: [],
  });
});

// window.onload = function () {
//   console.log("esto funciona cuando se termina de cargar la pagina");
// };
// function mostrarAlerta() {
//   alert("Hola mundo");
// }
//arrow function / funcion de flecha
// const mostrarAlertaAnonimo = (a) => {
//   console.log("hola");
// };

// ((a) => {
//   console.log(a);
// })("Ignacio como estas?");
// parametro y argumentos
// mostrarAlertaAnonimo("Ignacio");
