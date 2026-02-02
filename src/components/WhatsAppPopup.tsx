import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const whatsappNumbers = [
  { number: "27710197858", display: "071 019 7858", name: "Armandt" },
  { number: "27749054335", display: "074 905 4335", name: "Alternative" },
];

interface WhatsAppPopupProps {
  variant?: "glow" | "outline" | "default";
  size?: "default" | "sm" | "lg" | "xl";
  showIcon?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const WhatsAppPopup = ({ 
  variant = "glow", 
  size = "lg", 
  showIcon = true,
  className = "",
  children 
}: WhatsAppPopupProps) => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  return (
    <div className="relative">
      <motion.div whileTap={{ scale: 0.95 }}>
        <Button
          variant={variant}
          size={size}
          className={`group ${className}`}
          onClick={() => setShowWhatsApp(!showWhatsApp)}
        >
          {children || (
            <>
              Request a Quote
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </motion.div>

      {/* WhatsApp Numbers Dropdown */}
      <AnimatePresence>
        {showWhatsApp && (
          <>
            {/* Backdrop to close on click outside */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setShowWhatsApp(false)} 
            />
            
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 z-50"
            >
              <div className="bg-card/95 backdrop-blur-xl border border-green-500/30 rounded-2xl p-2 shadow-2xl">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-card/95 border-l border-t border-green-500/30 rotate-45" />
                
                <div className="text-center text-sm text-muted-foreground py-2 border-b border-border mb-2">
                  Choose a number to message
                </div>
                
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
                    onClick={() => setShowWhatsApp(false)}
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
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppPopup;
