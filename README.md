# Sergio Ballesteros · sitio profesional

Sitio bilingüe en HTML, CSS y JavaScript. Incluye tema claro/oscuro, animación de distribución normal con movimiento reducido accesible, trayectoria, portafolio de soluciones, perfil y formulario interno.

## Ejecutar

```sh
node server.js
```

Abre http://127.0.0.1:8000. El servidor solo usa módulos incluidos en Node.js.

## Envío de mensajes

El formulario envía una solicitud a `/api/contact`. El servidor valida los datos y llama a la [API de Resend](https://resend.com/features/email-api). La clave y el destinatario quedan en el servidor; el navegador no recibe ni muestra el correo de destino.

Antes de activar el envío, configura estas variables de entorno en el servicio de alojamiento:

- `RESEND_API_KEY`: clave privada de Resend.
- `CONTACT_TO_EMAIL`: correo que recibe las consultas.
- `CONTACT_FROM_EMAIL`: remitente autorizado por tu dominio en Resend.

Mientras falten, el formulario informa que el servicio no está configurado y no afirma que se envió un mensaje. Un alojamiento puramente estático debe añadir una ruta compatible `/api/contact` o ejecutar este servidor Node.js.

## Organización

- `index.html`: estructura y secciones.
- `style/style.css`: sistema visual, temas y adaptación móvil.
- `js/script.js`: traducciones, secciones, tema, animación y formulario.
- `server.js`: archivos estáticos y entrega de mensajes.
- `images/profile.jpg`: fotografía del perfil.

Los enlaces de LinkedIn, Kaggle y Credly usan el identificador `engineersergio` proporcionado. La maestría se presenta como formación en curso, con fecha prevista de diciembre de 2026.

No se ejecutaron comandos de Git ni se publicó el sitio.
