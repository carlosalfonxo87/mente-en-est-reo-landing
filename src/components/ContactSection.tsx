import { useState } from "react";
import { z } from "zod";
import { Mail, Send, Instagram, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty({ message: "El nombre es obligatorio" })
    .max(100, { message: "El nombre debe tener menos de 100 caracteres" }),
  email: z
    .string()
    .trim()
    .email({ message: "Correo electrónico inválido" })
    .max(255, { message: "El correo debe tener menos de 255 caracteres" }),
  subject: z
    .string()
    .trim()
    .nonempty({ message: "El asunto es obligatorio" })
    .max(150, { message: "El asunto debe tener menos de 150 caracteres" }),
  message: z
    .string()
    .trim()
    .nonempty({ message: "El mensaje es obligatorio" })
    .max(1000, { message: "El mensaje debe tener menos de 1000 caracteres" }),
});

type ContactErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

const CONTACT_EMAIL = "hola@menteenestereo.com";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<ContactErrors>({});

  const handleChange = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: ContactErrors = {};
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof ContactErrors;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const { name, email, subject, message } = parsed.data;
    const body = `Nombre: ${name}\nCorreo: ${email}\n\n${message}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    toast({
      title: "Mensaje listo para enviar",
      description: "Abrimos tu cliente de correo con el mensaje preparado.",
    });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputBase =
    "w-full bg-background/60 border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors";

  return (
    <section id="contacto" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">
            Contacto
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold neon-gradient-text mb-4">
            Hablemos de tu próximo proyecto
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Cuéntanos qué imaginas y diseñaremos la experiencia sonora perfecta para ti.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-8">
          {/* Contact info */}
          <div className="space-y-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card/60 backdrop-blur-md hover:border-primary/50 transition-colors group"
            >
              <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-display text-xs uppercase tracking-wider text-muted-foreground">Correo</p>
                <p className="font-body text-sm text-foreground">{CONTACT_EMAIL}</p>
              </div>
            </a>
            <a
              href="https://instagram.com/menteenestereo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card/60 backdrop-blur-md hover:border-secondary/50 transition-colors group"
            >
              <Instagram className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-display text-xs uppercase tracking-wider text-muted-foreground">Instagram</p>
                <p className="font-body text-sm text-foreground">@menteenestereo</p>
              </div>
            </a>
            <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card/60 backdrop-blur-md">
              <MessageCircle className="w-5 h-5 text-primary" />
              <div>
                <p className="font-display text-xs uppercase tracking-wider text-muted-foreground">Respuesta</p>
                <p className="font-body text-sm text-foreground">En menos de 24 h</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-border bg-card/60 backdrop-blur-md p-6 md:p-8 border-glow-blue opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block font-display text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Nombre
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={form.name}
                  onChange={handleChange("name")}
                  maxLength={100}
                  className={inputBase}
                  placeholder="Tu nombre"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                />
                {errors.name && (
                  <p id="contact-name-error" className="text-destructive text-xs mt-1 font-body">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact-email" className="block font-display text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Correo
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  maxLength={255}
                  className={inputBase}
                  placeholder="tucorreo@ejemplo.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                />
                {errors.email && (
                  <p id="contact-email-error" className="text-destructive text-xs mt-1 font-body">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact-subject" className="block font-display text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Asunto
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange("subject")}
                  maxLength={150}
                  className={inputBase}
                  placeholder="¿En qué podemos ayudarte?"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                />
                {errors.subject && (
                  <p id="contact-subject-error" className="text-destructive text-xs mt-1 font-body">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact-message" className="block font-display text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange("message")}
                  maxLength={1000}
                  className={`${inputBase} resize-none`}
                  placeholder="Cuéntanos tu proyecto..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                />
                {errors.message && (
                  <p id="contact-message-error" className="text-destructive text-xs mt-1 font-body">{errors.message}</p>
                )}
                <p className="text-muted-foreground text-xs mt-1 font-body text-right">
                  {form.message.length}/1000
                </p>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-display text-sm tracking-wider uppercase bg-primary text-primary-foreground border-glow-blue hover:scale-[1.02] transition-transform"
              >
                <Send className="w-4 h-4" />
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
