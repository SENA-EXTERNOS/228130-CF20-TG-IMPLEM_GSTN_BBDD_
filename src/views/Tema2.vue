<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Herramientas de prueba
    .row.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img1.png', style="width: 450px").m-auto
      .col-lg-7(data-aos="fade-left")
        p.mb-4 Las herramientas implementadas en pruebas del sistema y bases de datos automatizadas, aportan un gran beneficio a la ejecución de pruebas funcionales y de regresión en el respectivo sistema. Estas deben aportar unos resultados significativos y consistentes respecto a los datos de entrada proporcionados.
        p #[b Características]
        ul.lista-ul
          li 
            i.fas.fa-check(style="color: #FFB30B")
            |
            p.mb-0 La prueba de base de datos implica la prueba de diferentes capas, como la capa de interfaz de usuario, la capa de acceso, la capa empresarial y finalmente la base de datos.
          li 
            i.fas.fa-check(style="color: #FFB30B")
            |
            p.mb-0 La prueba de base de datos se utiliza para verificar la integridad de los datos, el mapeo de datos y las propiedades ACID (#[i Atomicity, Consistency, Isolation y Durability]) de la base de datos.
          li 
            i.fas.fa-check(style="color: #FFB30B")
            |
            p.mb-0 Los resultados obtenidos en determinada herramienta son fundamentales como guía para realizar cambios o como base de documentación de las funcionalidades de la base de datos.
          li 
            i.fas.fa-check(style="color: #FFB30B")
            |
            p.mb-0 Cada una de las herramientas tiene su objetivo determinado en pro de generar los mejores resultados de las pruebas a realizar.
          li 
            i.fas.fa-check(style="color: #FFB30B")
            |
            p.mb-0 Las herramientas disponen de un manual técnico para realizar detalladamente las pruebas, desde su página oficial.
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema1/img4.svg', style="width: 30px").m-auto
      .col
        p.mb-0 #[b Tipos]
    p.mb-5(data-aos="fade-right") Las herramientas de prueba se pueden clasificar en los siguientes tipos:
    .tarjeta.tarjeta--gris.p-4.mb-5(data-aos="fade-down")
      LineaTiempoC.color-primario(text-small)
        .row.justify-content-center.m-1(titulo="Paso 1")
          .col-lg-6.mb-4.mb-lg-0
            p #[b Pruebas unitarias]
            p Son pruebas de muy bajo nivel y son ejecutadas cercar de la fuente de la aplicación. Su funcionamiento consiste en probar métodos y funciones de forma individual, y los diferentes módulos o componentes del sistema. Este tipo de pruebas son en realidad muy económicas al momento de automatizarlas y se puede ejecutar mediante un servidor de integración continua.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img2.png', style="width: 350px").m-auto
        .row.justify-content-center.m-1(titulo="Paso 2")
          .col-lg-6.mb-4.mb-lg-0
            p #[b Pruebas de integración]
            p Tienen por objetivo verificar que los diferentes módulos y componentes funcionan bien en conjunto. Este tipo de pruebas son un poco más costosas al momento de automatizarlas, ya que se requiere que todos los componentes marchen a la perfección.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img3.png', style="width: 350px").m-auto
        .row.justify-content-center.m-1(titulo="Paso 3")
          .col-lg-6.mb-4.mb-lg-0
            p #[b Pruebas funcionales]
            p Se centran en los requerimientos del sistema, solo verifican el resultado de una acción y no comprueban los diferentes estados intermedios para realizar dicha acción.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img4.png', style="width: 350px").m-auto
        .row.justify-content-center.m-1(titulo="Paso 4")
          .col-lg-6.mb-4.mb-lg-0
            p #[b Pruebas integrales]
            p Se encargan de replicar el comportamiento de usuario con el sistema. Estas pruebas son muy útiles para realizar seguimiento y test a las bases de datos, pero resultan muy difíciles de mantener y muy costosas de llevar a cabo cuando se encuentran automatizadas.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img5.png', style="width: 350px").m-auto
        .row.justify-content-center.m-1(titulo="Paso 5")
          .col-lg-6.mb-4.mb-lg-0
            p #[b Pruebas de aceptación]
            p Son pruebas formales que verifican si el sistema en cuestión satisface los requerimientos empresariales.  Es requisito fundamental que se esté ejecutando la aplicación durante las respectivas pruebas y se centren en replicar el comportamiento o conductas de los usuarios. También se puede medir el rendimiento del sistema y rechazar o aceptar posibles cambios según los objetivos trazados.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img6.png', style="width: 350px").m-auto
        .row.justify-content-center.m-1(titulo="Paso 6")
          .col-lg-6.mb-4.mb-lg-0
            p #[b Pruebas de rendimiento]
            p Son las encargadas de evaluar el rendimiento de un sistema con una carga de trabajo determinado. Ayudan a medir la fiabilidad, la velocidad, la escalabilidad y la capacidad de respuesta de una aplicación.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img7.png', style="width: 350px").m-auto
        .row.justify-content-center.m-1(titulo="Paso 7")
          .col-lg-6.mb-4.mb-lg-0
            p #[b Pruebas de humo]
            p Las pruebas de humo son una clase de pruebas básicas que sirven para evaluar el funcionamiento básico del sistema.  Son pruebas para ejecutar de forma rápida y su objetivo primordial es garantizar que las principales funciones del sistema operen de forma eficiente y según lo previsto.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img8.png', style="width: 350px").m-auto
        .row.justify-content-center.m-1(titulo="Paso 8")
          .col-lg-6.mb-4.mb-lg-0
            p #[b Pruebas de comunicación]
            p Son las encargadas de medir si hay comunicación con los diferentes dispositivos hardware, con la respectiva base de datos.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img9.png', style="width: 350px").m-auto
        .row.justify-content-center.m-1(titulo="Paso 9")
          .col-lg-6.mb-4.mb-lg-0
            p #[b Pruebas de volumen]
            p Simula la carga de muchos datos, para la medición del desempeño de la base de datos frente a una carga considerable de datos a ser procesados.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img10.png', style="width: 350px").m-auto
        .row.justify-content-center.m-1(titulo="Paso 10")
          .col-lg-6.mb-4.mb-lg-0
            p #[b Pruebas de sobrecarga]
            p Estas pruebas se utilizan para calcular la capacidad límite dándole cargas excesivas y diferentes peticiones, muchas veces con el objetivo de crear cuellos de botella para que determine comportamientos.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img11.png', style="width: 350px").m-auto
        .row.justify-content-center.m-1(titulo="Paso 11")
          .col-lg-6.mb-4.mb-lg-0
            p #[b Prueba de disponibilidad de datos]
            p Se enfoca en la respuesta de los daros desde la base de datos, con el objetivo de realizar la medición o posibles fallos inesperados.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img12.png', style="width: 350px").m-auto
        .row.justify-content-center.m-1(titulo="Paso 12")
          .col-lg-6.mb-4.mb-lg-0
            p #[b Pruebas de facilidad de uso]
            p Evalúa la adaptación por parte de los usuarios en cuanto a ingreso y presentación de los datos, si se familiarizan con la forma de trabajo habitual.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img13.png', style="width: 350px").m-auto
        .row.justify-content-center.m-1(titulo="Paso 13")
          .col-lg-6.mb-4.mb-lg-0
            p #[b Pruebas de operación]
            p Consiste en la validación del funcionamiento del sistema con sus respectivos componentes, procedimientos de operación, incluyendo su respectivo arranque y disposición de la base de datos.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img14.png', style="width: 350px").m-auto
        .row.justify-content-center.m-1(titulo="Paso 14")
          .col-lg-6.mb-4.mb-lg-0
            p #[b Pruebas de entorno]
            p Se encargan de la validación de cómo interacciona el sistema respecto a otros sistemas.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img15.png', style="width: 350px").m-auto
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2/img1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Herramientas automatizadas
                  p.text-small Para conocer sobre herramientas automatizadas que realizan pruebas a las bases de datos, se invita a consultar el documento.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/anexo1.pdf')" target="_blank")
                    span(style="color:#000 !important") Descargar
                    i.fas.fa-file-download(style="color:#000 !important")
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema1/img4.svg', style="width: 30px").m-auto
      .col
        p.mb-0 #[b Instalación y ejecución de pruebas de rendimiento de una base de datos MySQL]
    .row.mb-5
      .col-lg-1.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img2.svg', style="width: 100px").m-auto
      .col-lg-11(data-aos="fade-left")
        p.mb-0 Instalación y ejecución de pruebas de rendimiento de una base de datos MySQL por medio de una herramienta tecnológica llamada Jmeter, donde se puede revisar y exportar un resumen del resultado de las pruebas y exportar, además, un reporte gráfico donde se evidencian todos los ítems que se tienen en cuenta para la validación del rendimiento de una base de datos.
    figure(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/EbZyEKhsXSs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
