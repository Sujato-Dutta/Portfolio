export interface Experience {
    id: string;
    company: string;
    logo: string;
    role: string;
    duration: string;
    achievements: string[];
}

export const experiences: Experience[] = [
    {
        id: "exp-4",
        company: "Massachusetts Institute of Technology (MIT)",
        logo: "/logos/company - 4.png",
        role: "AI Research Associate",
        duration: "Apr 2026 – Present",
        achievements: [
            "Part of the MIT Critical Data Research group.",
            "Working to predict bias in clinical journals."
        ],
    },
    {
        id: "exp-1",
        company: "National University of Singapore",
        logo: "/logos/company-1.png",
        role: "Machine Learning Intern",
        duration: "Jan 2026 – Mar 2026",
        achievements: [
            "Developed a 3-stage machine learning pipeline for NO2 forecasting, reducing relative RMSE from over 50% to 3.5% ( 93% error reduction).",
            "Reduced costs by 30% by replacing deep learning models with ensemble methods removing GPU needs."
        ],
    },
    {
        id: "exp-2",
        company: "University of Texas, Austin",
        logo: "/logos/company-2.png",
        role: "AI Research Intern",
        duration: "Jun 2025 – Present",
        achievements: [
            "Conducted a comparative evaluation of state-of-the-art time-series forecasting models, MotionCode & TimesNet across benchmark datasets.",
            "Identified architectural inefficiencies in MotionCode; proposed and implemented optimizations that yielded a 10% aggregate accuracy gain across 8+ benchmarks.",
        ],
    },
    {
        id: "exp-3",
        company: "Indian Statistical Institute, Kolkata",
        logo: "/logos/company-3.png",
        role: "Data Science Intern",
        duration: "Jun 2025 – Aug 2025",
        achievements: [
            "Implemented 2 state-of-the-art algorithms for imbalanced data streams and concept drift.",
            "Conducted an in-depth review of 120+ pages of research literature on active learning and handling non-stationary data and prepared a report summarizing the insights.",
        ],
    },
];
