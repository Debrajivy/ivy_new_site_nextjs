
import { Topic, TopicCategory, Quiz, Badge, LeaderboardEntry } from "@/types/topic";

export const topicCategories: TopicCategory[] = [
  {
    id: "cat-1",
    name: "Data Science",
    slug: "data-science",
    description: "In-depth articles covering foundational and advanced data science concepts.",
    icon: "database",
  },
  {
    id: "cat-2",
    name: "Machine Learning",
    slug: "machine-learning",
    description: "Explore machine learning algorithms, techniques, and real-world applications.",
    icon: "brain",
  },
  {
    id: "cat-3",
    name: "Deep Learning",
    slug: "deep-learning",
    description: "Advanced neural network architectures and deep learning methodologies.",
    icon: "layers",
  },
  {
    id: "cat-4",
    name: "Generative AI",
    slug: "generative-ai",
    description: "The latest in generative models, diffusion models, and creative AI applications.",
    icon: "image",
  },
  {
    id: "cat-5",
    name: "Data Engineering",
    slug: "data-engineering",
    description: "Building robust data pipelines, ETL processes, and data infrastructures.",
    icon: "code",
  },
  {
    id: "cat-6",
    name: "Data Visualization",
    slug: "data-visualization",
    description: "Techniques for effective data visualization and storytelling with data.",
    icon: "bar-chart",
  },
];

