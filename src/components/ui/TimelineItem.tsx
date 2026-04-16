import { motion } from "framer-motion";

export default function TimelineItem({ 
  logo, title, subtitle, duration, index, children 
}: { 
  logo?: string, title: string, subtitle: string, duration: string, index: number, children?: React.ReactNode 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-0"
    >
      <div className="md:grid md:grid-cols-5 md:space-x-8 mb-10 md:mb-12">
        <div className="md:col-span-1 mb-3 md:mb-0">
          <div className="text-sm font-medium text-slate-400 capitalize">{duration}</div>
        </div>
        
        <div className="md:col-span-4 relative">
          <div className="absolute -left-9 md:-left-12 top-1 h-full w-px bg-white/10 hidden md:block"></div>
          <div className="absolute -left-[41px] md:-left-[53px] top-1.5 h-3 w-3 rounded-full border-2 border-purple-500 bg-slate-900 hidden md:block"></div>
          
          <div className="glass rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              {logo && <img src={import.meta.env.BASE_URL + logo.replace(/^\//, "")} alt={subtitle} className="w-10 h-10 rounded shadow-sm object-cover bg-white p-1" />}
              <div>
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <div className="text-purple-400 font-medium">{subtitle}</div>
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
