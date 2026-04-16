

import { experiences } from "@/data/experience";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";

export default function Experience() {
    return (
        <section id="experience" className="py-20 md:py-28">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
                <SectionHeading
                    title="Experience"
                    subtitle="My professional journey building intelligent systems."
                />

                <div className="relative">
                    {experiences.map((exp, index) => (
                        <TimelineItem
                            key={exp.id}
                            logo={exp.logo}
                            title={exp.role}
                            subtitle={exp.company}
                            duration={exp.duration}
                            index={index}
                        >
                            <ul className="space-y-2 mt-3">
                                {exp.achievements.map((achievement, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed"
                                    >
                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-400/60 shrink-0" />
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </TimelineItem>
                    ))}
                </div>
            </div>
        </section>
    );
}
