<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Plan de pruebas
    p.mb-5(data-aos="fade-up") En la temática de pruebas de software resaltan dos términos que vale la pena profundizar y conocer.
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10
        .bloque-texto-a.color-primario.p-4
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8.border-c1.p-4.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4
                h4 #[i Suite] de pruebas
                p Es un conjunto de pruebas de forma organizadas, donde se destinan los diferentes casos de pruebas en lo que se refiere a su código fuente, el conjunto de pruebas o la colección de dependencias o el conjunto de las respectivas pruebas que se le aplicarán al sistema.
                p El conjunto de pruebas es muy similar al tener un archivador y dentro de él se ingresa cada uno de los casos de pruebas.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema5/img1.svg', style="width: 350px").m-auto
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema1/img4.svg', style="width: 30px").m-auto
      .col
        p.mb-0 #[b Plan de pruebas]
    .row.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema5/img1.png', style="width: 550px").m-auto
      .col-lg-7(data-aos="fade-left")
        p La respectiva configuración que lleva un plan de pruebas va en términos de pruebas manuales, pruebas automatizadas acompañada de un formato de forma general describiendo cada uno de los pasos como se van a ejecutar dichas pruebas. Iniciaran con la evaluación del sistema implementado los conjuntos de pruebas y los casos de pruebas propuestos, antes de realizar cambios o adicionar nuevas funciones (Pérez et al. 2020).
        .cajon.color-acento-contenido.p-4
          p.mb-0 Además, describe el objetivo de la prueba general y brinda un registro de la gestión de planificación de pruebas. Este plan de pruebas es muy flexible permitiendo ajustar a las necesidades del equipo de trabajo.
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema1/img4.svg', style="width: 30px").m-auto
      .col
        p.mb-0 #[b Componentes del plan de pruebas]
    p.mb-5(data-aos="fade-right") El plan de pruebas contiene unos componentes los cuales se describen a continuación:
    .tarjeta.tarjeta--gris.p-4.mb-5(data-aos="fade-left")
      LineaTiempoC.color-primario(text-small)
        .row.justify-content-center.m-1(titulo="Paso 1")
          .col-lg-6.mb-4.mb-lg-0
            p #[b Identificador]
            p Permite la identificación del plan de pruebas con respecto a otro existente, debe ser único e irrepetible. No debe existir otro plan con este identificador, el objetivo crucial de este ítem es llevar un control riguroso de todos los planes de pruebas.
            p #[b Ejemplo]: Plan 001 - (Nombre del plan)
          .col-lg-4
            figure
              img(src='@/assets/curso/tema5/img2.png', style="width: 450px").m-auto
        .row.justify-content-center.m-1(titulo="Paso 2")
          .col-lg-6.mb-4.mb-lg-0
            p #[b Introducción]
            p Es la parte inicial del documento, el objetivo principal es detallar el alcance de las pruebas, generando una breve explicación o resumen de todas las secciones que integran el plan de pruebas.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema5/img3.png', style="width: 450px").m-auto
        .row.justify-content-center.m-1(titulo="Paso 3")
          .col-lg-6.mb-4.mb-lg-0
            p #[b Objetivo]
            p Expresa la finalidad del plan de pruebas, no corresponde destacar resultados esperados o medibles mediante indicadores.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema5/img4.png', style="width: 450px").m-auto
        .row.justify-content-center.m-1(titulo="Paso 4")
          .col-lg-6.mb-4.mb-lg-0
            p #[b Estrategia]
            p Expresa la metodología que se va a implementar, las acciones que se ejecutaran para permitir alcanzar el objetivo general del plan de pruebas.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema5/img5.png', style="width: 450px").m-auto
        .row.justify-content-center.m-1(titulo="Paso 5")
          .col-lg-6.mb-4.mb-lg-0
            p #[b Alcance]
            p Corresponde en trazar los límites de la totalidad del trabajo que se necesita para dar por culminado el plan de pruebas.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema5/img6.png', style="width: 450px").m-auto
        .row.justify-content-center.m-1(titulo="Paso 6")
          .col-lg-6.mb-4.mb-lg-0
            p #[b Propósito]
            p Determinación de lo que se espera al momento de terminar la implementación del plan de pruebas.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema5/img7.png', style="width: 450px").m-auto
    p.mb-5(data-aos="fade-up") Continuando con la temática del plan de pruebas se aborda información sobre: documentación, características, criterios, tareas, modificadores.
    .row
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema5/img2.svg', style="width: 450px").m-auto
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Documentación o entregables")
            .col-12
              p En esta fase corresponde al alistamiento de todos los documentos que se entregaran como parte de la implementación del plan de pruebas, especificando los siguientes datos:
              ul.lista-ul
                li 
                  i.fas.fa-check(style="color: #FFB30B")
                  |
                  p.mb-0 Nombre del documento.
                li 
                  i.fas.fa-check(style="color: #FFB30B")
                  |
                  p.mb-0 Persona encargada de la entrega del documento.
                li 
                  i.fas.fa-check(style="color: #FFB30B")
                  |
                  p.mb-0 Nombre de la persona que recibe este documento.
                li 
                  i.fas.fa-check(style="color: #FFB30B")
                  |
                  p.mb-0 Fecha planificada.
                li 
                  i.fas.fa-check(style="color: #FFB30B")
                  |
                  p.mb-0 Fecha de entrega de cada uno de los entregables.
              p Se recomienda la implementación de una tabla donde el tipo de letra, el tamaño de la letra y los colores de la tabla sean de forma concisa y entendible para que todas las personas involucradas en el plan de pruebas, puedan identificar de forma eficiente las características de los entregables.
              p Una lista de los documentos que se deben entregar en esta fase:
              ul.lista-ul
                li 
                  i.fas.fa-check(style="color: #FFB30B")
                  |
                  p.mb-0 Casos de pruebas.
                li 
                  i.fas.fa-check(style="color: #FFB30B")
                  |
                  p.mb-0 Especificación del diseño del caso de prueba.
                li 
                  i.fas.fa-check(style="color: #FFB30B")
                  |
                  p.mb-0 Reportes de defectos o novedades.
                li 
                  i.fas.fa-check(style="color: #FFB30B")
                  |
                  p.mb-0 Evidencias de las pruebas.
                li 
                  i.fas.fa-check(style="color: #FFB30B")
                  |
                  p.mb-0 Reportes reflejados por alguna herramienta de gestión de pruebas.
                li 
                  i.fas.fa-check(style="color: #FFB30B")
                  |
                  p.mb-0 otro documento que se considere relevante entregar y/o adjuntar.
          .row(titulo="Características a ser probadas")
            .col-12
              p En este ítem se realiza una lista de todas las características que serán objetos de pruebas. Es de vital importancia realizar la lista con los interesados del proyecto, para determinar con exactitud las características que serán probadas en el plan.
              p Algunas características a tener en cuenta son:
              ul.lista-ul
                li 
                  i.fas.fa-check(style="color: #FFB30B")
                  |
                  p.mb-0 Características funcionales.
                li 
                  i.fas.fa-check(style="color: #FFB30B")
                  |
                  p.mb-0 Características no funcionales.
                li 
                  i.fas.fa-check(style="color: #FFB30B")
                  |
                  p.mb-0 Interfaz gráfica, etc.
              p Estas características se deben declarar de forma clara y concisa para no tener inconvenientes al momento de ejecutar las pruebas.
          .row(titulo="Características que no van a ser probadas")
            .col-12
              p Se debe realiza una lista de las características que no van a ser probadas, justificando por qué no serán parte del plan de pruebas y el riesgo que se pueden generar al no contemplarse.
          .row(titulo="Criterios de aprobación y fallo")
            .col-12
              p En esta sección se describen los criterios de aceptación que se corroboran al ejecutar cada una de las respectivas pruebas.  Todo error reportado debe ir acompañado de su respectivo mensaje de validación. Cuando un criterio de aprobación es rechazado se toman las respectivas correcciones por el criterio de fallo. Todo criterio de aceptación debe ir siempre acompañado con su respectivo criterio de fallo, donde se especifica la acción que se ejecutará sobre el plan de pruebas.
          .row(titulo="Tareas de prueba")
            .col-12
              p Describen cada una de las tareas y su respectiva fecha de ejecución, el objetivo es mantener un buen control de cada una de las tareas incluidas en el plan. Se recomienda tener en cuenta las siguientes indicaciones:
              ul.lista-ul
                li 
                  i.fas.fa-check(style="color: #FFB30B")
                  |
                  p.mb-0 Establecer el nombre de la tarea.
                li 
                  i.fas.fa-check(style="color: #FFB30B")
                  |
                  p.mb-0 Descripción de la tarea.
                li 
                  i.fas.fa-check(style="color: #FFB30B")
                  |
                  p.mb-0 Fecha de inicio.
                li 
                  i.fas.fa-check(style="color: #FFB30B")
                  |
                  p.mb-0 Fecha de finalización.
                li 
                  i.fas.fa-check(style="color: #FFB30B")
                  |
                  p.mb-0 Duración de la tarea.
                li 
                  i.fas.fa-check(style="color: #FFB30B")
                  |
                  p.mb-0 Persona responsable de la tarea.
                li 
                  i.fas.fa-check(style="color: #FFB30B")
                  |
                  p.mb-0 Rol que desempeña la tarea.
              p Para determinar la duración de cada una de las tareas es crucial implementar un WBS (Estructura de Descomposición del Trabajo), donde dentro de él se describe cada una de las tareas de forma desglosada para obtener dicha duración, o se puede pedir opinión a expertos para tener una visión más específica.
          .row(titulo="Modificadores")
            .col-12
              p Hay dos tipos de modificaciones o ampliaciones dentro de un plan de pruebas, que han de tomarse en cuenta para que se pueda cubrir toda la funcionalidad existente:
              p #[b Funcionalidades de usuario final]: cuando se agregan nuevos módulos, pantallas o flujos en las funcionalidades que son utilizadas por el cliente o se evidencian visualmente. 
              p #[b Funcionalidades internas]: son cambios internos que mantienen todos los elementos visuales de la misma manera, por lo tanto, el cliente final no observa ninguna modificación, pero al modificar componentes o flujos internos, como accesos a base de datos o a capas de lógica de negocio, deben cubrirse con casos de pruebas dentro del plan de pruebas e incluir toda la funcionalidad de este tipo.

</template>

<script>
export default {
  name: 'Tema5',
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
