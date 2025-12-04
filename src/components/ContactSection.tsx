import { PlaceholderText } from "./PlaceholderText";
import { Button } from "./ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle
} from "lucide-react";

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "[Seu Endereço Completo - Rua, Número, Bairro, Cidade - Estado]",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "[Seu Número de Telefone]",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "[seu.email@exemplo.com]",
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      content: "[Ex: Segunda a Sexta, 8h às 18h]",
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <section id="contato" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">
            Contato
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Agende Sua Consulta
          </h2>
          <p className="text-muted-foreground text-lg">
            <PlaceholderText>
              Escreva uma mensagem convidando os pacientes a entrarem em contato. 
              Mencione que está pronto para ajudá-los com suas questões vasculares.
            </PlaceholderText>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">{info.title}</p>
                  <p className="text-muted-foreground">
                    <PlaceholderText>{info.content}</PlaceholderText>
                  </p>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="bg-card rounded-xl p-6 shadow-card">
              <p className="font-semibold text-foreground mb-4">Redes Sociais</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <PlaceholderText>[@seu.perfil]</PlaceholderText>
              </p>
            </div>
          </div>

          {/* Contact Form / CTA */}
          <div className="bg-card rounded-2xl p-8 shadow-card-hover">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Entre em Contato
            </h3>
            
            <div className="space-y-4 mb-8">
              <input
                type="text"
                placeholder="[Nome Completo]"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="tel"
                placeholder="[Telefone / WhatsApp]"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="email"
                placeholder="[E-mail]"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <textarea
                placeholder="[Descreva brevemente o motivo da consulta...]"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              />
            </div>

            <Button variant="hero" size="xl" className="w-full">
              Enviar Mensagem
            </Button>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-center text-muted-foreground mb-4">
                Ou entre em contato diretamente pelo WhatsApp:
              </p>
              <Button variant="accent" size="xl" className="w-full bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)]">
                <MessageCircle className="w-5 h-5" />
                <PlaceholderText className="text-accent-foreground border-accent-foreground/50">
                  WhatsApp: (XX) XXXXX-XXXX
                </PlaceholderText>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
