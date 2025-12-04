import { PlaceholderText } from "./PlaceholderText";
import { Quote, Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "[Nome do Paciente 1]",
      treatment: "[Tratamento Realizado]",
      text: "[Depoimento do paciente 1 - Escreva ou peça para o paciente escrever sobre sua experiência, o atendimento recebido e os resultados obtidos]",
      rating: 5,
    },
    {
      name: "[Nome do Paciente 2]",
      treatment: "[Tratamento Realizado]",
      text: "[Depoimento do paciente 2 - Outro depoimento destacando aspectos diferentes do seu atendimento]",
      rating: 5,
    },
    {
      name: "[Nome do Paciente 3]",
      treatment: "[Tratamento Realizado]",
      text: "[Depoimento do paciente 3 - Mais um relato de experiência positiva com seu trabalho]",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">
            Depoimentos
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            O Que Meus Pacientes Dizem
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            <PlaceholderText className="text-primary-foreground/80 border-primary-foreground/40">
              Adicione uma breve introdução sobre a satisfação dos seus pacientes 
              e a importância do feedback para seu trabalho.
            </PlaceholderText>
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-accent mb-4" />
              
              <p className="text-primary-foreground/90 leading-relaxed mb-6">
                "<PlaceholderText className="text-primary-foreground/90 border-primary-foreground/30">
                  {testimonial.text}
                </PlaceholderText>"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>

              <div>
                <p className="font-semibold text-primary-foreground">
                  <PlaceholderText className="text-primary-foreground border-primary-foreground/30">
                    {testimonial.name}
                  </PlaceholderText>
                </p>
                <p className="text-sm text-primary-foreground/60">
                  <PlaceholderText className="text-primary-foreground/60 border-primary-foreground/20">
                    {testimonial.treatment}
                  </PlaceholderText>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
