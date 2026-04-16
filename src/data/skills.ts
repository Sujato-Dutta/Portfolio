export interface SkillCategory {
    category: string;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        category: "Programming",
        skills: [
            "Python",
            "SQL",
            "Java",
        ],
    },
    {
        category: "Core Math",
        skills: [
            "Probability & Statistics",
            "Linear Algebra",
            "Calculus",
            "Optimization",
            "Hypothesis Testing",
            "Statistical Modeling",
        ],
    },
    {
        category: "Frameworks",
        skills: [
            "PyTorch",
            "TensorFlow",
            "Hugging Face Transformers",
            "Keras",
            "Scikit-learn",
            "LangChain",
            "LangGraph",
            "Numpy",
            "Pandas",
        ],
    },
    {
        category: "MLOps & Deployment",
        skills: [
            "Docker",
            "Git",
            "MLflow",
            "AWS",
            "DVC",
            "Github Actions",
            "FastAPI",
            "Streamlit",
            "PostgreSQL",
            "Dagshub",
        ],
    },
    {
        category: "AI/ML",
        skills: [
            "Generative AI",
            "Agentic AI",
            "LLMs",
            "RAG",
            "Natural Language Processing",
            "Deep Learning",
            "Machine Learning",
        ],
    },
];

export const allSkills: string[] = skillCategories.flatMap((c) => c.skills);
