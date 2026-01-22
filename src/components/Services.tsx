import { motion } from "framer-motion";
import { Zap, Sun, Battery, DoorOpen, Shield, FileCheck } from "lucide-react";
import ServiceCard from "./ServiceCard";
import AnimatedSection from "./AnimatedSection";

import solarImg from "@/assets/solar-service.jpg";
import generatorImg from "@/assets/generator-service.jpg";
import securityImg from "@/assets/security-service.jpg";
import gateMotorImg from "@/assets/gate-motor-service.jpg";
import cocImg from "@/assets/coc-service.jpg";

const services = [
  {
    title: "Electrical COCs",
    description: "Professional Electrical Compliance Certificates ensuring your installation meets all SANS regulations and safety requirements.",
    image: cocImg,
    icon: FileCheck,
    features: [
      "Full electrical assessments",
      "SANS-approved certification",
      "Fast turnaround times",
    ],
    ctaText: "Book Inspection",
  },
  {
    title: "Solar Installations",
    description: "Beat load shedding with custom-designed solar systems for long-term savings and uninterrupted power.",
    image: solarImg,
    icon: Sun,
    features: [
      "Hybrid & off-grid systems",
      "Lithium battery upgrades",
      "Custom system design",
    ],
    ctaText: "Get Assessment",
  },
  {
    title: "Generators",
    description: "Reliable backup power solutions with professional installation and ongoing maintenance support.",
    image: generatorImg,
    icon: Battery,
    features: [
      "Home & business setups",
      "Automatic transfer switches",
      "Load assessments",
    ],
    ctaText: "Request Quote",
  },
  {
    title: "Gate Motors",
    description: "Professional gate motor installation, repairs and servicing from leading brands for smooth operation.",
    image: gateMotorImg,
    icon: DoorOpen,
    features: [
      "Centurion, ET Nice, FAAC",
      "Safety beam setup",
      "Fast repairs",
    ],
    ctaText: "Book Call-Out",
  },
  {
    title: "Security Systems",
    description: "Complete security solutions including CCTV, alarms, electric fencing and access control systems.",
    image: securityImg,
    icon: Shield,
    features: [
      "CCTV & recording systems",
      "Alarm & sensors",
      "Access control",
    ],
    ctaText: "Secure Property",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Section Header */}
      <div className="container px-4 mb-16">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Comprehensive <span className="text-gradient">Electrical Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From compliance certificates to advanced security systems, we deliver 
            professional workmanship that's safe, reliable, and built to last.
          </p>
        </AnimatedSection>
      </div>

      {/* Services Grid */}
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-px h-40 electric-line transform -translate-y-1/2 rotate-90 origin-left" />
      <div className="absolute top-1/2 right-0 w-px h-40 electric-line transform -translate-y-1/2 -rotate-90 origin-right" />
    </section>
  );
};

export default Services;
