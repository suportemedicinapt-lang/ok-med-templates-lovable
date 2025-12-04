import { PlaceholderText } from "./PlaceholderText";
import { GraduationCap, Building, Award, Heart } from "lucide-react";
import doctorImage from "@/assets/doctor-placeholder.jpg";

export const AboutSection = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Formação",
      description: "[Sua Universidade e Ano de Formação]",
    },
    {
      icon: Building,
      title: "Residência",
      description: "[Hospital onde fez Residência]",
    },
    {
      icon: Award,
      title: "Especialização",
      description: "[Suas Especializações e Títulos]",
    },
    {
      icon: Heart,
      title: "Membro",
      description: "[Sociedades Médicas que participa]",
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/10 rounded-3xl -rotate-3" />
            <img
              src={doctorImage}
              alt="Foto do Médico"
              className="relative w-full max-w-md mx-auto aspect-[4/5] object-cover rounded-2xl shadow-card-hover"
            />
            <div className="absolute -bottom-6 -right-6 md:right-12 bg-primary text-primary-foreground rounded-xl p-6 shadow-xl">
              <p className="font-display text-4xl font-bold">
                <PlaceholderText className="text-primary-foreground border-primary-foreground/50">+XX</PlaceholderText>
              </p>
              <p className="text-primary-foreground/80 text-sm">Anos de Experiência</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">
              Sobre Mim
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              <PlaceholderText as="span">Dr(a). Seu Nome Aqui</PlaceholderText>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                <PlaceholderText>
                  Escreva aqui o primeiro parágrafo sobre você. Conte sobre sua trajetória, 
                  o que o motivou a seguir a carreira médica e especificamente a cirurgia vascular.
                </PlaceholderText>
              </p>
              <p>
                <PlaceholderText>
                  No segundo parágrafo, destaque sua filosofia de atendimento, como você 
                  se relaciona com os pacientes e o que diferencia seu trabalho dos demais profissionais.
                </PlaceholderText>
              </p>
              <p>
                <PlaceholderText>
                  No terceiro parágrafo, você pode mencionar suas conquistas, publicações 
                  científicas, participação em congressos ou qualquer outro diferencial relevante.
                </PlaceholderText>
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {credentials.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-secondary rounded-xl hover:shadow-card transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">
                      <PlaceholderText>{item.description}</PlaceholderText>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
