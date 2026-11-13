/* Servidor local opcional. Sirve el sitio y entrega mensajes mediante Resend.
   La clave y el destinatario se leen de variables de entorno, nunca del navegador. */
const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");
const root = __dirname;
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".pdf": "application/pdf",
};
const send = (res, code, data) => {
  res.writeHead(code, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  res.end(JSON.stringify(data));
};
const server = http.createServer(async (req, res) => {
  if (req.url === "/api/contact" && req.method === "POST") {
    let raw = "";
    try {
      for await (const chunk of req) {
        raw += chunk;
        if (raw.length > 12000) return send(res, 413, { code: "TOO_LARGE" });
      }
      const { name, email, message, website } = JSON.parse(raw);
      if (website) return send(res, 200, { ok: true });
      if (
        typeof name !== "string" ||
        !name.trim() ||
        name.length > 120 ||
        typeof email !== "string" ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
        email.length > 254 ||
        typeof message !== "string" ||
        !message.trim() ||
        message.length > 5000
      )
        return send(res, 400, { code: "INVALID" });
      const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } =
        process.env;
      if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL)
        return send(res, 503, { code: "NOT_CONFIGURED" });
      const upstream = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: CONTACT_FROM_EMAIL,
          to: [CONTACT_TO_EMAIL],
          reply_to: email,
          subject: `Nuevo proyecto: ${name.trim().slice(0, 80)}`,
          text: `Nombre: ${name.trim()}\nCorreo: ${email}\n\n${message.trim()}`,
        }),
      });
      if (!upstream.ok) return send(res, 502, { code: "DELIVERY_FAILED" });
      return send(res, 200, { ok: true });
    } catch {
      return send(res, 400, { code: "INVALID" });
    }
  }
  if (req.method !== "GET" && req.method !== "HEAD")
    return send(res, 405, { code: "METHOD" });
  let name;
  try {
    name = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  } catch {
    return send(res, 400, { code: "INVALID_PATH" });
  }
  if (name === "/") name = "/index.html";
  const file = path.resolve(root, "." + name);
  if (!file.startsWith(root + path.sep) || /\/(?:\.|node_modules)/.test(name))
    return send(res, 403, { code: "FORBIDDEN" });
  try {
    const data = await fs.readFile(file);
    res.writeHead(200, {
      "Content-Type": types[path.extname(file)] || "application/octet-stream",
    });
    res.end(req.method === "HEAD" ? undefined : data);
  } catch {
    send(res, 404, { code: "NOT_FOUND" });
  }
});
server.listen(
  Number(process.env.PORT) || 8000,
  process.env.HOST || "127.0.0.1",
  () =>
    console.log(
      "Sitio listo en http://127.0.0.1:" + (process.env.PORT || 8000),
    ),
);
