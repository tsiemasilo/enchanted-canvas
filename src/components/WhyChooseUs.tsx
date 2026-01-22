import { motion } from "framer-motion";
import { 
  Sparkles, 
  Wrench, 
  Award, 
  Clock, 
  MessageSquare, 
  Headphones 
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reasons = [
  {
    icon: Sparkles,
    title: "Friendly & Professional",
    description: "Reliable service with a personal touch from start to finish.",
  },
  {
    icon: Wrench,
    title: "Hands-On Expertise",
    description: "Direct access to qualified specialists who understand your needs.",
  },
  {
    icon: Award,
    title: "Quality Workmanship",
    description: "Every installation meets all compliance standards and regulations.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Quick response times and efficient project completion.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "No jargon, just honest advice and transparent pricing.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "Installation, repairs and maintenance all in one place.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container px-4 relative">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Why Clients Trust IEGS
          </motion.span>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Your Power, Safety & <span className="text-gradient">Convenience</span>
          </h2>
          
          <p className="text-muted-foreground text-lg">
            We prioritize your peace of mind with dependable service and workmanship you can trust.
          </p>
        </AnimatedSection>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <AnimatedSection
              key={reason.title}
              animation="fade-up"
              delay={index * 0.1}
            >
              <motion.div
                className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-500 h-full"
                whileHover={{ y: -8 }}
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(135deg, hsl(195 100% 50% / 0.08), hsl(270 100% 60% / 0.04))",
                  }}
                />

                {/* Icon with animated ring */}
                <div className="relative mb-6">
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <reason.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  
                  {/* Animated ring */}
                  <motion.div
                    className="absolute inset-0 w-14 h-14 rounded-2xl border border-primary/30 opacity-0 group-hover:opacity-100"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl mb-3 group-hover:text-gradient transition-all duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {reason.description}
                </p>

                {/* Decorative line */}
                <motion.div
                  className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { value: "100%", label: "Compliance Rate" },
            { value: "24hr", label: "Response Time" },
            { value: "5★", label: "Customer Rating" },
            { value: "Gauteng", label: "Service Area" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient glow-text mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