export const topics: Topic[] = [
  {
    id: "topic-1",
    title: "Introduction to Data Science",
    slug: "introduction-to-data-science",
    description: "A comprehensive introduction to the field of data science and its applications.",
    content: `<p>Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from structured and unstructured data. It combines expertise from various fields, including statistics, computer science, and domain knowledge.</p>
      <h2>Key Components of Data Science</h2>
      <p>Data science encompasses several key components:</p>
      <ul>
        <li><strong>Data Collection</strong>: Gathering relevant data from various sources</li>
        <li><strong>Data Cleaning</strong>: Preprocessing and cleaning the data to ensure quality</li>
        <li><strong>Exploratory Data Analysis</strong>: Understanding patterns and relationships in the data</li>
        <li><strong>Statistical Analysis</strong>: Applying statistical methods to derive insights</li>
        <li><strong>Machine Learning</strong>: Building predictive models using algorithms</li>
        <li><strong>Data Visualization</strong>: Creating visual representations to communicate findings</li>
      </ul>
      <p>The field of data science continues to evolve rapidly with advancements in computing power, algorithm development, and the increasing availability of data. Organizations across various industries are leveraging data science to gain competitive advantages, optimize operations, and drive innovation.</p>`,
    categoryId: "cat-1",
    author: "Dr. Sarah Johnson",
    publishDate: "2023-06-15",
    readTime: 8,
    tags: ["data science", "statistics", "beginner"],
    image: "/lovable-uploads/50f2a87a-dc28-44d3-bb6b-ec1d9c5dfaa7.png",
    isPopular: true,
    seoKeywords: ["data science introduction", "data science basics", "data science fundamentals"],
    seoDescription: "Learn the fundamentals of data science, including key concepts, methods, and applications in this comprehensive introduction.",
  },
  {
    id: "topic-2",
    title: "Supervised vs Unsupervised Learning",
    slug: "supervised-vs-unsupervised-learning",
    description: "Understanding the key differences between supervised and unsupervised machine learning approaches.",
    content: `<p>Machine learning algorithms can be categorized into supervised and unsupervised learning based on how they learn from data.</p>
      <h2>Supervised Learning</h2>
      <p>In supervised learning, the algorithm learns from labeled data. It receives both input features and the corresponding target outputs. The goal is to learn a mapping function from inputs to outputs.</p>
      <h3>Key Characteristics:</h3>
      <ul>
        <li>Requires labeled training data</li>
        <li>Predicts outcomes for new data</li>
        <li>Examples include: classification, regression</li>
      </ul>
      <h2>Unsupervised Learning</h2>
      <p>In unsupervised learning, the algorithm works with unlabeled data and finds patterns or structures within the data without explicit guidance.</p>
      <h3>Key Characteristics:</h3>
      <ul>
        <li>Works with unlabeled data</li>
        <li>Discovers hidden patterns or structures</li>
        <li>Examples include: clustering, dimensionality reduction</li>
      </ul>
      <p>Both approaches have their strengths and are suited to different types of problems. The choice between supervised and unsupervised learning depends on the specific task, available data, and desired outcomes.</p>`,
    categoryId: "cat-2",
    author: "Prof. Alex Chen",
    publishDate: "2023-07-20",
    readTime: 12,
    tags: ["machine learning", "algorithms", "supervised learning", "unsupervised learning"],
    image: "/placeholder.svg",
    isPopular: true,
    seoKeywords: ["supervised learning", "unsupervised learning", "machine learning types", "ML algorithms"],
    seoDescription: "Compare supervised and unsupervised learning approaches in machine learning, their key differences, and applications in this comprehensive guide.",
  },
  {
    id: "topic-3",
    title: "Deep Learning Fundamentals",
    slug: "deep-learning-fundamentals",
    description: "Explore the core concepts and architectures in deep learning.",
    content: `<p>Deep learning is a subset of machine learning that uses neural networks with many layers (hence "deep") to analyze various forms of data.</p>
      <h2>Neural Network Basics</h2>
      <p>Neural networks are composed of layers of interconnected nodes or "neurons" that process information. A typical neural network includes:</p>
      <ul>
        <li><strong>Input Layer</strong>: Receives the initial data</li>
        <li><strong>Hidden Layers</strong>: Where the computation happens</li>
        <li><strong>Output Layer</strong>: Produces the final result</li>
      </ul>
      <h2>Common Deep Learning Architectures</h2>
      <p>Several architectures have been developed for specific types of problems:</p>
      <ul>
        <li><strong>Convolutional Neural Networks (CNNs)</strong>: Primarily used for image processing tasks</li>
        <li><strong>Recurrent Neural Networks (RNNs)</strong>: Designed for sequential data like text or time series</li>
        <li><strong>Transformers</strong>: Revolutionary architecture for natural language processing</li>
        <li><strong>Generative Adversarial Networks (GANs)</strong>: Used to generate new content</li>
      </ul>
      <p>Deep learning has revolutionized many fields including computer vision, natural language processing, and reinforcement learning. Despite its power, it typically requires large amounts of data and computational resources.</p>`,
    categoryId: "cat-3",
    author: "Dr. Michael Wang",
    publishDate: "2023-08-05",
    readTime: 15,
    tags: ["deep learning", "neural networks", "AI"],
    image: "/placeholder.svg",
    isPopular: false,
    seoKeywords: ["deep learning basics", "neural networks", "deep learning architectures", "AI fundamentals"],
    seoDescription: "Learn the fundamentals of deep learning, including neural network architectures, training methods, and applications in AI systems.",
  },
  {
    id: "topic-4",
    title: "Introduction to Generative AI Models",
    slug: "introduction-to-generative-ai",
    description: "An overview of generative AI models and their applications.",
    content: `<p>Generative AI refers to artificial intelligence systems that can generate new content, such as images, text, audio, or video, that resembles but is distinct from their training data.</p>
      <h2>Types of Generative Models</h2>
      <p>Several architectures have been developed for generative AI:</p>
      <ul>
        <li><strong>Generative Adversarial Networks (GANs)</strong>: Uses a two-part network of generator and discriminator</li>
        <li><strong>Variational Autoencoders (VAEs)</strong>: Combines aspects of autoencoders with variational inference</li>
        <li><strong>Diffusion Models</strong>: Gradually adds and then removes noise from data</li>
        <li><strong>Transformer-based Models</strong>: Like GPT, uses attention mechanisms for generative tasks</li>
      </ul>
      <h2>Applications of Generative AI</h2>
      <p>Generative AI is revolutionizing many industries:</p>
      <ul>
        <li>Creating realistic images and artwork</li>
        <li>Generating human-like text for content creation</li>
        <li>Synthesizing speech and music</li>
        <li>Developing new drug compounds and materials</li>
        <li>Creating virtual environments for gaming and simulation</li>
      </ul>
      <p>As generative AI continues to advance, it raises important considerations around ethics, authenticity, and the nature of creativity in an AI-augmented world.</p>`,
    categoryId: "cat-4",
    author: "Dr. Lisa Zhang",
    publishDate: "2023-09-12",
    readTime: 10,
    tags: ["generative AI", "GANs", "diffusion models"],
    image: "/placeholder.svg",
    isPopular: true,
    seoKeywords: ["generative AI", "AI content generation", "GANs", "diffusion models", "AI creativity"],
    seoDescription: "Explore generative AI models including GANs, VAEs, and diffusion models, and learn how they're revolutionizing content creation across industries.",
  },
  {
    id: "topic-5",
    title: "Data ETL Pipelines: Best Practices",
    slug: "data-etl-pipelines-best-practices",
    description: "Learn how to build efficient Extract, Transform, Load (ETL) pipelines for data processing.",
    content: `<p>ETL (Extract, Transform, Load) pipelines are crucial components of data engineering that move and prepare data for analysis.</p>
      <h2>The ETL Process</h2>
      <p>The ETL process consists of three main steps:</p>
      <ul>
        <li><strong>Extract</strong>: Collecting data from various sources</li>
        <li><strong>Transform</strong>: Converting data to the appropriate format and structure</li>
        <li><strong>Load</strong>: Storing the processed data in the target system</li>
      </ul>
      <h2>Best Practices for ETL Pipelines</h2>
      <p>To ensure efficient and reliable ETL processes:</p>
      <ul>
        <li><strong>Automation</strong>: Automate pipelines to reduce manual intervention</li>
        <li><strong>Idempotency</strong>: Design pipelines that can be safely rerun</li>
        <li><strong>Data Validation</strong>: Implement checks to ensure data quality</li>
        <li><strong>Monitoring</strong>: Set up alerts for pipeline failures or anomalies</li>
        <li><strong>Documentation</strong>: Maintain clear documentation of data sources and transformations</li>
        <li><strong>Scalability</strong>: Design with growth in mind</li>
      </ul>
      <p>Well-designed ETL pipelines are essential for maintaining a robust data infrastructure that can support various analytical and operational requirements.</p>`,
    categoryId: "cat-5",
    author: "James Wilson",
    publishDate: "2023-10-18",
    readTime: 13,
    tags: ["data engineering", "ETL", "data pipelines"],
    image: "/placeholder.svg",
    isPopular: false,
    seoKeywords: ["ETL pipelines", "data engineering best practices", "data processing", "extract transform load"],
    seoDescription: "Master the best practices for building efficient and scalable ETL pipelines for effective data processing in modern data engineering.",
  },
];

