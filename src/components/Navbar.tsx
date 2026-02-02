import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Phone, Zap } from "lucide-react";
import MobileMenu from "./MobileMenu";
import WhatsAppPopup from "./WhatsAppPopup";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-2" : "py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={`mx-auto px-4 transition-all duration-500 ${
          isScrolled ? "max-w-4xl" : "max-w-7xl"
        }`}>
          <motion.nav
            className={`relative transition-all duration-500 ${
              isScrolled
                ? "dynamic-island px-6 py-3"
                : "glass rounded-2xl px-6 py-4"
            }`}
            layout
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full opacity-0 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, hsl(4 75% 62% / 0.2), hsl(15 80% 55% / 0.1))",
                filter: "blur(20px)",
              }}
              animate={{
                opacity: isScrolled ? [0.3, 0.6, 0.3] : 0,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative flex items-center justify-between">
              {/* Logo */}
              <motion.a
                href="#home"
                className="flex items-center gap-3 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        "0 0 10px hsl(30 100% 50% / 0.3)",
                        "0 0 20px hsl(30 100% 50% / 0.5)",
                        "0 0 10px hsl(30 100% 50% / 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
                <span className="font-display font-bold text-xl text-foreground">
                  IEGS
                </span>
              </motion.a>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {link.name}
                    <motion.span
                      className="absolute bottom-0 left-1/2 h-0.5 bg-primary rounded-full"
                      initial={{ width: 0, x: "-50%" }}
                      whileHover={{ width: "60%" }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="hidden lg:flex items-center gap-3">
                <motion.a
                  href="tel:0710197858"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <Phone className="w-4 h-4" />
                  <span className={isScrolled ? "hidden xl:inline" : ""}>Call Armandt</span>
                </motion.a>
                <WhatsAppPopup variant="glow" size="sm" />
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full glass"
                onClick={() => setIsMobileMenuOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Menu className="w-5 h-5 text-foreground" />
              </motion.button>
            </div>
          </motion.nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};

export default Navbar;
