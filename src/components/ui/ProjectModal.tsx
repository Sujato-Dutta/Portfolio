import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/data/projects";
import GlowTag from "./GlowTag";

export default function ProjectModal({ project, isOpen, onClose }: { project: Project | null, isOpen: boolean, onClose: () => void }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-white/10 rounded-2xl shadow-2xl"
        >
          <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/80 z-10 transition-colors">
            <X size={20} />
          </button>
          
          <div className="h-64 relative">
            <img src={import.meta.env.BASE_URL + project.coverImage.replace(/^\//, "")} className="w-full h-full object-cover" alt={project.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
          </div>

          <div className="p-6 md:p-8 -mt-12 relative z-10">
            <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
            <p className="text-purple-400 font-medium mb-6">{project.summary}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.skills.map(s => <GlowTag key={s} label={s} />)}
            </div>

            <div className="prose prose-invert max-w-none text-slate-300">
              <p>{project.fullDescription}</p>
            </div>

            <div className="mt-8 flex gap-4">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors font-medium">
                  <FaGithub size={20} /> View Source
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors">
                  Live Demo <ArrowUpRight size={20} />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
