<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Modelos de referencia para pruebas
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/img1.svg', style="width: 350px").m-auto
            .col-lg-8.border-c1.p-4
              .bloque-texto-a__texto.p-4
                p Los modelos de referencia para pruebas son una base fundamental para tener como guía al momento de empezar a construir un plan de pruebas, permite visualizar la metodología a implementar y cómo está compuesto cada uno de sus artefactos con el objetivo de llevar un control en cada una de las etapas y sus correspondientes documentos diligenciados como productos y/o entregables.
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema1/img4.svg', style="width: 30px").m-auto
      .col
        p.mb-0 #[b Pruebas de #[i software] basadas en modelos]
    p.mb-5(data-aos="fade-right") A continuación, se presenta información sobre las pruebas de #[i software] como concepto, características, ventajas y modelos.
    h4.mb-4.text-center Pruebas de #[i software] basadas en modelos
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        ImagenInfografica.color-acento-contenido
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img2.svg')
          .tarjeta.color-primario.p-2(x="13%" y="70%" numero="+").shadow-lg
            .row
              .col-12.p-2
                p.text-center.mb-0 #[b Concepto]
              .col-12
                .row.bg-c1.m-0.p-0
                  .col-12.p-3
                    p.mb-0 Este método de pruebas tiene como objetivo generar casos ejecutables basándose en el modelo y diseño de alto nivel del sistema.
          .tarjeta.color-primario.p-2(x="39%" y="70%" numero="+").shadow-lg
            .row
              .col-12.p-2
                p.text-center.mb-0 #[b Características]
              .col-12
                .row.bg-c1.m-0.p-0
                  .col-12.p-3
                    ol.lista-ol--cuadro
                      li 
                        .lista-ol--cuadro__vineta
                          span 1
                        | La construcción de un modelo donde se documenten los aspectos más relevantes del comportamiento del sistema.
                      li 
                        .lista-ol--cuadro__vineta
                          span 2
                        | Generación de casos de pruebas a partir del modelo. Estas pruebas que se van a planificar son de alto nivel, representan la parte lógica de los casos de prueba y no especifican si están descritas en un lenguaje de programación.
                      li 
                        .lista-ol--cuadro__vineta
                          span 3
                        | Corroboración de los casos de prueba. Las pruebas de alto nivel se concretizan por medio de un código o script en alguna tecnología elegida para que sean ejecutadas dichos casos de pruebas.
                      li 
                        .lista-ol--cuadro__vineta
                          span 4
                        | La ejecución de los casos de pruebas sobre el sistema que se está evaluando.
                      li 
                        .lista-ol--cuadro__vineta
                          span 5
                        | La obtención del reporte de los resultados producto de la ejecución de los casos de pruebas.
                      li 
                        .lista-ol--cuadro__vineta
                          span 6
                        | Analizar los resultados obtenidos.
          .tarjeta.color-primario.p-2(x="64%" y="70%" numero="+").shadow-lg
            .row
              .col-12.p-2
                p.text-center.mb-0 #[b Ventajas]
              .col-12
                .row.bg-c1.m-0.p-0
                  .col-12.p-3
                    ul.lista-ul
                      li 
                        i.fas.fa-check(style="color: #FFB30B")
                        | Ubicación de errores en el sistema que se está evaluando.
                      li 
                        i.fas.fa-check(style="color: #FFB30B")
                        | Reducción en los tiempos del proceso y costos en la gestión de pruebas.
                      li 
                        i.fas.fa-check(style="color: #FFB30B")
                        | Mejoramiento de la calidad de las pruebas a ejecutar.
                      li 
                        i.fas.fa-check(style="color: #FFB30B")
                        | Detección de anomalías en ciertos requerimientos.
                      li 
                        i.fas.fa-check(style="color: #FFB30B")
                        | Mejoramiento en la trazabilidad.
                      li 
                        i.fas.fa-check(style="color: #FFB30B")
                        | Requerimientos actualizados y evolucionados.
          .tarjeta.color-primario.p-2(x="90%" y="70%" numero="+").shadow-lg
            .row
              .col-12.p-2
                p.text-center.mb-0 #[b Modelos]
              .col-12
                .row.bg-c1.m-0.p-0
                  .col-12.p-3
                    p Modelos más implementados:
                    ul.lista-ul
                      li 
                        i.fas.fa-check(style="color: #FFB30B")
                        | Modelo de #[i McCall]
                      li 
                        i.fas.fa-check(style="color: #FFB30B")
                        | Modelo de #[i Boehm]
                      li 
                        i.fas.fa-check(style="color: #FFB30B")
                        | Modelo de #[i Gilb]
                      li 
                        i.fas.fa-check(style="color: #FFB30B")
                        | Modelo ISO 9126
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema1/img4.svg', style="width: 30px").m-auto
      .col
        p.mb-0 #[b Modelos para realizar las pruebas de #[i software]]
    p.mb-5(data-aos="fade-down") Los modelos más reconocidos para realizar las pruebas de software son los siguientes:
    .tarjeta.tarjeta--azul.p-4(data-aos="fade-right")
      SlyderA(tipo="b")
        .row.m-1
          .col-lg-6.mb-4.mb-lg-0
            p #[b Modelo #[i McCall]]
            p El modelo McCall se enfoca en la opinión de los usuarios y desarrolladores en tres puntos de vistas cruciales para la medición de calidad del sistema:
            ul.lista-ul
              li 
                i.fas.fa-check(style="color: #FFB30B")
                | Operación.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                | Revisión.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                | Transición.
            p Cada uno de esos parámetros se subdividen en diferentes características que son de gran ayuda para determinar la respectiva validación.
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 1.] Modelo #[i McCall]
            figure
              img(src='@/assets/curso/tema3/img3.svg', style="width: 550px").m-auto
        .row.m-1
          .col-lg-6.mb-4.mb-lg-0
            p #[b Modelo #[i Boehm]]
            p El modelo de #[i Boehm] es definido por un ciclo de vida del tipo espiral, creado por #[i Barry Boehm] en el año de 1988, donde incluye el análisis de riesgos. Las cuatro (4) fases primordiales en este modelo son:
            ul.lista-ul
              li 
                i.fas.fa-check(style="color: #FFB30B")
                | Planificación.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                | Análisis de riesgo.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                | Ingeniería.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                | Evaluación del cliente.
            p Las versiones del sistema a evaluar están dirigidas por el número de iteraciones que va a ser representada en forma de espiral de adentro hacia a fuera, determinando el riesgo y la posible solución.
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 1.] Modelo #[i Boehm]
            figure
              img(src='@/assets/curso/tema3/img4.svg', style="width: 550px").m-auto
        .row.m-1
          .col-lg-6.mb-4.mb-lg-0
            p #[b Paradigma GQM (#[i Goal-Question-Metric])]
            p Este modelo se enfoca en los componentes de mejora en los procesos, creado por Basili y Rombaches por medio de un paradigma que se requiere evaluar mediante preguntas y establecer el cumplimiento de los objetivos.
            p Los puntos relevantes en este modelo son:
            p #[b Metas]: que son los objetivos, las intenciones específicas y generales que va a tener dicha organización.
            p #[b Preguntas]: se establecen los cuestionarios para cada uno de los objetivos con su correspondiente evaluación.
            p #[b Métricas]: son la medición con base en las respuestas de las preguntas; cabe indicar que se realiza un análisis de si esa métrica ayudó al proceso cumpliendo el objetivo deseado.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema3/img1.png', style="width: 550px").m-auto
        .row.m-1
          .col-lg-6.mb-4.mb-lg-0
            p #[b Modelo #[i Gilb]]
            p Mediante este modelo de #[i Gilb] se puede construir una serie de especificaciones las mismas que se describen para determinar la calidad del proyecto.  Este tipo de requerimientos deben ser construidos tanto por el investigador como por el usuario.
            p En realidad, lo que se busca es el cumplimiento de los requerimientos definidos, y obteniendo a su vez una satisfacción por parte del usuario. Cada una de las características definidas son medibles a otros tipos de sub características donde se debe especificar:
            ul.lista-ul
              li 
                i.fas.fa-check(style="color: #FFB30B")
                | Nombre de la característica.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                | Unidad de medición.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                | Prueba o recogida de datos.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                | El valor estimado.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                | El valor óptimo.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                | El valor obtenido en el sistema.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                | Observaciones.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema3/img2.png', style="width: 550px").m-auto
        .row.m-1
          .col-lg-6.mb-4.mb-lg-0
            p #[b Marco ISO 9126]
            p Es un estándar en la ingeniería del software que se fundamenta en el nivel de satisfacción a nivel de producto. El objetivo principal en este tipo de modelo es que el producto cumpla con el requerimiento en un contenido específico de uso.
            p La norma está compuesta por seis factores:
            ul.lista-ul
              li 
                i.fas.fa-check(style="color: #FFB30B")
                | Funcionabilidad.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                | Fiabilidad.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                | Usabilidad.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                | Eficiencia.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                | Mantenibilidad.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                | Portabilidad.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema3/img3.png', style="width: 550px").m-auto
        .row.m-1
          .col-lg-6.mb-4.mb-lg-0
            p #[b Marco ISO 9126]
            p La calidad interna y externa expuesta en ISO9126-1 (2001) se declara “la totalidad de atributos de un producto que determina su capacidad de satisfacer necesidades explícitas e implícitas cuando es usadas bajo condiciones específicas”. Se define como calidad externa “el grado en la que un producto satisface necesidades explícitas e implícitas cuando se utiliza bajo condiciones especificadas.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema3/img4.png', style="width: 550px").m-auto

</template>

<script>
export default {
  name: 'Tema3',
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
