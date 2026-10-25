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

La versión de revisión conserva `noindex, nofollow` y no se ha publicado en Internet.

## Preparación para siguientes fases

Los contenidos editoriales y las rutas de las imágenes están en `src/data/home.es.json`, separados de los componentes. `.pages.yml` prepara su edición con Pages CMS de acuerdo con su documentación oficial (https://pagescms.org/docs/configuration/content/). La conexión real requiere el repositorio privado de GitHub; aún no se ha creado ni conectado. Las fotografías se sirven en WebP, con dimensiones explícitas y carga diferida fuera de la portada.

`src/data/locales.ts` declara español, inglés y francés. Por ahora solo se publica la portada en español; las traducciones y sus rutas quedan para la siguiente fase. No se muestra un selector de idioma sin traducciones disponibles.

Las instrucciones del proyecto se consultaron también en sus Ajustes: Astro/TypeScript/CSS, estética mediterránea con marfil, arena, salvia y terracota, contenidos editables y revisión antes de publicar. La configuración estática actual es apta para preparar el despliegue futuro en Cloudflare Pages (`npm run build`, salida `dist`). No se ha desplegado ni conectado ningún servicio externo.
