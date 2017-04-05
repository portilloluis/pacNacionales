$(document).ready(function(){

   //Activa el calendario en los buscadores
   $('.date').datepicker({});

   //Esconde los pasajeros en buscador autobus-hotel
   $("#agregaDescuento").click(function(){
       $(".descuentosPasajeros").toggle("slow");
   })

   //Carrusel Galerias
   var owl = $('#galeria');
   owl.owlCarousel({
       loop: true,
       responsive: {
          768: {
            items: 1
          }
       }
   })

   //Carrusel Saliendo desde
   var owl = $('.paqueteTab');
   owl.owlCarousel({
       margin: 5,
       loop: true,
       responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
       }
   })

   //Carrusel Paginas posicionamiento
   var owl = $('#paginasPosicionamiento');
   owl.owlCarousel({
       margin: 5,
       loop: true,
       responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
       }
   })

   //Activa tooltip en signo de admiración de viaje con niños menores
   $('#buscador .fa-exclamation-circle').tooltip({
       title: "El infante pagará un costo estipulado en la regla tarifaria que aplique. Debe viajar un adulto por cada niño menor de dos años. El niño deberá ser menor a 2 años a la fecha de viaje tanto de ida como de regreso.",
       placement: "bottom"
   });

});
