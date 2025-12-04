import { PlaceholderText } from "./PlaceholderText";
import { 
  Activity, 
  Stethoscope, 
  Heart, 
  Droplets,
  ArrowRight,
  Zap,
  CircleDot,
  Waves
} from "lucide-react";
import { Button } from "./ui/button";

export const SpecialtiesSection = () => {
  const specialties = [
    {
      icon: Activity,
      title: "Varizes",
      description: "[Descreva brevemente o tratamento de varizes que você oferece, técnicas utilizadas e benefícios para o paciente]",
    },
    {
      icon: Droplets,
      title: "Trombose Venosa",
      description: "[Explique como você trata a trombose venosa profunda, prevenção e acompanhamento]",
    },
    {
      icon: Heart,
      title: "Doenças Arteriais",
      description: "[Detalhe os tratamentos para doenças arteriais periféricas que você realiza]",
    },
    {
      icon: Zap,
      title: "Cirurgia Endovascular",
      description: "[Descreva os procedimentos minimamente invasivos que você oferece]",
    },
    {
      icon: CircleDot,
      title: "Aneurismas",
      description: "[Explique seu tratamento para aneurismas arteriais, diagnóstico e acompanhamento]",
    },
    {
      icon: Waves,
      title: "Úlceras Vasculares",
      description: "[Descreva o tratamento para úlceras de origem vascular que você realiza]",
    },
  ];

  return (
    <section id="especialidades" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">
            Especialidades
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tratamentos Especializados em{" "}
            <span className="text-accent">Cirurgia Vascular</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            <PlaceholderText>
              Escreva aqui uma introdução sobre os tratamentos que você oferece 
              e como você aborda cada caso de forma personalizada.
            </PlaceholderText>
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <specialty.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {specialty.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <PlaceholderText>{specialty.description}</PlaceholderText>
              </p>
              <a 
                href="#contato" 
                className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all duration-200"
              >
                Saiba mais <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="xl">
            <Stethoscope className="w-5 h-5" />
            Agendar uma Avaliação
          </Button>
        </div>
      </div>
    </section>
  );
};
