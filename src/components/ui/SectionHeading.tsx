import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-12">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-white mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-slate-400 text-lg max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
