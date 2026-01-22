import { motion } from "framer-motion";
import { Zap, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-card/50">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.a
              href="#home"
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <span className="font-display font-bold text-xl">IEGS</span>
            </motion.a>
            <p className="text-muted-foreground text-sm mb-4">
              Your Partner in Power, Safety and Reliability. Professional electrical 
              and security solutions for Gauteng.
            </p>
            <p className="text-muted-foreground text-xs">
              Strategic Consultancy T/A Strategik<br />
              2023/546531/07
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Electrical COCs",
                "Solar Installations",
                "Generators",
                "Gate Motors",
                "Security Systems",
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:0710197858" 
                  className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  071 019 7858
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@strategik.co.za" 
                  className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@strategik.co.za
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                Gauteng & Surrounding Regions
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} IEGS. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Contact Person: Armandt | Cell: 071 019 7858
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
