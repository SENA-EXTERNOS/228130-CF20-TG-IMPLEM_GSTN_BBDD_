(function(e){function a(a){for(var o,i,c=a[0],s=a[1],d=a[2],l=0,u=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(a);while(u.length)u.shift()();return t.push.apply(t,d||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(t.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},r={app:0},t=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5",tema6:"tema6"}[e]||e)+"."+{actividad:"a4a8fc68","chunk-0206bfa0":"7eb1678d","chunk-0c047e41":"da2700f5","chunk-13a6037e":"b9b550ab","chunk-18f95272":"d078ffd9","chunk-25b302c8":"7e764b51","chunk-26fc7596":"0223e8d0","chunk-2c06842c":"ae56870c","chunk-2d0e96ec":"e2ca181d","chunk-2d208d90":"760c08b7","chunk-2d21d0e2":"bfeb6d2c","chunk-2d22c123":"a644a972","chunk-2d2747e2":"013e6804","chunk-2e80bb9a":"24a52a86","chunk-319206de":"4c787e88","chunk-32334cb6":"38590270","chunk-3c57cd7b":"e27cc4b3","chunk-3d6834f6":"984f3419","chunk-4cdd78c0":"49699030","chunk-4f2d402a":"301ae45e","chunk-4fde0a08":"7c15f751","chunk-515a8379":"37cc02fe","chunk-53ccb27e":"98af84a3","chunk-55d286b8":"1e2df45a","chunk-59974754":"6385320f","chunk-6e1e538a":"c4319b8c","chunk-766a929b":"1ad13c3d","chunk-c796899c":"cca6ec61","chunk-e8a7823a":"9f284bb7","chunk-f2df7d2c":"de9c9556","chunk-fde47172":"cdad90b9",comple:"5f627981",creditos:"82550b37",glosario:"62f03cda",intro:"e30d44ef",referencias:"f4ce2fe6",sintesis:"9e629cea",tema1:"28bd46c8",tema2:"76b81c2e",tema3:"066e10e1",tema4:"6b68f3f7",tema5:"671ea627",tema6:"77a214bf"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5",tema6:"tema6"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-3c57cd7b":"3babef71","chunk-3d6834f6":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-4fde0a08":"14d1f3e8","chunk-515a8379":"da194529","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"af616fd6","chunk-6e1e538a":"126808df","chunk-766a929b":"06dc82b5","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"42ceea7e",creditos:"0fb9ba6f",glosario:"e6608166",intro:"31d6cfe0",referencias:"092f24f9",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0",tema5:"31d6cfe0",tema6:"31d6cfe0"}[e]+".css",r=s.p+o,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var d=t[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===o||l===r))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],l=d.getAttribute("data-href");if(l===o||l===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=o,delete i[e],m.parentNode.removeChild(m),n(t)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var o=r[e];if(0!==o)if(o)a.push(o[2]);else{var t=new Promise((function(a,n){o=r[e]=[a,n]}));a.push(o[2]=t);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}r[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var m=l;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"417a":function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.5eb27e81.svg"},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,s=n("2877"),d=Object(s["a"])(c,i,r,!1,null,null,null),l=d.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),f=n("ae58"),p=n("7e58");u["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return n.e("tema5").then(n.bind(null,"5029"))}},{path:"tema6",name:"tema6",component:function(){return n.e("tema6").then(n.bind(null,"92ea"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"ef72"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Diseño y ejecución de pruebas",descripcionCurso:"Este componente, aborda entre otros, los conceptos de pruebas de forma general, el tipo de prueba que se puede realizar a las bases de datos y herramientas tecnológicas que permiten realizar dichas pruebas. Además, se construye un plan de pruebas que, a su vez, contiene diferentes casos de prueba, diseñados para su respectiva ejecución, logrando una documentación mediante ciertos estándares descritos.",imagenBannerPrincipal:n("9128"),fondoBannerPrincipal:n("417a"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("71f8")},{clases:["banner-principal-decorativo-2"],imagen:n("8f04")},{clases:["banner-principal-decorativo-3"],imagen:n("7d72")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Pruebas",desarrolloContenidos:!0},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Herramientas de pruebas",desarrolloContenidos:!0},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Modelos de referencia para pruebas",desarrolloContenidos:!0},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Casos de prueba",desarrolloContenidos:!0},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"Plan de pruebas",desarrolloContenidos:!0},{nombreRuta:"tema6",icono:"far fa-file-alt",numero:"6",titulo:"Ejecución de pruebas",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Casos de Prueba",referencia:"Gómez, J. (2020). <em>Cómo diseñar y mantener casos de prueba</em> (video). Youtube.",tipo:"Video",link:"https://www.youtube.com/watch?v=ZEqwbR1YyJU"},{tema:"Construcción de un <em>test</em>",referencia:"Muñiz, J., & Fonseca, E. (2019). Diez pasos para la construcción de un test. <em>Psicothema, 31</em>(1), p. 7-16.",tipo:"Artículo",link:"https://investigacion.unirioja.es/documentos/5c55196234ada657a18c95dd"},{tema:"Pruebas de Validación",referencia:"SENA. (2021). <em>Pruebas de validación de bases de datos: introducción</em> [video]. Youtube",tipo:"Video",link:"https://www.youtube.com/watch?v=U3RWZi2CwQo"},{tema:"Pruebas de carga",referencia:"Garrido, A., Borja, Y., & Gutiérrez, G. (2021). Rendimiento de MariaDB y PostgreSQL. <em>Revista Científica y Tecnológica UPSE, 7</em>(2), p. 9-16.",tipo:"Artículo ",link:"https://repositorio.upse.edu.ec/handle/46000/7315"}],glosario:[{termino:"Caso de prueba",significado:"es una serie de acciones de codificación que los programadores ejecutan para verificar diferentes funciones del <em>software</em>."},{termino:"Entorno",significado:"es la respectiva configuración de tipos de ambiente de despliegue para determinar una prueba."},{termino:"IEEE",significado:"Es el estándar IEEE 1012 consiste en la verificación y validación de un <em>software</em>, es un procedimiento basado en normas de calidad en algunos modelos de vida de un <em>software</em>."},{termino:"ISO",significado:" ISO son implementadas para mejorar los procesos en las empresas, esta norma establece un sistema para gestionar la calidad de los productos o servicios."},{termino:"Plan de pruebas",significado:"contiene la respectiva configuración que lleva un plan de pruebas, va en términos de pruebas manuales, pruebas automatizadas acompañada de un formato de forma general describiendo cada uno de los pasos como se van a ejecutar dichas pruebas."},{termino:"Prueba de integración",significado:"su objetivo es verificar que los diferentes módulos y componentes funcionan bien en conjunto. Este tipo de pruebas son un poco más costosas al momento de automatizarlas, ya que se requiere que todos los componentes marchen a la perfección."},{termino:"<em>Script</em>",significado:"es un conjunto de instrucciones para realizar automáticamente las pruebas al sistema."},{termino:"<em>Suit</em> de pruebas",significado:"es un conjunto de pruebas de forma organizadas, donde se destinada los diferentes casos de pruebas en lo que se refiere a su código fuente, el conjunto de pruebas o la colección de dependencias o el conjunto de las respectivas pruebas que se la aplicaran al sistema."},{termino:"TDD",significado:"desarrollo dirigido por pruebas."},{termino:"XML",significado:"sigla en inglés de <em>eXtensible Markup Language</em>, traducido como “Lenguaje de Marcado Extensible” o “Lenguaje de Marcas Extensible”; es un metalenguaje que permite definir lenguajes de marcas, desarrollado por el <em>World Wide Web Consortium</em> (W3C), utilizado para almacenar datos en forma legible."}],referencias:[{referencia:"Blanquicett, L., Bonfante, M. & Acosta, J. (2018). Prácticas de pruebas desde la Industria de <em>Software. La Plataforma ASISTO como Caso de Estudio</em>. Información Tecnológica.",link:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1l2l4cd/TN_cdi_scielo_journals_S0718_07642018000100011"},{referencia:"Hidalgo, N., Costa, D., Marin, A. & Trujillo, Y. (2020). Elementos para selección de herramientas para la automatización de Pruebas no funcionales. <em>Serie científica de la Universidad de las Ciencias Informáticas, 13</em>(1), p. 104-112.",link:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1l2l4cd/TN_cdi_doaj_primary_oai_doaj_org_article_347cf9d7fc6d441aaa26cd8308dfde6e"},{referencia:"Loor, J., Delgado, M. & Fernández, P. (2020). Priorización de casos de prueba en entornos de desarrollo ágil. <em>Ingeniería Industrial, 41</em>(2).",link:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1l2l4cd/TN_cdi_gale_infotracmisc_A678804944"},{referencia:"Meléndez, M. (2018). <em>Calidad de los datos: la base para la modernización de sistemas de información</em> (video). YouTube.",link:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1fqo2uc/sena_virtualprovpro26558"},{referencia:"Morales, M., Durán, J., Tandazo, E. & Morales, S. (2019). Rendimiento de bases de datos columnares. <em>Ingenius. Revista de Ciencia y Tecnología</em>, (22), p. 47-58.",link:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_628e06c68e64447f95ac88bf44252c83"},{referencia:"Pérez, Y., Gallegos, J., Zapata, S., Ccama, D. & Choque, R. (2020). Design thinking en la planificación de pruebas de <em>software. Innovación y Software, 1</em>(2), p. 40-51.",link:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1l2l4cd/TN_cdi_doaj_primary_oai_doaj_org_article_49cd1beda5b84284be236b081b7bd5cf"},{referencia:"Ramos, Y., Morales, Z., & Trujillo, Y. (2019). <em>Propuesta de automatización de pruebas funcionales durante el ciclo de vida del software en Desoft.</em> Serie científica de la Universidad de las Ciencias Informáticas, 12(9), p. 112-127. ",link:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1l2l4cd/TN_cdi_doaj_primary_oai_doaj_org_article_dd1e5ca5d67a41d59e07fed1d2837503"},{referencia:"Toll, Y. & Ril, Y. (2019). <em>Propuesta de manual de procedimiento para pruebas de sistema.</em> Serie Científica De La Universidad De Las Ciencias Informáticas, 4(2). ",link:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1l2l4cd/TN_cdi_doaj_primary_oai_doaj_org_article_59038fc9254142ec941dee961c4a25f5"},{referencia:"Torres, I. & Díaz, H. (2011). Pruebas de aceptación y piloto. <em>Serie científica de la Universidad de las Ciencias Informáticas, 4</em>(1).",link:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1l2l4cd/TN_cdi_doaj_primary_oai_doaj_org_article_10a1e2ea318043d694afa97ec2d20806"},{referencia:"Velázquez, Y., Velázquez, A. & Collado, L. (2020). Diseño de herramienta para casos de pruebas funcionales en la Universidad de las Ciencias Informáticas. <em>Serie científica de la Universidad de las Ciencias Informáticas</em>.",link:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1l2l4cd/TN_cdi_doaj_primary_oai_doaj_org_article_b29579d39c5242d4ab9eab0bc385568_b"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander."}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Álvaro Andrés Angarita Ramirez",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Daniel Felipe Varón Molina",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=v;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:h,store:g["a"],render:function(e){return e(l)}}).$mount("#app")},"71f8":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-1.cb6ea4c2.svg"},"7d72":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-3.5ed2c4ba.svg"},"8f04":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-2.9d9fa89a.svg"},9128:function(e,a,n){e.exports=n.p+"img/banner-princiapal.27698f98.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"6.3.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"5.3.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){}});
//# sourceMappingURL=app.4fe6bf12.js.map