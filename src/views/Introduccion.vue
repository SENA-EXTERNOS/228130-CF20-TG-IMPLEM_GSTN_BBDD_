<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/intro/img1.svg', style="width: 450px").m-auto
      .col-lg-8(data-aos="fade-left")
        p Estimado aprendiz, a través del presente componente formativo conocerá sobre las pruebas, sus herramientas y modelos de referencia, las cuales le aportan al diseño y a la construcción del mismo plan de pruebas, aplicado a una base de datos mediante la implementación de herramientas tecnológicas definidas en casos de este tipo. 
        p Lo invitamos a ver el siguiente video para documentarse sobre cada una de las temáticas comprendidas.
        p #[b ¡Muchos éxitos en este proceso de aprendizaje!]
    figure(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/EbZyEKhsXSs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
