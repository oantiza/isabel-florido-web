# Isabel Florido · web

Portada en Astro, TypeScript y CSS propio. Evolución de la propuesta existente, sin sustituir el proyecto ni añadir dependencias. Esta revisión está fusionada en `main`.

## Desarrollo y comprobación

```sh
npm install
npm run dev
npm run check
npm run build
npm run preview
```

Definir `ASTRO_TELEMETRY_DISABLED=1` en entornos que restringen el directorio de configuración de Astro. La salida estática se genera en `dist/`. La publicación en GitHub Pages se activa manualmente desde GitHub Actions. Los cambios de contenido o los pushes no publican automáticamente.

## Qué se ha conservado

La identidad marfil, arena, oliva, salvia y terracota; la tipografía serif; el titular principal; las tres fotografías originales; Astro y la organización de contenidos en JSON. Se utilizan fuentes del sistema, sin solicitudes a servicios tipográficos externos.

La portada sigue siendo una única página con enlaces a secciones reales. Se mantienen `noindex, nofollow` y el aviso de revisión.

## Qué cambia en esta revisión

- Propuesta de valor explícita: entrenamiento personalizado con movimiento, respiración y atención.
- Dos acciones iniciales: conocer cómo empezar y descubrir el método.
- Sesiones presenciales y online explicadas por separado; idiomas y adaptación personal visibles.
- Explicación de Mind & Body Medicine y sus tres ejes de práctica, sin promesas de resultados clínicos.
- Trayectoria docente, experiencia internacional y formación de Isabel diferenciadas.
- Recorrido de tres pasos: conocer necesidades, observar el movimiento y diseñar la práctica.
- Preguntas frecuentes desplegables con funcionamiento nativo del navegador.
- Maqueta de contacto solicitada por el usuario: nombre, correo, mensaje y botón desactivados, con aviso visible. No recoge datos ni envía consultas.
- Menú móvil desplegable, cierre al elegir un destino o pulsar Escape, foco de teclado visible y respeto por movimiento reducido.
- Imágenes WebP generadas por Astro en hasta tres anchos (480, 768 y 1024), con dimensiones intrínsecas, `srcset`, `sizes`, prioridad para la foto principal y carga diferida para las demás.
- Textos editoriales y de interfaz editables, con etiquetas en español en Pages CMS.

## Estructura

- `src/pages/index.astro`: entrada de la portada española.
- `src/pages/[locale]/index.astro`: futuras rutas de idiomas aprobados.
- `src/components/HomePage.astro`: plantilla compartida de la portada.
- `src/components/Header.astro`, `Footer.astro`: navegación y pie.
- `src/components/ResponsiveImage.astro`: optimización de fotografías locales.
- `src/layouts/BaseLayout.astro`: documento, idioma y metadatos.
- `src/data/home.es.json`: contenido completo en español.
- `src/data/content.ts`: contrato de contenidos y registro por idioma.
- `src/data/locales.ts`: idiomas previstos y lista de idiomas publicables.
- `src/data/contact.json`: vías de contacto; vacías hasta su confirmación.
- `src/styles/global.css`: tokens visuales, estilos y adaptación a pantallas.
- `.pages.yml`: configuración preparada para el editor.

## Rigor de contenidos

Fuente original revisada el 25 de octubre de 2026: `Mi CV.txt`, localizado en Descargas. No se incorpora el original al repositorio.

| Contenido de la portada | Evidencia del currículum |
| --- | --- |
| Trayectoria | Casi veinte años de docencia en la FTI de la Universidad de Las Palmas de Gran Canaria; experiencia internacional |
| Formación | Yoga, Yin Yoga, Pilates clásico, anatomía, biomecánica, mindfulness y meditación |
| Método | Entrenamiento personalizado adaptado a las necesidades actuales |
| Capacidades | Respiración, movilidad, fuerza, equilibrio, coordinación, memoria y concentración, entre otras |
| Inicio | Observación postural y análisis individual de necesidades antes del diseño del entrenamiento |
| Modalidades e idiomas | Presencial y virtual; español, inglés y francés |

La redacción en primera persona sigue pendiente de validación por Isabel. El término «desarrollo neurológico» del CV se explica mediante coordinación, memoria y control motor, siguiendo el criterio de la propuesta previa. El «diagnóstico postural» se expresa como observación postural, sin atribuir diagnóstico sanitario ni titulaciones clínicas.

La dirección visual procede de los materiales ya reseñados en la propuesta inicial: `Propuesta_Web_Isabel_Florido_Personalizada.pdf` y fotografías facilitadas por el usuario. Las fotografías originales y sus versiones WebP se conservan en `public/images/`.

No se han añadido titulaciones, testimonios, horarios, precios ni resultados clínicos.

## Edición con Pages CMS

