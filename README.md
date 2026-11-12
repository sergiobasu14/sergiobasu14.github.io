# Sergio Ballesteros · sitio profesional

Sitio estático bilingüe (ES/EN) escrito en HTML, CSS y JavaScript, sin dependencias de ejecución ni compilación.

## Ejecutar localmente

Desde la raíz del proyecto:

```sh
python3 -m http.server 8000
```

Abre http://localhost:8000. También puedes abrir `index.html` directamente; copiar el correo al portapapeles funciona en localhost o HTTPS.

## Organización

- `index.html`: estructura semántica, navegación, secciones y enlaces de contacto.
- `style/style.css`: variables visuales, componentes y adaptación a móvil, con secciones comentadas.
- `js/content.js`: todos los textos en español e inglés, incluidos servicios, casos, trayectoria, habilidades y formación.
- `js/script.js`: renderizado de contenido, idioma, menú móvil, portapapeles y diagramas vectoriales.
- `images/`: retrato, favicon y recursos existentes.
- `docs/design-concept.png`: referencia visual generada; el contenido factual se toma del PDF, no de esta imagen.
- `docs/design.md`: decisiones visuales y criterios de revisión.
- `navigator/`: accesos antiguos que llevan a la sección equivalente del sitio actual.

## Actualizar contenido

Edita el objeto `window.siteContent` en `js/content.js`. Mantén las mismas claves y el mismo orden de elementos en `es` y `en`. Los textos son contenido local confiable; no introduzcas HTML externo en los campos. Las fechas, métricas y atribuciones provienen del CV y de la información confirmada durante la definición del proyecto.

El selector recuerda el idioma y lo refleja en `?lang=es` o `?lang=en`. El parámetro de la URL tiene prioridad sobre la preferencia guardada. Los enlaces a las secciones conservan identificadores estables en ambos idiomas.

## Identidad y publicación

La identidad actual es Sergio Ballesteros; el nombre de la empresa todavía no ha sido suministrado. El CV descargable es el PDF existente, en inglés. Correo y LinkedIn son los indicados en ese documento.

Se puede servir la raíz en cualquier alojamiento estático. No hay formulario ni backend: el contacto utiliza correo y LinkedIn. Esta entrega es local; no se publica con Sites porque su flujo de sincronización utiliza Git, restringido por el usuario.
