import { motion } from "framer-motion";
import { CheckCircle2, Users, Award, Clock, Shield } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";

const values = [
  { icon: Shield, title: "Integrity", description: "Transparent advice and ethical service" },
  { icon: CheckCircle2, title: "Safety", description: "Every installation meets strict compliance" },
  { icon: Clock, title: "Reliability", description: "Consistent, thorough workmanship" },
  { icon: Users, title: "Professionalism", description: "Respectful service with clear communication" },
];

const whyUs = [
  "Direct access to a qualified specialist",
  "Safety and long-term reliability come first",
  "Fair pricing with no hidden costs",
  "Solutions tailored to your property",
  "Genuine after-service support",
];

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at right, hsl(195 100% 50% / 0.1), transparent 60%)",
        }}
      />

      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <AnimatedSection animation="fade-right">
            <motion.span
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              About IEGS
            </motion.span>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Driven by <span className="text-gradient">Integrity</span>. 
              Defined by <span className="text-gradient">Quality</span>.
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6">
              Led by Armandt, IEGS is driven by integrity, experience and a strong 
              commitment to customer satisfaction. We understand the frustrations caused 
              by load shedding, outdated systems and unreliable installations.
            </p>
            
            <p className="text-muted-foreground mb-8">
              That's why we approach every project with precision and care to ensure 
              quality you can trust. We provide dependable, compliant and future-ready 
              electrical and security solutions for homeowners and businesses across Gauteng.
            </p>

            {/* Why Us List */}
            <div className="space-y-3 mb-8">
              {whyUs.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <Button variant="glow" size="lg">
              Learn More About IEGS
            </Button>
          </AnimatedSection>

          {/* Right Column - Values Grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <AnimatedSection
                key={value.title}
                animation="scale"
                delay={index * 0.15}
              >
                <motion.div
                  className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {/* Glow on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(135deg, hsl(195 100% 50% / 0.05), transparent)",
                    }}
                  />
                  
                  <div className="relative">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                      whileHover={{ rotate: 5 }}
                    >
                      <value.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    
                    <h3 className="font-display font-bold text-lg mb-2 group-hover:text-gradient transition-all">
                      {value.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/10 to-transparent" />
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
