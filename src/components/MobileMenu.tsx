import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Zap, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
}

const MobileMenu = ({ isOpen, onClose, navLinks }: MobileMenuProps) => {
  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm overflow-hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-card">
              {/* Animated glow orbs */}
              <motion.div
                className="absolute top-20 -right-20 w-64 h-64 rounded-full"
                style={{ background: "hsl(195 100% 50% / 0.1)", filter: "blur(60px)" }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-40 -left-20 w-48 h-48 rounded-full"
                style={{ background: "hsl(270 100% 60% / 0.1)", filter: "blur(60px)" }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-12">
                <motion.div
                  className="flex items-center gap-2"
                  variants={itemVariants}
                  custom={0}
                >
                  <div className="relative">
                    <Zap className="w-8 h-8 text-primary" />
                    <motion.div
                      className="absolute inset-0"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Zap className="w-8 h-8 text-primary blur-sm" />
                    </motion.div>
                  </div>
                  <span className="font-display font-bold text-xl">IEGS</span>
                </motion.div>

                <motion.button
                  className="w-12 h-12 rounded-full glass-strong flex items-center justify-center glow-border"
                  onClick={onClose}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  variants={itemVariants}
                  custom={0}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="group flex items-center justify-between px-4 py-4 rounded-xl hover:bg-muted/50 transition-colors"
                    variants={itemVariants}
                    custom={i + 1}
                    onClick={onClose}
                    whileHover={{ x: 8 }}
                  >
                    <span className="text-lg font-medium">{link.name}</span>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </nav>

              {/* Contact Info */}
              <motion.div
                className="mt-auto pt-8 border-t border-border space-y-4"
                variants={itemVariants}
                custom={navLinks.length + 2}
              >
              <a
                  href="tel:0710197858"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span>071 019 7858</span>
                </a>
                <a
                  href="tel:0718283250"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span>071 828 3250</span>
                </a>

                <Button variant="glow" className="w-full mt-4" size="lg">
                  Request a Quote
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
