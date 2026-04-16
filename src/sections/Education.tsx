

import { education } from "@/data/education";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";

export default function Education() {
    return (
        <section id="education" className="py-20 md:py-28">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
                <SectionHeading
                    title="Education"
                    subtitle="Academic foundation in computer science and artificial intelligence."
                />

                <div className="relative">
                    {education.map((edu, index) => (
                        <TimelineItem
                            key={edu.id}
                            logo={edu.logo}
                            title={edu.degree}
                            subtitle={edu.institution}
                            duration={edu.duration}
                            index={index}
                        >
                            <p className="text-sm text-slate-400 leading-relaxed mt-2">
                                {edu.description}
                            </p>
                        </TimelineItem>
                    ))}
                </div>
            </div>
        </section>
    );
}
