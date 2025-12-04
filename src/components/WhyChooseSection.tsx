import { PlaceholderText } from "./PlaceholderText";
import { 
  Clock, 
  Shield, 
  HeartHandshake, 
  Microscope,
  CheckCircle2
} from "lucide-react";

export const WhyChooseSection = () => {
  const benefits = [
    {
      icon: HeartHandshake,
      title: "Atendimento Humanizado",
      description: "[Descreva como você oferece um atendimento próximo e acolhedor aos seus pacientes]",
    },
    {
      icon: Microscope,
      title: "Tecnologia de Ponta",
      description: "[Mencione os equipamentos e técnicas modernas que você utiliza]",
    },
    {
      icon: Clock,
      title: "Agilidade no Diagnóstico",
      description: "[Explique como você otimiza o tempo para diagnóstico e início do tratamento]",
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "[Destaque os protocolos de segurança que você segue em seus procedimentos]",
    },
  ];

  const highlights = [
    "[Diferencial 1 - Ex: Atendimento em hospital de referência]",
    "[Diferencial 2 - Ex: Acompanhamento pós-operatório personalizado]",
    "[Diferencial 3 - Ex: Parceria com equipe multidisciplinar]",
    "[Diferencial 4 - Ex: Facilidade de agendamento]",
    "[Diferencial 5 - Ex: Aceita convênios - liste os principais]",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">
              Por Que Me Escolher
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Cuidado Especializado para sua{" "}
              <span className="text-accent">Saúde Vascular</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              <PlaceholderText>
                Escreva aqui um texto explicando por que os pacientes devem 
                escolher você. Destaque sua experiência, abordagem e compromisso 
                com resultados de qualidade.
              </PlaceholderText>
            </p>

            {/* Highlights List */}
            <ul className="space-y-4">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    <PlaceholderText>{highlight}</PlaceholderText>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-secondary rounded-2xl p-6 hover:shadow-card transition-all duration-300"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <PlaceholderText>{benefit.description}</PlaceholderText>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
