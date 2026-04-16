export interface Project {
    id: string;
    title: string;
    summary: string;
    coverImage: string;
    skills: string[];
    fullDescription: string;
    features: string[];
    techStack: string[];
    challenges: string[];
    github: string;
    demo?: string;
}

export const projects: Project[] = [
    {
        id: "adaptive-self-corrective-rag",
        title: "Adaptive Self-Corrective Enterprise RAG",
        summary:
            "A production-ready Enterprise RAG system featuring automated hallucination detection, self-correction, and multi-model verification.",
        coverImage: "/projects/Adaptive_RAG_image_cover.png",
        skills: ["RAG", "LangGraph", "Vector Databases", "Python", "FastAPI", "Next.js", "Generative AI"],
        fullDescription:
            "Built an enterprise-grade Retrieval-Augmented Generation system. It retrieves documents using FAISS, generates grounded answers with Gemini, and uses an evaluation engine to detect hallucinations and Sycophancy. LangGraph orchestrates a self-correction loop when confidence scores fall below threshold.",
        features: [
            "Hybrid retrieval across persistent FAISS knowledge base and ephemeral Arxiv index",
            "LangGraph-powered stateful, adaptive self-correction loop upon confidence drop",
            "Three independent evaluator pipelines: hallucination, groundedness, and sycophancy",
            "Multi-model verification applying cross-validation using Groq and Gemini API",
            "End-to-end framework with an enterprise-grade FastAPI and Next.js Next-Gen chat interface"
        ],
        techStack: ["Python", "LangGraph", "LangChain", "FastAPI", "Next.js", "FAISS", "SentenceTransformers", "Gemini API", "Groq API"],
        challenges: [
            "Engineering a robust LangGraph state machine handling query reformulation and retries",
            "Measuring ungrounded claims seamlessly across the context and multiple models",
            "Managing ephemeral FAISS indexing from external systems like Arxiv"
        ],
        github: "https://github.com/Sujato-Dutta/Adaptive-Self-Corrective-Enterprise-RAG",
    },
    {
        id: "multi-agentic-ai-bi",
        title: "Multi-Agentic AI for Business Intelligence",
        summary:
            "An AI-powered BI platform where specialized agents collaborate to analyze data, generate insights, and deliver professional reports from a natural language query.",
        coverImage: "/projects/BI_image_cover.png",
        skills: ["Multi-Agent AI", "Data Analysis", "LLMs", "FastAPI", "Next.js", "Python"],
        fullDescription:
            "Engineered a business intelligence platform utilizing a multi-agent architecture with models like GPT-OSS-120B and Llama-3. All calculations are deterministic via Pandas while the LLM narrates pre-computed results. Incorporates hallucination guards and a cascading fallback router for resilient routing.",
        features: [
            "5 specialized AI agents with automatic intent detection",
            "Zero-math LLMs - all calculations are computed deterministically via Pandas/NumPy",
            "Smart fuzzy column mapping to handle arbitrary column names seamlessly",
            "Real-time event logging to Supabase with structured metadata and session tracking",
            "Cascading fallback routing router ensuring high resilience"
        ],
        techStack: ["Python", "FastAPI", "Next.js", "Pandas", "NumPy", "Matplotlib", "Groq API", "Supabase PostgreSQL"],
        challenges: [
            "Preventing LLM hallucinations during numerical data analysis using validation guards",
            "Orchestrating multiple specialized agents to cleanly handle varying schemas",
            "Implementing graceful cascading fallbacks for high availability"
        ],
        github: "https://github.com/Sujato-Dutta/Multi-Agentic-AI-for-Business-Intelligence",
        demo: "https://multi-agentic-ai-for-business-intelligence-hb85fwc0a.vercel.app/",
    },
    {
        id: "multimodal-ai-risk-detector",
        title: "Multimodal AI Social Media Risk Detector",
        summary:
            "A production-grade, multimodal AI content moderation system that analyzes social media posts for brand risk, offensive content, and misinformation using zero-shot classification.",
        coverImage: "/projects/Multimodal_image_cover.png",
        skills: ["Multimodal AI", "Zero-Shot Classification", "CLIP", "FastAPI", "Next.js", "Python"],
        fullDescription:
            "Developed a production-grade multimodal AI content moderation system. It jointly analyzes images and text using OpenAI's CLIP, computing cosine similarity against risk prompts and safe-reference prompts, producing explainable risk assessments across Brand Risk, Offensive Content, and Misinformation without requiring specific training datasets.",
        features: [
            "Uses OpenAI CLIP ViT-B/32 for zero-shot classification without needing labeled data",
            "Multi-signal scoring pipeline combining image similarity, text similarity, alignment, and keyword flags",
            "Explainable risk assessments detailing top matched prompts and flagged keywords",
            "Full-stack architecture with FastAPI backend and Next.js frontend"
        ],
        techStack: ["Python", "FastAPI", "Next.js", "OpenAI CLIP", "Pydantic", "Pillow", "Torchvision"],
        challenges: [
            "Developing multimodality by processing the image and caption collectively rather than individually",
            "Mapping raw cosine similarities to interpretable 0-100 scores accurately",
            "Engineering robust risk prompts combined with safe reference calibration"
        ],
        github: "https://github.com/Sujato-Dutta/Multimodal-AI-Social-Media-Risk-Detector",
    },
    {
        id: "customer-churn-prediction",
        title: "Customer Churn Prediction with Causal Feature Analysis",
        summary:
            "Industry-grade churn prediction system using traditional ML with emphasis on causal reasoning, explainability, and production deployment.",
        coverImage: "/projects/project-6.jpg",
        skills: ["Machine Learning", "Python", "MLOps", "Explainable AI", "Docker"],
        fullDescription:
            "Developed an industry-grade churn prediction system using traditional ML with emphasis on causal reasoning. Companies face significant revenue loss from customer churn. Acquiring a new customer costs 5-25x more than retaining an existing one. Predicting which customers are likely to churn enables proactive retention interventions.",
        features: [
            "End to end pipeline with data ingestion, preprocessing, feature engineering, eda, model training, hyperparameter-tuning, evaluation and deployment",
            "Containerization using Docker and backend using FastAPI",
            "Monitoring using mlflow and explainability using SHAP",
            "CI-CD pipeline using Github Actions",
        ],
        techStack: ["Python", "SHAP", "NumPy", "Pandas", "Scikit-Learn", "Matplotlib", "FastAPI", "Docker", "MLflow", "Github Actions"],
        challenges: [
            "Maintaining the system in production",
            "Automating the entire CI-CD pipeline using Github Actions",
            "Executing the system end to end using modular coding and ensuring all components in the pipeline work error-free",
        ],
        github: "https://github.com/Sujato-Dutta/Customer-Churn-Prediction-with-Causal-Feature-Analysis",
    },
    {
        id: "llm-bias-detection",
        title: "LLM Output Bias Detection",
        summary:
            "Production-grade system for detecting bias in large language model outputs using fine-tuned transformers and classical ML baselines.",
        coverImage: "/projects/project-5.jpg",
        skills: ["Transformers", "Fine-Tuning", "MLOps", "NLP", "Python", "Scikit-learn"],
        fullDescription:
            "Built an end-to-end bias detection pipeline that analyzes LLM-generated text for demographic and ideological biases. Compared LoRA-finetuned MiniLM models against TF-IDF + Logistic Regression baselines with comprehensive evaluation metrics.",
        features: [
            "LoRA fine-tuning for efficient model adaptation",
            "Interactive Streamlit demo for real-time bias analysis",
            "Modular inference pipeline for production use",
        ],
        techStack: [
            "Python",
            "PyTorch",
            "Transformers",
            "Scikit-learn",
            "Streamlit",
        ],
        challenges: [
            "Preventing overfitting on bias datasets",
            "Balancing model size with inference speed for deployment",
        ],
        github: "https://github.com/Sujato-Dutta/LLM-Output-Bias-Detection",
        demo: "https://appapppy-ztzucs5yg5c9wpc8xfx885.streamlit.app/",
    },
    {
        id: "research-ai-assistant",
        title: "Multi-Agentic RAG based AI Research Scientist",
        summary:
            "A production-grade multi-agent AI system for research assistance.",
        coverImage: "/projects/project-4.jpg",
        skills: ["Agentic AI", "RAG", "Python", "Generative AI",],
        fullDescription:
            "Designed and built a multi-agentic AI assistant to dynamically retrieve research papers from arxiv based on user query and provide a comprehensive analysis.",
        features: [
            "Multi-agent architecture with orchestration",
            "RAG based retrieval of research papers from arxiv",
            "7 specialized agents working in coordination",
            "Ephemeral vector database and deployed streamlit app for usage",
            "Logging of all conversations and their details in Supabase for live monitoring",
        ],
        techStack: [
            "Python",
            "Streamlit",
            "Groq API",
        ],
        challenges: [
            "Handling API usage and limitations",
            "Orchestrating the agents to work in coordination",
            "Minimizing hallucination using RAG",
        ],
        github: "https://github.com/Sujato-Dutta/Multi-Agentic-RAG-AI-Research-Scientist",
        demo: "https://appapppy-bkmfkdheax8sdsmxeebakx.streamlit.app/",
    },
    {
        id: "mental-health-assistant",
        title: "Multilingual Agentic AI Mental Health Support Assistant",
        summary:
            "A multilingual agentic AI system for mental health support with robust safety checks and empathetic response generation.",
        coverImage: "/projects/project-3.jpg",
        skills: ["Agentic AI", "LLMs", "Python",],
        fullDescription:
            "Implemented a production-ready mental health support system with specialized agents: Input Understanding, Safety Assessment, Support Strategy, and Response Generator.",
        features: [
            "4 specialized agents with distinct responsibilities",
            "Dual-layer safety system (rule-based + LLM-based)",
            "Multilingual support with cultural sensitivity",
        ],
        techStack: ["Python", "Streamlit", "Groq API"],
        challenges: [
            "Ensuring safety without being overly restrictive",
            "Generating empathetic yet professional responses",
            "Handling edge cases in crisis detection",
        ],
        github: "https://github.com/Sujato-Dutta/Multilingual-Agentic-AI-Mental-Health-Support-Assistant",
    },
    {
        id: "dyamic-pricing",
        title: "Dynamic Price Estimator",
        summary:
            "Predictive analytics system for product pricing using production ML pipelines.",
        coverImage: "/projects/project-1.jpg",
        skills: [
            "Python",
            "Scikit-learn",
            "FastAPI",
            "CI-CD Pipelines",
        ],
        fullDescription:
            "Built a dynamic price prediction system that identifies optimal price for products based on various factors.",
        features: [
            "Custom synthetic data generation with realistic patterns",
            "FastAPI backend deployed on Railway for inference",
            "End to end system with ETL pipeline, data ingestion, feature engineering, model training with hyperparameter tuning and evaluation",
            "CI/CD pipeline with GitHub Actions",
        ],
        techStack: [
            "Python",
            "Scikit-learn",
            "XGBoost",
            "FastAPI",
            "Supabase PostgreSQL","GitHub Actions",
        ],
        challenges: [
            "Generating representative synthetic training data",
            "Handling the entire pipeline from data ingestion to model deployment",
            "Optimizing model using hyperparameter tuning and automating the entire process using CI-CD pipeline via Github Actions",
        ],
        github: "https://github.com/Sujato-Dutta/Dynamic-Price-Estimator",
    },
];
