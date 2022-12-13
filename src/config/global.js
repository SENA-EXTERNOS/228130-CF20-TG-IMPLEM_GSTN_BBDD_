export default {
  global: {
    componenteFormativo: 'Diseño y ejecución de pruebas',
    descripcionCurso:
      'El componente aborda el concepto de pruebas de forma general, el tipo de prueba que se pueden realizar a las bases de datos, qué herramientas tecnológicas existen en la actualidad que permiten realizar dichas pruebas. Además, se construye un plan de pruebas que a su vez contiene diferentes casos de prueba diseñados para su respectiva ejecución, logrando una documentación mediante ciertos estándares descritos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Pruebas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Herramientas de prueba',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Modelos de referencia para pruebas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Casos de prueba',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Plan de pruebas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Ejecución de pruebas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Creación entorno',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Desarrollo guiado por pruebas (TDD)',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Codificación de casos',
            hash: 't_6_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.4',
            titulo: 'Documentación de pruebas',
            hash: 't_6_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Casos de Prueba',
      referencia:
        'Gómez, J. (2020). <em>Cómo diseñar y mantener casos de prueba</em>. video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ZEqwbR1YyJU',
    },
    {
      tema: 'Construcción de un <em>test</em>',
      referencia:
        'Muñiz, J., & Fonseca, E. (2019). <em>Diez pasos para la construcción de un test. Psicothema</em>, 31(1), p. 7-16.',
      tipo: 'Artículo',
      link:
        'https://investigacion.unirioja.es/documentos/5c55196234ada657a18c95dd',
    },
    {
      tema: 'Pruebas de Validación',
      referencia:
        'SENA. (2021). <em>Pruebas de validación de bases de datos: introducción</em>. [video]. Youtube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=U3RWZi2CwQo',
    },
    {
      tema: 'Pruebas de carga',
      referencia:
        'Garrido, A., Borja, Y., & Gutiérrez, G. (2021). <em>Rendimiento de MariaDB y PostgreSQL</em>. Revista Científica y Tecnológica UPSE, 7(2), p. 9-16.',
      tipo: 'Artículo ',
      link: 'https://repositorio.upse.edu.ec/handle/46000/7315',
    },
  ],
  glosario: [
    {
      termino: 'Caso de prueba',
      significado:
        'es una serie de acciones de codificación que los programadores ejecutan para verificar diferentes funciones del <em>software</em>.',
    },
    {
      termino: 'Entorno',
      significado:
        'es la respectiva configuración de tipos de ambiente de despliegue para determinar una prueba.',
    },
    {
      termino: 'IEEE',
      significado:
        'Es el estándar IEEE 1012 consiste en la verificación y validación de un <em>software</em>, es un procedimiento basado en normas de calidad en algunos modelos de vida de un <em>software</em>.',
    },
    {
      termino: 'ISO',
      significado:
        'ISO son implementadas para mejorar los procesos en las empresas, esta norma establece un sistema para gestionar la calidad de los productos o servicios.',
    },
    {
      termino: 'Plan de pruebas',
      significado:
        'contiene la respectiva configuración que lleva un plan de pruebas, va en términos de pruebas manuales, pruebas automatizadas acompañada de un formato de forma general describiendo cada uno de los pasos como se van a ejecutar dichas pruebas.',
    },
    {
      termino: 'Prueba de integración',
      significado:
        'su objetivo es verificar que los diferentes módulos y componentes funcionan bien en conjunto. Este tipo de pruebas son un poco más costosas al momento de automatizarlas, ya que se requiere que todos los componentes marchen a la perfección.',
    },
    {
      termino: '<em>Script</em>',
      significado:
        'es un conjunto de instrucciones para realizar automáticamente las pruebas al sistema.',
    },
    {
      termino: '<em>Suit</em> de pruebas',
      significado:
        'es un conjunto de pruebas de forma organizadas, donde se destinada los diferentes casos de pruebas en lo que se refiere a su código fuente, el conjunto de pruebas o la colección de dependencias o el conjunto de las respectivas pruebas que se la aplicaran al sistema.',
    },
    {
      termino: 'TDD',
      significado: 'desarrollo dirigido por pruebas.',
    },
    {
      termino: 'XML',
      significado:
        'sigla en inglés de <em>eXtensible Markup Language</em>, traducido como “Lenguaje de Marcado Extensible” o “Lenguaje de Marcas Extensible”; es un metalenguaje que permite definir lenguajes de marcas, desarrollado por el <em>World Wide Web Consortium</em> (W3C), utilizado para almacenar datos en forma legible.',
    },
  ],
  referencias: [
    {
      referencia:
        'Blanquicett, L., Bonfante, M., & Acosta, J. (2018). <em>Prácticas de pruebas desde la Industria de Software. La Plataforma ASISTO como Caso de Estudio.</em> Información Tecnológica. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1l2l4cd/TN_cdi_scielo_journals_S0718_07642018000100011',
    },
    {
      referencia:
        'Hidalgo, N., Costa, D., Marin, A. & Trujillo, Y. (2020). <em>Elementos para selección de herramientas para la automatización de Pruebas no funcionales</em>. Serie científica de la Universidad de las Ciencias Informáticas, 13(1), p. 104-112. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1l2l4cd/TN_cdi_doaj_primary_oai_doaj_org_article_347cf9d7fc6d441aaa26cd8308dfde6e',
    },
    {
      referencia:
        'Loor, J., Delgado, M., & Fernández, P. (2020). <em>Priorización de casos de prueba en entornos de desarrollo ágil.</em> Ingeniería Industrial, 41(2). ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1l2l4cd/TN_cdi_gale_infotracmisc_A678804944',
    },
    {
      referencia:
        'Meléndez, M. (2018). <em>Calidad de los datos: la base para la modernización de sistemas de información [Video, Software Guru].</em> Youtube. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1fqo2uc/sena_virtualprovpro26558',
    },
    {
      referencia:
        'Morales, M., Durán, J., Tandazo, E., & Morales, S. (2019). <em>Rendimiento de bases de datos columnares.</em> Ingenius. Revista de Ciencia y Tecnología, núm. 22, 47-58. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_628e06c68e64447f95ac88bf44252c83',
    },
    {
      referencia:
        'Pérez, Y., Gallegos, J., Zapata, S., Ccama, D., & Choque, R. (2020). <em>Design thinking en la planificación de pruebas de software.</em> Innovación y Software, 1(2), p. 40-51. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1l2l4cd/TN_cdi_doaj_primary_oai_doaj_org_article_49cd1beda5b84284be236b081b7bd5cf',
    },
    {
      referencia:
        'Ramos, Y., Morales, Z., & Trujillo, Y. (2019). <em>Propuesta de automatización de pruebas funcionales durante el ciclo de vida del software en Desoft.</em> Serie científica de la Universidad de las Ciencias Informáticas, 12(9), p. 112-127. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1l2l4cd/TN_cdi_doaj_primary_oai_doaj_org_article_dd1e5ca5d67a41d59e07fed1d2837503',
    },
    {
      referencia:
        'Toll, Y. & Ril, Y. (2019). <em>Propuesta de manual de procedimiento para pruebas de sistema.</em> Serie Científica De La Universidad De Las Ciencias Informáticas, 4(2). ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1l2l4cd/TN_cdi_doaj_primary_oai_doaj_org_article_59038fc9254142ec941dee961c4a25f5',
    },
    {
      referencia:
        'Torres, I. & Diaz, H. (2011). <em>Pruebas de aceptación y piloto.</em> Serie científica de la Universidad de las Ciencias Informáticas, 4(1). ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1l2l4cd/TN_cdi_doaj_primary_oai_doaj_org_article_10a1e2ea318043d694afa97ec2d20806',
    },
    {
      referencia:
        'Velázquez, Y., Velázquez, A., & Collado, L. (2020). <em>Diseño de herramienta para casos de pruebas funcionales en la Universidad de las Ciencias Informáticas.</em> Serie científica de la Universidad de las Ciencias Informáticas. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1l2l4cd/TN_cdi_doaj_primary_oai_doaj_org_article_b29579d39c5242d4ab9eab0bc385568',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
