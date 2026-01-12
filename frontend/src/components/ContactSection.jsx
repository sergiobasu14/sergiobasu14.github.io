const ContactSection = () => (
  <section id="contacto" className="contact">
    <div className="contact__intro">
      <h2>Hablemos</h2>
      <p>Completa el formulario y cuéntame cómo puedo ayudarte con tus proyectos de datos, analítica o automatización.</p>
    </div>
    <form className="contact__form">
      <label htmlFor="contact-email">Tu correo</label>
      <input type="email" id="contact-email" name="email" placeholder="nombre@empresa.com" required />

      <label htmlFor="contact-message">Mensaje</label>
      <textarea id="contact-message" name="message" rows="5" placeholder="Describe tu idea o necesidad" required />

      <button type="submit">Enviar mensaje</button>
    </form>
  </section>
);

export default ContactSection;
