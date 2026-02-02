import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";
import WhatsAppPopup from "./WhatsAppPopup";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "Call Now",
    value: "071 019 7858",
    href: "https://wa.me/27710197858",
    description: "Speak directly to Armandt",
  },
  {
    icon: MessageCircle,
    title: "Alternative Line",
    value: "074 905 4335",
    href: "https://wa.me/27749054335",
    description: "Secondary contact number",
  },
  {
    icon: MapPin,
    title: "Service Area",
    value: "Gauteng & Surrounding",
    href: "#",
    description: "Covering the greater Gauteng region",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-card to-background" />
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, hsl(195 100% 50% / 0.1), transparent 70%)",
        }}
      />

      <div className="container px-4 relative">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Get In Touch
          </motion.span>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Your Next Project <span className="text-gradient">Starts Here</span>
          </h2>
          
          <p className="text-muted-foreground text-lg">
            Speak directly to the expert, no middleman. Whether you require a quotation, 
            consultation or urgent call-out, IEGS provides reliable service you can trust.
          </p>
        </AnimatedSection>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <AnimatedSection
              key={method.title}
              animation="fade-up"
              delay={index * 0.1}
            >
              <motion.a
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group block h-full"
                whileHover={{ y: -5 }}
              >
                <div className="relative h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                  {/* Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none glow-box"
                  />
                  
                  <div className="relative">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <method.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    
                    <h3 className="font-display font-bold text-lg mb-1">
                      {method.title}
                    </h3>
                    
                    <p className="text-primary font-medium mb-2">
                      {method.value}
                    </p>
                    
                    <p className="text-muted-foreground text-sm">
                      {method.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection animation="scale" className="max-w-2xl mx-auto">
          <motion.div
            className="relative p-8 md:p-12 rounded-3xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-electric-purple/10" />
            <div className="absolute inset-0 glow-border rounded-3xl" />
            
            {/* Content */}
            <div className="relative text-center">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              
              <p className="text-muted-foreground mb-8">
                Contact Armandt today for a professional consultation or quotation.
                IEGS – Your Partner in Power, Safety and Reliability.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <WhatsAppPopup variant="glow" size="lg" />
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:0710197858">
                    <Phone className="mr-2 w-4 h-4" />
                    Call 071 019 7858
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
