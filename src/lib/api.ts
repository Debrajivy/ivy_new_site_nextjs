// Mock API functions to simulate data fetching
import Pratik from "@/assests/pratilk.webp";
import EEshani from "@/assests/eeshani.webp";
import pratiksha from "@/assests/pratiksha.webp"
import pritam from "@/assests/pritam.webp";
export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  students: number;
  duration: string;
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  slug: string;
  longDescription?: string;
  outcomes?: string[];
  curriculum?: Module[];
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
    title: "Executive Generative AI Course with IIT Guwahati",
    description: "Learn advanced Gen AI skills, build super-functional apps, get certified by IIT, and become the perfect job candidate in 18 weeks.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Data Science",
    students: 5876,
    duration: "225 Hours",
    rating: 4.9,
    reviewCount: 5567,
    isFeatured: true,
    slug: "iit-generative-ai-course",
    longDescription: "This Gen AI course teaches you programming fundamentals, introduces you to generative AI and machine learning, and helps you build advanced Gen AI apps with solid practical applications. For instance, you will build a chatbot that can converse like humans, develop an application that automates social media posting, and build an AI assistant that combines text, image, and voice generation.\n\nThis will not only help you gain practical experience but also build a solid portfolio that showcases your skills and expertise to employers. This way, the 18-week course will help you become a Gen AI expert and increase your chances of getting high-paying jobs.\n\nBesides, this Gen AI certification program is made in partnership with E&ICT Academy IIT Guwahati. You will be taught by IIT Guwahati professors, attend a special 3-day campus immersion program at IIT Guwahati, and network with IIT alumni. So, the opportunities are endless."
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
        image: Pratik,
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: EEshani,
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
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
        question: "What kind of job support do you offer?",
        answer: "We provide resume reviews, interview preparation, portfolio building, and connections to our hiring partners. Our career services team works with you individually until you secure a job."
      },
      {
        question: "Can I attend part-time while working a full-time job?",
        answer: "Yes, many of our students work full-time. We offer evening and weekend live sessions, and all sessions are recorded for those who cannot attend live."
      }
    ]
  },
  {
    id: '2',
    title: "Data Science & AI with IIT Guwahati",
    description: "Learn high-value data science skills, work on 50+ projects and case studies, get certified by IIT, and become job-ready in 45 weeks.",
    image: "https://images.unsplash.com/photo-1677442135968-6bb674d4f8a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    category: "Generative AI",
    students: 1876,
    duration: "10 weeks",
    rating: 4.8,
    reviewCount: 432,
    isFeatured: true,
    slug: "iit-data-science-course",
    longDescription: "The Generative AI Masterclass is our cutting-edge program designed to give you practical expertise in building, fine-tuning, and deploying state-of-the-art generative AI models. This course covers the theoretical foundations and practical applications of language models like GPT, image generation models like DALL-E, and multimodal AI systems. You'll learn from industry pioneers who have built and deployed generative AI systems at scale, and graduate with the skills to create your own AI applications that can generate text, images, code, and more.",
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
        image: Pratik,
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: EEshani,
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
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
    title: "Cloud Data Engineering Certification",
    description: "Master data engineering and big data analytics with tools like Hadoop, Spark, Kafka, Hive, etc., to become a certified data engineer and get a guaranteed placement.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Data Engineering",
    students: 1549,
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
        image: Pratik,
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: EEshani,
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
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





    ]
    ,
    projects: [
      {
        id: "p1",
        title: "Build Cloud Data Pipeline Using Databricks",
        description: "This video offers an in-depth introduction with real-world project experience, it outlines the career path, key technologies (Hadoop, Spark, Azure), curriculum breakdown, and practical use cases for aspiring data engineers.",
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
    title: "Data Science with Machine Learning & AI",
    description: "Learn data science and machine learning skills with tools like Python, SQL, R, Tableau, etc., and land promising jobs for data scientist, analyst, or ML engineer roles.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Deep Learning",
    students: 1243,
    duration: "14 weeks",
    rating: 4.8,
    reviewCount: 298,
    isFeatured: true,
    slug: "data-science-and-ml-course",
    longDescription: "Our Deep Learning Specialization takes you on a comprehensive journey through the fascinating world of neural networks and their applications. Starting from the fundamentals of neural networks, you'll progress to mastering convolutional neural networks (CNNs) for computer vision, recurrent neural networks (RNNs) for sequence modeling, and transformers for natural language processing. By the end of this specialization, you'll be able to build, train, and deploy sophisticated deep learning models for a wide range of applications."
    , instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: Pratik,
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: EEshani,
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
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
        title: "Data Visualization Using Tableau",
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










  },
  {
    id: '5',
    title: "Data Visualization Course",
    description: "Learn data science and visualization skills to analyze data, uncover hidden patterns, and tell powerful stories using MySQL, Python, R, Tableau, PowerBI, and more.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Deep Learning",
    students: 1243,
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
        image: Pratik,
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: EEshani,
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
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
        title: "Data Visualization Using Tableau",
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
    title: "Data Analytics with Visualization Certification Course",
    description: "Learn to analyze and visualize data, work on industry projects, earn a prestigious certificate, and become a job-ready data analyst within 12-14 months.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Deep Learning",
    students: 1243,
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
        image: Pratik,
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: EEshani,
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
      }
    ],
    outcomes: [
      "Analyze and manage data using Excel, SQL, Python, Power BI, and Tableau",
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
        title: "Data Visualization Using Tableau",
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
        title: "Excel VBA Automation",
        duration: "26 hrs",
        topics: [
          { id: "t1", title: "Making Macro Do Automated Tasks for You", duration: "6.5 hrs" },
          { id: "t2", title: "Programming Concepts (Variables, Loops, Conditions)", duration: "8.25 hrs" },
          { id: "t3", title: "Analysis Using VBA (Data Cleaning, PivotTables)", duration: "6.75 hrs" },
          { id: "t4", title: "Creating Dashboards (Forms, Dynamic Charts)", duration: "4.5 hrs" }
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
    id: '7',
    title: "Business Analytics Certification Course",
    description: "Learn business analytics with advanced tools like Excel, SQL, Python, R, Tableau, etc., and become a data expert employers want to hire.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Deep Learning",
    students: 1243,
    duration: "14 weeks",
    rating: 4.8,
    reviewCount: 298,
    isFeatured: true,
    slug: "business-analytics-course",
    longDescription: "This business analytics course in India will make you a job-ready data expert in 8 months. You will learn dashboarding and automation in Excel, database management in SQL, data visualization in Tableau, predictive modeling with R, and data science in Python. The course also teaches you business statistics and machine learning essentials like decision trees, ensemble learning, text mining, etc.\n\n But, theoretical knowledge alone is not enough. That’s why we let you solidify what you learn by working on real-life projects. For instance, you will work on several projects related to industries like finance, marketing, retail, automobile, etc.\n\n This business analyst course is ideal for MBA students, engineering students in their third or final year, B.Sc. or M.Sc. students, working professionals in banking, finance, or IT, and undergraduate or postgraduate students studying math, statistics, economics, commerce, or finance."
    , instructors: [
      {
        id: "i1",
        name: "Prateek Agrawal",
        role: "Founder and Director of Ivy Professional School",
        image: Pratik,
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: EEshani,
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
      },
      {
        id: "m4",
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
        id: "m5",
        title: "Excel VBA Automation",
        duration: "26 hrs",
        topics: [
          { id: "t1", title: "Making Macro Do Automated Tasks for You", duration: "6.5 hrs" },
          { id: "t2", title: "Programming Concepts (Variables, Loops, Conditions)", duration: "8.25 hrs" },
          { id: "t3", title: "Analysis Using VBA (Data Cleaning, PivotTables)", duration: "6.75 hrs" },
          { id: "t4", title: "Creating Dashboards (Forms, Dynamic Charts)", duration: "4.5 hrs" }
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
        image: Pratik,
        bio: "Dr. Sharma has over 15 years of experience in data science and machine learning. Before founding Ivy Professional School, he worked as a Senior Data Scientist at Google and Amazon. He holds a Ph.D. in Computer Science from MIT.",
        isFounder: true
      },
      {
        id: "i2",
        name: "Eeshani Agrawal",
        role: "Director of Ivy Professional School",
        image: EEshani,
        bio: "Dr. Desai is a machine learning expert with experience at Microsoft and IBM. She specializes in deep learning and natural language processing. She holds a Ph.D. in AI from Stanford University."
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
        description: "This video offers an in-depth introduction with real-world project experience, it outlines the career path, key technologies (Hadoop, Spark, Azure), curriculum breakdown, and practical use cases for aspiring data engineers.",
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
      "Get certified by IIT Guwahati and boost your professional credibility",
      "Receive 1:1 mentorship, resume support, and lifetime placement assistance to land top jobs"
    ],

    
  },
];

const alumni: Alumni[] = [
  {
    id: "a1",
    name: "Pritam Shaw",
    role: "Data Scientist",
    company: "Microsoft",
    image: pritam,
    testimonial: "Prateek Sir made SQL feel like an exciting video game—challenging yet rewarding. His guidance, real-world focus, and constant support helped me master SQL with confidence and enjoy every step of the learning journey.",
    courseId: "1",
    linkedin: "https://www.linkedin.com/in/pritam-kumar-shaw-001029217/"
  },
  {
    id: "a2",
    name: "Pratiksha Chakraborty",
    role: "ML Engineer",
    company: "Google",
    image: pratiksha,
    testimonial: "Debjyoti Sir’s interactive and engaging teaching makes learning Python easy and enjoyable. His clear explanations, encouragement, and support build strong problem-solving skills and confidence, helping me apply Python effectively in real-world data science scenarios.",
    courseId: "1",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    linkedin: "https://www.linkedin.com/in/pratiksha-chakraborty-2013132b7"
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

export const fetchCourseById = async (slug: string): Promise<Course | undefined> => {
  // Simulate API call
  console.log(`Fetching course with slug: ${slug}`);
  await new Promise(resolve => setTimeout(resolve, 500));
  return courses.find(course => course.slug === slug);
};

export const fetchCourses = async (): Promise<Course[]> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  return courses;
};

export const fetchFeaturedCourses = async (): Promise<Course[]> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  return courses.filter(course => course.isFeatured);
};

export const fetchCoursesByCategory = async (category: string): Promise<Course[]> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  return courses.filter(course => course.category.toLowerCase() === category.toLowerCase());
};

export const fetchAlumniByourse = async (courseId: string): Promise<Alumni[]> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  return alumni.filter(alum => alum.courseId === courseId);
};

export const fetchTestimonialsByCategory = async (category?: string): Promise<Testimonial[]> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  if (!category) return testimonials;
  return testimonials.filter(testimonial =>
    testimonial.course.toLowerCase().includes(category.toLowerCase())
  );
};

export const fetchTestimonialsByCourse = async (courseId: string): Promise<Testimonial[]> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  return testimonials.filter(testimonial => testimonial.courseId === courseId);
};
