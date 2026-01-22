import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  features: string[];
  index: number;
  ctaText: string;
}

const ServiceCard = ({
  title,
  description,
  image,
  icon: Icon,
  features,
  index,
  ctaText,
}: ServiceCardProps) => {
  return (
    <motion.div
      className="group relative h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative h-full overflow-hidden rounded-2xl bg-card border border-border card-shine transition-all duration-500 group-hover:border-primary/30">
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, hsl(195 100% 50% / 0.05), hsl(270 100% 60% / 0.03))",
          }}
        />

        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
          
          {/* Icon Badge */}
          <motion.div
            className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-card/90 backdrop-blur-sm flex items-center justify-center glow-border"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Icon className="w-6 h-6 text-primary" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-display text-xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {description}
          </p>

          {/* Features */}
          <ul className="space-y-2 mb-6">
            {features.slice(0, 3).map((feature, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-2 text-sm text-muted-foreground"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {feature}
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <Button
            variant="ghost"
            className="w-full group/btn justify-between hover:bg-primary/10"
          >
            {ctaText}
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Hover border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: "inset 0 0 0 1px hsl(195 100% 50% / 0.3), 0 0 30px hsl(195 100% 50% / 0.1)",
          }}
        />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
