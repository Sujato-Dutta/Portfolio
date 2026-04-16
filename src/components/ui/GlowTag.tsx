import { motion } from "framer-motion";

export default function GlowTag({ label, children, size = "sm" }: { label?: string, children?: React.ReactNode, size?: "sm" | "md" }) {
  const sizeClasses = size === "sm" ? "px-2 py-1 text-xs" : "px-3 py-1.5 text-sm";
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-medium hover:bg-purple-500/20 hover:border-purple-500/40 transition-colors ${sizeClasses}`}
    >
      {label || children}
    </motion.div>
  );
}
