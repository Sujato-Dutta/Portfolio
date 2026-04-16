

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowTag from "@/components/ui/GlowTag";

export default function Skills() {
    return (
        <section id="skills" className="py-20 md:py-28">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <SectionHeading
                    title="Skills"
                    subtitle="Technologies and tools I work with regularly."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{
                                duration: 0.5,
                                delay: catIndex * 0.1,
                                ease: "easeOut",
                            }}
                            className="glass rounded-2xl p-6 hover:border-purple-500/20 transition-all duration-300"
                        >
                            <h3 className="text-lg font-semibold text-white mb-4">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.3,
                                            delay: catIndex * 0.1 + skillIndex * 0.04,
                                        }}
                                    >
                                        <GlowTag label={skill} size="md" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