La configuración sigue la [documentación de campos de Pages CMS](https://pagescms.org/docs/configuration/content/fields/). Todos los campos del JSON visible tienen correspondencia en el editor, incluidos textos de botones, imágenes, descripciones accesibles, modalidades, pasos y preguntas.

1. Conectar Pages CMS a este repositorio público cuando Isabel disponga de acceso.
2. Trabajar sobre una rama de revisión, sin automatizar publicación en producción.
3. Editar «Portada en español». Para las fotos, utilizar el selector de imágenes y completar su descripción accesible.
4. Ejecutar comprobación y build, revisar en móvil y ordenador, y solicitar aprobación antes de publicar.

Las nuevas imágenes locales JPG, JPEG, PNG o WebP guardadas en `public/images/` se detectan al compilar y reciben variantes adaptables. Para obtener optimización y dimensiones automáticas, seleccionar imágenes locales mediante el editor.

«Contacto confirmado de Isabel» permite introducir correo y/o teléfono. Mientras ambos estén vacíos se muestra la maqueta desactivada. Al confirmar alguno, la plantilla sustituye la maqueta por enlaces reales de correo o teléfono. Esto no activa el envío del formulario: un formulario funcional necesitará una integración posterior y la información de privacidad correspondiente. Revisar también el texto de las preguntas frecuentes al activar el contacto.

## Arquitectura ES / EN / FR

Configuración de [internacionalización de Astro](https://docs.astro.build/en/guides/internationalization/): español en `/`, futuras traducciones en `/en/` y `/fr/`, respetando la ruta base del alojamiento.

Solo `es` está en `publishedLocales`. No se generan páginas vacías, traducciones automáticas ni enlaces a idiomas inexistentes.

Para activar un idioma:

1. Añadir `home.en.json` o `home.fr.json` con traducción revisada de **todos** los campos de `HomeContent`, incluidos navegación, formularios y metadatos.
2. Importarlo y registrarlo en `src/data/content.ts`. TypeScript verifica la estructura.
3. Añadir su entrada de archivo a `.pages.yml`.
4. Incluirlo en `publishedLocales` de `src/data/locales.ts`. La ruta y el selector de idioma se generan con la plantilla compartida.
5. Revisar idioma del documento, enlaces y textos. Antes del lanzamiento, completar URL definitiva, canonical y alternancias hreflang.

## Validación de esta entrega

- `npm run check`: 0 errores, 0 avisos.
- `npm run build`: compilación estática correcta, también probada con la ruta base de GitHub Pages.
- Revisión visual en escritorio (1440 px) y móvil (390 y 320 px); comprobación de ausencia de desbordamientos entre 320 y 1920 px.
- Verificados menú móvil, cierre con Escape, navegación por teclado, salto al contenido, preguntas desplegables y preferencia de movimiento reducido.
- Verificados enlaces internos, carga de las tres fotografías y existencia de recursos y variantes adaptables; sin errores de ejecución en la revisión final.
- Comprobada la correspondencia entre campos de contenido y configuración CMS. No se ha realizado conexión real con Pages CMS.
- Capturas de revisión guardadas localmente en `review/`, excluidas del repositorio.

## Pendientes antes del lanzamiento

- Validación editorial por Isabel.
- Confirmación de correo, teléfono, ubicación presencial, disponibilidad y condiciones de sesiones.
- Decidir si basta el contacto por correo/teléfono o se conecta el formulario.
- Identificación del titular e información legal y de privacidad según la solución definitiva.
- Conexión y prueba real de Pages CMS con Isabel.
- Traducciones profesionales ES/EN/FR revisadas; solo la española está preparada.
- Dominio, alojamiento definitivo, metadatos sociales completos e indexación tras aprobación.
- Lecturas o reflexiones cuando existan textos facilitados por Isabel.

## Repositorio único y publicación

- Repositorio público de trabajo: https://github.com/oantiza/isabel-florido-web
- Web: https://oantiza.github.io/isabel-florido-web/
- Publicación manual: https://github.com/oantiza/isabel-florido-web/actions/workflows/deploy.yml

Por petición del usuario, todo el código, los contenidos y la publicación se concentran en este repositorio. No se utiliza una copia compilada en otro repositorio.

`npm run build:pages` compila en `dist/` con la ruta base `/isabel-florido-web/`. No copia archivos a otro checkout ni realiza commits o pushes. El workflow oficial de Astro compila, comprueba y publica la salida estática completa, incluidas las futuras rutas traducidas.

Para publicar una versión autorizada: guardar los cambios en la rama aprobada y ejecutar **Publish website → Run workflow** desde GitHub Actions. Para la web pública habitual, seleccionar `main`. La publicación es manual; no se activa al editar contenidos ni al hacer push.

La revisión sigue marcada como propuesta y conserva `noindex, nofollow`. El contacto permanece como maqueta sin envío. El lanzamiento definitivo y cualquier fusión siguen sujetos a autorización expresa.

## Portada pública independiente

Las rutas /, /en/ y /fr/ utilizan LandingPage.astro: presentación, fotografía, idiomas y contacto. HomePage.astro conserva la propuesta completa para desarrollo posterior, sin una ruta pública. La portada no muestra avisos de revisión ni enlaces a las secciones pendientes y permite indexación.
