import { Button } from "@/components/ui/button";
import { PlaceholderText } from "./PlaceholderText";
import { Calendar, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-vascular.jpg";
import doctorImage from "@/assets/doctor-placeholder.jpg";

export const HeroSection = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-primary-foreground animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">
                <PlaceholderText className="text-primary-foreground/90 border-primary-foreground/50">
                  Sua Especialização / CRM Aqui
                </PlaceholderText>
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <PlaceholderText className="text-primary-foreground border-primary-foreground/50">
                Dr(a). Seu Nome Completo
              </PlaceholderText>
            </h1>
            
            <p className="text-xl md:text-2xl font-display text-primary-foreground/90 mb-4">
              Cirurgião(ã) Vascular
            </p>
            
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl leading-relaxed">
              <PlaceholderText className="text-primary-foreground/80 border-primary-foreground/40">
                Escreva aqui uma breve descrição sobre você e sua abordagem médica. 
                Destaque sua experiência e compromisso com o cuidado dos pacientes.
              </PlaceholderText>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="xl">
                <Calendar className="w-5 h-5" />
                Agendar Consulta
              </Button>
              <Button variant="heroOutline" size="xl">
                Conheça Mais
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center sm:text-left">
                <p className="font-display text-3xl md:text-4xl font-bold text-accent">
                  <PlaceholderText className="text-accent border-accent/50">+X</PlaceholderText>
                </p>
                <p className="text-primary-foreground/70 text-sm">Anos de Experiência</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="font-display text-3xl md:text-4xl font-bold text-accent">
                  <PlaceholderText className="text-accent border-accent/50">+X.XXX</PlaceholderText>
                </p>
                <p className="text-primary-foreground/70 text-sm">Pacientes Atendidos</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="font-display text-3xl md:text-4xl font-bold text-accent">
                  <PlaceholderText className="text-accent border-accent/50">+X.XXX</PlaceholderText>
                </p>
                <p className="text-primary-foreground/70 text-sm">Cirurgias Realizadas</p>
              </div>
            </div>
          </div>

          {/* Doctor Image */}
          <div className="hidden lg:flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-full blur-3xl animate-pulse-soft" />
              <img
                src={doctorImage}
                alt="Foto do Médico"
                className="relative w-80 h-96 object-cover rounded-2xl shadow-2xl border-4 border-primary-foreground/20"
              />
              <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-4 shadow-card-hover">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">5.0 ★</p>
                    <p className="text-sm text-muted-foreground">
                      <PlaceholderText>+XXX avaliações</PlaceholderText>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
