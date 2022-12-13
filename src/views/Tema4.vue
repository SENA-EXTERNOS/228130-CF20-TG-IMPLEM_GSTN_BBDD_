<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Casos de prueba
    p.mb-5(data-aos="fade-right") A continuación, se aborda lo referente a los casos de prueba: conceptos, composición, tipos, formatos, entre otros.
    TabsC.color-acento-contenido(data-aos="fade-left")
      .py-3.py-md-4(titulo="Conceptos")
        .row.m-1
          .col-lg-7.mb-4.mb-lg-0
            p Un caso de prueba es un conjunto de variables o condiciones donde se especificará que un determinado sistema, parte del componente del sistema, o una base de datos, o determinada característica cumple o no cumple con los requerimientos.
            p Un dato importante al realizar casos de pruebas es que está destinado a probar una tarea en específico o una variable. Esto beneficia al momento de implementar una herramienta de testing, ya que cuenta con más flexibilidad al momento de realizar las pruebas.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema4/img1.png', style="width: 450px").m-auto
      .py-3.py-md-4(titulo="<em>Script</em> de prueba vs. caso de prueba")
        .row.m-1
          .col-lg-7.mb-4.mb-lg-0
            p Un script de prueba es un programa corto cuyo objetivo es evaluar determinadas funciones. Un caso de prueba es un documento con una serie de pasos planificados que se debe completar para cumplir un objetivo propuesto.
          .col-lg-5
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 3.] #[i Script] de prueba vs. caso de prueba
            figure
              img(src='@/assets/curso/tema4/img1.svg', style="width: 550px").m-auto
              figcaption.mt-2 Referencia Nota (Mc Mullin, 2021).
      .py-3.py-md-4(titulo="Composición")
        .row.m-1
          .col-lg-7.mb-4.mb-lg-0
            ul.lista-ul
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 #[b Identificador]: puede ser numérico o alfanumérico, como su nombre lo dice permite identificar un caso de prueba según su código.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 #[b Nombre del caso de prueba]: se debe implementar una nomenclatura predefina o estándar. Lo más importante es emplear un nombre significativo en base a lo que se va a probar.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                | 
                p.mb-0 #[b Descripción]: en este ítem se realiza una descripción a detalle, plasmando el componente o la sección que se va a probar, reflejando el ambiente de pruebas, la data que se va a utilizar y las respectivas precondiciones.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 #[b Pasos]: son las etapas de forma secuencial que se van a ejecutar en el caso de prueba.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 #[b Resultados esperados]: obtenido de forma exitosa por la herramienta implementada en la ejecución de las pruebas, y por último concluir o determinar si el respectivo test fue exitoso.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema4/img2.png', style="width: 450px").m-auto
      .py-3.py-md-4(titulo="Tipos")
        .row.m-1
          .col-lg-7.mb-4.mb-lg-0
            p Los casos de prueba tienen la habilidad de medir muchos aspectos del sistema. Los pasos planificados en el caso de pruebas tienen la intención de incluir un resultado de falla en lugar de un resultado exitoso. Algunos ejemplos de casos de pruebas más conocidos son los siguientes:
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 1]. Tipos de caso de prueba
            .tabla-a.color-acento-contenido
              table(style="min-width:auto")
                caption Referencia Nota. Reproducida de Diferentes tipos de casos de prueba. Mc Mullin, (2021).
                thead
                  tr
                    th #[i Test Case Type]
                    th #[i Description]
                    th #[i Test Step]
                    th #[i Expected Result]
                    th #[i Status]
                tbody
                  tr
                    td #[i Functionality]
                    td #[i Area should accommodate up to 20 characters]
                    td #[i Input up to 20 characters]
                    td #[i All 20 characters in the request should be appropriate]
                    td #[i Pass or Fail]
                  tr
                    td #[i Security]
                    td #[i Verify password rules are working]
                    td #[i Create a new password in accordance with rules]
                    td #[i The user’s password will be accepted it adheres to the rules]
                    td #[i Pass or Fail]
                  tr
                    td #[i Usability]
                    td #[i Ensure all links are working properly]
                    td #[i Have users click on various links on the page]
                    td #[i Links will take users to another web page according to the on-page URL]
                    td #[i Pass or Fail]
          .col-lg-5
            figure
              img(src='@/assets/curso/tema4/img3.png', style="width: 450px").m-auto
      .py-3.py-md-4(titulo="Formato")
        .row.m-1
          .col-lg-7.mb-4.mb-lg-0
            p Cada componente de una prueba unitaria definirá aspectos cruciales que incluyen:
            ul.lista-ul
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Funciones a realizar para prueba plasmada.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 La data implementada para la prueba.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                | 
                p.mb-0 Resultados esperados en la ejecución de la prueba.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Aseguramiento de la prueba, que la ejecución sea independiente de los demás componentes del sistema.
            p Es importante tener en cuenta que el formato estándar de pruebas como mínimo debe contener:
            ul.lista-ul
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Un nombre relevante de la prueba.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Datos estandarizados para la prueba.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                | 
                p.mb-0 Nombre del método, unidad o componente bajo prueba.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Aplicar un estado positivo de la prueba.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Ejecución de la prueba unitaria.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema4/img4.png', style="width: 450px").m-auto
      .py-3.py-md-4(titulo="Mejores prácticas")
        .row.m-1
          .col-lg-7.mb-4.mb-lg-0
            p La forma de redactar casos de pruebas de forma eficiente se va logrando con el paso del tiempo y la práctica. Se debe realizar o mantener un título descriptivo, realizar una descripción detallada del caso de prueba y mantener un lenguaje claro y conciso.
            p También se deben plasmar aquellos detalles como los resultados esperados y las diferentes condiciones específicas. Toda esta información es crucial para la ejecución de la prueba por medio de la herramienta tecnológica. 
            p Una lista de aspectos a tener en cuenta para construir casos de pruebas eficientes:
            ul.lista-ul
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Mantener los datos e información de forma transparente.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Construir los casos de pruebas de forma reutilizables.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Mantener los identificadores de los casos de prueba de forma única.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Implementar revisión por pares es muy relevante.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Los casos de prueba construidos deben tener en cuenta los requerimientos definidos.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Detallar los resultados esperados.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema4/img5.png', style="width: 450px").m-auto
      .py-3.py-md-4(titulo="Ejecución")
        .row.m-1
          .col-lg-7.mb-4.mb-lg-0
            p En esta fase se procede a probar la base de datos con los casos de prueba, obteniendo así los resultados reales; se realiza preferiblemente de forma automática.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema4/img6.png', style="width: 450px").m-auto
      .py-3.py-md-4(titulo="Evaluación")
        .row.m-1
          .col-lg-7.mb-4.mb-lg-0
            p En la evaluación de resultados obtenidos se determina si la prueba fue exitosa o no, realizando una comparación sistemática de los resultados obtenidos en la etapa de ejecución de los casos de prueba y los resultados esperados plasmados dentro del caso de prueba. Este proceso se puede realizar de manera manual o automática.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema4/img7.png', style="width: 450px").m-auto

</template>

<script>
export default {
  name: 'Tema4',
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
