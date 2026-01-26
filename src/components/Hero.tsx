import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, Shield, Sun, Phone, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const whatsappNumbers = [
  { number: "27710197858", display: "071 019 7858", name: "Armandt" },
  { number: "27718283250", display: "071 828 3250", name: "Alternative" },
];

const Hero = () => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Electrical infrastructure"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Electric line decorations */}
      <motion.div
        className="absolute top-1/4 left-0 right-0 electric-line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-0 right-0 electric-line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      />

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong glow-border mb-8"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Trusted Electrical & Security Solutions</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="block">Powering Your World</span>
            <span className="block text-gradient glow-text">With Precision</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Reliable Energy. Trusted Security. Real Peace of Mind. 
            Professional electrical, solar, and security solutions for homes and businesses across Gauteng.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button variant="glow" size="xl" className="group">
              Request a Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="tel:0710197858">
                <Phone className="mr-2 w-5 h-5" />
                Call Armandt
              </a>
            </Button>
            
            {/* WhatsApp Button with Dropdown */}
            <div className="relative">
              <motion.div
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="xl"
                  className="bg-green-600/20 border-green-500/50 hover:bg-green-600/30 hover:border-green-400"
                  onClick={() => setShowWhatsApp(!showWhatsApp)}
                >
                  <MessageCircle className="mr-2 w-5 h-5 text-green-400" />
                  <span className="text-green-400">WhatsApp</span>
                  <motion.div
                    animate={{ rotate: showWhatsApp ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-2"
                  >
                    {showWhatsApp ? (
                      <X className="w-4 h-4 text-green-400" />
                    ) : null}
                  </motion.div>
                </Button>
              </motion.div>

              {/* WhatsApp Numbers Dropdown */}
              <AnimatePresence>
                {showWhatsApp && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 z-50"
                  >
                    <div className="bg-card/95 backdrop-blur-xl border border-green-500/30 rounded-2xl p-2 shadow-2xl">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-card/95 border-l border-t border-green-500/30 rotate-45" />
                      
                      {whatsappNumbers.map((item, index) => (
                        <motion.a
                          key={item.number}
                          href={`https://wa.me/${item.number}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-500/10 transition-colors group"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                            <MessageCircle className="w-5 h-5 text-green-400" />
                          </div>
                          <div className="text-left">
                            <p className="font-medium text-foreground">{item.name}</p>
                            <p className="text-sm text-green-400">{item.display}</p>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[
              { icon: Zap, text: "Electrical COCs" },
              { icon: Sun, text: "Solar Installations" },
              { icon: Shield, text: "Security Systems" },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--muted))" }}
              >
                <item.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-3 mt-2 rounded-full bg-primary"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
