export interface Education {
    id: string;
    institution: string;
    logo: string;
    degree: string;
    duration: string;
    description: string;
}

export const education: Education[] = [
    {
        id: "edu-1",
        institution: "Mahindra Ecole Centrale",
        logo: "/logos/uni-1.png",
        degree: "B.Tech in Artificial Intelligence",
        duration: "2023 – 2027",
        description:
            "Focused on machine learning, deep learning, natural language processing and computer vision alongwith modern generative ai coursework.",
    },
    {
        id: "edu-2",
        institution: "St. Xavier's Institution",
        logo: "/logos/uni-2.png",
        degree: "ISC (Class 12th)",
        duration: "2008 - 2023",
        description:
            "Strong foundation in algorithms, data structures and mathematics.",
    },
];
