<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Ejecución de pruebas
    p.mb-5(data-aos="fade-down") La ejecución de pruebas es el proceso mediante el cual se implementa una prueba sobre el componente o el sistema que se está probando.
    .row
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema6/img1.svg', style="width: 450px").m-auto
      .col-lg-8(data-aos="fade-left")
        p La preparación de la ejecución de las pruebas comprende la variedad de las pruebas, los flujos de trabajo de la ejecución de los casos de pruebas o conjunto de pruebas, así como la personalización del comportamiento en la ejecución de las pruebas en el entorno. Las siguientes son fases para tener en cuenta en la ejecución de las pruebas:
        ul.lista-ul
          li 
            i.fas.fa-check(style="color: #FFB30B")
            |
            p.mb-0 Visión general de la ejecución de pruebas. Existe una gran variedad en la ejecución de las pruebas, se deben elegir la que mejor se adapten al equipo de prueba.
          li 
            i.fas.fa-check(style="color: #FFB30B")
            |
            p.mb-0 Flujo de trabajo de ejecución de caso de prueba. Las necesidades de ejecución de pruebas a veces pueden ser algo complejas, existen varias funcionalidades que se adaptan al flujo de trabajo para la ejecución de dichas pruebas.
          li 
            i.fas.fa-check(style="color: #FFB30B")
            |
            p.mb-0 Flujo de trabajo de ejecución de conjunto de pruebas Un conjunto de pruebas es una colección de pruebas que fueron agrupada. La gran mayoría de conjuntos de pruebas incluyen pruebas manuales y automatizadas, es de gran beneficio cuando se pueden planificar pruebas automatizadas sin ninguna supervisión. Cuando se procede a ejecutar un conjunto de pruebas, se puede especificar los casos de pruebas de forma secuencial o en paralelo.
          li 
            i.fas.fa-check(style="color: #FFB30B")
            |
            p.mb-0 Preferencias de ejecución de pruebas, Puede personalizar el comportamiento de la ejecución de prueba en su entorno configurando las preferencias del usuario y del sistema relacionadas con dicha ejecución de prueba.
    Separador
    #t_6_1
    .titulo-segundo.color-secundario
      h2 6.1  Creación del entorno
    .row.mb-4
      .col-lg-1.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema6/img2.svg', style="width: 50px").m-auto
      .col-lg-11(data-aos="fade-left")
        p Un entorno de prueba es la respectiva configuración de tipos de entornos para determina prueba. Por ejemplo, un entorno de prueba que implementan #[i Chrome], #[i Windows] 10 y #[i Apache Tomcat] es una configuración de estos tipos de entorno: navegador, sistema operativo y servidor de aplicaciones.
        p Cada tipo de entorno puede tener uno o más valores. Una plataforma de plan de pruebas es el conjunto de todos los tipos de entorno y sus respectivos valores para determinado plan de prueba. La plataforma está encargada del soporte del producto y de la prueba que está realizando el equipo.
    .row.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Los entornos de pruebas se construyen lo más similar posible al entorno de producción, de esta forma al sistema o a la base de datos se pueden realizar dichas pruebas, teniendo en cuenta los cambios sustanciales y el comportamiento no esperado.
        p Los tipos de entornos pueden variar según su comportamiento y objetivo en función al desarrollo del sistema.
        p Existen tres tipos de desarrollo:
        ul.lista-ul
          li 
            i.fas.fa-check(style="color: #FFB30B")
            |
            p.mb-0 Desarrollo #[i web]
          li 
            i.fas.fa-check(style="color: #FFB30B")
            |
            p.mb-0 Servicios #[i web]
          li 
            i.fas.fa-check(style="color: #FFB30B")
            |
            p.mb-0 Publicación de #[i Wikis]
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema6/img3.svg', style="width: 450px").m-auto
    p.mb-5(data-aos="fade-down") Se presenta información sobre la creación de entorno en cuanto, a los tipos de entorno de pruebas, elementos claves, #[i script] de pruebas, ejemplo de #[i script] de pruebas.
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul1")(data-aos="fade-left")
      .row.m-1(titulo="Tipos de entornos de pruebas")
        .col-lg-7.mb-4.mb-lg-0
          p Los entornos de pruebas pueden ser construidos por la empresa que está desarrollando el sistema o por organizaciones que brindan ese tipo de servicio, (Loor et al. 2020).
          p Los tipos de entorno son:
          p #[b Estándar]: pueden ser creados por los administradores o por personas que tengan permisos por parte de los administradores para crearlos. De esta forma es controlado qué persona sube o realiza cambios en el sistema. 
          p #[b Basados en suscripción]: este tipo de entorno se enfoca en desarrollo de sistemas grandes, con varios módulos y usuarios. 
        .col-lg-5
          figure
            img(src='@/assets/curso/tema6/img1.png', style="width: 450px").m-auto
      .row.m-1(titulo="Elementos claves para los entornos de pruebas")
        .col-lg-7.mb-4.mb-lg-0
          p Construir un entorno de pruebas tiene como objetivo principal simular el entorno de producción; se deben tener en cuenta algunos elementos básicos:
          ul.lista-ul
            li 
              i.fas.fa-check(style="color: #FFB30B")
              |
              p.mb-0 Navegador.
            li 
              i.fas.fa-check(style="color: #FFB30B")
              |
              p.mb-0 Sistema operativo por parte del cliente.
            li 
              i.fas.fa-check(style="color: #FFB30B")
              |
              p.mb-0 Configuración de red.
            li 
              i.fas.fa-check(style="color: #FFB30B")
              |
              p.mb-0 Configuración del servidor de bases de daros.
            li 
              i.fas.fa-check(style="color: #FFB30B")
              |
              p.mb-0 Configuración del servidor del sistema.
            li 
              i.fas.fa-check(style="color: #FFB30B")
              |
              p.mb-0 Datos para realizar las pruebas.
          p Además, se debe construir un mecanismo que genere informes de errores para recopilar los resultados de las pruebas y, mediante este registro, trabajar en las mejoras a realizar. También es importante resaltar puntos claves:
          ul.lista-ul
            li 
              i.fas.fa-check(style="color: #FFB30B")
              |
              p.mb-0 Qué se busca con las pruebas a realizar.
            li 
              i.fas.fa-check(style="color: #FFB30B")
              |
              p.mb-0 Verificar que las condiciones para la ejecución de la prueba estén creadas.
            li 
              i.fas.fa-check(style="color: #FFB30B")
              |
              p.mb-0 Planificar en qué momentos se realizará cada etapa de prueba, involucrando a los miembros correctos del equipo.
        .col-lg-5
          figure
            img(src='@/assets/curso/tema6/img2.png', style="width: 450px").m-auto
      .row.m-1(titulo="Instalación del <em>script</em>")
        .col-lg-7.mb-4.mb-lg-0
          p El #[i script] de prueba es un conjunto de instrucciones para realizar automáticamente las pruebas al sistema. Estas pruebas son realizadas en el entorno de pruebas automatizadas, se ejecutan según el formato del #[i script], por medio del #[i Script Testing] podemos implementar diferentes comandos para desarrollar un #[i script].
        .col-lg-5
          figure
            img(src='@/assets/curso/tema6/img3.png', style="width: 450px").m-auto
      .row.m-1(titulo="Cómo escribir un <em>script</em> de pruebas")
        .col-lg-7.mb-4.mb-lg-0
          p Es una secuencia de instrucciones para realzar la prueba automáticamente. 
          p Hay tres maneras para escribir una secuencia de comandos de pruebas:
          ul.lista-ul
            li 
              i.fas.fa-check(style="color: #FFB30B")
              |
              p.mb-0 #[b Grabar y reproducir]:  en este método en particular la persona que realiza el #[i testing] debe escribir cualquier código en lugar de registrar las acciones del usuario, además, se debe tener en cuenta el comportamiento esperado de la prueba. Este método es sencillo de construir, se utiliza principalmente en un lenguaje de programación simplificado como #[i VBScript].
            li 
              i.fas.fa-check(style="color: #FFB30B")
              |
              p.mb-0 #[b Secuencia de comandos basadas en palabra clave/datos]: en este método hay una independencia entre evaluadores y desarrolladores. En la secuencia de comandos basada en datos, el evaluador define la prueba implementando palabras claves. El trabajo de los desarrolladores consiste en la implementación del código del #[i script] de prueba para las palabras claves y actualizar el código cuando sea pertinente.
            li 
              i.fas.fa-check(style="color: #FFB30B")
              |
              p.mb-0 #[b Escribir código usando el lenguaje de programación]: el evaluador efectivamente tendrá que ir más allá de la grabación / reproducción y aprender a construir #[i scripts] simples. Se pueden escribir los #[i scripts] de prueba en un lenguaje más sencillo como #[i JavaScript] o #[i Ruby].
        .col-lg-5
          figure
            img(src='@/assets/curso/tema6/img4.png', style="width: 450px").m-auto
      .row.m-1(titulo="Ejemplo de un <em>script</em> de prueba")
        .col-lg-7.mb-4.mb-lg-0
          p Serie de instrucciones para escribir una secuencia de comando para un inicio de sesión de un sitio #[i web]:
          ul.lista-ul
            li 
              i.fas.fa-check(style="color: #FFB30B")
              |
              p.mb-0 Especificar en la herramienta de automatización que pueda localizar los campos nombre de usuario y contraseña.
            li 
              i.fas.fa-check(style="color: #FFB30B")
              |
              p.mb-0 Actualizar la página de inicio del sitio #[i web], dar #[i click] en iniciar sesión, verificar los campos de nombre de usuario y contraseña.
            li 
              i.fas.fa-check(style="color: #FFB30B")
              |
              p.mb-0 Continuar escribiendo el nombre de usuario y la contraseña, oprimir el botón ingresar.
            li 
              i.fas.fa-check(style="color: #FFB30B")
              |
              p.mb-0 Determinar qué se evidencia el mensaje de bienvenida de inicio de sesión, el cual es visible después de ingresar y diligenciar los campos respectivos de nombre de usuario y contraseña, de acuerdo con los estilos CSS.
            li 
              i.fas.fa-check(style="color: #FFB30B")
              |
              p.mb-0 Ingresar el título de bienvenida.
            li 
              i.fas.fa-check(style="color: #FFB30B")
              |
              p.mb-0 Si el título es lo esperado del resultado de la prueba, evidencia el resultado en el informe pertinente.
        .col-lg-5
          figure
            img(src='@/assets/curso/tema6/img5.png', style="width: 450px").m-auto
      .row.m-1(titulo="Plantilla de <em>script</em> de prueba")
        .col-lg-7.mb-4.mb-lg-0
          p #[i Test Script] es un documento con formato reutilizable que contiene información preseleccionada y que es importante para crear un script de prueba utilizable. Este documento determina qué tan detalladas son sus pruebas y qué información debe incluirse en cada caso de prueba.
        .col-lg-5
          figure
            img(src='@/assets/curso/tema6/img6.png', style="width: 450px").m-auto
    Separador
    #t_6_2
    .titulo-segundo.color-secundario
      h2 6.2 Desarrollo guiado por pruebas (TDD)
    p.mb-5(data-aos="fade-right") Se presenta información sobre el desarrollo dirigido por pruebas, sus características e implementación.
    TabsA.color-secundario(data-aos="fade-left")
      .tarjeta.color-secundario--borde.p-4(titulo="Concepto ")
        .row
          .col-lg-2.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/img4.svg', style="width: 90px").m-auto
          .col-lg-10
            p El desarrollo dirigido por pruebas #[i TDD], es un proceso en el que se construyen primero las pruebas antes de escribir el código, y cuando las pruebas son exitosas se limpia el código para realizar los preparativos del paso a producción.
            p La premisa de #[i TDD] según Kent Beck es que todo código desarrollado debe ser probado y refactorizado constantemente.
      .tarjeta.color-secundario--borde.p-4(titulo="Características")
        .row
          .col-lg-2.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/img5.svg', style="width: 90px").m-auto
          .col-lg-10
            p Además del gran beneficio de #[i TDD] de mantener el código probado constantemente, también logra la notificación de errores de forma temprana y un diagnóstico sencillo de los errores donde se puede evidenciar lo que ha fallado.
            p Características principales o beneficios de #[i TDD]:
            ul.lista-ul
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Mejora la flexibilidad del desarrollo del código, facilita la incorporación de nuevas contrataciones.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Reducción de costo en mejoras, se mantiene el código limpio y se minimizan los riesgos.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Desarrollo entorno a la integración, entregas oportunas y despliegues continuos.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Disminución en número de errores.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Reducción en los costos de soporte.
      .tarjeta.color-secundario--borde.p-4(titulo="Pruebas (Prácticas)")
        .row
          .col-lg-2.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/img6.svg', style="width: 90px").m-auto
          .col-lg-10
            p La metodología de #[i TDD] es muy sencilla de implementar, al escribir un #[i test] que pruebe el código que se quiere desarrollar. #[i TDD] es un mecanismo de comunicación fluida, se implementa un ciclo de #[i RED - GREEN - REFACTOR], una vez se encuentre en la fase de verde, se debe quitar duplicación y refactorizar, esta se basa en tres leyes:
            ul.lista-ul
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Se construye primero el #[i test] y luego se procede a construir código.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Es suficiente una prueba unitaria para probar el código.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 No exceder en el tamaño del código que se requiere pasar por una prueba unitaria.
            .tarjeta.color-primario.p-3
              .row.justify-content-around.align-items-center
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p Hacer clic en el documento anexo para conocer más sobre estas pruebas.
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/anexo2.pdf')" target="_blank")
                        span(style="color:#000 !important") Descargar
                        i.fas.fa-file-download(style="color:#000 !important")
    Separador
    #t_6_3
    .titulo-segundo.color-secundario
      h2 6.3 Codificación de casos
    .row
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema6/img7.svg', style="width: 450px").m-auto
      .col-lg-8(data-aos="fade-left")
        p Un caso de prueba es una serie de acciones de codificación que los programadores ejecutan para verificar diferentes funciones del software. Los casos de prueba contienen pasos de análisis, condiciones de comportamiento y resultados de las acciones.
        p #[b Características]
        ul.lista-ul
          li 
            i.fas.fa-check(style="color: #FFB30B")
            |
            p.mb-0 Solo prueba una cosa en un caso de prueba.
          li 
            i.fas.fa-check(style="color: #FFB30B")
            |
            p.mb-0 Debe tener un propósito exacto.
          li 
            i.fas.fa-check(style="color: #FFB30B")
            |
            p.mb-0 Debe estar escrito en un lenguaje claro y fácil de entender.
          li 
            i.fas.fa-check(style="color: #FFB30B")
            |
            p.mb-0 Debe ser relativamente pequeño.
          li 
            i.fas.fa-check(style="color: #FFB30B")
            |
            p.mb-0 Debe ser independiente.
          li 
            i.fas.fa-check(style="color: #FFB30B")
            |
            p.mb-0 No debe tener pasos o palabras innecesarias.
          li 
            i.fas.fa-check(style="color: #FFB30B")
            |
            p.mb-0 Debe ser repetible.
          li 
            i.fas.fa-check(style="color: #FFB30B")
            |
            p.mb-0 Debe usar terminología consistente e identificación de funcionalidad.
    Separador
    #t_6_4
    .titulo-segundo.color-secundario
      h2 6.4 Documentación de pruebas
    p.mb-5(data-aos="fade-right") Presenta algunas pruebas que se pueden documentar como: unitarias, estrés, integración.
    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="fade-left")
      SlyderA(tipo="b")
        .row.m-1
          .col-lg-7.mb-4.mb-lg-0
            p #[b Unitarias]
            p Documentar el código de un programa es adicionar información importante que permita explicar lo que realiza esa determinada acción, paso a paso, para que al momento de ser observada por otro desarrollador lo pueda comprender de forma rápida.
            p Las pruebas unitarias son una forma de comprobar que cierto fragmento de código funciona perfectamente, es un procedimiento más que se lleva a cabo durante la implementación de metodologías ágiles.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema6/img7.png', style="width: 450px").m-auto
        .row.m-1
          .col-lg-7.mb-4.mb-lg-0
            p #[b Unitarias]
            p #[b Características de las pruebas unitarias:]
            ul.lista-ul
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Pruebas unitarias evidencias que la lógica del código funciona como se espera o cumple con el requerimiento.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Maximiza la legibilidad del código, facilita realizar cambios de forma rápida.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Los #[i test] unitarios bien realizados sirven como documentación del proyecto.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Se realizan de forma rápida, donde se puede implementar en todo el desarrollo del proyecto.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Permite la refactorización del código.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Como las pruebas unitarias dividen el código en pequeños fragmentos, es posible probar distintas partes del proyecto sin tener que esperar a que otras estén completadas.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema6/img8.png', style="width: 450px").m-auto
        .row.m-1
          .col-lg-7.mb-4.mb-lg-0
            p #[b Estrés]
            p Es una prueba de carga que se implementa para determinar los límites del sistema. Normalmente se requiere realizar prueba de estrés a una #[i API] o de un sitio #[i web] para determinar:
            ul.lista-ul
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 El comportamiento del sistema en condiciones extremas.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 La capacidad máxima del sistema en pro de su rendimiento.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 El punto de quiebre del sistema y sus respectivos fallos.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 La recuperación del sistema ante posibles fallas de forma inesperadas.
            p Hay que tener en cuenta que una prueba de estrés no significa que el sistema se va a comportar siempre de esa forma, es una prueba de exposición a posibles picos de carga para evaluar su rendimiento.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema6/img9.png', style="width: 450px").m-auto
        .row.m-1
          .col-lg-7.mb-4.mb-lg-0
            p #[b Estrés]
            p Una vez culminadas todas las pruebas, se obtendrán las respectivas conclusiones sobre el rendimiento de la aplicación según los resultados obtenidos. Finalmente, el cliente dispondrá de un informe detallado con toda la referencia de las pruebas realizadas, junto con las conclusiones finales y las propuestas de mejoras y medidas correctoras correspondientes.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema6/img10.png', style="width: 450px").m-auto
        .row.m-1
          .col-lg-7.mb-4.mb-lg-0
            p #[b Integración]
            p Este tipo de pruebas se encargan de validar la respectiva comunicación entre diferentes componentes, interfaces o interacciones con diferentes partes del sistema. 
            p Dentro de la práctica de realizar las pruebas de integración se tienen diferentes enfoques:
            ul.lista-ul
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 En las pruebas de integración #[i Bin Bang], todos los componentes son integrados y se realiza las pruebas como un todo.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Las pruebas de integración descendente se realizan de arriba a abajo siguiendo el flujo arquitectónico.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Las pruebas de integración ascendente, se llevan a cabo desde la parte inferior del flujo de control hacia arriba. Los componentes o sistemas se sustituyen por controladores.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 En las pruebas de integración incremental, las partes de desarrollo realizado por el programador se integran para ejecutar una sola prueba.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema6/img11.png', style="width: 450px").m-auto
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema1/img4.svg', style="width: 30px").m-auto
      .col
        p.mb-0 #[b Documentación de estándares]
    p.mb-5(data-aos="fade-right") Se presenta información sobre documentos.
    TabsB.color-acento-botones.mb-5(data-aos="fade-left")
      .py-4.py-md-5(titulo="IEEE 1012" :icono="require('@/assets/curso/tema6/img8.svg')")
        .row
          .col-lg-7.mb-4.mb-lg-0
            p El IEEE 1012 es un estándar que se sustenta en la verificación y validación de #[I software], este procedimiento se basa en normas de calidad de modelos de vida de un #[I software]. Contiene cuatro niveles de integridad que describen su relevancia, variando desde baja hasta alta integridad para el usuario.
            p Estos niveles son valores que representan complejidad, criticidad, nivel de seguridad, entre otros y que precisan la trascendencia del #[I software] para el usuario final. Estas características determinan el nivel de integridad teniendo en cuenta el objetivo y uso del sistema.
            p El nivel de integridad permite identificar el número de tareas a desarrollarse, entre más alto, es mayor el número de tareas a realizar, siendo estas más rigurosas. 
            p Componentes de la documentación IEEE
            ul.lista-ul
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 El alcance.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 El propósito.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Campo de aplicación.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Objetivos.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Anexo (gráficas y tablas).
          .col-lg-5
            figure
              img(src='@/assets/curso/tema6/img12.png', style="width: 450px").m-auto
      .py-4.py-md-5(titulo="IEEE 829" :icono="require('@/assets/curso/tema6/img9.svg')")
        .row
          .col-lg-7.mb-4.mb-lg-0
            p La documentación de las pruebas de #[I software] o bases de datos es muy importante para llevar el control de las diferentes actividades que se han ejecutado. El estándar 829 para la documentación de prueba de #[I software] y sistema pertenece a un estándar de IEEE que especifica la manera de implementar los documentos para su uso en las ocho fases definidas de prueba de #[I software]. En cada una de las fases se especifica qué documento se debe diligenciar para llevar una documentación completa.
            P Documentos requeridos por la norma IEEE 829
            ul.lista-ul
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Plan de prueba maestro (MTP), es el plan de pruebas que proporciona un documento general para llevar una planificación y gestión de las pruebas para la implementación de múltiples pruebas.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Plan de pruebas de nivel (LTP). En este documento se plasma el alcance, los objetivos, el enfoque, los recursos, y el cronograma de las actividades de la ejecución de las pruebas.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Diseño de prueba de nivel (LTD), detalla cada caso de prueba y los resultados esperados.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Caso de prueba de nivel (LTL), documento donde se especifican los datos de pruebas para implementarlos en los casos de prueba.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Procedimiento de prueba de nivel (LTPr), detalla específicamente como se debe ejecutar cada una de las pruebas, las condiciones y los pasos que se deben seguir.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Registro de prueba de nivel (LTL), documento que registra al detalle con su respectiva fecha cada una de la ejecución de las pruebas y sus respectivas observaciones, por ejemplo, que caso de prueba se ejecuta, persona responsable de la prueba, el orden de la ejecución y si fueron exitosas las pruebas.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Informe de anomalías (AR), registra cada evento que ocurra durante la ejecución de las pruebas.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Informe de estado de prueba intermedia de nivel (LITSR), se registran los resultados provisionales obtenidos en las pruebas para proporcionar evaluaciones y diferentes tomas de acciones basada en los resultados.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Informe de prueba de nivel (LTR), señala los resultados de las actividades de prueba designadas y proporcionar evaluaciones y recomendaciones basadas en los resultados después de que la ejecución de la prueba haya finalizado para el nivel de prueba específico.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Informe de prueba maestro (MTR). Se registra cada una las fases realizadas en la ejecución de las pruebas, también contiene cada una de las evaluaciones de calidad realizadas, las acciones de corrección ejecutadas. Además, se registra qué pruebas se realizaron y cuánto fue su duración, para mejoras en futuras planificaciones. Este documento final se utiliza para indicar si el sistema de #[I software] bajo prueba es apto para el propósito de acuerdo con el cumplimiento de los criterios de aceptación.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema6/img13.png', style="width: 450px").m-auto
      .py-4.py-md-5(titulo="ISO" :icono="require('@/assets/curso/tema6/img9.svg')")
        .row
          .col-lg-7.mb-4.mb-lg-0
            p Las normas ISO son implementadas para mejorar los procesos en las empresas, establecen un sistema para gestionar la calidad de los productos o servicios. Contiene 4 principios fundamentales:
            ul.lista-ul
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Responsabilidad de la dirección.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Gestión de recursos.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Realización de producto o servicio.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Medición, análisis y mejora.
            P La documentación obligatoria que exige la norma ISO es la siguientes:
            ul.lista-ul
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 El alcance, del respectivo sistema de gestión de calidad.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Información detallada y necesaria para apoyar todos los procesos de ejecución y evaluación de pruebas.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 La política de calidad.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Los objetivos de calidad.
              li 
                i.fas.fa-check(style="color: #FFB30B")
                |
                p.mb-0 Información documentada requerida.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema6/img14.png', style="width: 450px").m-auto
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-8.p-4.bg-c2
        .row.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            p.mb-0 Tenga en cuenta que el componente formativo dispone de más recursos que se ubican en este, para ello diríjase al menú principal en donde encontrará entre otros, la síntesis, una actividad didáctica, material complementario.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema6/img11.svg', style="width: 200px").m-auto

</template>

<script>
export default {
  name: 'Tema6',
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
