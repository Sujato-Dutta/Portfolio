import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import GlowTag from "@/components/ui/GlowTag";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectModal from "@/components/ui/ProjectModal";
import type { Project } from "@/data/projects";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="py-20 md:py-28">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <SectionHeading
                    title="Projects"
                    subtitle="A selection of projects showcasing my work in AI, ML, and software engineering."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: "easeOut",
                            }}
                        >
                            <motion.div
                                whileHover={{ y: -6 }}
                                transition={{ duration: 0.3 }}
                                className="group h-full rounded-2xl border border-white/[0.06] bg-dark-card overflow-hidden cursor-pointer hover:border-purple-500/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.08)]"
                                onClick={() => setSelectedProject(project)}
                            >
                                {/* Cover Image */}
                                <div className="relative h-44 overflow-hidden">
                                    <img
                                        src={import.meta.env.BASE_URL + project.coverImage.replace(/^\//, "")}
                                        alt={project.title}
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 w-full h-full"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/40 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                        {project.summary}
                                    </p>

                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {project.skills.slice(0, 3).map((skill) => (
                                            <GlowTag key={skill} label={skill} />
                                        ))}
                                        {project.skills.length > 3 && (
                                            <span className="px-2 py-1 text-xs text-slate-500">
                                                +{project.skills.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Read More */}
                                    <div className="flex items-center gap-1 text-sm font-medium text-purple-400 group-hover:text-cyan-400 transition-colors duration-300">
                                        Read More
                                        <ArrowUpRight
                                            size={16}
                                            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}
