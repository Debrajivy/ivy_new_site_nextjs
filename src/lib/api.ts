import { Figma } from "lucide-react";

// Mock API functions to simulate data fetching
export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  students: number;
  metaData?: any;
  duration: string;
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  slug: string;
  longDescription?: string;
  outcomes?: string[];
  curriculum?: any;
  projects?: Project[];
  prerequisites?: string[];
  instructors?: Instructor[];
  aiFeatures?: AIFeature[];
  faq?: FAQ[];

}

export interface Module {
  id: string;
  title: string;
  duration: string;
  topics: Topic[];
}

export interface Topic {
  id: string;
  title: string;
  duration: string;
  isAdvanced?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  skills: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Intermediate to Advanced' | 'Beginner to Intermediate' | 'Beginner to Advanced';
  isPractice?: boolean;
  videoId?: string;

}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  isFounder?: boolean;
  isDirector?: boolean;
}

export interface AIFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Alumni {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  testimonial: string;
  courseId: string;
  videoUrl?: string;
  linkedin?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
  course: string;
  courseId: string;
  videoUrl?: string;
}

const courses: Course[] = [
  {
    id: '1',
    title: "Generative AI Course",
    description: "Learn advanced Gen AI skills, build super-functional apps, get certified by IVY, and become the perfect job candidate in 18 weeks.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Data Science",
    students: 5876,
    metaData: {
      title: "Generative AI Course with IIT Guwahati: #1 GenAI Course ",
      description: "Join IIT Guwahati Certified Generative AI course and become job-ready in 18 weeks. Build 15+ GenAI apps on cloud. Get IBM & NASSCOM certified",
      bio: "Learn advanced Gen AI skills, build super-functional apps, get certified by IVY, and become the perfect job candidate in 18 weeks."

    },
    duration: "225 Hours",
    rating: 4.9,
    reviewCount: 5567,
    isFeatured: true,
    slug: "iit-generative-ai-course",
    longDescription: "This Gen AI course teaches you programming fundamentals, introduces you to generative AI and machine learning, and helps you build advanced Gen AI apps with solid practical applications. For instance, you will build a chatbot that can converse like humans, develop an application that automates social media posting, and build an AI assistant that combines text, image, and voice generation.\n\nThis will not only help you gain practical experience but also build a solid portfolio that showcases your skills and expertise to employers. This way, the 18-week course will help you become a Gen AI expert and increase your chances of getting high-paying jobs. So, the opportunities are endless."
    , outcomes: [
      "Understand the foundations of Gen AI, ML, and LLMs through hands-on coding and real-world examples",
      "Build cutting-edge Gen AI apps using LangChain, ChatGPT, DALL·E, Whisper, and other advanced tools",
      "Design intelligent systems that generate text, images, audio, and automate business workflows",
      "Deploy end-to-end AI applications using Transformer models, RAG, and cloud platforms like Azure",
      "Work on 5+ capstone projects and build a strong portfolio that showcases real-world Gen AI skills",
      "Earn prestigious IIT certifications and receive 1:1 mentorship and career guidance"
    ],
    prerequisites: [
      "Familiarity with basic digital tools and online platforms.",
      "Understanding of high-school level algebra and statistics.",
      "No prior programming experience is needed.",
      "Bachelor’s degree or diploma in a STEM or quantitative field.",
      "Logical thinking and willingness to learn through projects."
    ],
    curriculum: [
      {
        id: "m1",
        title: "GenAI App Builder - Foundation Certificate Program",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "Programming Fundamentals – Python, Data Types, Loops, Functions", duration: "3 hrs" },
          { id: "t2", title: "Important Libraries – Pandas, NumPy, Virtual Environments", duration: "2 hrs" },
          { id: "t3", title: "Data Cleaning and Preprocessing – Hands-on using Pandas", duration: "2 hrs" },
          { id: "t4", title: "Exploratory Data Analysis and Statistical Inference", duration: "2 hrs" },
          { id: "t5", title: "Introduction to Generative AI – Concepts, Types, OpenAI APIs", duration: "2 hrs" },
          { id: "t6", title: "Working with OpenAI API – Text Generation with Python", duration: "2.5 hrs" },
          { id: "t7", title: "Hands-on Projects – Text Generation using Python and OpenAI", duration: "2.5 hrs" },
          { id: "t8", title: "Capstone Project – Build AI App for Text Generation", duration: "3 hrs" }
        ]
      },
      {
        id: "m2",
        title: "Advanced GenAI and Machine Learning",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "Machine Learning Fundamentals – Linear, Decision Trees, k-NN", duration: "2.5 hrs" },
          { id: "t2", title: "Model Building – Classification and Regression Models", duration: "2 hrs" },
          { id: "t3", title: "Deep Learning Concepts – MLP, CNN, RNN, LSTM, GRU", duration: "3 hrs" },
          { id: "t4", title: "Build ChatPal AI – Design Workflow, Prompting, LLMs", duration: "3.5 hrs" },
          { id: "t5", title: "Hands-on – Build and Fine-tune a Chatbot", duration: "2.5 hrs" },
          { id: "t6", title: "Deploy Chatbot with OpenAI API Integration", duration: "2 hrs" },
          { id: "t7", title: "Capstone Project – Build and Deploy ChatPal AI", duration: "3.5 hrs" }
        ]
      },
      {
        id: "m3",
        title: "Advanced AI Integration and Multimodal Applications",
        duration: "30 hrs",
        topics: [
          { id: "t1", title: "SocioGenie AI – Social Media Automation with LangChain", duration: "3 hrs" },
          { id: "t2", title: "Content Generation – Text and Image Automation", duration: "2.5 hrs" },
          { id: "t3", title: "ResumeGen AI – Resume Creation using OpenAI API", duration: "2.5 hrs" },
          { id: "t4", title: "Styling & Formatting – PDF generation with Python", duration: "2 hrs" },
          { id: "t5", title: "EcommImageCraft AI – Image Generation using DALL-E", duration: "3 hrs" },
          { id: "t6", title: "Automated Uploads and Optimization – Cloud and Python Scripts", duration: "3 hrs" },
          { id: "t7", title: "VoiceMate AI – Speech Recognition, TTS, Whisper API", duration: "3.5 hrs" },
          { id: "t8", title: "Newsify AI – Aggregation, Summarization, Deployment", duration: "3.5 hrs" },
          { id: "t9", title: "Capstone Project – Build and Deploy a Multimodal App", duration: "4 hrs" }
        ]
      },
      {
        id: "m4",
        title: "Mastering Multimodal Fusion and GenAI Frameworks",
        duration: "14 hrs",
        topics: [
          { id: "t1", title: "Fusion Techniques – Early, Late, Hybrid with ChatGPT, DALL-E, Whisper", duration: "2 hrs" },
          { id: "t2", title: "Attention Mechanisms & Vision-Language Transformers", duration: "2 hrs" },
          { id: "t3", title: "Progressive GANs, StyleGAN, Meta-learning", duration: "2 hrs" },
          { id: "t4", title: "Model Compression, Knowledge Distillation", duration: "2 hrs" },
          { id: "t5", title: "Hands-on – Creative Collaboration with DALL-E", duration: "2 hrs" },
          { id: "t6", title: "Capstone Project – Unified GenAI Assistant App", duration: "4 hrs" }
        ]
      }
    ]


    ,



    projects: [
      {
        id: "p1",
        title: "Employee Attrition Prediction",
        description: "Use machine learning techniques to predict which employees are likely to leave the organization",
        image: "https://img.youtube.com/vi/NmW1EVedEts/0.jpg",
        skills: ["Classification Models", "Data Preprocessing", "Feature Importance", "Model Evaluation"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "NmW1EVedEts"
      },
      {
        id: "p2",
        title: "Fraud Call Detection using Audio Data",
        description: "Use audio data and neural networks to detect fraudulent calls by analyzing voice patterns and embeddings with deep learning techniques",
        image: "https://img.youtube.com/vi/CeDUuCYfxrs/0.jpg",
        skills: ["Audio Preprocessing", "Feature Extraction with Librosa", "Neural Network Modeling", "Model Evaluation using TensorFlow"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "CeDUuCYfxrs"
      },
      {
        id: "p3",
        title: "Sentiment Analysis with ChatGPT and Python",
        description: "Learn the fundamentals of ChatGPT, sentiment analysis, and how to apply NLP techniques on tweet data using Python for real-world insights",
        image: "https://img.youtube.com/vi/uHSAvl03yf4/0.jpg",
        skills: ["Sentiment Analysis Model", "Bag of Words", "WordCloud Visualization", "Comparison with AI Tools like ChatGPT and Alexa"],
        difficulty: "Intermediate to Advanced",
        isPractice: true,
        videoId: "uHSAvl03yf4"
      },
      {
        id: "p4",
        title: "How to use GenAI in Google Sheet 2024 | AI in Google Sheet (Quick Method) | Beginner to Advance",
        description: "Learn how to set up and use GenAI in Google Sheets for data analysis and automation. The video covers easy setup, practical examples, and advanced features for better decision-making, with troubleshooting tips.",
        image: "https://img.youtube.com/vi/EC1jT0pWxM4/0.jpg",
        skills: ["GenAI", "Google Sheets", "Data Analysis", " AI Integration", "Templates"],
        difficulty: "Beginner to Advanced",
        videoId: "EC1jT0pWxM4"
      },
      {
        id: "p5",
        title: "Build your First GenAI Powered Chatbot with Python | Generative AI | IvyProSchool",
        description: "Learn to build your first GenAI-powered chatbot using Python and Generative AI. This video covers chatbot creation, Python implementation, and real-world applications of AI in conversational interfaces.",
        image: "https://img.youtube.com/vi/v-jQx1acyLQ/0.jpg",
        skills: ["GenAI", "Python", "Chatbot", "Generative AI", "AI Development"],
        difficulty: "Beginner to Advanced",
        videoId: "v-jQx1acyLQ"
      },
      // {
      //   id: "p6",
      //   title: "Employee Promotion Prediction",
      //   description: " Build a machine learning model to predict employee promotions based on performance and profile attributes",
      //   image: "https://img.youtube.com/vi/vRsoANUaAhI/0.jpg",
      //   skills: ["Classification Models", "Feature Engineering", "Model Evaluation using Python"],
      //   difficulty: "Advanced",
      //   videoId: "vRsoANUaAhI"
      // }
    ],
    instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University.",
        isDirector: true

      }
    ],
    aiFeatures: [
      {
        id: "ai1",
        title: "AI Learning Assistant",
        description: "Get personalized help and explanations for complex topics 24/7",
        icon: "bot"
      },
      {
        id: "ai2",
        title: "Intelligent Progress Tracking",
        description: "Our AI analyzes your learning pattern and suggests optimal study schedules",
        icon: "activity"
      },
      {
        id: "ai3",
        title: "Automated Code Review",
        description: "Get instant feedback on your coding assignments with suggestions for improvement",
        icon: "code"
      }
    ],
    faq: [
      {
        question: "Do I need prior coding experience?",
        answer: "No, this bootcamp is designed to take you from zero to job-ready. We start with the basics of Python programming and gradually build up to advanced concepts."
      },
      {
        question: "What is the time commitment?",
        answer: "The bootcamp requires about 20-25 hours per week for 16 weeks. This includes live sessions, assignments, projects, and self-study."
      },
      {
        question: "What kind of job support do you provide?",
        answer: "We provide resume reviews, interview preparation, portfolio building, and connections to our hiring partners. Our career services team works with you individually until you secure a job."
      },
      {
        question: "Can I attend part-time while working a full-time job?",
        answer: "Yes, many of our students work full-time. We provide evening and weekend live sessions, and all sessions are recorded for those who cannot attend live."
      }
    ]
  },
  {
    id: '2',
    title: "Data Science with Machine Learning & AI Certification",
    description: "Learn high-value data science skills, work on 50+ projects and case studies, get certified by IVY, and become job-ready in 45 weeks.",
    image: "https://images.unsplash.com/photo-1677442135968-6bb674d4f8a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    category: "Generative AI",
    students: 1876,
    metaData: {
      title: "Data Science Course with IIT Guwahati: GenAI, MLOps, Python",
      description: "Become IIT Certified in 45 weeks. Join IIT Guwahati's Data Science course & learn Python, GenAI, MLOps on Cloud, work on 50+ projects, with placement support.",
      bio: "Learn high-value data science skills, work on 50+ projects and case studies, get certified by IVY, and become job-ready in 45 weeks."

    },
    duration: "10 weeks",
    rating: 4.8,
    reviewCount: 432,
    isFeatured: true,
    slug: "iit-data-science-course",
    longDescription: "This data science certification program is created with E&ICT Academy IIT Guwahati. You will learn directly from IIT Guwahati professors, attend a special 3-day program at the IIT campus, and have networking opportunities with IIT alumni.\n\n The course will teach how to handle data in advanced Excel, analyze data using SQL and advanced SQL, visualize data using Power BI, make data-driven decisions using statistics, wrangle and analyze data with Python, etc. The course also covers advanced topics like machine learning, text mining, deep learning, GenAI, etc., to help you remain updated with the current technology.\n\n But, theoretical knowledge alone is not enough. That’s why these 45 weeks of this data science course in India help you gain practical experience by working on 10+ projects, 40+ case studies, and 50+ assignments. This way, you master the advanced data science concepts and become an ideal candidate for high-paying jobs.",
    outcomes: [
      "Learn ML ops, Power Query, SQL, Python, Excel from prestigious faculty",
      "Build and fine-tune large language models (LLMs)",
      "Create text-to-image generation systems",
      "Develop AI applications using APIs from OpenAI, Anthropic, etc.",
      "Deploy generative AI models to production",
      "Understand the ethical considerations of generative AI"
    ],
    prerequisites: [
      "Intermediate Python programming skills",
      "Basic understanding of machine learning concepts",
      "Experience with neural networks (preferred but not required)",
      "Linear algebra and calculus fundamentals"
    ],
    curriculum: [

      {
        id: "m1",
        title: "Data Wizardry with Excel (From Excel Basic to AI Insights)",
        duration: "28 hrs",
        topics: [
          { id: "t1", title: "Finding Data Fast: Mastering Lookup & Information Functions – VLOOKUP, HLOOKUP, INDEX+MATCH, Advanced Filter, IFERROR", duration: "2 hrs" },
          { id: "t2", title: "Data Summarization & AI Insights: Dive Deep with Pivot Tables – Calculations, Grouping, Slicers, Pivot Charts, AI-enabled recommendations", duration: "3 hrs" },
          { id: "t3", title: "Visual Data Highlighting: Conditional Formatting Techniques – Icons, Data Bars, Top/Bottom Rules, Formulas", duration: "1.5 hrs" },
          { id: "t4", title: "Telling Stories with Graphs: Advanced Charting & Infographics – Gauge, Gantt, Infographic Charts", duration: "2 hrs" },
          { id: "t5", title: "Data Storytelling with Dashboards – Best Practices, Story Creation, Excel Dashboards", duration: "2.5 hrs" },
          { id: "t6", title: "Automating Repetitive Tasks: Introduction to Macros – Developer Tab, Macro Recorder, Data Source Connection", duration: "2 hrs" },
          { id: "t7", title: "Querying Like a Pro: Extracting Data with Precision – Power Query Setup, Sources, Linking, Refresh", duration: "2 hrs" },
          { id: "t8", title: "Organizing Data: Filtering, Cleaning & Transforming – Merge, Append, Unpivot, Conditional Columns", duration: "2.5 hrs" },
          { id: "t9", title: "Manipulating Power Pivot Data – Table Relationships, Calculated Columns, Field List Pane", duration: "2 hrs" },
          { id: "t10", title: "Extract Data from Tables Using Functions – Filter Functions, Table Lookups", duration: "1.5 hrs" },
          { id: "t11", title: "Diving into DAX – Key Functions, Implicit vs Explicit Measures", duration: "2 hrs" },
          { id: "t12", title: "Capstone Project – Build a Dashboard with PowerQuery, PowerPivot, DAX", duration: "3 hrs" }
        ]
      },
      {
        id: "m2",
        title: "Data Analysis Using SQL & Advanced SQL",
        duration: "30 hrs",
        topics: [
          { id: "t1", title: "Introduction to Cloud Databases – Setup, Excel Integration, Import Options", duration: "2 hrs" },
          { id: "t2", title: "Writing Basic SQL Queries – SELECT, WHERE, Filtering, Sorting", duration: "2 hrs" },
          { id: "t3", title: "Cleaning and Modifying Data Using SQL – Update, Validation, Error Handling", duration: "2.5 hrs" },
          { id: "t4", title: "Aggregating and Analyzing Data – SQL Functions, Pivot Tables, Charts", duration: "2 hrs" },
          { id: "t5", title: "Working with Multiple Data Tables – JOINs, CASE Statements, Debugging", duration: "3 hrs" },
          { id: "t6", title: "Pattern Matching and Full Text Search – LIKE, REGEX, Wildcards", duration: "2 hrs" },
          { id: "t7", title: "Window Functions – RANK, DENSE_RANK, LEAD, LAG, NTILE", duration: "2 hrs" },
          { id: "t8", title: "Advanced Grouping and Pivot – ROLLUP, CUBE, PIVOT, UNPIVOT", duration: "2 hrs" },
          { id: "t9", title: "Data Combination and Comparison – UNION, INTERSECT, EXCEPT", duration: "2 hrs" },
          { id: "t10", title: "DDL and DML Operations – CREATE, INSERT, UPDATE, DELETE", duration: "2.5 hrs" },
          { id: "t11", title: "Subqueries and CTEs – Correlated, EXISTS, Derived Tables", duration: "2.5 hrs" },
          { id: "t12", title: "Functions & Procedures – UDFs, Stored Procedures in SQL", duration: "2 hrs" },
          { id: "t13", title: "Capstone Project – Real-life datasets from eCommerce, BFSI, Retail", duration: "3.5 hrs" }
        ]
      },
      {
        id: "m3",
        title: "Analytical Problem Solving – Interview Preparation Workshop",
        duration: "8 hrs",
        topics: [
          { id: "t1", title: "Problem Solving Framework – Hypothesis-Driven vs Exploratory", duration: "2 hrs" },
          { id: "t2", title: "Case Study Solving – Market Sizing, Guesstimates", duration: "2 hrs" },
          { id: "t3", title: "Interview Case Types – Analytics, Logical Puzzles, Framework Questions", duration: "2 hrs" },
          { id: "t4", title: "Mock Practice and Feedback Session", duration: "2 hrs" }
        ]
      },
      {
        id: "m4",
        title: "Advanced Visualization Using Power BI",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "Power BI Interface and Data Connection – Power Query Basics", duration: "3 hrs" },
          { id: "t2", title: "Data Shaping – Text, Numbers, Date/Time, Conditional Columns", duration: "3 hrs" },
          { id: "t3", title: "Data Modeling – Normalization, Relationships, Filter Flow", duration: "3.5 hrs" },
          { id: "t4", title: "DAX for Analysis – Syntax, Measures, Time Intelligence", duration: "4 hrs" },
          { id: "t5", title: "Report Design – Charts, Drillthroughs, Bookmarks, Conditional Formatting", duration: "4 hrs" },
          { id: "t6", title: "Security and Deployment – RLS, Data Refresh, Paginated Reports", duration: "3 hrs" },
          { id: "t7", title: "Case Studies – Banking, AirBnB Dashboarding", duration: "3.5 hrs" }
        ]
      },
      {
        id: "m5",
        title: "Data Driven Decision Making Using Statistics",
        duration: "18 hrs",
        topics: [
          { id: "t1", title: "Statistical Foundations – Distributions, CLT, Hypothesis Testing", duration: "3 hrs" },
          { id: "t2", title: "Descriptive Statistics – Central Tendency, Dispersion, EDA", duration: "3 hrs" },
          { id: "t3", title: "Python for Stats – NumPy, SciPy, Feature Engineering, Scaling", duration: "4 hrs" },
          { id: "t4", title: "Regression Analysis – Predictive Modelling, Optimization", duration: "3.5 hrs" },
          { id: "t5", title: "Project – Iron Manufacturing Optimization Using Statistics", duration: "4.5 hrs" }
        ]
      },
      {
        id: "m6",
        title: "Python Essentials – Data Exploration with Python",
        duration: "22 hrs",
        topics: [
          { id: "t1", title: "Python Basics – Variables, Data Types, Operators", duration: "2 hrs" },
          { id: "t2", title: "Advanced Structures – Lists, Dictionaries, Tuples", duration: "2 hrs" },
          { id: "t3", title: "Program Flow – Conditionals, Loops, Functions", duration: "2 hrs" },
          { id: "t4", title: "NumPy – Arrays, Indexing, Arithmetic", duration: "2 hrs" },
          { id: "t5", title: "Pandas Basics – Series, DataFrames, Reading Files", duration: "2.5 hrs" },
          { id: "t6", title: "Data Wrangling – Handling NA, GroupBy, Filtering", duration: "2 hrs" },
          { id: "t7", title: "Merging, Pivoting, Normalization, Outlier Detection", duration: "2 hrs" },
          { id: "t8", title: "Bivariate & Multivariate Analysis – Visuals, Stats", duration: "2.5 hrs" },
          { id: "t9", title: "Capstone Project – Real Estate Data Analysis", duration: "3 hrs" }
        ]
      },
      {
        id: "m7",
        title: "Machine Learning, Deep Learning & GenAI",
        duration: "32 hrs",
        topics: [
          { id: "t1", title: "Supervised Learning – Linear, Logistic Regression, Decision Trees", duration: "3.5 hrs" },
          { id: "t2", title: "Model Evaluation – Accuracy, Precision, Recall, ROC", duration: "2 hrs" },
          { id: "t3", title: "Ensemble Methods – Bagging, Boosting, Random Forest, XGBoost", duration: "4 hrs" },
          { id: "t4", title: "Clustering and Dimensionality Reduction – KMeans, PCA, DBSCAN", duration: "3.5 hrs" },
          { id: "t5", title: "Text Analytics – Preprocessing, Sentiment Analysis, Word Clouds", duration: "3 hrs" },
          { id: "t6", title: "Text Classification – Naive Bayes, Spam Detection, Transformers", duration: "3 hrs" },
          { id: "t7", title: "Deep Learning – Neural Nets, CNN, RNN, LSTM", duration: "4.5 hrs" },
          { id: "t8", title: "Model Deployment – Flask API, Heroku, MLOps Concepts", duration: "4.5 hrs" },
          { id: "t9", title: "Capstone Project – Apply ML, DL, GenAI on Real Data", duration: "4 hrs" }
        ]
      }





    ],


    projects: [
      {
        id: "p1",
        title: "Exploratory Data Analysis (EDA) with Python | Data Science Tutorial",
        description: "Explore the process of Exploratory Data Analysis (EDA) with Python, focusing on data cleaning, visualization, and analysis to uncover valuable insights. This case study highlights the critical role of EDA in making informed decisions and building more effective predictive models.",
        image: "https://img.youtube.com/vi/rytsuy1FUlE/0.jpg",
        skills: ["Python", "EDA", "Data Cleaning", " Data Visualization", "Data Analysis", "Pandas", "Seaborn", "Matplotlib"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "rytsuy1FUlE"
      },
      {
        id: "p2",
        title: "Building an AI Insurance Planner Bot without Coding",
        description: "Learn how to create an AI-powered Insurance Planner Bot using Google Sheets and OpenAI’s GPT-4, all without any coding experience. This guide walks you through the process of integrating GPT-4 into Google Sheets to generate personalized insurance recommendations, offering a beginner-friendly approach to building a functional AI application.",
        image: "https://img.youtube.com/vi/MaG7XIyyNxQ/0.jpg",
        skills: ["Google Sheets", "OpenAI GPT-4", "AI Applications", "APIs", "AppScript", "No-Code AI"],
        difficulty: "Beginner",
        isPractice: true,
        videoId: "MaG7XIyyNxQ"
      },
      {
        id: "p3",
        title: "How to Use ChatGPT as a Data Scientist",
        description: "Discover how data scientists can use ChatGPT to enhance their workflow, from code explanations and SQL optimizations to sentiment analysis and data cleaning. Learn to leverage ChatGPT 4.0 and its plugins for tasks like script conversion and creating data dictionaries.",
        image: "https://img.youtube.com/vi/yRDyR7Bq2nA/0.jpg",
        skills: ["ChatGPT", "AI Analytics", "Data Cleaning", "Sentiment Analysis", "Generative AI", "Prompt Engineering."],
        difficulty: "Intermediate",
        isPractice: true,
        videoId: "yRDyR7Bq2nA"
      },
      {
        id: "p4",
        title: "Superstore Sales Analysis Using Excel ",
        description: "Explore Superstore sales data and generate key business insights using Excel. Analyze product lines, profitable cities, gender-based sales performance, month-on-month growth, and create a dashboard to track critical metrics.",
        image: "https://img.youtube.com/vi/KGrApiKUR4M/0.jpg",
        skills: ["Excel", "Data Analysis", "Business Analytics", "Sales Analytics", "Dashboard", "Business Insights"],
        difficulty: "Beginner to Intermediate",
        videoId: "KGrApiKUR4M"
      },
      {
        id: "p5",
        title: "Predicting Car Sales using Linear Regression in R",
        description: "Analyze Superstore sales data in Excel to uncover insights on product lines, profitable cities, gender-based performance, month-on-month growth, and create a dashboard to track key metrics.",
        image: "https://img.youtube.com/vi/8nNgJJH7pMk/0.jpg",
        skills: ["R", "Linear Regression", "Car Sales Prediction", "Data Analysis", "Model Evaluation", "Variable Significance"],
        difficulty: "Intermediate",
        videoId: "8nNgJJH7pMk"
      },
      {
        id: "p6",
        title: "Crime Intelligence Dashboard in Power BI",
        description: "Create an interactive, data-driven crime intelligence dashboard using real-world data from the Manchester Police Department. Learn to transform data, set up KPIs, design visualizations, and implement geospatial mapping to analyze crime trends and improve law enforcement efficiency.",
        image: "https://img.youtube.com/vi/sVXjAIa7YBs/0.jpg",
        skills: ["Power BI", "DAX", "KPI Cards", "Data Transformation", "Data Visualization", "Crime Analysis"],
        difficulty: "Intermediate",
        videoId: "sVXjAIa7YBs"
      }
    ],
    instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
        ,
        isDirector: true

      }
    ],
    aiFeatures: [
      {
        id: "ai1",
        title: "AI Project Generator",
        description: "Generate unique project ideas tailored to your interests and skill level",
        icon: "sparkles"
      },
      {
        id: "ai2",
        title: "Code Completion & Assistance",
        description: "Get intelligent code suggestions as you build your AI applications",
        icon: "code"
      }
    ]
  },
  {
    id: '3',
    title: " Data Engineering Course",
    description: "Master data engineering and big data analytics with tools like Hadoop, Spark, Kafka, Hive, etc., to become a certified data engineer and get a guaranteed placement.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Data Engineering",
    students: 1549,
    metaData: {
      title: "Cloud Data Engineering Course with IIT Guwahati",
      description: "Join IIT Guwahati certified Data Engineering course. Learn Cloud, Azure, Python, SQL, Spark, & work on 30+ projects with lifetime placement support.",
      bio: "Get coached by IIT professors, learn industry-relevant data engineering skills, complete 30+ real-life projects, and become job-ready in just 45 weeks."

    },
    duration: "12 weeks",
    rating: 4.7,
    reviewCount: 345,
    isFeatured: true,
    slug: "data-engineering-course",
    longDescription: "This course helps you master data engineering from scratch. First, you learn the fundamentals like database management with MySQL, data structures, data manipulation, Python libraries like Pandas and NumPy, etc. \n\nThen, you learn advanced skills like big data fundamentals, Hadoop and ecosystem, MongoDB, Kafka core concepts, real-time data processing, cloud essentials, and big data in Azure.\n\nThe curriculum also lets you work on 10+ industry projects, 30+ case studies, and 50+ assignments so that you can implement your theoretical knowledge. This way, you solidify your skills, get practical experience, and gain the confidence to solve real-world business problems.\n\nApart from the technical knowledge, the course also helps you learn job-oriented skills like writing your resume, excelling in interviews, optimizing your LinkedIn, building your network, etc. The course also helps you prepare for AWS and GCP certifications.",
    outcomes: [
      "Build scalable data pipelines using tools like Hadoop, Spark, Kafka, and Hive",
      "Manage structured and unstructured data with MySQL, MongoDB, and real-time processing systems",
      "Implement big data solutions on the cloud using Azure, AWS, and GCP platforms",
      "Solve complex business problems with 30+ case studies and 10+ industry-aligned capstone projects",
      "Prepare for top certifications like AWS and GCP with guided mentoring and hands-on labs",
      "Get lifetime access to recordings and 1:1 expert mentorship to support your learning and job prep"
    ],
    instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
        , isDirector: true
      }
    ],

    curriculum: [
      {
        id: "m1",
        title: "SQL Queries & Relational Database Management",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "SQL Basics: Introduction to Database Management System (DBMS), Introduction to Google BigQuery and MySQL, CRUD Operations", duration: "3 hrs" },
          { id: "t2", title: "Data Manipulation and Transformation: Logical, Numerical, and Mathematical Operators, Conditional Statements", duration: "2.5 hrs" },
          { id: "t3", title: "Data Cleaning: Type Casting, Date/Time Formatting, Text Formatting", duration: "2 hrs" },
          { id: "t4", title: "Pattern Matching: LIKE Operator, REGEXP Functions", duration: "1.5 hrs" },
          { id: "t5", title: "Joins and Relational Databases: Keys, Join Types, Indexing, Normalization", duration: "4 hrs" },
          { id: "t6", title: "Aggregation and Grouping: Aggregate Functions, GROUP BY, CTEs, Variables", duration: "3.5 hrs" },
          { id: "t7", title: "Window Functions: RANK, DENSE_RANK, ROW_NUMBER, LEAD/LAG", duration: "2.5 hrs" },
          { id: "t8", title: "Data Reusability: Views, Stored Procedures, UDFs", duration: "2 hrs" },
          { id: "t9", title: "Subqueries: Simple, EXISTS/NOT EXISTS, Correlated", duration: "1.5 hrs" },
          { id: "t10", title: "Cloud Services: BigQuery Querying, Sharing Results, Permissions, Scheduling", duration: "1.5 hrs" },
          { id: "t11", title: "Online SQL Platforms: MySQL Workbench, Online IDEs, Cloud Storage Integration", duration: "0.5 hrs" }
        ]
      }
      ,

      {
        "id": "m2",
        "title": "Cloud Essentials, Fundamentals & Bigdata in Azure",
        "duration": "8 hrs",
        "topics": [
          { "id": "t1", "title": "Blob / Queue / Table Storage", "duration": "0.5 hrs" },
          { "id": "t2", "title": "Azure SQL Database", "duration": "0.5 hrs" },
          { "id": "t3", "title": "Data Lake (Gen1 & Gen2)", "duration": "0.5 hrs" },
          { "id": "t4", "title": "Synapse Analytics", "duration": "0.5 hrs" },
          { "id": "t5", "title": "Azure Cosmos DB", "duration": "0.5 hrs" },
          { "id": "t6", "title": "Azure Data Factory (Data Pipeline)", "duration": "0.5 hrs" },
          { "id": "t7", "title": "Azure Event Hubs", "duration": "0.4 hrs" },
          { "id": "t8", "title": "Databricks (Data Processing)", "duration": "0.5 hrs" },
          { "id": "t9", "title": "Scaling and Monitoring", "duration": "0.4 hrs" },
          { "id": "t10", "title": "Azure Service Models (IaaS, PaaS, SaaS)", "duration": "0.4 hrs" },
          { "id": "t11", "title": "Managed Identity & Active Directory", "duration": "0.4 hrs" },
          { "id": "t12", "title": "Network Security Group (Public, Private, Hybrid)", "duration": "0.4 hrs" },
          { "id": "t13", "title": "Azure Key Vault", "duration": "0.4 hrs" },
          { "id": "t14", "title": "Azure Monitor & Cost Calculator", "duration": "0.4 hrs" },
          { "id": "t15", "title": "CLI Commands", "duration": "0.4 hrs" },
          { "id": "t16", "title": "Azure Virtual Machine", "duration": "0.4 hrs" }
        ]
      },

      {
        "id": "m3",
        "title": "Hadoop Framework & Architecture",
        "duration": "4 hrs",
        "topics": [
          { "id": "t1", "title": "Complete Hadoop Architecture", "duration": "0.5 hrs" },
          { "id": "t2", "title": "MapReduce Functioning", "duration": "0.5 hrs" },
          { "id": "t3", "title": "HDFS (Hadoop Distributed File System)", "duration": "0.5 hrs" },
          { "id": "t4", "title": "YARN (Yet Another Resource Negotiator)", "duration": "0.4 hrs" },
          { "id": "t5", "title": "Blocks, Splits, Maps, Data Spilling, Heartbeats, Data Replication, FS Image, Checkpointing, High Availability", "duration": "1.0 hrs" },
          { "id": "t6", "title": "Hadoop Daemons - NameNode, DataNode, Secondary NameNode, Standby NameNode", "duration": "1.1 hrs" }
        ]
      },
      {
        "id": "m4",
        "title": "Apache Spark Architecture & Programming",
        "duration": "8 hrs",
        "topics": [
          { "id": "t1", "title": "Spark Architecture & Core Concepts", "duration": "1.0 hrs" },
          { "id": "t2", "title": "RDDs, Actions & Transformations", "duration": "1.0 hrs" },
          { "id": "t3", "title": "Lineage, Lazy Eval, Broadcaster, Accumulator", "duration": "1.0 hrs" },
          { "id": "t4", "title": "Spark SQL: Structs, Joins, Optimization", "duration": "1.0 hrs" },
          { "id": "t5", "title": "Read/Write, Spark Submit, Resource Allocation", "duration": "1.0 hrs" },
          { "id": "t6", "title": "Spark UI: Stages, Tasks, Debugging", "duration": "1.0 hrs" },
          { "id": "t7", "title": "Memory Mgmt: Cache, Persist, Serialization", "duration": "1.0 hrs" },
          { "id": "t8", "title": "Spark Streaming, GraphX Integration", "duration": "1.0 hrs" }
        ]
      }
      ,
      {
        "id": "m5",
        "title": "MongoDB for Developers & Admins",
        "duration": "2 hrs",
        "topics": [
          { "id": "t1", "title": "Introduction to MongoDB and its Architecture", "duration": "0.3 hrs" },
          { "id": "t2", "title": "Data Modeling with MongoDB - Schema Design & Relationships", "duration": "0.4 hrs" },
          { "id": "t3", "title": "Advanced Features - Aggregation, Text Search, Geospatial Queries", "duration": "0.4 hrs" },
          { "id": "t4", "title": "MongoDB Administration - Deployment & Configuration", "duration": "0.45 hrs" },
          { "id": "t5", "title": "Scaling MongoDB - Sharding & Distributed Cluster Management", "duration": "0.45 hrs" }
        ]
      }
      ,
      {
        "id": "m6",
        "title": "Apache Kafka Basics",
        "duration": "2 hrs",
        "topics": [
          { "id": "t1", "title": "Producer & Consumer", "duration": "0.3 hrs" },
          { "id": "t2", "title": "Kafka Cluster Setup & Brokers", "duration": "0.25 hrs" },
          { "id": "t3", "title": "Topics, Partitioning, Offset, Polling", "duration": "0.45 hrs" },
          { "id": "t4", "title": "Data Replication & Data Retention", "duration": "0.3 hrs" },
          { "id": "t5", "title": "Consumer Group", "duration": "0.4 hrs" },
          { "id": "t6", "title": "ZooKeeper", "duration": "0.3 hrs" }
        ]
      },
      {
        "id": "m7",
        "title": "Apache Hive for Data Warehousing",
        "duration": "4 hrs",
        "topics": [
          { "id": "t1", "title": "Hive Installation", "duration": "0.25 hrs" },
          { "id": "t2", "title": "Query Syntax", "duration": "0.35 hrs" },
          { "id": "t3", "title": "Bulk Data Load", "duration": "0.25 hrs" },
          { "id": "t4", "title": "Internal vs External Tables", "duration": "0.3 hrs" },
          { "id": "t5", "title": "Static & Dynamic Partitioning", "duration": "0.4 hrs" },
          { "id": "t6", "title": "Bucketing", "duration": "0.3 hrs" },
          { "id": "t7", "title": "Map Side Join, Bucket Join, and Sort Merge Bucket Join", "duration": "0.5 hrs" },
          { "id": "t8", "title": "Hive SerDe", "duration": "0.3 hrs" },
          { "id": "t9", "title": "User Defined Functions (UDFs) in Hive", "duration": "0.4 hrs" },
          { "id": "t10", "title": "Query Optimization", "duration": "0.35 hrs" }
        ]
      },
      ,





    ]
    ,
    projects: [
      {
        id: "p1",
        title: "Build Cloud Data Pipeline Using Databricks",
        description: "This video provides an in-depth introduction with real-world project experience, it outlines the career path, key technologies (Hadoop, Spark, Azure), curriculum breakdown, and practical use cases for aspiring data engineers.",
        image: "https://img.youtube.com/vi/aNja1KSqczo/0.jpg",
        skills: ["Apache ", "Big Data", "Azure"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "aNja1KSqczo"
      },
      {
        id: "p2",
        title: "How to Create End-to-End ETL Pipeline",
        description: "Dive deep into practical data solutions using Azure by setting up a complete data pipeline, from storing CSV files in Azure Blob Storage to efficiently transferring data into SQL databases.",
        image: "https://img.youtube.com/vi/yYbU_Bihvdc/0.jpg",
        skills: ["Virtual Machines ", "Azure", "SQL"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "yYbU_Bihvdc"
      },
      {
        id: "p3",
        title: "Data Engineering Career Roadmap 2025",
        description: "Get comprehensive roadmap for anyone looking to start or grow their career in Data Engineering in 2025. You'll understand the real-world data pipeline, in-demand tools (SQL, Python, Spark, Docker, Cloud).",
        image: "https://img.youtube.com/vi/QbI60IMgO_g/0.jpg",
        skills: ["SQL", "Python", "Spark", "Docker", "Cloud"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "QbI60IMgO_g"
      },
      // {
      //   id: "p4",
      //   title: "Superstore Sales Analysis Using Excel ",
      //   description: "Explore Superstore sales data and generate key business insights using Excel. Analyze product lines, profitable cities, gender-based sales performance, month-on-month growth, and create a dashboard to track critical metrics.",
      //   image: "https://img.youtube.com/vi/KGrApiKUR4M/0.jpg",
      //   skills: ["Excel", "Data Analysis", "Business Analytics", "Sales Analytics", "Dashboard", "Business Insights"],
      //   difficulty: "Beginner to Intermediate",
      //   videoId: "KGrApiKUR4M"
      // },
      // {
      //   id: "p5",
      //   title: "Predicting Car Sales using Linear Regression in R",
      //   description: "Analyze Superstore sales data in Excel to uncover insights on product lines, profitable cities, gender-based performance, month-on-month growth, and create a dashboard to track key metrics.",
      //   image: "https://img.youtube.com/vi/8nNgJJH7pMk/0.jpg",
      //   skills: ["R", "Linear Regression", "Car Sales Prediction", "Data Analysis", "Model Evaluation", "Variable Significance"],
      //   difficulty: "Intermediate",
      //   videoId: "8nNgJJH7pMk"
      // },
      // {
      //   id: "p6",
      //   title: "Crime Intelligence Dashboard in Power BI",
      //   description: "Create an interactive, data-driven crime intelligence dashboard using real-world data from the Manchester Police Department. Learn to transform data, set up KPIs, design visualizations, and implement geospatial mapping to analyze crime trends and improve law enforcement efficiency.",
      //   image: "https://img.youtube.com/vi/sVXjAIa7YBs/0.jpg",
      //   skills: ["Power BI", "DAX", "KPI Cards", "Data Transformation", "Data Visualization", "Crime Analysis"],
      //   difficulty: "Intermediate",
      //   videoId: "sVXjAIa7YBs"
      // }
    ],
  },
  {
    id: '4',
    title: "Data Science with Machine Learning & AI Certification",
    description: "Learn data science and machine learning skills with tools like Python, SQL, R, Tableau, etc., and get jobs for data scientist, analyst, or ML engineer roles.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Deep Learning",
    students: 1243,
    metaData: {
      title: "NASSCOM Certified Data Science Course with ML & GenAI. 4.8/5",
      description: "Enroll in Ivy Pro's Data Science Course with ML & GenAI. Get fee rebate from Govt. Classroom & live online classes. 30+ hands-on projects and placement support.",
      bio: "Learn data science and machine learning skills with tools like Python, SQL, R, Tableau, etc., and land promising jobs for data scientist, analyst, or ML engineer roles."

    },
    duration: "14 weeks",
    rating: 4.8,
    reviewCount: 298,
    isFeatured: true,
    slug: "data-science-and-ml-course",
    longDescription: "The data science and machine learning program will make you an industry-ready data scientist in just 12-14 months. Whether you are a college graduate who is just starting your career or a working professional who wants to advance your skills, this program is perfect for you. \n\n The course explores various supervised and unsupervised machine learning algorithms practiced on tools like R and Python. You will not only learn high-earning skills like data analytics, machine learning, visualization, deep learning, etc., but you will also gain practical experience in solving real-world business problems. \n\n Foundational tools such as Excel, SQL, and Tableau ensure you build strong analytical, reporting, and visualization capabilities—skills that remain essential across every data and AI-driven role. \n\n This course on data science and machine learning is made in partnership with FutureSkills Prime, a digital skilling initiative by MeitY and NASSCOM. The content of the course is aligned with the National Occupation Standards (NOS). That means the training provided is of high quality and meets the industry standards. "
    , instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
        , isDirector: true
      }
    ],
    outcomes: [
      "Get hands-on with leading tools like Python, R, SQL, Excel, Tableau, and VBA for data analysis and automation.",
      "Learn to apply both supervised and unsupervised machine learning algorithms to solve real-world business challenges.",
      "Work on industry-relevant projects and case studies to build practical, job-ready skills.",
      "Deepen your expertise in data storytelling, predictive modeling, and deep learning techniques."
    ],



    curriculum: [
      {
        id: "m1",
        title: "Advanced Excel",
        duration: "32 hrs",
        topics: [
          { id: "t1", title: "Basic to Advanced Functions", duration: "" },
          { id: "t2", title: "Data Analysis", duration: "" },
          { id: "t3", title: "Reporting using Pivot Tables", duration: "" },
          { id: "t4", title: "Data Visualization", duration: "" },
          { id: "t5", title: "Data Cleaning", duration: "" },
          { id: "t6", title: "Dashboarding", duration: "" },
          { id: "t7", title: "AI and ChatGPT Integration", duration: "" }
        ]

        // topics: [
        //   { id: "t1", title: "Data Hygiene – Clean, structure, and prepare your dataset", duration: "1.25 hrs" },
        //   { id: "t2", title: "Formatting – Number and table formatting for clarity", duration: "1.25 hrs" },
        //   { id: "t3", title: "Filtering & Sorting – Auto filters, advanced filters, custom sorting", duration: "1.5 hrs" },
        //   { id: "t4", title: "Cell Referencing – Relative, absolute references & formula handling", duration: "1.5 hrs" },
        //   { id: "t5", title: "Basic Functions – SUM, AVERAGE, COUNT, PRODUCT, etc.", duration: "1.75 hrs" },
        //   { id: "t6", title: "Date Functions – TODAY, DATEDIF, EOMONTH, WEEKDAY, etc.", duration: "1.5 hrs" },
        //   { id: "t7", title: "Conditional Functions – SUMIFS, COUNTIFS, AVERAGEIFS", duration: "2 hrs" },
        //   { id: "t8", title: "Database Functions – DSUM, DAVERAGE using criteria tables", duration: "1.25 hrs" },
        //   { id: "t9", title: "Dynamic Arrays (Google Sheets) – FILTER, SORT, UNIQUE, TEXTJOIN", duration: "1.5 hrs" },
        //   { id: "t10", title: "Pivot Tables – Layout, grouping, calculated fields, summarizing", duration: "2.5 hrs" },
        //   { id: "t11", title: "Charts – Chart creation, types, usage, sparklines", duration: "2 hrs" },
        //   { id: "t12", title: "Dashboards – Planning, business insights, slicers, summaries", duration: "2.5 hrs" },
        //   { id: "t13", title: "Logical Functions – IF, AND, OR, IFERROR, SWITCH etc", duration: "1.75 hrs" },
        //   { id: "t14", title: "Lookup Functions – VLOOKUP, XLOOKUP, MATCH, INDIRECT etc", duration: "2.25 hrs" },
        //   { id: "t15", title: "Text Functions – LEFT, MID, FIND, SUBSTITUTE, CONCAT etc", duration: "1.5 hrs" },
        //   { id: "t16", title: "Conditional Formatting – Color scales, data bars, formulas", duration: "1.25 hrs" },
        //   { id: "t17", title: "Data Validation – Lists, error alerts, dependent dropdowns", duration: "1 hr" },
        //   { id: "t18", title: "Goal Seek & Solver – Solve optimization and reverse calculations", duration: "1.25 hrs" },
        //   { id: "t19", title: "Gen AI - How to Use Gen AI in Microsoft Excel, Use Lab.Generative", duration: "0.75 hrs" },
        //   { id: "t20", title: "ChatGPT - How to use Prompt engineering for Data Analysis", duration: "0.75 hrs" }
        // ]
      },


      {
        id: "m2",
        title: "MySQL",
        duration: "32 hrs",
        topics: [
          { id: "t1", title: "Database Management", duration: "" },
          { id: "t2", title: "SQL Queries", duration: "" },
          { id: "t3", title: "Data Retrieval", duration: "" },
          { id: "t4", title: "Database Design", duration: "" },
          { id: "t5", title: "Performance Optimization", duration: "" },
          { id: "t6", title: "AI Tools to Auto Generate and Optimize Queries", duration: "" }
        ]

        // topics: [
        //   { id: "t1", title: "SQL Basics: Introduction to Database Management System (DBMS), Introduction to Google BigQuery and MySQL, CRUD Operations", duration: "3 hrs" },
        //   { id: "t2", title: "Data Manipulation and Transformation: Logical, Numerical, and Mathematical Operators, Conditional Statements", duration: "2.5 hrs" },
        //   { id: "t3", title: "Data Cleaning: Type Casting, Date/Time Formatting, Text Formatting", duration: "2 hrs" },
        //   { id: "t4", title: "Pattern Matching: LIKE Operator, REGEXP Functions", duration: "1.5 hrs" },
        //   { id: "t5", title: "Joins and Relational Databases: Keys, Join Types, Indexing, Normalization", duration: "4 hrs" },
        //   { id: "t6", title: "Aggregation and Grouping: Aggregate Functions, GROUP BY, CTEs, Variables", duration: "3.5 hrs" },
        //   { id: "t7", title: "Window Functions: RANK, DENSE_RANK, ROW_NUMBER, LEAD/LAG", duration: "2.5 hrs" },
        //   { id: "t8", title: "Data Reusability: Views, Stored Procedures, UDFs", duration: "2 hrs" },
        //   { id: "t9", title: "Subqueries: Simple, EXISTS/NOT EXISTS, Correlated", duration: "1.5 hrs" },
        //   { id: "t10", title: "Cloud Services: BigQuery Querying, Sharing Results, Permissions, Scheduling", duration: "1.5 hrs" },
        //   { id: "t11", title: "Online SQL Platforms: MySQL Workbench, Online IDEs, Cloud Storage Integration", duration: "0.5 hrs" }
        // ]
      },

      {
        id: "m3",
        title: " Tableau",
        duration: "28 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to Tableau: Approaching Business Problems, Interface Overview", duration: "2 hrs" },
        //   { id: "t2", title: "Connecting and Shaping Data: Data Sources, Pivoting, Calculated Fields, Dimensions/Measures", duration: "3 hrs" },
        //   { id: "t3", title: "Introduction to Basic Charts: Bars, Lines, Scatter Plots, Maps", duration: "2 hrs" },
        //   { id: "t4", title: "Working With Marks Card: Color, Size, Label, Detail, Tooltip", duration: "1.5 hrs" },
        //   { id: "t5", title: "Different Filters in Tableau: Quick Filters, Context Filters, Data Source Filters", duration: "2 hrs" },
        //   { id: "t6", title: "Calculated Fields: Summarization, String Manipulation, Date, Logical Functions", duration: "2.5 hrs" },
        //   { id: "t7", title: "Combining Tables: Joins, Unions, Blending", duration: "2 hrs" },
        //   { id: "t8", title: "Table Calculations: Primary and Secondary Calculations", duration: "1.5 hrs" },
        //   { id: "t9", title: "Parameters: Dimension, Measure, Sort, TopN, Date", duration: "1.5 hrs" },
        //   { id: "t10", title: "Groups & Sets: Creating and Applying", duration: "1 hr" },
        //   { id: "t11", title: "Analytics: Forecasting, Trend Lines, Clustering", duration: "2 hrs" },
        //   { id: "t12", title: "Dashboard Building & Actions: Filters, Highlights, Navigation", duration: "2.5 hrs" },
        //   { id: "t13", title: "Projects: RFM Analysis, Customer Retention Dashboard", duration: "1.5 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Introduction to Data Visualization", duration: "" },
          { id: "t2", title: "Creating Interactive Dashboards", duration: "" },
          { id: "t3", title: "Data Connection and Blending", duration: "" },
          { id: "t4", title: "Calculations and Expressions", duration: "" },
          { id: "t5", title: "Chart Types", duration: "" },
          { id: "t6", title: "Parameters", duration: "" },
          { id: "t7", title: "Dashboard Actions", duration: "" },
          { id: "t8", title: "Story and Tableau Prep", duration: "" },
          { id: "t9", title: "AI in Tableau: Explain Data, Ask Data, AI-driven Insights with Tableau GPT", duration: "" }
        ]

      }
      ,

      {
        id: "m4",
        title: "Business Statistics",
        duration: "8 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction: Data Visualization, Interface, Business Problem-Solving", duration: "3 hrs" },
        //   { id: "t2", title: "Connecting & Shaping Data: Power Query Cleaning, Transformation, Append/Merge", duration: "4.5 hrs" },
        //   { id: "t3", title: "Data Modeling: Normalization, Relationships, Filter Flow", duration: "4 hrs" },
        //   { id: "t4", title: "DAX Analysis: Calculated Columns/Measures, Functions, Time Intelligence", duration: "6 hrs" },
        //   { id: "t5", title: "Visualization: Interactive Reports, Charts, Slicers, Drillthroughs", duration: "5 hrs" },
        //   { id: "t6", title: "AI & Custom Visuals: Decomposition Trees, Q&A, Key Influencers", duration: "2 hrs" },
        //   { id: "t7", title: "Deployment & Security: Power BI Service, Refresh Schedules, RLS", duration: "2.5 hrs" },
        //   { id: "t8", title: "SQL Integration: Database Connections, Custom Queries", duration: "1 hr" }
        // ]
        topics: [
          { id: "t1", title: "Probability Distributions", duration: "" },
          { id: "t2", title: "EDA", duration: "" },
          { id: "t3", title: "Statistical Analysis Using Python", duration: "" },
          { id: "t4", title: "Feature Engineering Techniques", duration: "" },
          { id: "t5", title: "Data Preprocessing", duration: "" },
          { id: "t6", title: "Advanced Statistical Methods", duration: "" }
        ]

      }
      ,

      {
        id: "m5",
        title: "R",
        duration: "40 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to R: R Console, RStudio Interface", duration: "1.5 hrs" },
        //   { id: "t2", title: "R Data Structures: Vectors and Matrices", duration: "2 hrs" },
        //   { id: "t3", title: "Programming Basics: Conditions, Loops, Functions", duration: "2.5 hrs" },
        //   { id: "t4", title: "DataFrames: Creation and Manipulation", duration: "2 hrs" },
        //   { id: "t5", title: "Advanced Programming: dplyr and Essential Packages", duration: "2.5 hrs" },
        //   { id: "t6", title: "Statistics: Probability Distributions, Hypothesis Testing", duration: "2 hrs" },
        //   { id: "t7", title: "Data Visualization: ggplot2 Fundamentals", duration: "1.5 hrs" },
        //   { id: "t8", title: "Linear Regression: Academic Performance Prediction Project", duration: "2 hrs" },
        //   { id: "t9", title: "Logistic Regression: Telecom Customer Churn Project", duration: "2 hrs" },
        //   { id: "t10", title: "Decision Trees: Loan Approval Prediction Project", duration: "2 hrs" },
        //   { id: "t11", title: "Time Series & Clustering: Sales Forecasting and Customer Segmentation Projects", duration: "2 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Basics to Advanced", duration: "" },
          { id: "t2", title: "Data Manipulation with dplyr", duration: "" },
          { id: "t3", title: "Data Visualization with ggplot2", duration: "" },
          { id: "t4", title: "Statistical Analysis", duration: "" },
          { id: "t5", title: "Predictive Modeling in R", duration: "" },
          { id: "t6", title: "Machine Learning Algorithms in R", duration: "" },
          { id: "t7", title: "AI in R: Generative AI Assistants for R Code Automation, ggplot Customization, Model Interpretation", duration: "" }
        ]

      }

      ,

      {
        id: "m6",
        title: "Python",
        duration: "40 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to Python: Installation, IDEs (VS Code, Jupyter)", duration: "2 hrs" },
        //   { id: "t2", title: "Core Data Types: Numbers, Strings, Booleans", duration: "3 hrs" },
        //   { id: "t3", title: "Advanced Data Structures: Lists, Tuples, Sets, Dictionaries", duration: "4 hrs" },
        //   { id: "t4", title: "Program Control: Conditionals, Loops, Comprehensions", duration: "3 hrs" },
        //   { id: "t5", title: "Functions & NumPy: Custom Functions, Vectorized Operations", duration: "3.5 hrs" },
        //   { id: "t6", title: "Pandas Basics: DataFrame Operations, Data Cleaning", duration: "4 hrs" },
        //   { id: "t7", title: "Pandas Advanced: GroupBy, Merging, Pivoting", duration: "3.5 hrs" },
        //   { id: "t8", title: "EDA: Univariate/Bivariate Analysis, Correlation", duration: "3 hrs" },
        //   { id: "t9", title: "Linear Regression: Ad Revenue Prediction Project", duration: "2.5 hrs" },
        //   { id: "t10", title: "Logistic Regression: Click-Through Rate Prediction Project", duration: "2.5 hrs" },
        //   { id: "t11", title: "Decision Trees: Used Car Pricing Project", duration: "2 hrs" },
        //   { id: "t12", title: "Time Series: Retail Sales Forecasting Project", duration: "2 hrs" },
        //   { id: "t13", title: "Deployment: API Integration, GitHub, Model Serving", duration: "2 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Basics to Advanced", duration: "" },
          { id: "t2", title: "Data Manipulation (NumPy, Pandas)", duration: "" },
          { id: "t3", title: "Visualization (Matplotlib, Seaborn)", duration: "" },
          { id: "t4", title: "ML Fundamentals", duration: "" },
          { id: "t5", title: "Predictive Modeling", duration: "" },
          { id: "t6", title: "Evaluation and Feature Engineering", duration: "" },
          { id: "t7", title: "AI in Python: Prompt-based model interpretation, automated EDA with AI tools, and model documentation using Copilot", duration: "" }
        ]

      }
      ,
      {
        id: "m7",
        title: "ML, DL & AI",
        duration: "28 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to Machine Learning: Concepts, Workflow, and Applications", duration: "2 hrs" },
        //   { id: "t2", title: "Recap: Linear/Logistic Regression, Decision Trees (Project: Car Price Prediction)", duration: "3 hrs" },
        //   { id: "t3", title: "Ensemble Learning: Random Forest (Project: Loan Risk Prediction)", duration: "3 hrs" },
        //   { id: "t4", title: "Boosting: Gradient Boost, AdaBoost, XGBoost (Projects: House Prices & Disease Diagnosis)", duration: "4 hrs" },
        //   { id: "t5", title: "Support Vector Machines (Project: YouTube Video Analysis)", duration: "2 hrs" },
        //   { id: "t6", title: "Naive Bayes (Project: Customer Churn Prediction)", duration: "2 hrs" },
        //   { id: "t7", title: "K-Nearest Neighbors (Project: Feedback Categorization)", duration: "2 hrs" },
        //   { id: "t8", title: "Dimensionality Reduction & Clustering: PCA, K-Means, Hierarchical, DBSCAN (Project: Retail Profiling)", duration: "3 hrs" },
        //   { id: "t9", title: "Text Preprocessing: Regex, Tokenization, Cleaning", duration: "2 hrs" },
        //   { id: "t10", title: "Text Mining: Word Clouds, Sentiment Analysis (Project: Indigo Tweets)", duration: "2 hrs" },
        //   { id: "t11", title: "NLP Classification (Project: IT Ticket Classification)", duration: "2 hrs" },
        //   { id: "t12", title: "Gen AI: Custom Text Classification with Transformers", duration: "2 hrs" },
        //   { id: "t13", title: "Neural Networks (Projects: Customer Lifetime Value & Credit Risk)", duration: "2 hrs" },
        //   { id: "t14", title: "Advanced Networks: RNN/LSTM (Stock Prediction), CNN (Face Classification)", duration: "3 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Predictive Modeling", duration: "" },
          { id: "t2", title: "Clustering", duration: "" },
          { id: "t3", title: "Decision Trees", duration: "" },
          { id: "t4", title: "Ensemble Techniques", duration: "" },
          { id: "t5", title: "Optimization", duration: "" },
          { id: "t6", title: "NLP", duration: "" },
          { id: "t7", title: "Deep Learning - from models to tuning and deployment", duration: "" },
          { id: "t8", title: "AI in ML: Image, Text, and Time-Series projects using Flask/Streamlit integration", duration: "" }
        ]

      }


      // ,

      // {
      //   id: "m8",
      //   title: "Statistics",
      //   duration: "8 hrs",
      //   topics: [
      //     { id: "t1", title: "Types of Data: Nominal, Ordinal, Interval, Ratio", duration: "0.75 hrs" },
      //     { id: "t2", title: "Correlation: Pearson, Spearman, Visualization", duration: "1 hr" },
      //     { id: "t3", title: "Measures of Central Tendency: Mean, Median, Mode", duration: "0.75 hrs" },
      //     { id: "t4", title: "Measures of Dispersion: Range, Variance, Std Dev, IQR", duration: "1 hr" },
      //     { id: "t5", title: "Probability: Basics, Rules, Bayes' Theorem", duration: "1 hr" },
      //     { id: "t6", title: "Probability Distributions: Normal, Binomial, Poisson", duration: "1.25 hrs" },
      //     { id: "t7", title: "Sampling and Estimation: CLT, Confidence Intervals", duration: "1 hr" },
      //     { id: "t8", title: "Hypothesis Testing: p-values, t-tests, Chi-square", duration: "1.25 hrs" },
      //     { id: "t9", title: "Data Modeling: Linear Regression Basics", duration: "1 hr" }
      //   ]
      // }

      // ,
      // {
      //   "id": "m9",
      //   "title": "Excel VBA Automation",
      //   "duration": "26 hrs",
      //   "topics": [
      //     { "id": "t1", "title": "Making Macro Do Automated Tasks for You", "duration": "6.5 hrs" },
      //     { "id": "t2", "title": "Programming Concepts (Variables, Loops, Conditions)", "duration": "8.25 hrs" },
      //     { "id": "t3", "title": "Analysis Using VBA (Data Cleaning, PivotTables)", "duration": "6.75 hrs" },
      //     { "id": "t4", "title": "Creating Dashboards (Forms, Dynamic Charts)", "duration": "4.5 hrs" }
      //   ]
      // }


    ],

    projects: [
      {
        id: "p1",
        title: "Steps to Make a Career in AI & Data",
        description: "Explore pathways to start and grow a career in AI and Data. Learn about essential skills, tools, career opportunities, and how AI is impacting various industries through this expert Q&A session.",
        image: "https://img.youtube.com/vi/OoCffZ4VaJE/0.jpg",
        skills: ["AI Career Path", "AI Tools", "AI Research", "AI & Web Development", "Chatbots"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "OoCffZ4VaJE"
      },
      {
        id: "p2",
        title: "Using AI Visuals in Power BI Dashboards",
        description: "Learn to create AI-powered visuals in Power BI, including Key Influencer, Decomposition Tree, Q&A, and Smart Narrative. Explore current AI trends and integrate ChatGPT for enhanced insights",
        image: "https://img.youtube.com/vi/ftTTrchGVbA/0.jpg",
        skills: ["Key Influencer Visual", "Decomposition Tree", "Smart Narrative", "AI Trends"],
        difficulty: "Intermediate to Advanced",
        isPractice: true,
        videoId: "ftTTrchGVbA"
      },
      {
        id: "p3",
        title: "Python Prediction Model for Real Estate",
        description: "Build a real estate price prediction model using Python and machine learning. Learn data preprocessing, regression techniques, and model building with practical insights from a real-world case study.",
        image: "https://img.youtube.com/vi/TipOU1HPrxA/0.jpg",
        skills: ["Regression Models", "Data Preprocessing", "Linear Regression", "Random Forest", "Neural Networks"],
        difficulty: "Intermediate",
        isPractice: true,
        videoId: "TipOU1HPrxA"
      },
      {
        id: "p4",
        title: "OYO Business Analysis with SQL",
        description: "Learn how to perform business analysis using SQL with a real-world case study on OYO’s room sales. Cover data cleaning, SQL queries, business KPIs, and practical data-driven decision-making.",
        image: "https://img.youtube.com/vi/ee7TajNEUrI/0.jpg",
        skills: ["GROUP BY", "ARIMA Model", "Window Functions ", "CTE", "Data Cleaning"],
        difficulty: "Beginner to Intermediate",
        videoId: "ee7TajNEUrI"
      },
      {
        id: "p5",
        title: "Predicting Computer Prices with Python",
        description: "Build a predictive model for computer prices using Python. Learn data cleaning, regression modeling, and key Python libraries through this industry case study by an IvyPro student.",
        image: "https://img.youtube.com/vi/Wt8jyPvdGRo/0.jpg",
        skills: ["Feature Engineering,", "Linear Regression", "Random Forest", "Scikit-learn", "Regression Metrics"],
        difficulty: "Beginner to Intermediate",
        videoId: "Wt8jyPvdGRo"
      },
      {
        id: "p6",
        title: "ANOVA Using R - Bakery Case Study",
        description: "Analyze how display factors affect product demand using Two-way ANOVA and Tukey’s Test in R. Learn statistical hypothesis testing through this practical bakery case study.",
        image: "https://img.youtube.com/vi/UhO4y3a9yxQ/0.jpg",
        skills: ["Data Loading", "Data Manipulation", "Two-way ANOVA", "Hypothesis Testing", "Statistical Modeling"],
        difficulty: "Intermediate",
        videoId: "UhO4y3a9yxQ"
      }
    ],










  },
  {
    id: '5',
    title: "Data Analytics and Generative AI Course",
    description: "Learn data science and visualization skills to analyze data, uncover hidden patterns, and tell powerful stories using MySQL, Excel, VBA, Tableau, PowerBI, and more.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Deep Learning",
    students: 1243,
    metaData: {
      title: "Data Analytics and Generative AI Course Course in Tableau & Power BI",
      description: "Join IBM Certified Data Science course with Visualization. Work on 25+ real-world projects. Mentors from IIT, IIM, & US universities. Get placement support.",
      bio: "Learn data science and visualization skills to analyze data, uncover hidden patterns, and tell powerful stories using MySQL, Python, R, Tableau, PowerBI, and more."

    },
    duration: "14 weeks",
    rating: 4.8,
    reviewCount: 298,
    isFeatured: true,
    slug: "data-visualization-course",
    longDescription: "This course will teach you how to use the most popular data science and visualization tools, like Excel, MySQL, R, Python, Tableau, and Power BI.\n\n You will not only learn high-earning skills like data analytics, dashboarding, business statistics, data manipulation, visualization, etc., but you will also gain practical experience in solving real-world problems.\n\n That’s why, after 184 hours of live training, you will spend about 100 hours on 50+ assignments, 10+ projects, and 30+ case studies. This will help you apply all the knowledge you learn to solve business problems and become a confident problem-solver.\n\n The course will make you an industry-ready data science and visualization expert in just 12 months. This course is perfect if you are starting your career as a college graduate or if you want to advance your skills as a working professional."
    , instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
        , isDirector: true
      }
    ],
    outcomes: [
      "Analyze data and uncover insights using Excel, MySQL.",
      "Create interactive dashboards and visuals with Tableau and Power BI",
      "Work on 10+ industry projects and 30+ case studies across domains like retail, finance, and healthcare",
      "Master data storytelling and communication to deliver compelling business insights",
      "Get certified by Ivy, along with 1:1 mentorship and lifetime placement support"
    ],
    curriculum: [

      {
        id: "m1",
        title: "Advance Excel",
        duration: "28 hrs",
        topics: [
          { id: "t1", title: "Data Hygiene – Clean, structure, and prepare your dataset", duration: "1.25 hrs" },
          { id: "t2", title: "Formatting – Number and table formatting for clarity", duration: "1.25 hrs" },
          { id: "t3", title: "Filtering & Sorting – Auto filters, advanced filters, custom sorting", duration: "1.5 hrs" },
          { id: "t4", title: "Cell Referencing – Relative, absolute references & formula handling", duration: "1.5 hrs" },
          { id: "t5", title: "Basic Functions – SUM, AVERAGE, COUNT, PRODUCT, etc.", duration: "1.75 hrs" },
          { id: "t6", title: "Date Functions – TODAY, DATEDIF, EOMONTH, WEEKDAY, etc.", duration: "1.5 hrs" },
          { id: "t7", title: "Conditional Functions – SUMIFS, COUNTIFS, AVERAGEIFS", duration: "2 hrs" },
          { id: "t8", title: "Database Functions – DSUM, DAVERAGE using criteria tables", duration: "1.25 hrs" },
          { id: "t9", title: "Dynamic Arrays (Google Sheets) – FILTER, SORT, UNIQUE, TEXTJOIN", duration: "1.5 hrs" },
          { id: "t10", title: "Pivot Tables – Layout, grouping, calculated fields, summarizing", duration: "2.5 hrs" },
          { id: "t11", title: "Charts – Chart creation, types, usage, sparklines", duration: "2 hrs" },
          { id: "t12", title: "Dashboards – Planning, business insights, slicers, summaries", duration: "2.5 hrs" },
          { id: "t13", title: "Logical Functions – IF, AND, OR, IFERROR, SWITCH etc", duration: "1.75 hrs" },
          { id: "t14", title: "Lookup Functions – VLOOKUP, XLOOKUP, MATCH, INDIRECT etc", duration: "2.25 hrs" },
          { id: "t15", title: "Text Functions – LEFT, MID, FIND, SUBSTITUTE, CONCAT etc", duration: "1.5 hrs" },
          { id: "t16", title: "Conditional Formatting – Color scales, data bars, formulas", duration: "1.25 hrs" },
          { id: "t17", title: "Data Validation – Lists, error alerts, dependent dropdowns", duration: "1 hr" },
          { id: "t18", title: "Goal Seek & Solver – Solve optimization and reverse calculations", duration: "1.25 hrs" },
          { id: "t19", title: "Gen AI - How to Use Gen AI in Microsoft Excel, Use Lab.Generative", duration: "0.75 hrs" },
          { id: "t20", title: "ChatGPT - How to use Prompt engineering for Data Analysis", duration: "0.75 hrs" }
        ]
      },


      {
        id: "m2",
        title: "SQL Queries & Relational Database Management",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "SQL Basics: Introduction to Database Management System (DBMS), Introduction to Google BigQuery and MySQL, CRUD Operations", duration: "3 hrs" },
          { id: "t2", title: "Data Manipulation and Transformation: Logical, Numerical, and Mathematical Operators, Conditional Statements", duration: "2.5 hrs" },
          { id: "t3", title: "Data Cleaning: Type Casting, Date/Time Formatting, Text Formatting", duration: "2 hrs" },
          { id: "t4", title: "Pattern Matching: LIKE Operator, REGEXP Functions", duration: "1.5 hrs" },
          { id: "t5", title: "Joins and Relational Databases: Keys, Join Types, Indexing, Normalization", duration: "4 hrs" },
          { id: "t6", title: "Aggregation and Grouping: Aggregate Functions, GROUP BY, CTEs, Variables", duration: "3.5 hrs" },
          { id: "t7", title: "Window Functions: RANK, DENSE_RANK, ROW_NUMBER, LEAD/LAG", duration: "2.5 hrs" },
          { id: "t8", title: "Data Reusability: Views, Stored Procedures, UDFs", duration: "2 hrs" },
          { id: "t9", title: "Subqueries: Simple, EXISTS/NOT EXISTS, Correlated", duration: "1.5 hrs" },
          { id: "t10", title: "Cloud Services: BigQuery Querying, Sharing Results, Permissions, Scheduling", duration: "1.5 hrs" },
          { id: "t11", title: "Online SQL Platforms: MySQL Workbench, Online IDEs, Cloud Storage Integration", duration: "0.5 hrs" }
        ]
      },

      {
        id: "m3",
        title: "Data Visualization Using Tableau (Addon module with extra charges)",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "Introduction to Tableau: Approaching Business Problems, Interface Overview", duration: "2 hrs" },
          { id: "t2", title: "Connecting and Shaping Data: Data Sources, Pivoting, Calculated Fields, Dimensions/Measures", duration: "3 hrs" },
          { id: "t3", title: "Introduction to Basic Charts: Bars, Lines, Scatter Plots, Maps", duration: "2 hrs" },
          { id: "t4", title: "Working With Marks Card: Color, Size, Label, Detail, Tooltip", duration: "1.5 hrs" },
          { id: "t5", title: "Different Filters in Tableau: Quick Filters, Context Filters, Data Source Filters", duration: "2 hrs" },
          { id: "t6", title: "Calculated Fields: Summarization, String Manipulation, Date, Logical Functions", duration: "2.5 hrs" },
          { id: "t7", title: "Combining Tables: Joins, Unions, Blending", duration: "2 hrs" },
          { id: "t8", title: "Table Calculations: Primary and Secondary Calculations", duration: "1.5 hrs" },
          { id: "t9", title: "Parameters: Dimension, Measure, Sort, TopN, Date", duration: "1.5 hrs" },
          { id: "t10", title: "Groups & Sets: Creating and Applying", duration: "1 hr" },
          { id: "t11", title: "Analytics: Forecasting, Trend Lines, Clustering", duration: "2 hrs" },
          { id: "t12", title: "Dashboard Building & Actions: Filters, Highlights, Navigation", duration: "2.5 hrs" },
          { id: "t13", title: "Projects: RFM Analysis, Customer Retention Dashboard", duration: "1.5 hrs" }
        ]
      }
      ,

      {
        id: "m4",
        title: "Data Visualization Using Power BI",
        duration: "28 hrs",
        topics: [
          { id: "t1", title: "Introduction: Data Visualization, Interface, Business Problem-Solving", duration: "3 hrs" },
          { id: "t2", title: "Connecting & Shaping Data: Power Query Cleaning, Transformation, Append/Merge", duration: "4.5 hrs" },
          { id: "t3", title: "Data Modeling: Normalization, Relationships, Filter Flow", duration: "4 hrs" },
          { id: "t4", title: "DAX Analysis: Calculated Columns/Measures, Functions, Time Intelligence", duration: "6 hrs" },
          { id: "t5", title: "Visualization: Interactive Reports, Charts, Slicers, Drillthroughs", duration: "5 hrs" },
          { id: "t6", title: "AI & Custom Visuals: Decomposition Trees, Q&A, Key Influencers", duration: "2 hrs" },
          { id: "t7", title: "Deployment & Security: Power BI Service, Refresh Schedules, RLS", duration: "2.5 hrs" },
          { id: "t8", title: "SQL Integration: Database Connections, Custom Queries", duration: "1 hr" }
        ]
      }
      ,

      {
        "id": "m5",
        "title": "Excel VBA Automation",
        "duration": "26 hrs",
        "topics": [
          { "id": "t1", "title": "Making Macro Do Automated Tasks for You", "duration": "6.5 hrs" },
          { "id": "t2", "title": "Programming Concepts (Variables, Loops, Conditions)", "duration": "8.25 hrs" },
          { "id": "t3", "title": "Analysis Using VBA (Data Cleaning, PivotTables)", "duration": "6.75 hrs" },
          { "id": "t4", "title": "Creating Dashboards (Forms, Dynamic Charts)", "duration": "4.5 hrs" }
        ]
      }
    ]
    ,

    projects: [
      {
        id: "p1",
        title: "Analyzing the Health Services by a Hospital using SQL",
        description: "Learn to analyze hospital health service data using SQL. Explore SQL queries for data manipulation, aggregation, and reporting to drive insights for decision-making.",
        image: "https://img.youtube.com/vi/HW0wN_A_SJs/0.jpg",
        skills: ["SQL Queries", "SQL Aggregation", "JOINs", "Data Filtering in SQL", "SQL Functions", "Subqueries"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "HW0wN_A_SJs"
      },
      {
        id: "p2",
        title: "Visualizing IPL Player Performance | Power BI Dashboard",
        description: "Learn how to create a Power BI dashboard to visualize IPL player performance. Apply data transformation, charting, and advanced Power BI features to analyze player statistics.",
        image: "https://img.youtube.com/vi/dSyxd1smkr0/0.jpg",
        skills: ["Data Transformation", "Power BI Functions", "Power BI Visualizations", "Power BI Interface"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "dSyxd1smkr0"
      },
      {
        id: "p3",
        title: "Tableau Live Case Study | Mass Layoffs 2023",
        description: "Analyze the layoff trend of 2022 using Tableau. Learn to create interactive dashboards to visualize industry trends, country-wise layoffs, and year-on-year comparisons.",
        image: "https://img.youtube.com/vi/x7khPeI2NqI/0.jpg",
        skills: ["Tableau Dashboard", "Tableau Visualizations", "Data Preparation in Tableau", "Tableau Filters", "Tableau Functions"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "x7khPeI2NqI"
      },
      {
        id: "p4",
        title: "Airbnb Case Study | Excel Dashboards | Data Visualization",
        description: "Analyze Airbnb data using advanced Excel tools to create dashboards, perform analysis, and extract business insights for better decision-making.",
        image: "https://img.youtube.com/vi/L0QlyUYWZag/0.jpg",
        skills: ["Excel Dashboards", "Data Visualization", "PivotTables ", "PivotCharts ", "Conditional Formatting", "Excel Formulas"],
        difficulty: "Beginner to Intermediate",
        videoId: "L0QlyUYWZag"
      },
      {
        id: "p5",
        title: "Dashboard using Advanced Excel | Excel Project",
        description: "Create dynamic dashboards using advanced Excel techniques. Learn to clean data, use conditional functions, Extraction Function and form controls to create interactive charts.",
        image: "https://img.youtube.com/vi/euUVz5eq5pg/0.jpg",
        skills: ["Data Cleaning,", "Conditional Formatting", "Dynamic Tables", "Excel Charts", "Excel Functions"],
        difficulty: "Beginner to Intermediate",
        videoId: "euUVz5eq5pg"
      },
      {
        id: "p6",
        title: "Police Encounter Case Study using Tableau",
        description: "Learn how to use Tableau for a police encounter case study. Explore techniques like Union, Binning, and dashboard presentation to visualize and analyze crime data..",
        image: "https://img.youtube.com/vi/lUkqn3_hjoY/0.jpg",
        skills: ["Union in Tableau", "Binning in Tableau", "Data Visualization", "Tableau Calculations", "Tableau Functions"],
        difficulty: "Beginner to Intermediate",
        videoId: "lUkqn3_hjoY"
      }
    ],
  },
  {
    id: '6',
    title: "Data Analytics With Visualization",
    description: "Learn to analyze and visualize data, work on industry projects, earn a prestigious certificate, and become a job-ready data analyst within 12-14 months.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Deep Learning",
    students: 1243,
    metaData: {
      title: "Best Data Analytics With Visualization Online with Placement Support",
      description: "Join 4.8/5 rated Data Analytics course with 230 hours of live training, 50+ assignments, 30+ case studies, & 10+ industry projects. IBM Certified.",
      bio: "Learn to analyze and visualize data, work on industry projects, earn a prestigious certificate, and become a job-ready data analyst within 12-14 months."

    },
    duration: "14 weeks",
    rating: 4.8,
    reviewCount: 298,
    isFeatured: true,
    slug: "data-analytics-course",
    longDescription: "In this data analyst course, you will learn how to manage and analyze data using powerful tools like Excel, SQL, Python, Power BI, etc. The course teaches you how to create clear and impactful visualizations like charts, graphs, and dashboards that communicate your findings effectively.\n\n This data analytics certification also covers topics like predictive modeling, business statistics, machine learning, and big data with Hadoop, Spark, and Scala.\n\n You will work on real-world projects in retail, healthcare, finance, education, and the aviation industry. This will help you gain hands-on experience and build a portfolio that showcases your skills to employers. By the end of the course, you will be an ideal job candidate for data analyst roles."
    , instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
        , isDirector: true
      }
    ],
    outcomes: [
      "Analyze and manage data using Excel, SQL, Python, Power BI",
      "Create compelling dashboards and visual reports for effective business storytelling",
      "Apply statistical methods and predictive modeling to draw data-driven insights",
      "Work on 10+ industry projects and 30+ case studies across sectors like finance, healthcare, and retail",
      "Gain job-ready skills with 1:1 mentorship, resume support, and lifetime placement assistance"
    ],
    curriculum: [
      {
        id: "m1",
        title: "Advance Excel",
        duration: "28 hrs",
        topics: [
          { id: "t1", title: "Data Hygiene – Clean, structure, and prepare your dataset", duration: "1.25 hrs" },
          { id: "t2", title: "Formatting – Number and table formatting for clarity", duration: "1.25 hrs" },
          { id: "t3", title: "Filtering & Sorting – Auto filters, advanced filters, custom sorting", duration: "1.5 hrs" },
          { id: "t4", title: "Cell Referencing – Relative, absolute references & formula handling", duration: "1.5 hrs" },
          { id: "t5", title: "Basic Functions – SUM, AVERAGE, COUNT, PRODUCT, etc.", duration: "1.75 hrs" },
          { id: "t6", title: "Date Functions – TODAY, DATEDIF, EOMONTH, WEEKDAY, etc.", duration: "1.5 hrs" },
          { id: "t7", title: "Conditional Functions – SUMIFS, COUNTIFS, AVERAGEIFS", duration: "2 hrs" },
          { id: "t8", title: "Database Functions – DSUM, DAVERAGE using criteria tables", duration: "1.25 hrs" },
          { id: "t9", title: "Dynamic Arrays (Google Sheets) – FILTER, SORT, UNIQUE, TEXTJOIN", duration: "1.5 hrs" },
          { id: "t10", title: "Pivot Tables – Layout, grouping, calculated fields, summarizing", duration: "2.5 hrs" },
          { id: "t11", title: "Charts – Chart creation, types, usage, sparklines", duration: "2 hrs" },
          { id: "t12", title: "Dashboards – Planning, business insights, slicers, summaries", duration: "2.5 hrs" },
          { id: "t13", title: "Logical Functions – IF, AND, OR, IFERROR, SWITCH etc", duration: "1.75 hrs" },
          { id: "t14", title: "Lookup Functions – VLOOKUP, XLOOKUP, MATCH, INDIRECT etc", duration: "2.25 hrs" },
          { id: "t15", title: "Text Functions – LEFT, MID, FIND, SUBSTITUTE, CONCAT etc", duration: "1.5 hrs" },
          { id: "t16", title: "Conditional Formatting – Color scales, data bars, formulas", duration: "1.25 hrs" },
          { id: "t17", title: "Data Validation – Lists, error alerts, dependent dropdowns", duration: "1 hr" },
          { id: "t18", title: "Goal Seek & Solver – Solve optimization and reverse calculations", duration: "1.25 hrs" },
          { id: "t19", title: "Gen AI - How to Use Gen AI in Microsoft Excel, Use Lab.Generative", duration: "0.75 hrs" },
          
          { id: "t21", title: "PROJECTS: Built a Sales Performance Dashboard using Pivot Tables and conditional formatting." },
          { id: "t22", title: "PROJECTS: Automated Expense Tracking and Budget Analysis with formulas and dynamic charts." },
          { id: "t23", title: "PROJECTS: Create a Retail Inventory Optimizer using data validation and lookup functions." },
        ]
      },

      {
        id: "m2",
        title: "SQL",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "SQL Basics: Introduction to Database Management System (DBMS), Introduction to Google BigQuery and MySQL, CRUD Operations", duration: "3 hrs" },
          { id: "t2", title: "Data Manipulation and Transformation: Logical, Numerical, and Mathematical Operators, Conditional Statements", duration: "2.5 hrs" },
          { id: "t3", title: "Data Cleaning: Type Casting, Date/Time Formatting, Text Formatting", duration: "2 hrs" },
          { id: "t4", title: "Pattern Matching: LIKE Operator, REGEXP Functions", duration: "1.5 hrs" },
          { id: "t5", title: "Joins and Relational Databases: Keys, Join Types, Indexing, Normalization", duration: "4 hrs" },
          { id: "t6", title: "Aggregation and Grouping: Aggregate Functions, GROUP BY, CTEs, Variables", duration: "3.5 hrs" },
          { id: "t7", title: "Window Functions: RANK, DENSE_RANK, ROW_NUMBER, LEAD/LAG", duration: "2.5 hrs" },
          { id: "t8", title: "Data Reusability: Views, Stored Procedures, UDFs", duration: "2 hrs" },
          { id: "t9", title: "Subqueries: Simple, EXISTS/NOT EXISTS, Correlated", duration: "1.5 hrs" },
          { id: "t10", title: "Cloud Services: BigQuery Querying, Sharing Results, Permissions, Scheduling", duration: "1.5 hrs" },
          { id: "t11", title: "Online SQL Platforms: MySQL Workbench, Online IDEs, Cloud Storage Integration", duration: "0.5 hrs" },
          { id: "t12", title: "PROJECTS: Designed a Customer Insights Database and extracted KPIs using complex JOIN queries.", duration: "0.5 hrs" },
          { id: "t13", title: "PROJECTS: Built a Sales Trend Analyzer with window functions and aggregate queries.", duration: "0.5 hrs" },
          { id: "t14", title: "PROJECTS: Developed an Order Fulfilment Tracker using CTEs and performance optimization.", duration: "0.5 hrs" }
        ]
      },

      {
        id: "m3",
        title: "Python programming for Beginners",
        duration: "2O hrs",
        topics: [
          { id: "t1", title: "Python Environment: Setup, Jupyter Notebooks, and Virtual Environments", duration: "1.5 hrs" },
          { id: "t2", title: "Core Programming: Syntax, Variables, Data Types, and Built-in Functions", duration: "2.5 hrs" },
          { id: "t3", title: "Collections & Iterations: Lists, Tuples, Sets, Dictionaries, and Comprehensions", duration: "3 hrs" },
          { id: "t4", title: "Control Flow: Conditionals, Loops, and Exception Handling", duration: "2.5 hrs" },
          { id: "t5", title: "Functions & File Handling: Modules, CSV Processing, and Basic Debugging", duration: "3 hrs" },
          { id: "t6", title: "AI & App Integration: ChatGPT Debugging, Streamlit, and Generative AI Apps", duration: "4 hrs" },
          { id: "t7", title: "PROJECTS: Student Grade Calculator (Loops, Averages, and CSV Export)", duration: "2 hrs" },
          { id: "t8", title: "PROJECTS: Expense Tracker (Categorization and Summarization using Dicts/Lists)", duration: "2 hrs" },
          { id: "t9", title: "PROJECTS: Weather Data Analyzer (Pandas, CSV Analysis, and Visual Summaries)", duration: "2.5 hrs" }
        ]
      }
      ,

      {
        id: "m4",
        title: "Business Statistics- Recorded",
        duration: "10 hrs",
        topics: [
          { id: "t1", title: "Foundations: Data Types, Measurement Scales, and Descriptive Statistics", duration: "3 hrs" },
          { id: "t2", title: "Probability Distributions: Binomial, Poisson, and Normal Distributions", duration: "4 hrs" },
          { id: "t3", title: "Sampling Theory: Central Limit Theorem and Sampling Distributions", duration: "3.5 hrs" },
          { id: "t4", title: "Inferential Statistics: Estimation, Hypothesis Testing (t-test, z-test, Chi-square, ANOVA)", duration: "6 hrs" },
          { id: "t5", title: "Predictive Foundations: Correlation, Regression Basics, and Residual Analysis", duration: "4.5 hrs" },
          { id: "t6", title: "Time Series Basics: Decomposition and Simple Forecasting Techniques", duration: "3.5 hrs" }
        ]
      }
      ,

      {
        id: "m5",
        title: "Python Predictive Modelling & Basic Machine learning",
        duration: "42 hrs",
       topics: [
          { id: "t1", title: "Advanced Pandas: Merge, Join, GroupBy, Pivot, and Data Aggregation", duration: "4 hrs" },
          { id: "t2", title: "Data Preprocessing: Imputation, Outlier Detection, Scaling, and Normalization", duration: "3.5 hrs" },
          { id: "t3", title: "Exploratory Data Analysis (EDA): Visualization and Insight Generation with Matplotlib/Seaborn", duration: "3.5 hrs" },
          { id: "t4", title: "Feature Engineering & Pipelines: Encoding, Binning, and Workflow Automation", duration: "3 hrs" },
          { id: "t5", title: "Supervised Learning: Linear & Logistic Regression, Decision Trees, KNN, and Naïve Bayes", duration: "5 hrs" },
          { id: "t6", title: "Ensemble Techniques: Random Forest, Gradient Boosting, Bagging, and Stacking", duration: "4.5 hrs" },
          { id: "t7", title: "Model Evaluation: Cross-Validation, Confusion Matrix, ROC-AUC, and F1-Score", duration: "3 hrs" },
          { id: "t8", title: "Explainability & Deployment: SHAP Values, Feature Importance, and Flask/Streamlit Intro", duration: "3 hrs" },
          { id: "t9", title: "AI in ML: Prompt-based Interpretation, Automated EDA, and Copilot Documentation", duration: "2.5 hrs" },
          { id: "t10", title: "PROJECTS: Sales Forecasting Model (Regression and Time-Based Engineering)", duration: "3 hrs" },
          { id: "t11", title: "PROJECTS: Customer Churn Prediction (Classification for Retention)", duration: "3 hrs" },
          { id: "t12", title: "PROJECTS: Credit Risk Scoring (Ensemble Models for Default Probability)", duration: "3.5 hrs" }
        ]
      }
      ,
      {
        id: "m6",
        title: "PowerBI,",
        duration: "24 HOURS",
        topics: [
          { id: "t1", title: "Introduction: Data Visualization, Interface, and Business Problem-Solving", duration: "3 hrs" },
          { id: "t2", title: "Connecting & Shaping Data: Power Query Cleaning, Transformation, and Merging", duration: "4.5 hrs" },
          { id: "t3", title: "Data Modeling: Normalization, Star Schemas, Relationships, and Filter Flow", duration: "4 hrs" },
          { id: "t4", title: "DAX Analysis: Calculated Columns/Measures, Functions, and Time Intelligence", duration: "6 hrs" },
          { id: "t5", title: "Visualization: Interactive Reports, Charts, Slicers, and Drillthroughs", duration: "5 hrs" },
          { id: "t6", title: "AI & Custom Visuals: Decomposition Trees, Q&A, and Key Influencers", duration: "2.5 hrs" },
          { id: "t7", title: "Deployment & Security: Power BI Service, Refresh Schedules, and RLS", duration: "2.5 hrs" },
          { id: "t8", title: "SQL Integration: Database Connections and Custom Queries", duration: "2 hrs" },
          { id: "t9", title: "PROJECTS: Manufacturing Performance Dashboard", duration: "3.5 hrs" },
          { id: "t10", title: "PROJECTS: Subscription Revenue & Churn Tracker", duration: "3.5 hrs" },
          { id: "t11", title: "PROJECTS: E-commerce Sales & Customer 360 Dashboard", duration: "4 hrs" }
        ]
      }
      ,
      {
        id: "m7",
        title: "Prep AI 4 months Premium Subscription,",
        duration: "24 HOURS",
       topics: [
          { id: "t1", title: "Diagnose: Unlimited Interview Readiness Quizzes & Instant Feedback", duration: "3.5 hrs" },
          { id: "t2", title: "Personalized Learning: Gap Analysis & Contextual Learning from Uploaded Files", duration: "4.5 hrs" },
          { id: "t3", title: "Resume Excellence: ATS-Friendly Builder & Skills Matching Score", duration: "4 hrs" },
          { id: "t4", title: "Recruiter Sync: Resume-to-Recruiter Matching & Strategic Networking", duration: "3 hrs" },
          { id: "t5", title: "AI Tutor: Unlimited Real-Time Technical Doubt Clearing", duration: "5 hrs" },
          { id: "t6", title: "Live Simulation: Unlimited Speech-to-Speech Mock Interviews", duration: "6.5 hrs" },
          { id: "t7", title: "Company Prep: Tailored Recruiter Queries & Strategic Interview Prep", duration: "3.5 hrs" },
          { id: "t8", title: "AI Career Coach: 1:1 Personalized Mentoring & Career Query Support", duration: "4.5 hrs" }
        ]
      }
    ],

    projects: [
      {
        id: "p1",
        title: "How To Choose Ideal Residence Using SQL",
        description: "Master SQL for real estate data analysis. Learn how to use SELECT statements, create databases, and import/export data, while performing calculations and reporting in SQL.",
        image: "https://img.youtube.com/vi/hzxawPxuks8/0.jpg",
        skills: ["SQL ", "SELECT", "CREATE DATABASE", "MySQL Connections", "MySQL Connections", "Data Export", "Excel to MySQL", "CSV Conversion", "SQL LIMIT", "SQL COUNT", "SQL COUNT", "Data Summarization", "Reporting in SQL"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "hzxawPxuks8"
      },
      {
        id: "p2",
        title: "Power BI Live Case Study | Web Analytics",
        description: "Learn to create a Power BI dashboard from scratch. Explore website click analysis, data visualization techniques, filters, fields, and Power Query transformations in Power BI.",
        image: "https://img.youtube.com/vi/-XUN_3Hama0/0.jpg",
        skills: ["Power BI", "Power Query", "Data Transformation", "Filters", "Fields in Power BI", "Power BI Cards", "Power BI Charts", "Bar Charts", "Slicers", "Data Visualization", "Power BI Dashboard", "Date Handling in Power BI"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "-XUN_3Hama0"
      },
      {
        id: "p3",
        title: "Tableau Live Case | WPL Dataset | Identify the Strategies used in WPL Auctions",
        description: "Analyze the Women's Premier League (WPL) auction strategies using Tableau. Learn to create interactive dashboards and visualize key data points for team performance insights.",
        image: "https://img.youtube.com/vi/THyEuZ0xHC8/0.jpg",
        skills: ["Tableau", "Tableau Dashboard", "Tableau Drag and Drop", "Tableau Sheets", "Data Source in Tableau", "Tableau Live and Extract", "Tableau Stories", "Tableau Filters", "Tableau Visualizations", "Tableau Functions", "Tableau Headers"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "THyEuZ0xHC8"
      },
      {
        id: "p4",
        title: "Analyze Sales of Smartphones on Amazon",
        description: "Analyze smartphone sales data using Excel. Learn to create dashboards, perform quarterly revenue analysis, and uncover insights using key Excel functions.",
        image: "https://img.youtube.com/vi/oWy7ZkS3axE/0.jpg",
        skills: ["Excel Dashboards", "PivotTables", "PivotCharts", " VLOOKUP", "SUMIF", "Data Validation", "Conditional Formatting", "Excel Formulas", " Data Analysis", "Revenue Analysis", "Excel Charts"],
        difficulty: "Beginner to Intermediate",
        videoId: "oWy7ZkS3axE"
      },
      // {
      //   id: "p5",
      //   title: "AirBNB Business Case Study - Tableau Dashboarding",
      //   description: "Analyze AirBNB business data and create insightful visualizations using Tableau. Learn key techniques for dashboarding, filtering, and data presentation to drive business decisions.",
      //   image: "https://img.youtube.com/vi/4cx9_OSv4Fo/0.jpg",
      //   skills: ["Tableau", "Tableau Dashboarding", "Tableau Dashboarding", "Filters", "Tableau Calculations", "Interactive Dashboards", "Data Connections", "Data Blending", "Tableau Filters"],
      //   difficulty: "Beginner to Intermediate",
      //   videoId: "4cx9_OSv4Fo"
      // },
      {
        id: "p6",
        title: "Analyzing Netflix Originals & IMDB Scores",
        description: "Analyze Netflix Originals data with SQL, utilizing Window Functions, CTEs, and various SQL queries to explore trends and uncover insights in the dataset.",
        image: "https://img.youtube.com/vi/Wt8jyPvdGRo/0.jpg",
        skills: ["SQL Queries", "Window Functions", "Common Table Expressions (CTEs)", "Date Functions", "JOINs", "GROUP BY", "HAVING", "ORDER BY", "String Functions", "SQL Aggregates"],
        difficulty: "Intermediate",
        videoId: "Wt8jyPvdGRo"
      }
      // {
      //   id: "p6",
      //   title: "Employee Promotion Prediction",
      //   description: " Build a machine learning model to predict employee promotions based on performance and profile attributes",
      //   image: "https://img.youtube.com/vi/vRsoANUaAhI/0.jpg",
      //   skills: ["Classification Models", "Feature Engineering", "Model Evaluation using Python"],
      //   difficulty: "Advanced",
      //   videoId: "vRsoANUaAhI"
      // }
    ]

  },
  {
    id: '7',
    title: "Data Analytics and Generative AI Course",
    description: "Learn business analytics with advanced tools like Excel, SQL, Python, R, Tableau, etc., and become a data expert employers want to hire.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Deep Learning",
    students: 1243,
    metaData: {
      title: "Data Analyst & Business Analytics Course with IBM [4.8/5]",
      description: "Join Business Analytics course in collaboration with IBM. Learn in Classroom / Online Live & work on 20+ industry projects with IIT, IIM faculty",
      bio: "Learn business analytics with advanced tools like Excel, SQL, Python, R, Tableau, etc., and become a data expert employers want to hire."

    },
    // duration: "14 weeks",
    duration: "",
    rating: 4.8,
    reviewCount: 298,
    isFeatured: true,
    slug: "data-analytics-and-generative-ai-course",
    longDescription: "This business analytics course in India will make you a job-ready data expert in 8 months. You will learn dashboarding and automation in Excel, database management in SQL, data visualization in Tableau, predictive modeling with R, and data science in Python. The course also teaches you business statistics and machine learning essentials like decision trees, ensemble learning, text mining, etc.\n\n But, theoretical knowledge alone is not enough. That’s why we let you solidify what you learn by working on real-life projects. For instance, you will work on several projects related to industries like finance, marketing, retail, automobile, etc.\n\n This business analyst course is ideal for MBA students, engineering students in their third or final year, B.Sc. or M.Sc. students, working professionals in banking, finance, or IT, and undergraduate or postgraduate students studying math, statistics, economics, commerce, or finance."
    , instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
        , isDirector: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
      }
    ],
    outcomes: [
      "Analyze business data effectively using Excel, SQL, Python, R",
      "Build interactive dashboards and automate reports to support decision-making",
      "Solve industry problems across finance, marketing, retail, and more with 10+ projects",
      "Communicate insights clearly and prepare for interviews with 1:1 expert guidance",
      "Get lifetime access to sessions and hands-on practice with case studies and tools"
    ],
    curriculum: [
      {
        id: "m1",
        title: "Advanced Excel",
        duration: "32 hrs",
        topics: [
          { id: "t1", title: "Basic to Advanced Functions", duration: "" },
          { id: "t2", title: "Data Analysis", duration: "" },
          { id: "t3", title: "Reporting using Pivot Tables", duration: "" },
          { id: "t4", title: "Data Visualization", duration: "" },
          { id: "t5", title: "Data Cleaning and Dashboarding", duration: "" },
          { id: "t6", title: "AI and ChatGPT integration", duration: "" }

        ]
        // topics: [
        //   { id: "t1", title: "Data Hygiene – Clean, structure, and prepare your dataset", duration: "1.25 hrs" },
        //   { id: "t2", title: "Formatting – Number and table formatting for clarity", duration: "1.25 hrs" },
        //   { id: "t3", title: "Filtering & Sorting – Auto filters, advanced filters, custom sorting", duration: "1.5 hrs" },
        //   { id: "t4", title: "Cell Referencing – Relative, absolute references & formula handling", duration: "1.5 hrs" },
        //   { id: "t5", title: "Basic Functions – SUM, AVERAGE, COUNT, PRODUCT, etc.", duration: "1.75 hrs" },
        //   { id: "t6", title: "Date Functions – TODAY, DATEDIF, EOMONTH, WEEKDAY, etc.", duration: "1.5 hrs" },
        //   { id: "t7", title: "Conditional Functions – SUMIFS, COUNTIFS, AVERAGEIFS", duration: "2 hrs" },
        //   { id: "t8", title: "Database Functions – DSUM, DAVERAGE using criteria tables", duration: "1.25 hrs" },
        //   { id: "t9", title: "Dynamic Arrays (Google Sheets) – FILTER, SORT, UNIQUE, TEXTJOIN", duration: "1.5 hrs" },
        //   { id: "t10", title: "Pivot Tables – Layout, grouping, calculated fields, summarizing", duration: "2.5 hrs" },
        //   { id: "t11", title: "Charts – Chart creation, types, usage, sparklines", duration: "2 hrs" },
        //   { id: "t12", title: "Dashboards – Planning, business insights, slicers, summaries", duration: "2.5 hrs" },
        //   { id: "t13", title: "Logical Functions – IF, AND, OR, IFERROR, SWITCH etc", duration: "1.75 hrs" },
        //   { id: "t14", title: "Lookup Functions – VLOOKUP, XLOOKUP, MATCH, INDIRECT etc", duration: "2.25 hrs" },
        //   { id: "t15", title: "Text Functions – LEFT, MID, FIND, SUBSTITUTE, CONCAT etc", duration: "1.5 hrs" },
        //   { id: "t16", title: "Conditional Formatting – Color scales, data bars, formulas", duration: "1.25 hrs" },
        //   { id: "t17", title: "Data Validation – Lists, error alerts, dependent dropdowns", duration: "1 hr" },
        //   { id: "t18", title: "Goal Seek & Solver – Solve optimization and reverse calculations", duration: "1.25 hrs" },
        //   { id: "t19", title: "Gen AI - How to Use Gen AI in Microsoft Excel, Use Lab.Generative", duration: "0.75 hrs" },
        //   { id: "t20", title: "ChatGPT - How to use Prompt engineering for Data Analysis", duration: "0.75 hrs" }
        // ]
      },

      {
        id: "m2",
        title: "MySQL",
        duration: "32 hrs",
        // topics: [
        //   { id: "t1", title: "SQL Basics: Introduction to Database Management System (DBMS), Introduction to Google BigQuery and MySQL, CRUD Operations", duration: "3 hrs" },
        //   { id: "t2", title: "Data Manipulation and Transformation: Logical, Numerical, and Mathematical Operators, Conditional Statements", duration: "2.5 hrs" },
        //   { id: "t3", title: "Data Cleaning: Type Casting, Date/Time Formatting, Text Formatting", duration: "2 hrs" },
        //   { id: "t4", title: "Pattern Matching: LIKE Operator, REGEXP Functions", duration: "1.5 hrs" },
        //   { id: "t5", title: "Joins and Relational Databases: Keys, Join Types, Indexing, Normalization", duration: "4 hrs" },
        //   { id: "t6", title: "Aggregation and Grouping: Aggregate Functions, GROUP BY, CTEs, Variables", duration: "3.5 hrs" },
        //   { id: "t7", title: "Window Functions: RANK, DENSE_RANK, ROW_NUMBER, LEAD/LAG", duration: "2.5 hrs" },
        //   { id: "t8", title: "Data Reusability: Views, Stored Procedures, UDFs", duration: "2 hrs" },
        //   { id: "t9", title: "Subqueries: Simple, EXISTS/NOT EXISTS, Correlated", duration: "1.5 hrs" },
        //   { id: "t10", title: "Cloud Services: BigQuery Querying, Sharing Results, Permissions, Scheduling", duration: "1.5 hrs" },
        //   { id: "t11", title: "Online SQL Platforms: MySQL Workbench, Online IDEs, Cloud Storage Integration", duration: "0.5 hrs" }
        // ]
        topics: [
          { id: "t1", title: " Database Management", duration: "" },
          { id: "t2", title: " SQL Queries", duration: "" },
          { id: "t3", title: "Data Retrieval", duration: "" },
          { id: "t4", title: "Database Design", duration: "" },
          { id: "t5", title: "Performance Optimization", duration: "4 hrs" },
          { id: "t6", title: "AI tools to auto generate and optimize queries", duration: "" },

        ]
      },


      {
        id: "m3",
        title: "Power BI",
        duration: "28 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to R: R Console, RStudio Interface", duration: "1.5 hrs" },
        //   { id: "t2", title: "R Data Structures: Vectors and Matrices", duration: "2 hrs" },
        //   { id: "t3", title: "Programming Basics: Conditions, Loops, Functions", duration: "2.5 hrs" },
        //   { id: "t4", title: "DataFrames: Creation and Manipulation", duration: "2 hrs" },
        //   { id: "t5", title: "Advanced Programming: dplyr and Essential Packages", duration: "2.5 hrs" },
        //   { id: "t6", title: "Statistics: Probability Distributions, Hypothesis Testing", duration: "2 hrs" },
        //   { id: "t7", title: "Data Visualization: ggplot2 Fundamentals", duration: "1.5 hrs" },
        //   { id: "t8", title: "Linear Regression: Academic Performance Prediction Project", duration: "2 hrs" },
        //   { id: "t9", title: "Logistic Regression: Telecom Customer Churn Project", duration: "2 hrs" },
        //   { id: "t10", title: "Decision Trees: Loan Approval Prediction Project", duration: "2 hrs" },
        //   { id: "t11", title: "Time Series & Clustering: Sales Forecasting and Customer Segmentation Projects", duration: "2 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Power BI Desktop Basics", duration: "" },
          { id: "t2", title: "Power Query", duration: "" },
          { id: "t3", title: "Data Transformation and Modeling", duration: "" },
          { id: "t4", title: "Creating Reports and Dashboards", duration: "" },
          { id: "t5", title: "DAX (Data Analysis Expressions)", duration: "" },
          { id: "t6", title: "Advanced Chart Types", duration: "" },
          { id: "t7", title: "Power BI Service", duration: "" },
          { id: "t8", title: "Role Level Security", duration: "" },
          { id: "t9", title: "Refresh Schedule", duration: "" },
          { id: "t10", title: "AI Visuals", duration: "" }
        ]

      },
      {
        id: "m4",
        title: "Power Pivot",
        duration: "12 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to Python: Installation, IDEs (VS Code, Jupyter)", duration: "2 hrs" },
        //   { id: "t2", title: "Core Data Types: Numbers, Strings, Booleans", duration: "3 hrs" },
        //   { id: "t3", title: "Advanced Data Structures: Lists, Tuples, Sets, Dictionaries", duration: "4 hrs" },
        //   { id: "t4", title: "Program Control: Conditionals, Loops, Comprehensions", duration: "3 hrs" },
        //   { id: "t5", title: "Functions & NumPy: Custom Functions, Vectorized Operations", duration: "3.5 hrs" },
        //   { id: "t6", title: "Pandas Basics: DataFrame Operations, Data Cleaning", duration: "4 hrs" },
        //   { id: "t7", title: "Pandas Advanced: GroupBy, Merging, Pivoting", duration: "3.5 hrs" },
        //   { id: "t8", title: "EDA: Univariate/Bivariate Analysis, Correlation", duration: "3 hrs" },
        //   { id: "t9", title: "Linear Regression: Ad Revenue Prediction Project", duration: "2.5 hrs" },
        //   { id: "t10", title: "Logistic Regression: Click-Through Rate Prediction Project", duration: "2.5 hrs" },
        //   { id: "t11", title: "Decision Trees: Used Car Pricing Project", duration: "2 hrs" },
        //   { id: "t12", title: "Time Series: Retail Sales Forecasting Project", duration: "2 hrs" },
        //   { id: "t13", title: "Deployment: API Integration, GitHub, Model Serving", duration: "2 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Import from Multiple Sources", duration: "" },
          { id: "t2", title: "Data Cleaning and Reshaping", duration: "" },
          { id: "t3", title: "Automate Refresh with Real-World Cases", duration: "" },
          { id: "t4", title: "Build Data Model and Define Relationships", duration: "" },
          { id: "t5", title: "Write Essential DAX for Metrics", duration: "" },
          { id: "t6", title: "AI Tools for M Codes", duration: "" }
        ]

      }

      ,
      {
        id: "m5",
        title: "Gen AI",
        duration: "12 hrs",
        // topics: [
        //   { id: "t1", title: "Making Macro Do Automated Tasks for You", duration: "6.5 hrs" },
        //   { id: "t2", title: "Programming Concepts (Variables, Loops, Conditions)", duration: "8.25 hrs" },
        //   { id: "t3", title: "Analysis Using VBA (Data Cleaning, PivotTables)", duration: "6.75 hrs" },
        //   { id: "t4", title: "Creating Dashboards (Forms, Dynamic Charts)", duration: "4.5 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Tokenization", duration: "" },
          { id: "t2", title: "Word Embedding", duration: "" },
          { id: "t3", title: "GANs (Generative Adversarial Networks)", duration: "" },
          { id: "t4", title: "Transformer Models", duration: "" },
          { id: "t5", title: "BERT (Bidirectional Encoder Representations from Transformers)", duration: "" }
        ]

      },
      {
        id: "m6",
        title: "Python",
        duration: "20 hrs",
        // topics: [
        //   { id: "t1", title: "Making Macro Do Automated Tasks for You", duration: "6.5 hrs" },
        //   { id: "t2", title: "Programming Concepts (Variables, Loops, Conditions)", duration: "8.25 hrs" },
        //   { id: "t3", title: "Analysis Using VBA (Data Cleaning, PivotTables)", duration: "6.75 hrs" },
        //   { id: "t4", title: "Creating Dashboards (Forms, Dynamic Charts)", duration: "4.5 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Python", duration: "" },
          { id: "t2", title: "Strings", duration: "" },
          { id: "t3", title: "Lists", duration: "" },
          { id: "t4", title: "Dictionary", duration: "" },
          { id: "t5", title: "User Input", duration: "" },
          { id: "t6", title: "Conditional Statements", duration: "" },
          { id: "t7", title: "If Else", duration: "" },
          { id: "t8", title: "Tuples", duration: "" },
          { id: "t9", title: "Sets", duration: "" },
          { id: "t10", title: "Loops", duration: "" },
          { id: "t11", title: "For Loop", duration: "" },
          { id: "t12", title: "While Loop", duration: "" },
          { id: "t13", title: "Break", duration: "" },
          { id: "t14", title: "Continue", duration: "" },
          { id: "t15", title: "Try Except", duration: "" },
          { id: "t16", title: "Dictionary Comprehension", duration: "" },
          { id: "t17", title: "Streamlit", duration: "" },
          { id: "t18", title: "Gen AI App", duration: "" },
          { id: "t19", title: "AI Cover Letter", duration: "" },
          { id: "t20", title: "GitHub", duration: "" },
          { id: "t21", title: "Functions", duration: "" },
          { id: "t22", title: "User Defined Functions", duration: "" },
          { id: "t23", title: "Packages", duration: "" },
          { id: "t24", title: "Modules", duration: "" }
        ]


      }
    ],
    projects: [
      {
        id: "p1",
        title: "How To Take Business Decisions Using Excel?",
        description: "Learn how to use Excel for business decision-making. Explore Excel tools for data analysis, creating actionable insights, and supporting data-driven business strategies.",
        image: "https://img.youtube.com/vi/I9WfrNsMsgQ/0.jpg",
        skills: ["Excel", "Excel Data Analysis", "Excel Functions", "Excel Charts", "PivotTables", "Data Visualization in Excel", "Conditional Formatting", "Excel Formulas", "Business Decision-Making", "Excel Reports"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "I9WfrNsMsgQ"
      }
      ,
      {
        id: "p2",
        title: "Decision Trees in R for Business Analytics",
        description: "Learn how to use Decision Trees in R for business analytics. Build models, make predictions, and analyze data using key R functions and decision tree techniques.",
        image: "https://img.youtube.com/vi/yfjyYaHJtNU/0.jpg",
        skills: ["R", "Decision Trees", "rpart", "CART", "Data Modeling in R", "Predictive Modeling", "R for Business Analytics", "Data Analysis", "Model Evaluation", "Business Decision-Making"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "yfjyYaHJtNU"
      },
      {
        id: "p3",
        title: "Swiggy Business Case Study | Advanced Excel Dashboarding",
        description: "Analyze Swiggy's business data using advanced Excel techniques. Learn to create dashboards, analyze profitability, and structure data for effective decision-making.",
        image: "https://img.youtube.com/vi/cw_XmlA-y5M/0.jpg",
        skills: ["Advanced Excel", "Excel Dashboard", "Excel Formulas", "Data Structuring", "Profitability Index", "Data Dictionary", "Excel Charts", "PivotTables", "Data Import", "Excel Analysis", "Excel Functions"],
        difficulty: "Intermediate",
        videoId: "cw_XmlA-y5M"
      }
      ,
      {
        id: "p4",
        title: "Hotstar Detailed Case Study | Disney+ Hotstar: SQL Data Analysis",
        description: "Analyze Disney+ Hotstar data using SQL to uncover key insights into content types, production countries, and performance trends.",
        image: "https://img.youtube.com/vi/vqnmnUzE7R8/0.jpg",
        skills: ["SQL Queries", "SQL JOINs", "SQL Aggregates", "GROUP BY", "Data Analysis with SQL", "SQL Functions", "SQL Filtering", "SQL Data Analysis", "SQL Views", "SQL Subqueries", "Table Analysis in SQL"],
        difficulty: "Beginner to Intermediate",
        videoId: "vqnmnUzE7R8"
      }
      ,
      {
        id: "p5",
        title: "SQL for Data Analysis | SQL Project | Sentiment Analysis",
        description: "Dive into SQL data analysis for sentiment analysis. Use MySQL and Excel for data structuring, passenger categorization, and flight distance analysis.",
        image: "https://img.youtube.com/vi/Byum8xHFzYo/0.jpg",
        skills: ["SQL Queries", "MySQL", "GROUP BY", "JOINs", "SQL Filtering", "Data Categorization", "SQL Functions", "Sentiment Analysis", "Data Analysis", "MySQL Workbench", "Data Structuring in SQL"],
        difficulty: "Beginner to Intermediate",
        videoId: "Byum8xHFzYo"
      }

    ]


  },
  {
    id: '8',
    title: "Cloud Data Engineering Course with IIT Guwahati",
    description: "Get coached by IIT professors, learn industry-relevant data engineering skills, complete 30+ real-life projects, and become job-ready in just 45 weeks.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Deep Learning",
    students: 1243,
    metaData: {
      title: "Cloud Data Engineering Course with IIT Guwahati",
      description: "Join IIT Guwahati certified Data Engineering course. Learn Cloud, Azure, Python, SQL, Spark, & work on 30+ projects with lifetime placement support.",
      bio: "Get coached by IIT professors, learn industry-relevant data engineering skills, complete 30+ real-life projects, and become job-ready in just 45 weeks."
    },
    duration: "14 weeks",
    rating: 4.8,
    reviewCount: 298,
    isFeatured: true,
    slug: "iit-data-engineering-course",
    longDescription: "This course is made in collaboration with E&ICT Academy IIT Guwahati. You will be taught directly by professors of IIT Guwahati, attend a special 3-day program at the IIT campus, and get networking opportunities with IIT alumni.\n\n The syllabus is divided into four major sections exploring four primary topics- SQL for data engineering, Python essentials for data, Big Data Processing, and Azure Cloud Engineering.\n\n One of the best data engineering courses in India, it will teach you to build a complete ETL data pipeline on the cloud with in-demand tools like Azure, Hive, MongoDB, Spark, Hadoop, etc. You will also work on 30+ real-life and industry capstone projects to get the ability and confidence to solve actual business problems.\n\n This 45-week program is perfect for both college graduates starting their data journey and working professionals looking to level up their skills. It takes you from the basics to advanced data engineering concepts, helping you land your dream job."
    , instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
        , isDirector: true
      }
    ],

    curriculum: [
      {
        id: "m1",
        title: "SQL for Data Engineering",
        duration: "28 hrs",
        topics: [
          { id: "t1", title: "Basic SQL Queries – SELECT, Filtering, Sorting, Cleaning, Aggregation", duration: "2.5 hrs" },
          { id: "t2", title: "Window Functions – RANK, DENSE_RANK, LEAD, LAG", duration: "2 hrs" },
          { id: "t3", title: "Pattern Matching, LIKE, REGEX, Wildcards", duration: "1.5 hrs" },
          { id: "t4", title: "Advanced Joins, ROLLUP, CUBE, PIVOT, UNPIVOT", duration: "2 hrs" },
          { id: "t5", title: "Subqueries and CTEs – EXISTS, Common Expressions", duration: "2.5 hrs" },
          { id: "t6", title: "Advanced Table Expressions – Derived Tables, Joins, Performance", duration: "2.5 hrs" },
          { id: "t7", title: "Stored Procedures and UDFs", duration: "1.5 hrs" },
          { id: "t8", title: "Capstone Projects – eCommerce, BFSI, Retail Data", duration: "2.5 hrs" },
          { id: "t9", title: "Final Project and Recap – Real-World Cloud SQL Use Case", duration: "2 hrs" }
        ]
      },
      {
        id: "m2",
        title: "Python Essentials for Data Engineering",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "Python Foundations – Data Types, Operators, Logic", duration: "3 hrs" },
          { id: "t2", title: "Loops and Conditional Structures – For, While, If-Else", duration: "2 hrs" },
          { id: "t3", title: "Functions and OOP Concepts", duration: "3 hrs" },
          { id: "t4", title: "Numpy and Data Structures – Arrays, Indexing", duration: "2 hrs" },
          { id: "t5", title: "Data Wrangling with Pandas and SQLAlchemy", duration: "3 hrs" },
          { id: "t6", title: "Advanced DataFrame Operations – Merge, GroupBy, Filtering", duration: "3 hrs" },
          { id: "t7", title: "Memory & Parallel Processing – Efficient Use, Dask", duration: "2 hrs" },
          { id: "t8", title: "Capstone Project – Database Connections, Analysis", duration: "3 hrs" }
        ]
      },
      {
        id: "m3",
        title: "Big Data Processing",
        duration: "32 hrs",
        topics: [
          { id: "t1", title: "Big Data Concepts – Formats, Scaling, Compression", duration: "2 hrs" },
          { id: "t2", title: "Hadoop – HDFS, YARN, Architecture, Daemons", duration: "3 hrs" },
          { id: "t3", title: "MapReduce and Hands-On Word Count", duration: "2.5 hrs" },
          { id: "t4", title: "Apache Hive – Tables, Partitioning, SerDe, UDF", duration: "3 hrs" },
          { id: "t5", title: "Apache Spark Core – RDD, DataFrames, SQL", duration: "4 hrs" },
          { id: "t6", title: "Spark Structured API – Datasets, Schema, Aggregations", duration: "4 hrs" },
          { id: "t7", title: "Spark Optimizations – Resource, Memory, Joins", duration: "3 hrs" },
          { id: "t8", title: "Spark Streaming – DStreams, Stateless vs Stateful", duration: "3 hrs" },
          { id: "t9", title: "Kafka Integration and Real-Time Pipelines", duration: "3 hrs" },
          { id: "t10", title: "MongoDB for Real-Time Pipelines – CRUD, Indexing, Querying", duration: "3.5 hrs" }
        ]
      },
      {
        id: "m4",
        title: "Azure Cloud Engineering",
        duration: "26 hrs",
        topics: [
          { id: "t1", title: "Azure Fundamentals – AD, RBAC, CLI, Identity", duration: "2 hrs" },
          { id: "t2", title: "Virtual Machines, Storage, and Databases – Blob, SQL, Cosmos", duration: "2.5 hrs" },
          { id: "t3", title: "Azure Data Factory – Pipelines, Triggers, Mapping Flows", duration: "3 hrs" },
          { id: "t4", title: "Azure Databricks – Collaborative Processing, Analytics", duration: "2.5 hrs" },
          { id: "t5", title: "Azure Event Hubs and Real-Time Integration", duration: "2 hrs" },
          { id: "t6", title: "Hybrid Cloud – Governance, Federation, Compliance", duration: "3 hrs" },
          { id: "t7", title: "Azure DevOps and Containers – CI/CD, Docker, AKS", duration: "3 hrs" },
          { id: "t8", title: "Azure Functions and Serverless Computing", duration: "2 hrs" },
          { id: "t9", title: "Azure Security Center and Sentinel – Monitoring, Threat Management", duration: "3 hrs" },
          { id: "t10", title: "Capstone Project – Secure and Scalable Azure Deployment", duration: "3 hrs" }
        ]
      }

    ]
    ,
    projects: [
      {
        id: "p1",
        title: "Build Cloud Data Pipeline Using Databricks",
        description: "This video provides an in-depth introduction with real-world project experience, it outlines the career path, key technologies (Hadoop, Spark, Azure), curriculum breakdown, and practical use cases for aspiring data engineers.",
        image: "https://img.youtube.com/vi/aNja1KSqczo/0.jpg",
        skills: ["Apache ", "Big Data", "Azure"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "aNja1KSqczo"
      },
      {
        id: "p2",
        title: "How to Create End-to-End ETL Pipeline",
        description: "Dive deep into practical data solutions using Azure by setting up a complete data pipeline, from storing CSV files in Azure Blob Storage to efficiently transferring data into SQL databases.",
        image: "https://img.youtube.com/vi/yYbU_Bihvdc/0.jpg",
        skills: ["Virtual Machines ", "Azure", "SQL"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "yYbU_Bihvdc"
      },
      {
        id: "p3",
        title: "Data Engineering Career Roadmap 2025",
        description: "Get comprehensive roadmap for anyone looking to start or grow their career in Data Engineering in 2025. You'll understand the real-world data pipeline, in-demand tools (SQL, Python, Spark, Docker, Cloud).",
        image: "https://img.youtube.com/vi/QbI60IMgO_g/0.jpg",
        skills: ["SQL", "Python", "Spark", "Docker", "Cloud"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "QbI60IMgO_g"
      },
      // {
      //   id: "p4",
      //   title: "Superstore Sales Analysis Using Excel ",
      //   description: "Explore Superstore sales data and generate key business insights using Excel. Analyze product lines, profitable cities, gender-based sales performance, month-on-month growth, and create a dashboard to track critical metrics.",
      //   image: "https://img.youtube.com/vi/KGrApiKUR4M/0.jpg",
      //   skills: ["Excel", "Data Analysis", "Business Analytics", "Sales Analytics", "Dashboard", "Business Insights"],
      //   difficulty: "Beginner to Intermediate",
      //   videoId: "KGrApiKUR4M"
      // },
      // {
      //   id: "p5",
      //   title: "Predicting Car Sales using Linear Regression in R",
      //   description: "Analyze Superstore sales data in Excel to uncover insights on product lines, profitable cities, gender-based performance, month-on-month growth, and create a dashboard to track key metrics.",
      //   image: "https://img.youtube.com/vi/8nNgJJH7pMk/0.jpg",
      //   skills: ["R", "Linear Regression", "Car Sales Prediction", "Data Analysis", "Model Evaluation", "Variable Significance"],
      //   difficulty: "Intermediate",
      //   videoId: "8nNgJJH7pMk"
      // },
      // {
      //   id: "p6",
      //   title: "Crime Intelligence Dashboard in Power BI",
      //   description: "Create an interactive, data-driven crime intelligence dashboard using real-world data from the Manchester Police Department. Learn to transform data, set up KPIs, design visualizations, and implement geospatial mapping to analyze crime trends and improve law enforcement efficiency.",
      //   image: "https://img.youtube.com/vi/sVXjAIa7YBs/0.jpg",
      //   skills: ["Power BI", "DAX", "KPI Cards", "Data Transformation", "Data Visualization", "Crime Analysis"],
      //   difficulty: "Intermediate",
      //   videoId: "sVXjAIa7YBs"
      // }
    ],
    outcomes: [
      "Design and build robust data pipelines using Azure, Spark, Hive, Hadoop, and MongoDB",
      "Manage and manipulate structured and unstructured data with advanced SQL and Python",
      "Implement scalable big data architectures to solve real business challenges",
      "Build your portfolio with 30+ real-life projects and capstone case studies across industries",
      "get certified by IVY Guwahati and boost your professional credibility",
      "Receive 1:1 mentorship, resume support, and lifetime placement assistance to land top jobs"
    ],


  },
  {
    id: '9',
    title: "AI for Product Managers",
    description: "Get coached by industry experts through our AI product manager course, master essential AI product management skills, work on 20+ real-world projects, and become job-ready in just 6 weeks.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Deep Learning",
    students: 1098,
    metaData: {
      title: "Become a Future Ready AI Product Manager using Generative AI",
      description: "Upskill in 6 weeks with Ivy’s AI for Product Managers course. Learn Agile, AI tools, 20+ projects & job support. Become a future-ready PM."
    },
    duration: "6 weeks",
    rating: 4.7,
    reviewCount: 20,
    isFeatured: true,
    slug: "ai-product-manager-course",
    longDescription: "This AI for Product Manager course, created with senior AI and product leaders, equips you with the skills to build and ship AI-powered products end-to-end. You’ll be mentored by top practitioners, apply learning to real use-cases, and network with PMs and AI leads across industries.\n\nThe curriculum of this product manager course with placement is structured into key sections, covering AI Problem Discovery & UX, Opportunity Sizing & Feasibility, Prompt/Model Design (LLMs, RAG, agents), Experimentation & Metrics, Road mapping & Stakeholder Management, and Responsible AI Delivery.\n\nThis is one of best course in product management that has hands-on AI+PM programs, it will teach you to scope the right AI bets, design human-in-the-loop workflows, and lead cross-functional teams.\n\n Whether you’re a fresher starting your product management journey or a seasoned professional aiming to lead innovation, this 6-week online course empowers you to turn AI concepts into real product impact.", instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
        , isDirector: true
      }
    ],

    curriculum: [
      {
        id: "m1",
        title: "Strategic AI Thinking for PMs",
        duration: "2hrs",
        topics: [
          { id: "t1", title: "What makes a problem “AI-suitable”: Repeatable, data-rich, fuzzy logic required", duration: "" },
          { id: "t2", title: "The AI Opportunity Matrix: Value vs Feasibility vs Risk", duration: "" },
          { id: "t3", title: "“Build vs Prompt vs Buy” framework: Decide the best approach based on cost, ownership, and capability", duration: "" },
          { id: "t4", title: "Strategic Fit: When AI is a feature vs a foundation", duration: "" },
          { id: "t5", title: "Notion AI vs ClickUp: Two different strategies for AI adoption", duration: "" },
          { id: "t6", title: "Product Growth Example: How Spotify uses AI to personalize, vs operational use in support tools", duration: "" },
          { id: "t7", title: "Hands-On: Map AI opportunities in your product: Identify 3 user or team problems where AI could improve efficiency or decision-making", duration: "" },
        ]
      },
      {
        id: "m2",
        title: "Prompt Engineering in Product Workflows",
        duration: "5 hrs",
        topics: [
          { id: "t8", title: "Model selection: Choose optimal LLMs based on task type, performance, and cost trade-offs", duration: "" },
          { id: "t1", title: "Prompt structure: Role, context, task, examples, constraints", duration: "" },
          { id: "t2", title: "Prompt styles: Zero-shot, few-shot, chain-of-thought (CoT), role prompting", duration: "" },
          { id: "t3", title: "System prompts: Controlling behavior across sessions", duration: "" },
          { id: "t4", title: "Prompt testing: Success rate, robustness, hallucination control", duration: "" },
          { id: "t5", title: "Framework: Prompt Development Lifecycle (write, test, refine, evaluate)", duration: "" },
          { id: "t6", title: "Support Ticket Triage: Auto-categorize and summarize Zendesk conversations", duration: "" },
          { id: "t7", title: "Product Copy Assistant: Generate in-product tooltips or feature descriptions in brand tone", duration: "" },

        ]
      },
      {
        id: "m3",
        title: "Internal AI with RAG & Company Data",
        duration: "4 hrs",
        topics: [
          { id: "t1", title: "What is RAG (Retrieval-Augmented Generation) and when to use it", duration: "" },
          { id: "t2", title: "Vector DBs vs Document DBs: Choosing Pinecone, Weaviate, MongoDB, Elastic", duration: "" },
          { id: "t3", title: "Typical RAG architecture: UI → Query parser → Vector search → Reranker → Response", duration: "" },
          { id: "t4", title: "Business use cases: Internal policy chatbots, knowledge workers, sales playbooks", duration: "" },
          { id: "t5", title: "Internal AI Assistant: Answers policy/HR/legal questions from internal docs", duration: "" },
          { id: "t6", title: "Compliance Tool: Reads regulatory docs to flag risky copy in a PRD", duration: "" },
          { id: "t7", title: "Sales Support Assistant: Suggests customer use cases from old deal notes", duration: "" },

        ]
      },
      {
        id: "m4",
        title: "Rapid AI Prototyping (No-Code Tools)",
        duration: "4 hrs",
        topics: [
          { id: "t1", title: "PromptLayer, Firebase Studio, Replit, Lovable, Streamlit", duration: "" },
          { id: "t2", title: "How to go from idea → prompt → UI → evaluation", duration: "" },
          { id: "t3", title: "Creating AI-driven microtools (assistants, summarizers, generators)", duration: "" },
          { id: "t4", title: "Building 'testable surfaces' for stakeholder demos", duration: "" },
          { id: "t5", title: "Product Feedback Synthesizer: Ingest user feedback and suggest features", duration: "" },
          { id: "t6", title: "AI PRD Generator: Converts bullet notes into PRD format", duration: "" },
          { id: "t7", title: "Copy Review Assistant: Checks product copy for tone, clarity, and word count", duration: "" },

        ]
      },

      {
        id: "m5",
        title: "AI Agents & Workflow Automation",
        duration: "3 hrs",
        topics: [
          { id: "t1", title: "What are AI agents? (MCP, Tool-Use, A2A)", duration: "" },
          { id: "t2", title: "Platforms: n8n, AutoGen, LangGraph", duration: "" },
          { id: "t3", title: "Orchestration concepts: Memory, intent switching, task scheduling", duration: "" },
          { id: "t4", title: "Business use cases: Email sorters, meeting assistants, bug triage bots", duration: "" },
          { id: "t5", title: "Customer Support Agent: Auto-replies to tickets using internal docs + sentiment", duration: "" },
          { id: "t6", title: "Meeting Assistant: Prepares briefs using calendar + past emails", duration: "" },
          { id: "t7", title: "Bug Report Summarizer: Converts GitHub issues into severity-ranked summaries", duration: "" },

        ]
      },
      {
        id: "m6",
        title: "AI Evaluation, Risk & Governance",
        duration: "4 hrs",
        topics: [
          { id: "t1", title: "Why traditional QA doesn’t work for LLMs", duration: "" },
          { id: "t2", title: "Evaluation strategies: Human rating, prompt regression tests, LLM-as-judge", duration: "" },
          { id: "t3", title: "Key metrics: Hallucination rate, accuracy, coverage, completion time", duration: "" },
          { id: "t4", title: "Governance topics: Consent, fairness, prompt security, model drift", duration: "" },
          { id: "t5", title: "Release Generator: Test for bias or hallucination when summarizing dev commits", duration: "" },
          { id: "t6", title: "Prompt Drift Tracker: Compare old vs new outputs from the same prompt", duration: "" },
          { id: "t7", title: "Hands-On: Run an A/B test with Claude vs ChatGPT and compare results with stakeholders", duration: "" },
        ]
      }


    ]

    ,
    projects: [


      
      {
        id: "p4",
        title: "How to Create Telegram AI Bot | Build a Telegram AI Bot for Financial Advisory | Step-by-Step Guide",
        description: "",
        image: "https://img.youtube.com/vi/Ei5rti1OiGg/0.jpg",
        skills: [],
        difficulty: "Intermediate",
        isPractice: true,
        videoId: "Ei5rti1OiGg"
      },
      {
        id: "p5",
        title: "How to Build Agent AI | Build Agent AI Using Gen AI Tool | Detect Fake News Using Gen AI Tool",
        description: "",
        image: "https://img.youtube.com/vi/7E6oQRTbcLs/0.jpg",
        skills: [],
        difficulty: "Intermediate",
        isPractice: true,
        videoId: "7E6oQRTbcLs"
      },
      {
        id: "p6",
        title: "How to Create a Bot with Gen AI | Build Tax Payer Bot with Gen AI ",
        description: "",
        image: "https://img.youtube.com/vi/f8Da8x8KNXE/0.jpg",
        skills: [],
        difficulty: "Intermediate",
        isPractice: true,
        videoId: "f8Da8x8KNXE"
      },
      
    ],
    outcomes: [
      "Master AI-PM foundations: opportunity discovery, AI UX, prompt design, and core LLM/RAG/agent patterns to ship real features.",
      "Manage data, models & risk: assess feasibility, cost/latency, privacy, bias, and deploy guardrails with human-in-the-loop.",
      "Lead cross-functional delivery: write PRDs, define success/guardrail metrics, and align Eng/DS/Design/Legal and GTM teams.",
      "Work with the modern AI+PM toolchain:Figma, Productboard, Jira, Amplitude, Mixpanel, and Retool — alongside ChatGPT, Claude, Gemini, and no-/low-code AI platforms like Flowise, LangGraph, and n8n for RAG, automation, and agent orchestration",
      "Build a portfolio that hires: 20+ labs and case studies (onboarding copilot, RAG assistant, workflow automation, recommendations) plus a capstone.",
      "Get certified & supported: certificate by Ivy, 1:1 mentorship, resume reviews, and career assistance for AI PM roles."
    ],


  },

  {
    id: '10',
    title: "Data science course (Pay after Placement)",
    description: "Learn data science and machine learning skills with tools like Python, SQL, R, Tableau, etc., and land promising jobs for data scientist, analyst, or ML engineer roles.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Deep Learning",
    students: 1098,
    duration: "6 weeks",
    rating: 4.7,
    reviewCount: 20,
    isFeatured: true,
    slug: "no-upfront-fees-data-science-and-ml-course",
    longDescription: "Our Pay After Placement (PAP) program removes upfront financial barriers. You only pay your course fee after you secure a job with a minimum CTC of ₹4 LPA. Backed by NASSCOM certification and Ivy Pro School’s reputation, this program ensures outcome-based learning with guaranteed career opportunities.\n\n "
    , instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
        , isDirector: true
      }
    ],

    curriculum: [
      {
        id: "m1",
        title: "Advance Excel",
        duration: "28 hrs",
        topics: [
          { id: "t1", title: "Data Hygiene – Clean, structure, and prepare your dataset", duration: "1.25 hrs" },
          { id: "t2", title: "Formatting – Number and table formatting for clarity", duration: "1.25 hrs" },
          { id: "t3", title: "Filtering & Sorting – Auto filters, advanced filters, custom sorting", duration: "1.5 hrs" },
          { id: "t4", title: "Cell Referencing – Relative, absolute references & formula handling", duration: "1.5 hrs" },
          { id: "t5", title: "Basic Functions – SUM, AVERAGE, COUNT, PRODUCT, etc.", duration: "1.75 hrs" },
          { id: "t6", title: "Date Functions – TODAY, DATEDIF, EOMONTH, WEEKDAY, etc.", duration: "1.5 hrs" },
          { id: "t7", title: "Conditional Functions – SUMIFS, COUNTIFS, AVERAGEIFS", duration: "2 hrs" },
          { id: "t8", title: "Database Functions – DSUM, DAVERAGE using criteria tables", duration: "1.25 hrs" },
          { id: "t9", title: "Dynamic Arrays (Google Sheets) – FILTER, SORT, UNIQUE, TEXTJOIN", duration: "1.5 hrs" },
          { id: "t10", title: "Pivot Tables – Layout, grouping, calculated fields, summarizing", duration: "2.5 hrs" },
          { id: "t11", title: "Charts – Chart creation, types, usage, sparklines", duration: "2 hrs" },
          { id: "t12", title: "Dashboards – Planning, business insights, slicers, summaries", duration: "2.5 hrs" },
          { id: "t13", title: "Logical Functions – IF, AND, OR, IFERROR, SWITCH etc", duration: "1.75 hrs" },
          { id: "t14", title: "Lookup Functions – VLOOKUP, XLOOKUP, MATCH, INDIRECT etc", duration: "2.25 hrs" },
          { id: "t15", title: "Text Functions – LEFT, MID, FIND, SUBSTITUTE, CONCAT etc", duration: "1.5 hrs" },
          { id: "t16", title: "Conditional Formatting – Color scales, data bars, formulas", duration: "1.25 hrs" },
          { id: "t17", title: "Data Validation – Lists, error alerts, dependent dropdowns", duration: "1 hr" },
          { id: "t18", title: "Goal Seek & Solver – Solve optimization and reverse calculations", duration: "1.25 hrs" },
          { id: "t19", title: "Gen AI - How to Use Gen AI in Microsoft Excel, Use Lab.Generative", duration: "0.75 hrs" },
          { id: "t20", title: "ChatGPT - How to use Prompt engineering for Data Analysis", duration: "0.75 hrs" }
        ]
      },


      {
        id: "m2",
        title: "SQL Queries & Relational Database Management",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "SQL Basics: Introduction to Database Management System (DBMS), Introduction to Google BigQuery and MySQL, CRUD Operations", duration: "3 hrs" },
          { id: "t2", title: "Data Manipulation and Transformation: Logical, Numerical, and Mathematical Operators, Conditional Statements", duration: "2.5 hrs" },
          { id: "t3", title: "Data Cleaning: Type Casting, Date/Time Formatting, Text Formatting", duration: "2 hrs" },
          { id: "t4", title: "Pattern Matching: LIKE Operator, REGEXP Functions", duration: "1.5 hrs" },
          { id: "t5", title: "Joins and Relational Databases: Keys, Join Types, Indexing, Normalization", duration: "4 hrs" },
          { id: "t6", title: "Aggregation and Grouping: Aggregate Functions, GROUP BY, CTEs, Variables", duration: "3.5 hrs" },
          { id: "t7", title: "Window Functions: RANK, DENSE_RANK, ROW_NUMBER, LEAD/LAG", duration: "2.5 hrs" },
          { id: "t8", title: "Data Reusability: Views, Stored Procedures, UDFs", duration: "2 hrs" },
          { id: "t9", title: "Subqueries: Simple, EXISTS/NOT EXISTS, Correlated", duration: "1.5 hrs" },
          { id: "t10", title: "Cloud Services: BigQuery Querying, Sharing Results, Permissions, Scheduling", duration: "1.5 hrs" },
          { id: "t11", title: "Online SQL Platforms: MySQL Workbench, Online IDEs, Cloud Storage Integration", duration: "0.5 hrs" }
        ]
      },

      {
        id: "m3",
        title: "Data Visualization Using Tableau (Addon module with extra charges)",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "Introduction to Tableau: Approaching Business Problems, Interface Overview", duration: "2 hrs" },
          { id: "t2", title: "Connecting and Shaping Data: Data Sources, Pivoting, Calculated Fields, Dimensions/Measures", duration: "3 hrs" },
          { id: "t3", title: "Introduction to Basic Charts: Bars, Lines, Scatter Plots, Maps", duration: "2 hrs" },
          { id: "t4", title: "Working With Marks Card: Color, Size, Label, Detail, Tooltip", duration: "1.5 hrs" },
          { id: "t5", title: "Different Filters in Tableau: Quick Filters, Context Filters, Data Source Filters", duration: "2 hrs" },
          { id: "t6", title: "Calculated Fields: Summarization, String Manipulation, Date, Logical Functions", duration: "2.5 hrs" },
          { id: "t7", title: "Combining Tables: Joins, Unions, Blending", duration: "2 hrs" },
          { id: "t8", title: "Table Calculations: Primary and Secondary Calculations", duration: "1.5 hrs" },
          { id: "t9", title: "Parameters: Dimension, Measure, Sort, TopN, Date", duration: "1.5 hrs" },
          { id: "t10", title: "Groups & Sets: Creating and Applying", duration: "1 hr" },
          { id: "t11", title: "Analytics: Forecasting, Trend Lines, Clustering", duration: "2 hrs" },
          { id: "t12", title: "Dashboard Building & Actions: Filters, Highlights, Navigation", duration: "2.5 hrs" },
          { id: "t13", title: "Projects: RFM Analysis, Customer Retention Dashboard", duration: "1.5 hrs" }
        ]
      }
      ,

      {
        id: "m4",
        title: "Data Visualization Using Power BI",
        duration: "28 hrs",
        topics: [
          { id: "t1", title: "Introduction: Data Visualization, Interface, Business Problem-Solving", duration: "3 hrs" },
          { id: "t2", title: "Connecting & Shaping Data: Power Query Cleaning, Transformation, Append/Merge", duration: "4.5 hrs" },
          { id: "t3", title: "Data Modeling: Normalization, Relationships, Filter Flow", duration: "4 hrs" },
          { id: "t4", title: "DAX Analysis: Calculated Columns/Measures, Functions, Time Intelligence", duration: "6 hrs" },
          { id: "t5", title: "Visualization: Interactive Reports, Charts, Slicers, Drillthroughs", duration: "5 hrs" },
          { id: "t6", title: "AI & Custom Visuals: Decomposition Trees, Q&A, Key Influencers", duration: "2 hrs" },
          { id: "t7", title: "Deployment & Security: Power BI Service, Refresh Schedules, RLS", duration: "2.5 hrs" },
          { id: "t8", title: "SQL Integration: Database Connections, Custom Queries", duration: "1 hr" }
        ]
      }
      ,

      {
        id: "m5",
        title: "Predictive Modeling with R",
        duration: "22 hrs",
        topics: [
          { id: "t1", title: "Introduction to R: R Console, RStudio Interface", duration: "1.5 hrs" },
          { id: "t2", title: "R Data Structures: Vectors and Matrices", duration: "2 hrs" },
          { id: "t3", title: "Programming Basics: Conditions, Loops, Functions", duration: "2.5 hrs" },
          { id: "t4", title: "DataFrames: Creation and Manipulation", duration: "2 hrs" },
          { id: "t5", title: "Advanced Programming: dplyr and Essential Packages", duration: "2.5 hrs" },
          { id: "t6", title: "Statistics: Probability Distributions, Hypothesis Testing", duration: "2 hrs" },
          { id: "t7", title: "Data Visualization: ggplot2 Fundamentals", duration: "1.5 hrs" },
          { id: "t8", title: "Linear Regression: Academic Performance Prediction Project", duration: "2 hrs" },
          { id: "t9", title: "Logistic Regression: Telecom Customer Churn Project", duration: "2 hrs" },
          { id: "t10", title: "Decision Trees: Loan Approval Prediction Project", duration: "2 hrs" },
          { id: "t11", title: "Time Series & Clustering: Sales Forecasting and Customer Segmentation Projects", duration: "2 hrs" }
        ]
      }

      ,

      {
        id: "m6",
        title: "Python for Data Science",
        duration: "36 hrs",
        topics: [
          { id: "t1", title: "Introduction to Python: Installation, IDEs (VS Code, Jupyter)", duration: "2 hrs" },
          { id: "t2", title: "Core Data Types: Numbers, Strings, Booleans", duration: "3 hrs" },
          { id: "t3", title: "Advanced Data Structures: Lists, Tuples, Sets, Dictionaries", duration: "4 hrs" },
          { id: "t4", title: "Program Control: Conditionals, Loops, Comprehensions", duration: "3 hrs" },
          { id: "t5", title: "Functions & NumPy: Custom Functions, Vectorized Operations", duration: "3.5 hrs" },
          { id: "t6", title: "Pandas Basics: DataFrame Operations, Data Cleaning", duration: "4 hrs" },
          { id: "t7", title: "Pandas Advanced: GroupBy, Merging, Pivoting", duration: "3.5 hrs" },
          { id: "t8", title: "EDA: Univariate/Bivariate Analysis, Correlation", duration: "3 hrs" },
          { id: "t9", title: "Linear Regression: Ad Revenue Prediction Project", duration: "2.5 hrs" },
          { id: "t10", title: "Logistic Regression: Click-Through Rate Prediction Project", duration: "2.5 hrs" },
          { id: "t11", title: "Decision Trees: Used Car Pricing Project", duration: "2 hrs" },
          { id: "t12", title: "Time Series: Retail Sales Forecasting Project", duration: "2 hrs" },
          { id: "t13", title: "Deployment: API Integration, GitHub, Model Serving", duration: "2 hrs" }
        ]
      }
      ,
      {
        id: "m7",
        title: "Machine Learning, Artificial Intelligence, and Deep Learning",
        duration: "32 hrs",
        topics: [
          { id: "t1", title: "Introduction to Machine Learning: Concepts, Workflow, and Applications", duration: "2 hrs" },
          { id: "t2", title: "Recap: Linear/Logistic Regression, Decision Trees (Project: Car Price Prediction)", duration: "3 hrs" },
          { id: "t3", title: "Ensemble Learning: Random Forest (Project: Loan Risk Prediction)", duration: "3 hrs" },
          { id: "t4", title: "Boosting: Gradient Boost, AdaBoost, XGBoost (Projects: House Prices & Disease Diagnosis)", duration: "4 hrs" },
          { id: "t5", title: "Support Vector Machines (Project: YouTube Video Analysis)", duration: "2 hrs" },
          { id: "t6", title: "Naive Bayes (Project: Customer Churn Prediction)", duration: "2 hrs" },
          { id: "t7", title: "K-Nearest Neighbors (Project: Feedback Categorization)", duration: "2 hrs" },
          { id: "t8", title: "Dimensionality Reduction & Clustering: PCA, K-Means, Hierarchical, DBSCAN (Project: Retail Profiling)", duration: "3 hrs" },
          { id: "t9", title: "Text Preprocessing: Regex, Tokenization, Cleaning", duration: "2 hrs" },
          { id: "t10", title: "Text Mining: Word Clouds, Sentiment Analysis (Project: Indigo Tweets)", duration: "2 hrs" },
          { id: "t11", title: "NLP Classification (Project: IT Ticket Classification)", duration: "2 hrs" },
          { id: "t12", title: "Gen AI: Custom Text Classification with Transformers", duration: "2 hrs" },
          { id: "t13", title: "Neural Networks (Projects: Customer Lifetime Value & Credit Risk)", duration: "2 hrs" },
          { id: "t14", title: "Advanced Networks: RNN/LSTM (Stock Prediction), CNN (Face Classification)", duration: "3 hrs" }
        ]
      }


      ,

      {
        id: "m8",
        title: "Statistics",
        duration: "8 hrs",
        topics: [
          { id: "t1", title: "Types of Data: Nominal, Ordinal, Interval, Ratio", duration: "0.75 hrs" },
          { id: "t2", title: "Correlation: Pearson, Spearman, Visualization", duration: "1 hr" },
          { id: "t3", title: "Measures of Central Tendency: Mean, Median, Mode", duration: "0.75 hrs" },
          { id: "t4", title: "Measures of Dispersion: Range, Variance, Std Dev, IQR", duration: "1 hr" },
          { id: "t5", title: "Probability: Basics, Rules, Bayes' Theorem", duration: "1 hr" },
          { id: "t6", title: "Probability Distributions: Normal, Binomial, Poisson", duration: "1.25 hrs" },
          { id: "t7", title: "Sampling and Estimation: CLT, Confidence Intervals", duration: "1 hr" },
          { id: "t8", title: "Hypothesis Testing: p-values, t-tests, Chi-square", duration: "1.25 hrs" },
          { id: "t9", title: "Data Modeling: Linear Regression Basics", duration: "1 hr" }
        ]
      }

      ,
      {
        "id": "m9",
        "title": "Excel VBA Automation",
        "duration": "26 hrs",
        "topics": [
          { "id": "t1", "title": "Making Macro Do Automated Tasks for You", "duration": "6.5 hrs" },
          { "id": "t2", "title": "Programming Concepts (Variables, Loops, Conditions)", "duration": "8.25 hrs" },
          { "id": "t3", "title": "Analysis Using VBA (Data Cleaning, PivotTables)", "duration": "6.75 hrs" },
          { "id": "t4", "title": "Creating Dashboards (Forms, Dynamic Charts)", "duration": "4.5 hrs" }
        ]
      }


    ],

    projects: [
      {
        id: "p1",
        title: "Steps to Make a Career in AI & Data",
        description: "Explore pathways to start and grow a career in AI and Data. Learn about essential skills, tools, career opportunities, and how AI is impacting various industries through this expert Q&A session.",
        image: "https://img.youtube.com/vi/OoCffZ4VaJE/0.jpg",
        skills: ["AI Career Path", "AI Tools", "AI Research", "AI & Web Development", "Chatbots"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "OoCffZ4VaJE"
      },
      {
        id: "p2",
        title: "Using AI Visuals in Power BI Dashboards",
        description: "Learn to create AI-powered visuals in Power BI, including Key Influencer, Decomposition Tree, Q&A, and Smart Narrative. Explore current AI trends and integrate ChatGPT for enhanced insights",
        image: "https://img.youtube.com/vi/ftTTrchGVbA/0.jpg",
        skills: ["Key Influencer Visual", "Decomposition Tree", "Smart Narrative", "AI Trends"],
        difficulty: "Intermediate to Advanced",
        isPractice: true,
        videoId: "ftTTrchGVbA"
      },
      {
        id: "p3",
        title: "Python Prediction Model for Real Estate",
        description: "Build a real estate price prediction model using Python and machine learning. Learn data preprocessing, regression techniques, and model building with practical insights from a real-world case study.",
        image: "https://img.youtube.com/vi/TipOU1HPrxA/0.jpg",
        skills: ["Regression Models", "Data Preprocessing", "Linear Regression", "Random Forest", "Neural Networks"],
        difficulty: "Intermediate",
        isPractice: true,
        videoId: "TipOU1HPrxA"
      },
      {
        id: "p4",
        title: "OYO Business Analysis with SQL",
        description: "Learn how to perform business analysis using SQL with a real-world case study on OYO’s room sales. Cover data cleaning, SQL queries, business KPIs, and practical data-driven decision-making.",
        image: "https://img.youtube.com/vi/ee7TajNEUrI/0.jpg",
        skills: ["GROUP BY", "ARIMA Model", "Window Functions ", "CTE", "Data Cleaning"],
        difficulty: "Beginner to Intermediate",
        videoId: "ee7TajNEUrI"
      },
      {
        id: "p5",
        title: "Predicting Computer Prices with Python",
        description: "Build a predictive model for computer prices using Python. Learn data cleaning, regression modeling, and key Python libraries through this industry case study by an IvyPro student.",
        image: "https://img.youtube.com/vi/Wt8jyPvdGRo/0.jpg",
        skills: ["Feature Engineering,", "Linear Regression", "Random Forest", "Scikit-learn", "Regression Metrics"],
        difficulty: "Beginner to Intermediate",
        videoId: "Wt8jyPvdGRo"
      },
      {
        id: "p6",
        title: "ANOVA Using R - Bakery Case Study",
        description: "Analyze how display factors affect product demand using Two-way ANOVA and Tukey’s Test in R. Learn statistical hypothesis testing through this practical bakery case study.",
        image: "https://img.youtube.com/vi/UhO4y3a9yxQ/0.jpg",
        skills: ["Data Loading", "Data Manipulation", "Two-way ANOVA", "Hypothesis Testing", "Statistical Modeling"],
        difficulty: "Intermediate",
        videoId: "UhO4y3a9yxQ"
      }
    ],
    outcomes: [
      "Hands-on with Python, R, SQL, Tableau, Power BI, Excel & VBA.",
      "Work on 30+ projects, including 6 capstone projects in retail, finance, marketing, e-commerce, real estate, and entertainment.",
      "Apply supervised & unsupervised ML, AI, and DL to solve real-world problems.",
      "Gain holistic skills — resume prep, networking, interview training.",

    ],


  },


  {
    id: '10',
    title: "AI and Machine Learning Course",
    description: "Learn Artificial Intelligence, Machine Learning, Deep Learning, and Generative AI through real-world projects designed by experts from IIT, IIM, and top analytics firms.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "AI & Machine Learning",
    students: 1098,
    duration: "6 weeks",
    rating: 4.7,
    reviewCount: 20,
    isFeatured: true,
    slug: "ai-machine-learning-course",
    longDescription: " The AI & Machine Learning Course by Ivy Professional School is a comprehensive 4-month program that prepares learners for careers in AI, ML, and Deep Learning.\n\n It covers the complete AI lifecycle — from data preprocessing and modeling to deployment and automation, integrating Generative AI tools, MLOps, and predictive analytics across business domains like finance, marketing, and operations. \n\n Whether you’re a college graduate starting your career or a working professional seeking a career pivot into AI, this program helps you build a solid foundation and transform into an AI-driven decision-maker. "
    , instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
        , isDirector: true
      }
    ],

    curriculum: [
      {
        id: "m1",
        title: "Statistics — Self-paced",
        duration: "",
        topics: [
          { id: "t1", title: "Data types, measurement scales, descriptive statistics", duration: "1.25 hrs" },
          { id: "t2", title: "Probability distributions (Binomial, Poisson, Normal)", duration: "1.25 hrs" },
          { id: "t3", title: "Sampling, Central Limit Theorem, sampling distributions", duration: "1.5 hrs" },
          { id: "t4", title: "Estimation & hypothesis testing (t-test, z-test, chi-square, ANOVA)", duration: "1.5 hrs" },
          { id: "t5", title: "Regression basics, correlation, residual analysis", duration: "1.75 hrs" },
          { id: "t6", title: "Time series basics: decomposition & simple forecasting", duration: "1.5 hrs" },


        ]
      },
      {
        id: "m2",
        title: "Python — Predictive Modeling & Basic ML",
        duration: "2.5 months",
        topics: [
          { id: "t1", title: "Advanced Pandas: merge, join, groupby, pivot, reshaping, and data aggregation", duration: "1.75 hrs" },
          { id: "t2", title: "Data Preprocessing: missing value imputation, outlier detection, scaling & normalization", duration: "1.25 hrs" },
          { id: "t3", title: "Exploratory Data Analysis (EDA): visualization & insight generation using matplotlib & seaborn", duration: "2.0 hrs" },
          { id: "t4", title: "Feature Engineering & Pipelines: encoding, binning, transformations, and automation", duration: "1.5 hrs" },
          { id: "t5", title: "Supervised Learning: Linear & Logistic Regression, Decision Trees, KNN & Naïve Bayes", duration: "2.25 hrs" },
          { id: "t6", title: "Ensemble Techniques: Random Forest, Gradient Boosting, Bagging & Stacking basics", duration: "1.5 hrs" },
          { id: "t7", title: "Model Evaluation & Validation: cross-validation, confusion matrix, ROC-AUC, RMSE, F1-score", duration: "1.0 hrs" },
          { id: "t8", title: "Model Explainability & Deployment: feature importance, SHAP/partial plots, Flask/Streamlit intro", duration: "1.75 hrs" },
          { id: "t9", title: "AI in ML: prompt-based model interpretation, automated EDA with AI tools, and model documentation using Copilot", duration: "1.25 hrs" },
          { id: "t-header", title: " 🔽 PROJECTS 🔽" }, // <-- New bold header item

          // --- Added Project Topics Below ---
          {
            id: "t10",
            title: " Sales Forecasting Model : Predict monthly sales using regression and time-based feature engineering.",

          },
          {
            id: "t11",
            title: " Customer Churn Prediction :  Build a classification model to identify customers likely to discontinue a service",

          },
          {
            id: "t12",
            title: " Credit Risk Scoring : Use ensemble models to classify loan applicants by default probability.",

          }
        ]
      },
      {
        id: "m3",
        title: "Python — AI / ML & Deep Learning",
        duration: "2.5 months",
        topics: [
          { id: "t1", title: "Predictive Modelling Basics: supervised vs unsupervised learning, bias-variance tradeoff, cross-validation", duration: "1.75 hrs" },
          { id: "t2", title: "Clustering & Dimension Reduction: K-Means, EM, Hierarchical, DBSCAN, PCA, t-SNE", duration: "2.0 hrs" },
          { id: "t3", title: "Decision Trees & Ensemble Methods: Bagging, Random Forest, Boosting, XGBoost, CatBoost, LightGBM", duration: "2.5 hrs" },
          { id: "t4", title: "Model Optimization: Hyperparameter tuning using GridSearchCV & RandomizedSearchCV", duration: "1.5 hrs" },
          { id: "t5", title: "Support Vector Machines, KNN, Naïve Bayes, Model Comparison & Evaluation Metrics", duration: "2.25 hrs" },
          { id: "t6", title: "Text Mining & NLP: Sentiment Analysis, Topic Modeling, Text Classification, Word Embeddings (Word2Vec, BERT intro)", duration: "3.0 hrs" },
          { id: "t7", title: "Deep Learning with TensorFlow & Keras: CNNs, RNNs, LSTMs, Transfer Learning & FineTuning", duration: "3.5 hrs" },
          { id: "t8", title: "AI Use Cases & Model Deployment: Image, Text, and Time-Series projects using Flask/Streamlit integration", duration: "2.75 hrs" },
          { id: "t9", title: "AI-powered Case Studies on Image, Text & Time-Series Data", duration: "2.0 hrs" }
          ,
          { id: "t-header", title: " 🔽 PROJECTS 🔽" }, // <-- New bold header item

          // --- Added Project Topics Below ---
          {
            id: "t10",
            title: " Image Classification Model: Build a CNN using TensorFlow to identify objects or handwritten digits.",

          },
          {
            id: "t11",
            title: " Sentiment Analysis Engine: Analyze customer reviews using NLP techniques and classify emotions as positive, neutral, or negative.",

          },
          {
            id: "t12",
            title: "Stock Price Prediction: Use LSTM networks to forecast time-series data and visualize trend accuracy.",

          }
        ]
      }




    ],

    projects: [
      {
        id: "p1",
        title: "Steps to Make a Career in AI & Data",
        description: "Explore pathways to start and grow a career in AI and Data. Learn about essential skills, tools, career opportunities, and how AI is impacting various industries through this expert Q&A session.",
        image: "https://img.youtube.com/vi/OoCffZ4VaJE/0.jpg",
        skills: ["AI Career Path", "AI Tools", "AI Research", "AI & Web Development", "Chatbots"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "OoCffZ4VaJE"
      },
      {
        id: "p2",
        title: "Detect Fraud Calls Using Deep Learning & AI",
        description: "Learn how to use Artificial Intelligence and Deep Learning to detect fraudulent phone calls with real audio data. This project covers audio preprocessing with Librosa, feature extraction, embeddings, and building a TensorFlow Neural Network for accurate fraud call classification.",
        image: "https://img.youtube.com/vi/CeDUuCYfxrs/hqdefault.jpg",
        skills: ["Understanding Embeddings", "Audio Data Fundamentals", "Audio Processing with Librosa", "Neural Network Architecture", "TensorFlow Model Training", "Model Performance Evaluation"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "CeDUuCYfxrs"
      },
      {
        id: "p3",
        title: "Python Prediction Model for Real Estate",
        description: "Build a real estate price prediction model using Python and machine learning. Learn data preprocessing, regression techniques, and model building with practical insights from a real-world case study.",
        image: "https://img.youtube.com/vi/TipOU1HPrxA/0.jpg",
        skills: ["Regression Models", "Data Preprocessing", "Linear Regression", "Random Forest", "Neural Networks"],
        difficulty: "Intermediate",
        isPractice: true,
        videoId: "TipOU1HPrxA"
      },
      {
        id: "p4",
        title: "Employee Promotion Analysis with Python",
        description: "Learn how to analyze employee data and build a Machine Learning model to predict employee promotion using Python. This real-world project covers data preprocessing, exploratory analysis, encoding, model training, and deployment. You will also learn how to extract business insights using Grouped Bar Plots and Box Plots to help organizations make smarter, data-driven promotion decisions.",
        image: "https://img.youtube.com/vi/cbGNMjbjqrY/hqdefault.jpg",
        skills: ["Data Cleaning", "Missing Value Treatment", "Exploratory Data Analysis ", "Grouped Bar Plot", "ML Model Building", "Model Deployment"],
        difficulty: "Beginner to Intermediate",
        videoId: "cbGNMjbjqrY"
      },
      {
        id: "p5",
        title: "Time Series Forecasting with Air Passengers Data using ML",
        description: "Learn how to perform Time Series Forecasting on the Air Passengers dataset using Python. This project covers importing data, understanding time series structures, visualizing trends and seasonality, transforming non-stationary data, and building forecasting models such as ARIMA and SARIMAX to generate accurate future predictions.",
        image: "https://img.youtube.com/vi/F5cz6RGrqf8/hqdefault.jpg",
        skills: ["Time Series Concepts,", "Additive vs Multiplicative Models", "Data Visualization", "AR & MA Models", "ARIMA Model", "Forecasting & Evaluation"],
        difficulty: "Beginner to Intermediate",
        videoId: "F5cz6RGrqf8"
      },
      {
        id: "p6",
        title: "Twitter Sentiment Analysis with Machine Learning",
        description: "Learn how to apply Natural Language Processing (NLP) and Machine Learning to classify sentiments from real Twitter data. This hands-on case study walks through data cleaning, text preprocessing, TF-IDF vectorization, model building (Random Forest, Logistic Regression, Naive Bayes), evaluation, and real business applications such as brand monitoring and customer service analytics.",
        image: "https://img.youtube.com/vi/pVtSPaqrBLw/hqdefault.jpg",
        skills: ["Text Preprocessing", "Vectorization", "Random Forest", "Naive Bayes", "Feature Engineering"],
        difficulty: "Advanced",
        videoId: "pVtSPaqrBLw"
      }
    ],
    outcomes: [
      "Gain mastery in Python, Statistics, Machine Learning, and Deep Learning.",
      "Apply AI and GenAI tools to automate EDA, model documentation, and insights generation.",
      "Build and deploy models with TensorFlow, Keras, Flask, and Streamlit.",
      "Work on domain projects in healthcare, finance, retail, and marketing.",
      "Learn model evaluation, interpretability, and explainability (SHAP, feature importance).",
      "Participate in career coaching, mock interviews, and internships that lead to real jobs.",

    ],


  },


  //city specific content
  {
    id: '11',
    title: "Data Engineering Course in Kolkata",
    description: "The Data Engineering Course in Kolkata is a comprehensive, job-oriented program focused on designing, building, and maintaining scalable data systems used by modern enterprises. This course emphasizes practical implementation of data pipelines, big data frameworks, cloud platforms, and distributed processing systems.In Kolkata’s evolving tech ecosystem, organizations increasingly require professionals who can manage high-volume, high-velocity, and high-variety data. This program prepares learners to handle real-world data challenges using tools such as SQL, Python, Hadoop, Spark, and cloud-based data platforms",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Deep Learning",
    students: 1098,
    duration: "6 weeks",
    rating: 4.7,
    reviewCount: 20,
    isFeatured: true,
    slug: "data-engineering-course-kolkata",
    metaData: {
      title: "Data Engineering Course in Kolkata | Ivy Professional School",
      description: "Join Ivy Professional School’s Data Engineering Course in Kolkata with real-world projects, industry tools, expert mentors & career support. Enroll now!",
      bio: "Looking to build a high-growth career in analytics, Machine Learning, and Artificial Intelligence? The Data Science Course in Kolkata by Ivy Professional School is designed to help students and working professionals master industry-relevant data science skills with hands-on projects, expert faculty, and career-focused training.\n\n Kolkata is fast emerging as a technology and analytics hub, and our Data Science program equips you with practical knowledge, real-world exposure, and placement assistance to compete in top data-driven roles across India."

    },
    longDescription: "Ready to build a high-paying career in tech? Enroll in Ivy Pro School's Data Engineering Course in Kolkata, a NASSCOM Certified program trusted by 6,000+ professionals. Designed for career changers and IT professionals alike, our curriculum equips you with job-ready skills using real-world projects and tools like Python, SQL, Hadoop, Spark, and cloud platforms.\n\n "
    , instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
        , isDirector: true
      }
    ],

    curriculum: [
      {
        id: "m1",
        title: "SQL Queries & Relational Database Management",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "SQL Basics: Introduction to Database Management System (DBMS), Introduction to Google BigQuery and MySQL, CRUD Operations", duration: "3 hrs" },
          { id: "t2", title: "Data Manipulation and Transformation: Logical, Numerical, and Mathematical Operators, Conditional Statements", duration: "2.5 hrs" },
          { id: "t3", title: "Data Cleaning: Type Casting, Date/Time Formatting, Text Formatting", duration: "2 hrs" },
          { id: "t4", title: "Pattern Matching: LIKE Operator, REGEXP Functions", duration: "1.5 hrs" },
          { id: "t5", title: "Joins and Relational Databases: Keys, Join Types, Indexing, Normalization", duration: "4 hrs" },
          { id: "t6", title: "Aggregation and Grouping: Aggregate Functions, GROUP BY, CTEs, Variables", duration: "3.5 hrs" },
          { id: "t7", title: "Window Functions: RANK, DENSE_RANK, ROW_NUMBER, LEAD/LAG", duration: "2.5 hrs" },
          { id: "t8", title: "Data Reusability: Views, Stored Procedures, UDFs", duration: "2 hrs" },
          { id: "t9", title: "Subqueries: Simple, EXISTS/NOT EXISTS, Correlated", duration: "1.5 hrs" },
          { id: "t10", title: "Cloud Services: BigQuery Querying, Sharing Results, Permissions, Scheduling", duration: "1.5 hrs" },
          { id: "t11", title: "Online SQL Platforms: MySQL Workbench, Online IDEs, Cloud Storage Integration", duration: "0.5 hrs" }
        ]
      }
      ,

      {
        "id": "m2",
        "title": "Cloud Essentials, Fundamentals & Bigdata in Azure",
        "duration": "8 hrs",
        "topics": [
          { "id": "t1", "title": "Blob / Queue / Table Storage", "duration": "0.5 hrs" },
          { "id": "t2", "title": "Azure SQL Database", "duration": "0.5 hrs" },
          { "id": "t3", "title": "Data Lake (Gen1 & Gen2)", "duration": "0.5 hrs" },
          { "id": "t4", "title": "Synapse Analytics", "duration": "0.5 hrs" },
          { "id": "t5", "title": "Azure Cosmos DB", "duration": "0.5 hrs" },
          { "id": "t6", "title": "Azure Data Factory (Data Pipeline)", "duration": "0.5 hrs" },
          { "id": "t7", "title": "Azure Event Hubs", "duration": "0.4 hrs" },
          { "id": "t8", "title": "Databricks (Data Processing)", "duration": "0.5 hrs" },
          { "id": "t9", "title": "Scaling and Monitoring", "duration": "0.4 hrs" },
          { "id": "t10", "title": "Azure Service Models (IaaS, PaaS, SaaS)", "duration": "0.4 hrs" },
          { "id": "t11", "title": "Managed Identity & Active Directory", "duration": "0.4 hrs" },
          { "id": "t12", "title": "Network Security Group (Public, Private, Hybrid)", "duration": "0.4 hrs" },
          { "id": "t13", "title": "Azure Key Vault", "duration": "0.4 hrs" },
          { "id": "t14", "title": "Azure Monitor & Cost Calculator", "duration": "0.4 hrs" },
          { "id": "t15", "title": "CLI Commands", "duration": "0.4 hrs" },
          { "id": "t16", "title": "Azure Virtual Machine", "duration": "0.4 hrs" }
        ]
      },

      {
        "id": "m3",
        "title": "Hadoop Framework & Architecture",
        "duration": "4 hrs",
        "topics": [
          { "id": "t1", "title": "Complete Hadoop Architecture", "duration": "0.5 hrs" },
          { "id": "t2", "title": "MapReduce Functioning", "duration": "0.5 hrs" },
          { "id": "t3", "title": "HDFS (Hadoop Distributed File System)", "duration": "0.5 hrs" },
          { "id": "t4", "title": "YARN (Yet Another Resource Negotiator)", "duration": "0.4 hrs" },
          { "id": "t5", "title": "Blocks, Splits, Maps, Data Spilling, Heartbeats, Data Replication, FS Image, Checkpointing, High Availability", "duration": "1.0 hrs" },
          { "id": "t6", "title": "Hadoop Daemons - NameNode, DataNode, Secondary NameNode, Standby NameNode", "duration": "1.1 hrs" }
        ]
      },
      {
        "id": "m4",
        "title": "Apache Spark Architecture & Programming",
        "duration": "8 hrs",
        "topics": [
          { "id": "t1", "title": "Spark Architecture & Core Concepts", "duration": "1.0 hrs" },
          { "id": "t2", "title": "RDDs, Actions & Transformations", "duration": "1.0 hrs" },
          { "id": "t3", "title": "Lineage, Lazy Eval, Broadcaster, Accumulator", "duration": "1.0 hrs" },
          { "id": "t4", "title": "Spark SQL: Structs, Joins, Optimization", "duration": "1.0 hrs" },
          { "id": "t5", "title": "Read/Write, Spark Submit, Resource Allocation", "duration": "1.0 hrs" },
          { "id": "t6", "title": "Spark UI: Stages, Tasks, Debugging", "duration": "1.0 hrs" },
          { "id": "t7", "title": "Memory Mgmt: Cache, Persist, Serialization", "duration": "1.0 hrs" },
          { "id": "t8", "title": "Spark Streaming, GraphX Integration", "duration": "1.0 hrs" }
        ]
      }
      ,
      {
        "id": "m5",
        "title": "MongoDB for Developers & Admins",
        "duration": "2 hrs",
        "topics": [
          { "id": "t1", "title": "Introduction to MongoDB and its Architecture", "duration": "0.3 hrs" },
          { "id": "t2", "title": "Data Modeling with MongoDB - Schema Design & Relationships", "duration": "0.4 hrs" },
          { "id": "t3", "title": "Advanced Features - Aggregation, Text Search, Geospatial Queries", "duration": "0.4 hrs" },
          { "id": "t4", "title": "MongoDB Administration - Deployment & Configuration", "duration": "0.45 hrs" },
          { "id": "t5", "title": "Scaling MongoDB - Sharding & Distributed Cluster Management", "duration": "0.45 hrs" }
        ]
      }
      ,
      {
        "id": "m6",
        "title": "Apache Kafka Basics",
        "duration": "2 hrs",
        "topics": [
          { "id": "t1", "title": "Producer & Consumer", "duration": "0.3 hrs" },
          { "id": "t2", "title": "Kafka Cluster Setup & Brokers", "duration": "0.25 hrs" },
          { "id": "t3", "title": "Topics, Partitioning, Offset, Polling", "duration": "0.45 hrs" },
          { "id": "t4", "title": "Data Replication & Data Retention", "duration": "0.3 hrs" },
          { "id": "t5", "title": "Consumer Group", "duration": "0.4 hrs" },
          { "id": "t6", "title": "ZooKeeper", "duration": "0.3 hrs" }
        ]
      },
      {
        "id": "m7",
        "title": "Apache Hive for Data Warehousing",
        "duration": "4 hrs",
        "topics": [
          { "id": "t1", "title": "Hive Installation", "duration": "0.25 hrs" },
          { "id": "t2", "title": "Query Syntax", "duration": "0.35 hrs" },
          { "id": "t3", "title": "Bulk Data Load", "duration": "0.25 hrs" },
          { "id": "t4", "title": "Internal vs External Tables", "duration": "0.3 hrs" },
          { "id": "t5", "title": "Static & Dynamic Partitioning", "duration": "0.4 hrs" },
          { "id": "t6", "title": "Bucketing", "duration": "0.3 hrs" },
          { "id": "t7", "title": "Map Side Join, Bucket Join, and Sort Merge Bucket Join", "duration": "0.5 hrs" },
          { "id": "t8", "title": "Hive SerDe", "duration": "0.3 hrs" },
          { "id": "t9", "title": "User Defined Functions (UDFs) in Hive", "duration": "0.4 hrs" },
          { "id": "t10", "title": "Query Optimization", "duration": "0.35 hrs" }
        ]
      },
      ,





    ]
    ,
    projects: [
      {
        id: "p1",
        title: "Build Cloud Data Pipeline Using Databricks",
        description: "This video provides an in-depth introduction with real-world project experience, it outlines the career path, key technologies (Hadoop, Spark, Azure), curriculum breakdown, and practical use cases for aspiring data engineers.",
        image: "https://img.youtube.com/vi/aNja1KSqczo/0.jpg",
        skills: ["Apache ", "Big Data", "Azure"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "aNja1KSqczo"
      },
      {
        id: "p2",
        title: "How to Create End-to-End ETL Pipeline",
        description: "Dive deep into practical data solutions using Azure by setting up a complete data pipeline, from storing CSV files in Azure Blob Storage to efficiently transferring data into SQL databases.",
        image: "https://img.youtube.com/vi/yYbU_Bihvdc/0.jpg",
        skills: ["Virtual Machines ", "Azure", "SQL"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "yYbU_Bihvdc"
      },
      {
        id: "p3",
        title: "Data Engineering Career Roadmap 2025",
        description: "Get comprehensive roadmap for anyone looking to start or grow their career in Data Engineering in 2025. You'll understand the real-world data pipeline, in-demand tools (SQL, Python, Spark, Docker, Cloud).",
        image: "https://img.youtube.com/vi/QbI60IMgO_g/0.jpg",
        skills: ["SQL", "Python", "Spark", "Docker", "Cloud"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "QbI60IMgO_g"
      },
      // {
      //   id: "p4",
      //   title: "Superstore Sales Analysis Using Excel ",
      //   description: "Explore Superstore sales data and generate key business insights using Excel. Analyze product lines, profitable cities, gender-based sales performance, month-on-month growth, and create a dashboard to track critical metrics.",
      //   image: "https://img.youtube.com/vi/KGrApiKUR4M/0.jpg",
      //   skills: ["Excel", "Data Analysis", "Business Analytics", "Sales Analytics", "Dashboard", "Business Insights"],
      //   difficulty: "Beginner to Intermediate",
      //   videoId: "KGrApiKUR4M"
      // },
      // {
      //   id: "p5",
      //   title: "Predicting Car Sales using Linear Regression in R",
      //   description: "Analyze Superstore sales data in Excel to uncover insights on product lines, profitable cities, gender-based performance, month-on-month growth, and create a dashboard to track key metrics.",
      //   image: "https://img.youtube.com/vi/8nNgJJH7pMk/0.jpg",
      //   skills: ["R", "Linear Regression", "Car Sales Prediction", "Data Analysis", "Model Evaluation", "Variable Significance"],
      //   difficulty: "Intermediate",
      //   videoId: "8nNgJJH7pMk"
      // },
      // {
      //   id: "p6",
      //   title: "Crime Intelligence Dashboard in Power BI",
      //   description: "Create an interactive, data-driven crime intelligence dashboard using real-world data from the Manchester Police Department. Learn to transform data, set up KPIs, design visualizations, and implement geospatial mapping to analyze crime trends and improve law enforcement efficiency.",
      //   image: "https://img.youtube.com/vi/sVXjAIa7YBs/0.jpg",
      //   skills: ["Power BI", "DAX", "KPI Cards", "Data Transformation", "Data Visualization", "Crime Analysis"],
      //   difficulty: "Intermediate",
      //   videoId: "sVXjAIa7YBs"
      // }
    ],
    outcomes: [
      "Build distributed data processing systems using Hadoop and Apache Spark",
      "Implement real-time and batch data processing architectures",
      "Gain hands-on exposure to cloud data platforms and modern data warehouses",
      "Optimize data storage, performance, and data quality for enterprise use cases",
      "Develop industry-ready skills aligned with Data Engineer roles in Kolkata and India",
      "Design and implement scalable ETL and ELT data pipelines",
      "Work with relational and NoSQL databases for structured and unstructured data",
      "Apply Python and SQL for data transformation and automation",
      "Build distributed data processing systems using Hadoop and Apache Spark"
    ],


  },



   {
    id: '11',
    title: "Data Engineering Course in Delhi",
    description: "The Data Engineering Course in Delhi provides comprehensive training on building scalable, reliable, and high-performance data pipelines. The course focuses on real-world data engineering workflows, enabling learners to work with structured and unstructured data at scale. With Delhi witnessing rapid adoption of data-driven decision-making across sectors such as BFSI, consulting, e-governance, and IT services, this course aligns closely with current industry requirements. Learners gain exposure to batch and real-time data processing, cloud-based data architectures, and distributed computing systems.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Deep Learning",
    students: 1098,
    duration: "6 weeks",
    rating: 4.7,
    reviewCount: 20,
    isFeatured: true,
    slug: "data-engineering-course-delhi",
    metaData: {
      title: "Data Engineering Course in Delhi | Ivy Professional School",
      description: "Enroll in Ivy Professional School’s Data Engineering Course in Delhi with hands-on projects, big data tools, cloud training & career support.",
      bio: "Looking to build a high-growth career in analytics, Machine Learning, and Artificial Intelligence? The Data Science Course in Kolkata by Ivy Professional School is designed to help students and working professionals master industry-relevant data science skills with hands-on projects, expert faculty, and career-focused training.\n\n Kolkata is fast emerging as a technology and analytics hub, and our Data Science program equips you with practical knowledge, real-world exposure, and placement assistance to compete in top data-driven roles across India."

    },
    longDescription: "A Data Engineering course in Delhi is the ultimate gateway to mastering the high-performance data pipelines driving the 2025 AI revolution. This specialized training focuses on technical architecture using Python, SQL, Spark, and Cloud to ensure data is clean and accessible at scale. \n\n Delhi-NCR has emerged as a premier hub for these roles, with Noida and Gurgaon seeing massive annual growth in job listings across Global Capability Centers. By specializing in this recession-proof field, you bridge the talent gap in sectors like BFSI and retail where demand currently far exceeds supply. "
    , instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
        , isDirector: true
      }
    ],

    curriculum: [
      {
        id: "m1",
        title: "SQL Queries & Relational Database Management",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "SQL Basics: Introduction to Database Management System (DBMS), Introduction to Google BigQuery and MySQL, CRUD Operations", duration: "3 hrs" },
          { id: "t2", title: "Data Manipulation and Transformation: Logical, Numerical, and Mathematical Operators, Conditional Statements", duration: "2.5 hrs" },
          { id: "t3", title: "Data Cleaning: Type Casting, Date/Time Formatting, Text Formatting", duration: "2 hrs" },
          { id: "t4", title: "Pattern Matching: LIKE Operator, REGEXP Functions", duration: "1.5 hrs" },
          { id: "t5", title: "Joins and Relational Databases: Keys, Join Types, Indexing, Normalization", duration: "4 hrs" },
          { id: "t6", title: "Aggregation and Grouping: Aggregate Functions, GROUP BY, CTEs, Variables", duration: "3.5 hrs" },
          { id: "t7", title: "Window Functions: RANK, DENSE_RANK, ROW_NUMBER, LEAD/LAG", duration: "2.5 hrs" },
          { id: "t8", title: "Data Reusability: Views, Stored Procedures, UDFs", duration: "2 hrs" },
          { id: "t9", title: "Subqueries: Simple, EXISTS/NOT EXISTS, Correlated", duration: "1.5 hrs" },
          { id: "t10", title: "Cloud Services: BigQuery Querying, Sharing Results, Permissions, Scheduling", duration: "1.5 hrs" },
          { id: "t11", title: "Online SQL Platforms: MySQL Workbench, Online IDEs, Cloud Storage Integration", duration: "0.5 hrs" }
        ]
      }
      ,

      {
        "id": "m2",
        "title": "Cloud Essentials, Fundamentals & Bigdata in Azure",
        "duration": "8 hrs",
        "topics": [
          { "id": "t1", "title": "Blob / Queue / Table Storage", "duration": "0.5 hrs" },
          { "id": "t2", "title": "Azure SQL Database", "duration": "0.5 hrs" },
          { "id": "t3", "title": "Data Lake (Gen1 & Gen2)", "duration": "0.5 hrs" },
          { "id": "t4", "title": "Synapse Analytics", "duration": "0.5 hrs" },
          { "id": "t5", "title": "Azure Cosmos DB", "duration": "0.5 hrs" },
          { "id": "t6", "title": "Azure Data Factory (Data Pipeline)", "duration": "0.5 hrs" },
          { "id": "t7", "title": "Azure Event Hubs", "duration": "0.4 hrs" },
          { "id": "t8", "title": "Databricks (Data Processing)", "duration": "0.5 hrs" },
          { "id": "t9", "title": "Scaling and Monitoring", "duration": "0.4 hrs" },
          { "id": "t10", "title": "Azure Service Models (IaaS, PaaS, SaaS)", "duration": "0.4 hrs" },
          { "id": "t11", "title": "Managed Identity & Active Directory", "duration": "0.4 hrs" },
          { "id": "t12", "title": "Network Security Group (Public, Private, Hybrid)", "duration": "0.4 hrs" },
          { "id": "t13", "title": "Azure Key Vault", "duration": "0.4 hrs" },
          { "id": "t14", "title": "Azure Monitor & Cost Calculator", "duration": "0.4 hrs" },
          { "id": "t15", "title": "CLI Commands", "duration": "0.4 hrs" },
          { "id": "t16", "title": "Azure Virtual Machine", "duration": "0.4 hrs" }
        ]
      },

      {
        "id": "m3",
        "title": "Hadoop Framework & Architecture",
        "duration": "4 hrs",
        "topics": [
          { "id": "t1", "title": "Complete Hadoop Architecture", "duration": "0.5 hrs" },
          { "id": "t2", "title": "MapReduce Functioning", "duration": "0.5 hrs" },
          { "id": "t3", "title": "HDFS (Hadoop Distributed File System)", "duration": "0.5 hrs" },
          { "id": "t4", "title": "YARN (Yet Another Resource Negotiator)", "duration": "0.4 hrs" },
          { "id": "t5", "title": "Blocks, Splits, Maps, Data Spilling, Heartbeats, Data Replication, FS Image, Checkpointing, High Availability", "duration": "1.0 hrs" },
          { "id": "t6", "title": "Hadoop Daemons - NameNode, DataNode, Secondary NameNode, Standby NameNode", "duration": "1.1 hrs" }
        ]
      },
      {
        "id": "m4",
        "title": "Apache Spark Architecture & Programming",
        "duration": "8 hrs",
        "topics": [
          { "id": "t1", "title": "Spark Architecture & Core Concepts", "duration": "1.0 hrs" },
          { "id": "t2", "title": "RDDs, Actions & Transformations", "duration": "1.0 hrs" },
          { "id": "t3", "title": "Lineage, Lazy Eval, Broadcaster, Accumulator", "duration": "1.0 hrs" },
          { "id": "t4", "title": "Spark SQL: Structs, Joins, Optimization", "duration": "1.0 hrs" },
          { "id": "t5", "title": "Read/Write, Spark Submit, Resource Allocation", "duration": "1.0 hrs" },
          { "id": "t6", "title": "Spark UI: Stages, Tasks, Debugging", "duration": "1.0 hrs" },
          { "id": "t7", "title": "Memory Mgmt: Cache, Persist, Serialization", "duration": "1.0 hrs" },
          { "id": "t8", "title": "Spark Streaming, GraphX Integration", "duration": "1.0 hrs" }
        ]
      }
      ,
      {
        "id": "m5",
        "title": "MongoDB for Developers & Admins",
        "duration": "2 hrs",
        "topics": [
          { "id": "t1", "title": "Introduction to MongoDB and its Architecture", "duration": "0.3 hrs" },
          { "id": "t2", "title": "Data Modeling with MongoDB - Schema Design & Relationships", "duration": "0.4 hrs" },
          { "id": "t3", "title": "Advanced Features - Aggregation, Text Search, Geospatial Queries", "duration": "0.4 hrs" },
          { "id": "t4", "title": "MongoDB Administration - Deployment & Configuration", "duration": "0.45 hrs" },
          { "id": "t5", "title": "Scaling MongoDB - Sharding & Distributed Cluster Management", "duration": "0.45 hrs" }
        ]
      }
      ,
      {
        "id": "m6",
        "title": "Apache Kafka Basics",
        "duration": "2 hrs",
        "topics": [
          { "id": "t1", "title": "Producer & Consumer", "duration": "0.3 hrs" },
          { "id": "t2", "title": "Kafka Cluster Setup & Brokers", "duration": "0.25 hrs" },
          { "id": "t3", "title": "Topics, Partitioning, Offset, Polling", "duration": "0.45 hrs" },
          { "id": "t4", "title": "Data Replication & Data Retention", "duration": "0.3 hrs" },
          { "id": "t5", "title": "Consumer Group", "duration": "0.4 hrs" },
          { "id": "t6", "title": "ZooKeeper", "duration": "0.3 hrs" }
        ]
      },
      {
        "id": "m7",
        "title": "Apache Hive for Data Warehousing",
        "duration": "4 hrs",
        "topics": [
          { "id": "t1", "title": "Hive Installation", "duration": "0.25 hrs" },
          { "id": "t2", "title": "Query Syntax", "duration": "0.35 hrs" },
          { "id": "t3", "title": "Bulk Data Load", "duration": "0.25 hrs" },
          { "id": "t4", "title": "Internal vs External Tables", "duration": "0.3 hrs" },
          { "id": "t5", "title": "Static & Dynamic Partitioning", "duration": "0.4 hrs" },
          { "id": "t6", "title": "Bucketing", "duration": "0.3 hrs" },
          { "id": "t7", "title": "Map Side Join, Bucket Join, and Sort Merge Bucket Join", "duration": "0.5 hrs" },
          { "id": "t8", "title": "Hive SerDe", "duration": "0.3 hrs" },
          { "id": "t9", "title": "User Defined Functions (UDFs) in Hive", "duration": "0.4 hrs" },
          { "id": "t10", "title": "Query Optimization", "duration": "0.35 hrs" }
        ]
      },
      ,





    ]
    ,
    projects: [
      {
        id: "p1",
        title: "Build Cloud Data Pipeline Using Databricks",
        description: "This video provides an in-depth introduction with real-world project experience, it outlines the career path, key technologies (Hadoop, Spark, Azure), curriculum breakdown, and practical use cases for aspiring data engineers.",
        image: "https://img.youtube.com/vi/aNja1KSqczo/0.jpg",
        skills: ["Apache ", "Big Data", "Azure"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "aNja1KSqczo"
      },
      {
        id: "p2",
        title: "How to Create End-to-End ETL Pipeline",
        description: "Dive deep into practical data solutions using Azure by setting up a complete data pipeline, from storing CSV files in Azure Blob Storage to efficiently transferring data into SQL databases.",
        image: "https://img.youtube.com/vi/yYbU_Bihvdc/0.jpg",
        skills: ["Virtual Machines ", "Azure", "SQL"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "yYbU_Bihvdc"
      },
      {
        id: "p3",
        title: "Data Engineering Career Roadmap 2025",
        description: "Get comprehensive roadmap for anyone looking to start or grow their career in Data Engineering in 2025. You'll understand the real-world data pipeline, in-demand tools (SQL, Python, Spark, Docker, Cloud).",
        image: "https://img.youtube.com/vi/QbI60IMgO_g/0.jpg",
        skills: ["SQL", "Python", "Spark", "Docker", "Cloud"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "QbI60IMgO_g"
      },
      // {
      //   id: "p4",
      //   title: "Superstore Sales Analysis Using Excel ",
      //   description: "Explore Superstore sales data and generate key business insights using Excel. Analyze product lines, profitable cities, gender-based sales performance, month-on-month growth, and create a dashboard to track critical metrics.",
      //   image: "https://img.youtube.com/vi/KGrApiKUR4M/0.jpg",
      //   skills: ["Excel", "Data Analysis", "Business Analytics", "Sales Analytics", "Dashboard", "Business Insights"],
      //   difficulty: "Beginner to Intermediate",
      //   videoId: "KGrApiKUR4M"
      // },
      // {
      //   id: "p5",
      //   title: "Predicting Car Sales using Linear Regression in R",
      //   description: "Analyze Superstore sales data in Excel to uncover insights on product lines, profitable cities, gender-based performance, month-on-month growth, and create a dashboard to track key metrics.",
      //   image: "https://img.youtube.com/vi/8nNgJJH7pMk/0.jpg",
      //   skills: ["R", "Linear Regression", "Car Sales Prediction", "Data Analysis", "Model Evaluation", "Variable Significance"],
      //   difficulty: "Intermediate",
      //   videoId: "8nNgJJH7pMk"
      // },
      // {
      //   id: "p6",
      //   title: "Crime Intelligence Dashboard in Power BI",
      //   description: "Create an interactive, data-driven crime intelligence dashboard using real-world data from the Manchester Police Department. Learn to transform data, set up KPIs, design visualizations, and implement geospatial mapping to analyze crime trends and improve law enforcement efficiency.",
      //   image: "https://img.youtube.com/vi/sVXjAIa7YBs/0.jpg",
      //   skills: ["Power BI", "DAX", "KPI Cards", "Data Transformation", "Data Visualization", "Crime Analysis"],
      //   difficulty: "Intermediate",
      //   videoId: "sVXjAIa7YBs"
      // }
    ],
    outcomes: [
      "Understand the end-to-end data engineering lifecycle",
      "Design and implement ETL and ELT data pipelines",
      "Work with SQL and Python for data transformation and automation",
      "Manage relational and NoSQL databases efficiently",
      "Build distributed data processing systems using Hadoop and Apache Spark",
      "Implement batch and real-time data processing solutions",
      "Work with cloud-based data platforms and data warehouses",
      "Ensure data quality, scalability, and performance",
      "Prepare for Data Engineer roles in Delhi’s competitive job market"
    ],


  },


  {
    id: '11',
    title: "Data Engineering Course in Bangalore",
    description: "The Data Engineering Course in Bangalore by Ivy Professional School is designed for professionals and fresh graduates who want to build a strong career in data engineering and big data technologies. Known as the Silicon Valley of India, Bangalore offers immense opportunities for data engineers, and this program is crafted to meet the hiring demands of top tech companies.This course focuses on building scalable data pipelines, managing large datasets, and working with modern data engineering tools used across industries such as IT services, product companies, fintech, and startups.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Deep Learning",
    students: 1098,
    duration: "6 weeks",
    rating: 4.7,
    reviewCount: 20,
    isFeatured: true,
    slug: "data-engineering-course-bangalore",
    metaData: {
      title: "Data Engineering Course in Bangalore | Ivy Professional School",
      description: "Enroll in Ivy Professional School’s Data Engineering Course in Bangalore with hands-on projects, cloud tools, expert mentors & career support.",
      bio: "Looking to build a high-growth career in analytics, Machine Learning, and Artificial Intelligence? The Data Science Course in Bangalore by Ivy Professional School is designed to help students and working professionals master industry-relevant data science skills with hands-on projects, expert faculty, and career-focused training.\n\n Kolkata is fast emerging as a technology and analytics hub, and our Data Science program equips you with practical knowledge, real-world exposure, and placement assistance to compete in top data-driven roles across India."

    },
    longDescription: "The Data Engineering Course in Bangalore provides end-to-end training on designing, building, and maintaining enterprise-grade data infrastructure. The program combines strong theoretical foundations with extensive hands-on practice to ensure learners are job-ready. \n\n With Bangalore hosting global technology companies and data-driven startups, this course aligns with real-world use cases and industry workflows. Learners gain exposure to batch and real-time data processing, cloud-based data platforms, and distributed systems that power modern analytics and AI applications. "
    , instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
        , isDirector: true
      }
    ],

    curriculum: [
      {
        id: "m1",
        title: "SQL Queries & Relational Database Management",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "SQL Basics: Introduction to Database Management System (DBMS), Introduction to Google BigQuery and MySQL, CRUD Operations", duration: "3 hrs" },
          { id: "t2", title: "Data Manipulation and Transformation: Logical, Numerical, and Mathematical Operators, Conditional Statements", duration: "2.5 hrs" },
          { id: "t3", title: "Data Cleaning: Type Casting, Date/Time Formatting, Text Formatting", duration: "2 hrs" },
          { id: "t4", title: "Pattern Matching: LIKE Operator, REGEXP Functions", duration: "1.5 hrs" },
          { id: "t5", title: "Joins and Relational Databases: Keys, Join Types, Indexing, Normalization", duration: "4 hrs" },
          { id: "t6", title: "Aggregation and Grouping: Aggregate Functions, GROUP BY, CTEs, Variables", duration: "3.5 hrs" },
          { id: "t7", title: "Window Functions: RANK, DENSE_RANK, ROW_NUMBER, LEAD/LAG", duration: "2.5 hrs" },
          { id: "t8", title: "Data Reusability: Views, Stored Procedures, UDFs", duration: "2 hrs" },
          { id: "t9", title: "Subqueries: Simple, EXISTS/NOT EXISTS, Correlated", duration: "1.5 hrs" },
          { id: "t10", title: "Cloud Services: BigQuery Querying, Sharing Results, Permissions, Scheduling", duration: "1.5 hrs" },
          { id: "t11", title: "Online SQL Platforms: MySQL Workbench, Online IDEs, Cloud Storage Integration", duration: "0.5 hrs" }
        ]
      }
      ,

      {
        "id": "m2",
        "title": "Cloud Essentials, Fundamentals & Bigdata in Azure",
        "duration": "8 hrs",
        "topics": [
          { "id": "t1", "title": "Blob / Queue / Table Storage", "duration": "0.5 hrs" },
          { "id": "t2", "title": "Azure SQL Database", "duration": "0.5 hrs" },
          { "id": "t3", "title": "Data Lake (Gen1 & Gen2)", "duration": "0.5 hrs" },
          { "id": "t4", "title": "Synapse Analytics", "duration": "0.5 hrs" },
          { "id": "t5", "title": "Azure Cosmos DB", "duration": "0.5 hrs" },
          { "id": "t6", "title": "Azure Data Factory (Data Pipeline)", "duration": "0.5 hrs" },
          { "id": "t7", "title": "Azure Event Hubs", "duration": "0.4 hrs" },
          { "id": "t8", "title": "Databricks (Data Processing)", "duration": "0.5 hrs" },
          { "id": "t9", "title": "Scaling and Monitoring", "duration": "0.4 hrs" },
          { "id": "t10", "title": "Azure Service Models (IaaS, PaaS, SaaS)", "duration": "0.4 hrs" },
          { "id": "t11", "title": "Managed Identity & Active Directory", "duration": "0.4 hrs" },
          { "id": "t12", "title": "Network Security Group (Public, Private, Hybrid)", "duration": "0.4 hrs" },
          { "id": "t13", "title": "Azure Key Vault", "duration": "0.4 hrs" },
          { "id": "t14", "title": "Azure Monitor & Cost Calculator", "duration": "0.4 hrs" },
          { "id": "t15", "title": "CLI Commands", "duration": "0.4 hrs" },
          { "id": "t16", "title": "Azure Virtual Machine", "duration": "0.4 hrs" }
        ]
      },

      {
        "id": "m3",
        "title": "Hadoop Framework & Architecture",
        "duration": "4 hrs",
        "topics": [
          { "id": "t1", "title": "Complete Hadoop Architecture", "duration": "0.5 hrs" },
          { "id": "t2", "title": "MapReduce Functioning", "duration": "0.5 hrs" },
          { "id": "t3", "title": "HDFS (Hadoop Distributed File System)", "duration": "0.5 hrs" },
          { "id": "t4", "title": "YARN (Yet Another Resource Negotiator)", "duration": "0.4 hrs" },
          { "id": "t5", "title": "Blocks, Splits, Maps, Data Spilling, Heartbeats, Data Replication, FS Image, Checkpointing, High Availability", "duration": "1.0 hrs" },
          { "id": "t6", "title": "Hadoop Daemons - NameNode, DataNode, Secondary NameNode, Standby NameNode", "duration": "1.1 hrs" }
        ]
      },
      {
        "id": "m4",
        "title": "Apache Spark Architecture & Programming",
        "duration": "8 hrs",
        "topics": [
          { "id": "t1", "title": "Spark Architecture & Core Concepts", "duration": "1.0 hrs" },
          { "id": "t2", "title": "RDDs, Actions & Transformations", "duration": "1.0 hrs" },
          { "id": "t3", "title": "Lineage, Lazy Eval, Broadcaster, Accumulator", "duration": "1.0 hrs" },
          { "id": "t4", "title": "Spark SQL: Structs, Joins, Optimization", "duration": "1.0 hrs" },
          { "id": "t5", "title": "Read/Write, Spark Submit, Resource Allocation", "duration": "1.0 hrs" },
          { "id": "t6", "title": "Spark UI: Stages, Tasks, Debugging", "duration": "1.0 hrs" },
          { "id": "t7", "title": "Memory Mgmt: Cache, Persist, Serialization", "duration": "1.0 hrs" },
          { "id": "t8", "title": "Spark Streaming, GraphX Integration", "duration": "1.0 hrs" }
        ]
      }
      ,
      {
        "id": "m5",
        "title": "MongoDB for Developers & Admins",
        "duration": "2 hrs",
        "topics": [
          { "id": "t1", "title": "Introduction to MongoDB and its Architecture", "duration": "0.3 hrs" },
          { "id": "t2", "title": "Data Modeling with MongoDB - Schema Design & Relationships", "duration": "0.4 hrs" },
          { "id": "t3", "title": "Advanced Features - Aggregation, Text Search, Geospatial Queries", "duration": "0.4 hrs" },
          { "id": "t4", "title": "MongoDB Administration - Deployment & Configuration", "duration": "0.45 hrs" },
          { "id": "t5", "title": "Scaling MongoDB - Sharding & Distributed Cluster Management", "duration": "0.45 hrs" }
        ]
      }
      ,
      {
        "id": "m6",
        "title": "Apache Kafka Basics",
        "duration": "2 hrs",
        "topics": [
          { "id": "t1", "title": "Producer & Consumer", "duration": "0.3 hrs" },
          { "id": "t2", "title": "Kafka Cluster Setup & Brokers", "duration": "0.25 hrs" },
          { "id": "t3", "title": "Topics, Partitioning, Offset, Polling", "duration": "0.45 hrs" },
          { "id": "t4", "title": "Data Replication & Data Retention", "duration": "0.3 hrs" },
          { "id": "t5", "title": "Consumer Group", "duration": "0.4 hrs" },
          { "id": "t6", "title": "ZooKeeper", "duration": "0.3 hrs" }
        ]
      },
      {
        "id": "m7",
        "title": "Apache Hive for Data Warehousing",
        "duration": "4 hrs",
        "topics": [
          { "id": "t1", "title": "Hive Installation", "duration": "0.25 hrs" },
          { "id": "t2", "title": "Query Syntax", "duration": "0.35 hrs" },
          { "id": "t3", "title": "Bulk Data Load", "duration": "0.25 hrs" },
          { "id": "t4", "title": "Internal vs External Tables", "duration": "0.3 hrs" },
          { "id": "t5", "title": "Static & Dynamic Partitioning", "duration": "0.4 hrs" },
          { "id": "t6", "title": "Bucketing", "duration": "0.3 hrs" },
          { "id": "t7", "title": "Map Side Join, Bucket Join, and Sort Merge Bucket Join", "duration": "0.5 hrs" },
          { "id": "t8", "title": "Hive SerDe", "duration": "0.3 hrs" },
          { "id": "t9", "title": "User Defined Functions (UDFs) in Hive", "duration": "0.4 hrs" },
          { "id": "t10", "title": "Query Optimization", "duration": "0.35 hrs" }
        ]
      },
      ,





    ]
    ,
    projects: [
      {
        id: "p1",
        title: "Build Cloud Data Pipeline Using Databricks",
        description: "This video provides an in-depth introduction with real-world project experience, it outlines the career path, key technologies (Hadoop, Spark, Azure), curriculum breakdown, and practical use cases for aspiring data engineers.",
        image: "https://img.youtube.com/vi/aNja1KSqczo/0.jpg",
        skills: ["Apache ", "Big Data", "Azure"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "aNja1KSqczo"
      },
      {
        id: "p2",
        title: "How to Create End-to-End ETL Pipeline",
        description: "Dive deep into practical data solutions using Azure by setting up a complete data pipeline, from storing CSV files in Azure Blob Storage to efficiently transferring data into SQL databases.",
        image: "https://img.youtube.com/vi/yYbU_Bihvdc/0.jpg",
        skills: ["Virtual Machines ", "Azure", "SQL"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "yYbU_Bihvdc"
      },
      {
        id: "p3",
        title: "Data Engineering Career Roadmap 2025",
        description: "Get comprehensive roadmap for anyone looking to start or grow their career in Data Engineering in 2025. You'll understand the real-world data pipeline, in-demand tools (SQL, Python, Spark, Docker, Cloud).",
        image: "https://img.youtube.com/vi/QbI60IMgO_g/0.jpg",
        skills: ["SQL", "Python", "Spark", "Docker", "Cloud"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "QbI60IMgO_g"
      },
      // {
      //   id: "p4",
      //   title: "Superstore Sales Analysis Using Excel ",
      //   description: "Explore Superstore sales data and generate key business insights using Excel. Analyze product lines, profitable cities, gender-based sales performance, month-on-month growth, and create a dashboard to track critical metrics.",
      //   image: "https://img.youtube.com/vi/KGrApiKUR4M/0.jpg",
      //   skills: ["Excel", "Data Analysis", "Business Analytics", "Sales Analytics", "Dashboard", "Business Insights"],
      //   difficulty: "Beginner to Intermediate",
      //   videoId: "KGrApiKUR4M"
      // },
      // {
      //   id: "p5",
      //   title: "Predicting Car Sales using Linear Regression in R",
      //   description: "Analyze Superstore sales data in Excel to uncover insights on product lines, profitable cities, gender-based performance, month-on-month growth, and create a dashboard to track key metrics.",
      //   image: "https://img.youtube.com/vi/8nNgJJH7pMk/0.jpg",
      //   skills: ["R", "Linear Regression", "Car Sales Prediction", "Data Analysis", "Model Evaluation", "Variable Significance"],
      //   difficulty: "Intermediate",
      //   videoId: "8nNgJJH7pMk"
      // },
      // {
      //   id: "p6",
      //   title: "Crime Intelligence Dashboard in Power BI",
      //   description: "Create an interactive, data-driven crime intelligence dashboard using real-world data from the Manchester Police Department. Learn to transform data, set up KPIs, design visualizations, and implement geospatial mapping to analyze crime trends and improve law enforcement efficiency.",
      //   image: "https://img.youtube.com/vi/sVXjAIa7YBs/0.jpg",
      //   skills: ["Power BI", "DAX", "KPI Cards", "Data Transformation", "Data Visualization", "Crime Analysis"],
      //   difficulty: "Intermediate",
      //   videoId: "sVXjAIa7YBs"
      // }
    ],
    outcomes: [
      "Design and implement robust ETL and ELT data pipelines",
      "Work with SQL, Python, and data transformation techniques",
      "Build and optimize big data systems using Hadoop and Apache Spark",
      "Implement batch and real-time data processing frameworks",
      "Prepare for Data Engineer roles in Bangalore’s competitive job market",
      "Ensure data quality, scalability, and performance in production systems",
      
    ],


  },
  {
    id: '11',
    title: "Data Engineering Course in Mumbai",
    description: "The Data Engineering Course in Mumbai by Ivy Professional School is designed to prepare learners for high-demand data engineering roles across BFSI, consulting, media, e-commerce, and technology sectors. As India’s financial capital, Mumbai offers vast opportunities for data engineers skilled in building scalable, secure, and high-performance data systems.This program equips students with practical expertise in data pipelines, big data frameworks, and cloud-based data platforms used by leading enterprises.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Deep Learning",
    students: 1098,
    duration: "6 weeks",
    rating: 4.7,
    reviewCount: 20,
    isFeatured: true,
    slug: "data-engineering-course-mumbai",
    metaData: {
      title: "Data Engineering Course in Mumbai | Ivy Professional School",
      description: "Join Ivy Professional School’s Data Engineering Course in Mumbai with hands-on projects, big data & cloud tools, expert mentors, and career support.",
      bio: "Looking to build a high-growth career in analytics, Machine Learning, and Artificial Intelligence? The Data Science Course in Mumbai by Ivy Professional School is designed to help students and working professionals master industry-relevant data science skills with hands-on projects, expert faculty, and career-focused training.\n\n Kolkata is fast emerging as a technology and analytics hub, and our Data Science program equips you with practical knowledge, real-world exposure, and placement assistance to compete in top data-driven roles across India."

    },
    longDescription: "The Data Engineering Course in Mumbai offers end-to-end training on designing, building, and managing enterprise-grade data infrastructure. The curriculum blends strong fundamentals with hands-on implementation to ensure learners are job-ready. \n\n With Mumbai hosting major banks, financial institutions, consulting firms, and large enterprises, the course emphasizes real-world use cases such as transactional data processing, analytics pipelines, and cloud data warehousing. Learners gain exposure to batch and real-time data processing, distributed systems, and modern data architectures. \n\n The program is delivered through instructor-led sessions, practical labs, and industry-aligned case studies, making it suitable for both freshers and working professionals in Mumbai."
    , instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
        , isDirector: true
      }
    ],

    curriculum: [
      {
        id: "m1",
        title: "SQL Queries & Relational Database Management",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "SQL Basics: Introduction to Database Management System (DBMS), Introduction to Google BigQuery and MySQL, CRUD Operations", duration: "3 hrs" },
          { id: "t2", title: "Data Manipulation and Transformation: Logical, Numerical, and Mathematical Operators, Conditional Statements", duration: "2.5 hrs" },
          { id: "t3", title: "Data Cleaning: Type Casting, Date/Time Formatting, Text Formatting", duration: "2 hrs" },
          { id: "t4", title: "Pattern Matching: LIKE Operator, REGEXP Functions", duration: "1.5 hrs" },
          { id: "t5", title: "Joins and Relational Databases: Keys, Join Types, Indexing, Normalization", duration: "4 hrs" },
          { id: "t6", title: "Aggregation and Grouping: Aggregate Functions, GROUP BY, CTEs, Variables", duration: "3.5 hrs" },
          { id: "t7", title: "Window Functions: RANK, DENSE_RANK, ROW_NUMBER, LEAD/LAG", duration: "2.5 hrs" },
          { id: "t8", title: "Data Reusability: Views, Stored Procedures, UDFs", duration: "2 hrs" },
          { id: "t9", title: "Subqueries: Simple, EXISTS/NOT EXISTS, Correlated", duration: "1.5 hrs" },
          { id: "t10", title: "Cloud Services: BigQuery Querying, Sharing Results, Permissions, Scheduling", duration: "1.5 hrs" },
          { id: "t11", title: "Online SQL Platforms: MySQL Workbench, Online IDEs, Cloud Storage Integration", duration: "0.5 hrs" }
        ]
      }
      ,

      {
        "id": "m2",
        "title": "Cloud Essentials, Fundamentals & Bigdata in Azure",
        "duration": "8 hrs",
        "topics": [
          { "id": "t1", "title": "Blob / Queue / Table Storage", "duration": "0.5 hrs" },
          { "id": "t2", "title": "Azure SQL Database", "duration": "0.5 hrs" },
          { "id": "t3", "title": "Data Lake (Gen1 & Gen2)", "duration": "0.5 hrs" },
          { "id": "t4", "title": "Synapse Analytics", "duration": "0.5 hrs" },
          { "id": "t5", "title": "Azure Cosmos DB", "duration": "0.5 hrs" },
          { "id": "t6", "title": "Azure Data Factory (Data Pipeline)", "duration": "0.5 hrs" },
          { "id": "t7", "title": "Azure Event Hubs", "duration": "0.4 hrs" },
          { "id": "t8", "title": "Databricks (Data Processing)", "duration": "0.5 hrs" },
          { "id": "t9", "title": "Scaling and Monitoring", "duration": "0.4 hrs" },
          { "id": "t10", "title": "Azure Service Models (IaaS, PaaS, SaaS)", "duration": "0.4 hrs" },
          { "id": "t11", "title": "Managed Identity & Active Directory", "duration": "0.4 hrs" },
          { "id": "t12", "title": "Network Security Group (Public, Private, Hybrid)", "duration": "0.4 hrs" },
          { "id": "t13", "title": "Azure Key Vault", "duration": "0.4 hrs" },
          { "id": "t14", "title": "Azure Monitor & Cost Calculator", "duration": "0.4 hrs" },
          { "id": "t15", "title": "CLI Commands", "duration": "0.4 hrs" },
          { "id": "t16", "title": "Azure Virtual Machine", "duration": "0.4 hrs" }
        ]
      },

      {
        "id": "m3",
        "title": "Hadoop Framework & Architecture",
        "duration": "4 hrs",
        "topics": [
          { "id": "t1", "title": "Complete Hadoop Architecture", "duration": "0.5 hrs" },
          { "id": "t2", "title": "MapReduce Functioning", "duration": "0.5 hrs" },
          { "id": "t3", "title": "HDFS (Hadoop Distributed File System)", "duration": "0.5 hrs" },
          { "id": "t4", "title": "YARN (Yet Another Resource Negotiator)", "duration": "0.4 hrs" },
          { "id": "t5", "title": "Blocks, Splits, Maps, Data Spilling, Heartbeats, Data Replication, FS Image, Checkpointing, High Availability", "duration": "1.0 hrs" },
          { "id": "t6", "title": "Hadoop Daemons - NameNode, DataNode, Secondary NameNode, Standby NameNode", "duration": "1.1 hrs" }
        ]
      },
      {
        "id": "m4",
        "title": "Apache Spark Architecture & Programming",
        "duration": "8 hrs",
        "topics": [
          { "id": "t1", "title": "Spark Architecture & Core Concepts", "duration": "1.0 hrs" },
          { "id": "t2", "title": "RDDs, Actions & Transformations", "duration": "1.0 hrs" },
          { "id": "t3", "title": "Lineage, Lazy Eval, Broadcaster, Accumulator", "duration": "1.0 hrs" },
          { "id": "t4", "title": "Spark SQL: Structs, Joins, Optimization", "duration": "1.0 hrs" },
          { "id": "t5", "title": "Read/Write, Spark Submit, Resource Allocation", "duration": "1.0 hrs" },
          { "id": "t6", "title": "Spark UI: Stages, Tasks, Debugging", "duration": "1.0 hrs" },
          { "id": "t7", "title": "Memory Mgmt: Cache, Persist, Serialization", "duration": "1.0 hrs" },
          { "id": "t8", "title": "Spark Streaming, GraphX Integration", "duration": "1.0 hrs" }
        ]
      }
      ,
      {
        "id": "m5",
        "title": "MongoDB for Developers & Admins",
        "duration": "2 hrs",
        "topics": [
          { "id": "t1", "title": "Introduction to MongoDB and its Architecture", "duration": "0.3 hrs" },
          { "id": "t2", "title": "Data Modeling with MongoDB - Schema Design & Relationships", "duration": "0.4 hrs" },
          { "id": "t3", "title": "Advanced Features - Aggregation, Text Search, Geospatial Queries", "duration": "0.4 hrs" },
          { "id": "t4", "title": "MongoDB Administration - Deployment & Configuration", "duration": "0.45 hrs" },
          { "id": "t5", "title": "Scaling MongoDB - Sharding & Distributed Cluster Management", "duration": "0.45 hrs" }
        ]
      }
      ,
      {
        "id": "m6",
        "title": "Apache Kafka Basics",
        "duration": "2 hrs",
        "topics": [
          { "id": "t1", "title": "Producer & Consumer", "duration": "0.3 hrs" },
          { "id": "t2", "title": "Kafka Cluster Setup & Brokers", "duration": "0.25 hrs" },
          { "id": "t3", "title": "Topics, Partitioning, Offset, Polling", "duration": "0.45 hrs" },
          { "id": "t4", "title": "Data Replication & Data Retention", "duration": "0.3 hrs" },
          { "id": "t5", "title": "Consumer Group", "duration": "0.4 hrs" },
          { "id": "t6", "title": "ZooKeeper", "duration": "0.3 hrs" }
        ]
      },
      {
        "id": "m7",
        "title": "Apache Hive for Data Warehousing",
        "duration": "4 hrs",
        "topics": [
          { "id": "t1", "title": "Hive Installation", "duration": "0.25 hrs" },
          { "id": "t2", "title": "Query Syntax", "duration": "0.35 hrs" },
          { "id": "t3", "title": "Bulk Data Load", "duration": "0.25 hrs" },
          { "id": "t4", "title": "Internal vs External Tables", "duration": "0.3 hrs" },
          { "id": "t5", "title": "Static & Dynamic Partitioning", "duration": "0.4 hrs" },
          { "id": "t6", "title": "Bucketing", "duration": "0.3 hrs" },
          { "id": "t7", "title": "Map Side Join, Bucket Join, and Sort Merge Bucket Join", "duration": "0.5 hrs" },
          { "id": "t8", "title": "Hive SerDe", "duration": "0.3 hrs" },
          { "id": "t9", "title": "User Defined Functions (UDFs) in Hive", "duration": "0.4 hrs" },
          { "id": "t10", "title": "Query Optimization", "duration": "0.35 hrs" }
        ]
      },
      ,





    ]
    ,
    projects: [
      {
        id: "p1",
        title: "Build Cloud Data Pipeline Using Databricks",
        description: "This video provides an in-depth introduction with real-world project experience, it outlines the career path, key technologies (Hadoop, Spark, Azure), curriculum breakdown, and practical use cases for aspiring data engineers.",
        image: "https://img.youtube.com/vi/aNja1KSqczo/0.jpg",
        skills: ["Apache ", "Big Data", "Azure"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "aNja1KSqczo"
      },
      {
        id: "p2",
        title: "How to Create End-to-End ETL Pipeline",
        description: "Dive deep into practical data solutions using Azure by setting up a complete data pipeline, from storing CSV files in Azure Blob Storage to efficiently transferring data into SQL databases.",
        image: "https://img.youtube.com/vi/yYbU_Bihvdc/0.jpg",
        skills: ["Virtual Machines ", "Azure", "SQL"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "yYbU_Bihvdc"
      },
      {
        id: "p3",
        title: "Data Engineering Career Roadmap 2025",
        description: "Get comprehensive roadmap for anyone looking to start or grow their career in Data Engineering in 2025. You'll understand the real-world data pipeline, in-demand tools (SQL, Python, Spark, Docker, Cloud).",
        image: "https://img.youtube.com/vi/QbI60IMgO_g/0.jpg",
        skills: ["SQL", "Python", "Spark", "Docker", "Cloud"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "QbI60IMgO_g"
      },
      // {
      //   id: "p4",
      //   title: "Superstore Sales Analysis Using Excel ",
      //   description: "Explore Superstore sales data and generate key business insights using Excel. Analyze product lines, profitable cities, gender-based sales performance, month-on-month growth, and create a dashboard to track critical metrics.",
      //   image: "https://img.youtube.com/vi/KGrApiKUR4M/0.jpg",
      //   skills: ["Excel", "Data Analysis", "Business Analytics", "Sales Analytics", "Dashboard", "Business Insights"],
      //   difficulty: "Beginner to Intermediate",
      //   videoId: "KGrApiKUR4M"
      // },
      // {
      //   id: "p5",
      //   title: "Predicting Car Sales using Linear Regression in R",
      //   description: "Analyze Superstore sales data in Excel to uncover insights on product lines, profitable cities, gender-based performance, month-on-month growth, and create a dashboard to track key metrics.",
      //   image: "https://img.youtube.com/vi/8nNgJJH7pMk/0.jpg",
      //   skills: ["R", "Linear Regression", "Car Sales Prediction", "Data Analysis", "Model Evaluation", "Variable Significance"],
      //   difficulty: "Intermediate",
      //   videoId: "8nNgJJH7pMk"
      // },
      // {
      //   id: "p6",
      //   title: "Crime Intelligence Dashboard in Power BI",
      //   description: "Create an interactive, data-driven crime intelligence dashboard using real-world data from the Manchester Police Department. Learn to transform data, set up KPIs, design visualizations, and implement geospatial mapping to analyze crime trends and improve law enforcement efficiency.",
      //   image: "https://img.youtube.com/vi/sVXjAIa7YBs/0.jpg",
      //   skills: ["Power BI", "DAX", "KPI Cards", "Data Transformation", "Data Visualization", "Crime Analysis"],
      //   difficulty: "Intermediate",
      //   videoId: "sVXjAIa7YBs"
      // }
    ],
    outcomes: [
      "Understand the complete data engineering lifecycle",
      "Design and implement ETL and ELT data pipelines",
      "Use SQL and Python for data processing and automation",
      "Work with relational and NoSQL databases",
      "Build distributed data systems using Hadoop and Apache Spark",
      "Implement batch and real-time data processing frameworks",
      
    ],


  },

  {
    id: '11',
    title: "Data Engineering Course in Pune",
    description: "The Data Engineering Course in Pune by Ivy Professional School is designed to help learners build industry-ready skills in data engineering, big data technologies, and modern data platforms. Pune is a fast-growing IT and analytics hub with strong presence of software companies, startups, and global delivery centers, creating high demand for skilled data engineers. This program focuses on practical, job-oriented training that prepares students to design, develop, and manage scalable data pipelines used by modern organizations.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Deep Learning",
    students: 1098,
    duration: "6 weeks",
    rating: 4.7,
    reviewCount: 20,
    isFeatured: true,
    slug: "data-engineering-course-pune",
    metaData: {
      title: "Data Engineering Course in Pune | Ivy Professional School",
      description: "Join Ivy Professional School’s Data Engineering Course in Pune with hands-on projects, big data & cloud tools, expert mentors, and career support.",
      bio: "Looking to build a high-growth career in analytics, Machine Learning, and Artificial Intelligence? The Data Science Course in Pune by Ivy Professional School is designed to help students and working professionals master industry-relevant data science skills with hands-on projects, expert faculty, and career-focused training.\n\n Kolkata is fast emerging as a technology and analytics hub, and our Data Science program equips you with practical knowledge, real-world exposure, and placement assistance to compete in top data-driven roles across India."

    },
    longDescription: "The Data Engineering Course in Pune provides comprehensive training on building reliable, scalable, and high-performance data infrastructure. The course combines strong foundational concepts with hands-on implementation of real-world data engineering workflows. \n\n With Pune hosting leading IT services firms, product companies, and analytics-driven startups, the course emphasizes practical use cases such as data warehousing, cloud-based data platforms, and distributed data processing systems. Learners gain exposure to both batch and real-time data processing architectures that support analytics and AI initiatives. \n\n The program is delivered through instructor-led sessions, practical labs, and industry-aligned case studies, making it suitable for freshers as well as working professionals in Pune."
    , instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
        , isDirector: true
      }
    ],

    curriculum: [
      {
        id: "m1",
        title: "SQL Queries & Relational Database Management",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "SQL Basics: Introduction to Database Management System (DBMS), Introduction to Google BigQuery and MySQL, CRUD Operations", duration: "3 hrs" },
          { id: "t2", title: "Data Manipulation and Transformation: Logical, Numerical, and Mathematical Operators, Conditional Statements", duration: "2.5 hrs" },
          { id: "t3", title: "Data Cleaning: Type Casting, Date/Time Formatting, Text Formatting", duration: "2 hrs" },
          { id: "t4", title: "Pattern Matching: LIKE Operator, REGEXP Functions", duration: "1.5 hrs" },
          { id: "t5", title: "Joins and Relational Databases: Keys, Join Types, Indexing, Normalization", duration: "4 hrs" },
          { id: "t6", title: "Aggregation and Grouping: Aggregate Functions, GROUP BY, CTEs, Variables", duration: "3.5 hrs" },
          { id: "t7", title: "Window Functions: RANK, DENSE_RANK, ROW_NUMBER, LEAD/LAG", duration: "2.5 hrs" },
          { id: "t8", title: "Data Reusability: Views, Stored Procedures, UDFs", duration: "2 hrs" },
          { id: "t9", title: "Subqueries: Simple, EXISTS/NOT EXISTS, Correlated", duration: "1.5 hrs" },
          { id: "t10", title: "Cloud Services: BigQuery Querying, Sharing Results, Permissions, Scheduling", duration: "1.5 hrs" },
          { id: "t11", title: "Online SQL Platforms: MySQL Workbench, Online IDEs, Cloud Storage Integration", duration: "0.5 hrs" }
        ]
      }
      ,

      {
        "id": "m2",
        "title": "Cloud Essentials, Fundamentals & Bigdata in Azure",
        "duration": "8 hrs",
        "topics": [
          { "id": "t1", "title": "Blob / Queue / Table Storage", "duration": "0.5 hrs" },
          { "id": "t2", "title": "Azure SQL Database", "duration": "0.5 hrs" },
          { "id": "t3", "title": "Data Lake (Gen1 & Gen2)", "duration": "0.5 hrs" },
          { "id": "t4", "title": "Synapse Analytics", "duration": "0.5 hrs" },
          { "id": "t5", "title": "Azure Cosmos DB", "duration": "0.5 hrs" },
          { "id": "t6", "title": "Azure Data Factory (Data Pipeline)", "duration": "0.5 hrs" },
          { "id": "t7", "title": "Azure Event Hubs", "duration": "0.4 hrs" },
          { "id": "t8", "title": "Databricks (Data Processing)", "duration": "0.5 hrs" },
          { "id": "t9", "title": "Scaling and Monitoring", "duration": "0.4 hrs" },
          { "id": "t10", "title": "Azure Service Models (IaaS, PaaS, SaaS)", "duration": "0.4 hrs" },
          { "id": "t11", "title": "Managed Identity & Active Directory", "duration": "0.4 hrs" },
          { "id": "t12", "title": "Network Security Group (Public, Private, Hybrid)", "duration": "0.4 hrs" },
          { "id": "t13", "title": "Azure Key Vault", "duration": "0.4 hrs" },
          { "id": "t14", "title": "Azure Monitor & Cost Calculator", "duration": "0.4 hrs" },
          { "id": "t15", "title": "CLI Commands", "duration": "0.4 hrs" },
          { "id": "t16", "title": "Azure Virtual Machine", "duration": "0.4 hrs" }
        ]
      },

      {
        "id": "m3",
        "title": "Hadoop Framework & Architecture",
        "duration": "4 hrs",
        "topics": [
          { "id": "t1", "title": "Complete Hadoop Architecture", "duration": "0.5 hrs" },
          { "id": "t2", "title": "MapReduce Functioning", "duration": "0.5 hrs" },
          { "id": "t3", "title": "HDFS (Hadoop Distributed File System)", "duration": "0.5 hrs" },
          { "id": "t4", "title": "YARN (Yet Another Resource Negotiator)", "duration": "0.4 hrs" },
          { "id": "t5", "title": "Blocks, Splits, Maps, Data Spilling, Heartbeats, Data Replication, FS Image, Checkpointing, High Availability", "duration": "1.0 hrs" },
          { "id": "t6", "title": "Hadoop Daemons - NameNode, DataNode, Secondary NameNode, Standby NameNode", "duration": "1.1 hrs" }
        ]
      },
      {
        "id": "m4",
        "title": "Apache Spark Architecture & Programming",
        "duration": "8 hrs",
        "topics": [
          { "id": "t1", "title": "Spark Architecture & Core Concepts", "duration": "1.0 hrs" },
          { "id": "t2", "title": "RDDs, Actions & Transformations", "duration": "1.0 hrs" },
          { "id": "t3", "title": "Lineage, Lazy Eval, Broadcaster, Accumulator", "duration": "1.0 hrs" },
          { "id": "t4", "title": "Spark SQL: Structs, Joins, Optimization", "duration": "1.0 hrs" },
          { "id": "t5", "title": "Read/Write, Spark Submit, Resource Allocation", "duration": "1.0 hrs" },
          { "id": "t6", "title": "Spark UI: Stages, Tasks, Debugging", "duration": "1.0 hrs" },
          { "id": "t7", "title": "Memory Mgmt: Cache, Persist, Serialization", "duration": "1.0 hrs" },
          { "id": "t8", "title": "Spark Streaming, GraphX Integration", "duration": "1.0 hrs" }
        ]
      }
      ,
      {
        "id": "m5",
        "title": "MongoDB for Developers & Admins",
        "duration": "2 hrs",
        "topics": [
          { "id": "t1", "title": "Introduction to MongoDB and its Architecture", "duration": "0.3 hrs" },
          { "id": "t2", "title": "Data Modeling with MongoDB - Schema Design & Relationships", "duration": "0.4 hrs" },
          { "id": "t3", "title": "Advanced Features - Aggregation, Text Search, Geospatial Queries", "duration": "0.4 hrs" },
          { "id": "t4", "title": "MongoDB Administration - Deployment & Configuration", "duration": "0.45 hrs" },
          { "id": "t5", "title": "Scaling MongoDB - Sharding & Distributed Cluster Management", "duration": "0.45 hrs" }
        ]
      }
      ,
      {
        "id": "m6",
        "title": "Apache Kafka Basics",
        "duration": "2 hrs",
        "topics": [
          { "id": "t1", "title": "Producer & Consumer", "duration": "0.3 hrs" },
          { "id": "t2", "title": "Kafka Cluster Setup & Brokers", "duration": "0.25 hrs" },
          { "id": "t3", "title": "Topics, Partitioning, Offset, Polling", "duration": "0.45 hrs" },
          { "id": "t4", "title": "Data Replication & Data Retention", "duration": "0.3 hrs" },
          { "id": "t5", "title": "Consumer Group", "duration": "0.4 hrs" },
          { "id": "t6", "title": "ZooKeeper", "duration": "0.3 hrs" }
        ]
      },
      {
        "id": "m7",
        "title": "Apache Hive for Data Warehousing",
        "duration": "4 hrs",
        "topics": [
          { "id": "t1", "title": "Hive Installation", "duration": "0.25 hrs" },
          { "id": "t2", "title": "Query Syntax", "duration": "0.35 hrs" },
          { "id": "t3", "title": "Bulk Data Load", "duration": "0.25 hrs" },
          { "id": "t4", "title": "Internal vs External Tables", "duration": "0.3 hrs" },
          { "id": "t5", "title": "Static & Dynamic Partitioning", "duration": "0.4 hrs" },
          { "id": "t6", "title": "Bucketing", "duration": "0.3 hrs" },
          { "id": "t7", "title": "Map Side Join, Bucket Join, and Sort Merge Bucket Join", "duration": "0.5 hrs" },
          { "id": "t8", "title": "Hive SerDe", "duration": "0.3 hrs" },
          { "id": "t9", "title": "User Defined Functions (UDFs) in Hive", "duration": "0.4 hrs" },
          { "id": "t10", "title": "Query Optimization", "duration": "0.35 hrs" }
        ]
      },
      ,





    ]
    ,
    projects: [
      {
        id: "p1",
        title: "Build Cloud Data Pipeline Using Databricks",
        description: "This video provides an in-depth introduction with real-world project experience, it outlines the career path, key technologies (Hadoop, Spark, Azure), curriculum breakdown, and practical use cases for aspiring data engineers.",
        image: "https://img.youtube.com/vi/aNja1KSqczo/0.jpg",
        skills: ["Apache ", "Big Data", "Azure"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "aNja1KSqczo"
      },
      {
        id: "p2",
        title: "How to Create End-to-End ETL Pipeline",
        description: "Dive deep into practical data solutions using Azure by setting up a complete data pipeline, from storing CSV files in Azure Blob Storage to efficiently transferring data into SQL databases.",
        image: "https://img.youtube.com/vi/yYbU_Bihvdc/0.jpg",
        skills: ["Virtual Machines ", "Azure", "SQL"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "yYbU_Bihvdc"
      },
      {
        id: "p3",
        title: "Data Engineering Career Roadmap 2025",
        description: "Get comprehensive roadmap for anyone looking to start or grow their career in Data Engineering in 2025. You'll understand the real-world data pipeline, in-demand tools (SQL, Python, Spark, Docker, Cloud).",
        image: "https://img.youtube.com/vi/QbI60IMgO_g/0.jpg",
        skills: ["SQL", "Python", "Spark", "Docker", "Cloud"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "QbI60IMgO_g"
      },
      // {
      //   id: "p4",
      //   title: "Superstore Sales Analysis Using Excel ",
      //   description: "Explore Superstore sales data and generate key business insights using Excel. Analyze product lines, profitable cities, gender-based sales performance, month-on-month growth, and create a dashboard to track critical metrics.",
      //   image: "https://img.youtube.com/vi/KGrApiKUR4M/0.jpg",
      //   skills: ["Excel", "Data Analysis", "Business Analytics", "Sales Analytics", "Dashboard", "Business Insights"],
      //   difficulty: "Beginner to Intermediate",
      //   videoId: "KGrApiKUR4M"
      // },
      // {
      //   id: "p5",
      //   title: "Predicting Car Sales using Linear Regression in R",
      //   description: "Analyze Superstore sales data in Excel to uncover insights on product lines, profitable cities, gender-based performance, month-on-month growth, and create a dashboard to track key metrics.",
      //   image: "https://img.youtube.com/vi/8nNgJJH7pMk/0.jpg",
      //   skills: ["R", "Linear Regression", "Car Sales Prediction", "Data Analysis", "Model Evaluation", "Variable Significance"],
      //   difficulty: "Intermediate",
      //   videoId: "8nNgJJH7pMk"
      // },
      // {
      //   id: "p6",
      //   title: "Crime Intelligence Dashboard in Power BI",
      //   description: "Create an interactive, data-driven crime intelligence dashboard using real-world data from the Manchester Police Department. Learn to transform data, set up KPIs, design visualizations, and implement geospatial mapping to analyze crime trends and improve law enforcement efficiency.",
      //   image: "https://img.youtube.com/vi/sVXjAIa7YBs/0.jpg",
      //   skills: ["Power BI", "DAX", "KPI Cards", "Data Transformation", "Data Visualization", "Crime Analysis"],
      //   difficulty: "Intermediate",
      //   videoId: "sVXjAIa7YBs"
      // }
    ],
    outcomes: [
      "Understand the complete data engineering lifecycle",
      "Design and implement ETL and ELT data pipelines",
      "Use SQL and Python for data processing and automation",
      "Work with relational and NoSQL databases",
      "Build distributed data processing systems using Hadoop and Apache Spark",
      "Implement batch and real-time data processing frameworks",
      
    ],


  },

  {
    id: '11',
    title: "Data Engineering Course in Chennai",
    description: "The Data Engineering Course in Chennai by Ivy Professional School is designed for learners who want to build a strong career in data engineering and big data technologies. Chennai is a major hub for IT services, SaaS companies, manufacturing analytics, and global delivery centers, making it an ideal city for aspiring data engineers. This program equips students with industry-relevant skills to design, develop, and manage scalable data pipelines and data platforms used by modern enterprises.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Deep Learning",
    students: 1098,
    duration: "6 weeks",
    rating: 4.7,
    reviewCount: 20,
    isFeatured: true,
    slug: "data-engineering-course-chennai",
    metaData: {
      title: "Data Engineering Course in Chennai | Ivy Professional School",
      description: "Enroll in Ivy Professional School’s Data Engineering Course in Chennai with hands-on projects, big data & cloud tools, expert mentors, and career support.",
      bio: "Looking to build a high-growth career in analytics, Machine Learning, and Artificial Intelligence? The Data Science Course in Chennai by Ivy Professional School is designed to help students and working professionals master industry-relevant data science skills with hands-on projects, expert faculty, and career-focused training.\n\n Kolkata is fast emerging as a technology and analytics hub, and our Data Science program equips you with practical knowledge, real-world exposure, and placement assistance to compete in top data-driven roles across India."

    },
    longDescription: "The Data Engineering Course in Chennai offers end-to-end training on building robust, scalable, and high-performance data infrastructure. The course focuses on real-world data engineering workflows, combining strong theoretical foundations with hands-on practical implementation. \n\n With Chennai hosting leading IT services firms, global technology centers, and analytics-driven organizations, the course emphasizes practical use cases such as enterprise data pipelines, cloud data warehousing, and distributed data processing. Learners gain exposure to both batch and real-time data processing systems that support analytics and AI applications."
    , instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
        , isDirector: true
      }
    ],

    curriculum: [
      {
        id: "m1",
        title: "SQL Queries & Relational Database Management",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "SQL Basics: Introduction to Database Management System (DBMS), Introduction to Google BigQuery and MySQL, CRUD Operations", duration: "3 hrs" },
          { id: "t2", title: "Data Manipulation and Transformation: Logical, Numerical, and Mathematical Operators, Conditional Statements", duration: "2.5 hrs" },
          { id: "t3", title: "Data Cleaning: Type Casting, Date/Time Formatting, Text Formatting", duration: "2 hrs" },
          { id: "t4", title: "Pattern Matching: LIKE Operator, REGEXP Functions", duration: "1.5 hrs" },
          { id: "t5", title: "Joins and Relational Databases: Keys, Join Types, Indexing, Normalization", duration: "4 hrs" },
          { id: "t6", title: "Aggregation and Grouping: Aggregate Functions, GROUP BY, CTEs, Variables", duration: "3.5 hrs" },
          { id: "t7", title: "Window Functions: RANK, DENSE_RANK, ROW_NUMBER, LEAD/LAG", duration: "2.5 hrs" },
          { id: "t8", title: "Data Reusability: Views, Stored Procedures, UDFs", duration: "2 hrs" },
          { id: "t9", title: "Subqueries: Simple, EXISTS/NOT EXISTS, Correlated", duration: "1.5 hrs" },
          { id: "t10", title: "Cloud Services: BigQuery Querying, Sharing Results, Permissions, Scheduling", duration: "1.5 hrs" },
          { id: "t11", title: "Online SQL Platforms: MySQL Workbench, Online IDEs, Cloud Storage Integration", duration: "0.5 hrs" }
        ]
      }
      ,

      {
        "id": "m2",
        "title": "Cloud Essentials, Fundamentals & Bigdata in Azure",
        "duration": "8 hrs",
        "topics": [
          { "id": "t1", "title": "Blob / Queue / Table Storage", "duration": "0.5 hrs" },
          { "id": "t2", "title": "Azure SQL Database", "duration": "0.5 hrs" },
          { "id": "t3", "title": "Data Lake (Gen1 & Gen2)", "duration": "0.5 hrs" },
          { "id": "t4", "title": "Synapse Analytics", "duration": "0.5 hrs" },
          { "id": "t5", "title": "Azure Cosmos DB", "duration": "0.5 hrs" },
          { "id": "t6", "title": "Azure Data Factory (Data Pipeline)", "duration": "0.5 hrs" },
          { "id": "t7", "title": "Azure Event Hubs", "duration": "0.4 hrs" },
          { "id": "t8", "title": "Databricks (Data Processing)", "duration": "0.5 hrs" },
          { "id": "t9", "title": "Scaling and Monitoring", "duration": "0.4 hrs" },
          { "id": "t10", "title": "Azure Service Models (IaaS, PaaS, SaaS)", "duration": "0.4 hrs" },
          { "id": "t11", "title": "Managed Identity & Active Directory", "duration": "0.4 hrs" },
          { "id": "t12", "title": "Network Security Group (Public, Private, Hybrid)", "duration": "0.4 hrs" },
          { "id": "t13", "title": "Azure Key Vault", "duration": "0.4 hrs" },
          { "id": "t14", "title": "Azure Monitor & Cost Calculator", "duration": "0.4 hrs" },
          { "id": "t15", "title": "CLI Commands", "duration": "0.4 hrs" },
          { "id": "t16", "title": "Azure Virtual Machine", "duration": "0.4 hrs" }
        ]
      },

      {
        "id": "m3",
        "title": "Hadoop Framework & Architecture",
        "duration": "4 hrs",
        "topics": [
          { "id": "t1", "title": "Complete Hadoop Architecture", "duration": "0.5 hrs" },
          { "id": "t2", "title": "MapReduce Functioning", "duration": "0.5 hrs" },
          { "id": "t3", "title": "HDFS (Hadoop Distributed File System)", "duration": "0.5 hrs" },
          { "id": "t4", "title": "YARN (Yet Another Resource Negotiator)", "duration": "0.4 hrs" },
          { "id": "t5", "title": "Blocks, Splits, Maps, Data Spilling, Heartbeats, Data Replication, FS Image, Checkpointing, High Availability", "duration": "1.0 hrs" },
          { "id": "t6", "title": "Hadoop Daemons - NameNode, DataNode, Secondary NameNode, Standby NameNode", "duration": "1.1 hrs" }
        ]
      },
      {
        "id": "m4",
        "title": "Apache Spark Architecture & Programming",
        "duration": "8 hrs",
        "topics": [
          { "id": "t1", "title": "Spark Architecture & Core Concepts", "duration": "1.0 hrs" },
          { "id": "t2", "title": "RDDs, Actions & Transformations", "duration": "1.0 hrs" },
          { "id": "t3", "title": "Lineage, Lazy Eval, Broadcaster, Accumulator", "duration": "1.0 hrs" },
          { "id": "t4", "title": "Spark SQL: Structs, Joins, Optimization", "duration": "1.0 hrs" },
          { "id": "t5", "title": "Read/Write, Spark Submit, Resource Allocation", "duration": "1.0 hrs" },
          { "id": "t6", "title": "Spark UI: Stages, Tasks, Debugging", "duration": "1.0 hrs" },
          { "id": "t7", "title": "Memory Mgmt: Cache, Persist, Serialization", "duration": "1.0 hrs" },
          { "id": "t8", "title": "Spark Streaming, GraphX Integration", "duration": "1.0 hrs" }
        ]
      }
      ,
      {
        "id": "m5",
        "title": "MongoDB for Developers & Admins",
        "duration": "2 hrs",
        "topics": [
          { "id": "t1", "title": "Introduction to MongoDB and its Architecture", "duration": "0.3 hrs" },
          { "id": "t2", "title": "Data Modeling with MongoDB - Schema Design & Relationships", "duration": "0.4 hrs" },
          { "id": "t3", "title": "Advanced Features - Aggregation, Text Search, Geospatial Queries", "duration": "0.4 hrs" },
          { "id": "t4", "title": "MongoDB Administration - Deployment & Configuration", "duration": "0.45 hrs" },
          { "id": "t5", "title": "Scaling MongoDB - Sharding & Distributed Cluster Management", "duration": "0.45 hrs" }
        ]
      }
      ,
      {
        "id": "m6",
        "title": "Apache Kafka Basics",
        "duration": "2 hrs",
        "topics": [
          { "id": "t1", "title": "Producer & Consumer", "duration": "0.3 hrs" },
          { "id": "t2", "title": "Kafka Cluster Setup & Brokers", "duration": "0.25 hrs" },
          { "id": "t3", "title": "Topics, Partitioning, Offset, Polling", "duration": "0.45 hrs" },
          { "id": "t4", "title": "Data Replication & Data Retention", "duration": "0.3 hrs" },
          { "id": "t5", "title": "Consumer Group", "duration": "0.4 hrs" },
          { "id": "t6", "title": "ZooKeeper", "duration": "0.3 hrs" }
        ]
      },
      {
        "id": "m7",
        "title": "Apache Hive for Data Warehousing",
        "duration": "4 hrs",
        "topics": [
          { "id": "t1", "title": "Hive Installation", "duration": "0.25 hrs" },
          { "id": "t2", "title": "Query Syntax", "duration": "0.35 hrs" },
          { "id": "t3", "title": "Bulk Data Load", "duration": "0.25 hrs" },
          { "id": "t4", "title": "Internal vs External Tables", "duration": "0.3 hrs" },
          { "id": "t5", "title": "Static & Dynamic Partitioning", "duration": "0.4 hrs" },
          { "id": "t6", "title": "Bucketing", "duration": "0.3 hrs" },
          { "id": "t7", "title": "Map Side Join, Bucket Join, and Sort Merge Bucket Join", "duration": "0.5 hrs" },
          { "id": "t8", "title": "Hive SerDe", "duration": "0.3 hrs" },
          { "id": "t9", "title": "User Defined Functions (UDFs) in Hive", "duration": "0.4 hrs" },
          { "id": "t10", "title": "Query Optimization", "duration": "0.35 hrs" }
        ]
      },
      ,





    ]
    ,
    projects: [
      {
        id: "p1",
        title: "Build Cloud Data Pipeline Using Databricks",
        description: "This video provides an in-depth introduction with real-world project experience, it outlines the career path, key technologies (Hadoop, Spark, Azure), curriculum breakdown, and practical use cases for aspiring data engineers.",
        image: "https://img.youtube.com/vi/aNja1KSqczo/0.jpg",
        skills: ["Apache ", "Big Data", "Azure"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "aNja1KSqczo"
      },
      {
        id: "p2",
        title: "How to Create End-to-End ETL Pipeline",
        description: "Dive deep into practical data solutions using Azure by setting up a complete data pipeline, from storing CSV files in Azure Blob Storage to efficiently transferring data into SQL databases.",
        image: "https://img.youtube.com/vi/yYbU_Bihvdc/0.jpg",
        skills: ["Virtual Machines ", "Azure", "SQL"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "yYbU_Bihvdc"
      },
      {
        id: "p3",
        title: "Data Engineering Career Roadmap 2025",
        description: "Get comprehensive roadmap for anyone looking to start or grow their career in Data Engineering in 2025. You'll understand the real-world data pipeline, in-demand tools (SQL, Python, Spark, Docker, Cloud).",
        image: "https://img.youtube.com/vi/QbI60IMgO_g/0.jpg",
        skills: ["SQL", "Python", "Spark", "Docker", "Cloud"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "QbI60IMgO_g"
      },
      // {
      //   id: "p4",
      //   title: "Superstore Sales Analysis Using Excel ",
      //   description: "Explore Superstore sales data and generate key business insights using Excel. Analyze product lines, profitable cities, gender-based sales performance, month-on-month growth, and create a dashboard to track critical metrics.",
      //   image: "https://img.youtube.com/vi/KGrApiKUR4M/0.jpg",
      //   skills: ["Excel", "Data Analysis", "Business Analytics", "Sales Analytics", "Dashboard", "Business Insights"],
      //   difficulty: "Beginner to Intermediate",
      //   videoId: "KGrApiKUR4M"
      // },
      // {
      //   id: "p5",
      //   title: "Predicting Car Sales using Linear Regression in R",
      //   description: "Analyze Superstore sales data in Excel to uncover insights on product lines, profitable cities, gender-based performance, month-on-month growth, and create a dashboard to track key metrics.",
      //   image: "https://img.youtube.com/vi/8nNgJJH7pMk/0.jpg",
      //   skills: ["R", "Linear Regression", "Car Sales Prediction", "Data Analysis", "Model Evaluation", "Variable Significance"],
      //   difficulty: "Intermediate",
      //   videoId: "8nNgJJH7pMk"
      // },
      // {
      //   id: "p6",
      //   title: "Crime Intelligence Dashboard in Power BI",
      //   description: "Create an interactive, data-driven crime intelligence dashboard using real-world data from the Manchester Police Department. Learn to transform data, set up KPIs, design visualizations, and implement geospatial mapping to analyze crime trends and improve law enforcement efficiency.",
      //   image: "https://img.youtube.com/vi/sVXjAIa7YBs/0.jpg",
      //   skills: ["Power BI", "DAX", "KPI Cards", "Data Transformation", "Data Visualization", "Crime Analysis"],
      //   difficulty: "Intermediate",
      //   videoId: "sVXjAIa7YBs"
      // }
    ],
    outcomes: [
      "Understand the complete data engineering lifecycle from ingestion to analytics-ready data",
      "Design and implement ETL and ELT data pipelines",
      "Work with relational and NoSQL databases",
      "Build distributed data processing systems using Hadoop and Apache Spark",
      "Implement batch and real-time data processing frameworks",
      "Prepare for Data Engineer roles in Chennai’s competitive job market",
      
    ],


  },


  {
    id: '12',
    title: "Data Science with Machine Learning & AI Course in Kolkata",
    description: "Looking to build a high-growth career in analytics, Machine Learning, and Artificial Intelligence? The Data Science Course in Kolkata by Ivy Professional School is designed to help students and working professionals master industry-relevant data science skills with hands-on projects, expert faculty, and career-focused training. \n\n Kolkata is fast emerging as a technology and analytics hub, and our Data Science program equips you with practical knowledge, real-world exposure, and placement assistance to compete in top data-driven roles across India.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Deep Learning",
    students: 1243,
    metaData: {
      title: "Data Science Course in Kolkata | Ivy Professional School",
      description: "Enroll in the Data Science Course in Kolkata by Ivy Professional School. Learn Machine Learning & AI with real projects, expert mentors, and strong placement support.",
      bio: "Looking to build a high-growth career in analytics, Machine Learning, and Artificial Intelligence? The Data Science Course in Kolkata by Ivy Professional School is designed to help students and working professionals master industry-relevant data science skills with hands-on projects, expert faculty, and career-focused training.\n\n Kolkata is fast emerging as a technology and analytics hub, and our Data Science program equips you with practical knowledge, real-world exposure, and placement assistance to compete in top data-driven roles across India."

    },
    duration: "14 weeks",
    rating: 4.8,
    reviewCount: 298,
    isFeatured: true,
    slug: "data-science-course-kolkata",
    longDescription: "The Data Science Course in Kolkata is a comprehensive, industry-aligned program covering statistics, Python, Machine Learning, AI, SQL, visualization tools, and real-world business problem solving.\n\n The course is structured to take learners from foundational concepts to advanced applications through hands-on labs, case studies, and capstone projects.Whether you are a fresher, IT professional, or working in domains like finance, marketing, or operations, this Kolkata-based data science program enables a smooth transition into analytics and AI-driven roles."
    , instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
        , isDirector: true
      }
    ],
    outcomes: [
      "Apply statistical analysis to real-world datasets",
      "Write efficient Python code for data analysis and modeling",
      "Build and evaluate Machine Learning models",
      "Work with structured and unstructured data",
      "Perform data visualization and storytelling for business insights",
      "Understand AI concepts and practical use cases",
      "Deploy end-to-end data science projects"
    ],



    curriculum: [
      {
        id: "m1",
        title: "Advanced Excel",
        duration: "32 hrs",
        topics: [
          { id: "t1", title: "Basic to Advanced Functions", duration: "" },
          { id: "t2", title: "Data Analysis", duration: "" },
          { id: "t3", title: "Reporting using Pivot Tables", duration: "" },
          { id: "t4", title: "Data Visualization", duration: "" },
          { id: "t5", title: "Data Cleaning", duration: "" },
          { id: "t6", title: "Dashboarding", duration: "" },
          { id: "t7", title: "AI and ChatGPT Integration", duration: "" }
        ]

        // topics: [
        //   { id: "t1", title: "Data Hygiene – Clean, structure, and prepare your dataset", duration: "1.25 hrs" },
        //   { id: "t2", title: "Formatting – Number and table formatting for clarity", duration: "1.25 hrs" },
        //   { id: "t3", title: "Filtering & Sorting – Auto filters, advanced filters, custom sorting", duration: "1.5 hrs" },
        //   { id: "t4", title: "Cell Referencing – Relative, absolute references & formula handling", duration: "1.5 hrs" },
        //   { id: "t5", title: "Basic Functions – SUM, AVERAGE, COUNT, PRODUCT, etc.", duration: "1.75 hrs" },
        //   { id: "t6", title: "Date Functions – TODAY, DATEDIF, EOMONTH, WEEKDAY, etc.", duration: "1.5 hrs" },
        //   { id: "t7", title: "Conditional Functions – SUMIFS, COUNTIFS, AVERAGEIFS", duration: "2 hrs" },
        //   { id: "t8", title: "Database Functions – DSUM, DAVERAGE using criteria tables", duration: "1.25 hrs" },
        //   { id: "t9", title: "Dynamic Arrays (Google Sheets) – FILTER, SORT, UNIQUE, TEXTJOIN", duration: "1.5 hrs" },
        //   { id: "t10", title: "Pivot Tables – Layout, grouping, calculated fields, summarizing", duration: "2.5 hrs" },
        //   { id: "t11", title: "Charts – Chart creation, types, usage, sparklines", duration: "2 hrs" },
        //   { id: "t12", title: "Dashboards – Planning, business insights, slicers, summaries", duration: "2.5 hrs" },
        //   { id: "t13", title: "Logical Functions – IF, AND, OR, IFERROR, SWITCH etc", duration: "1.75 hrs" },
        //   { id: "t14", title: "Lookup Functions – VLOOKUP, XLOOKUP, MATCH, INDIRECT etc", duration: "2.25 hrs" },
        //   { id: "t15", title: "Text Functions – LEFT, MID, FIND, SUBSTITUTE, CONCAT etc", duration: "1.5 hrs" },
        //   { id: "t16", title: "Conditional Formatting – Color scales, data bars, formulas", duration: "1.25 hrs" },
        //   { id: "t17", title: "Data Validation – Lists, error alerts, dependent dropdowns", duration: "1 hr" },
        //   { id: "t18", title: "Goal Seek & Solver – Solve optimization and reverse calculations", duration: "1.25 hrs" },
        //   { id: "t19", title: "Gen AI - How to Use Gen AI in Microsoft Excel, Use Lab.Generative", duration: "0.75 hrs" },
        //   { id: "t20", title: "ChatGPT - How to use Prompt engineering for Data Analysis", duration: "0.75 hrs" }
        // ]
      },


      {
        id: "m2",
        title: "MySQL",
        duration: "32 hrs",
        topics: [
          { id: "t1", title: "Database Management", duration: "" },
          { id: "t2", title: "SQL Queries", duration: "" },
          { id: "t3", title: "Data Retrieval", duration: "" },
          { id: "t4", title: "Database Design", duration: "" },
          { id: "t5", title: "Performance Optimization", duration: "" },
          { id: "t6", title: "AI Tools to Auto Generate and Optimize Queries", duration: "" }
        ]

        // topics: [
        //   { id: "t1", title: "SQL Basics: Introduction to Database Management System (DBMS), Introduction to Google BigQuery and MySQL, CRUD Operations", duration: "3 hrs" },
        //   { id: "t2", title: "Data Manipulation and Transformation: Logical, Numerical, and Mathematical Operators, Conditional Statements", duration: "2.5 hrs" },
        //   { id: "t3", title: "Data Cleaning: Type Casting, Date/Time Formatting, Text Formatting", duration: "2 hrs" },
        //   { id: "t4", title: "Pattern Matching: LIKE Operator, REGEXP Functions", duration: "1.5 hrs" },
        //   { id: "t5", title: "Joins and Relational Databases: Keys, Join Types, Indexing, Normalization", duration: "4 hrs" },
        //   { id: "t6", title: "Aggregation and Grouping: Aggregate Functions, GROUP BY, CTEs, Variables", duration: "3.5 hrs" },
        //   { id: "t7", title: "Window Functions: RANK, DENSE_RANK, ROW_NUMBER, LEAD/LAG", duration: "2.5 hrs" },
        //   { id: "t8", title: "Data Reusability: Views, Stored Procedures, UDFs", duration: "2 hrs" },
        //   { id: "t9", title: "Subqueries: Simple, EXISTS/NOT EXISTS, Correlated", duration: "1.5 hrs" },
        //   { id: "t10", title: "Cloud Services: BigQuery Querying, Sharing Results, Permissions, Scheduling", duration: "1.5 hrs" },
        //   { id: "t11", title: "Online SQL Platforms: MySQL Workbench, Online IDEs, Cloud Storage Integration", duration: "0.5 hrs" }
        // ]
      },

      {
        id: "m3",
        title: " Tableau",
        duration: "28 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to Tableau: Approaching Business Problems, Interface Overview", duration: "2 hrs" },
        //   { id: "t2", title: "Connecting and Shaping Data: Data Sources, Pivoting, Calculated Fields, Dimensions/Measures", duration: "3 hrs" },
        //   { id: "t3", title: "Introduction to Basic Charts: Bars, Lines, Scatter Plots, Maps", duration: "2 hrs" },
        //   { id: "t4", title: "Working With Marks Card: Color, Size, Label, Detail, Tooltip", duration: "1.5 hrs" },
        //   { id: "t5", title: "Different Filters in Tableau: Quick Filters, Context Filters, Data Source Filters", duration: "2 hrs" },
        //   { id: "t6", title: "Calculated Fields: Summarization, String Manipulation, Date, Logical Functions", duration: "2.5 hrs" },
        //   { id: "t7", title: "Combining Tables: Joins, Unions, Blending", duration: "2 hrs" },
        //   { id: "t8", title: "Table Calculations: Primary and Secondary Calculations", duration: "1.5 hrs" },
        //   { id: "t9", title: "Parameters: Dimension, Measure, Sort, TopN, Date", duration: "1.5 hrs" },
        //   { id: "t10", title: "Groups & Sets: Creating and Applying", duration: "1 hr" },
        //   { id: "t11", title: "Analytics: Forecasting, Trend Lines, Clustering", duration: "2 hrs" },
        //   { id: "t12", title: "Dashboard Building & Actions: Filters, Highlights, Navigation", duration: "2.5 hrs" },
        //   { id: "t13", title: "Projects: RFM Analysis, Customer Retention Dashboard", duration: "1.5 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Introduction to Data Visualization", duration: "" },
          { id: "t2", title: "Creating Interactive Dashboards", duration: "" },
          { id: "t3", title: "Data Connection and Blending", duration: "" },
          { id: "t4", title: "Calculations and Expressions", duration: "" },
          { id: "t5", title: "Chart Types", duration: "" },
          { id: "t6", title: "Parameters", duration: "" },
          { id: "t7", title: "Dashboard Actions", duration: "" },
          { id: "t8", title: "Story and Tableau Prep", duration: "" },
          { id: "t9", title: "AI in Tableau: Explain Data, Ask Data, AI-driven Insights with Tableau GPT", duration: "" }
        ]

      }
      ,

      {
        id: "m4",
        title: "Business Statistics",
        duration: "8 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction: Data Visualization, Interface, Business Problem-Solving", duration: "3 hrs" },
        //   { id: "t2", title: "Connecting & Shaping Data: Power Query Cleaning, Transformation, Append/Merge", duration: "4.5 hrs" },
        //   { id: "t3", title: "Data Modeling: Normalization, Relationships, Filter Flow", duration: "4 hrs" },
        //   { id: "t4", title: "DAX Analysis: Calculated Columns/Measures, Functions, Time Intelligence", duration: "6 hrs" },
        //   { id: "t5", title: "Visualization: Interactive Reports, Charts, Slicers, Drillthroughs", duration: "5 hrs" },
        //   { id: "t6", title: "AI & Custom Visuals: Decomposition Trees, Q&A, Key Influencers", duration: "2 hrs" },
        //   { id: "t7", title: "Deployment & Security: Power BI Service, Refresh Schedules, RLS", duration: "2.5 hrs" },
        //   { id: "t8", title: "SQL Integration: Database Connections, Custom Queries", duration: "1 hr" }
        // ]
        topics: [
          { id: "t1", title: "Probability Distributions", duration: "" },
          { id: "t2", title: "EDA", duration: "" },
          { id: "t3", title: "Statistical Analysis Using Python", duration: "" },
          { id: "t4", title: "Feature Engineering Techniques", duration: "" },
          { id: "t5", title: "Data Preprocessing", duration: "" },
          { id: "t6", title: "Advanced Statistical Methods", duration: "" }
        ]

      }
      ,

      {
        id: "m5",
        title: "R",
        duration: "40 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to R: R Console, RStudio Interface", duration: "1.5 hrs" },
        //   { id: "t2", title: "R Data Structures: Vectors and Matrices", duration: "2 hrs" },
        //   { id: "t3", title: "Programming Basics: Conditions, Loops, Functions", duration: "2.5 hrs" },
        //   { id: "t4", title: "DataFrames: Creation and Manipulation", duration: "2 hrs" },
        //   { id: "t5", title: "Advanced Programming: dplyr and Essential Packages", duration: "2.5 hrs" },
        //   { id: "t6", title: "Statistics: Probability Distributions, Hypothesis Testing", duration: "2 hrs" },
        //   { id: "t7", title: "Data Visualization: ggplot2 Fundamentals", duration: "1.5 hrs" },
        //   { id: "t8", title: "Linear Regression: Academic Performance Prediction Project", duration: "2 hrs" },
        //   { id: "t9", title: "Logistic Regression: Telecom Customer Churn Project", duration: "2 hrs" },
        //   { id: "t10", title: "Decision Trees: Loan Approval Prediction Project", duration: "2 hrs" },
        //   { id: "t11", title: "Time Series & Clustering: Sales Forecasting and Customer Segmentation Projects", duration: "2 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Basics to Advanced", duration: "" },
          { id: "t2", title: "Data Manipulation with dplyr", duration: "" },
          { id: "t3", title: "Data Visualization with ggplot2", duration: "" },
          { id: "t4", title: "Statistical Analysis", duration: "" },
          { id: "t5", title: "Predictive Modeling in R", duration: "" },
          { id: "t6", title: "Machine Learning Algorithms in R", duration: "" },
          { id: "t7", title: "AI in R: Generative AI Assistants for R Code Automation, ggplot Customization, Model Interpretation", duration: "" }
        ]

      }

      ,

      {
        id: "m6",
        title: "Python",
        duration: "40 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to Python: Installation, IDEs (VS Code, Jupyter)", duration: "2 hrs" },
        //   { id: "t2", title: "Core Data Types: Numbers, Strings, Booleans", duration: "3 hrs" },
        //   { id: "t3", title: "Advanced Data Structures: Lists, Tuples, Sets, Dictionaries", duration: "4 hrs" },
        //   { id: "t4", title: "Program Control: Conditionals, Loops, Comprehensions", duration: "3 hrs" },
        //   { id: "t5", title: "Functions & NumPy: Custom Functions, Vectorized Operations", duration: "3.5 hrs" },
        //   { id: "t6", title: "Pandas Basics: DataFrame Operations, Data Cleaning", duration: "4 hrs" },
        //   { id: "t7", title: "Pandas Advanced: GroupBy, Merging, Pivoting", duration: "3.5 hrs" },
        //   { id: "t8", title: "EDA: Univariate/Bivariate Analysis, Correlation", duration: "3 hrs" },
        //   { id: "t9", title: "Linear Regression: Ad Revenue Prediction Project", duration: "2.5 hrs" },
        //   { id: "t10", title: "Logistic Regression: Click-Through Rate Prediction Project", duration: "2.5 hrs" },
        //   { id: "t11", title: "Decision Trees: Used Car Pricing Project", duration: "2 hrs" },
        //   { id: "t12", title: "Time Series: Retail Sales Forecasting Project", duration: "2 hrs" },
        //   { id: "t13", title: "Deployment: API Integration, GitHub, Model Serving", duration: "2 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Basics to Advanced", duration: "" },
          { id: "t2", title: "Data Manipulation (NumPy, Pandas)", duration: "" },
          { id: "t3", title: "Visualization (Matplotlib, Seaborn)", duration: "" },
          { id: "t4", title: "ML Fundamentals", duration: "" },
          { id: "t5", title: "Predictive Modeling", duration: "" },
          { id: "t6", title: "Evaluation and Feature Engineering", duration: "" },
          { id: "t7", title: "AI in Python: Prompt-based model interpretation, automated EDA with AI tools, and model documentation using Copilot", duration: "" }
        ]

      }
      ,
      {
        id: "m7",
        title: "ML, DL & AI",
        duration: "28 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to Machine Learning: Concepts, Workflow, and Applications", duration: "2 hrs" },
        //   { id: "t2", title: "Recap: Linear/Logistic Regression, Decision Trees (Project: Car Price Prediction)", duration: "3 hrs" },
        //   { id: "t3", title: "Ensemble Learning: Random Forest (Project: Loan Risk Prediction)", duration: "3 hrs" },
        //   { id: "t4", title: "Boosting: Gradient Boost, AdaBoost, XGBoost (Projects: House Prices & Disease Diagnosis)", duration: "4 hrs" },
        //   { id: "t5", title: "Support Vector Machines (Project: YouTube Video Analysis)", duration: "2 hrs" },
        //   { id: "t6", title: "Naive Bayes (Project: Customer Churn Prediction)", duration: "2 hrs" },
        //   { id: "t7", title: "K-Nearest Neighbors (Project: Feedback Categorization)", duration: "2 hrs" },
        //   { id: "t8", title: "Dimensionality Reduction & Clustering: PCA, K-Means, Hierarchical, DBSCAN (Project: Retail Profiling)", duration: "3 hrs" },
        //   { id: "t9", title: "Text Preprocessing: Regex, Tokenization, Cleaning", duration: "2 hrs" },
        //   { id: "t10", title: "Text Mining: Word Clouds, Sentiment Analysis (Project: Indigo Tweets)", duration: "2 hrs" },
        //   { id: "t11", title: "NLP Classification (Project: IT Ticket Classification)", duration: "2 hrs" },
        //   { id: "t12", title: "Gen AI: Custom Text Classification with Transformers", duration: "2 hrs" },
        //   { id: "t13", title: "Neural Networks (Projects: Customer Lifetime Value & Credit Risk)", duration: "2 hrs" },
        //   { id: "t14", title: "Advanced Networks: RNN/LSTM (Stock Prediction), CNN (Face Classification)", duration: "3 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Predictive Modeling", duration: "" },
          { id: "t2", title: "Clustering", duration: "" },
          { id: "t3", title: "Decision Trees", duration: "" },
          { id: "t4", title: "Ensemble Techniques", duration: "" },
          { id: "t5", title: "Optimization", duration: "" },
          { id: "t6", title: "NLP", duration: "" },
          { id: "t7", title: "Deep Learning - from models to tuning and deployment", duration: "" },
          { id: "t8", title: "AI in ML: Image, Text, and Time-Series projects using Flask/Streamlit integration", duration: "" }
        ]

      }


      // ,

      // {
      //   id: "m8",
      //   title: "Statistics",
      //   duration: "8 hrs",
      //   topics: [
      //     { id: "t1", title: "Types of Data: Nominal, Ordinal, Interval, Ratio", duration: "0.75 hrs" },
      //     { id: "t2", title: "Correlation: Pearson, Spearman, Visualization", duration: "1 hr" },
      //     { id: "t3", title: "Measures of Central Tendency: Mean, Median, Mode", duration: "0.75 hrs" },
      //     { id: "t4", title: "Measures of Dispersion: Range, Variance, Std Dev, IQR", duration: "1 hr" },
      //     { id: "t5", title: "Probability: Basics, Rules, Bayes' Theorem", duration: "1 hr" },
      //     { id: "t6", title: "Probability Distributions: Normal, Binomial, Poisson", duration: "1.25 hrs" },
      //     { id: "t7", title: "Sampling and Estimation: CLT, Confidence Intervals", duration: "1 hr" },
      //     { id: "t8", title: "Hypothesis Testing: p-values, t-tests, Chi-square", duration: "1.25 hrs" },
      //     { id: "t9", title: "Data Modeling: Linear Regression Basics", duration: "1 hr" }
      //   ]
      // }

      // ,
      // {
      //   "id": "m9",
      //   "title": "Excel VBA Automation",
      //   "duration": "26 hrs",
      //   "topics": [
      //     { "id": "t1", "title": "Making Macro Do Automated Tasks for You", "duration": "6.5 hrs" },
      //     { "id": "t2", "title": "Programming Concepts (Variables, Loops, Conditions)", "duration": "8.25 hrs" },
      //     { "id": "t3", "title": "Analysis Using VBA (Data Cleaning, PivotTables)", "duration": "6.75 hrs" },
      //     { "id": "t4", "title": "Creating Dashboards (Forms, Dynamic Charts)", "duration": "4.5 hrs" }
      //   ]
      // }


    ],

    projects: [
      {
        id: "p1",
        title: "Steps to Make a Career in AI & Data",
        description: "Explore pathways to start and grow a career in AI and Data. Learn about essential skills, tools, career opportunities, and how AI is impacting various industries through this expert Q&A session.",
        image: "https://img.youtube.com/vi/OoCffZ4VaJE/0.jpg",
        skills: ["AI Career Path", "AI Tools", "AI Research", "AI & Web Development", "Chatbots"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "OoCffZ4VaJE"
      },
      {
        id: "p2",
        title: "Using AI Visuals in Power BI Dashboards",
        description: "Learn to create AI-powered visuals in Power BI, including Key Influencer, Decomposition Tree, Q&A, and Smart Narrative. Explore current AI trends and integrate ChatGPT for enhanced insights",
        image: "https://img.youtube.com/vi/ftTTrchGVbA/0.jpg",
        skills: ["Key Influencer Visual", "Decomposition Tree", "Smart Narrative", "AI Trends"],
        difficulty: "Intermediate to Advanced",
        isPractice: true,
        videoId: "ftTTrchGVbA"
      },
      {
        id: "p3",
        title: "Python Prediction Model for Real Estate",
        description: "Build a real estate price prediction model using Python and machine learning. Learn data preprocessing, regression techniques, and model building with practical insights from a real-world case study.",
        image: "https://img.youtube.com/vi/TipOU1HPrxA/0.jpg",
        skills: ["Regression Models", "Data Preprocessing", "Linear Regression", "Random Forest", "Neural Networks"],
        difficulty: "Intermediate",
        isPractice: true,
        videoId: "TipOU1HPrxA"
      },
      {
        id: "p4",
        title: "OYO Business Analysis with SQL",
        description: "Learn how to perform business analysis using SQL with a real-world case study on OYO’s room sales. Cover data cleaning, SQL queries, business KPIs, and practical data-driven decision-making.",
        image: "https://img.youtube.com/vi/ee7TajNEUrI/0.jpg",
        skills: ["GROUP BY", "ARIMA Model", "Window Functions ", "CTE", "Data Cleaning"],
        difficulty: "Beginner to Intermediate",
        videoId: "ee7TajNEUrI"
      },
      {
        id: "p5",
        title: "Predicting Computer Prices with Python",
        description: "Build a predictive model for computer prices using Python. Learn data cleaning, regression modeling, and key Python libraries through this industry case study by an IvyPro student.",
        image: "https://img.youtube.com/vi/Wt8jyPvdGRo/0.jpg",
        skills: ["Feature Engineering,", "Linear Regression", "Random Forest", "Scikit-learn", "Regression Metrics"],
        difficulty: "Beginner to Intermediate",
        videoId: "Wt8jyPvdGRo"
      },
      {
        id: "p6",
        title: "ANOVA Using R - Bakery Case Study",
        description: "Analyze how display factors affect product demand using Two-way ANOVA and Tukey’s Test in R. Learn statistical hypothesis testing through this practical bakery case study.",
        image: "https://img.youtube.com/vi/UhO4y3a9yxQ/0.jpg",
        skills: ["Data Loading", "Data Manipulation", "Two-way ANOVA", "Hypothesis Testing", "Statistical Modeling"],
        difficulty: "Intermediate",
        videoId: "UhO4y3a9yxQ"
      }
    ],










  },


  {
    id: '13',
    title: "Data Science with Machine Learning & AI Course in Delhi",
    description: "If you are searching for a job-oriented data science course in Delhi, Ivy Professional School offers a comprehensive, industry-relevant program designed to help learners build strong foundations in analytics, machine learning, and artificial intelligence. As one of India’s largest professional and corporate hubs, Delhi NCR hosts a wide range of opportunities across IT services, consulting, fintech, and analytics-driven organizations. This course equips learners with practical, in-demand data science skills aligned with real business needs.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Deep Learning",
    students: 1243,
    metaData: {
      title: "Data Science Course in Delhi | Ivy Professional School",
      description: "Enroll in Ivy Professional School’s Data Science Course in Delhi with hands-on projects, expert mentorship, and career-focused analytics training.",
      bio: "Looking to build a high-growth career in analytics, Machine Learning, and Artificial Intelligence? The Data Science Course in Kolkata by Ivy Professional School is designed to help students and working professionals master industry-relevant data science skills with hands-on projects, expert faculty, and career-focused training.\n\n Kolkata is fast emerging as a technology and analytics hub, and our Data Science program equips you with practical knowledge, real-world exposure, and placement assistance to compete in top data-driven roles across India."

    },
    duration: "14 weeks",
    rating: 4.8,
    reviewCount: 298,
    isFeatured: true,
    slug: "data-science-course-delhi",
    longDescription: "The Data Science Course in Delhi is a structured, hands-on training program that covers the complete data science workflow—from data understanding and preprocessing to advanced machine learning and AI applications. \n\n Designed by experienced industry practitioners, the curriculum emphasizes practical problem-solving, business use cases, and tool-based learning rather than just theory. Learners gain exposure to real-world datasets and case studies commonly encountered in analytics roles. /n/n This data science course in Delhi is suitable for graduates, working professionals, and career switchers who want to move into data-driven roles with guided mentorship and career support."
    , instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
        , isDirector: true
      }
    ],
    outcomes: [
      "Build a solid foundation in statistics and mathematics for data science",
      "Analyze and process data using Python, Pandas, NumPy, and SQL",
      "Perform exploratory data analysis and generate actionable insights",
      "Design, train, and evaluate machine learning models",
      "Apply supervised and unsupervised learning techniques effectively",
      "Work on real-world datasets and industry-oriented case studies",
      "Communicate data-driven insights clearly to business stakeholders"
    ],



    curriculum: [
      {
        id: "m1",
        title: "Advanced Excel",
        duration: "32 hrs",
        topics: [
          { id: "t1", title: "Basic to Advanced Functions", duration: "" },
          { id: "t2", title: "Data Analysis", duration: "" },
          { id: "t3", title: "Reporting using Pivot Tables", duration: "" },
          { id: "t4", title: "Data Visualization", duration: "" },
          { id: "t5", title: "Data Cleaning", duration: "" },
          { id: "t6", title: "Dashboarding", duration: "" },
          { id: "t7", title: "AI and ChatGPT Integration", duration: "" }
        ]

        // topics: [
        //   { id: "t1", title: "Data Hygiene – Clean, structure, and prepare your dataset", duration: "1.25 hrs" },
        //   { id: "t2", title: "Formatting – Number and table formatting for clarity", duration: "1.25 hrs" },
        //   { id: "t3", title: "Filtering & Sorting – Auto filters, advanced filters, custom sorting", duration: "1.5 hrs" },
        //   { id: "t4", title: "Cell Referencing – Relative, absolute references & formula handling", duration: "1.5 hrs" },
        //   { id: "t5", title: "Basic Functions – SUM, AVERAGE, COUNT, PRODUCT, etc.", duration: "1.75 hrs" },
        //   { id: "t6", title: "Date Functions – TODAY, DATEDIF, EOMONTH, WEEKDAY, etc.", duration: "1.5 hrs" },
        //   { id: "t7", title: "Conditional Functions – SUMIFS, COUNTIFS, AVERAGEIFS", duration: "2 hrs" },
        //   { id: "t8", title: "Database Functions – DSUM, DAVERAGE using criteria tables", duration: "1.25 hrs" },
        //   { id: "t9", title: "Dynamic Arrays (Google Sheets) – FILTER, SORT, UNIQUE, TEXTJOIN", duration: "1.5 hrs" },
        //   { id: "t10", title: "Pivot Tables – Layout, grouping, calculated fields, summarizing", duration: "2.5 hrs" },
        //   { id: "t11", title: "Charts – Chart creation, types, usage, sparklines", duration: "2 hrs" },
        //   { id: "t12", title: "Dashboards – Planning, business insights, slicers, summaries", duration: "2.5 hrs" },
        //   { id: "t13", title: "Logical Functions – IF, AND, OR, IFERROR, SWITCH etc", duration: "1.75 hrs" },
        //   { id: "t14", title: "Lookup Functions – VLOOKUP, XLOOKUP, MATCH, INDIRECT etc", duration: "2.25 hrs" },
        //   { id: "t15", title: "Text Functions – LEFT, MID, FIND, SUBSTITUTE, CONCAT etc", duration: "1.5 hrs" },
        //   { id: "t16", title: "Conditional Formatting – Color scales, data bars, formulas", duration: "1.25 hrs" },
        //   { id: "t17", title: "Data Validation – Lists, error alerts, dependent dropdowns", duration: "1 hr" },
        //   { id: "t18", title: "Goal Seek & Solver – Solve optimization and reverse calculations", duration: "1.25 hrs" },
        //   { id: "t19", title: "Gen AI - How to Use Gen AI in Microsoft Excel, Use Lab.Generative", duration: "0.75 hrs" },
        //   { id: "t20", title: "ChatGPT - How to use Prompt engineering for Data Analysis", duration: "0.75 hrs" }
        // ]
      },


      {
        id: "m2",
        title: "MySQL",
        duration: "32 hrs",
        topics: [
          { id: "t1", title: "Database Management", duration: "" },
          { id: "t2", title: "SQL Queries", duration: "" },
          { id: "t3", title: "Data Retrieval", duration: "" },
          { id: "t4", title: "Database Design", duration: "" },
          { id: "t5", title: "Performance Optimization", duration: "" },
          { id: "t6", title: "AI Tools to Auto Generate and Optimize Queries", duration: "" }
        ]

        // topics: [
        //   { id: "t1", title: "SQL Basics: Introduction to Database Management System (DBMS), Introduction to Google BigQuery and MySQL, CRUD Operations", duration: "3 hrs" },
        //   { id: "t2", title: "Data Manipulation and Transformation: Logical, Numerical, and Mathematical Operators, Conditional Statements", duration: "2.5 hrs" },
        //   { id: "t3", title: "Data Cleaning: Type Casting, Date/Time Formatting, Text Formatting", duration: "2 hrs" },
        //   { id: "t4", title: "Pattern Matching: LIKE Operator, REGEXP Functions", duration: "1.5 hrs" },
        //   { id: "t5", title: "Joins and Relational Databases: Keys, Join Types, Indexing, Normalization", duration: "4 hrs" },
        //   { id: "t6", title: "Aggregation and Grouping: Aggregate Functions, GROUP BY, CTEs, Variables", duration: "3.5 hrs" },
        //   { id: "t7", title: "Window Functions: RANK, DENSE_RANK, ROW_NUMBER, LEAD/LAG", duration: "2.5 hrs" },
        //   { id: "t8", title: "Data Reusability: Views, Stored Procedures, UDFs", duration: "2 hrs" },
        //   { id: "t9", title: "Subqueries: Simple, EXISTS/NOT EXISTS, Correlated", duration: "1.5 hrs" },
        //   { id: "t10", title: "Cloud Services: BigQuery Querying, Sharing Results, Permissions, Scheduling", duration: "1.5 hrs" },
        //   { id: "t11", title: "Online SQL Platforms: MySQL Workbench, Online IDEs, Cloud Storage Integration", duration: "0.5 hrs" }
        // ]
      },

      {
        id: "m3",
        title: " Tableau",
        duration: "28 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to Tableau: Approaching Business Problems, Interface Overview", duration: "2 hrs" },
        //   { id: "t2", title: "Connecting and Shaping Data: Data Sources, Pivoting, Calculated Fields, Dimensions/Measures", duration: "3 hrs" },
        //   { id: "t3", title: "Introduction to Basic Charts: Bars, Lines, Scatter Plots, Maps", duration: "2 hrs" },
        //   { id: "t4", title: "Working With Marks Card: Color, Size, Label, Detail, Tooltip", duration: "1.5 hrs" },
        //   { id: "t5", title: "Different Filters in Tableau: Quick Filters, Context Filters, Data Source Filters", duration: "2 hrs" },
        //   { id: "t6", title: "Calculated Fields: Summarization, String Manipulation, Date, Logical Functions", duration: "2.5 hrs" },
        //   { id: "t7", title: "Combining Tables: Joins, Unions, Blending", duration: "2 hrs" },
        //   { id: "t8", title: "Table Calculations: Primary and Secondary Calculations", duration: "1.5 hrs" },
        //   { id: "t9", title: "Parameters: Dimension, Measure, Sort, TopN, Date", duration: "1.5 hrs" },
        //   { id: "t10", title: "Groups & Sets: Creating and Applying", duration: "1 hr" },
        //   { id: "t11", title: "Analytics: Forecasting, Trend Lines, Clustering", duration: "2 hrs" },
        //   { id: "t12", title: "Dashboard Building & Actions: Filters, Highlights, Navigation", duration: "2.5 hrs" },
        //   { id: "t13", title: "Projects: RFM Analysis, Customer Retention Dashboard", duration: "1.5 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Introduction to Data Visualization", duration: "" },
          { id: "t2", title: "Creating Interactive Dashboards", duration: "" },
          { id: "t3", title: "Data Connection and Blending", duration: "" },
          { id: "t4", title: "Calculations and Expressions", duration: "" },
          { id: "t5", title: "Chart Types", duration: "" },
          { id: "t6", title: "Parameters", duration: "" },
          { id: "t7", title: "Dashboard Actions", duration: "" },
          { id: "t8", title: "Story and Tableau Prep", duration: "" },
          { id: "t9", title: "AI in Tableau: Explain Data, Ask Data, AI-driven Insights with Tableau GPT", duration: "" }
        ]

      }
      ,

      {
        id: "m4",
        title: "Business Statistics",
        duration: "8 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction: Data Visualization, Interface, Business Problem-Solving", duration: "3 hrs" },
        //   { id: "t2", title: "Connecting & Shaping Data: Power Query Cleaning, Transformation, Append/Merge", duration: "4.5 hrs" },
        //   { id: "t3", title: "Data Modeling: Normalization, Relationships, Filter Flow", duration: "4 hrs" },
        //   { id: "t4", title: "DAX Analysis: Calculated Columns/Measures, Functions, Time Intelligence", duration: "6 hrs" },
        //   { id: "t5", title: "Visualization: Interactive Reports, Charts, Slicers, Drillthroughs", duration: "5 hrs" },
        //   { id: "t6", title: "AI & Custom Visuals: Decomposition Trees, Q&A, Key Influencers", duration: "2 hrs" },
        //   { id: "t7", title: "Deployment & Security: Power BI Service, Refresh Schedules, RLS", duration: "2.5 hrs" },
        //   { id: "t8", title: "SQL Integration: Database Connections, Custom Queries", duration: "1 hr" }
        // ]
        topics: [
          { id: "t1", title: "Probability Distributions", duration: "" },
          { id: "t2", title: "EDA", duration: "" },
          { id: "t3", title: "Statistical Analysis Using Python", duration: "" },
          { id: "t4", title: "Feature Engineering Techniques", duration: "" },
          { id: "t5", title: "Data Preprocessing", duration: "" },
          { id: "t6", title: "Advanced Statistical Methods", duration: "" }
        ]

      }
      ,

      {
        id: "m5",
        title: "R",
        duration: "40 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to R: R Console, RStudio Interface", duration: "1.5 hrs" },
        //   { id: "t2", title: "R Data Structures: Vectors and Matrices", duration: "2 hrs" },
        //   { id: "t3", title: "Programming Basics: Conditions, Loops, Functions", duration: "2.5 hrs" },
        //   { id: "t4", title: "DataFrames: Creation and Manipulation", duration: "2 hrs" },
        //   { id: "t5", title: "Advanced Programming: dplyr and Essential Packages", duration: "2.5 hrs" },
        //   { id: "t6", title: "Statistics: Probability Distributions, Hypothesis Testing", duration: "2 hrs" },
        //   { id: "t7", title: "Data Visualization: ggplot2 Fundamentals", duration: "1.5 hrs" },
        //   { id: "t8", title: "Linear Regression: Academic Performance Prediction Project", duration: "2 hrs" },
        //   { id: "t9", title: "Logistic Regression: Telecom Customer Churn Project", duration: "2 hrs" },
        //   { id: "t10", title: "Decision Trees: Loan Approval Prediction Project", duration: "2 hrs" },
        //   { id: "t11", title: "Time Series & Clustering: Sales Forecasting and Customer Segmentation Projects", duration: "2 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Basics to Advanced", duration: "" },
          { id: "t2", title: "Data Manipulation with dplyr", duration: "" },
          { id: "t3", title: "Data Visualization with ggplot2", duration: "" },
          { id: "t4", title: "Statistical Analysis", duration: "" },
          { id: "t5", title: "Predictive Modeling in R", duration: "" },
          { id: "t6", title: "Machine Learning Algorithms in R", duration: "" },
          { id: "t7", title: "AI in R: Generative AI Assistants for R Code Automation, ggplot Customization, Model Interpretation", duration: "" }
        ]

      }

      ,

      {
        id: "m6",
        title: "Python",
        duration: "40 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to Python: Installation, IDEs (VS Code, Jupyter)", duration: "2 hrs" },
        //   { id: "t2", title: "Core Data Types: Numbers, Strings, Booleans", duration: "3 hrs" },
        //   { id: "t3", title: "Advanced Data Structures: Lists, Tuples, Sets, Dictionaries", duration: "4 hrs" },
        //   { id: "t4", title: "Program Control: Conditionals, Loops, Comprehensions", duration: "3 hrs" },
        //   { id: "t5", title: "Functions & NumPy: Custom Functions, Vectorized Operations", duration: "3.5 hrs" },
        //   { id: "t6", title: "Pandas Basics: DataFrame Operations, Data Cleaning", duration: "4 hrs" },
        //   { id: "t7", title: "Pandas Advanced: GroupBy, Merging, Pivoting", duration: "3.5 hrs" },
        //   { id: "t8", title: "EDA: Univariate/Bivariate Analysis, Correlation", duration: "3 hrs" },
        //   { id: "t9", title: "Linear Regression: Ad Revenue Prediction Project", duration: "2.5 hrs" },
        //   { id: "t10", title: "Logistic Regression: Click-Through Rate Prediction Project", duration: "2.5 hrs" },
        //   { id: "t11", title: "Decision Trees: Used Car Pricing Project", duration: "2 hrs" },
        //   { id: "t12", title: "Time Series: Retail Sales Forecasting Project", duration: "2 hrs" },
        //   { id: "t13", title: "Deployment: API Integration, GitHub, Model Serving", duration: "2 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Basics to Advanced", duration: "" },
          { id: "t2", title: "Data Manipulation (NumPy, Pandas)", duration: "" },
          { id: "t3", title: "Visualization (Matplotlib, Seaborn)", duration: "" },
          { id: "t4", title: "ML Fundamentals", duration: "" },
          { id: "t5", title: "Predictive Modeling", duration: "" },
          { id: "t6", title: "Evaluation and Feature Engineering", duration: "" },
          { id: "t7", title: "AI in Python: Prompt-based model interpretation, automated EDA with AI tools, and model documentation using Copilot", duration: "" }
        ]

      }
      ,
      {
        id: "m7",
        title: "ML, DL & AI",
        duration: "28 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to Machine Learning: Concepts, Workflow, and Applications", duration: "2 hrs" },
        //   { id: "t2", title: "Recap: Linear/Logistic Regression, Decision Trees (Project: Car Price Prediction)", duration: "3 hrs" },
        //   { id: "t3", title: "Ensemble Learning: Random Forest (Project: Loan Risk Prediction)", duration: "3 hrs" },
        //   { id: "t4", title: "Boosting: Gradient Boost, AdaBoost, XGBoost (Projects: House Prices & Disease Diagnosis)", duration: "4 hrs" },
        //   { id: "t5", title: "Support Vector Machines (Project: YouTube Video Analysis)", duration: "2 hrs" },
        //   { id: "t6", title: "Naive Bayes (Project: Customer Churn Prediction)", duration: "2 hrs" },
        //   { id: "t7", title: "K-Nearest Neighbors (Project: Feedback Categorization)", duration: "2 hrs" },
        //   { id: "t8", title: "Dimensionality Reduction & Clustering: PCA, K-Means, Hierarchical, DBSCAN (Project: Retail Profiling)", duration: "3 hrs" },
        //   { id: "t9", title: "Text Preprocessing: Regex, Tokenization, Cleaning", duration: "2 hrs" },
        //   { id: "t10", title: "Text Mining: Word Clouds, Sentiment Analysis (Project: Indigo Tweets)", duration: "2 hrs" },
        //   { id: "t11", title: "NLP Classification (Project: IT Ticket Classification)", duration: "2 hrs" },
        //   { id: "t12", title: "Gen AI: Custom Text Classification with Transformers", duration: "2 hrs" },
        //   { id: "t13", title: "Neural Networks (Projects: Customer Lifetime Value & Credit Risk)", duration: "2 hrs" },
        //   { id: "t14", title: "Advanced Networks: RNN/LSTM (Stock Prediction), CNN (Face Classification)", duration: "3 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Predictive Modeling", duration: "" },
          { id: "t2", title: "Clustering", duration: "" },
          { id: "t3", title: "Decision Trees", duration: "" },
          { id: "t4", title: "Ensemble Techniques", duration: "" },
          { id: "t5", title: "Optimization", duration: "" },
          { id: "t6", title: "NLP", duration: "" },
          { id: "t7", title: "Deep Learning - from models to tuning and deployment", duration: "" },
          { id: "t8", title: "AI in ML: Image, Text, and Time-Series projects using Flask/Streamlit integration", duration: "" }
        ]

      }


      // ,

      // {
      //   id: "m8",
      //   title: "Statistics",
      //   duration: "8 hrs",
      //   topics: [
      //     { id: "t1", title: "Types of Data: Nominal, Ordinal, Interval, Ratio", duration: "0.75 hrs" },
      //     { id: "t2", title: "Correlation: Pearson, Spearman, Visualization", duration: "1 hr" },
      //     { id: "t3", title: "Measures of Central Tendency: Mean, Median, Mode", duration: "0.75 hrs" },
      //     { id: "t4", title: "Measures of Dispersion: Range, Variance, Std Dev, IQR", duration: "1 hr" },
      //     { id: "t5", title: "Probability: Basics, Rules, Bayes' Theorem", duration: "1 hr" },
      //     { id: "t6", title: "Probability Distributions: Normal, Binomial, Poisson", duration: "1.25 hrs" },
      //     { id: "t7", title: "Sampling and Estimation: CLT, Confidence Intervals", duration: "1 hr" },
      //     { id: "t8", title: "Hypothesis Testing: p-values, t-tests, Chi-square", duration: "1.25 hrs" },
      //     { id: "t9", title: "Data Modeling: Linear Regression Basics", duration: "1 hr" }
      //   ]
      // }

      // ,
      // {
      //   "id": "m9",
      //   "title": "Excel VBA Automation",
      //   "duration": "26 hrs",
      //   "topics": [
      //     { "id": "t1", "title": "Making Macro Do Automated Tasks for You", "duration": "6.5 hrs" },
      //     { "id": "t2", "title": "Programming Concepts (Variables, Loops, Conditions)", "duration": "8.25 hrs" },
      //     { "id": "t3", "title": "Analysis Using VBA (Data Cleaning, PivotTables)", "duration": "6.75 hrs" },
      //     { "id": "t4", "title": "Creating Dashboards (Forms, Dynamic Charts)", "duration": "4.5 hrs" }
      //   ]
      // }


    ],

    projects: [
      {
        id: "p1",
        title: "Steps to Make a Career in AI & Data",
        description: "Explore pathways to start and grow a career in AI and Data. Learn about essential skills, tools, career opportunities, and how AI is impacting various industries through this expert Q&A session.",
        image: "https://img.youtube.com/vi/OoCffZ4VaJE/0.jpg",
        skills: ["AI Career Path", "AI Tools", "AI Research", "AI & Web Development", "Chatbots"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "OoCffZ4VaJE"
      },
      {
        id: "p2",
        title: "Using AI Visuals in Power BI Dashboards",
        description: "Learn to create AI-powered visuals in Power BI, including Key Influencer, Decomposition Tree, Q&A, and Smart Narrative. Explore current AI trends and integrate ChatGPT for enhanced insights",
        image: "https://img.youtube.com/vi/ftTTrchGVbA/0.jpg",
        skills: ["Key Influencer Visual", "Decomposition Tree", "Smart Narrative", "AI Trends"],
        difficulty: "Intermediate to Advanced",
        isPractice: true,
        videoId: "ftTTrchGVbA"
      },
      {
        id: "p3",
        title: "Python Prediction Model for Real Estate",
        description: "Build a real estate price prediction model using Python and machine learning. Learn data preprocessing, regression techniques, and model building with practical insights from a real-world case study.",
        image: "https://img.youtube.com/vi/TipOU1HPrxA/0.jpg",
        skills: ["Regression Models", "Data Preprocessing", "Linear Regression", "Random Forest", "Neural Networks"],
        difficulty: "Intermediate",
        isPractice: true,
        videoId: "TipOU1HPrxA"
      },
      {
        id: "p4",
        title: "OYO Business Analysis with SQL",
        description: "Learn how to perform business analysis using SQL with a real-world case study on OYO’s room sales. Cover data cleaning, SQL queries, business KPIs, and practical data-driven decision-making.",
        image: "https://img.youtube.com/vi/ee7TajNEUrI/0.jpg",
        skills: ["GROUP BY", "ARIMA Model", "Window Functions ", "CTE", "Data Cleaning"],
        difficulty: "Beginner to Intermediate",
        videoId: "ee7TajNEUrI"
      },
      {
        id: "p5",
        title: "Predicting Computer Prices with Python",
        description: "Build a predictive model for computer prices using Python. Learn data cleaning, regression modeling, and key Python libraries through this industry case study by an IvyPro student.",
        image: "https://img.youtube.com/vi/Wt8jyPvdGRo/0.jpg",
        skills: ["Feature Engineering,", "Linear Regression", "Random Forest", "Scikit-learn", "Regression Metrics"],
        difficulty: "Beginner to Intermediate",
        videoId: "Wt8jyPvdGRo"
      },
      {
        id: "p6",
        title: "ANOVA Using R - Bakery Case Study",
        description: "Analyze how display factors affect product demand using Two-way ANOVA and Tukey’s Test in R. Learn statistical hypothesis testing through this practical bakery case study.",
        image: "https://img.youtube.com/vi/UhO4y3a9yxQ/0.jpg",
        skills: ["Data Loading", "Data Manipulation", "Two-way ANOVA", "Hypothesis Testing", "Statistical Modeling"],
        difficulty: "Intermediate",
        videoId: "UhO4y3a9yxQ"
      }
    ],










  },


   {
    id: '14',
    title: "Data Science with Machine Learning & AI Course in Pune",
    description: "If you are looking for a career-focused data science course in Pune, Ivy Professional School offers a comprehensive program designed to help learners master analytics, machine learning, and artificial intelligence with real-world relevance. Pune is widely recognized as one of India’s leading IT and technology hubs, hosting global IT firms, startups, and analytics-driven organizations. This program is ideal for learners who want to build data science expertise aligned with Pune’s thriving tech ecosystem.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Deep Learning",
    students: 1243,
    metaData: {
      title: "Data Science Course in Pune | Ivy Professional School",
      description: "Join Ivy Professional School’s Data Science Course in Pune with hands-on projects, expert mentors, and industry-focused analytics training.",
      bio: "Looking to build a high-growth career in analytics, Machine Learning, and Artificial Intelligence? The Data Science Course in Kolkata by Ivy Professional School is designed to help students and working professionals master industry-relevant data science skills with hands-on projects, expert faculty, and career-focused training.\n\n Kolkata is fast emerging as a technology and analytics hub, and our Data Science program equips you with practical knowledge, real-world exposure, and placement assistance to compete in top data-driven roles across India."

    },
    duration: "14 weeks",
    rating: 4.8,
    reviewCount: 298,
    isFeatured: true,
    slug: "data-science-course-pune",
    longDescription: "The Data Science Course in Pune is a practical, industry-oriented training program that covers the complete data science lifecycle—from data understanding and preprocessing to predictive modeling, machine learning, and AI-based solutions. \n\n Built with strong industry inputs, the course emphasizes hands-on learning, real business problems, and tools commonly used in analytics and data science roles. Learners work with real datasets and case studies that simulate challenges faced by data professionals in the industry. \n\n This data science course in Pune is suitable for fresh graduates, IT professionals, engineers, and working professionals who want to transition into data-driven roles with structured mentorship and career support."
    , instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
        , isDirector: true
      }
    ],
    outcomes: [
      "Develop a solid understanding of statistics and mathematics for data science",
      "Analyze and manipulate data using Python, Pandas, NumPy, and SQL",
      "Perform exploratory data analysis to uncover patterns and insights",
      "Build, evaluate, and optimize machine learning models",
      "Apply supervised and unsupervised learning techniques to real problems",
      "Work with real-world datasets and industry-driven use cases",
      "Present data-driven insights effectively to business and technical teams"
    ],



    curriculum: [
      {
        id: "m1",
        title: "Advanced Excel",
        duration: "32 hrs",
        topics: [
          { id: "t1", title: "Basic to Advanced Functions", duration: "" },
          { id: "t2", title: "Data Analysis", duration: "" },
          { id: "t3", title: "Reporting using Pivot Tables", duration: "" },
          { id: "t4", title: "Data Visualization", duration: "" },
          { id: "t5", title: "Data Cleaning", duration: "" },
          { id: "t6", title: "Dashboarding", duration: "" },
          { id: "t7", title: "AI and ChatGPT Integration", duration: "" }
        ]

        // topics: [
        //   { id: "t1", title: "Data Hygiene – Clean, structure, and prepare your dataset", duration: "1.25 hrs" },
        //   { id: "t2", title: "Formatting – Number and table formatting for clarity", duration: "1.25 hrs" },
        //   { id: "t3", title: "Filtering & Sorting – Auto filters, advanced filters, custom sorting", duration: "1.5 hrs" },
        //   { id: "t4", title: "Cell Referencing – Relative, absolute references & formula handling", duration: "1.5 hrs" },
        //   { id: "t5", title: "Basic Functions – SUM, AVERAGE, COUNT, PRODUCT, etc.", duration: "1.75 hrs" },
        //   { id: "t6", title: "Date Functions – TODAY, DATEDIF, EOMONTH, WEEKDAY, etc.", duration: "1.5 hrs" },
        //   { id: "t7", title: "Conditional Functions – SUMIFS, COUNTIFS, AVERAGEIFS", duration: "2 hrs" },
        //   { id: "t8", title: "Database Functions – DSUM, DAVERAGE using criteria tables", duration: "1.25 hrs" },
        //   { id: "t9", title: "Dynamic Arrays (Google Sheets) – FILTER, SORT, UNIQUE, TEXTJOIN", duration: "1.5 hrs" },
        //   { id: "t10", title: "Pivot Tables – Layout, grouping, calculated fields, summarizing", duration: "2.5 hrs" },
        //   { id: "t11", title: "Charts – Chart creation, types, usage, sparklines", duration: "2 hrs" },
        //   { id: "t12", title: "Dashboards – Planning, business insights, slicers, summaries", duration: "2.5 hrs" },
        //   { id: "t13", title: "Logical Functions – IF, AND, OR, IFERROR, SWITCH etc", duration: "1.75 hrs" },
        //   { id: "t14", title: "Lookup Functions – VLOOKUP, XLOOKUP, MATCH, INDIRECT etc", duration: "2.25 hrs" },
        //   { id: "t15", title: "Text Functions – LEFT, MID, FIND, SUBSTITUTE, CONCAT etc", duration: "1.5 hrs" },
        //   { id: "t16", title: "Conditional Formatting – Color scales, data bars, formulas", duration: "1.25 hrs" },
        //   { id: "t17", title: "Data Validation – Lists, error alerts, dependent dropdowns", duration: "1 hr" },
        //   { id: "t18", title: "Goal Seek & Solver – Solve optimization and reverse calculations", duration: "1.25 hrs" },
        //   { id: "t19", title: "Gen AI - How to Use Gen AI in Microsoft Excel, Use Lab.Generative", duration: "0.75 hrs" },
        //   { id: "t20", title: "ChatGPT - How to use Prompt engineering for Data Analysis", duration: "0.75 hrs" }
        // ]
      },


      {
        id: "m2",
        title: "MySQL",
        duration: "32 hrs",
        topics: [
          { id: "t1", title: "Database Management", duration: "" },
          { id: "t2", title: "SQL Queries", duration: "" },
          { id: "t3", title: "Data Retrieval", duration: "" },
          { id: "t4", title: "Database Design", duration: "" },
          { id: "t5", title: "Performance Optimization", duration: "" },
          { id: "t6", title: "AI Tools to Auto Generate and Optimize Queries", duration: "" }
        ]

        // topics: [
        //   { id: "t1", title: "SQL Basics: Introduction to Database Management System (DBMS), Introduction to Google BigQuery and MySQL, CRUD Operations", duration: "3 hrs" },
        //   { id: "t2", title: "Data Manipulation and Transformation: Logical, Numerical, and Mathematical Operators, Conditional Statements", duration: "2.5 hrs" },
        //   { id: "t3", title: "Data Cleaning: Type Casting, Date/Time Formatting, Text Formatting", duration: "2 hrs" },
        //   { id: "t4", title: "Pattern Matching: LIKE Operator, REGEXP Functions", duration: "1.5 hrs" },
        //   { id: "t5", title: "Joins and Relational Databases: Keys, Join Types, Indexing, Normalization", duration: "4 hrs" },
        //   { id: "t6", title: "Aggregation and Grouping: Aggregate Functions, GROUP BY, CTEs, Variables", duration: "3.5 hrs" },
        //   { id: "t7", title: "Window Functions: RANK, DENSE_RANK, ROW_NUMBER, LEAD/LAG", duration: "2.5 hrs" },
        //   { id: "t8", title: "Data Reusability: Views, Stored Procedures, UDFs", duration: "2 hrs" },
        //   { id: "t9", title: "Subqueries: Simple, EXISTS/NOT EXISTS, Correlated", duration: "1.5 hrs" },
        //   { id: "t10", title: "Cloud Services: BigQuery Querying, Sharing Results, Permissions, Scheduling", duration: "1.5 hrs" },
        //   { id: "t11", title: "Online SQL Platforms: MySQL Workbench, Online IDEs, Cloud Storage Integration", duration: "0.5 hrs" }
        // ]
      },

      {
        id: "m3",
        title: " Tableau",
        duration: "28 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to Tableau: Approaching Business Problems, Interface Overview", duration: "2 hrs" },
        //   { id: "t2", title: "Connecting and Shaping Data: Data Sources, Pivoting, Calculated Fields, Dimensions/Measures", duration: "3 hrs" },
        //   { id: "t3", title: "Introduction to Basic Charts: Bars, Lines, Scatter Plots, Maps", duration: "2 hrs" },
        //   { id: "t4", title: "Working With Marks Card: Color, Size, Label, Detail, Tooltip", duration: "1.5 hrs" },
        //   { id: "t5", title: "Different Filters in Tableau: Quick Filters, Context Filters, Data Source Filters", duration: "2 hrs" },
        //   { id: "t6", title: "Calculated Fields: Summarization, String Manipulation, Date, Logical Functions", duration: "2.5 hrs" },
        //   { id: "t7", title: "Combining Tables: Joins, Unions, Blending", duration: "2 hrs" },
        //   { id: "t8", title: "Table Calculations: Primary and Secondary Calculations", duration: "1.5 hrs" },
        //   { id: "t9", title: "Parameters: Dimension, Measure, Sort, TopN, Date", duration: "1.5 hrs" },
        //   { id: "t10", title: "Groups & Sets: Creating and Applying", duration: "1 hr" },
        //   { id: "t11", title: "Analytics: Forecasting, Trend Lines, Clustering", duration: "2 hrs" },
        //   { id: "t12", title: "Dashboard Building & Actions: Filters, Highlights, Navigation", duration: "2.5 hrs" },
        //   { id: "t13", title: "Projects: RFM Analysis, Customer Retention Dashboard", duration: "1.5 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Introduction to Data Visualization", duration: "" },
          { id: "t2", title: "Creating Interactive Dashboards", duration: "" },
          { id: "t3", title: "Data Connection and Blending", duration: "" },
          { id: "t4", title: "Calculations and Expressions", duration: "" },
          { id: "t5", title: "Chart Types", duration: "" },
          { id: "t6", title: "Parameters", duration: "" },
          { id: "t7", title: "Dashboard Actions", duration: "" },
          { id: "t8", title: "Story and Tableau Prep", duration: "" },
          { id: "t9", title: "AI in Tableau: Explain Data, Ask Data, AI-driven Insights with Tableau GPT", duration: "" }
        ]

      }
      ,

      {
        id: "m4",
        title: "Business Statistics",
        duration: "8 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction: Data Visualization, Interface, Business Problem-Solving", duration: "3 hrs" },
        //   { id: "t2", title: "Connecting & Shaping Data: Power Query Cleaning, Transformation, Append/Merge", duration: "4.5 hrs" },
        //   { id: "t3", title: "Data Modeling: Normalization, Relationships, Filter Flow", duration: "4 hrs" },
        //   { id: "t4", title: "DAX Analysis: Calculated Columns/Measures, Functions, Time Intelligence", duration: "6 hrs" },
        //   { id: "t5", title: "Visualization: Interactive Reports, Charts, Slicers, Drillthroughs", duration: "5 hrs" },
        //   { id: "t6", title: "AI & Custom Visuals: Decomposition Trees, Q&A, Key Influencers", duration: "2 hrs" },
        //   { id: "t7", title: "Deployment & Security: Power BI Service, Refresh Schedules, RLS", duration: "2.5 hrs" },
        //   { id: "t8", title: "SQL Integration: Database Connections, Custom Queries", duration: "1 hr" }
        // ]
        topics: [
          { id: "t1", title: "Probability Distributions", duration: "" },
          { id: "t2", title: "EDA", duration: "" },
          { id: "t3", title: "Statistical Analysis Using Python", duration: "" },
          { id: "t4", title: "Feature Engineering Techniques", duration: "" },
          { id: "t5", title: "Data Preprocessing", duration: "" },
          { id: "t6", title: "Advanced Statistical Methods", duration: "" }
        ]

      }
      ,

      {
        id: "m5",
        title: "R",
        duration: "40 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to R: R Console, RStudio Interface", duration: "1.5 hrs" },
        //   { id: "t2", title: "R Data Structures: Vectors and Matrices", duration: "2 hrs" },
        //   { id: "t3", title: "Programming Basics: Conditions, Loops, Functions", duration: "2.5 hrs" },
        //   { id: "t4", title: "DataFrames: Creation and Manipulation", duration: "2 hrs" },
        //   { id: "t5", title: "Advanced Programming: dplyr and Essential Packages", duration: "2.5 hrs" },
        //   { id: "t6", title: "Statistics: Probability Distributions, Hypothesis Testing", duration: "2 hrs" },
        //   { id: "t7", title: "Data Visualization: ggplot2 Fundamentals", duration: "1.5 hrs" },
        //   { id: "t8", title: "Linear Regression: Academic Performance Prediction Project", duration: "2 hrs" },
        //   { id: "t9", title: "Logistic Regression: Telecom Customer Churn Project", duration: "2 hrs" },
        //   { id: "t10", title: "Decision Trees: Loan Approval Prediction Project", duration: "2 hrs" },
        //   { id: "t11", title: "Time Series & Clustering: Sales Forecasting and Customer Segmentation Projects", duration: "2 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Basics to Advanced", duration: "" },
          { id: "t2", title: "Data Manipulation with dplyr", duration: "" },
          { id: "t3", title: "Data Visualization with ggplot2", duration: "" },
          { id: "t4", title: "Statistical Analysis", duration: "" },
          { id: "t5", title: "Predictive Modeling in R", duration: "" },
          { id: "t6", title: "Machine Learning Algorithms in R", duration: "" },
          { id: "t7", title: "AI in R: Generative AI Assistants for R Code Automation, ggplot Customization, Model Interpretation", duration: "" }
        ]

      }

      ,

      {
        id: "m6",
        title: "Python",
        duration: "40 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to Python: Installation, IDEs (VS Code, Jupyter)", duration: "2 hrs" },
        //   { id: "t2", title: "Core Data Types: Numbers, Strings, Booleans", duration: "3 hrs" },
        //   { id: "t3", title: "Advanced Data Structures: Lists, Tuples, Sets, Dictionaries", duration: "4 hrs" },
        //   { id: "t4", title: "Program Control: Conditionals, Loops, Comprehensions", duration: "3 hrs" },
        //   { id: "t5", title: "Functions & NumPy: Custom Functions, Vectorized Operations", duration: "3.5 hrs" },
        //   { id: "t6", title: "Pandas Basics: DataFrame Operations, Data Cleaning", duration: "4 hrs" },
        //   { id: "t7", title: "Pandas Advanced: GroupBy, Merging, Pivoting", duration: "3.5 hrs" },
        //   { id: "t8", title: "EDA: Univariate/Bivariate Analysis, Correlation", duration: "3 hrs" },
        //   { id: "t9", title: "Linear Regression: Ad Revenue Prediction Project", duration: "2.5 hrs" },
        //   { id: "t10", title: "Logistic Regression: Click-Through Rate Prediction Project", duration: "2.5 hrs" },
        //   { id: "t11", title: "Decision Trees: Used Car Pricing Project", duration: "2 hrs" },
        //   { id: "t12", title: "Time Series: Retail Sales Forecasting Project", duration: "2 hrs" },
        //   { id: "t13", title: "Deployment: API Integration, GitHub, Model Serving", duration: "2 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Basics to Advanced", duration: "" },
          { id: "t2", title: "Data Manipulation (NumPy, Pandas)", duration: "" },
          { id: "t3", title: "Visualization (Matplotlib, Seaborn)", duration: "" },
          { id: "t4", title: "ML Fundamentals", duration: "" },
          { id: "t5", title: "Predictive Modeling", duration: "" },
          { id: "t6", title: "Evaluation and Feature Engineering", duration: "" },
          { id: "t7", title: "AI in Python: Prompt-based model interpretation, automated EDA with AI tools, and model documentation using Copilot", duration: "" }
        ]

      }
      ,
      {
        id: "m7",
        title: "ML, DL & AI",
        duration: "28 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to Machine Learning: Concepts, Workflow, and Applications", duration: "2 hrs" },
        //   { id: "t2", title: "Recap: Linear/Logistic Regression, Decision Trees (Project: Car Price Prediction)", duration: "3 hrs" },
        //   { id: "t3", title: "Ensemble Learning: Random Forest (Project: Loan Risk Prediction)", duration: "3 hrs" },
        //   { id: "t4", title: "Boosting: Gradient Boost, AdaBoost, XGBoost (Projects: House Prices & Disease Diagnosis)", duration: "4 hrs" },
        //   { id: "t5", title: "Support Vector Machines (Project: YouTube Video Analysis)", duration: "2 hrs" },
        //   { id: "t6", title: "Naive Bayes (Project: Customer Churn Prediction)", duration: "2 hrs" },
        //   { id: "t7", title: "K-Nearest Neighbors (Project: Feedback Categorization)", duration: "2 hrs" },
        //   { id: "t8", title: "Dimensionality Reduction & Clustering: PCA, K-Means, Hierarchical, DBSCAN (Project: Retail Profiling)", duration: "3 hrs" },
        //   { id: "t9", title: "Text Preprocessing: Regex, Tokenization, Cleaning", duration: "2 hrs" },
        //   { id: "t10", title: "Text Mining: Word Clouds, Sentiment Analysis (Project: Indigo Tweets)", duration: "2 hrs" },
        //   { id: "t11", title: "NLP Classification (Project: IT Ticket Classification)", duration: "2 hrs" },
        //   { id: "t12", title: "Gen AI: Custom Text Classification with Transformers", duration: "2 hrs" },
        //   { id: "t13", title: "Neural Networks (Projects: Customer Lifetime Value & Credit Risk)", duration: "2 hrs" },
        //   { id: "t14", title: "Advanced Networks: RNN/LSTM (Stock Prediction), CNN (Face Classification)", duration: "3 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Predictive Modeling", duration: "" },
          { id: "t2", title: "Clustering", duration: "" },
          { id: "t3", title: "Decision Trees", duration: "" },
          { id: "t4", title: "Ensemble Techniques", duration: "" },
          { id: "t5", title: "Optimization", duration: "" },
          { id: "t6", title: "NLP", duration: "" },
          { id: "t7", title: "Deep Learning - from models to tuning and deployment", duration: "" },
          { id: "t8", title: "AI in ML: Image, Text, and Time-Series projects using Flask/Streamlit integration", duration: "" }
        ]

      }


      // ,

      // {
      //   id: "m8",
      //   title: "Statistics",
      //   duration: "8 hrs",
      //   topics: [
      //     { id: "t1", title: "Types of Data: Nominal, Ordinal, Interval, Ratio", duration: "0.75 hrs" },
      //     { id: "t2", title: "Correlation: Pearson, Spearman, Visualization", duration: "1 hr" },
      //     { id: "t3", title: "Measures of Central Tendency: Mean, Median, Mode", duration: "0.75 hrs" },
      //     { id: "t4", title: "Measures of Dispersion: Range, Variance, Std Dev, IQR", duration: "1 hr" },
      //     { id: "t5", title: "Probability: Basics, Rules, Bayes' Theorem", duration: "1 hr" },
      //     { id: "t6", title: "Probability Distributions: Normal, Binomial, Poisson", duration: "1.25 hrs" },
      //     { id: "t7", title: "Sampling and Estimation: CLT, Confidence Intervals", duration: "1 hr" },
      //     { id: "t8", title: "Hypothesis Testing: p-values, t-tests, Chi-square", duration: "1.25 hrs" },
      //     { id: "t9", title: "Data Modeling: Linear Regression Basics", duration: "1 hr" }
      //   ]
      // }

      // ,
      // {
      //   "id": "m9",
      //   "title": "Excel VBA Automation",
      //   "duration": "26 hrs",
      //   "topics": [
      //     { "id": "t1", "title": "Making Macro Do Automated Tasks for You", "duration": "6.5 hrs" },
      //     { "id": "t2", "title": "Programming Concepts (Variables, Loops, Conditions)", "duration": "8.25 hrs" },
      //     { "id": "t3", "title": "Analysis Using VBA (Data Cleaning, PivotTables)", "duration": "6.75 hrs" },
      //     { "id": "t4", "title": "Creating Dashboards (Forms, Dynamic Charts)", "duration": "4.5 hrs" }
      //   ]
      // }


    ],

    projects: [
      {
        id: "p1",
        title: "Steps to Make a Career in AI & Data",
        description: "Explore pathways to start and grow a career in AI and Data. Learn about essential skills, tools, career opportunities, and how AI is impacting various industries through this expert Q&A session.",
        image: "https://img.youtube.com/vi/OoCffZ4VaJE/0.jpg",
        skills: ["AI Career Path", "AI Tools", "AI Research", "AI & Web Development", "Chatbots"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "OoCffZ4VaJE"
      },
      {
        id: "p2",
        title: "Using AI Visuals in Power BI Dashboards",
        description: "Learn to create AI-powered visuals in Power BI, including Key Influencer, Decomposition Tree, Q&A, and Smart Narrative. Explore current AI trends and integrate ChatGPT for enhanced insights",
        image: "https://img.youtube.com/vi/ftTTrchGVbA/0.jpg",
        skills: ["Key Influencer Visual", "Decomposition Tree", "Smart Narrative", "AI Trends"],
        difficulty: "Intermediate to Advanced",
        isPractice: true,
        videoId: "ftTTrchGVbA"
      },
      {
        id: "p3",
        title: "Python Prediction Model for Real Estate",
        description: "Build a real estate price prediction model using Python and machine learning. Learn data preprocessing, regression techniques, and model building with practical insights from a real-world case study.",
        image: "https://img.youtube.com/vi/TipOU1HPrxA/0.jpg",
        skills: ["Regression Models", "Data Preprocessing", "Linear Regression", "Random Forest", "Neural Networks"],
        difficulty: "Intermediate",
        isPractice: true,
        videoId: "TipOU1HPrxA"
      },
      {
        id: "p4",
        title: "OYO Business Analysis with SQL",
        description: "Learn how to perform business analysis using SQL with a real-world case study on OYO’s room sales. Cover data cleaning, SQL queries, business KPIs, and practical data-driven decision-making.",
        image: "https://img.youtube.com/vi/ee7TajNEUrI/0.jpg",
        skills: ["GROUP BY", "ARIMA Model", "Window Functions ", "CTE", "Data Cleaning"],
        difficulty: "Beginner to Intermediate",
        videoId: "ee7TajNEUrI"
      },
      {
        id: "p5",
        title: "Predicting Computer Prices with Python",
        description: "Build a predictive model for computer prices using Python. Learn data cleaning, regression modeling, and key Python libraries through this industry case study by an IvyPro student.",
        image: "https://img.youtube.com/vi/Wt8jyPvdGRo/0.jpg",
        skills: ["Feature Engineering,", "Linear Regression", "Random Forest", "Scikit-learn", "Regression Metrics"],
        difficulty: "Beginner to Intermediate",
        videoId: "Wt8jyPvdGRo"
      },
      {
        id: "p6",
        title: "ANOVA Using R - Bakery Case Study",
        description: "Analyze how display factors affect product demand using Two-way ANOVA and Tukey’s Test in R. Learn statistical hypothesis testing through this practical bakery case study.",
        image: "https://img.youtube.com/vi/UhO4y3a9yxQ/0.jpg",
        skills: ["Data Loading", "Data Manipulation", "Two-way ANOVA", "Hypothesis Testing", "Statistical Modeling"],
        difficulty: "Intermediate",
        videoId: "UhO4y3a9yxQ"
      }
    ],










  },


   {
    id: '15',
    title: "Data Science with Machine Learning & AI Course in Chennai",
    description: "If you are searching for a career-driven data science course in Chennai, Ivy Professional School offers a comprehensive program designed to help learners gain in-demand skills in analytics, machine learning, and artificial intelligence.Chennai is a major hub for IT services, manufacturing analytics, fintech, and enterprise technology, making it an excellent city to build a long-term career in data science. This program prepares learners to meet industry expectations through practical learning and real-world exposure",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Deep Learning",
    students: 1243,
    metaData: {
      title: "Data Science Course in Chennai | Ivy Professional School",
      description: "Enroll in Ivy Professional School’s Data Science Course in Chennai with hands-on projects, expert mentors, and industry-ready analytics training.",
      bio: "Looking to build a high-growth career in analytics, Machine Learning, and Artificial Intelligence? The Data Science Course in Kolkata by Ivy Professional School is designed to help students and working professionals master industry-relevant data science skills with hands-on projects, expert faculty, and career-focused training.\n\n Kolkata is fast emerging as a technology and analytics hub, and our Data Science program equips you with practical knowledge, real-world exposure, and placement assistance to compete in top data-driven roles across India."

    },
    duration: "14 weeks",
    rating: 4.8,
    reviewCount: 298,
    isFeatured: true,
    slug: "data-science-course-chennai",
    longDescription: "The Data Science Course in Chennai is a hands-on, industry-aligned program that covers the complete data science lifecycle—from data collection and preprocessing to predictive modeling, machine learning, and AI-based solutions. \n\n Designed with inputs from industry professionals, the curriculum focuses on practical problem-solving, business use cases, and tools widely used in data science and analytics roles. Learners work on real datasets and case studies that reflect challenges faced by organizations across industries. \n\n This data science course in Chennai is ideal for graduates, IT professionals, engineers, and working professionals who want to transition into data-driven roles with structured mentorship and career support."
    , instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
        , isDirector: true
      }
    ],
    outcomes: [
      "Build a strong foundation in statistics and mathematics for data science",
      "Analyze, clean, and manipulate data using Python, Pandas, NumPy, and SQL",
      "Perform exploratory data analysis to uncover insights and trends",
      "Design, train, and evaluate machine learning models",
      "Apply supervised and unsupervised learning techniques effectively",
      "Work with real-world datasets and industry-focused case studies",
      "Communicate data-driven insights clearly to technical and business stakeholders"
   
    ],



    curriculum: [
      {
        id: "m1",
        title: "Advanced Excel",
        duration: "32 hrs",
        topics: [
          { id: "t1", title: "Basic to Advanced Functions", duration: "" },
          { id: "t2", title: "Data Analysis", duration: "" },
          { id: "t3", title: "Reporting using Pivot Tables", duration: "" },
          { id: "t4", title: "Data Visualization", duration: "" },
          { id: "t5", title: "Data Cleaning", duration: "" },
          { id: "t6", title: "Dashboarding", duration: "" },
          { id: "t7", title: "AI and ChatGPT Integration", duration: "" }
        ]

        // topics: [
        //   { id: "t1", title: "Data Hygiene – Clean, structure, and prepare your dataset", duration: "1.25 hrs" },
        //   { id: "t2", title: "Formatting – Number and table formatting for clarity", duration: "1.25 hrs" },
        //   { id: "t3", title: "Filtering & Sorting – Auto filters, advanced filters, custom sorting", duration: "1.5 hrs" },
        //   { id: "t4", title: "Cell Referencing – Relative, absolute references & formula handling", duration: "1.5 hrs" },
        //   { id: "t5", title: "Basic Functions – SUM, AVERAGE, COUNT, PRODUCT, etc.", duration: "1.75 hrs" },
        //   { id: "t6", title: "Date Functions – TODAY, DATEDIF, EOMONTH, WEEKDAY, etc.", duration: "1.5 hrs" },
        //   { id: "t7", title: "Conditional Functions – SUMIFS, COUNTIFS, AVERAGEIFS", duration: "2 hrs" },
        //   { id: "t8", title: "Database Functions – DSUM, DAVERAGE using criteria tables", duration: "1.25 hrs" },
        //   { id: "t9", title: "Dynamic Arrays (Google Sheets) – FILTER, SORT, UNIQUE, TEXTJOIN", duration: "1.5 hrs" },
        //   { id: "t10", title: "Pivot Tables – Layout, grouping, calculated fields, summarizing", duration: "2.5 hrs" },
        //   { id: "t11", title: "Charts – Chart creation, types, usage, sparklines", duration: "2 hrs" },
        //   { id: "t12", title: "Dashboards – Planning, business insights, slicers, summaries", duration: "2.5 hrs" },
        //   { id: "t13", title: "Logical Functions – IF, AND, OR, IFERROR, SWITCH etc", duration: "1.75 hrs" },
        //   { id: "t14", title: "Lookup Functions – VLOOKUP, XLOOKUP, MATCH, INDIRECT etc", duration: "2.25 hrs" },
        //   { id: "t15", title: "Text Functions – LEFT, MID, FIND, SUBSTITUTE, CONCAT etc", duration: "1.5 hrs" },
        //   { id: "t16", title: "Conditional Formatting – Color scales, data bars, formulas", duration: "1.25 hrs" },
        //   { id: "t17", title: "Data Validation – Lists, error alerts, dependent dropdowns", duration: "1 hr" },
        //   { id: "t18", title: "Goal Seek & Solver – Solve optimization and reverse calculations", duration: "1.25 hrs" },
        //   { id: "t19", title: "Gen AI - How to Use Gen AI in Microsoft Excel, Use Lab.Generative", duration: "0.75 hrs" },
        //   { id: "t20", title: "ChatGPT - How to use Prompt engineering for Data Analysis", duration: "0.75 hrs" }
        // ]
      },


      {
        id: "m2",
        title: "MySQL",
        duration: "32 hrs",
        topics: [
          { id: "t1", title: "Database Management", duration: "" },
          { id: "t2", title: "SQL Queries", duration: "" },
          { id: "t3", title: "Data Retrieval", duration: "" },
          { id: "t4", title: "Database Design", duration: "" },
          { id: "t5", title: "Performance Optimization", duration: "" },
          { id: "t6", title: "AI Tools to Auto Generate and Optimize Queries", duration: "" }
        ]

        // topics: [
        //   { id: "t1", title: "SQL Basics: Introduction to Database Management System (DBMS), Introduction to Google BigQuery and MySQL, CRUD Operations", duration: "3 hrs" },
        //   { id: "t2", title: "Data Manipulation and Transformation: Logical, Numerical, and Mathematical Operators, Conditional Statements", duration: "2.5 hrs" },
        //   { id: "t3", title: "Data Cleaning: Type Casting, Date/Time Formatting, Text Formatting", duration: "2 hrs" },
        //   { id: "t4", title: "Pattern Matching: LIKE Operator, REGEXP Functions", duration: "1.5 hrs" },
        //   { id: "t5", title: "Joins and Relational Databases: Keys, Join Types, Indexing, Normalization", duration: "4 hrs" },
        //   { id: "t6", title: "Aggregation and Grouping: Aggregate Functions, GROUP BY, CTEs, Variables", duration: "3.5 hrs" },
        //   { id: "t7", title: "Window Functions: RANK, DENSE_RANK, ROW_NUMBER, LEAD/LAG", duration: "2.5 hrs" },
        //   { id: "t8", title: "Data Reusability: Views, Stored Procedures, UDFs", duration: "2 hrs" },
        //   { id: "t9", title: "Subqueries: Simple, EXISTS/NOT EXISTS, Correlated", duration: "1.5 hrs" },
        //   { id: "t10", title: "Cloud Services: BigQuery Querying, Sharing Results, Permissions, Scheduling", duration: "1.5 hrs" },
        //   { id: "t11", title: "Online SQL Platforms: MySQL Workbench, Online IDEs, Cloud Storage Integration", duration: "0.5 hrs" }
        // ]
      },

      {
        id: "m3",
        title: " Tableau",
        duration: "28 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to Tableau: Approaching Business Problems, Interface Overview", duration: "2 hrs" },
        //   { id: "t2", title: "Connecting and Shaping Data: Data Sources, Pivoting, Calculated Fields, Dimensions/Measures", duration: "3 hrs" },
        //   { id: "t3", title: "Introduction to Basic Charts: Bars, Lines, Scatter Plots, Maps", duration: "2 hrs" },
        //   { id: "t4", title: "Working With Marks Card: Color, Size, Label, Detail, Tooltip", duration: "1.5 hrs" },
        //   { id: "t5", title: "Different Filters in Tableau: Quick Filters, Context Filters, Data Source Filters", duration: "2 hrs" },
        //   { id: "t6", title: "Calculated Fields: Summarization, String Manipulation, Date, Logical Functions", duration: "2.5 hrs" },
        //   { id: "t7", title: "Combining Tables: Joins, Unions, Blending", duration: "2 hrs" },
        //   { id: "t8", title: "Table Calculations: Primary and Secondary Calculations", duration: "1.5 hrs" },
        //   { id: "t9", title: "Parameters: Dimension, Measure, Sort, TopN, Date", duration: "1.5 hrs" },
        //   { id: "t10", title: "Groups & Sets: Creating and Applying", duration: "1 hr" },
        //   { id: "t11", title: "Analytics: Forecasting, Trend Lines, Clustering", duration: "2 hrs" },
        //   { id: "t12", title: "Dashboard Building & Actions: Filters, Highlights, Navigation", duration: "2.5 hrs" },
        //   { id: "t13", title: "Projects: RFM Analysis, Customer Retention Dashboard", duration: "1.5 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Introduction to Data Visualization", duration: "" },
          { id: "t2", title: "Creating Interactive Dashboards", duration: "" },
          { id: "t3", title: "Data Connection and Blending", duration: "" },
          { id: "t4", title: "Calculations and Expressions", duration: "" },
          { id: "t5", title: "Chart Types", duration: "" },
          { id: "t6", title: "Parameters", duration: "" },
          { id: "t7", title: "Dashboard Actions", duration: "" },
          { id: "t8", title: "Story and Tableau Prep", duration: "" },
          { id: "t9", title: "AI in Tableau: Explain Data, Ask Data, AI-driven Insights with Tableau GPT", duration: "" }
        ]

      }
      ,

      {
        id: "m4",
        title: "Business Statistics",
        duration: "8 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction: Data Visualization, Interface, Business Problem-Solving", duration: "3 hrs" },
        //   { id: "t2", title: "Connecting & Shaping Data: Power Query Cleaning, Transformation, Append/Merge", duration: "4.5 hrs" },
        //   { id: "t3", title: "Data Modeling: Normalization, Relationships, Filter Flow", duration: "4 hrs" },
        //   { id: "t4", title: "DAX Analysis: Calculated Columns/Measures, Functions, Time Intelligence", duration: "6 hrs" },
        //   { id: "t5", title: "Visualization: Interactive Reports, Charts, Slicers, Drillthroughs", duration: "5 hrs" },
        //   { id: "t6", title: "AI & Custom Visuals: Decomposition Trees, Q&A, Key Influencers", duration: "2 hrs" },
        //   { id: "t7", title: "Deployment & Security: Power BI Service, Refresh Schedules, RLS", duration: "2.5 hrs" },
        //   { id: "t8", title: "SQL Integration: Database Connections, Custom Queries", duration: "1 hr" }
        // ]
        topics: [
          { id: "t1", title: "Probability Distributions", duration: "" },
          { id: "t2", title: "EDA", duration: "" },
          { id: "t3", title: "Statistical Analysis Using Python", duration: "" },
          { id: "t4", title: "Feature Engineering Techniques", duration: "" },
          { id: "t5", title: "Data Preprocessing", duration: "" },
          { id: "t6", title: "Advanced Statistical Methods", duration: "" }
        ]

      }
      ,

      {
        id: "m5",
        title: "R",
        duration: "40 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to R: R Console, RStudio Interface", duration: "1.5 hrs" },
        //   { id: "t2", title: "R Data Structures: Vectors and Matrices", duration: "2 hrs" },
        //   { id: "t3", title: "Programming Basics: Conditions, Loops, Functions", duration: "2.5 hrs" },
        //   { id: "t4", title: "DataFrames: Creation and Manipulation", duration: "2 hrs" },
        //   { id: "t5", title: "Advanced Programming: dplyr and Essential Packages", duration: "2.5 hrs" },
        //   { id: "t6", title: "Statistics: Probability Distributions, Hypothesis Testing", duration: "2 hrs" },
        //   { id: "t7", title: "Data Visualization: ggplot2 Fundamentals", duration: "1.5 hrs" },
        //   { id: "t8", title: "Linear Regression: Academic Performance Prediction Project", duration: "2 hrs" },
        //   { id: "t9", title: "Logistic Regression: Telecom Customer Churn Project", duration: "2 hrs" },
        //   { id: "t10", title: "Decision Trees: Loan Approval Prediction Project", duration: "2 hrs" },
        //   { id: "t11", title: "Time Series & Clustering: Sales Forecasting and Customer Segmentation Projects", duration: "2 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Basics to Advanced", duration: "" },
          { id: "t2", title: "Data Manipulation with dplyr", duration: "" },
          { id: "t3", title: "Data Visualization with ggplot2", duration: "" },
          { id: "t4", title: "Statistical Analysis", duration: "" },
          { id: "t5", title: "Predictive Modeling in R", duration: "" },
          { id: "t6", title: "Machine Learning Algorithms in R", duration: "" },
          { id: "t7", title: "AI in R: Generative AI Assistants for R Code Automation, ggplot Customization, Model Interpretation", duration: "" }
        ]

      }

      ,

      {
        id: "m6",
        title: "Python",
        duration: "40 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to Python: Installation, IDEs (VS Code, Jupyter)", duration: "2 hrs" },
        //   { id: "t2", title: "Core Data Types: Numbers, Strings, Booleans", duration: "3 hrs" },
        //   { id: "t3", title: "Advanced Data Structures: Lists, Tuples, Sets, Dictionaries", duration: "4 hrs" },
        //   { id: "t4", title: "Program Control: Conditionals, Loops, Comprehensions", duration: "3 hrs" },
        //   { id: "t5", title: "Functions & NumPy: Custom Functions, Vectorized Operations", duration: "3.5 hrs" },
        //   { id: "t6", title: "Pandas Basics: DataFrame Operations, Data Cleaning", duration: "4 hrs" },
        //   { id: "t7", title: "Pandas Advanced: GroupBy, Merging, Pivoting", duration: "3.5 hrs" },
        //   { id: "t8", title: "EDA: Univariate/Bivariate Analysis, Correlation", duration: "3 hrs" },
        //   { id: "t9", title: "Linear Regression: Ad Revenue Prediction Project", duration: "2.5 hrs" },
        //   { id: "t10", title: "Logistic Regression: Click-Through Rate Prediction Project", duration: "2.5 hrs" },
        //   { id: "t11", title: "Decision Trees: Used Car Pricing Project", duration: "2 hrs" },
        //   { id: "t12", title: "Time Series: Retail Sales Forecasting Project", duration: "2 hrs" },
        //   { id: "t13", title: "Deployment: API Integration, GitHub, Model Serving", duration: "2 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Basics to Advanced", duration: "" },
          { id: "t2", title: "Data Manipulation (NumPy, Pandas)", duration: "" },
          { id: "t3", title: "Visualization (Matplotlib, Seaborn)", duration: "" },
          { id: "t4", title: "ML Fundamentals", duration: "" },
          { id: "t5", title: "Predictive Modeling", duration: "" },
          { id: "t6", title: "Evaluation and Feature Engineering", duration: "" },
          { id: "t7", title: "AI in Python: Prompt-based model interpretation, automated EDA with AI tools, and model documentation using Copilot", duration: "" }
        ]

      }
      ,
      {
        id: "m7",
        title: "ML, DL & AI",
        duration: "28 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to Machine Learning: Concepts, Workflow, and Applications", duration: "2 hrs" },
        //   { id: "t2", title: "Recap: Linear/Logistic Regression, Decision Trees (Project: Car Price Prediction)", duration: "3 hrs" },
        //   { id: "t3", title: "Ensemble Learning: Random Forest (Project: Loan Risk Prediction)", duration: "3 hrs" },
        //   { id: "t4", title: "Boosting: Gradient Boost, AdaBoost, XGBoost (Projects: House Prices & Disease Diagnosis)", duration: "4 hrs" },
        //   { id: "t5", title: "Support Vector Machines (Project: YouTube Video Analysis)", duration: "2 hrs" },
        //   { id: "t6", title: "Naive Bayes (Project: Customer Churn Prediction)", duration: "2 hrs" },
        //   { id: "t7", title: "K-Nearest Neighbors (Project: Feedback Categorization)", duration: "2 hrs" },
        //   { id: "t8", title: "Dimensionality Reduction & Clustering: PCA, K-Means, Hierarchical, DBSCAN (Project: Retail Profiling)", duration: "3 hrs" },
        //   { id: "t9", title: "Text Preprocessing: Regex, Tokenization, Cleaning", duration: "2 hrs" },
        //   { id: "t10", title: "Text Mining: Word Clouds, Sentiment Analysis (Project: Indigo Tweets)", duration: "2 hrs" },
        //   { id: "t11", title: "NLP Classification (Project: IT Ticket Classification)", duration: "2 hrs" },
        //   { id: "t12", title: "Gen AI: Custom Text Classification with Transformers", duration: "2 hrs" },
        //   { id: "t13", title: "Neural Networks (Projects: Customer Lifetime Value & Credit Risk)", duration: "2 hrs" },
        //   { id: "t14", title: "Advanced Networks: RNN/LSTM (Stock Prediction), CNN (Face Classification)", duration: "3 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Predictive Modeling", duration: "" },
          { id: "t2", title: "Clustering", duration: "" },
          { id: "t3", title: "Decision Trees", duration: "" },
          { id: "t4", title: "Ensemble Techniques", duration: "" },
          { id: "t5", title: "Optimization", duration: "" },
          { id: "t6", title: "NLP", duration: "" },
          { id: "t7", title: "Deep Learning - from models to tuning and deployment", duration: "" },
          { id: "t8", title: "AI in ML: Image, Text, and Time-Series projects using Flask/Streamlit integration", duration: "" }
        ]

      }


      // ,

      // {
      //   id: "m8",
      //   title: "Statistics",
      //   duration: "8 hrs",
      //   topics: [
      //     { id: "t1", title: "Types of Data: Nominal, Ordinal, Interval, Ratio", duration: "0.75 hrs" },
      //     { id: "t2", title: "Correlation: Pearson, Spearman, Visualization", duration: "1 hr" },
      //     { id: "t3", title: "Measures of Central Tendency: Mean, Median, Mode", duration: "0.75 hrs" },
      //     { id: "t4", title: "Measures of Dispersion: Range, Variance, Std Dev, IQR", duration: "1 hr" },
      //     { id: "t5", title: "Probability: Basics, Rules, Bayes' Theorem", duration: "1 hr" },
      //     { id: "t6", title: "Probability Distributions: Normal, Binomial, Poisson", duration: "1.25 hrs" },
      //     { id: "t7", title: "Sampling and Estimation: CLT, Confidence Intervals", duration: "1 hr" },
      //     { id: "t8", title: "Hypothesis Testing: p-values, t-tests, Chi-square", duration: "1.25 hrs" },
      //     { id: "t9", title: "Data Modeling: Linear Regression Basics", duration: "1 hr" }
      //   ]
      // }

      // ,
      // {
      //   "id": "m9",
      //   "title": "Excel VBA Automation",
      //   "duration": "26 hrs",
      //   "topics": [
      //     { "id": "t1", "title": "Making Macro Do Automated Tasks for You", "duration": "6.5 hrs" },
      //     { "id": "t2", "title": "Programming Concepts (Variables, Loops, Conditions)", "duration": "8.25 hrs" },
      //     { "id": "t3", "title": "Analysis Using VBA (Data Cleaning, PivotTables)", "duration": "6.75 hrs" },
      //     { "id": "t4", "title": "Creating Dashboards (Forms, Dynamic Charts)", "duration": "4.5 hrs" }
      //   ]
      // }


    ],

    projects: [
      {
        id: "p1",
        title: "Steps to Make a Career in AI & Data",
        description: "Explore pathways to start and grow a career in AI and Data. Learn about essential skills, tools, career opportunities, and how AI is impacting various industries through this expert Q&A session.",
        image: "https://img.youtube.com/vi/OoCffZ4VaJE/0.jpg",
        skills: ["AI Career Path", "AI Tools", "AI Research", "AI & Web Development", "Chatbots"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "OoCffZ4VaJE"
      },
      {
        id: "p2",
        title: "Using AI Visuals in Power BI Dashboards",
        description: "Learn to create AI-powered visuals in Power BI, including Key Influencer, Decomposition Tree, Q&A, and Smart Narrative. Explore current AI trends and integrate ChatGPT for enhanced insights",
        image: "https://img.youtube.com/vi/ftTTrchGVbA/0.jpg",
        skills: ["Key Influencer Visual", "Decomposition Tree", "Smart Narrative", "AI Trends"],
        difficulty: "Intermediate to Advanced",
        isPractice: true,
        videoId: "ftTTrchGVbA"
      },
      {
        id: "p3",
        title: "Python Prediction Model for Real Estate",
        description: "Build a real estate price prediction model using Python and machine learning. Learn data preprocessing, regression techniques, and model building with practical insights from a real-world case study.",
        image: "https://img.youtube.com/vi/TipOU1HPrxA/0.jpg",
        skills: ["Regression Models", "Data Preprocessing", "Linear Regression", "Random Forest", "Neural Networks"],
        difficulty: "Intermediate",
        isPractice: true,
        videoId: "TipOU1HPrxA"
      },
      {
        id: "p4",
        title: "OYO Business Analysis with SQL",
        description: "Learn how to perform business analysis using SQL with a real-world case study on OYO’s room sales. Cover data cleaning, SQL queries, business KPIs, and practical data-driven decision-making.",
        image: "https://img.youtube.com/vi/ee7TajNEUrI/0.jpg",
        skills: ["GROUP BY", "ARIMA Model", "Window Functions ", "CTE", "Data Cleaning"],
        difficulty: "Beginner to Intermediate",
        videoId: "ee7TajNEUrI"
      },
      {
        id: "p5",
        title: "Predicting Computer Prices with Python",
        description: "Build a predictive model for computer prices using Python. Learn data cleaning, regression modeling, and key Python libraries through this industry case study by an IvyPro student.",
        image: "https://img.youtube.com/vi/Wt8jyPvdGRo/0.jpg",
        skills: ["Feature Engineering,", "Linear Regression", "Random Forest", "Scikit-learn", "Regression Metrics"],
        difficulty: "Beginner to Intermediate",
        videoId: "Wt8jyPvdGRo"
      },
      {
        id: "p6",
        title: "ANOVA Using R - Bakery Case Study",
        description: "Analyze how display factors affect product demand using Two-way ANOVA and Tukey’s Test in R. Learn statistical hypothesis testing through this practical bakery case study.",
        image: "https://img.youtube.com/vi/UhO4y3a9yxQ/0.jpg",
        skills: ["Data Loading", "Data Manipulation", "Two-way ANOVA", "Hypothesis Testing", "Statistical Modeling"],
        difficulty: "Intermediate",
        videoId: "UhO4y3a9yxQ"
      }
    ],










  },

   {
    id: '16',
    title: "Data Science with Machine Learning & AI Course in Bangalore",
    description: "Bangalore, often referred to as the Silicon Valley of India, is home to some of the world’s leading technology companies and startups. The Data Science with Machine Learning & AI Course in Bangalore by Ivy Professional School is designed to help aspiring professionals and working executives build future-ready careers in data-driven roles.This industry-aligned data science course blends statistics, programming, machine learning, and AI with hands-on projects and real-world case studies. Whether you are a fresher, IT professional, or domain expert looking to upskill, our Bangalore data science program prepares you for high-growth roles such as Data Scientist, Machine Learning Engineer, and Data Analyst.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Deep Learning",
    students: 1243,
    metaData: {
      title: "Data Science Course in Bangalore | Ivy Professional School",
      description: "Enroll in Ivy Professional School’s Data Science Course in Bangalore with Machine Learning & AI. Real projects, expert mentors, and career support.",
      bio: "Looking to build a high-growth career in analytics, Machine Learning, and Artificial Intelligence? The Data Science Course in Kolkata by Ivy Professional School is designed to help students and working professionals master industry-relevant data science skills with hands-on projects, expert faculty, and career-focused training.\n\n Kolkata is fast emerging as a technology and analytics hub, and our Data Science program equips you with practical knowledge, real-world exposure, and placement assistance to compete in top data-driven roles across India."

    },
    duration: "14 weeks",
    rating: 4.8,
    reviewCount: 298,
    isFeatured: true,
    slug: "data-science-course-bangalore",
    longDescription: "Bangalore’s tech ecosystem demands professionals who can convert raw data into actionable insights. Ivy Professional School bridges this skill gap through a structured, practical, and career-focused learning approach. \n\n Learn from industry experts with real-world data science experience. \n\n Curriculum aligned with current industry tools and hiring needs. \n\n Hands-on exposure to live projects and case studies. \n\n Flexible learning options suitable for working professionals in Bangalore. \n\n Strong career support with interview preparation and guidance."
    , instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
        , isDirector: true
      }
    ],
    outcomes: [
      "Fundamentals of Statistics and Probability for Data Science",
      "Python programming for data analysis and visualization",
      "Data wrangling and exploratory data analysis using Pandas and NumPy",
      "Machine Learning algorithms including regression, classification, and clustering",
      "Model evaluation, validation, and optimization techniques",
      "Working with real-world datasets and business problems",
      "Communicating insights through dashboards and visual storytelling",
      "Introduction to Artificial Intelligence concepts"
   
    ],



    curriculum: [
      {
        id: "m1",
        title: "Advanced Excel",
        duration: "32 hrs",
        topics: [
          { id: "t1", title: "Basic to Advanced Functions", duration: "" },
          { id: "t2", title: "Data Analysis", duration: "" },
          { id: "t3", title: "Reporting using Pivot Tables", duration: "" },
          { id: "t4", title: "Data Visualization", duration: "" },
          { id: "t5", title: "Data Cleaning", duration: "" },
          { id: "t6", title: "Dashboarding", duration: "" },
          { id: "t7", title: "AI and ChatGPT Integration", duration: "" }
        ]

        // topics: [
        //   { id: "t1", title: "Data Hygiene – Clean, structure, and prepare your dataset", duration: "1.25 hrs" },
        //   { id: "t2", title: "Formatting – Number and table formatting for clarity", duration: "1.25 hrs" },
        //   { id: "t3", title: "Filtering & Sorting – Auto filters, advanced filters, custom sorting", duration: "1.5 hrs" },
        //   { id: "t4", title: "Cell Referencing – Relative, absolute references & formula handling", duration: "1.5 hrs" },
        //   { id: "t5", title: "Basic Functions – SUM, AVERAGE, COUNT, PRODUCT, etc.", duration: "1.75 hrs" },
        //   { id: "t6", title: "Date Functions – TODAY, DATEDIF, EOMONTH, WEEKDAY, etc.", duration: "1.5 hrs" },
        //   { id: "t7", title: "Conditional Functions – SUMIFS, COUNTIFS, AVERAGEIFS", duration: "2 hrs" },
        //   { id: "t8", title: "Database Functions – DSUM, DAVERAGE using criteria tables", duration: "1.25 hrs" },
        //   { id: "t9", title: "Dynamic Arrays (Google Sheets) – FILTER, SORT, UNIQUE, TEXTJOIN", duration: "1.5 hrs" },
        //   { id: "t10", title: "Pivot Tables – Layout, grouping, calculated fields, summarizing", duration: "2.5 hrs" },
        //   { id: "t11", title: "Charts – Chart creation, types, usage, sparklines", duration: "2 hrs" },
        //   { id: "t12", title: "Dashboards – Planning, business insights, slicers, summaries", duration: "2.5 hrs" },
        //   { id: "t13", title: "Logical Functions – IF, AND, OR, IFERROR, SWITCH etc", duration: "1.75 hrs" },
        //   { id: "t14", title: "Lookup Functions – VLOOKUP, XLOOKUP, MATCH, INDIRECT etc", duration: "2.25 hrs" },
        //   { id: "t15", title: "Text Functions – LEFT, MID, FIND, SUBSTITUTE, CONCAT etc", duration: "1.5 hrs" },
        //   { id: "t16", title: "Conditional Formatting – Color scales, data bars, formulas", duration: "1.25 hrs" },
        //   { id: "t17", title: "Data Validation – Lists, error alerts, dependent dropdowns", duration: "1 hr" },
        //   { id: "t18", title: "Goal Seek & Solver – Solve optimization and reverse calculations", duration: "1.25 hrs" },
        //   { id: "t19", title: "Gen AI - How to Use Gen AI in Microsoft Excel, Use Lab.Generative", duration: "0.75 hrs" },
        //   { id: "t20", title: "ChatGPT - How to use Prompt engineering for Data Analysis", duration: "0.75 hrs" }
        // ]
      },


      {
        id: "m2",
        title: "MySQL",
        duration: "32 hrs",
        topics: [
          { id: "t1", title: "Database Management", duration: "" },
          { id: "t2", title: "SQL Queries", duration: "" },
          { id: "t3", title: "Data Retrieval", duration: "" },
          { id: "t4", title: "Database Design", duration: "" },
          { id: "t5", title: "Performance Optimization", duration: "" },
          { id: "t6", title: "AI Tools to Auto Generate and Optimize Queries", duration: "" }
        ]

        // topics: [
        //   { id: "t1", title: "SQL Basics: Introduction to Database Management System (DBMS), Introduction to Google BigQuery and MySQL, CRUD Operations", duration: "3 hrs" },
        //   { id: "t2", title: "Data Manipulation and Transformation: Logical, Numerical, and Mathematical Operators, Conditional Statements", duration: "2.5 hrs" },
        //   { id: "t3", title: "Data Cleaning: Type Casting, Date/Time Formatting, Text Formatting", duration: "2 hrs" },
        //   { id: "t4", title: "Pattern Matching: LIKE Operator, REGEXP Functions", duration: "1.5 hrs" },
        //   { id: "t5", title: "Joins and Relational Databases: Keys, Join Types, Indexing, Normalization", duration: "4 hrs" },
        //   { id: "t6", title: "Aggregation and Grouping: Aggregate Functions, GROUP BY, CTEs, Variables", duration: "3.5 hrs" },
        //   { id: "t7", title: "Window Functions: RANK, DENSE_RANK, ROW_NUMBER, LEAD/LAG", duration: "2.5 hrs" },
        //   { id: "t8", title: "Data Reusability: Views, Stored Procedures, UDFs", duration: "2 hrs" },
        //   { id: "t9", title: "Subqueries: Simple, EXISTS/NOT EXISTS, Correlated", duration: "1.5 hrs" },
        //   { id: "t10", title: "Cloud Services: BigQuery Querying, Sharing Results, Permissions, Scheduling", duration: "1.5 hrs" },
        //   { id: "t11", title: "Online SQL Platforms: MySQL Workbench, Online IDEs, Cloud Storage Integration", duration: "0.5 hrs" }
        // ]
      },

      {
        id: "m3",
        title: " Tableau",
        duration: "28 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to Tableau: Approaching Business Problems, Interface Overview", duration: "2 hrs" },
        //   { id: "t2", title: "Connecting and Shaping Data: Data Sources, Pivoting, Calculated Fields, Dimensions/Measures", duration: "3 hrs" },
        //   { id: "t3", title: "Introduction to Basic Charts: Bars, Lines, Scatter Plots, Maps", duration: "2 hrs" },
        //   { id: "t4", title: "Working With Marks Card: Color, Size, Label, Detail, Tooltip", duration: "1.5 hrs" },
        //   { id: "t5", title: "Different Filters in Tableau: Quick Filters, Context Filters, Data Source Filters", duration: "2 hrs" },
        //   { id: "t6", title: "Calculated Fields: Summarization, String Manipulation, Date, Logical Functions", duration: "2.5 hrs" },
        //   { id: "t7", title: "Combining Tables: Joins, Unions, Blending", duration: "2 hrs" },
        //   { id: "t8", title: "Table Calculations: Primary and Secondary Calculations", duration: "1.5 hrs" },
        //   { id: "t9", title: "Parameters: Dimension, Measure, Sort, TopN, Date", duration: "1.5 hrs" },
        //   { id: "t10", title: "Groups & Sets: Creating and Applying", duration: "1 hr" },
        //   { id: "t11", title: "Analytics: Forecasting, Trend Lines, Clustering", duration: "2 hrs" },
        //   { id: "t12", title: "Dashboard Building & Actions: Filters, Highlights, Navigation", duration: "2.5 hrs" },
        //   { id: "t13", title: "Projects: RFM Analysis, Customer Retention Dashboard", duration: "1.5 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Introduction to Data Visualization", duration: "" },
          { id: "t2", title: "Creating Interactive Dashboards", duration: "" },
          { id: "t3", title: "Data Connection and Blending", duration: "" },
          { id: "t4", title: "Calculations and Expressions", duration: "" },
          { id: "t5", title: "Chart Types", duration: "" },
          { id: "t6", title: "Parameters", duration: "" },
          { id: "t7", title: "Dashboard Actions", duration: "" },
          { id: "t8", title: "Story and Tableau Prep", duration: "" },
          { id: "t9", title: "AI in Tableau: Explain Data, Ask Data, AI-driven Insights with Tableau GPT", duration: "" }
        ]

      }
      ,

      {
        id: "m4",
        title: "Business Statistics",
        duration: "8 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction: Data Visualization, Interface, Business Problem-Solving", duration: "3 hrs" },
        //   { id: "t2", title: "Connecting & Shaping Data: Power Query Cleaning, Transformation, Append/Merge", duration: "4.5 hrs" },
        //   { id: "t3", title: "Data Modeling: Normalization, Relationships, Filter Flow", duration: "4 hrs" },
        //   { id: "t4", title: "DAX Analysis: Calculated Columns/Measures, Functions, Time Intelligence", duration: "6 hrs" },
        //   { id: "t5", title: "Visualization: Interactive Reports, Charts, Slicers, Drillthroughs", duration: "5 hrs" },
        //   { id: "t6", title: "AI & Custom Visuals: Decomposition Trees, Q&A, Key Influencers", duration: "2 hrs" },
        //   { id: "t7", title: "Deployment & Security: Power BI Service, Refresh Schedules, RLS", duration: "2.5 hrs" },
        //   { id: "t8", title: "SQL Integration: Database Connections, Custom Queries", duration: "1 hr" }
        // ]
        topics: [
          { id: "t1", title: "Probability Distributions", duration: "" },
          { id: "t2", title: "EDA", duration: "" },
          { id: "t3", title: "Statistical Analysis Using Python", duration: "" },
          { id: "t4", title: "Feature Engineering Techniques", duration: "" },
          { id: "t5", title: "Data Preprocessing", duration: "" },
          { id: "t6", title: "Advanced Statistical Methods", duration: "" }
        ]

      }
      ,

      {
        id: "m5",
        title: "R",
        duration: "40 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to R: R Console, RStudio Interface", duration: "1.5 hrs" },
        //   { id: "t2", title: "R Data Structures: Vectors and Matrices", duration: "2 hrs" },
        //   { id: "t3", title: "Programming Basics: Conditions, Loops, Functions", duration: "2.5 hrs" },
        //   { id: "t4", title: "DataFrames: Creation and Manipulation", duration: "2 hrs" },
        //   { id: "t5", title: "Advanced Programming: dplyr and Essential Packages", duration: "2.5 hrs" },
        //   { id: "t6", title: "Statistics: Probability Distributions, Hypothesis Testing", duration: "2 hrs" },
        //   { id: "t7", title: "Data Visualization: ggplot2 Fundamentals", duration: "1.5 hrs" },
        //   { id: "t8", title: "Linear Regression: Academic Performance Prediction Project", duration: "2 hrs" },
        //   { id: "t9", title: "Logistic Regression: Telecom Customer Churn Project", duration: "2 hrs" },
        //   { id: "t10", title: "Decision Trees: Loan Approval Prediction Project", duration: "2 hrs" },
        //   { id: "t11", title: "Time Series & Clustering: Sales Forecasting and Customer Segmentation Projects", duration: "2 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Basics to Advanced", duration: "" },
          { id: "t2", title: "Data Manipulation with dplyr", duration: "" },
          { id: "t3", title: "Data Visualization with ggplot2", duration: "" },
          { id: "t4", title: "Statistical Analysis", duration: "" },
          { id: "t5", title: "Predictive Modeling in R", duration: "" },
          { id: "t6", title: "Machine Learning Algorithms in R", duration: "" },
          { id: "t7", title: "AI in R: Generative AI Assistants for R Code Automation, ggplot Customization, Model Interpretation", duration: "" }
        ]

      }

      ,

      {
        id: "m6",
        title: "Python",
        duration: "40 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to Python: Installation, IDEs (VS Code, Jupyter)", duration: "2 hrs" },
        //   { id: "t2", title: "Core Data Types: Numbers, Strings, Booleans", duration: "3 hrs" },
        //   { id: "t3", title: "Advanced Data Structures: Lists, Tuples, Sets, Dictionaries", duration: "4 hrs" },
        //   { id: "t4", title: "Program Control: Conditionals, Loops, Comprehensions", duration: "3 hrs" },
        //   { id: "t5", title: "Functions & NumPy: Custom Functions, Vectorized Operations", duration: "3.5 hrs" },
        //   { id: "t6", title: "Pandas Basics: DataFrame Operations, Data Cleaning", duration: "4 hrs" },
        //   { id: "t7", title: "Pandas Advanced: GroupBy, Merging, Pivoting", duration: "3.5 hrs" },
        //   { id: "t8", title: "EDA: Univariate/Bivariate Analysis, Correlation", duration: "3 hrs" },
        //   { id: "t9", title: "Linear Regression: Ad Revenue Prediction Project", duration: "2.5 hrs" },
        //   { id: "t10", title: "Logistic Regression: Click-Through Rate Prediction Project", duration: "2.5 hrs" },
        //   { id: "t11", title: "Decision Trees: Used Car Pricing Project", duration: "2 hrs" },
        //   { id: "t12", title: "Time Series: Retail Sales Forecasting Project", duration: "2 hrs" },
        //   { id: "t13", title: "Deployment: API Integration, GitHub, Model Serving", duration: "2 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Basics to Advanced", duration: "" },
          { id: "t2", title: "Data Manipulation (NumPy, Pandas)", duration: "" },
          { id: "t3", title: "Visualization (Matplotlib, Seaborn)", duration: "" },
          { id: "t4", title: "ML Fundamentals", duration: "" },
          { id: "t5", title: "Predictive Modeling", duration: "" },
          { id: "t6", title: "Evaluation and Feature Engineering", duration: "" },
          { id: "t7", title: "AI in Python: Prompt-based model interpretation, automated EDA with AI tools, and model documentation using Copilot", duration: "" }
        ]

      }
      ,
      {
        id: "m7",
        title: "ML, DL & AI",
        duration: "28 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to Machine Learning: Concepts, Workflow, and Applications", duration: "2 hrs" },
        //   { id: "t2", title: "Recap: Linear/Logistic Regression, Decision Trees (Project: Car Price Prediction)", duration: "3 hrs" },
        //   { id: "t3", title: "Ensemble Learning: Random Forest (Project: Loan Risk Prediction)", duration: "3 hrs" },
        //   { id: "t4", title: "Boosting: Gradient Boost, AdaBoost, XGBoost (Projects: House Prices & Disease Diagnosis)", duration: "4 hrs" },
        //   { id: "t5", title: "Support Vector Machines (Project: YouTube Video Analysis)", duration: "2 hrs" },
        //   { id: "t6", title: "Naive Bayes (Project: Customer Churn Prediction)", duration: "2 hrs" },
        //   { id: "t7", title: "K-Nearest Neighbors (Project: Feedback Categorization)", duration: "2 hrs" },
        //   { id: "t8", title: "Dimensionality Reduction & Clustering: PCA, K-Means, Hierarchical, DBSCAN (Project: Retail Profiling)", duration: "3 hrs" },
        //   { id: "t9", title: "Text Preprocessing: Regex, Tokenization, Cleaning", duration: "2 hrs" },
        //   { id: "t10", title: "Text Mining: Word Clouds, Sentiment Analysis (Project: Indigo Tweets)", duration: "2 hrs" },
        //   { id: "t11", title: "NLP Classification (Project: IT Ticket Classification)", duration: "2 hrs" },
        //   { id: "t12", title: "Gen AI: Custom Text Classification with Transformers", duration: "2 hrs" },
        //   { id: "t13", title: "Neural Networks (Projects: Customer Lifetime Value & Credit Risk)", duration: "2 hrs" },
        //   { id: "t14", title: "Advanced Networks: RNN/LSTM (Stock Prediction), CNN (Face Classification)", duration: "3 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Predictive Modeling", duration: "" },
          { id: "t2", title: "Clustering", duration: "" },
          { id: "t3", title: "Decision Trees", duration: "" },
          { id: "t4", title: "Ensemble Techniques", duration: "" },
          { id: "t5", title: "Optimization", duration: "" },
          { id: "t6", title: "NLP", duration: "" },
          { id: "t7", title: "Deep Learning - from models to tuning and deployment", duration: "" },
          { id: "t8", title: "AI in ML: Image, Text, and Time-Series projects using Flask/Streamlit integration", duration: "" }
        ]

      }


      // ,

      // {
      //   id: "m8",
      //   title: "Statistics",
      //   duration: "8 hrs",
      //   topics: [
      //     { id: "t1", title: "Types of Data: Nominal, Ordinal, Interval, Ratio", duration: "0.75 hrs" },
      //     { id: "t2", title: "Correlation: Pearson, Spearman, Visualization", duration: "1 hr" },
      //     { id: "t3", title: "Measures of Central Tendency: Mean, Median, Mode", duration: "0.75 hrs" },
      //     { id: "t4", title: "Measures of Dispersion: Range, Variance, Std Dev, IQR", duration: "1 hr" },
      //     { id: "t5", title: "Probability: Basics, Rules, Bayes' Theorem", duration: "1 hr" },
      //     { id: "t6", title: "Probability Distributions: Normal, Binomial, Poisson", duration: "1.25 hrs" },
      //     { id: "t7", title: "Sampling and Estimation: CLT, Confidence Intervals", duration: "1 hr" },
      //     { id: "t8", title: "Hypothesis Testing: p-values, t-tests, Chi-square", duration: "1.25 hrs" },
      //     { id: "t9", title: "Data Modeling: Linear Regression Basics", duration: "1 hr" }
      //   ]
      // }

      // ,
      // {
      //   "id": "m9",
      //   "title": "Excel VBA Automation",
      //   "duration": "26 hrs",
      //   "topics": [
      //     { "id": "t1", "title": "Making Macro Do Automated Tasks for You", "duration": "6.5 hrs" },
      //     { "id": "t2", "title": "Programming Concepts (Variables, Loops, Conditions)", "duration": "8.25 hrs" },
      //     { "id": "t3", "title": "Analysis Using VBA (Data Cleaning, PivotTables)", "duration": "6.75 hrs" },
      //     { "id": "t4", "title": "Creating Dashboards (Forms, Dynamic Charts)", "duration": "4.5 hrs" }
      //   ]
      // }


    ],

    projects: [
      {
        id: "p1",
        title: "Steps to Make a Career in AI & Data",
        description: "Explore pathways to start and grow a career in AI and Data. Learn about essential skills, tools, career opportunities, and how AI is impacting various industries through this expert Q&A session.",
        image: "https://img.youtube.com/vi/OoCffZ4VaJE/0.jpg",
        skills: ["AI Career Path", "AI Tools", "AI Research", "AI & Web Development", "Chatbots"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "OoCffZ4VaJE"
      },
      {
        id: "p2",
        title: "Using AI Visuals in Power BI Dashboards",
        description: "Learn to create AI-powered visuals in Power BI, including Key Influencer, Decomposition Tree, Q&A, and Smart Narrative. Explore current AI trends and integrate ChatGPT for enhanced insights",
        image: "https://img.youtube.com/vi/ftTTrchGVbA/0.jpg",
        skills: ["Key Influencer Visual", "Decomposition Tree", "Smart Narrative", "AI Trends"],
        difficulty: "Intermediate to Advanced",
        isPractice: true,
        videoId: "ftTTrchGVbA"
      },
      {
        id: "p3",
        title: "Python Prediction Model for Real Estate",
        description: "Build a real estate price prediction model using Python and machine learning. Learn data preprocessing, regression techniques, and model building with practical insights from a real-world case study.",
        image: "https://img.youtube.com/vi/TipOU1HPrxA/0.jpg",
        skills: ["Regression Models", "Data Preprocessing", "Linear Regression", "Random Forest", "Neural Networks"],
        difficulty: "Intermediate",
        isPractice: true,
        videoId: "TipOU1HPrxA"
      },
      {
        id: "p4",
        title: "OYO Business Analysis with SQL",
        description: "Learn how to perform business analysis using SQL with a real-world case study on OYO’s room sales. Cover data cleaning, SQL queries, business KPIs, and practical data-driven decision-making.",
        image: "https://img.youtube.com/vi/ee7TajNEUrI/0.jpg",
        skills: ["GROUP BY", "ARIMA Model", "Window Functions ", "CTE", "Data Cleaning"],
        difficulty: "Beginner to Intermediate",
        videoId: "ee7TajNEUrI"
      },
      {
        id: "p5",
        title: "Predicting Computer Prices with Python",
        description: "Build a predictive model for computer prices using Python. Learn data cleaning, regression modeling, and key Python libraries through this industry case study by an IvyPro student.",
        image: "https://img.youtube.com/vi/Wt8jyPvdGRo/0.jpg",
        skills: ["Feature Engineering,", "Linear Regression", "Random Forest", "Scikit-learn", "Regression Metrics"],
        difficulty: "Beginner to Intermediate",
        videoId: "Wt8jyPvdGRo"
      },
      {
        id: "p6",
        title: "ANOVA Using R - Bakery Case Study",
        description: "Analyze how display factors affect product demand using Two-way ANOVA and Tukey’s Test in R. Learn statistical hypothesis testing through this practical bakery case study.",
        image: "https://img.youtube.com/vi/UhO4y3a9yxQ/0.jpg",
        skills: ["Data Loading", "Data Manipulation", "Two-way ANOVA", "Hypothesis Testing", "Statistical Modeling"],
        difficulty: "Intermediate",
        videoId: "UhO4y3a9yxQ"
      }
    ],










  },


  {
    id: '17',
    title: "Data Science with Machine Learning & AI Course in Mumbai",
    description: "Mumbai is India’s financial capital and a major hub for BFSI, media, e-commerce, consulting, and technology-driven enterprises. The Data Science with Machine Learning & AI Course in Mumbai by Ivy Professional School is designed to help learners build industry-ready data science skills aligned with the needs of Mumbai’s fast-paced, data-driven business ecosystem. This comprehensive data science program integrates statistics, Python programming, machine learning, and AI with hands-on projects and real-world case studies. Whether you are a graduate, working professional, or domain expert looking to transition into analytics, this Mumbai-focused data science course prepares you for high-growth roles across industries",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Deep Learning",
    students: 1243,
    metaData: {
      title: "Data Science Course in Mumbai | Ivy Professional School",
      description: "Join Ivy Professional School’s Data Science Course in Mumbai with Machine Learning & AI. Industry projects, expert mentors, and career-focused learning.",
      bio: "Looking to build a high-growth career in analytics, Machine Learning, and Artificial Intelligence? The Data Science Course in Kolkata by Ivy Professional School is designed to help students and working professionals master industry-relevant data science skills with hands-on projects, expert faculty, and career-focused training.\n\n Kolkata is fast emerging as a technology and analytics hub, and our Data Science program equips you with practical knowledge, real-world exposure, and placement assistance to compete in top data-driven roles across India."

    },
    duration: "14 weeks",
    rating: 4.8,
    reviewCount: 298,
    isFeatured: true,
    slug: "data-science-course-mumbai",
    longDescription: "Mumbai’s competitive corporate environment demands data professionals who can deliver insights that drive strategic and financial decisions. Ivy Professional School emphasizes practical learning and business-oriented analytics.\n\n Faculty with real-world industry and analytics experience. \n\n Career guidance, resume building, and interview preparation support. \n\n Curriculum aligned with finance, consulting, and enterprise analytics use cases. \n\n Strong focus on hands-on projects and applied learning. \n\n Flexible schedules suitable for working professionals in Mumbai. \n\n Career guidance, resume building, and interview preparation support"
    , instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
        , isDirector: true
      }
    ],
    outcomes: [
      "Strong foundation in statistics and probability for data analysis",
      "Python programming for data manipulation and visualization",
      "Data cleaning, preprocessing, and feature engineering techniques",
      "Exploratory Data Analysis (EDA) for business and financial insights",
      "Core machine learning algorithms and their practical applications",
      "Model evaluation, tuning, and optimization methods",
      "Introduction to Artificial Intelligence fundamentals",
      "Applying data science solutions to real-world corporate and financial problems"
   
    ],



    curriculum: [
      {
        id: "m1",
        title: "Advanced Excel",
        duration: "32 hrs",
        topics: [
          { id: "t1", title: "Basic to Advanced Functions", duration: "" },
          { id: "t2", title: "Data Analysis", duration: "" },
          { id: "t3", title: "Reporting using Pivot Tables", duration: "" },
          { id: "t4", title: "Data Visualization", duration: "" },
          { id: "t5", title: "Data Cleaning", duration: "" },
          { id: "t6", title: "Dashboarding", duration: "" },
          { id: "t7", title: "AI and ChatGPT Integration", duration: "" }
        ]

        // topics: [
        //   { id: "t1", title: "Data Hygiene – Clean, structure, and prepare your dataset", duration: "1.25 hrs" },
        //   { id: "t2", title: "Formatting – Number and table formatting for clarity", duration: "1.25 hrs" },
        //   { id: "t3", title: "Filtering & Sorting – Auto filters, advanced filters, custom sorting", duration: "1.5 hrs" },
        //   { id: "t4", title: "Cell Referencing – Relative, absolute references & formula handling", duration: "1.5 hrs" },
        //   { id: "t5", title: "Basic Functions – SUM, AVERAGE, COUNT, PRODUCT, etc.", duration: "1.75 hrs" },
        //   { id: "t6", title: "Date Functions – TODAY, DATEDIF, EOMONTH, WEEKDAY, etc.", duration: "1.5 hrs" },
        //   { id: "t7", title: "Conditional Functions – SUMIFS, COUNTIFS, AVERAGEIFS", duration: "2 hrs" },
        //   { id: "t8", title: "Database Functions – DSUM, DAVERAGE using criteria tables", duration: "1.25 hrs" },
        //   { id: "t9", title: "Dynamic Arrays (Google Sheets) – FILTER, SORT, UNIQUE, TEXTJOIN", duration: "1.5 hrs" },
        //   { id: "t10", title: "Pivot Tables – Layout, grouping, calculated fields, summarizing", duration: "2.5 hrs" },
        //   { id: "t11", title: "Charts – Chart creation, types, usage, sparklines", duration: "2 hrs" },
        //   { id: "t12", title: "Dashboards – Planning, business insights, slicers, summaries", duration: "2.5 hrs" },
        //   { id: "t13", title: "Logical Functions – IF, AND, OR, IFERROR, SWITCH etc", duration: "1.75 hrs" },
        //   { id: "t14", title: "Lookup Functions – VLOOKUP, XLOOKUP, MATCH, INDIRECT etc", duration: "2.25 hrs" },
        //   { id: "t15", title: "Text Functions – LEFT, MID, FIND, SUBSTITUTE, CONCAT etc", duration: "1.5 hrs" },
        //   { id: "t16", title: "Conditional Formatting – Color scales, data bars, formulas", duration: "1.25 hrs" },
        //   { id: "t17", title: "Data Validation – Lists, error alerts, dependent dropdowns", duration: "1 hr" },
        //   { id: "t18", title: "Goal Seek & Solver – Solve optimization and reverse calculations", duration: "1.25 hrs" },
        //   { id: "t19", title: "Gen AI - How to Use Gen AI in Microsoft Excel, Use Lab.Generative", duration: "0.75 hrs" },
        //   { id: "t20", title: "ChatGPT - How to use Prompt engineering for Data Analysis", duration: "0.75 hrs" }
        // ]
      },


      {
        id: "m2",
        title: "MySQL",
        duration: "32 hrs",
        topics: [
          { id: "t1", title: "Database Management", duration: "" },
          { id: "t2", title: "SQL Queries", duration: "" },
          { id: "t3", title: "Data Retrieval", duration: "" },
          { id: "t4", title: "Database Design", duration: "" },
          { id: "t5", title: "Performance Optimization", duration: "" },
          { id: "t6", title: "AI Tools to Auto Generate and Optimize Queries", duration: "" }
        ]

        // topics: [
        //   { id: "t1", title: "SQL Basics: Introduction to Database Management System (DBMS), Introduction to Google BigQuery and MySQL, CRUD Operations", duration: "3 hrs" },
        //   { id: "t2", title: "Data Manipulation and Transformation: Logical, Numerical, and Mathematical Operators, Conditional Statements", duration: "2.5 hrs" },
        //   { id: "t3", title: "Data Cleaning: Type Casting, Date/Time Formatting, Text Formatting", duration: "2 hrs" },
        //   { id: "t4", title: "Pattern Matching: LIKE Operator, REGEXP Functions", duration: "1.5 hrs" },
        //   { id: "t5", title: "Joins and Relational Databases: Keys, Join Types, Indexing, Normalization", duration: "4 hrs" },
        //   { id: "t6", title: "Aggregation and Grouping: Aggregate Functions, GROUP BY, CTEs, Variables", duration: "3.5 hrs" },
        //   { id: "t7", title: "Window Functions: RANK, DENSE_RANK, ROW_NUMBER, LEAD/LAG", duration: "2.5 hrs" },
        //   { id: "t8", title: "Data Reusability: Views, Stored Procedures, UDFs", duration: "2 hrs" },
        //   { id: "t9", title: "Subqueries: Simple, EXISTS/NOT EXISTS, Correlated", duration: "1.5 hrs" },
        //   { id: "t10", title: "Cloud Services: BigQuery Querying, Sharing Results, Permissions, Scheduling", duration: "1.5 hrs" },
        //   { id: "t11", title: "Online SQL Platforms: MySQL Workbench, Online IDEs, Cloud Storage Integration", duration: "0.5 hrs" }
        // ]
      },

      {
        id: "m3",
        title: " Tableau",
        duration: "28 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to Tableau: Approaching Business Problems, Interface Overview", duration: "2 hrs" },
        //   { id: "t2", title: "Connecting and Shaping Data: Data Sources, Pivoting, Calculated Fields, Dimensions/Measures", duration: "3 hrs" },
        //   { id: "t3", title: "Introduction to Basic Charts: Bars, Lines, Scatter Plots, Maps", duration: "2 hrs" },
        //   { id: "t4", title: "Working With Marks Card: Color, Size, Label, Detail, Tooltip", duration: "1.5 hrs" },
        //   { id: "t5", title: "Different Filters in Tableau: Quick Filters, Context Filters, Data Source Filters", duration: "2 hrs" },
        //   { id: "t6", title: "Calculated Fields: Summarization, String Manipulation, Date, Logical Functions", duration: "2.5 hrs" },
        //   { id: "t7", title: "Combining Tables: Joins, Unions, Blending", duration: "2 hrs" },
        //   { id: "t8", title: "Table Calculations: Primary and Secondary Calculations", duration: "1.5 hrs" },
        //   { id: "t9", title: "Parameters: Dimension, Measure, Sort, TopN, Date", duration: "1.5 hrs" },
        //   { id: "t10", title: "Groups & Sets: Creating and Applying", duration: "1 hr" },
        //   { id: "t11", title: "Analytics: Forecasting, Trend Lines, Clustering", duration: "2 hrs" },
        //   { id: "t12", title: "Dashboard Building & Actions: Filters, Highlights, Navigation", duration: "2.5 hrs" },
        //   { id: "t13", title: "Projects: RFM Analysis, Customer Retention Dashboard", duration: "1.5 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Introduction to Data Visualization", duration: "" },
          { id: "t2", title: "Creating Interactive Dashboards", duration: "" },
          { id: "t3", title: "Data Connection and Blending", duration: "" },
          { id: "t4", title: "Calculations and Expressions", duration: "" },
          { id: "t5", title: "Chart Types", duration: "" },
          { id: "t6", title: "Parameters", duration: "" },
          { id: "t7", title: "Dashboard Actions", duration: "" },
          { id: "t8", title: "Story and Tableau Prep", duration: "" },
          { id: "t9", title: "AI in Tableau: Explain Data, Ask Data, AI-driven Insights with Tableau GPT", duration: "" }
        ]

      }
      ,

      {
        id: "m4",
        title: "Business Statistics",
        duration: "8 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction: Data Visualization, Interface, Business Problem-Solving", duration: "3 hrs" },
        //   { id: "t2", title: "Connecting & Shaping Data: Power Query Cleaning, Transformation, Append/Merge", duration: "4.5 hrs" },
        //   { id: "t3", title: "Data Modeling: Normalization, Relationships, Filter Flow", duration: "4 hrs" },
        //   { id: "t4", title: "DAX Analysis: Calculated Columns/Measures, Functions, Time Intelligence", duration: "6 hrs" },
        //   { id: "t5", title: "Visualization: Interactive Reports, Charts, Slicers, Drillthroughs", duration: "5 hrs" },
        //   { id: "t6", title: "AI & Custom Visuals: Decomposition Trees, Q&A, Key Influencers", duration: "2 hrs" },
        //   { id: "t7", title: "Deployment & Security: Power BI Service, Refresh Schedules, RLS", duration: "2.5 hrs" },
        //   { id: "t8", title: "SQL Integration: Database Connections, Custom Queries", duration: "1 hr" }
        // ]
        topics: [
          { id: "t1", title: "Probability Distributions", duration: "" },
          { id: "t2", title: "EDA", duration: "" },
          { id: "t3", title: "Statistical Analysis Using Python", duration: "" },
          { id: "t4", title: "Feature Engineering Techniques", duration: "" },
          { id: "t5", title: "Data Preprocessing", duration: "" },
          { id: "t6", title: "Advanced Statistical Methods", duration: "" }
        ]

      }
      ,

      {
        id: "m5",
        title: "R",
        duration: "40 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to R: R Console, RStudio Interface", duration: "1.5 hrs" },
        //   { id: "t2", title: "R Data Structures: Vectors and Matrices", duration: "2 hrs" },
        //   { id: "t3", title: "Programming Basics: Conditions, Loops, Functions", duration: "2.5 hrs" },
        //   { id: "t4", title: "DataFrames: Creation and Manipulation", duration: "2 hrs" },
        //   { id: "t5", title: "Advanced Programming: dplyr and Essential Packages", duration: "2.5 hrs" },
        //   { id: "t6", title: "Statistics: Probability Distributions, Hypothesis Testing", duration: "2 hrs" },
        //   { id: "t7", title: "Data Visualization: ggplot2 Fundamentals", duration: "1.5 hrs" },
        //   { id: "t8", title: "Linear Regression: Academic Performance Prediction Project", duration: "2 hrs" },
        //   { id: "t9", title: "Logistic Regression: Telecom Customer Churn Project", duration: "2 hrs" },
        //   { id: "t10", title: "Decision Trees: Loan Approval Prediction Project", duration: "2 hrs" },
        //   { id: "t11", title: "Time Series & Clustering: Sales Forecasting and Customer Segmentation Projects", duration: "2 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Basics to Advanced", duration: "" },
          { id: "t2", title: "Data Manipulation with dplyr", duration: "" },
          { id: "t3", title: "Data Visualization with ggplot2", duration: "" },
          { id: "t4", title: "Statistical Analysis", duration: "" },
          { id: "t5", title: "Predictive Modeling in R", duration: "" },
          { id: "t6", title: "Machine Learning Algorithms in R", duration: "" },
          { id: "t7", title: "AI in R: Generative AI Assistants for R Code Automation, ggplot Customization, Model Interpretation", duration: "" }
        ]

      }

      ,

      {
        id: "m6",
        title: "Python",
        duration: "40 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to Python: Installation, IDEs (VS Code, Jupyter)", duration: "2 hrs" },
        //   { id: "t2", title: "Core Data Types: Numbers, Strings, Booleans", duration: "3 hrs" },
        //   { id: "t3", title: "Advanced Data Structures: Lists, Tuples, Sets, Dictionaries", duration: "4 hrs" },
        //   { id: "t4", title: "Program Control: Conditionals, Loops, Comprehensions", duration: "3 hrs" },
        //   { id: "t5", title: "Functions & NumPy: Custom Functions, Vectorized Operations", duration: "3.5 hrs" },
        //   { id: "t6", title: "Pandas Basics: DataFrame Operations, Data Cleaning", duration: "4 hrs" },
        //   { id: "t7", title: "Pandas Advanced: GroupBy, Merging, Pivoting", duration: "3.5 hrs" },
        //   { id: "t8", title: "EDA: Univariate/Bivariate Analysis, Correlation", duration: "3 hrs" },
        //   { id: "t9", title: "Linear Regression: Ad Revenue Prediction Project", duration: "2.5 hrs" },
        //   { id: "t10", title: "Logistic Regression: Click-Through Rate Prediction Project", duration: "2.5 hrs" },
        //   { id: "t11", title: "Decision Trees: Used Car Pricing Project", duration: "2 hrs" },
        //   { id: "t12", title: "Time Series: Retail Sales Forecasting Project", duration: "2 hrs" },
        //   { id: "t13", title: "Deployment: API Integration, GitHub, Model Serving", duration: "2 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Basics to Advanced", duration: "" },
          { id: "t2", title: "Data Manipulation (NumPy, Pandas)", duration: "" },
          { id: "t3", title: "Visualization (Matplotlib, Seaborn)", duration: "" },
          { id: "t4", title: "ML Fundamentals", duration: "" },
          { id: "t5", title: "Predictive Modeling", duration: "" },
          { id: "t6", title: "Evaluation and Feature Engineering", duration: "" },
          { id: "t7", title: "AI in Python: Prompt-based model interpretation, automated EDA with AI tools, and model documentation using Copilot", duration: "" }
        ]

      }
      ,
      {
        id: "m7",
        title: "ML, DL & AI",
        duration: "28 hrs",
        // topics: [
        //   { id: "t1", title: "Introduction to Machine Learning: Concepts, Workflow, and Applications", duration: "2 hrs" },
        //   { id: "t2", title: "Recap: Linear/Logistic Regression, Decision Trees (Project: Car Price Prediction)", duration: "3 hrs" },
        //   { id: "t3", title: "Ensemble Learning: Random Forest (Project: Loan Risk Prediction)", duration: "3 hrs" },
        //   { id: "t4", title: "Boosting: Gradient Boost, AdaBoost, XGBoost (Projects: House Prices & Disease Diagnosis)", duration: "4 hrs" },
        //   { id: "t5", title: "Support Vector Machines (Project: YouTube Video Analysis)", duration: "2 hrs" },
        //   { id: "t6", title: "Naive Bayes (Project: Customer Churn Prediction)", duration: "2 hrs" },
        //   { id: "t7", title: "K-Nearest Neighbors (Project: Feedback Categorization)", duration: "2 hrs" },
        //   { id: "t8", title: "Dimensionality Reduction & Clustering: PCA, K-Means, Hierarchical, DBSCAN (Project: Retail Profiling)", duration: "3 hrs" },
        //   { id: "t9", title: "Text Preprocessing: Regex, Tokenization, Cleaning", duration: "2 hrs" },
        //   { id: "t10", title: "Text Mining: Word Clouds, Sentiment Analysis (Project: Indigo Tweets)", duration: "2 hrs" },
        //   { id: "t11", title: "NLP Classification (Project: IT Ticket Classification)", duration: "2 hrs" },
        //   { id: "t12", title: "Gen AI: Custom Text Classification with Transformers", duration: "2 hrs" },
        //   { id: "t13", title: "Neural Networks (Projects: Customer Lifetime Value & Credit Risk)", duration: "2 hrs" },
        //   { id: "t14", title: "Advanced Networks: RNN/LSTM (Stock Prediction), CNN (Face Classification)", duration: "3 hrs" }
        // ]
        topics: [
          { id: "t1", title: "Predictive Modeling", duration: "" },
          { id: "t2", title: "Clustering", duration: "" },
          { id: "t3", title: "Decision Trees", duration: "" },
          { id: "t4", title: "Ensemble Techniques", duration: "" },
          { id: "t5", title: "Optimization", duration: "" },
          { id: "t6", title: "NLP", duration: "" },
          { id: "t7", title: "Deep Learning - from models to tuning and deployment", duration: "" },
          { id: "t8", title: "AI in ML: Image, Text, and Time-Series projects using Flask/Streamlit integration", duration: "" }
        ]

      }


      // ,

      // {
      //   id: "m8",
      //   title: "Statistics",
      //   duration: "8 hrs",
      //   topics: [
      //     { id: "t1", title: "Types of Data: Nominal, Ordinal, Interval, Ratio", duration: "0.75 hrs" },
      //     { id: "t2", title: "Correlation: Pearson, Spearman, Visualization", duration: "1 hr" },
      //     { id: "t3", title: "Measures of Central Tendency: Mean, Median, Mode", duration: "0.75 hrs" },
      //     { id: "t4", title: "Measures of Dispersion: Range, Variance, Std Dev, IQR", duration: "1 hr" },
      //     { id: "t5", title: "Probability: Basics, Rules, Bayes' Theorem", duration: "1 hr" },
      //     { id: "t6", title: "Probability Distributions: Normal, Binomial, Poisson", duration: "1.25 hrs" },
      //     { id: "t7", title: "Sampling and Estimation: CLT, Confidence Intervals", duration: "1 hr" },
      //     { id: "t8", title: "Hypothesis Testing: p-values, t-tests, Chi-square", duration: "1.25 hrs" },
      //     { id: "t9", title: "Data Modeling: Linear Regression Basics", duration: "1 hr" }
      //   ]
      // }

      // ,
      // {
      //   "id": "m9",
      //   "title": "Excel VBA Automation",
      //   "duration": "26 hrs",
      //   "topics": [
      //     { "id": "t1", "title": "Making Macro Do Automated Tasks for You", "duration": "6.5 hrs" },
      //     { "id": "t2", "title": "Programming Concepts (Variables, Loops, Conditions)", "duration": "8.25 hrs" },
      //     { "id": "t3", "title": "Analysis Using VBA (Data Cleaning, PivotTables)", "duration": "6.75 hrs" },
      //     { "id": "t4", "title": "Creating Dashboards (Forms, Dynamic Charts)", "duration": "4.5 hrs" }
      //   ]
      // }


    ],

    projects: [
      {
        id: "p1",
        title: "Steps to Make a Career in AI & Data",
        description: "Explore pathways to start and grow a career in AI and Data. Learn about essential skills, tools, career opportunities, and how AI is impacting various industries through this expert Q&A session.",
        image: "https://img.youtube.com/vi/OoCffZ4VaJE/0.jpg",
        skills: ["AI Career Path", "AI Tools", "AI Research", "AI & Web Development", "Chatbots"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "OoCffZ4VaJE"
      },
      {
        id: "p2",
        title: "Using AI Visuals in Power BI Dashboards",
        description: "Learn to create AI-powered visuals in Power BI, including Key Influencer, Decomposition Tree, Q&A, and Smart Narrative. Explore current AI trends and integrate ChatGPT for enhanced insights",
        image: "https://img.youtube.com/vi/ftTTrchGVbA/0.jpg",
        skills: ["Key Influencer Visual", "Decomposition Tree", "Smart Narrative", "AI Trends"],
        difficulty: "Intermediate to Advanced",
        isPractice: true,
        videoId: "ftTTrchGVbA"
      },
      {
        id: "p3",
        title: "Python Prediction Model for Real Estate",
        description: "Build a real estate price prediction model using Python and machine learning. Learn data preprocessing, regression techniques, and model building with practical insights from a real-world case study.",
        image: "https://img.youtube.com/vi/TipOU1HPrxA/0.jpg",
        skills: ["Regression Models", "Data Preprocessing", "Linear Regression", "Random Forest", "Neural Networks"],
        difficulty: "Intermediate",
        isPractice: true,
        videoId: "TipOU1HPrxA"
      },
      {
        id: "p4",
        title: "OYO Business Analysis with SQL",
        description: "Learn how to perform business analysis using SQL with a real-world case study on OYO’s room sales. Cover data cleaning, SQL queries, business KPIs, and practical data-driven decision-making.",
        image: "https://img.youtube.com/vi/ee7TajNEUrI/0.jpg",
        skills: ["GROUP BY", "ARIMA Model", "Window Functions ", "CTE", "Data Cleaning"],
        difficulty: "Beginner to Intermediate",
        videoId: "ee7TajNEUrI"
      },
      {
        id: "p5",
        title: "Predicting Computer Prices with Python",
        description: "Build a predictive model for computer prices using Python. Learn data cleaning, regression modeling, and key Python libraries through this industry case study by an IvyPro student.",
        image: "https://img.youtube.com/vi/Wt8jyPvdGRo/0.jpg",
        skills: ["Feature Engineering,", "Linear Regression", "Random Forest", "Scikit-learn", "Regression Metrics"],
        difficulty: "Beginner to Intermediate",
        videoId: "Wt8jyPvdGRo"
      },
      {
        id: "p6",
        title: "ANOVA Using R - Bakery Case Study",
        description: "Analyze how display factors affect product demand using Two-way ANOVA and Tukey’s Test in R. Learn statistical hypothesis testing through this practical bakery case study.",
        image: "https://img.youtube.com/vi/UhO4y3a9yxQ/0.jpg",
        skills: ["Data Loading", "Data Manipulation", "Two-way ANOVA", "Hypothesis Testing", "Statistical Modeling"],
        difficulty: "Intermediate",
        videoId: "UhO4y3a9yxQ"
      }
    ],










  },


   {
    id: '18',
    title: "Data Analytics With Visualization in Kolkata",
    description: "The Data Analytics With Visualization in Kolkata by Ivy Professional School is designed to help students and professionals build strong analytical skills required to make data-driven business decisions. With Kolkata emerging as a growing hub for analytics, BFSI, consulting, and IT services, the demand for skilled data analysts is steadily increasing.This program focuses on practical data analysis skills using industry-standard tools and real business datasets, preparing learners for entry-level to mid-level data analytics roles.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Deep Learning",
    students: 1243,
    metaData: {
      title: "Data Analytics With Visualization in Kolkata | Ivy Professional School",
      description: "Join Ivy Professional School’s Data Analytics With Visualization in Kolkata with real-world projects, Python, SQL, Power BI & career support. Enroll now!",
      bio: "Learn to analyze and visualize data, work on industry projects, earn a prestigious certificate, and become a job-ready data analyst within 12-14 months."

    },
    duration: "14 weeks",
    rating: 4.8,
    reviewCount: 298,
    isFeatured: true,
    slug: "data-analytics-course-kolkata",
    longDescription: "The Data Analytics With Visualization in Kolkata provides end-to-end training on collecting, cleaning, analyzing, and visualizing data to generate meaningful business insights. The course is structured to build strong foundations in data analytics concepts while emphasizing hands-on implementation. \n\n Learners are trained to work with structured datasets, perform exploratory data analysis, create dashboards, and communicate insights effectively to stakeholders. The program aligns with real-world analytics use cases across industries such as banking, retail, healthcare, e-commerce, and consulting. \n\n Delivered through instructor-led sessions, hands-on labs, and case studies, this course is suitable for freshers, graduates, and working professionals in Kolkata."
    , instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
        , isDirector: true
      }
    ],
    outcomes: [
      "Understand the data analytics lifecycle from data collection to insight generation",
      "Work with Excel, SQL, and Python for data analysis",
      "Perform data cleaning, preprocessing, and exploratory data analysis (EDA)",
      "Apply statistical concepts for business analysis",
      "Create interactive dashboards using Power BI / Tableau",
      "Prepare for Data Analyst roles in Kolkata’s job market"
    ],
    curriculum: [
      {
        id: "m1",
        title: "Advance Excel",
        duration: "28 hrs",
        topics: [
          { id: "t1", title: "Data Hygiene – Clean, structure, and prepare your dataset", duration: "1.25 hrs" },
          { id: "t2", title: "Formatting – Number and table formatting for clarity", duration: "1.25 hrs" },
          { id: "t3", title: "Filtering & Sorting – Auto filters, advanced filters, custom sorting", duration: "1.5 hrs" },
          { id: "t4", title: "Cell Referencing – Relative, absolute references & formula handling", duration: "1.5 hrs" },
          { id: "t5", title: "Basic Functions – SUM, AVERAGE, COUNT, PRODUCT, etc.", duration: "1.75 hrs" },
          { id: "t6", title: "Date Functions – TODAY, DATEDIF, EOMONTH, WEEKDAY, etc.", duration: "1.5 hrs" },
          { id: "t7", title: "Conditional Functions – SUMIFS, COUNTIFS, AVERAGEIFS", duration: "2 hrs" },
          { id: "t8", title: "Database Functions – DSUM, DAVERAGE using criteria tables", duration: "1.25 hrs" },
          { id: "t9", title: "Dynamic Arrays (Google Sheets) – FILTER, SORT, UNIQUE, TEXTJOIN", duration: "1.5 hrs" },
          { id: "t10", title: "Pivot Tables – Layout, grouping, calculated fields, summarizing", duration: "2.5 hrs" },
          { id: "t11", title: "Charts – Chart creation, types, usage, sparklines", duration: "2 hrs" },
          { id: "t12", title: "Dashboards – Planning, business insights, slicers, summaries", duration: "2.5 hrs" },
          { id: "t13", title: "Logical Functions – IF, AND, OR, IFERROR, SWITCH etc", duration: "1.75 hrs" },
          { id: "t14", title: "Lookup Functions – VLOOKUP, XLOOKUP, MATCH, INDIRECT etc", duration: "2.25 hrs" },
          { id: "t15", title: "Text Functions – LEFT, MID, FIND, SUBSTITUTE, CONCAT etc", duration: "1.5 hrs" },
          { id: "t16", title: "Conditional Formatting – Color scales, data bars, formulas", duration: "1.25 hrs" },
          { id: "t17", title: "Data Validation – Lists, error alerts, dependent dropdowns", duration: "1 hr" },
          { id: "t18", title: "Goal Seek & Solver – Solve optimization and reverse calculations", duration: "1.25 hrs" },
          { id: "t19", title: "Gen AI - How to Use Gen AI in Microsoft Excel, Use Lab.Generative", duration: "0.75 hrs" },
          { id: "t20", title: "ChatGPT - How to use Prompt engineering for Data Analysis", duration: "0.75 hrs" }
        ]
      },

      {
        id: "m2",
        title: "SQL Queries & Relational Database Management",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "SQL Basics: Introduction to Database Management System (DBMS), Introduction to Google BigQuery and MySQL, CRUD Operations", duration: "3 hrs" },
          { id: "t2", title: "Data Manipulation and Transformation: Logical, Numerical, and Mathematical Operators, Conditional Statements", duration: "2.5 hrs" },
          { id: "t3", title: "Data Cleaning: Type Casting, Date/Time Formatting, Text Formatting", duration: "2 hrs" },
          { id: "t4", title: "Pattern Matching: LIKE Operator, REGEXP Functions", duration: "1.5 hrs" },
          { id: "t5", title: "Joins and Relational Databases: Keys, Join Types, Indexing, Normalization", duration: "4 hrs" },
          { id: "t6", title: "Aggregation and Grouping: Aggregate Functions, GROUP BY, CTEs, Variables", duration: "3.5 hrs" },
          { id: "t7", title: "Window Functions: RANK, DENSE_RANK, ROW_NUMBER, LEAD/LAG", duration: "2.5 hrs" },
          { id: "t8", title: "Data Reusability: Views, Stored Procedures, UDFs", duration: "2 hrs" },
          { id: "t9", title: "Subqueries: Simple, EXISTS/NOT EXISTS, Correlated", duration: "1.5 hrs" },
          { id: "t10", title: "Cloud Services: BigQuery Querying, Sharing Results, Permissions, Scheduling", duration: "1.5 hrs" },
          { id: "t11", title: "Online SQL Platforms: MySQL Workbench, Online IDEs, Cloud Storage Integration", duration: "0.5 hrs" }
        ]
      },

      {
        id: "m3",
        title: "Data Visualization Using Tableau (Addon module with extra charges)",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "Introduction to Tableau: Approaching Business Problems, Interface Overview", duration: "2 hrs" },
          { id: "t2", title: "Connecting and Shaping Data: Data Sources, Pivoting, Calculated Fields, Dimensions/Measures", duration: "3 hrs" },
          { id: "t3", title: "Introduction to Basic Charts: Bars, Lines, Scatter Plots, Maps", duration: "2 hrs" },
          { id: "t4", title: "Working With Marks Card: Color, Size, Label, Detail, Tooltip", duration: "1.5 hrs" },
          { id: "t5", title: "Different Filters in Tableau: Quick Filters, Context Filters, Data Source Filters", duration: "2 hrs" },
          { id: "t6", title: "Calculated Fields: Summarization, String Manipulation, Date, Logical Functions", duration: "2.5 hrs" },
          { id: "t7", title: "Combining Tables: Joins, Unions, Blending", duration: "2 hrs" },
          { id: "t8", title: "Table Calculations: Primary and Secondary Calculations", duration: "1.5 hrs" },
          { id: "t9", title: "Parameters: Dimension, Measure, Sort, TopN, Date", duration: "1.5 hrs" },
          { id: "t10", title: "Groups & Sets: Creating and Applying", duration: "1 hr" },
          { id: "t11", title: "Analytics: Forecasting, Trend Lines, Clustering", duration: "2 hrs" },
          { id: "t12", title: "Dashboard Building & Actions: Filters, Highlights, Navigation", duration: "2.5 hrs" },
          { id: "t13", title: "Projects: RFM Analysis, Customer Retention Dashboard", duration: "1.5 hrs" }
        ]
      }
      ,

      {
        id: "m4",
        title: "Data Visualization Using Power BI",
        duration: "28 hrs",
        topics: [
          { id: "t1", title: "Introduction: Data Visualization, Interface, Business Problem-Solving", duration: "3 hrs" },
          { id: "t2", title: "Connecting & Shaping Data: Power Query Cleaning, Transformation, Append/Merge", duration: "4.5 hrs" },
          { id: "t3", title: "Data Modeling: Normalization, Relationships, Filter Flow", duration: "4 hrs" },
          { id: "t4", title: "DAX Analysis: Calculated Columns/Measures, Functions, Time Intelligence", duration: "6 hrs" },
          { id: "t5", title: "Visualization: Interactive Reports, Charts, Slicers, Drillthroughs", duration: "5 hrs" },
          { id: "t6", title: "AI & Custom Visuals: Decomposition Trees, Q&A, Key Influencers", duration: "2 hrs" },
          { id: "t7", title: "Deployment & Security: Power BI Service, Refresh Schedules, RLS", duration: "2.5 hrs" },
          { id: "t8", title: "SQL Integration: Database Connections, Custom Queries", duration: "1 hr" }
        ]
      }
      ,

      {
        id: "m5",
        title: "Python for Data Science",
        duration: "36 hrs",
        topics: [
          { id: "t1", title: "Introduction to Python: Installation, IDEs (VS Code, Jupyter)", duration: "2 hrs" },
          { id: "t2", title: "Core Data Types: Numbers, Strings, Booleans", duration: "3 hrs" },
          { id: "t3", title: "Advanced Data Structures: Lists, Tuples, Sets, Dictionaries", duration: "4 hrs" },
          { id: "t4", title: "Program Control: Conditionals, Loops, Comprehensions", duration: "3 hrs" },
          { id: "t5", title: "Functions & NumPy: Custom Functions, Vectorized Operations", duration: "3.5 hrs" },
          { id: "t6", title: "Pandas Basics: DataFrame Operations, Data Cleaning", duration: "4 hrs" },
          { id: "t7", title: "Pandas Advanced: GroupBy, Merging, Pivoting", duration: "3.5 hrs" },
          { id: "t8", title: "EDA: Univariate/Bivariate Analysis, Correlation", duration: "3 hrs" },
          { id: "t9", title: "Linear Regression: Ad Revenue Prediction Project", duration: "2.5 hrs" },
          { id: "t10", title: "Logistic Regression: Click-Through Rate Prediction Project", duration: "2.5 hrs" },
          { id: "t11", title: "Decision Trees: Used Car Pricing Project", duration: "2 hrs" },
          { id: "t12", title: "Time Series: Retail Sales Forecasting Project", duration: "2 hrs" },
          { id: "t13", title: "Deployment: API Integration, GitHub, Model Serving", duration: "2 hrs" }
        ]
      }
      ,
      {
        id: "m6",
        title: "4 Months PrepAI",
        duration: "120 days",
        topics: [
          { id: "t1", title: "Unlimited Mock Interviews (Speech-to-Speech)", duration: "6.5 hrs" },
          { id: "t2", title: "ATS-Friendly Resume Builder", duration: "8.25 hrs" },
          { id: "t3", title: "Unlimited Doubt Clearing (AI Tutor)", duration: "6.75 hrs" },
          { id: "t4", title: "Personalized Learning Plans", duration: "4.5 hrs" },
          { id: "t5", title: "1:1 AI Career Coaching", duration: "4.5 hrs" }
        ]
      }
    ],

    projects: [
      {
        id: "p1",
        title: "How To Choose Ideal Residence Using SQL",
        description: "Master SQL for real estate data analysis. Learn how to use SELECT statements, create databases, and import/export data, while performing calculations and reporting in SQL.",
        image: "https://img.youtube.com/vi/hzxawPxuks8/0.jpg",
        skills: ["SQL ", "SELECT", "CREATE DATABASE", "MySQL Connections", "MySQL Connections", "Data Export", "Excel to MySQL", "CSV Conversion", "SQL LIMIT", "SQL COUNT", "SQL COUNT", "Data Summarization", "Reporting in SQL"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "hzxawPxuks8"
      },
      {
        id: "p2",
        title: "Power BI Live Case Study | Web Analytics",
        description: "Learn to create a Power BI dashboard from scratch. Explore website click analysis, data visualization techniques, filters, fields, and Power Query transformations in Power BI.",
        image: "https://img.youtube.com/vi/-XUN_3Hama0/0.jpg",
        skills: ["Power BI", "Power Query", "Data Transformation", "Filters", "Fields in Power BI", "Power BI Cards", "Power BI Charts", "Bar Charts", "Slicers", "Data Visualization", "Power BI Dashboard", "Date Handling in Power BI"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "-XUN_3Hama0"
      },
      {
        id: "p3",
        title: "Tableau Live Case | WPL Dataset | Identify the Strategies used in WPL Auctions",
        description: "Analyze the Women's Premier League (WPL) auction strategies using Tableau. Learn to create interactive dashboards and visualize key data points for team performance insights.",
        image: "https://img.youtube.com/vi/THyEuZ0xHC8/0.jpg",
        skills: ["Tableau", "Tableau Dashboard", "Tableau Drag and Drop", "Tableau Sheets", "Data Source in Tableau", "Tableau Live and Extract", "Tableau Stories", "Tableau Filters", "Tableau Visualizations", "Tableau Functions", "Tableau Headers"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "THyEuZ0xHC8"
      },
      {
        id: "p4",
        title: "Analyze Sales of Smartphones on Amazon",
        description: "Analyze smartphone sales data using Excel. Learn to create dashboards, perform quarterly revenue analysis, and uncover insights using key Excel functions.",
        image: "https://img.youtube.com/vi/oWy7ZkS3axE/0.jpg",
        skills: ["Excel Dashboards", "PivotTables", "PivotCharts", " VLOOKUP", "SUMIF", "Data Validation", "Conditional Formatting", "Excel Formulas", " Data Analysis", "Revenue Analysis", "Excel Charts"],
        difficulty: "Beginner to Intermediate",
        videoId: "oWy7ZkS3axE"
      },
      {
        id: "p5",
        title: "AirBNB Business Case Study - Tableau Dashboarding",
        description: "Analyze AirBNB business data and create insightful visualizations using Tableau. Learn key techniques for dashboarding, filtering, and data presentation to drive business decisions.",
        image: "https://img.youtube.com/vi/4cx9_OSv4Fo/0.jpg",
        skills: ["Tableau", "Tableau Dashboarding", "Tableau Dashboarding", "Filters", "Tableau Calculations", "Interactive Dashboards", "Data Connections", "Data Blending", "Tableau Filters"],
        difficulty: "Beginner to Intermediate",
        videoId: "4cx9_OSv4Fo"
      },
      {
        id: "p6",
        title: "Analyzing Netflix Originals & IMDB Scores",
        description: "Analyze Netflix Originals data with SQL, utilizing Window Functions, CTEs, and various SQL queries to explore trends and uncover insights in the dataset.",
        image: "https://img.youtube.com/vi/Wt8jyPvdGRo/0.jpg",
        skills: ["SQL Queries", "Window Functions", "Common Table Expressions (CTEs)", "Date Functions", "JOINs", "GROUP BY", "HAVING", "ORDER BY", "String Functions", "SQL Aggregates"],
        difficulty: "Intermediate",
        videoId: "Wt8jyPvdGRo"
      }
      // {
      //   id: "p6",
      //   title: "Employee Promotion Prediction",
      //   description: " Build a machine learning model to predict employee promotions based on performance and profile attributes",
      //   image: "https://img.youtube.com/vi/vRsoANUaAhI/0.jpg",
      //   skills: ["Classification Models", "Feature Engineering", "Model Evaluation using Python"],
      //   difficulty: "Advanced",
      //   videoId: "vRsoANUaAhI"
      // }
    ]

  },


   {
    id: '19',
    title: "Data Analytics With Visualization in Delhi",
    description: "Gain hands-on skills in data analytics, master tools like Python and Power BI, build real-world projects, and become a certified, job-ready analyst in 8-10 months.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Deep Learning",
    students: 1243,
    metaData: {
      title: "Data Analytics With Visualization in Delhi | Ivy Professional School",
      description: "Learn Data Analytics in Delhi with Ivy Professional School - Python, SQL, Excel, Power BI. Includes projects & placement help.",
      bio: "Learn to analyze and visualize data, work on industry projects, earn a prestigious certificate, and become a job-ready data analyst within 12-14 months."

    },
    duration: "14 weeks",
    rating: 4.8,
    reviewCount: 298,
    isFeatured: true,
    slug: "data-analytics-course-delhi",
    longDescription: "Our comprehensive Data Analytics With Visualization in Delhi equips you with essential skills needed to analyze large datasets, build dashboards, and derive actionable insights. The program combines theory with hands‑on labs, case studies, and real client projects to strengthen your analytical thinking and technical proficiency. \n\n What Makes This Course UniqueIndustry‑Driven Curriculum: Updated regularly based on employer needs.\nExpert Faculty: Instructors with real analytics industry experience.\nHands‑On Projects: Apply skills on live business datasets.\nPlacement Support: Resume building, interview prep & hiring connections. \n\n Whether you’re a beginner with zero experience or an IT professional looking to switch careers, this course will help you build a solid foundation and a competitive edge in today’s data‑driven market. Expert Faculty: Instructors with real analytics industry experience. Hands‑On Projects: Apply skills on live business datasets.Placement Support: Resume building, interview prep & hiring connections.Whether you’re a beginner with zero experience or an IT professional looking to switch careers, this course will help you build a solid foundation and a competitive edge in today’s data‑driven market."
    , instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
        , isDirector: true
      }
    ],
    outcomes: [
      "Work with Python for data analytics (Pandas, NumPy)",
      "Build SQL queries for data extraction & relational databases",
      "Design interactive dashboards in Tableau & Power BI",
      "Understand key statistical concepts for analytics",
      "Clean, analyze, and visualize real data from business cases",
      "Build a professional portfolio"
    ],
    curriculum: [
      {
        id: "m1",
        title: "Advance Excel",
        duration: "28 hrs",
        topics: [
          { id: "t1", title: "Data Hygiene – Clean, structure, and prepare your dataset", duration: "1.25 hrs" },
          { id: "t2", title: "Formatting – Number and table formatting for clarity", duration: "1.25 hrs" },
          { id: "t3", title: "Filtering & Sorting – Auto filters, advanced filters, custom sorting", duration: "1.5 hrs" },
          { id: "t4", title: "Cell Referencing – Relative, absolute references & formula handling", duration: "1.5 hrs" },
          { id: "t5", title: "Basic Functions – SUM, AVERAGE, COUNT, PRODUCT, etc.", duration: "1.75 hrs" },
          { id: "t6", title: "Date Functions – TODAY, DATEDIF, EOMONTH, WEEKDAY, etc.", duration: "1.5 hrs" },
          { id: "t7", title: "Conditional Functions – SUMIFS, COUNTIFS, AVERAGEIFS", duration: "2 hrs" },
          { id: "t8", title: "Database Functions – DSUM, DAVERAGE using criteria tables", duration: "1.25 hrs" },
          { id: "t9", title: "Dynamic Arrays (Google Sheets) – FILTER, SORT, UNIQUE, TEXTJOIN", duration: "1.5 hrs" },
          { id: "t10", title: "Pivot Tables – Layout, grouping, calculated fields, summarizing", duration: "2.5 hrs" },
          { id: "t11", title: "Charts – Chart creation, types, usage, sparklines", duration: "2 hrs" },
          { id: "t12", title: "Dashboards – Planning, business insights, slicers, summaries", duration: "2.5 hrs" },
          { id: "t13", title: "Logical Functions – IF, AND, OR, IFERROR, SWITCH etc", duration: "1.75 hrs" },
          { id: "t14", title: "Lookup Functions – VLOOKUP, XLOOKUP, MATCH, INDIRECT etc", duration: "2.25 hrs" },
          { id: "t15", title: "Text Functions – LEFT, MID, FIND, SUBSTITUTE, CONCAT etc", duration: "1.5 hrs" },
          { id: "t16", title: "Conditional Formatting – Color scales, data bars, formulas", duration: "1.25 hrs" },
          { id: "t17", title: "Data Validation – Lists, error alerts, dependent dropdowns", duration: "1 hr" },
          { id: "t18", title: "Goal Seek & Solver – Solve optimization and reverse calculations", duration: "1.25 hrs" },
          { id: "t19", title: "Gen AI - How to Use Gen AI in Microsoft Excel, Use Lab.Generative", duration: "0.75 hrs" },
          { id: "t20", title: "ChatGPT - How to use Prompt engineering for Data Analysis", duration: "0.75 hrs" }
        ]
      },

      {
        id: "m2",
        title: "SQL Queries & Relational Database Management",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "SQL Basics: Introduction to Database Management System (DBMS), Introduction to Google BigQuery and MySQL, CRUD Operations", duration: "3 hrs" },
          { id: "t2", title: "Data Manipulation and Transformation: Logical, Numerical, and Mathematical Operators, Conditional Statements", duration: "2.5 hrs" },
          { id: "t3", title: "Data Cleaning: Type Casting, Date/Time Formatting, Text Formatting", duration: "2 hrs" },
          { id: "t4", title: "Pattern Matching: LIKE Operator, REGEXP Functions", duration: "1.5 hrs" },
          { id: "t5", title: "Joins and Relational Databases: Keys, Join Types, Indexing, Normalization", duration: "4 hrs" },
          { id: "t6", title: "Aggregation and Grouping: Aggregate Functions, GROUP BY, CTEs, Variables", duration: "3.5 hrs" },
          { id: "t7", title: "Window Functions: RANK, DENSE_RANK, ROW_NUMBER, LEAD/LAG", duration: "2.5 hrs" },
          { id: "t8", title: "Data Reusability: Views, Stored Procedures, UDFs", duration: "2 hrs" },
          { id: "t9", title: "Subqueries: Simple, EXISTS/NOT EXISTS, Correlated", duration: "1.5 hrs" },
          { id: "t10", title: "Cloud Services: BigQuery Querying, Sharing Results, Permissions, Scheduling", duration: "1.5 hrs" },
          { id: "t11", title: "Online SQL Platforms: MySQL Workbench, Online IDEs, Cloud Storage Integration", duration: "0.5 hrs" }
        ]
      },

      {
        id: "m3",
        title: "Data Visualization Using Tableau (Addon module with extra charges)",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "Introduction to Tableau: Approaching Business Problems, Interface Overview", duration: "2 hrs" },
          { id: "t2", title: "Connecting and Shaping Data: Data Sources, Pivoting, Calculated Fields, Dimensions/Measures", duration: "3 hrs" },
          { id: "t3", title: "Introduction to Basic Charts: Bars, Lines, Scatter Plots, Maps", duration: "2 hrs" },
          { id: "t4", title: "Working With Marks Card: Color, Size, Label, Detail, Tooltip", duration: "1.5 hrs" },
          { id: "t5", title: "Different Filters in Tableau: Quick Filters, Context Filters, Data Source Filters", duration: "2 hrs" },
          { id: "t6", title: "Calculated Fields: Summarization, String Manipulation, Date, Logical Functions", duration: "2.5 hrs" },
          { id: "t7", title: "Combining Tables: Joins, Unions, Blending", duration: "2 hrs" },
          { id: "t8", title: "Table Calculations: Primary and Secondary Calculations", duration: "1.5 hrs" },
          { id: "t9", title: "Parameters: Dimension, Measure, Sort, TopN, Date", duration: "1.5 hrs" },
          { id: "t10", title: "Groups & Sets: Creating and Applying", duration: "1 hr" },
          { id: "t11", title: "Analytics: Forecasting, Trend Lines, Clustering", duration: "2 hrs" },
          { id: "t12", title: "Dashboard Building & Actions: Filters, Highlights, Navigation", duration: "2.5 hrs" },
          { id: "t13", title: "Projects: RFM Analysis, Customer Retention Dashboard", duration: "1.5 hrs" }
        ]
      }
      ,

      {
        id: "m4",
        title: "Data Visualization Using Power BI",
        duration: "28 hrs",
        topics: [
          { id: "t1", title: "Introduction: Data Visualization, Interface, Business Problem-Solving", duration: "3 hrs" },
          { id: "t2", title: "Connecting & Shaping Data: Power Query Cleaning, Transformation, Append/Merge", duration: "4.5 hrs" },
          { id: "t3", title: "Data Modeling: Normalization, Relationships, Filter Flow", duration: "4 hrs" },
          { id: "t4", title: "DAX Analysis: Calculated Columns/Measures, Functions, Time Intelligence", duration: "6 hrs" },
          { id: "t5", title: "Visualization: Interactive Reports, Charts, Slicers, Drillthroughs", duration: "5 hrs" },
          { id: "t6", title: "AI & Custom Visuals: Decomposition Trees, Q&A, Key Influencers", duration: "2 hrs" },
          { id: "t7", title: "Deployment & Security: Power BI Service, Refresh Schedules, RLS", duration: "2.5 hrs" },
          { id: "t8", title: "SQL Integration: Database Connections, Custom Queries", duration: "1 hr" }
        ]
      }
      ,

      {
        id: "m5",
        title: "Python for Data Science",
        duration: "36 hrs",
        topics: [
          { id: "t1", title: "Introduction to Python: Installation, IDEs (VS Code, Jupyter)", duration: "2 hrs" },
          { id: "t2", title: "Core Data Types: Numbers, Strings, Booleans", duration: "3 hrs" },
          { id: "t3", title: "Advanced Data Structures: Lists, Tuples, Sets, Dictionaries", duration: "4 hrs" },
          { id: "t4", title: "Program Control: Conditionals, Loops, Comprehensions", duration: "3 hrs" },
          { id: "t5", title: "Functions & NumPy: Custom Functions, Vectorized Operations", duration: "3.5 hrs" },
          { id: "t6", title: "Pandas Basics: DataFrame Operations, Data Cleaning", duration: "4 hrs" },
          { id: "t7", title: "Pandas Advanced: GroupBy, Merging, Pivoting", duration: "3.5 hrs" },
          { id: "t8", title: "EDA: Univariate/Bivariate Analysis, Correlation", duration: "3 hrs" },
          { id: "t9", title: "Linear Regression: Ad Revenue Prediction Project", duration: "2.5 hrs" },
          { id: "t10", title: "Logistic Regression: Click-Through Rate Prediction Project", duration: "2.5 hrs" },
          { id: "t11", title: "Decision Trees: Used Car Pricing Project", duration: "2 hrs" },
          { id: "t12", title: "Time Series: Retail Sales Forecasting Project", duration: "2 hrs" },
          { id: "t13", title: "Deployment: API Integration, GitHub, Model Serving", duration: "2 hrs" }
        ]
      }
      ,
     {
        id: "m6",
        title: "4 Months PrepAI",
        duration: "120 days",
        topics: [
          { id: "t1", title: "Unlimited Mock Interviews (Speech-to-Speech)", duration: "6.5 hrs" },
          { id: "t2", title: "ATS-Friendly Resume Builder", duration: "8.25 hrs" },
          { id: "t3", title: "Unlimited Doubt Clearing (AI Tutor)", duration: "6.75 hrs" },
          { id: "t4", title: "Personalized Learning Plans", duration: "4.5 hrs" },
          { id: "t5", title: "1:1 AI Career Coaching", duration: "4.5 hrs" }
        ]
      }
    ],

    projects: [
      {
        id: "p1",
        title: "How To Choose Ideal Residence Using SQL",
        description: "Master SQL for real estate data analysis. Learn how to use SELECT statements, create databases, and import/export data, while performing calculations and reporting in SQL.",
        image: "https://img.youtube.com/vi/hzxawPxuks8/0.jpg",
        skills: ["SQL ", "SELECT", "CREATE DATABASE", "MySQL Connections", "MySQL Connections", "Data Export", "Excel to MySQL", "CSV Conversion", "SQL LIMIT", "SQL COUNT", "SQL COUNT", "Data Summarization", "Reporting in SQL"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "hzxawPxuks8"
      },
      {
        id: "p2",
        title: "Power BI Live Case Study | Web Analytics",
        description: "Learn to create a Power BI dashboard from scratch. Explore website click analysis, data visualization techniques, filters, fields, and Power Query transformations in Power BI.",
        image: "https://img.youtube.com/vi/-XUN_3Hama0/0.jpg",
        skills: ["Power BI", "Power Query", "Data Transformation", "Filters", "Fields in Power BI", "Power BI Cards", "Power BI Charts", "Bar Charts", "Slicers", "Data Visualization", "Power BI Dashboard", "Date Handling in Power BI"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "-XUN_3Hama0"
      },
      {
        id: "p3",
        title: "Tableau Live Case | WPL Dataset | Identify the Strategies used in WPL Auctions",
        description: "Analyze the Women's Premier League (WPL) auction strategies using Tableau. Learn to create interactive dashboards and visualize key data points for team performance insights.",
        image: "https://img.youtube.com/vi/THyEuZ0xHC8/0.jpg",
        skills: ["Tableau", "Tableau Dashboard", "Tableau Drag and Drop", "Tableau Sheets", "Data Source in Tableau", "Tableau Live and Extract", "Tableau Stories", "Tableau Filters", "Tableau Visualizations", "Tableau Functions", "Tableau Headers"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "THyEuZ0xHC8"
      },
      {
        id: "p4",
        title: "Analyze Sales of Smartphones on Amazon",
        description: "Analyze smartphone sales data using Excel. Learn to create dashboards, perform quarterly revenue analysis, and uncover insights using key Excel functions.",
        image: "https://img.youtube.com/vi/oWy7ZkS3axE/0.jpg",
        skills: ["Excel Dashboards", "PivotTables", "PivotCharts", " VLOOKUP", "SUMIF", "Data Validation", "Conditional Formatting", "Excel Formulas", " Data Analysis", "Revenue Analysis", "Excel Charts"],
        difficulty: "Beginner to Intermediate",
        videoId: "oWy7ZkS3axE"
      },
      {
        id: "p5",
        title: "AirBNB Business Case Study - Tableau Dashboarding",
        description: "Analyze AirBNB business data and create insightful visualizations using Tableau. Learn key techniques for dashboarding, filtering, and data presentation to drive business decisions.",
        image: "https://img.youtube.com/vi/4cx9_OSv4Fo/0.jpg",
        skills: ["Tableau", "Tableau Dashboarding", "Tableau Dashboarding", "Filters", "Tableau Calculations", "Interactive Dashboards", "Data Connections", "Data Blending", "Tableau Filters"],
        difficulty: "Beginner to Intermediate",
        videoId: "4cx9_OSv4Fo"
      },
      {
        id: "p6",
        title: "Analyzing Netflix Originals & IMDB Scores",
        description: "Analyze Netflix Originals data with SQL, utilizing Window Functions, CTEs, and various SQL queries to explore trends and uncover insights in the dataset.",
        image: "https://img.youtube.com/vi/Wt8jyPvdGRo/0.jpg",
        skills: ["SQL Queries", "Window Functions", "Common Table Expressions (CTEs)", "Date Functions", "JOINs", "GROUP BY", "HAVING", "ORDER BY", "String Functions", "SQL Aggregates"],
        difficulty: "Intermediate",
        videoId: "Wt8jyPvdGRo"
      }
      // {
      //   id: "p6",
      //   title: "Employee Promotion Prediction",
      //   description: " Build a machine learning model to predict employee promotions based on performance and profile attributes",
      //   image: "https://img.youtube.com/vi/vRsoANUaAhI/0.jpg",
      //   skills: ["Classification Models", "Feature Engineering", "Model Evaluation using Python"],
      //   difficulty: "Advanced",
      //   videoId: "vRsoANUaAhI"
      // }
    ]

  },

  {
    id: '20',
    title: "Data Analytics With Visualization in Bangalore",
    description: "The Data Analytics With Visualization in Bangalore by Ivy Professional School is designed for students and professionals aiming to build strong analytical skills for data-driven decision-making. As India’s Silicon Valley, Bangalore hosts leading IT firms, startups, product companies, and global analytics teams, creating massive demand for skilled data analysts. This program focuses on practical analytics skills using industry-standard tools and real business datasets, preparing learners for high-growth data analytics roles.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Deep Learning",
    students: 1243,
    metaData: {
      title: "Data Analytics With Visualization in Bangalore | Ivy Professional School",
      description: "Enroll in Ivy Professional School’s Data Analytics With Visualization in Bangalore with hands-on projects, Python, SQL, Power BI & career support.",
      bio: "Learn to analyze and visualize data, work on industry projects, earn a prestigious certificate, and become a job-ready data analyst within 12-14 months."

    },
    duration: "14 weeks",
    rating: 4.8,
    reviewCount: 298,
    isFeatured: true,
    slug: "data-analytics-course-bangalore",
    longDescription: "The Data Analytics With Visualization in Bangalore provides end-to-end training on collecting, cleaning, analyzing, and visualizing data to generate actionable business insights. The course builds a strong foundation in analytics concepts while emphasizing hands-on implementation. \n\n Learners gain exposure to real-world analytics use cases across industries such as IT services, e-commerce, fintech, healthcare, and consulting. The program covers data analysis workflows used by modern organizations to support business strategy and operational decisions. \n\n Delivered through instructor-led sessions, hands-on labs, and industry-aligned case studies, this course is suitable for freshers, graduates, and working professionals in Bangalore."
    , instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
        , isDirector: true
      }
    ],
    outcomes: [
      "Understand the data analytics lifecycle from data collection to insight generation",
      "Work with Excel, SQL, and Python for data analysis",
      "Perform data cleaning, preprocessing, and exploratory data analysis (EDA)",
      "Work with Excel, SQL, and Python for data analysis",
      "Perform data cleaning, preprocessing, and exploratory data analysis (EDA)",
      "Apply statistical concepts for business decision-making"
    ],
    curriculum: [
      {
        id: "m1",
        title: "Advance Excel",
        duration: "28 hrs",
        topics: [
          { id: "t1", title: "Data Hygiene – Clean, structure, and prepare your dataset", duration: "1.25 hrs" },
          { id: "t2", title: "Formatting – Number and table formatting for clarity", duration: "1.25 hrs" },
          { id: "t3", title: "Filtering & Sorting – Auto filters, advanced filters, custom sorting", duration: "1.5 hrs" },
          { id: "t4", title: "Cell Referencing – Relative, absolute references & formula handling", duration: "1.5 hrs" },
          { id: "t5", title: "Basic Functions – SUM, AVERAGE, COUNT, PRODUCT, etc.", duration: "1.75 hrs" },
          { id: "t6", title: "Date Functions – TODAY, DATEDIF, EOMONTH, WEEKDAY, etc.", duration: "1.5 hrs" },
          { id: "t7", title: "Conditional Functions – SUMIFS, COUNTIFS, AVERAGEIFS", duration: "2 hrs" },
          { id: "t8", title: "Database Functions – DSUM, DAVERAGE using criteria tables", duration: "1.25 hrs" },
          { id: "t9", title: "Dynamic Arrays (Google Sheets) – FILTER, SORT, UNIQUE, TEXTJOIN", duration: "1.5 hrs" },
          { id: "t10", title: "Pivot Tables – Layout, grouping, calculated fields, summarizing", duration: "2.5 hrs" },
          { id: "t11", title: "Charts – Chart creation, types, usage, sparklines", duration: "2 hrs" },
          { id: "t12", title: "Dashboards – Planning, business insights, slicers, summaries", duration: "2.5 hrs" },
          { id: "t13", title: "Logical Functions – IF, AND, OR, IFERROR, SWITCH etc", duration: "1.75 hrs" },
          { id: "t14", title: "Lookup Functions – VLOOKUP, XLOOKUP, MATCH, INDIRECT etc", duration: "2.25 hrs" },
          { id: "t15", title: "Text Functions – LEFT, MID, FIND, SUBSTITUTE, CONCAT etc", duration: "1.5 hrs" },
          { id: "t16", title: "Conditional Formatting – Color scales, data bars, formulas", duration: "1.25 hrs" },
          { id: "t17", title: "Data Validation – Lists, error alerts, dependent dropdowns", duration: "1 hr" },
          { id: "t18", title: "Goal Seek & Solver – Solve optimization and reverse calculations", duration: "1.25 hrs" },
          { id: "t19", title: "Gen AI - How to Use Gen AI in Microsoft Excel, Use Lab.Generative", duration: "0.75 hrs" },
          { id: "t20", title: "ChatGPT - How to use Prompt engineering for Data Analysis", duration: "0.75 hrs" }
        ]
      },

      {
        id: "m2",
        title: "SQL Queries & Relational Database Management",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "SQL Basics: Introduction to Database Management System (DBMS), Introduction to Google BigQuery and MySQL, CRUD Operations", duration: "3 hrs" },
          { id: "t2", title: "Data Manipulation and Transformation: Logical, Numerical, and Mathematical Operators, Conditional Statements", duration: "2.5 hrs" },
          { id: "t3", title: "Data Cleaning: Type Casting, Date/Time Formatting, Text Formatting", duration: "2 hrs" },
          { id: "t4", title: "Pattern Matching: LIKE Operator, REGEXP Functions", duration: "1.5 hrs" },
          { id: "t5", title: "Joins and Relational Databases: Keys, Join Types, Indexing, Normalization", duration: "4 hrs" },
          { id: "t6", title: "Aggregation and Grouping: Aggregate Functions, GROUP BY, CTEs, Variables", duration: "3.5 hrs" },
          { id: "t7", title: "Window Functions: RANK, DENSE_RANK, ROW_NUMBER, LEAD/LAG", duration: "2.5 hrs" },
          { id: "t8", title: "Data Reusability: Views, Stored Procedures, UDFs", duration: "2 hrs" },
          { id: "t9", title: "Subqueries: Simple, EXISTS/NOT EXISTS, Correlated", duration: "1.5 hrs" },
          { id: "t10", title: "Cloud Services: BigQuery Querying, Sharing Results, Permissions, Scheduling", duration: "1.5 hrs" },
          { id: "t11", title: "Online SQL Platforms: MySQL Workbench, Online IDEs, Cloud Storage Integration", duration: "0.5 hrs" }
        ]
      },

      {
        id: "m3",
        title: "Data Visualization Using Tableau (Addon module with extra charges)",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "Introduction to Tableau: Approaching Business Problems, Interface Overview", duration: "2 hrs" },
          { id: "t2", title: "Connecting and Shaping Data: Data Sources, Pivoting, Calculated Fields, Dimensions/Measures", duration: "3 hrs" },
          { id: "t3", title: "Introduction to Basic Charts: Bars, Lines, Scatter Plots, Maps", duration: "2 hrs" },
          { id: "t4", title: "Working With Marks Card: Color, Size, Label, Detail, Tooltip", duration: "1.5 hrs" },
          { id: "t5", title: "Different Filters in Tableau: Quick Filters, Context Filters, Data Source Filters", duration: "2 hrs" },
          { id: "t6", title: "Calculated Fields: Summarization, String Manipulation, Date, Logical Functions", duration: "2.5 hrs" },
          { id: "t7", title: "Combining Tables: Joins, Unions, Blending", duration: "2 hrs" },
          { id: "t8", title: "Table Calculations: Primary and Secondary Calculations", duration: "1.5 hrs" },
          { id: "t9", title: "Parameters: Dimension, Measure, Sort, TopN, Date", duration: "1.5 hrs" },
          { id: "t10", title: "Groups & Sets: Creating and Applying", duration: "1 hr" },
          { id: "t11", title: "Analytics: Forecasting, Trend Lines, Clustering", duration: "2 hrs" },
          { id: "t12", title: "Dashboard Building & Actions: Filters, Highlights, Navigation", duration: "2.5 hrs" },
          { id: "t13", title: "Projects: RFM Analysis, Customer Retention Dashboard", duration: "1.5 hrs" }
        ]
      }
      ,

      {
        id: "m4",
        title: "Data Visualization Using Power BI",
        duration: "28 hrs",
        topics: [
          { id: "t1", title: "Introduction: Data Visualization, Interface, Business Problem-Solving", duration: "3 hrs" },
          { id: "t2", title: "Connecting & Shaping Data: Power Query Cleaning, Transformation, Append/Merge", duration: "4.5 hrs" },
          { id: "t3", title: "Data Modeling: Normalization, Relationships, Filter Flow", duration: "4 hrs" },
          { id: "t4", title: "DAX Analysis: Calculated Columns/Measures, Functions, Time Intelligence", duration: "6 hrs" },
          { id: "t5", title: "Visualization: Interactive Reports, Charts, Slicers, Drillthroughs", duration: "5 hrs" },
          { id: "t6", title: "AI & Custom Visuals: Decomposition Trees, Q&A, Key Influencers", duration: "2 hrs" },
          { id: "t7", title: "Deployment & Security: Power BI Service, Refresh Schedules, RLS", duration: "2.5 hrs" },
          { id: "t8", title: "SQL Integration: Database Connections, Custom Queries", duration: "1 hr" }
        ]
      }
      ,

      {
        id: "m5",
        title: "Python for Data Science",
        duration: "36 hrs",
        topics: [
          { id: "t1", title: "Introduction to Python: Installation, IDEs (VS Code, Jupyter)", duration: "2 hrs" },
          { id: "t2", title: "Core Data Types: Numbers, Strings, Booleans", duration: "3 hrs" },
          { id: "t3", title: "Advanced Data Structures: Lists, Tuples, Sets, Dictionaries", duration: "4 hrs" },
          { id: "t4", title: "Program Control: Conditionals, Loops, Comprehensions", duration: "3 hrs" },
          { id: "t5", title: "Functions & NumPy: Custom Functions, Vectorized Operations", duration: "3.5 hrs" },
          { id: "t6", title: "Pandas Basics: DataFrame Operations, Data Cleaning", duration: "4 hrs" },
          { id: "t7", title: "Pandas Advanced: GroupBy, Merging, Pivoting", duration: "3.5 hrs" },
          { id: "t8", title: "EDA: Univariate/Bivariate Analysis, Correlation", duration: "3 hrs" },
          { id: "t9", title: "Linear Regression: Ad Revenue Prediction Project", duration: "2.5 hrs" },
          { id: "t10", title: "Logistic Regression: Click-Through Rate Prediction Project", duration: "2.5 hrs" },
          { id: "t11", title: "Decision Trees: Used Car Pricing Project", duration: "2 hrs" },
          { id: "t12", title: "Time Series: Retail Sales Forecasting Project", duration: "2 hrs" },
          { id: "t13", title: "Deployment: API Integration, GitHub, Model Serving", duration: "2 hrs" }
        ]
      }
      ,
     {
        id: "m6",
        title: "4 Months PrepAI",
        duration: "120 days",
        topics: [
          { id: "t1", title: "Unlimited Mock Interviews (Speech-to-Speech)", duration: "6.5 hrs" },
          { id: "t2", title: "ATS-Friendly Resume Builder", duration: "8.25 hrs" },
          { id: "t3", title: "Unlimited Doubt Clearing (AI Tutor)", duration: "6.75 hrs" },
          { id: "t4", title: "Personalized Learning Plans", duration: "4.5 hrs" },
          { id: "t5", title: "1:1 AI Career Coaching", duration: "4.5 hrs" }
        ]
      }
    ],

    projects: [
      {
        id: "p1",
        title: "How To Choose Ideal Residence Using SQL",
        description: "Master SQL for real estate data analysis. Learn how to use SELECT statements, create databases, and import/export data, while performing calculations and reporting in SQL.",
        image: "https://img.youtube.com/vi/hzxawPxuks8/0.jpg",
        skills: ["SQL ", "SELECT", "CREATE DATABASE", "MySQL Connections", "MySQL Connections", "Data Export", "Excel to MySQL", "CSV Conversion", "SQL LIMIT", "SQL COUNT", "SQL COUNT", "Data Summarization", "Reporting in SQL"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "hzxawPxuks8"
      },
      {
        id: "p2",
        title: "Power BI Live Case Study | Web Analytics",
        description: "Learn to create a Power BI dashboard from scratch. Explore website click analysis, data visualization techniques, filters, fields, and Power Query transformations in Power BI.",
        image: "https://img.youtube.com/vi/-XUN_3Hama0/0.jpg",
        skills: ["Power BI", "Power Query", "Data Transformation", "Filters", "Fields in Power BI", "Power BI Cards", "Power BI Charts", "Bar Charts", "Slicers", "Data Visualization", "Power BI Dashboard", "Date Handling in Power BI"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "-XUN_3Hama0"
      },
      {
        id: "p3",
        title: "Tableau Live Case | WPL Dataset | Identify the Strategies used in WPL Auctions",
        description: "Analyze the Women's Premier League (WPL) auction strategies using Tableau. Learn to create interactive dashboards and visualize key data points for team performance insights.",
        image: "https://img.youtube.com/vi/THyEuZ0xHC8/0.jpg",
        skills: ["Tableau", "Tableau Dashboard", "Tableau Drag and Drop", "Tableau Sheets", "Data Source in Tableau", "Tableau Live and Extract", "Tableau Stories", "Tableau Filters", "Tableau Visualizations", "Tableau Functions", "Tableau Headers"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "THyEuZ0xHC8"
      },
      {
        id: "p4",
        title: "Analyze Sales of Smartphones on Amazon",
        description: "Analyze smartphone sales data using Excel. Learn to create dashboards, perform quarterly revenue analysis, and uncover insights using key Excel functions.",
        image: "https://img.youtube.com/vi/oWy7ZkS3axE/0.jpg",
        skills: ["Excel Dashboards", "PivotTables", "PivotCharts", " VLOOKUP", "SUMIF", "Data Validation", "Conditional Formatting", "Excel Formulas", " Data Analysis", "Revenue Analysis", "Excel Charts"],
        difficulty: "Beginner to Intermediate",
        videoId: "oWy7ZkS3axE"
      },
      {
        id: "p5",
        title: "AirBNB Business Case Study - Tableau Dashboarding",
        description: "Analyze AirBNB business data and create insightful visualizations using Tableau. Learn key techniques for dashboarding, filtering, and data presentation to drive business decisions.",
        image: "https://img.youtube.com/vi/4cx9_OSv4Fo/0.jpg",
        skills: ["Tableau", "Tableau Dashboarding", "Tableau Dashboarding", "Filters", "Tableau Calculations", "Interactive Dashboards", "Data Connections", "Data Blending", "Tableau Filters"],
        difficulty: "Beginner to Intermediate",
        videoId: "4cx9_OSv4Fo"
      },
      {
        id: "p6",
        title: "Analyzing Netflix Originals & IMDB Scores",
        description: "Analyze Netflix Originals data with SQL, utilizing Window Functions, CTEs, and various SQL queries to explore trends and uncover insights in the dataset.",
        image: "https://img.youtube.com/vi/Wt8jyPvdGRo/0.jpg",
        skills: ["SQL Queries", "Window Functions", "Common Table Expressions (CTEs)", "Date Functions", "JOINs", "GROUP BY", "HAVING", "ORDER BY", "String Functions", "SQL Aggregates"],
        difficulty: "Intermediate",
        videoId: "Wt8jyPvdGRo"
      }
      // {
      //   id: "p6",
      //   title: "Employee Promotion Prediction",
      //   description: " Build a machine learning model to predict employee promotions based on performance and profile attributes",
      //   image: "https://img.youtube.com/vi/vRsoANUaAhI/0.jpg",
      //   skills: ["Classification Models", "Feature Engineering", "Model Evaluation using Python"],
      //   difficulty: "Advanced",
      //   videoId: "vRsoANUaAhI"
      // }
    ]

  },

  {
    id: '20',
    title: "Data Analytics With Visualization in Mumbai",
    description: " Gain practical data analytics skills with Ivy Professional School in Mumbai. Learn Python, SQL, Power BI & Excel. Build real projects & get job-ready.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Deep Learning",
    students: 1243,
    metaData: {
      title: "Data Analytics With Visualization in Mumbai | Ivy Professional School",
      description: "Join Ivy Professional School’s Data Analytics With Visualization in Mumbai - Learn top tools with hands-on projects & career support.",
      bio: "Learn to analyze and visualize data, work on industry projects, earn a prestigious certificate, and become a job-ready data analyst within 12-14 months."

    },
    duration: "14 weeks",
    rating: 4.8,
    reviewCount: 298,
    isFeatured: true,
    slug: "data-analytics-course-mumbai",
    longDescription: "Our Data Analytics With Visualization in Mumbai equips you with the analytical mindset and technical proficiency required to drive data‑driven decisions across industries. Over weeks of structured modules, you’ll learn to clean, analyze, model, visualize, and interpret data using industry‑standard tools. Whether you’re starting fresh or transitioning careers, this training bridges the gap from theory to practice. \n\n You’ll gain hands‑on experience with:Python for Data Analysis SQL and Databases Excel & Advanced Analytics Data Visualization with Tableau & Power BI. Statistics & Predictive Modelling"
    , instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
        , isDirector: true
      }
    ],
    outcomes: [
      "Build strong foundations in data analytics concepts including statistics, probability, data types, and sampling.",
      "Extract, query, and analyze data using SQL from structured databases.",
      "Perform data cleaning, analysis, and visualization using Python libraries like Pandas, NumPy, Matplotlib, and Seaborn.",
      "Create interactive and insightful dashboards using Tableau and Power BI for data storytelling",
      "Apply business intelligence techniques to convert business problems into data‑driven solutions.",
      "Work on real‑world industry datasets and projects to build a job‑ready analytics portfolio."
    ],
    curriculum: [
      {
        id: "m1",
        title: "Advance Excel",
        duration: "28 hrs",
        topics: [
          { id: "t1", title: "Data Hygiene – Clean, structure, and prepare your dataset", duration: "1.25 hrs" },
          { id: "t2", title: "Formatting – Number and table formatting for clarity", duration: "1.25 hrs" },
          { id: "t3", title: "Filtering & Sorting – Auto filters, advanced filters, custom sorting", duration: "1.5 hrs" },
          { id: "t4", title: "Cell Referencing – Relative, absolute references & formula handling", duration: "1.5 hrs" },
          { id: "t5", title: "Basic Functions – SUM, AVERAGE, COUNT, PRODUCT, etc.", duration: "1.75 hrs" },
          { id: "t6", title: "Date Functions – TODAY, DATEDIF, EOMONTH, WEEKDAY, etc.", duration: "1.5 hrs" },
          { id: "t7", title: "Conditional Functions – SUMIFS, COUNTIFS, AVERAGEIFS", duration: "2 hrs" },
          { id: "t8", title: "Database Functions – DSUM, DAVERAGE using criteria tables", duration: "1.25 hrs" },
          { id: "t9", title: "Dynamic Arrays (Google Sheets) – FILTER, SORT, UNIQUE, TEXTJOIN", duration: "1.5 hrs" },
          { id: "t10", title: "Pivot Tables – Layout, grouping, calculated fields, summarizing", duration: "2.5 hrs" },
          { id: "t11", title: "Charts – Chart creation, types, usage, sparklines", duration: "2 hrs" },
          { id: "t12", title: "Dashboards – Planning, business insights, slicers, summaries", duration: "2.5 hrs" },
          { id: "t13", title: "Logical Functions – IF, AND, OR, IFERROR, SWITCH etc", duration: "1.75 hrs" },
          { id: "t14", title: "Lookup Functions – VLOOKUP, XLOOKUP, MATCH, INDIRECT etc", duration: "2.25 hrs" },
          { id: "t15", title: "Text Functions – LEFT, MID, FIND, SUBSTITUTE, CONCAT etc", duration: "1.5 hrs" },
          { id: "t16", title: "Conditional Formatting – Color scales, data bars, formulas", duration: "1.25 hrs" },
          { id: "t17", title: "Data Validation – Lists, error alerts, dependent dropdowns", duration: "1 hr" },
          { id: "t18", title: "Goal Seek & Solver – Solve optimization and reverse calculations", duration: "1.25 hrs" },
          { id: "t19", title: "Gen AI - How to Use Gen AI in Microsoft Excel, Use Lab.Generative", duration: "0.75 hrs" },
          { id: "t20", title: "ChatGPT - How to use Prompt engineering for Data Analysis", duration: "0.75 hrs" }
        ]
      },

      {
        id: "m2",
        title: "SQL Queries & Relational Database Management",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "SQL Basics: Introduction to Database Management System (DBMS), Introduction to Google BigQuery and MySQL, CRUD Operations", duration: "3 hrs" },
          { id: "t2", title: "Data Manipulation and Transformation: Logical, Numerical, and Mathematical Operators, Conditional Statements", duration: "2.5 hrs" },
          { id: "t3", title: "Data Cleaning: Type Casting, Date/Time Formatting, Text Formatting", duration: "2 hrs" },
          { id: "t4", title: "Pattern Matching: LIKE Operator, REGEXP Functions", duration: "1.5 hrs" },
          { id: "t5", title: "Joins and Relational Databases: Keys, Join Types, Indexing, Normalization", duration: "4 hrs" },
          { id: "t6", title: "Aggregation and Grouping: Aggregate Functions, GROUP BY, CTEs, Variables", duration: "3.5 hrs" },
          { id: "t7", title: "Window Functions: RANK, DENSE_RANK, ROW_NUMBER, LEAD/LAG", duration: "2.5 hrs" },
          { id: "t8", title: "Data Reusability: Views, Stored Procedures, UDFs", duration: "2 hrs" },
          { id: "t9", title: "Subqueries: Simple, EXISTS/NOT EXISTS, Correlated", duration: "1.5 hrs" },
          { id: "t10", title: "Cloud Services: BigQuery Querying, Sharing Results, Permissions, Scheduling", duration: "1.5 hrs" },
          { id: "t11", title: "Online SQL Platforms: MySQL Workbench, Online IDEs, Cloud Storage Integration", duration: "0.5 hrs" }
        ]
      },

      {
        id: "m3",
        title: "Data Visualization Using Tableau (Addon module with extra charges)",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "Introduction to Tableau: Approaching Business Problems, Interface Overview", duration: "2 hrs" },
          { id: "t2", title: "Connecting and Shaping Data: Data Sources, Pivoting, Calculated Fields, Dimensions/Measures", duration: "3 hrs" },
          { id: "t3", title: "Introduction to Basic Charts: Bars, Lines, Scatter Plots, Maps", duration: "2 hrs" },
          { id: "t4", title: "Working With Marks Card: Color, Size, Label, Detail, Tooltip", duration: "1.5 hrs" },
          { id: "t5", title: "Different Filters in Tableau: Quick Filters, Context Filters, Data Source Filters", duration: "2 hrs" },
          { id: "t6", title: "Calculated Fields: Summarization, String Manipulation, Date, Logical Functions", duration: "2.5 hrs" },
          { id: "t7", title: "Combining Tables: Joins, Unions, Blending", duration: "2 hrs" },
          { id: "t8", title: "Table Calculations: Primary and Secondary Calculations", duration: "1.5 hrs" },
          { id: "t9", title: "Parameters: Dimension, Measure, Sort, TopN, Date", duration: "1.5 hrs" },
          { id: "t10", title: "Groups & Sets: Creating and Applying", duration: "1 hr" },
          { id: "t11", title: "Analytics: Forecasting, Trend Lines, Clustering", duration: "2 hrs" },
          { id: "t12", title: "Dashboard Building & Actions: Filters, Highlights, Navigation", duration: "2.5 hrs" },
          { id: "t13", title: "Projects: RFM Analysis, Customer Retention Dashboard", duration: "1.5 hrs" }
        ]
      }
      ,

      {
        id: "m4",
        title: "Data Visualization Using Power BI",
        duration: "28 hrs",
        topics: [
          { id: "t1", title: "Introduction: Data Visualization, Interface, Business Problem-Solving", duration: "3 hrs" },
          { id: "t2", title: "Connecting & Shaping Data: Power Query Cleaning, Transformation, Append/Merge", duration: "4.5 hrs" },
          { id: "t3", title: "Data Modeling: Normalization, Relationships, Filter Flow", duration: "4 hrs" },
          { id: "t4", title: "DAX Analysis: Calculated Columns/Measures, Functions, Time Intelligence", duration: "6 hrs" },
          { id: "t5", title: "Visualization: Interactive Reports, Charts, Slicers, Drillthroughs", duration: "5 hrs" },
          { id: "t6", title: "AI & Custom Visuals: Decomposition Trees, Q&A, Key Influencers", duration: "2 hrs" },
          { id: "t7", title: "Deployment & Security: Power BI Service, Refresh Schedules, RLS", duration: "2.5 hrs" },
          { id: "t8", title: "SQL Integration: Database Connections, Custom Queries", duration: "1 hr" }
        ]
      }
      ,

      {
        id: "m5",
        title: "Python for Data Science",
        duration: "36 hrs",
        topics: [
          { id: "t1", title: "Introduction to Python: Installation, IDEs (VS Code, Jupyter)", duration: "2 hrs" },
          { id: "t2", title: "Core Data Types: Numbers, Strings, Booleans", duration: "3 hrs" },
          { id: "t3", title: "Advanced Data Structures: Lists, Tuples, Sets, Dictionaries", duration: "4 hrs" },
          { id: "t4", title: "Program Control: Conditionals, Loops, Comprehensions", duration: "3 hrs" },
          { id: "t5", title: "Functions & NumPy: Custom Functions, Vectorized Operations", duration: "3.5 hrs" },
          { id: "t6", title: "Pandas Basics: DataFrame Operations, Data Cleaning", duration: "4 hrs" },
          { id: "t7", title: "Pandas Advanced: GroupBy, Merging, Pivoting", duration: "3.5 hrs" },
          { id: "t8", title: "EDA: Univariate/Bivariate Analysis, Correlation", duration: "3 hrs" },
          { id: "t9", title: "Linear Regression: Ad Revenue Prediction Project", duration: "2.5 hrs" },
          { id: "t10", title: "Logistic Regression: Click-Through Rate Prediction Project", duration: "2.5 hrs" },
          { id: "t11", title: "Decision Trees: Used Car Pricing Project", duration: "2 hrs" },
          { id: "t12", title: "Time Series: Retail Sales Forecasting Project", duration: "2 hrs" },
          { id: "t13", title: "Deployment: API Integration, GitHub, Model Serving", duration: "2 hrs" }
        ]
      }
      ,
      {
        id: "m6",
        title: "4 Months PrepAI",
        duration: "120 days",
        topics: [
          { id: "t1", title: "Unlimited Mock Interviews (Speech-to-Speech)", duration: "6.5 hrs" },
          { id: "t2", title: "ATS-Friendly Resume Builder", duration: "8.25 hrs" },
          { id: "t3", title: "Unlimited Doubt Clearing (AI Tutor)", duration: "6.75 hrs" },
          { id: "t4", title: "Personalized Learning Plans", duration: "4.5 hrs" },
          { id: "t5", title: "1:1 AI Career Coaching", duration: "4.5 hrs" }
        ]
      }
    ],

    projects: [
      {
        id: "p1",
        title: "How To Choose Ideal Residence Using SQL",
        description: "Master SQL for real estate data analysis. Learn how to use SELECT statements, create databases, and import/export data, while performing calculations and reporting in SQL.",
        image: "https://img.youtube.com/vi/hzxawPxuks8/0.jpg",
        skills: ["SQL ", "SELECT", "CREATE DATABASE", "MySQL Connections", "MySQL Connections", "Data Export", "Excel to MySQL", "CSV Conversion", "SQL LIMIT", "SQL COUNT", "SQL COUNT", "Data Summarization", "Reporting in SQL"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "hzxawPxuks8"
      },
      {
        id: "p2",
        title: "Power BI Live Case Study | Web Analytics",
        description: "Learn to create a Power BI dashboard from scratch. Explore website click analysis, data visualization techniques, filters, fields, and Power Query transformations in Power BI.",
        image: "https://img.youtube.com/vi/-XUN_3Hama0/0.jpg",
        skills: ["Power BI", "Power Query", "Data Transformation", "Filters", "Fields in Power BI", "Power BI Cards", "Power BI Charts", "Bar Charts", "Slicers", "Data Visualization", "Power BI Dashboard", "Date Handling in Power BI"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "-XUN_3Hama0"
      },
      {
        id: "p3",
        title: "Tableau Live Case | WPL Dataset | Identify the Strategies used in WPL Auctions",
        description: "Analyze the Women's Premier League (WPL) auction strategies using Tableau. Learn to create interactive dashboards and visualize key data points for team performance insights.",
        image: "https://img.youtube.com/vi/THyEuZ0xHC8/0.jpg",
        skills: ["Tableau", "Tableau Dashboard", "Tableau Drag and Drop", "Tableau Sheets", "Data Source in Tableau", "Tableau Live and Extract", "Tableau Stories", "Tableau Filters", "Tableau Visualizations", "Tableau Functions", "Tableau Headers"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "THyEuZ0xHC8"
      },
      {
        id: "p4",
        title: "Analyze Sales of Smartphones on Amazon",
        description: "Analyze smartphone sales data using Excel. Learn to create dashboards, perform quarterly revenue analysis, and uncover insights using key Excel functions.",
        image: "https://img.youtube.com/vi/oWy7ZkS3axE/0.jpg",
        skills: ["Excel Dashboards", "PivotTables", "PivotCharts", " VLOOKUP", "SUMIF", "Data Validation", "Conditional Formatting", "Excel Formulas", " Data Analysis", "Revenue Analysis", "Excel Charts"],
        difficulty: "Beginner to Intermediate",
        videoId: "oWy7ZkS3axE"
      },
      {
        id: "p5",
        title: "AirBNB Business Case Study - Tableau Dashboarding",
        description: "Analyze AirBNB business data and create insightful visualizations using Tableau. Learn key techniques for dashboarding, filtering, and data presentation to drive business decisions.",
        image: "https://img.youtube.com/vi/4cx9_OSv4Fo/0.jpg",
        skills: ["Tableau", "Tableau Dashboarding", "Tableau Dashboarding", "Filters", "Tableau Calculations", "Interactive Dashboards", "Data Connections", "Data Blending", "Tableau Filters"],
        difficulty: "Beginner to Intermediate",
        videoId: "4cx9_OSv4Fo"
      },
      {
        id: "p6",
        title: "Analyzing Netflix Originals & IMDB Scores",
        description: "Analyze Netflix Originals data with SQL, utilizing Window Functions, CTEs, and various SQL queries to explore trends and uncover insights in the dataset.",
        image: "https://img.youtube.com/vi/Wt8jyPvdGRo/0.jpg",
        skills: ["SQL Queries", "Window Functions", "Common Table Expressions (CTEs)", "Date Functions", "JOINs", "GROUP BY", "HAVING", "ORDER BY", "String Functions", "SQL Aggregates"],
        difficulty: "Intermediate",
        videoId: "Wt8jyPvdGRo"
      }
      // {
      //   id: "p6",
      //   title: "Employee Promotion Prediction",
      //   description: " Build a machine learning model to predict employee promotions based on performance and profile attributes",
      //   image: "https://img.youtube.com/vi/vRsoANUaAhI/0.jpg",
      //   skills: ["Classification Models", "Feature Engineering", "Model Evaluation using Python"],
      //   difficulty: "Advanced",
      //   videoId: "vRsoANUaAhI"
      // }
    ]

  },

   {
    id: '20',
    title: "Data Analytics With Visualization in Pune",
    description: "  Start your journey in analytics with Ivy Professional School’s Pune-based program. Learn industry-relevant tools and techniques, build real projects, and gain job-focused training to thrive in data roles.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Deep Learning",
    students: 1243,
    metaData: {
      title: "Data Analytics With Visualization in Mumbai | Ivy Professional School",
      description: "Join Ivy Professional School’s Data Analytics With Visualization in Mumbai - Learn top tools with hands-on projects & career support.",
      bio: "Learn to analyze and visualize data, work on industry projects, earn a prestigious certificate, and become a job-ready data analyst within 12-14 months."

    },
    duration: "14 weeks",
    rating: 4.8,
    reviewCount: 298,
    isFeatured: true,
    slug: "data-analytics-course-pune",
    longDescription: "Ivy Professional School’s Data Analytics Course in Pune is crafted to help aspiring analysts and professionals build a strong foundation in data interpretation, business intelligence, and analytical modeling. \n\n With Pune emerging as a major hub for IT, finance, and consulting, the need for skilled data analysts continues to grow. Our course combines foundational learning with advanced practical exposure to ensure you're ready for real-world challenges. \n\n The course emphasizes hands-on experience by covering Python for data transformation and automation, SQL for extracting insights from structured databases, Excel for applied business analytics, Tableau and Power BI for dashboarding and visualization, and statistics and predictive modelling for data-driven decision-making."
    , instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
        , isDirector: true
      }
    ],
    outcomes: [
      "Build a portfolio of analytics projects that reflect real business challenges and solutions.",
      "Solve business case problems using data analysis and predictive models.",
      "Design and publish business dashboards using Tableau and Power BI.",
      "Use Python libraries such as Pandas and Matplotlib to clean and visualize large datasets.",
      "Write and optimize SQL queries to retrieve and manipulate data from relational databases.",
      "Understand key analytics principles like data structures, sampling techniques, probability, and descriptive statistics.",
      
    ],
    curriculum: [
      {
        id: "m1",
        title: "Advance Excel",
        duration: "28 hrs",
        topics: [
          { id: "t1", title: "Data Hygiene – Clean, structure, and prepare your dataset", duration: "1.25 hrs" },
          { id: "t2", title: "Formatting – Number and table formatting for clarity", duration: "1.25 hrs" },
          { id: "t3", title: "Filtering & Sorting – Auto filters, advanced filters, custom sorting", duration: "1.5 hrs" },
          { id: "t4", title: "Cell Referencing – Relative, absolute references & formula handling", duration: "1.5 hrs" },
          { id: "t5", title: "Basic Functions – SUM, AVERAGE, COUNT, PRODUCT, etc.", duration: "1.75 hrs" },
          { id: "t6", title: "Date Functions – TODAY, DATEDIF, EOMONTH, WEEKDAY, etc.", duration: "1.5 hrs" },
          { id: "t7", title: "Conditional Functions – SUMIFS, COUNTIFS, AVERAGEIFS", duration: "2 hrs" },
          { id: "t8", title: "Database Functions – DSUM, DAVERAGE using criteria tables", duration: "1.25 hrs" },
          { id: "t9", title: "Dynamic Arrays (Google Sheets) – FILTER, SORT, UNIQUE, TEXTJOIN", duration: "1.5 hrs" },
          { id: "t10", title: "Pivot Tables – Layout, grouping, calculated fields, summarizing", duration: "2.5 hrs" },
          { id: "t11", title: "Charts – Chart creation, types, usage, sparklines", duration: "2 hrs" },
          { id: "t12", title: "Dashboards – Planning, business insights, slicers, summaries", duration: "2.5 hrs" },
          { id: "t13", title: "Logical Functions – IF, AND, OR, IFERROR, SWITCH etc", duration: "1.75 hrs" },
          { id: "t14", title: "Lookup Functions – VLOOKUP, XLOOKUP, MATCH, INDIRECT etc", duration: "2.25 hrs" },
          { id: "t15", title: "Text Functions – LEFT, MID, FIND, SUBSTITUTE, CONCAT etc", duration: "1.5 hrs" },
          { id: "t16", title: "Conditional Formatting – Color scales, data bars, formulas", duration: "1.25 hrs" },
          { id: "t17", title: "Data Validation – Lists, error alerts, dependent dropdowns", duration: "1 hr" },
          { id: "t18", title: "Goal Seek & Solver – Solve optimization and reverse calculations", duration: "1.25 hrs" },
          { id: "t19", title: "Gen AI - How to Use Gen AI in Microsoft Excel, Use Lab.Generative", duration: "0.75 hrs" },
          { id: "t20", title: "ChatGPT - How to use Prompt engineering for Data Analysis", duration: "0.75 hrs" }
        ]
      },

      {
        id: "m2",
        title: "SQL Queries & Relational Database Management",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "SQL Basics: Introduction to Database Management System (DBMS), Introduction to Google BigQuery and MySQL, CRUD Operations", duration: "3 hrs" },
          { id: "t2", title: "Data Manipulation and Transformation: Logical, Numerical, and Mathematical Operators, Conditional Statements", duration: "2.5 hrs" },
          { id: "t3", title: "Data Cleaning: Type Casting, Date/Time Formatting, Text Formatting", duration: "2 hrs" },
          { id: "t4", title: "Pattern Matching: LIKE Operator, REGEXP Functions", duration: "1.5 hrs" },
          { id: "t5", title: "Joins and Relational Databases: Keys, Join Types, Indexing, Normalization", duration: "4 hrs" },
          { id: "t6", title: "Aggregation and Grouping: Aggregate Functions, GROUP BY, CTEs, Variables", duration: "3.5 hrs" },
          { id: "t7", title: "Window Functions: RANK, DENSE_RANK, ROW_NUMBER, LEAD/LAG", duration: "2.5 hrs" },
          { id: "t8", title: "Data Reusability: Views, Stored Procedures, UDFs", duration: "2 hrs" },
          { id: "t9", title: "Subqueries: Simple, EXISTS/NOT EXISTS, Correlated", duration: "1.5 hrs" },
          { id: "t10", title: "Cloud Services: BigQuery Querying, Sharing Results, Permissions, Scheduling", duration: "1.5 hrs" },
          { id: "t11", title: "Online SQL Platforms: MySQL Workbench, Online IDEs, Cloud Storage Integration", duration: "0.5 hrs" }
        ]
      },

      {
        id: "m3",
        title: "Data Visualization Using Tableau (Addon module with extra charges)",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "Introduction to Tableau: Approaching Business Problems, Interface Overview", duration: "2 hrs" },
          { id: "t2", title: "Connecting and Shaping Data: Data Sources, Pivoting, Calculated Fields, Dimensions/Measures", duration: "3 hrs" },
          { id: "t3", title: "Introduction to Basic Charts: Bars, Lines, Scatter Plots, Maps", duration: "2 hrs" },
          { id: "t4", title: "Working With Marks Card: Color, Size, Label, Detail, Tooltip", duration: "1.5 hrs" },
          { id: "t5", title: "Different Filters in Tableau: Quick Filters, Context Filters, Data Source Filters", duration: "2 hrs" },
          { id: "t6", title: "Calculated Fields: Summarization, String Manipulation, Date, Logical Functions", duration: "2.5 hrs" },
          { id: "t7", title: "Combining Tables: Joins, Unions, Blending", duration: "2 hrs" },
          { id: "t8", title: "Table Calculations: Primary and Secondary Calculations", duration: "1.5 hrs" },
          { id: "t9", title: "Parameters: Dimension, Measure, Sort, TopN, Date", duration: "1.5 hrs" },
          { id: "t10", title: "Groups & Sets: Creating and Applying", duration: "1 hr" },
          { id: "t11", title: "Analytics: Forecasting, Trend Lines, Clustering", duration: "2 hrs" },
          { id: "t12", title: "Dashboard Building & Actions: Filters, Highlights, Navigation", duration: "2.5 hrs" },
          { id: "t13", title: "Projects: RFM Analysis, Customer Retention Dashboard", duration: "1.5 hrs" }
        ]
      }
      ,

      {
        id: "m4",
        title: "Data Visualization Using Power BI",
        duration: "28 hrs",
        topics: [
          { id: "t1", title: "Introduction: Data Visualization, Interface, Business Problem-Solving", duration: "3 hrs" },
          { id: "t2", title: "Connecting & Shaping Data: Power Query Cleaning, Transformation, Append/Merge", duration: "4.5 hrs" },
          { id: "t3", title: "Data Modeling: Normalization, Relationships, Filter Flow", duration: "4 hrs" },
          { id: "t4", title: "DAX Analysis: Calculated Columns/Measures, Functions, Time Intelligence", duration: "6 hrs" },
          { id: "t5", title: "Visualization: Interactive Reports, Charts, Slicers, Drillthroughs", duration: "5 hrs" },
          { id: "t6", title: "AI & Custom Visuals: Decomposition Trees, Q&A, Key Influencers", duration: "2 hrs" },
          { id: "t7", title: "Deployment & Security: Power BI Service, Refresh Schedules, RLS", duration: "2.5 hrs" },
          { id: "t8", title: "SQL Integration: Database Connections, Custom Queries", duration: "1 hr" }
        ]
      }
      ,

      {
        id: "m5",
        title: "Python for Data Science",
        duration: "36 hrs",
        topics: [
          { id: "t1", title: "Introduction to Python: Installation, IDEs (VS Code, Jupyter)", duration: "2 hrs" },
          { id: "t2", title: "Core Data Types: Numbers, Strings, Booleans", duration: "3 hrs" },
          { id: "t3", title: "Advanced Data Structures: Lists, Tuples, Sets, Dictionaries", duration: "4 hrs" },
          { id: "t4", title: "Program Control: Conditionals, Loops, Comprehensions", duration: "3 hrs" },
          { id: "t5", title: "Functions & NumPy: Custom Functions, Vectorized Operations", duration: "3.5 hrs" },
          { id: "t6", title: "Pandas Basics: DataFrame Operations, Data Cleaning", duration: "4 hrs" },
          { id: "t7", title: "Pandas Advanced: GroupBy, Merging, Pivoting", duration: "3.5 hrs" },
          { id: "t8", title: "EDA: Univariate/Bivariate Analysis, Correlation", duration: "3 hrs" },
          { id: "t9", title: "Linear Regression: Ad Revenue Prediction Project", duration: "2.5 hrs" },
          { id: "t10", title: "Logistic Regression: Click-Through Rate Prediction Project", duration: "2.5 hrs" },
          { id: "t11", title: "Decision Trees: Used Car Pricing Project", duration: "2 hrs" },
          { id: "t12", title: "Time Series: Retail Sales Forecasting Project", duration: "2 hrs" },
          { id: "t13", title: "Deployment: API Integration, GitHub, Model Serving", duration: "2 hrs" }
        ]
      }
      ,
      {
        id: "m6",
        title: "4 Months PrepAI",
        duration: "120 days",
        topics: [
          { id: "t1", title: "Unlimited Mock Interviews (Speech-to-Speech)", duration: "6.5 hrs" },
          { id: "t2", title: "ATS-Friendly Resume Builder", duration: "8.25 hrs" },
          { id: "t3", title: "Unlimited Doubt Clearing (AI Tutor)", duration: "6.75 hrs" },
          { id: "t4", title: "Personalized Learning Plans", duration: "4.5 hrs" },
          { id: "t5", title: "1:1 AI Career Coaching", duration: "4.5 hrs" }
        ]
      }
    ],

    projects: [
      {
        id: "p1",
        title: "How To Choose Ideal Residence Using SQL",
        description: "Master SQL for real estate data analysis. Learn how to use SELECT statements, create databases, and import/export data, while performing calculations and reporting in SQL.",
        image: "https://img.youtube.com/vi/hzxawPxuks8/0.jpg",
        skills: ["SQL ", "SELECT", "CREATE DATABASE", "MySQL Connections", "MySQL Connections", "Data Export", "Excel to MySQL", "CSV Conversion", "SQL LIMIT", "SQL COUNT", "SQL COUNT", "Data Summarization", "Reporting in SQL"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "hzxawPxuks8"
      },
      {
        id: "p2",
        title: "Power BI Live Case Study | Web Analytics",
        description: "Learn to create a Power BI dashboard from scratch. Explore website click analysis, data visualization techniques, filters, fields, and Power Query transformations in Power BI.",
        image: "https://img.youtube.com/vi/-XUN_3Hama0/0.jpg",
        skills: ["Power BI", "Power Query", "Data Transformation", "Filters", "Fields in Power BI", "Power BI Cards", "Power BI Charts", "Bar Charts", "Slicers", "Data Visualization", "Power BI Dashboard", "Date Handling in Power BI"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "-XUN_3Hama0"
      },
      {
        id: "p3",
        title: "Tableau Live Case | WPL Dataset | Identify the Strategies used in WPL Auctions",
        description: "Analyze the Women's Premier League (WPL) auction strategies using Tableau. Learn to create interactive dashboards and visualize key data points for team performance insights.",
        image: "https://img.youtube.com/vi/THyEuZ0xHC8/0.jpg",
        skills: ["Tableau", "Tableau Dashboard", "Tableau Drag and Drop", "Tableau Sheets", "Data Source in Tableau", "Tableau Live and Extract", "Tableau Stories", "Tableau Filters", "Tableau Visualizations", "Tableau Functions", "Tableau Headers"],
        difficulty: "Beginner to Intermediate",
        isPractice: true,
        videoId: "THyEuZ0xHC8"
      },
      {
        id: "p4",
        title: "Analyze Sales of Smartphones on Amazon",
        description: "Analyze smartphone sales data using Excel. Learn to create dashboards, perform quarterly revenue analysis, and uncover insights using key Excel functions.",
        image: "https://img.youtube.com/vi/oWy7ZkS3axE/0.jpg",
        skills: ["Excel Dashboards", "PivotTables", "PivotCharts", " VLOOKUP", "SUMIF", "Data Validation", "Conditional Formatting", "Excel Formulas", " Data Analysis", "Revenue Analysis", "Excel Charts"],
        difficulty: "Beginner to Intermediate",
        videoId: "oWy7ZkS3axE"
      },
      {
        id: "p5",
        title: "AirBNB Business Case Study - Tableau Dashboarding",
        description: "Analyze AirBNB business data and create insightful visualizations using Tableau. Learn key techniques for dashboarding, filtering, and data presentation to drive business decisions.",
        image: "https://img.youtube.com/vi/4cx9_OSv4Fo/0.jpg",
        skills: ["Tableau", "Tableau Dashboarding", "Tableau Dashboarding", "Filters", "Tableau Calculations", "Interactive Dashboards", "Data Connections", "Data Blending", "Tableau Filters"],
        difficulty: "Beginner to Intermediate",
        videoId: "4cx9_OSv4Fo"
      },
      {
        id: "p6",
        title: "Analyzing Netflix Originals & IMDB Scores",
        description: "Analyze Netflix Originals data with SQL, utilizing Window Functions, CTEs, and various SQL queries to explore trends and uncover insights in the dataset.",
        image: "https://img.youtube.com/vi/Wt8jyPvdGRo/0.jpg",
        skills: ["SQL Queries", "Window Functions", "Common Table Expressions (CTEs)", "Date Functions", "JOINs", "GROUP BY", "HAVING", "ORDER BY", "String Functions", "SQL Aggregates"],
        difficulty: "Intermediate",
        videoId: "Wt8jyPvdGRo"
      }
      // {
      //   id: "p6",
      //   title: "Employee Promotion Prediction",
      //   description: " Build a machine learning model to predict employee promotions based on performance and profile attributes",
      //   image: "https://img.youtube.com/vi/vRsoANUaAhI/0.jpg",
      //   skills: ["Classification Models", "Feature Engineering", "Model Evaluation using Python"],
      //   difficulty: "Advanced",
      //   videoId: "vRsoANUaAhI"
      // }
    ]

  },

    {
    id: '21',
    title: "Generative AI Course in Kolkata",
    description: "Looking to advance your career with cutting-edge artificial intelligence skills? The Generative AI Course in Kolkata by Ivy Professional School is designed to help students, developers, and working professionals master generative models like GANs, VAEs, and Transformers through hands-on projects, expert mentorship, and career-focused training. Kolkata is fast becoming a tech and analytics hub, and our generative AI program empowers learners with real-world applications, practical deployment skills, and dedicated placement support to compete in top AI-driven roles.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Data Science",
    students: 5876,
    metaData: {
      title: "Generative AI Course with IIT Guwahati: #1 GenAI Course ",
      description: "Join IIT Guwahati Certified Generative AI course and become job-ready in 18 weeks. Build 15+ GenAI apps on cloud. Get IBM & NASSCOM certified",
      bio: "Learn advanced Gen AI skills, build super-functional apps, get certified by IVY, and become the perfect job candidate in 18 weeks."

    },
    duration: "225 Hours",
    rating: 4.9,
    reviewCount: 5567,
    isFeatured: true,
    slug: "generative-ai-course-kolkata",
    longDescription: " The Generative AI Course in Kolkata is a future-ready, project-based program that focuses on core and advanced concepts in generative artificial intelligence. Learners explore deep learning foundations and move into specialized topics such as GANs (Generative Adversarial Networks), VAEs (Variational Autoencoders), and Transformer-based LLMs like GPT. \n\n  This course is ideal for tech professionals, data scientists, and AI enthusiasts aiming to build real-world AI systems capable of generating text, images, audio, and more. The program combines theoretical understanding with practical labs, making you job-ready in one of the most in-demand domains of AI."
    , outcomes: [
      "Complete end-to-end generative AI projects",
      "Apply ethical AI principles and ensure responsible use",
      "Deploy AI models using Flask/FastAPI and cloud tools",
      "Fine-tune large language models using frameworks like Hugging Face",
      "Work with Transformer models such as GPT for text generation",
      "Implement VAEs for structured data modeling",
      "Build and train GANs for creative tasks like image generation"
    ],
    prerequisites: [
      "Familiarity with basic digital tools and online platforms.",
      "Understanding of high-school level algebra and statistics.",
      "No prior programming experience is needed.",
      "Bachelor’s degree or diploma in a STEM or quantitative field.",
      "Logical thinking and willingness to learn through projects."
    ],
    curriculum: [
      {
        id: "m1",
        title: "GenAI App Builder - Foundation Certificate Program",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "Programming Fundamentals – Python, Data Types, Loops, Functions", duration: "3 hrs" },
          { id: "t2", title: "Important Libraries – Pandas, NumPy, Virtual Environments", duration: "2 hrs" },
          { id: "t3", title: "Data Cleaning and Preprocessing – Hands-on using Pandas", duration: "2 hrs" },
          { id: "t4", title: "Exploratory Data Analysis and Statistical Inference", duration: "2 hrs" },
          { id: "t5", title: "Introduction to Generative AI – Concepts, Types, OpenAI APIs", duration: "2 hrs" },
          { id: "t6", title: "Working with OpenAI API – Text Generation with Python", duration: "2.5 hrs" },
          { id: "t7", title: "Hands-on Projects – Text Generation using Python and OpenAI", duration: "2.5 hrs" },
          { id: "t8", title: "Capstone Project – Build AI App for Text Generation", duration: "3 hrs" }
        ]
      },
      {
        id: "m2",
        title: "Advanced GenAI and Machine Learning",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "Machine Learning Fundamentals – Linear, Decision Trees, k-NN", duration: "2.5 hrs" },
          { id: "t2", title: "Model Building – Classification and Regression Models", duration: "2 hrs" },
          { id: "t3", title: "Deep Learning Concepts – MLP, CNN, RNN, LSTM, GRU", duration: "3 hrs" },
          { id: "t4", title: "Build ChatPal AI – Design Workflow, Prompting, LLMs", duration: "3.5 hrs" },
          { id: "t5", title: "Hands-on – Build and Fine-tune a Chatbot", duration: "2.5 hrs" },
          { id: "t6", title: "Deploy Chatbot with OpenAI API Integration", duration: "2 hrs" },
          { id: "t7", title: "Capstone Project – Build and Deploy ChatPal AI", duration: "3.5 hrs" }
        ]
      },
      {
        id: "m3",
        title: "Advanced AI Integration and Multimodal Applications",
        duration: "30 hrs",
        topics: [
          { id: "t1", title: "SocioGenie AI – Social Media Automation with LangChain", duration: "3 hrs" },
          { id: "t2", title: "Content Generation – Text and Image Automation", duration: "2.5 hrs" },
          { id: "t3", title: "ResumeGen AI – Resume Creation using OpenAI API", duration: "2.5 hrs" },
          { id: "t4", title: "Styling & Formatting – PDF generation with Python", duration: "2 hrs" },
          { id: "t5", title: "EcommImageCraft AI – Image Generation using DALL-E", duration: "3 hrs" },
          { id: "t6", title: "Automated Uploads and Optimization – Cloud and Python Scripts", duration: "3 hrs" },
          { id: "t7", title: "VoiceMate AI – Speech Recognition, TTS, Whisper API", duration: "3.5 hrs" },
          { id: "t8", title: "Newsify AI – Aggregation, Summarization, Deployment", duration: "3.5 hrs" },
          { id: "t9", title: "Capstone Project – Build and Deploy a Multimodal App", duration: "4 hrs" }
        ]
      },
      {
        id: "m4",
        title: "Mastering Multimodal Fusion and GenAI Frameworks",
        duration: "14 hrs",
        topics: [
          { id: "t1", title: "Fusion Techniques – Early, Late, Hybrid with ChatGPT, DALL-E, Whisper", duration: "2 hrs" },
          { id: "t2", title: "Attention Mechanisms & Vision-Language Transformers", duration: "2 hrs" },
          { id: "t3", title: "Progressive GANs, StyleGAN, Meta-learning", duration: "2 hrs" },
          { id: "t4", title: "Model Compression, Knowledge Distillation", duration: "2 hrs" },
          { id: "t5", title: "Hands-on – Creative Collaboration with DALL-E", duration: "2 hrs" },
          { id: "t6", title: "Capstone Project – Unified GenAI Assistant App", duration: "4 hrs" }
        ]
      }
    ]


    ,



    projects: [
      {
        id: "p1",
        title: "Employee Attrition Prediction",
        description: "Use machine learning techniques to predict which employees are likely to leave the organization",
        image: "https://img.youtube.com/vi/NmW1EVedEts/0.jpg",
        skills: ["Classification Models", "Data Preprocessing", "Feature Importance", "Model Evaluation"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "NmW1EVedEts"
      },
      {
        id: "p2",
        title: "Fraud Call Detection using Audio Data",
        description: "Use audio data and neural networks to detect fraudulent calls by analyzing voice patterns and embeddings with deep learning techniques",
        image: "https://img.youtube.com/vi/CeDUuCYfxrs/0.jpg",
        skills: ["Audio Preprocessing", "Feature Extraction with Librosa", "Neural Network Modeling", "Model Evaluation using TensorFlow"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "CeDUuCYfxrs"
      },
      {
        id: "p3",
        title: "Sentiment Analysis with ChatGPT and Python",
        description: "Learn the fundamentals of ChatGPT, sentiment analysis, and how to apply NLP techniques on tweet data using Python for real-world insights",
        image: "https://img.youtube.com/vi/uHSAvl03yf4/0.jpg",
        skills: ["Sentiment Analysis Model", "Bag of Words", "WordCloud Visualization", "Comparison with AI Tools like ChatGPT and Alexa"],
        difficulty: "Intermediate to Advanced",
        isPractice: true,
        videoId: "uHSAvl03yf4"
      },
      {
        id: "p4",
        title: "How to use GenAI in Google Sheet 2024 | AI in Google Sheet (Quick Method) | Beginner to Advance",
        description: "Learn how to set up and use GenAI in Google Sheets for data analysis and automation. The video covers easy setup, practical examples, and advanced features for better decision-making, with troubleshooting tips.",
        image: "https://img.youtube.com/vi/EC1jT0pWxM4/0.jpg",
        skills: ["GenAI", "Google Sheets", "Data Analysis", " AI Integration", "Templates"],
        difficulty: "Beginner to Advanced",
        videoId: "EC1jT0pWxM4"
      },
      {
        id: "p5",
        title: "Build your First GenAI Powered Chatbot with Python | Generative AI | IvyProSchool",
        description: "Learn to build your first GenAI-powered chatbot using Python and Generative AI. This video covers chatbot creation, Python implementation, and real-world applications of AI in conversational interfaces.",
        image: "https://img.youtube.com/vi/v-jQx1acyLQ/0.jpg",
        skills: ["GenAI", "Python", "Chatbot", "Generative AI", "AI Development"],
        difficulty: "Beginner to Advanced",
        videoId: "v-jQx1acyLQ"
      },
      // {
      //   id: "p6",
      //   title: "Employee Promotion Prediction",
      //   description: " Build a machine learning model to predict employee promotions based on performance and profile attributes",
      //   image: "https://img.youtube.com/vi/vRsoANUaAhI/0.jpg",
      //   skills: ["Classification Models", "Feature Engineering", "Model Evaluation using Python"],
      //   difficulty: "Advanced",
      //   videoId: "vRsoANUaAhI"
      // }
    ],
    instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University.",
        isDirector: true

      }
    ],
    aiFeatures: [
      {
        id: "ai1",
        title: "AI Learning Assistant",
        description: "Get personalized help and explanations for complex topics 24/7",
        icon: "bot"
      },
      {
        id: "ai2",
        title: "Intelligent Progress Tracking",
        description: "Our AI analyzes your learning pattern and suggests optimal study schedules",
        icon: "activity"
      },
      {
        id: "ai3",
        title: "Automated Code Review",
        description: "Get instant feedback on your coding assignments with suggestions for improvement",
        icon: "code"
      }
    ],
    faq: [
      {
        question: "Do I need prior coding experience?",
        answer: "No, this bootcamp is designed to take you from zero to job-ready. We start with the basics of Python programming and gradually build up to advanced concepts."
      },
      {
        question: "What is the time commitment?",
        answer: "The bootcamp requires about 20-25 hours per week for 16 weeks. This includes live sessions, assignments, projects, and self-study."
      },
      {
        question: "What kind of job support do you provide?",
        answer: "We provide resume reviews, interview preparation, portfolio building, and connections to our hiring partners. Our career services team works with you individually until you secure a job."
      },
      {
        question: "Can I attend part-time while working a full-time job?",
        answer: "Yes, many of our students work full-time. We provide evening and weekend live sessions, and all sessions are recorded for those who cannot attend live."
      }
    ]
  },


   {
    id: '21',
    title: "Generative AI Course in Bangalore",
    description: "Looking to upskill in the most in-demand AI technologies? The Generative AI Course in Delhi by Ivy Professional School is crafted for professionals, students, and tech enthusiasts aiming to become proficient in advanced AI techniques like GANs, VAEs, and Transformer-based models like GPT. With Delhi emerging as a prominent tech and innovation hub, this program offers hands-on learning, expert mentorship, and placement-focused training to help you build generative AI solutions that power the future of automation, creativity, and intelligence.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Data Science",
    students: 5876,
    metaData: {
      title: "Generative AI Course with IIT Guwahati: #1 GenAI Course ",
      description: "Join IIT Guwahati Certified Generative AI course and become job-ready in 18 weeks. Build 15+ GenAI apps on cloud. Get IBM & NASSCOM certified",
      bio: "Learn advanced Gen AI skills, build super-functional apps, get certified by IVY, and become the perfect job candidate in 18 weeks."

    },
    duration: "225 Hours",
    rating: 4.9,
    reviewCount: 5567,
    isFeatured: true,
    slug: "generative-ai-course-bangalore",
    longDescription: "  The Generative AI Course in Delhi is a specialized, hands-on training program focused on the design, development, and deployment of generative artificial intelligence models. Learners explore deep learning foundations and progress into specialized tools such as GANs (Generative Adversarial Networks), VAEs (Variational Autoencoders), and Large Language Models (LLMs) such as GPT and BERT. \n\n  Ideal for working professionals, developers, and data science enthusiasts, this Delhi-based course bridges theory and practice, preparing you for real-world AI development roles through practical labs, live projects, and capstone assignments"
    , outcomes: [
      "Build and train GANs for image and content generation",
      "Implement VAEs for data modeling and reconstruction",
      "Understand and use Transformer models like GPT for NLP tasks",
      "Fine-tune LLMs using Hugging Face Transformers",
      "Develop and deploy AI models as APIs and web apps",
      "Understand ethical considerations in generative AI",
      "Complete real-world generative AI projects from scratch"
    ],
    prerequisites: [
      "Familiarity with basic digital tools and online platforms.",
      "Understanding of high-school level algebra and statistics.",
      "No prior programming experience is needed.",
      "Bachelor’s degree or diploma in a STEM or quantitative field.",
      "Logical thinking and willingness to learn through projects."
    ],
    curriculum: [
      {
        id: "m1",
        title: "GenAI App Builder - Foundation Certificate Program",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "Programming Fundamentals – Python, Data Types, Loops, Functions", duration: "3 hrs" },
          { id: "t2", title: "Important Libraries – Pandas, NumPy, Virtual Environments", duration: "2 hrs" },
          { id: "t3", title: "Data Cleaning and Preprocessing – Hands-on using Pandas", duration: "2 hrs" },
          { id: "t4", title: "Exploratory Data Analysis and Statistical Inference", duration: "2 hrs" },
          { id: "t5", title: "Introduction to Generative AI – Concepts, Types, OpenAI APIs", duration: "2 hrs" },
          { id: "t6", title: "Working with OpenAI API – Text Generation with Python", duration: "2.5 hrs" },
          { id: "t7", title: "Hands-on Projects – Text Generation using Python and OpenAI", duration: "2.5 hrs" },
          { id: "t8", title: "Capstone Project – Build AI App for Text Generation", duration: "3 hrs" }
        ]
      },
      {
        id: "m2",
        title: "Advanced GenAI and Machine Learning",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "Machine Learning Fundamentals – Linear, Decision Trees, k-NN", duration: "2.5 hrs" },
          { id: "t2", title: "Model Building – Classification and Regression Models", duration: "2 hrs" },
          { id: "t3", title: "Deep Learning Concepts – MLP, CNN, RNN, LSTM, GRU", duration: "3 hrs" },
          { id: "t4", title: "Build ChatPal AI – Design Workflow, Prompting, LLMs", duration: "3.5 hrs" },
          { id: "t5", title: "Hands-on – Build and Fine-tune a Chatbot", duration: "2.5 hrs" },
          { id: "t6", title: "Deploy Chatbot with OpenAI API Integration", duration: "2 hrs" },
          { id: "t7", title: "Capstone Project – Build and Deploy ChatPal AI", duration: "3.5 hrs" }
        ]
      },
      {
        id: "m3",
        title: "Advanced AI Integration and Multimodal Applications",
        duration: "30 hrs",
        topics: [
          { id: "t1", title: "SocioGenie AI – Social Media Automation with LangChain", duration: "3 hrs" },
          { id: "t2", title: "Content Generation – Text and Image Automation", duration: "2.5 hrs" },
          { id: "t3", title: "ResumeGen AI – Resume Creation using OpenAI API", duration: "2.5 hrs" },
          { id: "t4", title: "Styling & Formatting – PDF generation with Python", duration: "2 hrs" },
          { id: "t5", title: "EcommImageCraft AI – Image Generation using DALL-E", duration: "3 hrs" },
          { id: "t6", title: "Automated Uploads and Optimization – Cloud and Python Scripts", duration: "3 hrs" },
          { id: "t7", title: "VoiceMate AI – Speech Recognition, TTS, Whisper API", duration: "3.5 hrs" },
          { id: "t8", title: "Newsify AI – Aggregation, Summarization, Deployment", duration: "3.5 hrs" },
          { id: "t9", title: "Capstone Project – Build and Deploy a Multimodal App", duration: "4 hrs" }
        ]
      },
      {
        id: "m4",
        title: "Mastering Multimodal Fusion and GenAI Frameworks",
        duration: "14 hrs",
        topics: [
          { id: "t1", title: "Fusion Techniques – Early, Late, Hybrid with ChatGPT, DALL-E, Whisper", duration: "2 hrs" },
          { id: "t2", title: "Attention Mechanisms & Vision-Language Transformers", duration: "2 hrs" },
          { id: "t3", title: "Progressive GANs, StyleGAN, Meta-learning", duration: "2 hrs" },
          { id: "t4", title: "Model Compression, Knowledge Distillation", duration: "2 hrs" },
          { id: "t5", title: "Hands-on – Creative Collaboration with DALL-E", duration: "2 hrs" },
          { id: "t6", title: "Capstone Project – Unified GenAI Assistant App", duration: "4 hrs" }
        ]
      }
    ]


    ,



    projects: [
      {
        id: "p1",
        title: "Employee Attrition Prediction",
        description: "Use machine learning techniques to predict which employees are likely to leave the organization",
        image: "https://img.youtube.com/vi/NmW1EVedEts/0.jpg",
        skills: ["Classification Models", "Data Preprocessing", "Feature Importance", "Model Evaluation"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "NmW1EVedEts"
      },
      {
        id: "p2",
        title: "Fraud Call Detection using Audio Data",
        description: "Use audio data and neural networks to detect fraudulent calls by analyzing voice patterns and embeddings with deep learning techniques",
        image: "https://img.youtube.com/vi/CeDUuCYfxrs/0.jpg",
        skills: ["Audio Preprocessing", "Feature Extraction with Librosa", "Neural Network Modeling", "Model Evaluation using TensorFlow"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "CeDUuCYfxrs"
      },
      {
        id: "p3",
        title: "Sentiment Analysis with ChatGPT and Python",
        description: "Learn the fundamentals of ChatGPT, sentiment analysis, and how to apply NLP techniques on tweet data using Python for real-world insights",
        image: "https://img.youtube.com/vi/uHSAvl03yf4/0.jpg",
        skills: ["Sentiment Analysis Model", "Bag of Words", "WordCloud Visualization", "Comparison with AI Tools like ChatGPT and Alexa"],
        difficulty: "Intermediate to Advanced",
        isPractice: true,
        videoId: "uHSAvl03yf4"
      },
      {
        id: "p4",
        title: "How to use GenAI in Google Sheet 2024 | AI in Google Sheet (Quick Method) | Beginner to Advance",
        description: "Learn how to set up and use GenAI in Google Sheets for data analysis and automation. The video covers easy setup, practical examples, and advanced features for better decision-making, with troubleshooting tips.",
        image: "https://img.youtube.com/vi/EC1jT0pWxM4/0.jpg",
        skills: ["GenAI", "Google Sheets", "Data Analysis", " AI Integration", "Templates"],
        difficulty: "Beginner to Advanced",
        videoId: "EC1jT0pWxM4"
      },
      {
        id: "p5",
        title: "Build your First GenAI Powered Chatbot with Python | Generative AI | IvyProSchool",
        description: "Learn to build your first GenAI-powered chatbot using Python and Generative AI. This video covers chatbot creation, Python implementation, and real-world applications of AI in conversational interfaces.",
        image: "https://img.youtube.com/vi/v-jQx1acyLQ/0.jpg",
        skills: ["GenAI", "Python", "Chatbot", "Generative AI", "AI Development"],
        difficulty: "Beginner to Advanced",
        videoId: "v-jQx1acyLQ"
      },
      // {
      //   id: "p6",
      //   title: "Employee Promotion Prediction",
      //   description: " Build a machine learning model to predict employee promotions based on performance and profile attributes",
      //   image: "https://img.youtube.com/vi/vRsoANUaAhI/0.jpg",
      //   skills: ["Classification Models", "Feature Engineering", "Model Evaluation using Python"],
      //   difficulty: "Advanced",
      //   videoId: "vRsoANUaAhI"
      // }
    ],
    instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University.",
        isDirector: true

      }
    ],
    aiFeatures: [
      {
        id: "ai1",
        title: "AI Learning Assistant",
        description: "Get personalized help and explanations for complex topics 24/7",
        icon: "bot"
      },
      {
        id: "ai2",
        title: "Intelligent Progress Tracking",
        description: "Our AI analyzes your learning pattern and suggests optimal study schedules",
        icon: "activity"
      },
      {
        id: "ai3",
        title: "Automated Code Review",
        description: "Get instant feedback on your coding assignments with suggestions for improvement",
        icon: "code"
      }
    ],
    faq: [
      {
        question: "Do I need prior coding experience?",
        answer: "No, this bootcamp is designed to take you from zero to job-ready. We start with the basics of Python programming and gradually build up to advanced concepts."
      },
      {
        question: "What is the time commitment?",
        answer: "The bootcamp requires about 20-25 hours per week for 16 weeks. This includes live sessions, assignments, projects, and self-study."
      },
      {
        question: "What kind of job support do you provide?",
        answer: "We provide resume reviews, interview preparation, portfolio building, and connections to our hiring partners. Our career services team works with you individually until you secure a job."
      },
      {
        question: "Can I attend part-time while working a full-time job?",
        answer: "Yes, many of our students work full-time. We provide evening and weekend live sessions, and all sessions are recorded for those who cannot attend live."
      }
    ]
  },
   {
    id: '21',
    title: "Generative AI Course in Delhi",
    description: "Looking to upskill in the most in-demand AI technologies? The Generative AI Course in Delhi by Ivy Professional School is crafted for professionals, students, and tech enthusiasts aiming to become proficient in advanced AI techniques like GANs, VAEs, and Transformer-based models like GPT. With Delhi emerging as a prominent tech and innovation hub, this program offers hands-on learning, expert mentorship, and placement-focused training to help you build generative AI solutions that power the future of automation, creativity, and intelligence.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Data Science",
    students: 5876,
    metaData: {
      title: "Generative AI Course with IIT Guwahati: #1 GenAI Course ",
      description: "Join IIT Guwahati Certified Generative AI course and become job-ready in 18 weeks. Build 15+ GenAI apps on cloud. Get IBM & NASSCOM certified",
      bio: "Learn advanced Gen AI skills, build super-functional apps, get certified by IVY, and become the perfect job candidate in 18 weeks."

    },
    duration: "225 Hours",
    rating: 4.9,
    reviewCount: 5567,
    isFeatured: true,
    slug: "generative-ai-course-delhi",
    longDescription: "  The Generative AI Course in Delhi is a specialized, hands-on training program focused on the design, development, and deployment of generative artificial intelligence models. Learners explore deep learning foundations and progress into specialized tools such as GANs (Generative Adversarial Networks), VAEs (Variational Autoencoders), and Large Language Models (LLMs) such as GPT and BERT. \n\n  Ideal for working professionals, developers, and data science enthusiasts, this Delhi-based course bridges theory and practice, preparing you for real-world AI development roles through practical labs, live projects, and capstone assignments"
    , outcomes: [
      "Build and train GANs for image and content generation",
      "Implement VAEs for data modeling and reconstruction",
      "Understand and use Transformer models like GPT for NLP tasks",
      "Fine-tune LLMs using Hugging Face Transformers",
      "Develop and deploy AI models as APIs and web apps",
      "Understand ethical considerations in generative AI",
      "Complete real-world generative AI projects from scratch"
    ],
    prerequisites: [
      "Familiarity with basic digital tools and online platforms.",
      "Understanding of high-school level algebra and statistics.",
      "No prior programming experience is needed.",
      "Bachelor’s degree or diploma in a STEM or quantitative field.",
      "Logical thinking and willingness to learn through projects."
    ],
    curriculum: [
      {
        id: "m1",
        title: "GenAI App Builder - Foundation Certificate Program",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "Programming Fundamentals – Python, Data Types, Loops, Functions", duration: "3 hrs" },
          { id: "t2", title: "Important Libraries – Pandas, NumPy, Virtual Environments", duration: "2 hrs" },
          { id: "t3", title: "Data Cleaning and Preprocessing – Hands-on using Pandas", duration: "2 hrs" },
          { id: "t4", title: "Exploratory Data Analysis and Statistical Inference", duration: "2 hrs" },
          { id: "t5", title: "Introduction to Generative AI – Concepts, Types, OpenAI APIs", duration: "2 hrs" },
          { id: "t6", title: "Working with OpenAI API – Text Generation with Python", duration: "2.5 hrs" },
          { id: "t7", title: "Hands-on Projects – Text Generation using Python and OpenAI", duration: "2.5 hrs" },
          { id: "t8", title: "Capstone Project – Build AI App for Text Generation", duration: "3 hrs" }
        ]
      },
      {
        id: "m2",
        title: "Advanced GenAI and Machine Learning",
        duration: "24 hrs",
        topics: [
          { id: "t1", title: "Machine Learning Fundamentals – Linear, Decision Trees, k-NN", duration: "2.5 hrs" },
          { id: "t2", title: "Model Building – Classification and Regression Models", duration: "2 hrs" },
          { id: "t3", title: "Deep Learning Concepts – MLP, CNN, RNN, LSTM, GRU", duration: "3 hrs" },
          { id: "t4", title: "Build ChatPal AI – Design Workflow, Prompting, LLMs", duration: "3.5 hrs" },
          { id: "t5", title: "Hands-on – Build and Fine-tune a Chatbot", duration: "2.5 hrs" },
          { id: "t6", title: "Deploy Chatbot with OpenAI API Integration", duration: "2 hrs" },
          { id: "t7", title: "Capstone Project – Build and Deploy ChatPal AI", duration: "3.5 hrs" }
        ]
      },
      {
        id: "m3",
        title: "Advanced AI Integration and Multimodal Applications",
        duration: "30 hrs",
        topics: [
          { id: "t1", title: "SocioGenie AI – Social Media Automation with LangChain", duration: "3 hrs" },
          { id: "t2", title: "Content Generation – Text and Image Automation", duration: "2.5 hrs" },
          { id: "t3", title: "ResumeGen AI – Resume Creation using OpenAI API", duration: "2.5 hrs" },
          { id: "t4", title: "Styling & Formatting – PDF generation with Python", duration: "2 hrs" },
          { id: "t5", title: "EcommImageCraft AI – Image Generation using DALL-E", duration: "3 hrs" },
          { id: "t6", title: "Automated Uploads and Optimization – Cloud and Python Scripts", duration: "3 hrs" },
          { id: "t7", title: "VoiceMate AI – Speech Recognition, TTS, Whisper API", duration: "3.5 hrs" },
          { id: "t8", title: "Newsify AI – Aggregation, Summarization, Deployment", duration: "3.5 hrs" },
          { id: "t9", title: "Capstone Project – Build and Deploy a Multimodal App", duration: "4 hrs" }
        ]
      },
      {
        id: "m4",
        title: "Mastering Multimodal Fusion and GenAI Frameworks",
        duration: "14 hrs",
        topics: [
          { id: "t1", title: "Fusion Techniques – Early, Late, Hybrid with ChatGPT, DALL-E, Whisper", duration: "2 hrs" },
          { id: "t2", title: "Attention Mechanisms & Vision-Language Transformers", duration: "2 hrs" },
          { id: "t3", title: "Progressive GANs, StyleGAN, Meta-learning", duration: "2 hrs" },
          { id: "t4", title: "Model Compression, Knowledge Distillation", duration: "2 hrs" },
          { id: "t5", title: "Hands-on – Creative Collaboration with DALL-E", duration: "2 hrs" },
          { id: "t6", title: "Capstone Project – Unified GenAI Assistant App", duration: "4 hrs" }
        ]
      }
    ]


    ,



    projects: [
      {
        id: "p1",
        title: "Employee Attrition Prediction",
        description: "Use machine learning techniques to predict which employees are likely to leave the organization",
        image: "https://img.youtube.com/vi/NmW1EVedEts/0.jpg",
        skills: ["Classification Models", "Data Preprocessing", "Feature Importance", "Model Evaluation"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "NmW1EVedEts"
      },
      {
        id: "p2",
        title: "Fraud Call Detection using Audio Data",
        description: "Use audio data and neural networks to detect fraudulent calls by analyzing voice patterns and embeddings with deep learning techniques",
        image: "https://img.youtube.com/vi/CeDUuCYfxrs/0.jpg",
        skills: ["Audio Preprocessing", "Feature Extraction with Librosa", "Neural Network Modeling", "Model Evaluation using TensorFlow"],
        difficulty: "Advanced",
        isPractice: true,
        videoId: "CeDUuCYfxrs"
      },
      {
        id: "p3",
        title: "Sentiment Analysis with ChatGPT and Python",
        description: "Learn the fundamentals of ChatGPT, sentiment analysis, and how to apply NLP techniques on tweet data using Python for real-world insights",
        image: "https://img.youtube.com/vi/uHSAvl03yf4/0.jpg",
        skills: ["Sentiment Analysis Model", "Bag of Words", "WordCloud Visualization", "Comparison with AI Tools like ChatGPT and Alexa"],
        difficulty: "Intermediate to Advanced",
        isPractice: true,
        videoId: "uHSAvl03yf4"
      },
      {
        id: "p4",
        title: "How to use GenAI in Google Sheet 2024 | AI in Google Sheet (Quick Method) | Beginner to Advance",
        description: "Learn how to set up and use GenAI in Google Sheets for data analysis and automation. The video covers easy setup, practical examples, and advanced features for better decision-making, with troubleshooting tips.",
        image: "https://img.youtube.com/vi/EC1jT0pWxM4/0.jpg",
        skills: ["GenAI", "Google Sheets", "Data Analysis", " AI Integration", "Templates"],
        difficulty: "Beginner to Advanced",
        videoId: "EC1jT0pWxM4"
      },
      {
        id: "p5",
        title: "Build your First GenAI Powered Chatbot with Python | Generative AI | IvyProSchool",
        description: "Learn to build your first GenAI-powered chatbot using Python and Generative AI. This video covers chatbot creation, Python implementation, and real-world applications of AI in conversational interfaces.",
        image: "https://img.youtube.com/vi/v-jQx1acyLQ/0.jpg",
        skills: ["GenAI", "Python", "Chatbot", "Generative AI", "AI Development"],
        difficulty: "Beginner to Advanced",
        videoId: "v-jQx1acyLQ"
      },
      // {
      //   id: "p6",
      //   title: "Employee Promotion Prediction",
      //   description: " Build a machine learning model to predict employee promotions based on performance and profile attributes",
      //   image: "https://img.youtube.com/vi/vRsoANUaAhI/0.jpg",
      //   skills: ["Classification Models", "Feature Engineering", "Model Evaluation using Python"],
      //   difficulty: "Advanced",
      //   videoId: "vRsoANUaAhI"
      // }
    ],
    instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: "/assets/pratilk.webp",
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: "/assets/eeshani.webp",
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University.",
        isDirector: true

      }
    ],
    aiFeatures: [
      {
        id: "ai1",
        title: "AI Learning Assistant",
        description: "Get personalized help and explanations for complex topics 24/7",
        icon: "bot"
      },
      {
        id: "ai2",
        title: "Intelligent Progress Tracking",
        description: "Our AI analyzes your learning pattern and suggests optimal study schedules",
        icon: "activity"
      },
      {
        id: "ai3",
        title: "Automated Code Review",
        description: "Get instant feedback on your coding assignments with suggestions for improvement",
        icon: "code"
      }
    ],
    faq: [
      {
        question: "Do I need prior coding experience?",
        answer: "No, this bootcamp is designed to take you from zero to job-ready. We start with the basics of Python programming and gradually build up to advanced concepts."
      },
      {
        question: "What is the time commitment?",
        answer: "The bootcamp requires about 20-25 hours per week for 16 weeks. This includes live sessions, assignments, projects, and self-study."
      },
      {
        question: "What kind of job support do you provide?",
        answer: "We provide resume reviews, interview preparation, portfolio building, and connections to our hiring partners. Our career services team works with you individually until you secure a job."
      },
      {
        question: "Can I attend part-time while working a full-time job?",
        answer: "Yes, many of our students work full-time. We provide evening and weekend live sessions, and all sessions are recorded for those who cannot attend live."
      }
    ]
  },



  

];

const alumni: Alumni[] = [
  {
    id: "a1",
    name: "Pritam Shaw",
    role: "Data Scientist",
    company: "Microsoft",
    image: "/assets/pritam.webp",
    testimonial: "Prateek Sir made SQL feel like an exciting video game—challenging yet rewarding. His guidance, real-world focus, and constant support helped me master SQL with confidence and enjoy every step of the learning journey.",
    courseId: "1",
    linkedin: "https://linkedin.com/in/pritam-kumar-shaw-001029217/"
  },
  {
    id: "a2",
    name: "Pratiksha Chakraborty",
    role: "ML Engineer",
    company: "Google",
    image: "/assets/pratiksha.webp",
    testimonial: "Debjyoti Sir’s interactive and engaging teaching makes learning Python easy and enjoyable. His clear explanations, encouragement, and support build strong problem-solving skills and confidence, helping me apply Python effectively in real-world data science scenarios.",
    courseId: "1",
    videoUrl: "https://youtube.com/embed/dQw4w9WgXcQ",
    linkedin: "https://linkedin.com/in/pratiksha-chakraborty-2013132b7"
  },
  {
    id: "a3",
    name: "Rahul Sharma",
    role: "AI Research Engineer",
    company: "OpenAI",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    testimonial: "The Generative AI Masterclass gave me cutting-edge knowledge that helped me land my dream job at OpenAI. The instructors are truly experts in their field.",
    courseId: "2",
    linkedin: "https://linkedin.com/in/rahulsharma"
  },
  {
    id: "a4",
    name: "Aisha Khan",
    role: "Data Engineering Lead",
    company: "Netflix",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    testimonial: "Coming from a software engineering background, the Data Engineering course gave me the specialized skills to transition to data engineering. Now I'm leading a team at Netflix.",
    courseId: "3",
    videoUrl: "https://youtube.com/embed/dQw4w9WgXcQ",
    linkedin: "https://linkedin.com/in/aishakhan"
  }
];

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sophia Rodriguez",
    role: "Data Scientist",
    company: "Tech Innovations Inc.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    content: "The Data Science bootcamp completely transformed my career. I went from a marketing analyst to a full-fledged data scientist in just 6 months. The hands-on projects and mentorship were invaluable.",
    rating: 5,
    course: "Data Science Bootcamp",
    courseId: "1"
  },
  {
    id: "2",
    name: "James Wilson",
    role: "AI Engineer",
    company: "Future AI",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "The Generative AI course is cutting-edge. I'm now building models I never thought I could. Ivy Professional School truly stays at the forefront of AI education.",
    rating: 5,
    course: "Generative AI Masterclass",
    courseId: "2",
    videoUrl: "https://youtube.com/embed/dQw4w9WgXcQ"
  }
];

export const fetchCourseById = async (slug: string): Promise<Course | undefined> => {
  return courses.find(course => course.slug === slug);
};

export const fetchCourses = async (): Promise<Course[]> => {
  return courses;
};

export const fetchFeaturedCourses = async (): Promise<Course[]> => {
  return courses.filter(course => course.isFeatured);
};

export const fetchCoursesByCategory = async (category: string): Promise<Course[]> => {
  return courses.filter(course => course.category.toLowerCase() === category.toLowerCase());
};

export const fetchAlumniByourse = async (courseId: string): Promise<Alumni[]> => {
  return alumni.filter(alum => alum.courseId === courseId);
};

export const fetchTestimonialsByCategory = async (category?: string): Promise<Testimonial[]> => {
  if (!category) return testimonials;
  return testimonials.filter(testimonial =>
    testimonial.course.toLowerCase().includes(category.toLowerCase())
  );
};

export const fetchTestimonialsByCourse = async (courseId: string): Promise<Testimonial[]> => {
  return testimonials.filter(testimonial => testimonial.courseId === courseId);
};
