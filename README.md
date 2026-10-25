# Isabel Florido · web

Primera portada funcional en Astro y TypeScript. Diseño adaptable con navegación interna, fotografías locales y componentes de cabecera y pie reutilizables.

## Ejecutar

```sh
npm install
npm run dev
```

Abrir la dirección indicada por Astro. Comprobaciones: `npm run check` y `npm run build`.

En entornos que restringen la carpeta de configuración de Astro, definir `ASTRO_TELEMETRY_DISABLED=1` antes de ejecutar los comandos.

## Estructura

- `src/pages/index.astro`: portada; secciones de presentación, trayectoria, método, sesiones y primer encuentro.
- `src/layouts/BaseLayout.astro`: documento y metadatos.
- `src/components/`: cabecera y pie.
- `src/data/site.ts`: información general.
- `src/styles/global.css`: paleta, tipografía y adaptación a móvil.
- `public/images/`: fotografías facilitadas por el usuario.

## Fuentes y alcance

Consultadas en la pestaña Fuentes del proyecto de ChatGPT el 25 de octubre de 2026:

- `Mi CV.txt`: trayectoria, formación, metodología, modalidades e idiomas.
- `Propuesta_Web_Isabel_Florido_Personalizada.pdf`: concepto, arquitectura y dirección visual. Marfil, arena, oliva, azul gris y carbón; fotografía real y serif.
- Fotografías `WhatsApp Image 2026-10-25 at 09.35.02.jpeg`, `09.35.20.jpeg` y `09.36.17.jpeg`, disponibles también en Descargas y copiadas a `public/images/` con nombres descriptivos.

La redacción en primera persona es una adaptación editorial para revisar con Isabel. Mind & Body Medicine se presenta como metodología de práctica; no se atribuyen curaciones ni resultados médicos. La tercera base del método se expresa en términos concretos de coordinación y memoria.

Esta entrega se limita a la portada. La navegación conduce a secciones reales de la misma página. Pendientes de confirmación: contacto, disponibilidad, ciudad, duración, precios y acreditaciones. No hay un formulario que aparente enviar mensajes, reservas ni enlaces a páginas inexistentes. Lecturas y reflexiones se desarrollarán tras revisar la portada y contar con sus textos.

La versión de revisión conserva `noindex, nofollow`. La copia pública se sirve con GitHub Pages; el proyecto de desarrollo permanece privado.

## Preparación para siguientes fases

Los contenidos editoriales y las rutas de las imágenes están en `src/data/home.es.json`, separados de los componentes. `.pages.yml` prepara su edición con Pages CMS de acuerdo con su documentación oficial (https://pagescms.org/docs/configuration/content/). Repositorio privado creado: https://github.com/oantiza/isabel-florido-web. La conexión de Pages CMS queda pendiente. Las fotografías se sirven en WebP, con dimensiones explícitas y carga diferida fuera de la portada.

`src/data/locales.ts` declara español, inglés y francés. Por ahora solo se publica la portada en español; las traducciones y sus rutas quedan para la siguiente fase. No se muestra un selector de idioma sin traducciones disponibles.

Las instrucciones del proyecto se consultaron también en sus Ajustes: Astro/TypeScript/CSS, estética mediterránea con marfil, arena, salvia y terracota, contenidos editables y revisión antes de publicar. La configuración estática actual es apta para preparar el despliegue futuro en Cloudflare Pages (`npm run build`, salida `dist`). El código está subido al repositorio privado de GitHub. El alojamiento definitivo en Cloudflare Pages queda pendiente de que Isabel cree su propia cuenta.


## Vista previa en GitHub Pages

- Proyecto y contenidos editables (privado): https://github.com/oantiza/isabel-florido-web
- Copia compilada (público): https://github.com/oantiza/isabel-florido-preview
- Web de revisión: https://oantiza.github.io/isabel-florido-preview/

El plan actual de GitHub no permite activar Pages en el repositorio privado. Con autorización expresa del usuario se publica una copia separada que contiene únicamente el HTML, CSS, favicon y las tres fotografías WebP visibles. No incluye componentes Astro, configuración del CMS, documentos originales ni historial del proyecto privado.

Para actualizar la copia pública desde este equipo:

```sh
npm run check
npm run build:pages
git -C .deploy/github-pages add index.html favicon.svg images _astro .nojekyll
git -C .deploy/github-pages commit -m "Update homepage preview"
git -C .deploy/github-pages push
```

`build:pages` compila con la ruta base `/isabel-florido-preview/`, comprueba los enlaces internos y prepara los archivos públicos en `.deploy/github-pages/`. Esta carpeta se excluye del repositorio privado. En otro equipo, clonar primero el repositorio público en esa ruta antes de preparar la copia.

GitHub Pages publica desde `main` y la raíz del repositorio público, con HTTPS. Los cambios en el repositorio privado no se publican automáticamente: se debe actualizar la copia compilada. `npm run build` sigue generando la web con ruta raíz para el desarrollo y el futuro alojamiento en Cloudflare.
