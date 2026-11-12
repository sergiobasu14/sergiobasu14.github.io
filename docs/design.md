# Concepto y decisiones de diseño

Identidad editorial para un ingeniero de IA y datos que presenta servicios a clientes. Fondo marfil (#f5f3eb), azul tinta (#142e35), verde azulado (#1d6257), lima suave (#dbe4ac). Tipografía sans del sistema, títulos grandes, retícula abierta y líneas divisorias finas. El contacto usa una banda oscura.

La referencia `design-concept.png` se generó con la herramienta integrada de imágenes a partir del concepto aprobado. Brief: portafolio bilingüe de Sergio Ballesteros, marfil/azul tinta/verde, encabezado simple, titular «IA aplicada. Impacto real.», flujo abstracto, métricas, cuatro servicios, casos profesionales y académicos, trayectoria, perfil, formación y contacto. Textos y controles se implementan en HTML; diagramas y flujo en SVG.

El concepto visual es una referencia de composición. Las fechas, instituciones, correo, LinkedIn y afirmaciones generadas en la imagen se sustituyen por el contenido confirmado del CV. El 30% se atribuye específicamente al primer despliegue de la plataforma de Capgemini. Se incorporan detalles desplegables, habilidades, retrato y notas de atribución para cumplir el plan de contenido.

En móvil se apilan las columnas y los casos, y la navegación se abre mediante un botón accesible. Se respeta la preferencia de movimiento reducido. El diseño usa controles con foco visible, encabezados jerárquicos, regiones semánticas y un enlace para saltar al contenido.

## Revisión de implementación

La comparación se hizo con la referencia y capturas reales de Chromium, vistas con `view_image`. Browser Use devolvió «Unknown tool», por lo que se usó Playwright local. Se revisaron escritorio a 1440 px, ancho nativo de la referencia a 1024 px y móvil a 390 px. La referencia tiene una composición más comprimida; la implementación conserva el contenido completo del plan y mayor espacio de lectura.

| Aspecto | Evidencia y decisión |
| --- | --- |
| Paleta | Marfil, azul tinta, verde y lima implementados como variables compartidas; sin degradados. |
| Tipografía | Título grande de dos líneas, sans legible, escala descendente para secciones y casos. |
| Composición | Navegación simple, presentación con flujo lateral, métricas, servicios numerados, casos, trayectoria, perfil y contacto oscuro. |
| Ilustraciones | Flujo y cuatro diagramas vectoriales coherentes; no se usan capturas ficticias de producto. |
| Contenido inicial | Titular, navegación y CTA conservan el concepto acordado; resumen personal, CTA secundario y atribución del 30% provienen del plan de contenido. |
| Datos | Corrección deliberada de fechas, formación y contacto inventados por la referencia generada, usando el CV confirmado. |
| Móvil | Menú desplegable, columnas apiladas y texto legible. Corregido desbordamiento del flujo en tablet. |

Pruebas funcionales completadas: ES/EN, persistencia y parámetro de URL; casos abiertos al traducir; copia del correo; CV con respuesta HTTP correcta; menú móvil; ruta antigua de portafolio; cero errores de JavaScript. Sin desbordamiento horizontal a 320, 375, 390, 768, 1024 y 1440 px.

Desviaciones deliberadas de la imagen: contenido factual corregido, retrato y habilidades incluidos, casos desplegables, más espacio para todo el contenido y diagramas vectoriales en lugar de imágenes rasterizadas. La fidelidad se evalúa contra el concepto acordado, con estas adaptaciones documentadas.
