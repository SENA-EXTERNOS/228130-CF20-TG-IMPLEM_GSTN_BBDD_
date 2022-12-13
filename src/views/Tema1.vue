<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Pruebas
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Las pruebas de base de datos son aquellas que se realizan para comprobar los diferentes métodos y procesos implementados en la gestión de la base de datos, para asegurarse que cumplan las diferentes reglas de los datos como se espera, y durante la manipulación de los mismos, que aquellos no difieran, o sean borrados, creados o modificados de manera inesperada. También las pruebas abordan el concepto de calidad de los servicios en cuanto a la efectividad de los datos y la concurrencia de los usuarios a dicha bases.
        .cajon.color-acento-contenido.p-4
          p.mb-0 Además, las pruebas son una técnica de detención de defectos que se caracteriza por construir fallas o errores de manera planificada. El objetivo es detectar fallas antes del paso a producción.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img1.svg', style="width: 450px").m-auto
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema1/img4.svg', style="width: 30px").m-auto
      .col
        p.mb-0 #[b Diseño de casos de prueba]
    .row.align.items-center
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img1.png', style="width: 450px").m-auto
      .col-lg-7(data-aos="fade-left")
        p El diseño de casos de prueba es una parte fundamental en las diferentes pruebas por componentes y sistemas de bases de datos, en donde se diseñan casos de prueba (entradas y salidas esperadas) para la comprobación del sistema de BD.
        p El objetivo crucial en el diseño de casos de prueba es construir un conjunto de ellos que sea eficiente, descubriendo posibles defectos en los programas y como resultado final se demuestra que el sistema de bases de datos cumple o satisface los requerimientos (Blanquicett, et al. 2018).
        p Cómo se diseña un caso de prueba:
        ul.lista-ul
          li 
            i.fas.fa-check(style="color: #FFB30B")
            | Selecciona una característica de la base de datos o el componente que se desea probar.
          li 
            i.fas.fa-check(style="color: #FFB30B")
            | Seleccionar un conjunto de entradas que ejecutarán las características pertinentes.
          li 
            i.fas.fa-check(style="color: #FFB30B")
            | Documentar las salidas obtenidas o los diferentes rangos de salida.
    p.mb-5(data-aos="fade-up") En la actualidad existen una gran variedad de aproximaciones que sirven como guía para generar diseños de casos de prueba: pruebas basadas en requerimientos, pruebas de particiones y pruebas estructurales.
    h4.text-center.mb-5 Diseños de casos de prueba
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        ImagenInfografica.color-acento-contenido
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img2.svg')
          .tarjeta.color-acento-contenido.p-2(x="17%" y="70%" numero="+").shadow-lg
            .row
              .col-12.p-2
                p.text-center.mb-0 #[b Pruebas de particiones]
              .col-12
                .row.bg-c1.m-0.p-0
                  .col-12.p-3
                    p Este tipo de pruebas consiste en identificar #[b particiones] de entradas y salidas, y se diseñan las respectivas pruebas para que el sistema ejecute las entradas correspondientes a todas esas particiones y genere sus salidas.
                    p Para tener en cuenta: las particiones son datos agrupados según características comunes.
                    p.mb-0 Una buena práctica para seleccionar caso de pruebas consiste en la elección de casos de pruebas en los límites de las particiones junto con casos de pruebas cercanos al punto medio de las particiones, se eligen de acuerdo con las especificaciones del programa.
          .tarjeta.color-acento-botones.p-2(x="44%" y="50%" numero="+").shadow-lg
            .row
              .col-12.p-2
                p.text-center.txt-c1.mb-0 #[b Pruebas basadas en requerimientos]
              .col-12
                .row.bg-c1.m-0.p-0
                  .col-12.p-3
                    p Se diseñan puntualmente para probar los requerimientos del sistema; esta aproximación generalmente se implementa en la etapa de pruebas del sistema.
                    p Para cada requerimiento registrado, se identifican diferentes casos de prueba que demuestran que el sistema satisface dicho requerimiento.
                    ul.lista-ul
                      li 
                        i.fas.fa-check(style="color: #FFB30B")
                        | Demostrar que el sistema implementó adecuadamente sus requerimientos.
                      li 
                        i.fas.fa-check(style="color: #FFB30B")
                        | Probar atributos no funcionales como la fiabilidad o la usabilidad.
          .tarjeta.color-secundario.p-2(x="77%" y="73%" numero="+").shadow-lg
            .row
              .col-12.p-2
                p.text-center.txt-c1.mb-0 #[b Pruebas basadas en requerimientos]
              .col-12
                .row.bg-c1.m-0.p-0
                  .col-12.p-3
                    p Conocer la estructura de la base de datos para diseñar las respectivas pruebas con el objetivo de ejecutar todas las partes de la base de datos.
                    p.mb-0 Este tipo de aproximaciones son denominadas pruebas de caja blanca.
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema1/img4.svg', style="width: 30px").m-auto
      .col
        p.mb-0 #[b Herramientas tecnológicas para pruebas]
    .row.align.items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-4 En la actualidad existen muchas herramientas dedicadas a testear (probar) determinados aspectos de un sistema, las cuales se clasifican según el objetivo en que se centran para dichas pruebas.
        p.mb-4 #[b Características]
        .row.justify-content-center
          .col-lg-7
            ul.lista-ul
              li 
                i.fas.fa-check(style="color: #FFB30B")
                | Capacidad de admitir el marco de pruebas.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                | Control de revisión.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                | Gestión de configuración de prueba.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                | Seguimiento de problemas.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                | Generación de informes.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                | Capacidad de configurar formatos de informes.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img3.svg', style="width: 450px").m-auto
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema1/img4.svg', style="width: 30px").m-auto
      .col
        p.mb-0 #[b Tipo de herramientas tecnológicas para pruebas]
    p.mb-5(data-aos="fade-up") Dentro de las herramientas tecnológicas para prueba se encuentran algunos tipos como: estructural, funcional y no funcional. A continuación, se presenta información sobre estos.
    TabsB.color-acento-botones(data-aos="fade-right")
      .py-4.py-md-5(titulo="Estructural" :icono="require('@/assets/curso/tema1/img5.svg')")
        .row.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            p El tipo de pruebas estructurales se puede ejecutar en todos los niveles de las pruebas, siendo especialmente efectivo para medir estructura o arquitectura de la base de datos. Para expresar el alcance como un conjunto de pruebas se emplea el concepto de cobertura.
            p Es habitual en muchos casos, al implementar este tipo de pruebas estructurales, acompañarlo con herramientas de apoyo para validar la cobertura del código, como es el caso de pruebas de integración o pruebas de componentes, este tipo son llamadas también pruebas de caja blanca.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img8.svg', style="width: 450px").m-auto
      .py-4.py-md-5(titulo="Funcional" :icono="require('@/assets/curso/tema1/img6.svg')")
        .row.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            p Se centran en el comportamiento del sistema, o cierta parte del componente del sistema, descrito en las especificaciones de los requerimientos.
            p Por ende, se definen a partir de funciones o características y su respectiva interoperabilidad con diferentes partes del sistema, lográndose ejecutar en todos los niveles de pruebas integración, componentes, sistemas, etc.
            p Se consideran pruebas de caja negra (“black-box testing”) puesto que se valora el comportamiento externo del sistema. Las pruebas de seguridad o las pruebas de interoperabilidad entre sistemas o componentes son casos especializados de las pruebas funcionales (Ramos et al 2019).
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img9.svg', style="width: 450px").m-auto
      .py-4.py-md-5(titulo="No funcional" :icono="require('@/assets/curso/tema1/img7.svg')")
        .row.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            p Las pruebas no funcionales incluyen las de rendimiento, carga, estrés, usabilidad, mantenibilidad, fiabilidad o portabilidad, entre otras. Por ende, se centran en características del software que establecen “cómo trabaja el sistema” (Reyes et al, 2020).
            p También se pueden ejecutar en todos los niveles de pruebas, se puede testear de diversas formas, por ejemplo, por tiempos de respuesta en el caso de pruebas de rendimiento o por número máximo de clientes conectados en pruebas de estrés.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img10.svg', style="width: 350px").m-auto
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
