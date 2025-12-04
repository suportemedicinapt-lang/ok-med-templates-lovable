import { PlaceholderText } from "./PlaceholderText";
import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <span className="font-display text-lg font-bold">CV</span>
              </div>
              <span className="font-display text-xl font-semibold">
                <PlaceholderText className="text-primary-foreground border-primary-foreground/30">
                  Dr(a). Seu Nome
                </PlaceholderText>
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Cirurgião(ã) Vascular
            </p>
            <p className="text-primary-foreground/60 text-sm mt-2">
              <PlaceholderText className="text-primary-foreground/60 border-primary-foreground/20">
                CRM XXXXX | RQE XXXXX
              </PlaceholderText>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {["Início", "Sobre", "Especialidades", "Depoimentos", "Contato"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-primary-foreground/70 hover:text-accent transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p>
                <PlaceholderText className="text-primary-foreground/70 border-primary-foreground/20">
                  [Seu Endereço]
                </PlaceholderText>
              </p>
              <p>
                <PlaceholderText className="text-primary-foreground/70 border-primary-foreground/20">
                  [Seu Telefone]
                </PlaceholderText>
              </p>
              <p>
                <PlaceholderText className="text-primary-foreground/70 border-primary-foreground/20">
                  [Seu E-mail]
                </PlaceholderText>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear}{" "}
            <PlaceholderText className="text-primary-foreground/60 border-primary-foreground/20">
              Dr(a). Seu Nome
            </PlaceholderText>
            . Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/60 text-sm flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 text-accent fill-accent" /> para cuidar de você
          </p>
        </div>
      </div>
    </footer>
  );
};
