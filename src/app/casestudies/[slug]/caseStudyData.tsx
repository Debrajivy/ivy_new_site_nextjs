// /app/casestudies/[slug]/caseStudyData.ts (New file for data)

import Case1 from "../../../assests/casestudies/Case1.webp";
import Case2 from "../../../assests/casestudies/Case2.webp";
import Case4 from "../../../assests/casestudies/Case4.webp"; // Using Case4 for Case Study 3 as per your listing code

export const fullCaseStudies = {
  'case-study-1': {
    id: 'case-study-1',
    businessType: 'Industrial Manufacturing Engineering',
    title: 'Enterprise-Wide Training in Data Analytics, Data Science & AI',
    subtitle: 'Empowering employees across all levels to make faster, data-driven business decisions',
    image: Case1.src,
    link: '/',
    fullContent: {
      typeOfBusiness: 'Industrial Manufacturing & Engineering',
      title: 'Enterprise-Wide Training in Data Analytics, Data Science & AI',
      subtitle: 'Empowering employees across all levels to make faster, data-driven business decisions',
      situation: 'The organization is a global leader in industrial solutions, operating across multiple business verticals. While it had access to large volumes of operational and business data, decision-making was often slow and reactive. Reports were delayed, and employees across departments heavily depended on a small set of analysts for insights. This created bottlenecks in problem-solving and hampered overall agility.',
      problem: [
        'Decision-making lagged due to delayed access to critical reports.',
        'Teams relied on external support to generate even basic dashboards and KPIs.',
        'Business managers lacked confidence in using data for decision-making.',
        'Limited knowledge of advanced tools such as AI, automation, and storytelling with data.',
        'Leaders wanted an organization-wide uplift in data literacy to reduce dependence on centralized analytics.',
      ],
      solution: {
        intro: 'Ivy Professional School partnered with the client to design and deliver a tailored Data Analytics, Data Science & AI training program. The program was customized for different departments—finance, operations, HR, and leadership—ensuring relevance to daily workflows.',
        keyAspects: [
          'Customized Training Pathways – Beginner, intermediate, and advanced tracks for learners across roles.',
          'Hands-On Business Problem Solving – Real-world datasets aligned with the company’s manufacturing and service operations.',
          'Effective Dashboarding & Storytelling – Building Power BI dashboards and crafting narratives to support faster leadership decisions.',
          'Automation in Analytics – Training on automating repetitive reporting processes and workflows to save time.',
          'Machine Learning Use Cases – Exposure to ML models for forecasting, anomaly detection, and operational optimization.',
          'Cross-Functional Learning – Interactive workshops where multiple departments collaborated on solving shared business challenges.',
        ],
      },
      impact: [
        '90% improvement in decision-making speed within three months.',
        '60% rise in employee engagement with data as teams became confident in generating and interpreting insights.',
        'Significant reduction in dependency on central analytics teams, enabling self-service reporting.',
        'Automation reduced repetitive reporting time by over 50%, freeing teams to focus on high-value work.',
        'Early adoption of ML in business processes, with teams applying predictive analytics in operations and finance.',
        'Improved cross-department collaboration, as leaders and managers used a common data-driven language.',
        'Faster turnaround on strategic decisions, improving competitiveness in a fast-paced market.',
      ],
    },
  },
  'case-study-2': {
    id: 'case-study-2',
    businessType: 'Steel Manufacturing Engineering',
    title: 'Establishing “Gurukul” – A Centralized Learning & Development Department for Workforce Transformation',
    subtitle: 'Driving productivity, skill enhancement, and revenue growth through a structured, AI-enabled L&D ecosystem',
    image: Case2.src,
    link: '/',
    fullContent: {
      typeOfBusiness: 'Steel Manufacturing & Engineering',
      title: 'Establishing “Gurukul” – A Centralized Learning & Development Department for Workforce Transformation',
      subtitle: 'Driving productivity, skill enhancement, and revenue growth through a structured, AI-enabled L&D ecosystem',
      situation: 'The organization, a leading steel manufacturer with multiple plants across India, faced significant challenges in training and workforce development. Training for labor and machine operators was inconsistent, recruitment across plants was fragmented, and managers lacked tools to make data-driven workforce decisions. Leadership realized the need for a formal Learning & Development (L&D) department that could centralize training, streamline recruitment, and directly link employee development to business growth.',
      problem: [
        'No structured L&D function to oversee workforce capability building.',
        'Training quality varied widely across plants, leading to inefficiencies in machine handling.',
        'Lack of consistent onboarding and development programs for new recruits.',
        'Managers were not equipped with tools to link workforce development to business performance.',
        'Leadership wanted to align training outcomes with measurable revenue impact.',
      ],
      solution: {
        intro: 'Ivy Professional School partnered with the client to design and set up a full-fledged L&D department called Gurukul, making it the backbone of workforce transformation across all plants and departments.',
        keyAspects: [
          'Establishment of Gurukul – Designed the structure, processes, and vision for a centralized L&D department to serve as a strategic partner for growth.',
          'Plant-Wide Training Programs – Standardized machine training for laborers and technical teams, ensuring consistent skills across facilities.',
          'Recruitment Integration – Assisted in hiring strategies for multiple plants and departments, creating a pipeline of skilled talent.',
          'Digital Learning & Tools – Introduced AI-enabled assessments and personalized learning journeys for employees.',
          'Leadership Development – Conducted workshops for managers on data analytics, dashboards, and business storytelling to strengthen decision-making.',
          'Continuous Monitoring – Built a feedback and evaluation framework to measure training impact and refine programs.',
        ],
      },
      impact: [
        'Launched Gurukul as the company’s first centralized L&D department, embedding learning into the organizational DNA.',
        'Improved machine handling efficiency by 40%, reducing errors and downtime across plants.',
        'Accelerated recruitment and onboarding, enabling faster workforce readiness.',
        'Boosted employee engagement scores by 55% within the first six months of Gurukul’s launch.',
        'Enhanced leadership decision-making, linking workforce training directly to revenue outcomes.',
        'Delivered measurable business impact, with better-trained employees driving efficiency, productivity, and profitability.',
      ],
    },
  },
  'case-study-3': {
    id: 'case-study-3',
    businessType: 'Global Retail & Consumer Goods',
    title: 'AI for Leaders: Enabling CxOs & Senior Executives to Drive Enterprise Transformation',
    subtitle: 'Equipping senior leadership across departments with dashboard automation, GenAI, and AI agents for competitive advantage',
    image: Case4.src,
    link: '/',
    fullContent: {
      typeOfBusiness: 'Global Retail & Consumer Goods',
      title: 'AI for Leaders: Enabling CxOs & Senior Executives to Drive Enterprise Transformation',
      subtitle: 'Equipping senior leadership across departments with dashboard automation, GenAI, and AI agents for competitive advantage',
      situation: 'A global retail giant wanted its CxOs and senior executives to move beyond traditional reporting and embrace AI-first decision-making. While the company had strong business intelligence systems, leadership processes were still manual, time-consuming, and reactive. With rapid advances in Generative AI (GenAI) and AI agents, executives recognized the need to reimagine how decisions were made at the enterprise level — across finance, operations, marketing, supply chain, and HR.',
      problem: [
        'CxOs and senior leaders were relying on delayed dashboards and manual insights, slowing strategic actions.',
        'Awareness of GenAI, MCP, and AI agents was limited, creating uncertainty about their enterprise impact.',
        'Leadership wanted practical, hands-on exposure to AI tools rather than abstract theory.',
        'Executives needed a structured framework for prompt engineering to maximize AI value in decision-making.',
        'The organization lacked AI leadership champions to guide transformation across departments.',
      ],
      solution: {
        intro: 'Ivy Professional School designed a cross-functional “AI for Leaders” program tailored specifically for senior leadership, including CxOs, VPs, and department heads. The program was built to blend technical exposure with strategic application, ensuring leaders could adopt AI in ways that directly impacted business outcomes.',
        keyAspects: [
          'Executive Dashboard Automation – Enabling CxOs to track KPIs in real time with self-updating, automated dashboards.',
          'GenAI for Enterprise Leaders – Training on LLMs (ChatGPT, Gemini) for strategic insight generation and scenario testing.',
          'Prompt Engineering Frameworks – Teaching structured prompts tailored to executive needs (e.g., decision briefs, market scans).',
          'AI Agents & MCP – Demonstrating how multi-agent systems and Model Context Protocol can support enterprise workflows.',
          'Cross-Department Use Cases – Finance (forecasting), Operations (process efficiency), HR (talent analytics), Supply Chain (demand planning), Marketing (campaign optimization).',
          'Responsible AI & Governance – Building awareness of risk, compliance, and ethical considerations for leadership-level AI adoption.',
        ],
      },
      impact: [
        'Faster decision-making at the CxO level, reducing strategic reporting delays by over 70%.',
        'High adoption of GenAI tools among senior executives, building a culture of AI-first leadership.',
        'CxOs across functions became AI champions, accelerating enterprise-wide digital transformation.',
        'Improved foresight & agility — leaders simulated business scenarios with GenAI, improving resilience against market volatility.',
        'Cross-department collaboration strengthened, with leaders sharing a unified AI-enabled decision-making framework.',
        'The program positioned the enterprise as a future-ready retail leader, prepared to compete in a GenAI-driven business environment.',
      ],
    },
  },
};

// Function to get static paths for Next.js 13/14 App Router
export function generateStaticParams() {
  return Object.keys(fullCaseStudies).map((slug) => ({
    slug,
  }));
}