export const quizzes: Quiz[] = [
  {
    id: "quiz-1",
    topicId: "topic-1",
    title: "Data Science Fundamentals Quiz",
    questions: [
      {
        id: "q1-1",
        text: "Which of the following is NOT typically considered a part of the data science process?",
        options: [
          "Data cleaning", 
          "Hardware configuration", 
          "Model training", 
          "Data visualization"
        ],
        correctOption: 1,
        explanation: "Hardware configuration is generally part of IT infrastructure setup rather than the data science process. The data science process typically involves data collection, cleaning, analysis, modeling, and visualization."
      },
      {
        id: "q1-2",
        text: "What is the primary purpose of exploratory data analysis in data science?",
        options: [
          "To deploy machine learning models", 
          "To understand patterns and relationships in data", 
          "To create production-ready code", 
          "To automate data collection"
        ],
        correctOption: 1,
        explanation: "Exploratory Data Analysis (EDA) is performed to understand the underlying patterns, relationships, and anomalies in data before formal modeling begins."
      },
      {
        id: "q1-3",
        text: "Which programming language is NOT commonly used in data science?",
        options: [
          "Python", 
          "R", 
          "COBOL", 
          "SQL"
        ],
        correctOption: 2,
        explanation: "COBOL is an older programming language primarily used in business and administrative systems, not typically used for data science. Python, R, and SQL are all commonly used in data science."
      }
    ]
  },
  {
    id: "quiz-2",
    topicId: "topic-2",
    title: "Machine Learning Approaches Quiz",
    questions: [
      {
        id: "q2-1",
        text: "Which of the following is an example of supervised learning?",
        options: [
          "K-means clustering", 
          "Principal Component Analysis", 
          "Linear Regression", 
          "Association Rules"
        ],
        correctOption: 2,
        explanation: "Linear Regression is a supervised learning algorithm because it requires labeled data to train a model that maps input features to a continuous output value."
      },
      {
        id: "q2-2",
        text: "What type of machine learning is used when you want to find natural groupings in data?",
        options: [
          "Supervised learning", 
          "Unsupervised learning", 
          "Reinforcement learning", 
          "Transfer learning"
        ],
        correctOption: 1,
        explanation: "Unsupervised learning is used to find patterns or groupings in data without predefined labels, such as clustering algorithms that identify natural groups."
      }
    ]
  }
];

export const badges: Badge[] = [
  {
    id: "badge-1",
    name: "Data Science Novice",
    description: "Completed your first data science topic",
    image: "/placeholder.svg",
    requiredPoints: 10
  },
  {
    id: "badge-2",
    name: "Quiz Master",
    description: "Passed 5 quizzes with perfect scores",
    image: "/placeholder.svg",
    requiredPoints: 50
  },
  {
    id: "badge-3",
    name: "Knowledge Explorer",
    description: "Read topics across 3 different categories",
    image: "/placeholder.svg",
    requiredPoints: 100
  },
  {
    id: "badge-4",
    name: "Data Science Scholar",
    description: "Accumulated 500 knowledge points",
    image: "/placeholder.svg",
    requiredPoints: 500
  }
];

export const leaderboard: LeaderboardEntry[] = [
  {
    userId: "user1",
    username: "DataMaster",
    avatar: "/placeholder.svg",
    points: 780,
    badges: 4,
    rank: 1
  },
  {
    userId: "user2",
    username: "AIEnthusiast",
    avatar: "/placeholder.svg",
    points: 645,
    badges: 3,
    rank: 2
  },
  {
    userId: "user3",
    username: "CodeNinja",
    avatar: "/placeholder.svg",
    points: 590,
    badges: 3,
    rank: 3
  },
  {
    userId: "user4",
    username: "DataScientist42",
    avatar: "/placeholder.svg",
    points: 510,
    badges: 2,
    rank: 4
  },
  {
    userId: "user5",
    username: "MLExplorer",
    avatar: "/placeholder.svg",
    points: 475,
    badges: 2,
    rank: 5
  }
];

export const getTopicsByCategory = (categoryId: string) => {
  return topics.filter(topic => topic.categoryId === categoryId);
};

export const getTopic = (slug: string) => {
  return topics.find(topic => topic.slug === slug);
};

export const getCategory = (slug: string) => {
  return topicCategories.find(category => category.slug === slug);
};

export const getTopicQuiz = (topicId: string) => {
  return quizzes.find(quiz => quiz.topicId === topicId);
};

export const getPopularTopics = () => {
  return topics.filter(topic => topic.isPopular);
};
