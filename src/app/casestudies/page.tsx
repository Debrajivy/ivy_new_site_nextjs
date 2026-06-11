// /app/casestudies/page.tsx
'use client'

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Eye, EyeOff, Building2, BookOpen, Database, CheckCircle2, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import Case1 from "../../assests/casestudies/Case1.webp";
import Case2 from "../../assests/casestudies/Case2.webp";
import Case4 from "../../assests/casestudies/Case4.webp";

// ============================================================
// TYPES
// ============================================================
type ActiveCategory = 'corporate' | 'learning';
type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

const slugifyCaseStudyTitle = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

// ============================================================
// CORPORATE CASE STUDIES DATA
// ============================================================
const corporateCaseStudies = {
  'case-study-1': {
    id: 'case-study-1',
    businessType: 'Industrial Manufacturing Engineering',
    title: 'Enterprise-Wide Training in Data Analytics, Data Science & AI',
    subtitle: 'Empowering employees across all levels to make faster, data-driven business decisions',
    image: Case1.src,
    fullContent: {
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
          "Hands-On Business Problem Solving – Real-world datasets aligned with the company's manufacturing and service operations.",
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
    title: 'Establishing "Gurukul" – A Centralized Learning & Development Department for Workforce Transformation',
    subtitle: 'Driving productivity, skill enhancement, and revenue growth through a structured, AI-enabled L&D ecosystem',
    image: Case2.src,
    fullContent: {
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
        "Launched Gurukul as the company's first centralized L&D department, embedding learning into the organizational DNA.",
        'Improved machine handling efficiency by 40%, reducing errors and downtime across plants.',
        'Accelerated recruitment and onboarding, enabling faster workforce readiness.',
        "Boosted employee engagement scores by 55% within the first six months of Gurukul's launch.",
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
    fullContent: {
      situation: 'A global retail giant wanted its CxOs and senior executives to move beyond traditional reporting and embrace AI-first decision-making. While the company had strong business intelligence systems, leadership processes were still manual, time-consuming, and reactive. With rapid advances in Generative AI (GenAI) and AI agents, executives recognized the need to reimagine how decisions were made at the enterprise level — across finance, operations, marketing, supply chain, and HR.',
      problem: [
        'CxOs and senior leaders were relying on delayed dashboards and manual insights, slowing strategic actions.',
        'Awareness of GenAI, MCP, and AI agents was limited, creating uncertainty about their enterprise impact.',
        'Leadership wanted practical, hands-on exposure to AI tools rather than abstract theory.',
        'Executives needed a structured framework for prompt engineering to maximize AI value in decision-making.',
        'The organization lacked AI leadership champions to guide transformation across departments.',
      ],
      solution: {
        intro: 'Ivy Professional School designed a cross-functional "AI for Leaders" program tailored specifically for senior leadership, including CxOs, VPs, and department heads. The program was built to blend technical exposure with strategic application, ensuring leaders could adopt AI in ways that directly impacted business outcomes.',
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

// ============================================================
// SQL DATA DRILLS DATA
// ============================================================
const sqlDrills = {
  'sql-drill-1': {
    id: 'sql-drill-1',
    number: 1,
    title: 'Department Payroll',
    tool: 'SQL' as const,
    difficulty: 'Beginner' as Difficulty,
    skills: ['INNER JOIN', 'GROUP BY', 'SUM'],
    description: 'Practice SQL JOINs and aggregate functions by calculating the total salary expenditure for each department in a company.',
    setup: "Your dataset contains two tables from a company's HR database:\n\n1. A Department table with the ID and name of each department\n2. An Employee table with the ID, name, salary, joining date, and department reference for each employee",
    schema: {
      Department: [
        { name: 'id', type: 'INT', constraint: 'PK' },
        { name: 'name', type: 'VARCHAR(50)', constraint: '' },
      ],
      Employee: [
        { name: 'id', type: 'INT', constraint: 'PK' },
        { name: 'name', type: 'VARCHAR(50)', constraint: '' },
        { name: 'salary', type: 'DECIMAL(10,2)', constraint: '' },
        { name: 'joining_date', type: 'DATE', constraint: '' },
        { name: 'department_id', type: 'INT', constraint: 'FK' },
      ],
    },
    departmentData: [
      { id: 1, name: 'HR' },
      { id: 2, name: 'Engineering' },
      { id: 3, name: 'Marketing' },
      { id: 4, name: 'Sales' },
      { id: 5, name: 'IT' },
      { id: 6, name: 'Finance' },
      { id: 7, name: 'Graphic Designer' },
      { id: 8, name: 'Data Analyst' },
    ],
    employeeData: [
      { id: 1, name: 'Alice', salary: '70,000', joining_date: '2020-01-15', department_id: 1 },
      { id: 2, name: 'Bob', salary: '85,000', joining_date: '2019-03-22', department_id: 2 },
      { id: 3, name: 'Charlie', salary: '60,000', joining_date: '2021-05-18', department_id: 1 },
      { id: 4, name: 'David', salary: '95,000', joining_date: '2018-07-11', department_id: 3 },
      { id: 5, name: 'Eva', salary: '80,000', joining_date: '2017-09-09', department_id: 2 },
      { id: 6, name: 'Frank', salary: '75,000', joining_date: '2016-11-14', department_id: 3 },
      { id: 7, name: 'Grace', salary: '90,000', joining_date: '2015-02-23', department_id: 1 },
      { id: 8, name: 'Henry', salary: '68,000', joining_date: '2021-04-30', department_id: 2 },
      { id: 9, name: 'Irene', salary: '72,000', joining_date: '2020-06-25', department_id: 1 },
      { id: 10, name: 'Jack', salary: '78,000', joining_date: '2019-08-19', department_id: 3 },
      { id: 11, name: 'Karen', salary: '83,000', joining_date: '2018-10-07', department_id: 4 },
      { id: 12, name: 'Leo', salary: '95,000', joining_date: '2017-12-13', department_id: 1 },
      { id: 13, name: 'Mona', salary: '87,000', joining_date: '2016-03-21', department_id: 2 },
      { id: 14, name: 'Nick', salary: '63,000', joining_date: '2015-05-29', department_id: 5 },
      { id: 15, name: 'Olivia', salary: '77,000', joining_date: '2014-07-15', department_id: 1 },
      { id: 16, name: 'Peter', salary: '82,000', joining_date: '2021-01-18', department_id: 2 },
      { id: 17, name: 'Quinn', salary: '91,000', joining_date: '2020-03-12', department_id: 6 },
      { id: 18, name: 'Rachel', salary: '88,000', joining_date: '2019-09-28', department_id: 1 },
      { id: 19, name: 'Steve', salary: '93,000', joining_date: '2018-11-06', department_id: 2 },
      { id: 20, name: 'Tina', salary: '76,000', joining_date: '2017-04-16', department_id: 3 },
    ],
    task: 'Find the total salary for each department. Your result table should have department_name and total_salary columns.',
    outputColumns: ['department_name', 'total_salary'],
    expectedOutputPreview: [
      { department_name: 'HR', total_salary: '552,000' },
      { department_name: 'Engineering', total_salary: '495,000' },
      { department_name: '…', total_salary: '…' },
    ] as Record<string, string>[],
    hint: undefined as string[] | undefined,
    hintTitle: undefined as string | undefined,
    solution: {
      sql: `SELECT d.name AS department_name,
       SUM(e.salary) AS total_salary
FROM Department d
INNER JOIN Employee e
  ON e.department_id = d.id
GROUP BY d.name;`,
      howItWorks: [
        'INNER JOIN links each employee to their department using the foreign key department_id. Only departments with at least one employee appear in the result.',
        'SUM(salary) adds up all employee salaries within each group.',
        'GROUP BY d.name ensures the aggregation happens per department.',
        'Departments with no employees (Graphic Designer, Data Analyst) are excluded by the INNER JOIN — use a LEFT JOIN if you need to include them with a total of 0 or NULL.',
      ],
      commonMistake: undefined as { title: string; points: string[] } | undefined,
      observation: undefined as { title: string; points: string[] } | undefined,
      result: [
        { department_name: 'Engineering', total_salary: '495,000' },
        { department_name: 'Finance', total_salary: '91,000' },
        { department_name: 'HR', total_salary: '552,000' },
        { department_name: 'IT', total_salary: '63,000' },
        { department_name: 'Marketing', total_salary: '324,000' },
        { department_name: 'Sales', total_salary: '83,000' },
      ] as Record<string, string>[],
    },
  },
  'sql-drill-2': {
    id: 'sql-drill-2',
    number: 2,
    title: 'Skeleton Crew',
    tool: 'SQL' as const,
    difficulty: 'Beginner' as Difficulty,
    skills: ['LEFT JOIN', 'GROUP BY', 'HAVING', 'COUNT'],
    description: 'Identify understaffed departments by finding those with fewer than 2 employees using LEFT JOIN, GROUP BY, and HAVING.',
    setup: "Your dataset contains two tables from a company's HR database:\n\n1. A Department table with the ID and name of each department\n2. An Employee table with the ID, name, salary, joining date, and department reference for each employee",
    schema: {
      Department: [
        { name: 'id', type: 'INT', constraint: 'PK' },
        { name: 'name', type: 'VARCHAR(50)', constraint: '' },
      ],
      Employee: [
        { name: 'id', type: 'INT', constraint: 'PK' },
        { name: 'name', type: 'VARCHAR(50)', constraint: '' },
        { name: 'salary', type: 'DECIMAL(10,2)', constraint: '' },
        { name: 'joining_date', type: 'DATE', constraint: '' },
        { name: 'department_id', type: 'INT', constraint: 'FK' },
      ],
    },
    departmentData: [
      { id: 1, name: 'HR' },
      { id: 2, name: 'Engineering' },
      { id: 3, name: 'Marketing' },
      { id: 4, name: 'Sales' },
      { id: 5, name: 'IT' },
      { id: 6, name: 'Finance' },
      { id: 7, name: 'Graphic Designer' },
      { id: 8, name: 'Data Analyst' },
    ],
    employeeData: [
      { id: 1, name: 'Alice', salary: '70,000', joining_date: '2020-01-15', department_id: 1 },
      { id: 2, name: 'Bob', salary: '85,000', joining_date: '2019-03-22', department_id: 2 },
      { id: 3, name: 'Charlie', salary: '60,000', joining_date: '2021-05-18', department_id: 1 },
      { id: 4, name: 'David', salary: '95,000', joining_date: '2018-07-11', department_id: 3 },
      { id: 5, name: 'Eva', salary: '80,000', joining_date: '2017-09-09', department_id: 2 },
      { id: 6, name: 'Frank', salary: '75,000', joining_date: '2016-11-14', department_id: 3 },
      { id: 7, name: 'Grace', salary: '90,000', joining_date: '2015-02-23', department_id: 1 },
      { id: 8, name: 'Henry', salary: '68,000', joining_date: '2021-04-30', department_id: 2 },
      { id: 9, name: 'Irene', salary: '72,000', joining_date: '2020-06-25', department_id: 1 },
      { id: 10, name: 'Jack', salary: '78,000', joining_date: '2019-08-19', department_id: 3 },
      { id: 11, name: 'Karen', salary: '83,000', joining_date: '2018-10-07', department_id: 4 },
      { id: 12, name: 'Leo', salary: '95,000', joining_date: '2017-12-13', department_id: 1 },
      { id: 13, name: 'Mona', salary: '87,000', joining_date: '2016-03-21', department_id: 2 },
      { id: 14, name: 'Nick', salary: '63,000', joining_date: '2015-05-29', department_id: 5 },
      { id: 15, name: 'Olivia', salary: '77,000', joining_date: '2014-07-15', department_id: 1 },
      { id: 16, name: 'Peter', salary: '82,000', joining_date: '2021-01-18', department_id: 2 },
      { id: 17, name: 'Quinn', salary: '91,000', joining_date: '2020-03-12', department_id: 6 },
      { id: 18, name: 'Rachel', salary: '88,000', joining_date: '2019-09-28', department_id: 1 },
      { id: 19, name: 'Steve', salary: '93,000', joining_date: '2018-11-06', department_id: 2 },
      { id: 20, name: 'Tina', salary: '76,000', joining_date: '2017-04-16', department_id: 3 },
    ],
    task: 'Find the names of the departments which have less than 2 employees. The final result table should have department_name and count_of_employees columns.',
    outputColumns: ['department_name', 'count_of_employees'],
    expectedOutputPreview: [
      { department_name: 'Data Analyst', count_of_employees: '0' },
      { department_name: 'Graphic Designer', count_of_employees: '0' },
      { department_name: '…', count_of_employees: '…' },
    ] as Record<string, string>[],
    hint: [
      'Think carefully about which type of JOIN to use. Some departments may have zero employees — will an INNER JOIN show them?',
      'Remember: WHERE filters rows before grouping, HAVING filters groups after aggregation. Which one works with COUNT?',
    ] as string[] | undefined,
    hintTitle: undefined as string | undefined,
    solution: {
      sql: `SELECT d.name AS department_name,
       COUNT(e.id) AS count_of_employees
FROM Department d
LEFT JOIN Employee e
  ON e.department_id = d.id
GROUP BY d.name
HAVING COUNT(e.id) < 2;`,
      howItWorks: [
        'LEFT JOIN ensures all departments appear in the result, even those with zero employees. An INNER JOIN would silently drop Graphic Designer and Data Analyst since they have no matching rows in the Employee table.',
        'COUNT(e.id) counts only non-NULL employee IDs. For departments with no employees, the LEFT JOIN produces NULL in e.id, so COUNT returns 0 — exactly what we need.',
        'GROUP BY d.name groups the joined rows by department so the COUNT is calculated per department.',
        'HAVING COUNT(e.id) < 2 filters the grouped results to keep only departments where the employee count is 0 or 1. We use HAVING (not WHERE) because the filter applies to an aggregate function that is computed after grouping.',
      ],
      commonMistake: {
        title: 'WHERE vs HAVING',
        points: [
          'WHERE COUNT(e.id) < 2 would cause a syntax error. WHERE operates on individual rows before any grouping happens, so aggregate functions like COUNT are not available yet.',
          'HAVING operates after GROUP BY, on the aggregated groups — making it the correct clause for filtering on COUNT, SUM, AVG, etc.',
        ],
      } as { title: string; points: string[] } | undefined,
      observation: undefined as { title: string; points: string[] } | undefined,
      result: [
        { department_name: 'Data Analyst', count_of_employees: '0' },
        { department_name: 'Graphic Designer', count_of_employees: '0' },
        { department_name: 'Finance', count_of_employees: '1' },
        { department_name: 'IT', count_of_employees: '1' },
        { department_name: 'Sales', count_of_employees: '1' },
      ] as Record<string, string>[],
    },
  },
  'sql-drill-3': {
    id: 'sql-drill-3',
    number: 3,
    title: 'Rank & File',
    tool: 'SQL' as const,
    difficulty: 'Intermediate' as Difficulty,
    skills: ['DENSE_RANK', 'Window Functions', 'CTE', 'FULL OUTER JOIN'],
    description: 'Use window functions to find the second highest and third lowest earners in each department — combined into a single result table.',
    setup: "Your dataset contains two tables from a company's HR database:\n\n1. A Department table with the ID and name of each department\n2. An Employee table with the ID, name, salary, joining date, and department reference for each employee",
    schema: {
      Department: [
        { name: 'id', type: 'INT', constraint: 'PK' },
        { name: 'name', type: 'VARCHAR(50)', constraint: '' },
      ],
      Employee: [
        { name: 'id', type: 'INT', constraint: 'PK' },
        { name: 'name', type: 'VARCHAR(50)', constraint: '' },
        { name: 'salary', type: 'DECIMAL(10,2)', constraint: '' },
        { name: 'joining_date', type: 'DATE', constraint: '' },
        { name: 'department_id', type: 'INT', constraint: 'FK' },
      ],
    },
    departmentData: [
      { id: 1, name: 'HR' },
      { id: 2, name: 'Engineering' },
      { id: 3, name: 'Marketing' },
      { id: 4, name: 'Sales' },
      { id: 5, name: 'IT' },
      { id: 6, name: 'Finance' },
      { id: 7, name: 'Graphic Designer' },
      { id: 8, name: 'Data Analyst' },
    ],
    employeeData: [
      { id: 1, name: 'Alice', salary: '70,000', joining_date: '2020-01-15', department_id: 1 },
      { id: 2, name: 'Bob', salary: '85,000', joining_date: '2019-03-22', department_id: 2 },
      { id: 3, name: 'Charlie', salary: '60,000', joining_date: '2021-05-18', department_id: 1 },
      { id: 4, name: 'David', salary: '95,000', joining_date: '2018-07-11', department_id: 3 },
      { id: 5, name: 'Eva', salary: '80,000', joining_date: '2017-09-09', department_id: 2 },
      { id: 6, name: 'Frank', salary: '75,000', joining_date: '2016-11-14', department_id: 3 },
      { id: 7, name: 'Grace', salary: '90,000', joining_date: '2015-02-23', department_id: 1 },
      { id: 8, name: 'Henry', salary: '68,000', joining_date: '2021-04-30', department_id: 2 },
      { id: 9, name: 'Irene', salary: '72,000', joining_date: '2020-06-25', department_id: 1 },
      { id: 10, name: 'Jack', salary: '78,000', joining_date: '2019-08-19', department_id: 3 },
      { id: 11, name: 'Karen', salary: '83,000', joining_date: '2018-10-07', department_id: 4 },
      { id: 12, name: 'Leo', salary: '95,000', joining_date: '2017-12-13', department_id: 1 },
      { id: 13, name: 'Mona', salary: '87,000', joining_date: '2016-03-21', department_id: 2 },
      { id: 14, name: 'Nick', salary: '63,000', joining_date: '2015-05-29', department_id: 5 },
      { id: 15, name: 'Olivia', salary: '77,000', joining_date: '2014-07-15', department_id: 1 },
      { id: 16, name: 'Peter', salary: '82,000', joining_date: '2021-01-18', department_id: 2 },
      { id: 17, name: 'Quinn', salary: '91,000', joining_date: '2020-03-12', department_id: 6 },
      { id: 18, name: 'Rachel', salary: '88,000', joining_date: '2019-09-28', department_id: 1 },
      { id: 19, name: 'Steve', salary: '93,000', joining_date: '2018-11-06', department_id: 2 },
      { id: 20, name: 'Tina', salary: '76,000', joining_date: '2017-04-16', department_id: 3 },
    ],
    task: 'List the employees who have the second highest salary and the third lowest salary in their respective departments. Give the answers in a single table with the format: department_name | second_highest | third_lowest',
    outputColumns: ['department_name', 'second_highest', 'third_lowest'],
    expectedOutputPreview: [
      { department_name: 'Engineering', second_highest: 'Mona', third_lowest: 'Peter' },
      { department_name: '…', second_highest: '…', third_lowest: '…' },
    ] as Record<string, string>[],
    hint: [
      'Only include departments that have enough employees to satisfy the condition. For example, a department with only 1 employee cannot have a second highest salary.',
      'If the same employee holds both ranks (second highest and third lowest), they should appear in both columns.',
      'Use DENSE_RANK rather than ROW_NUMBER — if two employees share the same salary, they should receive the same rank.',
    ] as string[] | undefined,
    hintTitle: 'Important Notes' as string | undefined,
    solution: {
      sql: `WITH second_highest AS (
    SELECT d.name AS dept_name,
           e.name AS emp_name,
           DENSE_RANK() OVER (
               PARTITION BY d.id
               ORDER BY e.salary DESC
           ) AS rk
    FROM Employee e
    JOIN Department d ON e.department_id = d.id
),
third_lowest AS (
    SELECT d.name AS dept_name,
           e.name AS emp_name,
           DENSE_RANK() OVER (
               PARTITION BY d.id
               ORDER BY e.salary ASC
           ) AS rk
    FROM Employee e
    JOIN Department d ON e.department_id = d.id
)

SELECT
    COALESCE(sh.dept_name, tl.dept_name)
        AS department_name,
    sh.emp_name AS second_highest,
    tl.emp_name AS third_lowest
FROM
    (SELECT dept_name, emp_name
     FROM second_highest WHERE rk = 2) sh
FULL OUTER JOIN
    (SELECT dept_name, emp_name
     FROM third_lowest WHERE rk = 3) tl
ON sh.dept_name = tl.dept_name
ORDER BY department_name;`,
      howItWorks: [
        'CTE second_highest: Uses DENSE_RANK() with ORDER BY salary DESC partitioned by department. The employee(s) at rank 2 have the second highest salary in their department.',
        'CTE third_lowest: Uses DENSE_RANK() with ORDER BY salary ASC partitioned by department. The employee(s) at rank 3 have the third lowest salary in their department.',
        'The main query filters each CTE to the target rank (rk = 2 and rk = 3) and joins them on department name using FULL OUTER JOIN, so departments that qualify for one rank but not the other can still appear.',
        'COALESCE(sh.dept_name, tl.dept_name) ensures the department name is shown regardless of which side of the FULL OUTER JOIN provides it.',
      ],
      commonMistake: {
        title: 'Why DENSE_RANK and not ROW_NUMBER?',
        points: [
          'ROW_NUMBER assigns a unique sequential number to each row, even when salaries are tied. Two employees earning 85,000 would get ranks 2 and 3 arbitrarily.',
          'DENSE_RANK gives tied salaries the same rank and does not skip the next number. Two employees at 85,000 both get rank 2, and the next distinct salary gets rank 3.',
          'For salary-based ranking, DENSE_RANK is usually the correct choice because salary ties should be treated equally.',
        ],
      } as { title: string; points: string[] } | undefined,
      observation: {
        title: 'Interesting Observation',
        points: [
          'In Marketing, Jack (salary 78,000) appears as both the second highest AND the third lowest employee. This is perfectly valid — with only 4 employees (95K, 78K, 76K, 75K), the second from the top and the third from the bottom happen to be the same person.',
          'Departments with fewer than 2 employees (Sales, IT, Finance) have no second highest salary. Departments with fewer than 3 employees also have no third lowest. These departments are excluded from the result.',
        ],
      } as { title: string; points: string[] } | undefined,
      result: [
        { department_name: 'Engineering', second_highest: 'Mona', third_lowest: 'Peter' },
        { department_name: 'HR', second_highest: 'Grace', third_lowest: 'Irene' },
        { department_name: 'Marketing', second_highest: 'Jack', third_lowest: 'Jack' },
      ] as Record<string, string>[],
    },
  },
  'sql-drill-5': {
    id: 'sql-drill-5',
    number: 5,
    title: 'Sales & AOV Trends',
    tool: 'SQL' as const,
    difficulty: 'Intermediate' as Difficulty,
    skills: ['Window Functions', 'LAG', 'CTE', 'GROUP BY'],
    description: 'Analyze monthly sales performance, revenue movement, quantity sold, and AOV trends using SQL window functions.',
    setup: "Your dataset contains two tables from an e-commerce platform:\n\n1. An Orders table with order_id, customer_id, order_date, and status for each order\n2. An Order_Items table with order_item_id, order_id, product_id, quantity, and line_amount for each line item",
    schema: {
      Orders: [
        { name: 'order_id', type: 'INT', constraint: 'PK' },
        { name: 'customer_id', type: 'INT', constraint: '' },
        { name: 'order_date', type: 'DATE', constraint: '' },
        { name: 'status', type: 'VARCHAR(50)', constraint: '' },
      ],
      Order_Items: [
        { name: 'order_item_id', type: 'INT', constraint: 'PK' },
        { name: 'order_id', type: 'INT', constraint: 'FK' },
        { name: 'product_id', type: 'INT', constraint: '' },
        { name: 'quantity', type: 'INT', constraint: '' },
        { name: 'line_amount', type: 'DECIMAL(10,2)', constraint: '' },
      ],
    },
    sampleTables: [
      {
        name: 'Orders',
        rowCount: 'sample',
        headers: ['order_id', 'customer_id', 'order_date', 'status'],
        rows: [
          [1001, 101, '2024-01-10', 'Completed'],
          [1002, 102, '2024-01-18', 'Completed'],
          [1003, 103, '2024-02-05', 'Completed'],
          [1004, 101, '2024-02-20', 'Completed'],
          [1005, 104, '2024-03-08', 'Completed'],
          [1006, 105, '2024-03-19', 'Cancelled'],
          [1007, 102, '2024-04-11', 'Completed'],
          [1008, 106, '2024-04-25', 'Completed'],
        ],
      },
      {
        name: 'Order_Items',
        rowCount: 'sample',
        headers: ['order_item_id', 'order_id', 'product_id', 'quantity', 'line_amount'],
        rows: [
          [1, 1001, 201, 3, '3,000.00'],
          [2, 1001, 202, 2, '1,600.00'],
          [3, 1002, 203, 4, '4,000.00'],
          [4, 1003, 201, 5, '5,000.00'],
          [5, 1004, 204, 2, '2,400.00'],
          [6, 1005, 202, 6, '4,800.00'],
          [7, 1006, 205, 3, '2,700.00'],
          [8, 1007, 203, 5, '5,000.00'],
          [9, 1008, 201, 4, '4,000.00'],
        ],
      },
    ],
    departmentData: [] as { id: number; name: string }[],
    employeeData: [] as { id: number; name: string; salary: string; joining_date: string; department_id: number }[],
    task: 'This drill has two tasks:\n\n1. Monthly Sales Trend — How have total quantity sold and revenue changed month-over-month in the last 12 months? Your result table should have: month_year, revenue, MoM_rev, qty, MoM_qty_sold.\n\n2. Average Order Value (AOV) Trend — How is AOV (revenue ÷ number of orders) trending by month? Your result table should have: month_year, AOV, MoM_AOV.',
    outputColumns: ['month_year', 'revenue', 'MoM_rev', 'qty', 'MoM_qty_sold'],
    expectedOutputPreview: [
      { month_year: 'January, 2024', revenue: '8,600', MoM_rev: 'NULL', qty: '9', MoM_qty_sold: 'NULL' },
      { month_year: 'February, 2024', revenue: '7,400', MoM_rev: '-13.95%', qty: '7', MoM_qty_sold: '-22.22%' },
      { month_year: '…', revenue: '…', MoM_rev: '…', qty: '…', MoM_qty_sold: '…' },
    ] as Record<string, string>[],
    hint: [
      "Use a CTE to aggregate orders joined with order_items by year and month. Exclude cancelled orders using WHERE status <> 'Cancelled'.",
      "LAG() accesses the previous row's value in a defined ORDER BY — no self-join needed. Use ORDER BY yr, mnth (integer columns) rather than the formatted month string to ensure correct chronological ordering.",
      "For AOV (Query 2), compute revenue ÷ COUNT(DISTINCT order_id) inside the CTE, then apply LAG() in the outer query to find the month-over-month change.",
    ] as string[] | undefined,
    hintTitle: 'Hints' as string | undefined,
    solution: {
      sql: `-- Query 1: Monthly Sales Trend
WITH c AS (
  SELECT YEAR(order_date)  AS yr,
         MONTH(order_date) AS mnth,
         CONCAT(MONTHNAME(order_date), ', ', YEAR(order_date)) AS mnthyr,
         ROUND(SUM(line_amount)) AS revenue,
         SUM(quantity) AS qty
  FROM orders AS o
  INNER JOIN order_items AS oi ON oi.order_id = o.order_id
  WHERE status <> 'Cancelled'
  GROUP BY yr, mnth, mnthyr
)
SELECT mnthyr AS month_year,
       revenue,
       CONCAT(ROUND(((revenue - LAG(revenue) OVER (ORDER BY yr, mnth))
              / LAG(revenue) OVER (ORDER BY yr, mnth)) * 100, 2), '%') AS MoM_rev,
       qty,
       CONCAT(ROUND(((qty - LAG(qty) OVER (ORDER BY yr, mnth))
              / LAG(qty) OVER (ORDER BY yr, mnth)) * 100, 2), '%') AS MoM_qty_sold
FROM c;

-- Query 2: Average Order Value (AOV) Trend
WITH c AS (
  SELECT YEAR(order_date)  AS yr,
         MONTH(order_date) AS mnth,
         CONCAT(MONTHNAME(order_date), ', ', YEAR(order_date)) AS mnthyr,
         ROUND(SUM(line_amount)) AS revenue,
         COUNT(DISTINCT oi.order_id) AS count_of_orders,
         ROUND(SUM(line_amount) / COUNT(DISTINCT oi.order_id)) AS AOV
  FROM orders AS o
  INNER JOIN order_items AS oi ON oi.order_id = o.order_id
  WHERE status <> 'Cancelled'
  GROUP BY yr, mnth, mnthyr
)
SELECT mnthyr AS month_year,
       AOV,
       CONCAT(ROUND(((AOV - LAG(AOV) OVER (ORDER BY yr, mnth))
              / LAG(revenue) OVER (ORDER BY yr, mnth)) * 100, 4), '%') AS MoM_AOV
FROM c;`,
      howItWorks: [
        "Query 1 — CTE c: Aggregates orders joined with order_items, grouping by year and month. Excludes cancelled orders using status <> 'Cancelled'. Computes revenue (rounded sum of line_amount) and total quantity sold per month.",
        'Query 1 — MoM_rev: Uses LAG() OVER (ORDER BY yr, mnth) to get the previous month\'s revenue, then calculates the percentage change formatted as a string with a % sign.',
        'Query 1 — MoM_qty_sold: Same LAG() approach applied to qty — divides the change in quantity by the prior month\'s quantity and formats as a percentage.',
        'Query 2 — CTE c: Same base aggregation as Query 1, but also counts distinct orders per month (count_of_orders) and computes AOV as revenue ÷ count_of_orders.',
        'Query 2 — MoM_AOV: Calculates the month-over-month change in AOV relative to the prior month\'s revenue. ROUND() with 4 decimal places preserves precision since AOV deltas are typically smaller in magnitude than raw revenue deltas.',
      ],
      commonMistake: {
        title: 'Why LAG() and not a self-join?',
        points: [
          'A self-join on the prior month requires matching on computed date parts, which is verbose and error-prone at year boundaries (e.g., Dec → Jan).',
          'LAG() is a window function that cleanly accesses the previous row in a defined order — no join, no subquery, and no edge-case month arithmetic needed.',
          'Use ORDER BY yr, mnth (separate integer columns) rather than ORDER BY mnthyr (string) to ensure correct chronological ordering.',
          'For the first month in the result, LAG() returns NULL, so MoM columns will show NULL — this is the expected and correct behavior.',
        ],
      } as { title: string; points: string[] } | undefined,
      observation: {
        title: 'Query 2 — AOV Trend Sample Output',
        points: [
          'January, 2024  | AOV: 4,300 | MoM_AOV: NULL',
          'February, 2024 | AOV: 3,700 | MoM_AOV: -6.9767%',
          'March, 2024    | AOV: 4,800 | MoM_AOV: 14.8649%',
          'April, 2024    | AOV: 4,500 | MoM_AOV: -6.2500%',
        ],
      } as { title: string; points: string[] } | undefined,
      result: [
        { month_year: 'January, 2024', revenue: '8,600', MoM_rev: 'NULL', qty: '9', MoM_qty_sold: 'NULL' },
        { month_year: 'February, 2024', revenue: '7,400', MoM_rev: '-13.95%', qty: '7', MoM_qty_sold: '-22.22%' },
        { month_year: 'March, 2024', revenue: '4,800', MoM_rev: '-35.14%', qty: '6', MoM_qty_sold: '-14.29%' },
        { month_year: 'April, 2024', revenue: '9,000', MoM_rev: '87.50%', qty: '9', MoM_qty_sold: '50.00%' },
      ] as Record<string, string>[],
    },
  },
  'sql-drill-4': {
    id: 'sql-drill-4',
    number: 4,
    title: 'Performance Trends',
    tool: 'SQL' as const,
    difficulty: 'Intermediate' as Difficulty,
    skills: ['Window Functions', 'LAG', 'CTE', 'GROUP BY'],
    description: 'Use window functions and aggregations to analyze monthly sales performance, AOV trends, and returning customer behavior.',
    setup: "Your dataset contains two tables from an e-commerce platform:\n\n1. An orders table with order_id, customer_id, order_date, and status for each order\n2. An order_items table with item_id, order_id, quantity, and line_amount for each line item in the order",
    schema: {
      orders: [
        { name: 'order_id', type: 'INT', constraint: 'PK' },
        { name: 'customer_id', type: 'INT', constraint: 'FK' },
        { name: 'order_date', type: 'DATE', constraint: '' },
        { name: 'status', type: 'VARCHAR(20)', constraint: '' },
      ],
      order_items: [
        { name: 'item_id', type: 'INT', constraint: 'PK' },
        { name: 'order_id', type: 'INT', constraint: 'FK' },
        { name: 'quantity', type: 'INT', constraint: '' },
        { name: 'line_amount', type: 'DECIMAL(10,2)', constraint: '' },
      ],
    },
    sampleTables: [
      {
        name: 'orders',
        rowCount: 'sample',
        headers: ['order_id', 'customer_id', 'order_date', 'status'],
        rows: [
          [1, 101, '2024-01-05', 'Completed'],
          [2, 102, '2024-01-12', 'Completed'],
          [3, 103, '2024-01-18', 'Cancelled'],
          [4, 104, '2024-01-25', 'Completed'],
          [5, 105, '2024-02-03', 'Completed'],
          [6, 106, '2024-02-14', 'Completed'],
          [7, 107, '2024-03-02', 'Completed'],
          [8, 108, '2024-03-19', 'Completed'],
          [9, 109, '2024-04-08', 'Completed'],
          [10, 110, '2024-04-22', 'Completed'],
        ],
      },
      {
        name: 'order_items',
        rowCount: 'sample',
        headers: ['item_id', 'order_id', 'quantity', 'line_amount'],
        rows: [
          [1, 1, 3, '3,600.00'],
          [2, 1, 2, '2,400.00'],
          [3, 2, 5, '6,000.00'],
          [4, 3, 1, '1,100.00'],
          [5, 4, 4, '4,800.00'],
          [6, 5, 2, '2,500.00'],
          [7, 6, 3, '3,100.00'],
          [8, 6, 1, '900.00'],
          [9, 7, 6, '7,200.00'],
          [10, 8, 3, '4,500.00'],
        ],
      },
    ],
    departmentData: [] as { id: number; name: string }[],
    employeeData: [] as { id: number; name: string; salary: string; joining_date: string; department_id: number }[],
    task: 'This drill has two tasks:\n\n1. Monthly Sales Trend — How have total quantity sold and revenue changed month-over-month in the last 12 months? Your result table should have: month_year, revenue, MoM_rev, qty, MoM_qty_sold.\n\n2. Average Order Value (AOV) Trend — How is AOV (revenue ÷ number of orders) trending by month? Your result table should have: month_year, AOV, MoM_AOV.',
    outputColumns: ['month_year', 'revenue', 'MoM_rev', 'qty', 'MoM_qty_sold'],
    expectedOutputPreview: [
      { month_year: 'January, 2024', revenue: '124,500', MoM_rev: 'NULL', qty: '1,840', MoM_qty_sold: 'NULL' },
      { month_year: 'February, 2024', revenue: '118,200', MoM_rev: '-5.06%', qty: '1,710', MoM_qty_sold: '-7.07%' },
      { month_year: '…', revenue: '…', MoM_rev: '…', qty: '…', MoM_qty_sold: '…' },
    ] as Record<string, string>[],
    hint: [
      "Use a CTE to aggregate orders joined with order_items by year and month. Exclude cancelled orders using WHERE status <> 'Cancelled'.",
      "LAG() accesses the previous row's value in a defined ORDER BY — no self-join needed. Use ORDER BY yr, mnth (integer columns) rather than the formatted month string to ensure correct chronological ordering.",
      "For AOV (Query 2), compute revenue ÷ COUNT(DISTINCT order_id) inside the CTE, then apply LAG() in the outer query to find the month-over-month change.",
    ] as string[] | undefined,
    hintTitle: 'Hints' as string | undefined,
    solution: {
      sql: `-- Query 1: Monthly Sales Trend
WITH c AS (
  SELECT YEAR(order_date)  AS yr,
         MONTH(order_date) AS mnth,
         CONCAT(MONTHNAME(order_date), ', ', YEAR(order_date)) AS mnthyr,
         ROUND(SUM(line_amount)) AS revenue,
         SUM(quantity) AS qty
  FROM orders AS o
  INNER JOIN order_items AS oi ON oi.order_id = o.order_id
  WHERE status <> 'Cancelled'
  GROUP BY yr, mnth, mnthyr
)
SELECT mnthyr AS month_year,
       revenue,
       CONCAT(ROUND(((revenue - LAG(revenue) OVER (ORDER BY yr, mnth))
              / LAG(revenue) OVER (ORDER BY yr, mnth)) * 100, 2), '%') AS MoM_rev,
       qty,
       CONCAT(ROUND(((qty - LAG(qty) OVER (ORDER BY yr, mnth))
              / LAG(qty) OVER (ORDER BY yr, mnth)) * 100, 2), '%') AS MoM_qty_sold
FROM c;

-- Query 2: Average Order Value (AOV) Trend
WITH c AS (
  SELECT YEAR(order_date)  AS yr,
         MONTH(order_date) AS mnth,
         CONCAT(MONTHNAME(order_date), ', ', YEAR(order_date)) AS mnthyr,
         ROUND(SUM(line_amount)) AS revenue,
         COUNT(DISTINCT oi.order_id) AS count_of_orders,
         ROUND(SUM(line_amount) / COUNT(DISTINCT oi.order_id)) AS AOV
  FROM orders AS o
  INNER JOIN order_items AS oi ON oi.order_id = o.order_id
  WHERE status <> 'Cancelled'
  GROUP BY yr, mnth, mnthyr
)
SELECT mnthyr AS month_year,
       AOV,
       CONCAT(ROUND(((AOV - LAG(AOV) OVER (ORDER BY yr, mnth))
              / LAG(revenue) OVER (ORDER BY yr, mnth)) * 100, 4), '%') AS MoM_AOV
FROM c;`,
      howItWorks: [
        'Query 1 — CTE c: Aggregates orders joined with order_items, grouping by year and month. Excludes cancelled orders. Computes revenue (rounded sum of line_amount) and total quantity sold per month.',
        "Query 1 — MoM_rev: Uses LAG() OVER (ORDER BY yr, mnth) to get the previous month's revenue, then calculates the percentage change formatted as a string with a % sign.",
        'Query 1 — MoM_qty_sold: Same LAG() approach applied to qty — divides the change in quantity by the prior month\'s quantity and formats as a percentage.',
        'Query 2 — CTE c: Same base aggregation as Query 1, but also counts distinct orders per month (count_of_orders) and computes AOV as revenue ÷ count_of_orders.',
        'Query 2 — MoM_AOV: Calculates the month-over-month change in AOV relative to the prior month\'s revenue. ROUND() with 4 decimal places preserves precision since AOV deltas are typically smaller in magnitude than raw revenue deltas.',
      ],
      commonMistake: {
        title: 'Why LAG() and not a self-join?',
        points: [
          'A self-join on the prior month requires matching on computed date parts, which is verbose and error-prone at year boundaries (e.g., Dec → Jan).',
          'LAG() is a window function that cleanly accesses the previous row in a defined order — no join, no subquery, and no edge-case month arithmetic needed.',
          'Use ORDER BY yr, mnth (separate integer columns) rather than ORDER BY mnthyr (string) to ensure correct chronological ordering.',
          'For the first month in the result, LAG() returns NULL, so MoM columns will show NULL — this is the expected and correct behavior.',
        ],
      } as { title: string; points: string[] } | undefined,
      observation: {
        title: 'Query 2 — AOV Trend Sample Output',
        points: [
          'January, 2024  | AOV: 1,204 | MoM_AOV: NULL',
          'February, 2024 | AOV: 1,178 | MoM_AOV: -2.1527%',
          'March, 2024    | AOV: 1,231 | MoM_AOV: 4.4924%',
          'April, 2024    | AOV: 1,256 | MoM_AOV: 2.0317%',
          '…',
        ],
      } as { title: string; points: string[] } | undefined,
      result: [
        { month_year: 'January, 2024', revenue: '124,500', MoM_rev: 'NULL', qty: '1,840', MoM_qty_sold: 'NULL' },
        { month_year: 'February, 2024', revenue: '118,200', MoM_rev: '-5.06%', qty: '1,710', MoM_qty_sold: '-7.07%' },
        { month_year: 'March, 2024', revenue: '135,800', MoM_rev: '14.89%', qty: '2,010', MoM_qty_sold: '17.54%' },
        { month_year: 'April, 2024', revenue: '141,300', MoM_rev: '4.05%', qty: '2,090', MoM_qty_sold: '3.98%' },
      ] as Record<string, string>[],
    },
  },
  'sql-drill-6': {
    id: 'sql-drill-6',
    number: 6,
    title: 'Merchandising',
    tool: 'SQL' as const,
    difficulty: 'Intermediate' as Difficulty,
    skills: ['JOIN', 'GROUP BY', 'Window Functions', 'CTE'],
    description: 'Analyze product returns, store-level product demand, and return-heavy products to support better merchandising decisions.',
    setup: "Your dataset contains five tables from a retail merchandising system:\n\n1. A Products table with product_id, product_name, and category\n2. A Stores table with store_id and store_name\n3. An Orders table with order_id and the store_id where the order was placed\n4. An Order_Items table with order_item_id, order_id, product_id, and quantity sold\n5. A Returns table with return_id, order_item_id, quantity_returned, and refund_amount",
    schema: {
      Products: [
        { name: 'product_id', type: 'INT', constraint: 'PK' },
        { name: 'product_name', type: 'VARCHAR(100)', constraint: '' },
        { name: 'category', type: 'VARCHAR(50)', constraint: '' },
      ],
      Stores: [
        { name: 'store_id', type: 'INT', constraint: 'PK' },
        { name: 'store_name', type: 'VARCHAR(100)', constraint: '' },
      ],
      Orders: [
        { name: 'order_id', type: 'INT', constraint: 'PK' },
        { name: 'store_id', type: 'INT', constraint: 'FK' },
      ],
      Order_Items: [
        { name: 'order_item_id', type: 'INT', constraint: 'PK' },
        { name: 'order_id', type: 'INT', constraint: 'FK' },
        { name: 'product_id', type: 'INT', constraint: 'FK' },
        { name: 'quantity', type: 'INT', constraint: '' },
      ],
      Returns: [
        { name: 'return_id', type: 'INT', constraint: 'PK' },
        { name: 'order_item_id', type: 'INT', constraint: 'FK' },
        { name: 'quantity_returned', type: 'INT', constraint: '' },
        { name: 'refund_amount', type: 'DECIMAL(10,2)', constraint: '' },
      ],
    },
    sampleTables: [
      {
        name: 'Products',
        rowCount: 'sample',
        headers: ['product_id', 'product_name', 'category'],
        rows: [
          [1, 'Wireless Earbuds', 'Electronics'],
          [2, 'Smart Watch', 'Electronics'],
          [3, 'Denim Jacket', 'Fashion'],
          [4, 'Running Shoes', 'Footwear'],
          [5, 'Backpack', 'Fashion'],
        ],
      },
      {
        name: 'Stores',
        rowCount: 'sample',
        headers: ['store_id', 'store_name'],
        rows: [
          [1, 'Kolkata Store'],
          [2, 'Delhi Store'],
        ],
      },
      {
        name: 'Orders',
        rowCount: 'sample',
        headers: ['order_id', 'store_id'],
        rows: [
          [1001, 1],
          [1002, 1],
          [1003, 2],
          [1004, 2],
        ],
      },
      {
        name: 'Order_Items',
        rowCount: 'sample',
        headers: ['order_item_id', 'order_id', 'product_id', 'quantity'],
        rows: [
          [1, 1001, 1, 20],
          [2, 1001, 4, 15],
          [3, 1002, 3, 10],
          [4, 1003, 2, 25],
          [5, 1003, 5, 15],
          [6, 1004, 1, 10],
        ],
      },
      {
        name: 'Returns',
        rowCount: 'sample',
        headers: ['return_id', 'order_item_id', 'quantity_returned', 'refund_amount'],
        rows: [
          [1, 1, 2, '2,400.00'],
          [2, 2, 1, '900.00'],
          [3, 4, 3, '3,600.00'],
          [4, 5, 1, '750.00'],
        ],
      },
    ],
    departmentData: [] as { id: number; name: string }[],
    employeeData: [] as { id: number; name: string; salary: string; joining_date: string; department_id: number }[],
    task: 'This drill has four tasks:\n\n1. Return Impact — Find the return rate in each product category along with the total and average refund value. Your result table should have: category, return_rate, avg_refund_amount, total_refund_amount.\n\n2. Product Demand by Store — In each store, which products are more in demand based on quantity sold? Find the contribution of each product to qty sold within its store. Your result table should have: store_name, product_name, total_qty, contribution.\n\n3. Product Returns by Store — In each store, which products are returned more? Solve in the same way as Question 2. Your result table should have: store_name, product_name, total_qty, contribution.\n\n4. Insight Question — Is there any product in a store that has both high demand and high return? Answer in 3 lines — no query needed.',
    outputColumns: ['category', 'return_rate', 'avg_refund_amount', 'total_refund_amount'],
    expectedOutputPreview: [
      { category: 'Electronics', return_rate: '8.33', avg_refund_amount: '1200.00', total_refund_amount: '3600.00' },
      { category: 'Fashion', return_rate: '6.25', avg_refund_amount: '750.00', total_refund_amount: '2250.00' },
      { category: '…', return_rate: '…', avg_refund_amount: '…', total_refund_amount: '…' },
    ] as Record<string, string>[],
    hint: [
      'For Q1, start from order_items (it has quantity sold). Use LEFT JOIN with returns so categories with zero returns still appear — INNER JOIN would silently drop them.',
      'For Q2, build a CTE that aggregates total_qty per (store_id, product_id). Then in the outer query, use SUM(total_qty) OVER (PARTITION BY store_name) to get the store-level total for the contribution %.',
      'For Q3, follow the same CTE structure as Q2 but replace SUM(quantity) with SUM(quantity_returned) and use INNER JOIN with returns — you only care about products that were actually returned.',
    ] as string[] | undefined,
    hintTitle: 'Hints' as string | undefined,
    solution: {
      sql: `-- Question 1: Return Impact by Product Category
SELECT category,
       ROUND((SUM(quantity_returned) / SUM(quantity)) * 100, 2) AS return_rate,
       ROUND(AVG(refund_amount), 2) AS avg_refund_amount,
       ROUND(SUM(refund_amount), 2) AS total_refund_amount
FROM order_items AS oi
LEFT JOIN returns AS r ON oi.order_item_id = r.order_item_id
LEFT JOIN products AS p ON p.product_id = oi.product_id
GROUP BY category;

-- Question 2: Product Demand Contribution by Store
WITH c AS (
    SELECT store_id, product_id, SUM(quantity) AS total_qty
    FROM order_items AS oi
    INNER JOIN orders AS o ON oi.order_id = o.order_id
    GROUP BY store_id, product_id
)
SELECT store_name, product_name, total_qty,
       ROUND((total_qty / SUM(total_qty) OVER (PARTITION BY store_name)) * 100, 2) AS contribution
FROM c
INNER JOIN stores AS s ON s.store_id = c.store_id
INNER JOIN products AS p ON p.product_id = c.product_id
ORDER BY store_name, contribution DESC;

-- Question 3: Product Return Contribution by Store
WITH c AS (
    SELECT store_id, product_id, SUM(quantity_returned) AS total_qty
    FROM order_items AS oi
    INNER JOIN orders AS o ON oi.order_id = o.order_id
    INNER JOIN returns AS r ON oi.order_item_id = r.order_item_id
    GROUP BY store_id, product_id
)
SELECT store_name, product_name, total_qty,
       ROUND((total_qty / SUM(total_qty) OVER (PARTITION BY store_name)) * 100, 2) AS contribution
FROM c
INNER JOIN stores AS s ON s.store_id = c.store_id
INNER JOIN products AS p ON p.product_id = c.product_id
ORDER BY store_name, contribution DESC;`,
      howItWorks: [
        'Q1 — LEFT JOIN with returns: Starting from order_items ensures all sold quantity is captured. LEFT JOIN with returns means product categories with no returns still appear in the result. LEFT JOIN with products brings the category name.',
        'Q1 — Return rate: SUM(quantity_returned) / SUM(quantity) * 100 calculates the percentage of sold units that were returned, grouped per category.',
        'Q2 — CTE: Aggregates total_qty sold per (store_id, product_id) pair using INNER JOIN between order_items and orders to link each product to its store.',
        'Q2 — Window function: SUM(total_qty) OVER (PARTITION BY store_name) computes the total quantity sold per store across all its products — enabling each product\'s contribution % to be calculated in the same row without a self-join.',
        'Q3 — INNER JOIN with returns: Unlike Q1 and Q2, here we only care about products that were returned. INNER JOIN filters to returned items only. SUM(quantity_returned) replaces SUM(quantity) for the aggregation.',
      ],
      commonMistake: {
        title: 'LEFT JOIN vs INNER JOIN with Returns',
        points: [
          'In Q1, using INNER JOIN with returns would silently drop product categories that had zero returns — those categories vanish from the result, giving an incomplete picture of return rates.',
          'In Q3, the opposite applies: INNER JOIN is correct because you only want products that were actually returned. LEFT JOIN would pad the result with products that have no returns, distorting the contribution percentages.',
          'Rule of thumb: LEFT JOIN to keep all rows from the left table regardless of a match; INNER JOIN to keep only rows with matches on both sides.',
        ],
      } as { title: string; points: string[] } | undefined,
      observation: {
        title: 'Question 4 — Insight Answer',
        points: [
          'Yes — a product can have both high demand and high return in the same store if it appears near the top in both the Q2 and Q3 results.',
          'This means customers buy it frequently but also return it often, which may indicate quality issues, sizing problems, expectation mismatch, or misleading product descriptions.',
          'Such products should not be removed immediately; the merchandising team should first review return reasons, supplier quality, and customer feedback before making inventory decisions.',
        ],
      } as { title: string; points: string[] } | undefined,
      result: [
        { category: 'Electronics', return_rate: '8.33', avg_refund_amount: '1200.00', total_refund_amount: '3600.00' },
        { category: 'Fashion', return_rate: '6.25', avg_refund_amount: '750.00', total_refund_amount: '2250.00' },
        { category: 'Footwear', return_rate: '5.00', avg_refund_amount: '900.00', total_refund_amount: '1800.00' },
      ] as Record<string, string>[],
    },
  },
  'sql-drill-7': {
    id: 'sql-drill-7',
    number: 7,
    title: 'Cohort Analysis',
    tool: 'SQL' as const,
    difficulty: 'Intermediate' as Difficulty,
    skills: ['View', 'Window Functions', 'LAG', 'DENSE_RANK'],
    description: 'Understand customer retention behavior by analyzing the time gap between first and second orders.',
    setup: "Your dataset contains two tables from an e-commerce platform:\n\n1. A Customers table with customer_id and join_date for each customer\n2. An Orders table with order_id, customer_id, and order_date for each order",
    schema: {
      Customers: [
        { name: 'customer_id', type: 'INT', constraint: 'PK' },
        { name: 'join_date', type: 'DATE', constraint: '' },
      ],
      Orders: [
        { name: 'order_id', type: 'INT', constraint: 'PK' },
        { name: 'customer_id', type: 'INT', constraint: 'FK' },
        { name: 'order_date', type: 'DATE', constraint: '' },
      ],
    },
    sampleTables: [
      {
        name: 'Customers',
        rowCount: '8 rows',
        headers: ['customer_id', 'join_date'],
        rows: [
          [101, '2024-01-01'],
          [102, '2024-01-05'],
          [103, '2024-01-10'],
          [104, '2024-01-12'],
          [105, '2024-01-20'],
          [106, '2024-02-01'],
          [107, '2024-02-10'],
          [108, '2024-02-15'],
        ],
      },
      {
        name: 'Orders',
        rowCount: '16 rows',
        headers: ['order_id', 'customer_id', 'order_date'],
        rows: [
          [1, 101, '2024-01-05'],
          [2, 101, '2024-01-20'],
          [3, 102, '2024-01-10'],
          [4, 102, '2024-02-25'],
          [5, 103, '2024-01-15'],
          [6, 103, '2024-04-10'],
          [7, 104, '2024-01-18'],
          [8, 104, '2024-06-01'],
          [9, 105, '2024-01-25'],
          [10, 105, '2024-02-10'],
          [11, 106, '2024-02-05'],
          [12, 106, '2024-03-25'],
          [13, 107, '2024-02-15'],
          [14, 107, '2024-05-05'],
          [15, 108, '2024-02-20'],
          [16, 108, '2024-07-10'],
        ],
      },
    ],
    departmentData: [] as { id: number; name: string }[],
    employeeData: [] as { id: number; name: string; salary: string; joining_date: string; department_id: number }[],
    task: 'This drill has three steps:\n\n1. Create Cohort Table — Create a SQL view named Cohort_Table that uses LAG() and TIMESTAMPDIFF to find the gap between each customer\'s first and second order, then assigns a cohort label:\n   • Cohort 1: 0–30 days\n   • Cohort 2: 31–60 days\n   • Cohort 3: 61–90 days\n   • Cohort 4: More than 90 days\n\n2. Percentage by Cohort — What percentage of customers fall in each cohort? Your result table should have: cohort, percentage.\n\n3. Average Days per Cohort — What is the average time_interval for each cohort? Your result table should have: cohort, avg_time_interval.',
    outputColumns: ['customer_id', 'join_date', 'order_date', 'time_interval', 'drnk', 'cohort'],
    expectedOutputPreview: [
      { customer_id: '101', join_date: '2024-01-01', order_date: '2024-01-20', time_interval: '15', drnk: '2', cohort: 'Cohort 1' },
      { customer_id: '105', join_date: '2024-01-20', order_date: '2024-02-10', time_interval: '16', drnk: '2', cohort: 'Cohort 1' },
      { customer_id: '…', join_date: '…', order_date: '…', time_interval: '…', drnk: '…', cohort: '…' },
    ] as Record<string, string>[],
    hint: [
      'Use LAG(order_date) OVER (PARTITION BY customer_id ORDER BY order_date) to get the previous order date per customer.',
      'TIMESTAMPDIFF(DAY, lag_value, order_date) calculates the gap in days between consecutive orders.',
      'DENSE_RANK() OVER (PARTITION BY customer_id ORDER BY order_date) numbers orders sequentially — filter WHERE drnk = 2 to isolate each customer\'s second order.',
      'Wrap the LAG + TIMESTAMPDIFF + DENSE_RANK logic in a CTE, then apply the CASE statement in the outer SELECT to assign cohort labels before creating the view.',
    ] as string[] | undefined,
    hintTitle: 'Hints' as string | undefined,
    solution: {
      sql: `-- Step 1: Create Cohort Table (View)
create view cohort_table as
(with c as (
  select c.customer_id, join_date, order_date,
    timestampdiff(day, lag(order_date) over
      (partition by customer_id order by order_date), order_date) as time_interval,
    dense_rank() over (partition by customer_id order by order_date) drnk
  from customers as c
  left join orders as o on o.customer_id = c.customer_id
  order by join_date, customer_id, order_date
)
select *,
  case
    when time_interval <= 30 then "Cohort 1"
    when time_interval <= 60 then "Cohort 2"
    when time_interval <= 90 then "Cohort 3"
    else "Cohort 4"
  end as cohort
from c
where drnk = 2
order by cohort);

-- Step 2: Percentage of Customers in Each Cohort
select cohort,
  concat(round((count(*) / (select count(*) from cohort_table)) * 100, 2), "%") as percentage
from cohort_table
group by cohort
order by cohort;

-- Step 3: Average Days per Cohort
select cohort,
  round(avg(time_interval)) as avg_time_interval
from cohort_table
group by cohort
order by cohort;`,
      howItWorks: [
        'Step 1 — LAG(): Gets the previous order_date for each customer within their own partition ordered by date. The first order has no prior row so LAG() returns NULL — TIMESTAMPDIFF with NULL also returns NULL, which is correct since we only care about the gap to the second order.',
        'Step 1 — TIMESTAMPDIFF(DAY, ...): Computes the number of days between a customer\'s first and second order.',
        'Step 1 — DENSE_RANK(): Numbers each order per customer in chronological order. Filtering WHERE drnk = 2 isolates exactly the second order row per customer, so every customer appears at most once in the view.',
        'Step 1 — CASE: Maps the computed time_interval to a cohort label. Cohort 1 ≤ 30 days, Cohort 2 ≤ 60 days, Cohort 3 ≤ 90 days, Cohort 4 > 90 days.',
        'Step 2: Counts customers in each cohort, divides by the total count from the view, multiplies by 100, and formats as a percentage string using CONCAT.',
        'Step 3: Uses AVG(time_interval) directly on the view — no additional joins needed since time_interval was already computed and stored in the view.',
      ],
      commonMistake: {
        title: 'LAG() Returns NULL for the First Order',
        points: [
          'Every customer\'s first order will have LAG(order_date) = NULL, making TIMESTAMPDIFF return NULL for that row.',
          'This is intentional — the WHERE drnk = 2 filter removes all first-order rows from the view, so NULL time_interval values never appear in the final result.',
          'Do not use COALESCE(LAG(...), order_date) to avoid NULL — it would set time_interval to 0 for first-order rows, which would incorrectly place all first-order customers into Cohort 1.',
        ],
      } as { title: string; points: string[] } | undefined,
      observation: {
        title: 'Step 2 & Step 3 Results',
        points: [
          'Each cohort holds exactly 2 of 8 customers → 25.00% per cohort (perfectly even distribution in this dataset).',
          'Step 2 — Cohort 1: 25.00% | Cohort 2: 25.00% | Cohort 3: 25.00% | Cohort 4: 25.00%',
          'Step 3 — Cohort 1: 16 days avg | Cohort 2: 48 days avg | Cohort 3: 83 days avg | Cohort 4: 137 days avg',
        ],
      } as { title: string; points: string[] } | undefined,
      result: [
        { customer_id: '101', join_date: '2024-01-01', order_date: '2024-01-20', time_interval: '15', drnk: '2', cohort: 'Cohort 1' },
        { customer_id: '105', join_date: '2024-01-20', order_date: '2024-02-10', time_interval: '16', drnk: '2', cohort: 'Cohort 1' },
        { customer_id: '102', join_date: '2024-01-05', order_date: '2024-02-25', time_interval: '46', drnk: '2', cohort: 'Cohort 2' },
        { customer_id: '106', join_date: '2024-02-01', order_date: '2024-03-25', time_interval: '49', drnk: '2', cohort: 'Cohort 2' },
        { customer_id: '103', join_date: '2024-01-10', order_date: '2024-04-10', time_interval: '86', drnk: '2', cohort: 'Cohort 3' },
        { customer_id: '107', join_date: '2024-02-10', order_date: '2024-05-05', time_interval: '80', drnk: '2', cohort: 'Cohort 3' },
        { customer_id: '104', join_date: '2024-01-12', order_date: '2024-06-01', time_interval: '134', drnk: '2', cohort: 'Cohort 4' },
        { customer_id: '108', join_date: '2024-02-15', order_date: '2024-07-10', time_interval: '140', drnk: '2', cohort: 'Cohort 4' },
      ] as Record<string, string>[],
    },
  },
  'sql-drill-8': {
    id: 'sql-drill-8',
    number: 8,
    title: 'Inventory vs. Sales Demand Alignment',
    tool: 'SQL' as const,
    difficulty: 'Intermediate' as Difficulty,
    skills: ['CTE', 'Window Functions', 'SUM OVER', 'IF()'],
    description: 'Evaluate whether each store is maintaining inventory levels in line with monthly product demand.',
    setup: "Your dataset contains three tables from a retail inventory system:\n\n1. An Inventory_Movements table tracking stock added or removed per product per store over time\n2. An Orders table with each order placed at a store\n3. An Order_Items table with the product and quantity sold in each order",
    schema: {
      Inventory_Movements: [
        { name: 'movement_id', type: 'INT', constraint: 'PK' },
        { name: 'store_id', type: 'INT', constraint: '' },
        { name: 'product_id', type: 'INT', constraint: '' },
        { name: 'movement_date', type: 'DATE', constraint: '' },
        { name: 'quantity_delta', type: 'INT', constraint: '' },
      ],
      Orders: [
        { name: 'order_id', type: 'INT', constraint: 'PK' },
        { name: 'store_id', type: 'INT', constraint: '' },
        { name: 'order_date', type: 'DATE', constraint: '' },
      ],
      Order_Items: [
        { name: 'order_item_id', type: 'INT', constraint: 'PK' },
        { name: 'order_id', type: 'INT', constraint: 'FK' },
        { name: 'product_id', type: 'INT', constraint: '' },
        { name: 'quantity', type: 'INT', constraint: '' },
      ],
    },
    sampleTables: [
      {
        name: 'Inventory_Movements',
        rowCount: '12 rows',
        headers: ['movement_id', 'store_id', 'product_id', 'movement_date', 'quantity_delta'],
        rows: [
          [1, 1, 101, '2024-01-01', 50],
          [2, 1, 101, '2024-02-01', 20],
          [3, 1, 101, '2024-03-01', 15],
          [4, 1, 102, '2024-01-01', 40],
          [5, 1, 102, '2024-02-01', 10],
          [6, 1, 102, '2024-03-01', 5],
          [7, 2, 101, '2024-01-01', 60],
          [8, 2, 101, '2024-02-01', 25],
          [9, 2, 101, '2024-03-01', 20],
          [10, 2, 102, '2024-01-01', 35],
          [11, 2, 102, '2024-02-01', 15],
          [12, 2, 102, '2024-03-01', 10],
        ],
      },
      {
        name: 'Orders',
        rowCount: '12 rows',
        headers: ['order_id', 'store_id', 'order_date'],
        rows: [
          [1, 1, '2024-01-10'],
          [2, 1, '2024-02-12'],
          [3, 1, '2024-03-15'],
          [4, 1, '2024-01-20'],
          [5, 1, '2024-02-22'],
          [6, 1, '2024-03-25'],
          [7, 2, '2024-01-11'],
          [8, 2, '2024-02-13'],
          [9, 2, '2024-03-17'],
          [10, 2, '2024-01-21'],
          [11, 2, '2024-02-23'],
          [12, 2, '2024-03-27'],
        ],
      },
      {
        name: 'Order_Items',
        rowCount: '12 rows',
        headers: ['order_item_id', 'order_id', 'product_id', 'quantity'],
        rows: [
          [1, 1, 101, 48],
          [2, 2, 101, 70],
          [3, 3, 101, 95],
          [4, 4, 102, 25],
          [5, 5, 102, 60],
          [6, 6, 102, 55],
          [7, 7, 101, 58],
          [8, 8, 101, 80],
          [9, 9, 101, 120],
          [10, 10, 102, 34],
          [11, 11, 102, 50],
          [12, 12, 102, 65],
        ],
      },
    ],
    departmentData: [] as { id: number; name: string }[],
    employeeData: [] as { id: number; name: string; salary: string; joining_date: string; department_id: number }[],
    task: 'Write a SQL query that evaluates whether each store maintains inventory levels in line with monthly sales demand.\n\nYour query should:\n1. Calculate the monthly on-hand (cumulative) inventory for each product at each store\n2. Calculate the total monthly sales for each product at each store\n3. Compare inventory with sales and classify as:\n   • "Within Demand" — if inventory is within ±5 units of sales\n   • "Inventory Issue" — otherwise\n\nYour result table should have: store_id, product_id, mnth_yr, classification.',
    outputColumns: ['store_id', 'product_id', 'mnth_yr', 'classification'],
    expectedOutputPreview: [
      { store_id: '1', product_id: '101', mnth_yr: 'January, 2024', classification: 'Within Demand' },
      { store_id: '1', product_id: '101', mnth_yr: 'February, 2024', classification: 'Within Demand' },
      { store_id: '…', product_id: '…', mnth_yr: '…', classification: '…' },
    ] as Record<string, string>[],
    hint: [
      'Start with a CTE that groups inventory_movements by store_id, product_id, year, and month — SUM(quantity_delta) gives the monthly stock change.',
      'Wrap that CTE in a second step and use SUM(on_hand_inventory) OVER (PARTITION BY store_id, product_id ORDER BY yr, mnth) to get the running cumulative inventory.',
      'Write a separate CTE for sales: INNER JOIN orders with order_items, then group by store_id, product_id, year, and month — SUM(quantity) gives monthly sales.',
      'Join the inventory and sales CTEs on store_id, product_id, yr, and mnth_name. Use IF(cumulative BETWEEN sales-5 AND sales+5, "Within Demand", "Inventory Issue") for classification.',
    ] as string[] | undefined,
    hintTitle: 'Hints' as string | undefined,
    solution: {
      sql: `with t as (
  with c as (
    select store_id, product_id,
      year(movement_date) as yr,
      month(movement_date) as mnth,
      monthname(movement_date) as mnth_name,
      sum(quantity_delta) as on_hand_inventory
    from inventory_movements
    group by store_id, product_id,
      year(movement_date), month(movement_date), monthname(movement_date)
    order by store_id, product_id,
      year(movement_date), month(movement_date), monthname(movement_date)
  )
  select *,
    sum(on_hand_inventory) over (
      partition by store_id, product_id
      order by yr, mnth
    ) as cumulative
  from c
),

r as (
  select store_id, product_id,
    year(order_date) as yr,
    monthname(order_date) as mnth_name,
    month(order_date) as mnth,
    sum(quantity) as sales
  from orders o
  inner join order_items as oi on o.order_id = oi.order_id
  group by store_id, product_id,
    year(order_date), monthname(order_date), month(order_date)
)

select t.store_id, t.product_id,
  concat(t.mnth_name, ", ", t.yr) as mnth_yr,
  if(cumulative < (sales + 5) and cumulative > (sales - 5),
    "Within Demand", "Inventory Issue") as classification
from t
inner join r
  on t.store_id = r.store_id
  and t.product_id = r.product_id
  and t.yr = r.yr
  and t.mnth_name = r.mnth_name
order by t.store_id, t.product_id, t.yr, t.mnth;`,
      howItWorks: [
        'CTE c — Monthly inventory delta: Groups inventory_movements by store, product, year, and month. SUM(quantity_delta) captures the net stock change (positive = stock added, negative = stock removed) for each period.',
        'CTE t — Cumulative inventory: Wraps CTE c and applies SUM(on_hand_inventory) OVER (PARTITION BY store_id, product_id ORDER BY yr, mnth) — a running total that represents the actual stock level on hand at the end of each month.',
        'CTE r — Monthly sales: JOINs orders with order_items to bring order_date and quantity together. Groups by store, product, year, and month — SUM(quantity) gives total units sold per product per store each month.',
        'Final SELECT: JOINs t and r on store_id, product_id, yr, and mnth_name. The IF() condition checks whether cumulative inventory falls within ±5 units of monthly sales — labelling it "Within Demand" or "Inventory Issue" accordingly.',
      ],
      commonMistake: {
        title: 'Joining on Both yr and mnth_name',
        points: [
          'Joining only on mnth_name (e.g., "January") without also matching on yr would incorrectly pair January 2024 inventory data with January 2025 sales data if the dataset spans multiple years.',
          'Always join on both the numeric year (yr) and month (mnth or mnth_name) to ensure the comparison is within the correct calendar period.',
          'Using mnth_name for the join (instead of the numeric mnth) is fine here, but be consistent — if the inventory CTE uses MONTHNAME() the sales CTE must use MONTHNAME() too, otherwise the strings won\'t match.',
        ],
      } as { title: string; points: string[] } | undefined,
      observation: {
        title: 'Why Cumulative Inventory and not Monthly Delta?',
        points: [
          'quantity_delta tracks stock added or removed each month — it is not the actual stock available. Stock from January carries over to February and beyond.',
          'The running SUM() window function converts monthly deltas into a true on-hand balance, which is the correct figure to compare against monthly sales demand.',
          'Without the cumulative step, a store that stocked 50 units in January and sold 48 would appear to have only 20 units available in February — ignoring the 2 leftover from January.',
        ],
      } as { title: string; points: string[] } | undefined,
      result: [
        { store_id: '1', product_id: '101', mnth_yr: 'January, 2024', classification: 'Within Demand' },
        { store_id: '1', product_id: '101', mnth_yr: 'February, 2024', classification: 'Within Demand' },
        { store_id: '1', product_id: '101', mnth_yr: 'March, 2024', classification: 'Inventory Issue' },
        { store_id: '1', product_id: '102', mnth_yr: 'January, 2024', classification: 'Inventory Issue' },
        { store_id: '1', product_id: '102', mnth_yr: 'February, 2024', classification: 'Inventory Issue' },
        { store_id: '1', product_id: '102', mnth_yr: 'March, 2024', classification: 'Within Demand' },
        { store_id: '2', product_id: '101', mnth_yr: 'January, 2024', classification: 'Within Demand' },
        { store_id: '2', product_id: '101', mnth_yr: 'February, 2024', classification: 'Inventory Issue' },
        { store_id: '2', product_id: '101', mnth_yr: 'March, 2024', classification: 'Inventory Issue' },
        { store_id: '2', product_id: '102', mnth_yr: 'January, 2024', classification: 'Within Demand' },
        { store_id: '2', product_id: '102', mnth_yr: 'February, 2024', classification: 'Within Demand' },
        { store_id: '2', product_id: '102', mnth_yr: 'March, 2024', classification: 'Inventory Issue' },
      ] as Record<string, string>[],
    },
  },
  'sql-drill-9': {
    id: 'sql-drill-9',
    number: 9,
    title: 'Web Event Analysis',
    tool: 'SQL' as const,
    difficulty: 'Intermediate' as Difficulty,
    skills: ['CTE', 'String Functions', 'Funnel Analysis', 'FIRST_VALUE'],
    description: 'Analyze customer web events to understand product brand interest, campaign funnel performance, and user-level engagement behavior.',
    setup: "Your dataset contains two tables from a web analytics system:\n\n1. A Web_Events table recording each customer interaction — page views, add-to-cart, checkout, purchase, and search events — along with the campaign, session, and a JSON field containing event details\n2. A Products table with product_id, product_name, brand, and category",
    schema: {
      Web_Events: [
        { name: 'event_id', type: 'INT', constraint: 'PK' },
        { name: 'customer_id', type: 'VARCHAR(20)', constraint: '' },
        { name: 'event_date', type: 'DATE', constraint: '' },
        { name: 'event_type', type: 'VARCHAR(50)', constraint: '' },
        { name: 'session_id', type: 'VARCHAR(50)', constraint: '' },
        { name: 'utm_campaign', type: 'VARCHAR(50)', constraint: '' },
        { name: 'event_json', type: 'TEXT', constraint: '' },
      ],
      Products: [
        { name: 'product_id', type: 'INT', constraint: 'PK' },
        { name: 'product_name', type: 'VARCHAR(100)', constraint: '' },
        { name: 'brand', type: 'VARCHAR(50)', constraint: '' },
        { name: 'category', type: 'VARCHAR(50)', constraint: '' },
      ],
    },
    sampleTables: [
      {
        name: 'Products',
        rowCount: '6 rows',
        headers: ['product_id', 'product_name', 'brand', 'category'],
        rows: [
          [101, 'Wireless Earbuds', 'boAt', 'Electronics'],
          [102, 'Smart Watch', 'Noise', 'Electronics'],
          [103, 'Running Shoes', 'Puma', 'Footwear'],
          [104, 'Denim Jacket', "Levi's", 'Fashion'],
          [105, 'Backpack', 'Skybags', 'Accessories'],
          [106, 'Bluetooth Speaker', 'JBL', 'Electronics'],
        ],
      },
      {
        name: 'Web_Events',
        rowCount: '30 rows',
        headers: ['event_id', 'customer_id', 'event_date', 'event_type', 'session_id', 'utm_campaign', 'event_json'],
        rows: [
          [1, 'C001', '2025-08-02', 'page_view', 'S001', 'SummerSale', '{"product_id":101,"page":"product"}'],
          [2, 'C001', '2025-08-02', 'add_to_cart', 'S001', 'SummerSale', '{"product_id":101,"page":"cart"}'],
          [3, 'C001', '2025-08-02', 'checkout', 'S001', 'SummerSale', '{"product_id":101,"page":"checkout"}'],
          [4, 'C001', '2025-08-02', 'purchase', 'S001', 'SummerSale', '{"product_id":101,"page":"success"}'],
          [5, 'C002', '2025-08-05', 'page_view', 'S002', 'SummerSale', '{"product_id":102,"page":"product"}'],
          [6, 'C002', '2025-08-05', 'add_to_cart', 'S002', 'SummerSale', '{"product_id":102,"page":"cart"}'],
          [7, 'C002', '2025-08-05', 'checkout', 'S002', 'SummerSale', '{"product_id":102,"page":"checkout"}'],
          [8, 'C003', '2025-08-10', 'page_view', 'S003', 'SummerSale', '{"product_id":103,"page":"product"}'],
          [9, 'C003', '2025-08-10', 'add_to_cart', 'S003', 'SummerSale', '{"product_id":103,"page":"cart"}'],
          [10, 'C004', '2025-08-12', 'page_view', 'S004', 'FestiveOffer', '{"product_id":104,"page":"product"}'],
          [11, 'C004', '2025-08-12', 'add_to_cart', 'S004', 'FestiveOffer', '{"product_id":104,"page":"cart"}'],
          [12, 'C004', '2025-08-12', 'checkout', 'S004', 'FestiveOffer', '{"product_id":104,"page":"checkout"}'],
          [13, 'C004', '2025-08-12', 'purchase', 'S004', 'FestiveOffer', '{"product_id":104,"page":"success"}'],
          [14, 'C005', '2025-08-15', 'page_view', 'S005', 'FestiveOffer', '{"product_id":105,"page":"product"}'],
          [15, 'C005', '2025-08-15', 'add_to_cart', 'S005', 'FestiveOffer', '{"product_id":105,"page":"cart"}'],
          [16, 'C006', '2025-08-18', 'page_view', 'S006', 'FestiveOffer', '{"product_id":106,"page":"product"}'],
          [17, 'C006', '2025-08-18', 'checkout', 'S006', 'FestiveOffer', '{"product_id":106,"page":"checkout"}'],
          [18, 'C007', '2025-08-20', 'page_view', 'S007', 'NewLaunch', '{"product_id":101,"page":"product"}'],
          [19, 'C007', '2025-08-20', 'add_to_cart', 'S007', 'NewLaunch', '{"product_id":101,"page":"cart"}'],
          [20, 'C007', '2025-08-20', 'purchase', 'S007', 'NewLaunch', '{"product_id":101,"page":"success"}'],
          [21, 'C008', '2025-08-22', 'page_view', 'S008', 'NewLaunch', '{"product_id":106,"page":"product"}'],
          [22, 'C008', '2025-08-22', 'add_to_cart', 'S008', 'NewLaunch', '{"product_id":106,"page":"cart"}'],
          [23, 'C008', '2025-08-22', 'checkout', 'S008', 'NewLaunch', '{"product_id":106,"page":"checkout"}'],
          [24, 'C009', '2025-08-25', 'search', 'S009', 'NewLaunch', '{"keyword":"earbuds"}'],
          [25, 'C001', '2025-08-28', 'page_view', 'S010', 'SummerSale', '{"product_id":102,"page":"product"}'],
          [26, 'C001', '2025-08-28', 'add_to_cart', 'S010', 'SummerSale', '{"product_id":102,"page":"cart"}'],
          [27, 'C002', '2025-08-30', 'purchase', 'S011', 'SummerSale', '{"product_id":102,"page":"success"}'],
          [28, 'C003', '2025-09-01', 'page_view', 'S012', 'FestiveOffer', '{"product_id":103,"page":"product"}'],
          [29, 'C003', '2025-09-01', 'add_to_cart', 'S012', 'FestiveOffer', '{"product_id":103,"page":"cart"}'],
          [30, 'C003', '2025-09-01', 'purchase', 'S012', 'FestiveOffer', '{"product_id":103,"page":"success"}'],
        ],
      },
    ],
    departmentData: [] as { id: number; name: string }[],
    employeeData: [] as { id: number; name: string; salary: string; joining_date: string; department_id: number }[],
    task: 'This drill has three questions:\n\n1. Add to Cart by Brand — Compute total add_to_cart counts per product brand, sorted highest first. Your result table should have: brand, total_add_to_cart.\n\n2. Campaign Funnel — Create a funnel showing page_view → add_to_cart → checkout → purchase conversion rates per campaign (exclude search events). Your result table should have: utm_campaign, event_type, cnt, rate.\n\n3. User Feature Table — Build a per-user feature table using 2025-09-01 as the reference date (30-day window). Your result table should have: customer_id, last_event_date, no_of_sessions, add_to_carts, purchases.',
    outputColumns: ['brand', 'total_add_to_cart'],
    expectedOutputPreview: [
      { brand: 'Noise', total_add_to_cart: '2' },
      { brand: 'boAt', total_add_to_cart: '2' },
      { brand: '…', total_add_to_cart: '…' },
    ] as Record<string, string>[],
    hint: [
      'Q1: Use MID() and LOCATE() to extract product_id from event_json. LOCATE(":") finds the colon, MID() pulls the value after it. Filter event_type = "add_to_cart" and exclude blank customer_ids. Join with Products to get brand names.',
      'Q2: Filter out "search" events before grouping — the funnel only tracks page_view, add_to_cart, checkout, and purchase. Use FIRST_VALUE(cnt) OVER (PARTITION BY utm_campaign ORDER BY cnt DESC) to get the top event count per campaign, then divide each stage count by it.',
      'Q3: Write two CTEs. The first calculates 30-day activity per customer using conditional SUM(IF(event_type="add_to_cart",1,0)). The second finds each customer\'s last event date using FIRST_VALUE(event_date) OVER (PARTITION BY customer_id ORDER BY event_date DESC). LEFT JOIN so customers with no 30-day activity still appear — use IFNULL() to replace NULLs with 0.',
    ] as string[] | undefined,
    hintTitle: 'Hints' as string | undefined,
    solution: {
      sql: `-- Question 1: Add to Cart Counts per Product Brand
with c as (
  select
    mid(event_json, locate(":", event_json) + 2,
        locate(",", event_json) - locate(":", event_json) - 2) as prod_id,
    count(*) as total_add_to_carts
  from web_events
  where event_type = "add_to_cart" and customer_id <> ""
  group by prod_id
  order by total_add_to_carts desc
)
select brand, sum(total_add_to_carts) as total_add_to_cart
from c
inner join products p on c.prod_id = p.product_id
group by brand
order by total_add_to_cart desc;

-- Question 2: Campaign Funnel (page_view → add_to_cart → checkout → purchase)
with c as (
  select utm_campaign, event_type, count(*) as cnt
  from web_events
  where event_type not in ("search") and customer_id <> ""
  group by utm_campaign, event_type
  order by utm_campaign, cnt desc
)
select *,
  round((cnt / first_value(cnt) over (partition by utm_campaign order by cnt desc)) * 100, 2) as rate
from c;

-- Question 3: Per-User Feature Table (reference date: 2025-09-01)
with c as (
  select customer_id,
    count(*) as no_of_sessions,
    sum(if(event_type = "add_to_cart", 1, 0)) as add_to_carts,
    sum(if(event_type = "purchase", 1, 0)) as purchases
  from web_events
  where (event_date >= "2025-09-01" - interval 30 day) and customer_id <> ""
  group by customer_id
),
t as (
  select distinct(customer_id) as customer_id,
    first_value(event_date) over (partition by customer_id order by event_date desc) as last_event_date
  from web_events
  where customer_id <> ""
)
select t.customer_id, last_event_date,
  ifnull(no_of_sessions, 0) as no_of_sessions,
  ifnull(add_to_carts, 0) as add_to_carts,
  ifnull(purchases, 0) as purchases
from t
left join c on t.customer_id = c.customer_id
order by customer_id;`,
      howItWorks: [
        'Q1 — MID + LOCATE: event_json stores data as {"product_id":101,...}. LOCATE(":") finds the colon position, LOCATE(",") finds the first comma. MID() extracts the characters between them — giving the raw product_id value. This string is then cast implicitly when joined to the integer product_id in Products.',
        'Q1 — Brand aggregation: The CTE groups add-to-cart counts by extracted product_id. The outer query joins with Products to get brand names, then re-aggregates by brand — allowing one brand to cover multiple products.',
        'Q2 — Funnel CTE: Counts events grouped by utm_campaign and event_type, excluding search events which are not part of the purchase funnel.',
        'Q2 — FIRST_VALUE(): Within each campaign partition (ORDER BY cnt DESC), FIRST_VALUE(cnt) always returns the largest event count — typically page_view. Dividing each stage count by this top count gives a conversion rate relative to the first funnel step.',
        'Q3 — CTE c: Filters events within the 30-day window before the reference date. COUNT(*) gives total events (sessions); conditional SUM(IF(...)) counts specific event types per customer.',
        'Q3 — CTE t: Uses FIRST_VALUE(event_date) with ORDER BY event_date DESC to get the most recent event date per customer across the entire dataset, regardless of the 30-day window.',
        'Q3 — LEFT JOIN + IFNULL: LEFT JOIN ensures all customers appear even if they had no activity in the 30-day window. IFNULL replaces NULL values (from customers with no matching CTE c row) with 0.',
      ],
      commonMistake: {
        title: 'Parsing event_json with String Functions vs JSON_EXTRACT',
        points: [
          'MID() + LOCATE() is a string-parsing approach that works when event_json has a predictable format (product_id always first). If the key order changes, the extraction will break.',
          'A more robust alternative in MySQL 5.7+ is JSON_EXTRACT(event_json, "$.product_id") — it parses the JSON properly regardless of key order.',
          'For Q2, a common mistake is forgetting to exclude "search" events. Including search skews the funnel because search is not a conversion step — it inflates the denominator and makes page_view rates appear lower than they are.',
        ],
      } as { title: string; points: string[] } | undefined,
      observation: {
        title: 'Q2 Funnel & Q3 Feature Table Results',
        points: [
          'Q2 — SummerSale: page_view 100% → add_to_cart 100% → checkout 50% → purchase 50%',
          'Q2 — FestiveOffer: page_view 100% → add_to_cart 75% → checkout 50% → purchase 50%',
          'Q2 — NewLaunch: page_view 100% → add_to_cart 100% → checkout 50% → purchase 50%',
          'Q3 — C001: last_event=2025-08-28 | sessions=2 | add_to_carts=1 | purchases=0 (active in 30-day window)',
          'Q3 — C002: last_event=2025-08-30 | sessions=1 | add_to_carts=0 | purchases=1',
          'Q3 — C003: last_event=2025-09-01 | sessions=3 | add_to_carts=1 | purchases=1',
          'Q3 — C004–C009: last_event dates vary; 0 sessions/carts/purchases (no activity in window for most)',
        ],
      } as { title: string; points: string[] } | undefined,
      result: [
        { brand: 'Noise', total_add_to_cart: '2' },
        { brand: 'boAt', total_add_to_cart: '2' },
        { brand: 'Puma', total_add_to_cart: '2' },
        { brand: 'JBL', total_add_to_cart: '1' },
        { brand: "Levi's", total_add_to_cart: '1' },
        { brand: 'Skybags', total_add_to_cart: '1' },
      ] as Record<string, string>[],
    },
  },
  'sql-drill-10': {
    id: 'sql-drill-10',
    number: 10,
    title: 'Advertisement Analysis',
    tool: 'SQL' as const,
    difficulty: 'Intermediate' as Difficulty,
    skills: ['CTE', 'RANK', 'LAG', 'NTILE', 'FIRST_VALUE'],
    description: 'Analyze website engagement to identify inactive high-engagement customers and understand how many events customers usually take before purchasing.',
    setup: "Your dataset contains one table from a web analytics system:\n\n1. A Web_Events table recording each customer interaction — page views, add-to-cart, checkout, and purchase events — along with the campaign, session, and a JSON field containing event details\n\nNote: Some rows have a blank customer_id — exclude these from all queries.",
    schema: {
      Web_Events: [
        { name: 'event_id', type: 'INT', constraint: 'PK' },
        { name: 'customer_id', type: 'VARCHAR(20)', constraint: '' },
        { name: 'event_date', type: 'DATE', constraint: '' },
        { name: 'event_type', type: 'VARCHAR(50)', constraint: '' },
        { name: 'session_id', type: 'VARCHAR(50)', constraint: '' },
        { name: 'utm_campaign', type: 'VARCHAR(50)', constraint: '' },
        { name: 'event_json', type: 'TEXT', constraint: '' },
      ],
    },
    sampleTables: [
      {
        name: 'Web_Events',
        rowCount: '30 rows',
        headers: ['event_id', 'customer_id', 'event_date', 'event_type', 'session_id', 'utm_campaign', 'event_json'],
        rows: [
          [1, 'C001', '2025-01-05', 'page_view', 'S001', 'SummerSale', '{"product_id":101}'],
          [2, 'C001', '2025-01-06', 'add_to_cart', 'S002', 'SummerSale', '{"product_id":101}'],
          [3, 'C001', '2025-01-07', 'checkout', 'S003', 'SummerSale', '{"product_id":101}'],
          [4, 'C001', '2025-01-08', 'Purchase', 'S004', 'SummerSale', '{"product_id":101}'],
          [5, 'C001', '2025-02-10', 'page_view', 'S005', 'SummerSale', '{"product_id":102}'],
          [6, 'C001', '2025-03-12', 'page_view', 'S006', 'SummerSale', '{"product_id":103}'],
          [7, 'C002', '2025-02-01', 'page_view', 'S007', 'FestiveOffer', '{"product_id":104}'],
          [8, 'C002', '2025-02-02', 'add_to_cart', 'S008', 'FestiveOffer', '{"product_id":104}'],
          [9, 'C002', '2025-02-03', 'Purchase', 'S009', 'FestiveOffer', '{"product_id":104}'],
          [10, 'C002', '2025-08-20', 'page_view', 'S010', 'FestiveOffer', '{"product_id":105}'],
          [11, 'C003', '2025-01-10', 'page_view', 'S011', 'NewLaunch', '{"product_id":101}'],
          [12, 'C003', '2025-01-11', 'page_view', 'S012', 'NewLaunch', '{"product_id":101}'],
          [13, 'C003', '2025-01-12', 'add_to_cart', 'S013', 'NewLaunch', '{"product_id":101}'],
          [14, 'C003', '2025-01-13', 'checkout', 'S014', 'NewLaunch', '{"product_id":101}'],
          [15, 'C003', '2025-01-14', 'Purchase', 'S015', 'NewLaunch', '{"product_id":101}'],
          [16, 'C003', '2025-03-01', 'page_view', 'S016', 'NewLaunch', '{"product_id":102}'],
          [17, 'C004', '2025-04-05', 'page_view', 'S017', 'SummerSale', '{"product_id":103}'],
          [18, 'C004', '2025-04-06', 'add_to_cart', 'S018', 'SummerSale', '{"product_id":103}'],
          [19, 'C004', '2025-04-07', 'page_view', 'S019', 'SummerSale', '{"product_id":103}'],
          [20, 'C004', '2025-04-08', 'checkout', 'S020', 'SummerSale', '{"product_id":103}'],
          [21, 'C004', '2025-04-09', 'Purchase', 'S021', 'SummerSale', '{"product_id":103}'],
          [22, 'C004', '2025-04-10', 'page_view', 'S022', 'SummerSale', '{"product_id":103}'],
          [23, 'C005', '2025-08-01', 'page_view', 'S023', 'FestiveOffer', '{"product_id":105}'],
          [24, 'C005', '2025-08-02', 'add_to_cart', 'S024', 'FestiveOffer', '{"product_id":105}'],
          [25, 'C005', '2025-08-03', 'checkout', 'S025', 'FestiveOffer', '{"product_id":105}'],
          [26, 'C005', '2025-08-04', 'Purchase', 'S026', 'FestiveOffer', '{"product_id":105}'],
          [27, 'C006', '2025-05-01', 'page_view', 'S027', 'NewLaunch', '{"product_id":106}'],
          [28, 'C006', '2025-05-02', 'add_to_cart', 'S028', 'NewLaunch', '{"product_id":106}'],
          [29, 'C006', '2025-05-03', 'Purchase', 'S029', 'NewLaunch', '{"product_id":106}'],
          [30, '', '2025-05-04', 'page_view', 'S030', 'NewLaunch', '{"product_id":106}'],
        ],
      },
    ],
    departmentData: [] as { id: number; name: string }[],
    employeeData: [] as { id: number; name: string; salary: string; joining_date: string; department_id: number }[],
    task: 'This drill has two questions. Use 2025-09-01 as the reference date. Exclude rows where customer_id is blank.\n\n1. Inactive High-Engagement Customers — Find customers who had more than 5 events on the website in 2025 but no event in the past 45 days (before 2025-09-01). Your result table should have: customer_id.\n\n2. Events Before Purchase — For each customer, find the average number of events they take before making a purchase. Then divide all customers into 4 equal groups using NTILE. Your result table should have: customer_id, avg_events_before_purchase, bukcets.',
    outputColumns: ['customer_id'],
    expectedOutputPreview: [
      { customer_id: 'C001' },
      { customer_id: 'C003' },
      { customer_id: '…' },
    ] as Record<string, string>[],
    hint: [
      'Q1: Write one CTE to count 2025 events per customer (HAVING count > 5). Write a second CTE using FIRST_VALUE(event_date) OVER (PARTITION BY customer_id ORDER BY event_date DESC) to find each customer\'s most recent event. JOIN both and filter where last_event_date < "2025-09-01" - INTERVAL 45 DAY.',
      'Q2: Start by ranking every event per customer using RANK() OVER (PARTITION BY customer_id ORDER BY event_date). Then filter to only purchase rows and use LAG(rnk) to find the rank of the previous purchase. The difference (current rank − previous rank − 1) gives the events that happened between two purchases.',
      'Q2: Wrap all that in a CTE, then GROUP BY customer_id to compute AVG(no_of_events). Apply NTILE(4) OVER (ORDER BY avg_events) in the outer SELECT to split customers into four equal buckets.',
    ] as string[] | undefined,
    hintTitle: 'Hints' as string | undefined,
    solution: {
      sql: `-- Question 1: Inactive High-Engagement Customers
with c as (
  select customer_id, count(*) as total_events
  from web_events
  where year(event_date) = 2025 and customer_id <> ""
  group by customer_id
  having count(*) > 5
),
t as (
  select distinct(customer_id) as customer_id,
    first_value(event_date) over (
      partition by customer_id order by event_date desc
    ) as last_event_date
  from web_events
  where customer_id <> ""
)
select c.customer_id
from c
inner join t on c.customer_id = t.customer_id
where last_event_date < ("2025-09-01" - interval 45 day);

-- Question 2: Average Events Before Purchase and NTILE Bucketing
with t as (
  with c as (
    select customer_id, event_type, event_date,
      rank() over (partition by customer_id order by event_date) as rnk
    from web_events
    where customer_id <> ""
  )
  select *,
    if(
      ifnull((rnk - lag(rnk) over (partition by customer_id order by event_date)), rnk) = 0,
      ifnull((rnk - lag(rnk) over (partition by customer_id order by event_date)), rnk),
      ifnull((rnk - lag(rnk) over (partition by customer_id order by event_date)), rnk) - 1
    ) as no_of_events
  from c
  where event_type = "Purchase"
)
select customer_id,
  round(avg(no_of_events)) as avg_events_before_purchase,
  ntile(4) over (order by round(avg(no_of_events))) as bukcets
from t
group by customer_id;`,
      howItWorks: [
        'Q1 — CTE c: Filters 2025 events, groups by customer_id, and uses HAVING COUNT(*) > 5 to keep only highly active customers.',
        'Q1 — CTE t: Uses FIRST_VALUE(event_date) OVER (PARTITION BY customer_id ORDER BY event_date DESC) to retrieve the most recent event date for every customer across the entire dataset.',
        'Q1 — Final filter: INNER JOIN ensures only customers who meet both conditions appear. WHERE last_event_date < ("2025-09-01" - INTERVAL 45 DAY) — i.e., before 2025-07-17 — keeps only those who have gone silent recently.',
        'Q2 — Inner CTE c: RANK() numbers every event per customer in chronological order, giving each row a position in that customer\'s event history.',
        'Q2 — Filtering purchases: The WHERE event_type = "Purchase" clause isolates only purchase rows. LAG(rnk) retrieves the rank of the previous purchase for the same customer.',
        'Q2 — no_of_events: The difference (current rnk − previous rnk − 1) counts how many non-purchase events happened between two consecutive purchases. IFNULL handles the first purchase where LAG returns NULL — using rnk directly (then subtracting 1) gives events before the very first purchase.',
        'Q2 — NTILE(4): After averaging no_of_events per customer with GROUP BY, NTILE(4) OVER (ORDER BY avg) splits the sorted list of customers into four equal-sized buckets — bucket 1 buys quickest, bucket 4 takes the most browsing before purchasing.',
      ],
      commonMistake: {
        title: 'RANK() vs ROW_NUMBER() for Event Sequencing',
        points: [
          'If two events happen on the same date, RANK() gives them the same number and skips the next rank. ROW_NUMBER() gives each a unique sequential number arbitrarily.',
          'For this problem RANK() is intentional — same-day events are treated as tied in sequence, so the gap calculation reflects distinct days rather than individual event counts.',
          'Also note that event_type = "Purchase" is case-sensitive in some MySQL configurations. The dataset uses "Purchase" (capital P) — using "purchase" may return 0 rows.',
        ],
      } as { title: string; points: string[] } | undefined,
      observation: {
        title: 'Q1 & Q2 Expected Results',
        points: [
          'Q1 Result — Customers with >5 events in 2025 and no event since 2025-07-17: C001, C003, C004',
          'Q2 — C002: avg 2 events → bucket 1 | C006: avg 2 events → bucket 1',
          'Q2 — C001: avg 3 events → bucket 2 | C005: avg 3 events → bucket 2',
          'Q2 — C003: avg 4 events → bucket 3 | C004: avg 4 events → bucket 4',
          'Bucket 1 customers (C002, C006) purchase quickly after fewer interactions — they are high-intent buyers. Bucket 3–4 customers need more nurturing before converting.',
        ],
      } as { title: string; points: string[] } | undefined,
      result: [
        { customer_id: 'C001' },
        { customer_id: 'C003' },
        { customer_id: 'C004' },
      ] as Record<string, string>[],
    },
  },
  'sql-drill-11': {
    id: 'sql-drill-11',
    number: 11,
    title: 'Department Salary Analysis',
    tool: 'SQL' as const,
    difficulty: 'Beginner' as Difficulty,
    skills: ['INNER JOIN', 'GROUP BY', 'SUM', 'Department Analysis'],
    description: 'Find the total salary paid by each department using SQL joins and aggregation.',
    setup: "Your dataset contains two tables from a company's HR database:\n\n1. A Department table with the ID and name of each department\n2. An Employee table with the ID, name, salary, joining date, and department reference for each employee\n\nAnalyze department-wise salary cost using employee and department data.",
    schema: {
      Department: [
        { name: 'id', type: 'INT', constraint: 'PK' },
        { name: 'name', type: 'VARCHAR(50)', constraint: '' },
      ],
      Employee: [
        { name: 'id', type: 'INT', constraint: 'PK' },
        { name: 'name', type: 'VARCHAR(50)', constraint: '' },
        { name: 'salary', type: 'DECIMAL(10,2)', constraint: '' },
        { name: 'joining_date', type: 'DATE', constraint: '' },
        { name: 'department_id', type: 'INT', constraint: 'FK' },
      ],
    },
    departmentData: [
      { id: 1, name: 'HR' },
      { id: 2, name: 'Engineering' },
      { id: 3, name: 'Marketing' },
      { id: 4, name: 'Sales' },
      { id: 5, name: 'IT' },
      { id: 6, name: 'Finance' },
      { id: 7, name: 'Graphic Designer' },
      { id: 8, name: 'Data Analyst' },
    ],
    employeeData: [
      { id: 1, name: 'Alice', salary: '70000', joining_date: '2020-01-15', department_id: 1 },
      { id: 2, name: 'Bob', salary: '85000', joining_date: '2019-03-22', department_id: 2 },
      { id: 3, name: 'Charlie', salary: '60000', joining_date: '2021-05-18', department_id: 1 },
      { id: 4, name: 'David', salary: '95000', joining_date: '2018-07-11', department_id: 3 },
      { id: 5, name: 'Eva', salary: '80000', joining_date: '2017-09-09', department_id: 2 },
      { id: 6, name: 'Frank', salary: '75000', joining_date: '2016-11-14', department_id: 3 },
      { id: 7, name: 'Grace', salary: '90000', joining_date: '2015-02-23', department_id: 1 },
      { id: 8, name: 'Henry', salary: '68000', joining_date: '2021-04-30', department_id: 2 },
      { id: 9, name: 'Irene', salary: '72000', joining_date: '2020-06-25', department_id: 1 },
      { id: 10, name: 'Jack', salary: '78000', joining_date: '2019-08-19', department_id: 3 },
      { id: 11, name: 'Karen', salary: '83000', joining_date: '2018-10-07', department_id: 4 },
      { id: 12, name: 'Leo', salary: '95000', joining_date: '2017-12-13', department_id: 1 },
      { id: 13, name: 'Mona', salary: '87000', joining_date: '2016-03-21', department_id: 2 },
      { id: 14, name: 'Nick', salary: '63000', joining_date: '2015-05-29', department_id: 5 },
      { id: 15, name: 'Olivia', salary: '77000', joining_date: '2014-07-15', department_id: 1 },
      { id: 16, name: 'Peter', salary: '82000', joining_date: '2021-01-18', department_id: 2 },
      { id: 17, name: 'Quinn', salary: '91000', joining_date: '2020-03-12', department_id: 6 },
      { id: 18, name: 'Rachel', salary: '88000', joining_date: '2019-09-28', department_id: 1 },
      { id: 19, name: 'Steve', salary: '93000', joining_date: '2018-11-06', department_id: 2 },
      { id: 20, name: 'Tina', salary: '76000', joining_date: '2017-04-16', department_id: 3 },
    ],
    task: 'Department Salary Analysis: What is the total salary for each department?\n\nThe result table should have department_name and total_salary columns.',
    outputColumns: ['department_name', 'total_salary'],
    expectedOutputPreview: [
      { department_name: 'Engineering', total_salary: '495000' },
      { department_name: 'Finance', total_salary: '91000' },
      { department_name: 'HR', total_salary: '552000' },
    ] as Record<string, string>[],
    hint: [
      'Join Department and Employee using Employee.department_id = Department.id.',
      'Use SUM(e.salary) to calculate department-wise salary cost.',
      'Use GROUP BY d.name so the salary is aggregated per department.',
    ] as string[] | undefined,
    hintTitle: 'Before You Solve' as string | undefined,
    solution: {
      sql: `/* Department Salary Analysis

Question:
Based on the given information, find the total salary for each department.
The result table should have department_name and total_salary columns. */

select
    d.name as department_name,
    sum(e.salary) as total_salary
from department d
inner join employee e
    on e.department_id = d.id
group by d.name;`,
      howItWorks: [
        'The Department table stores department names.',
        'The Employee table stores employee salary and department reference.',
        'INNER JOIN connects employees with their respective departments using department_id.',
        'SUM(e.salary) calculates the total salary paid within each department.',
        'GROUP BY d.name ensures the salary is aggregated department-wise.',
        'Departments with no employees will not appear because an INNER JOIN is used.',
      ],
      commonMistake: undefined as { title: string; points: string[] } | undefined,
      observation: {
        title: 'Optional: Include Departments With No Employees',
        points: [
          'If you want to show all departments, including departments with no employees, use LEFT JOIN instead of INNER JOIN.',
          'Use COALESCE(SUM(e.salary), 0) so Graphic Designer and Data Analyst appear with salary as 0.',
          `select
    d.name as department_name,
    coalesce(sum(e.salary), 0) as total_salary
from department d
left join employee e
    on e.department_id = d.id
group by d.name;`,
        ],
      } as { title: string; points: string[] } | undefined,
      result: [
        { department_name: 'Engineering', total_salary: '495000' },
        { department_name: 'Finance', total_salary: '91000' },
        { department_name: 'HR', total_salary: '552000' },
        { department_name: 'IT', total_salary: '63000' },
        { department_name: 'Marketing', total_salary: '324000' },
        { department_name: 'Sales', total_salary: '83000' },
      ] as Record<string, string>[],
    },
  },
  'sql-drill-12': {
    id: 'sql-drill-12',
    number: 12,
    title: 'Departments With Less Than 2 Employees',
    tool: 'SQL' as const,
    difficulty: 'Beginner' as Difficulty,
    skills: ['RIGHT JOIN', 'LEFT JOIN', 'GROUP BY', 'HAVING', 'COUNT', 'Department Analysis'],
    description: 'Identify departments that have fewer than 2 employees using SQL joins, grouping, and filtering.',
    setup: "Your dataset contains two tables from a company's HR database:\n\n1. A Department table with the ID and name of each department\n2. An Employee table with the ID, name, salary, joining date, and department reference for each employee\n\nAnalyze employee count department-wise and identify departments with very low employee strength.",
    schema: {
      Department: [
        { name: 'id', type: 'INT', constraint: 'PK' },
        { name: 'name', type: 'VARCHAR(50)', constraint: '' },
      ],
      Employee: [
        { name: 'id', type: 'INT', constraint: 'PK' },
        { name: 'name', type: 'VARCHAR(50)', constraint: '' },
        { name: 'salary', type: 'DECIMAL(10,2)', constraint: '' },
        { name: 'joining_date', type: 'DATE', constraint: '' },
        { name: 'department_id', type: 'INT', constraint: 'FK' },
      ],
    },
    departmentData: [
      { id: 1, name: 'HR' },
      { id: 2, name: 'Engineering' },
      { id: 3, name: 'Marketing' },
      { id: 4, name: 'Sales' },
      { id: 5, name: 'IT' },
      { id: 6, name: 'Finance' },
      { id: 7, name: 'Graphic Designer' },
      { id: 8, name: 'Data Analyst' },
    ],
    employeeData: [
      { id: 1, name: 'Alice', salary: '70000', joining_date: '2020-01-15', department_id: 1 },
      { id: 2, name: 'Bob', salary: '85000', joining_date: '2019-03-22', department_id: 2 },
      { id: 3, name: 'Charlie', salary: '60000', joining_date: '2021-05-18', department_id: 1 },
      { id: 4, name: 'David', salary: '95000', joining_date: '2018-07-11', department_id: 3 },
      { id: 5, name: 'Eva', salary: '80000', joining_date: '2017-09-09', department_id: 2 },
      { id: 6, name: 'Frank', salary: '75000', joining_date: '2016-11-14', department_id: 3 },
      { id: 7, name: 'Grace', salary: '90000', joining_date: '2015-02-23', department_id: 1 },
      { id: 8, name: 'Henry', salary: '68000', joining_date: '2021-04-30', department_id: 2 },
      { id: 9, name: 'Irene', salary: '72000', joining_date: '2020-06-25', department_id: 1 },
      { id: 10, name: 'Jack', salary: '78000', joining_date: '2019-08-19', department_id: 3 },
      { id: 11, name: 'Karen', salary: '83000', joining_date: '2018-10-07', department_id: 4 },
      { id: 12, name: 'Leo', salary: '95000', joining_date: '2017-12-13', department_id: 1 },
      { id: 13, name: 'Mona', salary: '87000', joining_date: '2016-03-21', department_id: 2 },
      { id: 14, name: 'Nick', salary: '63000', joining_date: '2015-05-29', department_id: 5 },
      { id: 15, name: 'Olivia', salary: '77000', joining_date: '2014-07-15', department_id: 1 },
      { id: 16, name: 'Peter', salary: '82000', joining_date: '2021-01-18', department_id: 2 },
      { id: 17, name: 'Quinn', salary: '91000', joining_date: '2020-03-12', department_id: 6 },
      { id: 18, name: 'Rachel', salary: '88000', joining_date: '2019-09-28', department_id: 1 },
      { id: 19, name: 'Steve', salary: '93000', joining_date: '2018-11-06', department_id: 2 },
      { id: 20, name: 'Tina', salary: '76000', joining_date: '2017-04-16', department_id: 3 },
    ],
    task: 'Departments With Less Than 2 Employees: Which departments have fewer than 2 employees?\n\nThe final result table should have department_name and count_of_employees columns.',
    outputColumns: ['department_name', 'count_of_employees'],
    expectedOutputPreview: [
      { department_name: 'Sales', count_of_employees: '1' },
      { department_name: 'IT', count_of_employees: '1' },
      { department_name: 'Finance', count_of_employees: '1' },
    ] as Record<string, string>[],
    hint: [
      'Use an outer join so departments with zero employees are not removed.',
      'COUNT(e.id) counts only matching employee rows, so departments with no employees return 0.',
      'Use HAVING after GROUP BY because the filter depends on an aggregate count.',
    ] as string[] | undefined,
    hintTitle: 'Before You Solve' as string | undefined,
    solution: {
      sql: `/* Departments With Less Than 2 Employees

Question:
Find out the names of the departments which have less than 2 employees.
The final result table should have department_name and count_of_employees. */

select
    d.name as department_name,
    count(e.id) as count_of_employees
from employee e
right join department d
    on e.department_id = d.id
group by d.name
having count(e.id) < 2;`,
      howItWorks: [
        'The Department table contains all departments in the company.',
        'The Employee table contains employee details and the department each employee belongs to.',
        'RIGHT JOIN ensures all departments are included, even if no employee belongs to that department.',
        'COUNT(e.id) counts the number of employees in each department.',
        'GROUP BY d.name groups the result department-wise.',
        'HAVING count(e.id) < 2 filters only those departments where the employee count is less than 2.',
        'Departments with zero employees are also included because of the outer join.',
      ],
      commonMistake: undefined as { title: string; points: string[] } | undefined,
      observation: {
        title: 'Alternative Recommended Query',
        points: [
          'A LEFT JOIN from Department to Employee is usually easier to read because the analysis starts from the department table.',
          `select
    d.name as department_name,
    count(e.id) as count_of_employees
from department d
left join employee e
    on e.department_id = d.id
group by d.name
having count(e.id) < 2;`,
          'This gives the same result and is generally the cleaner approach for this type of question.',
        ],
      } as { title: string; points: string[] } | undefined,
      result: [
        { department_name: 'Sales', count_of_employees: '1' },
        { department_name: 'IT', count_of_employees: '1' },
        { department_name: 'Finance', count_of_employees: '1' },
        { department_name: 'Graphic Designer', count_of_employees: '0' },
        { department_name: 'Data Analyst', count_of_employees: '0' },
      ] as Record<string, string>[],
    },
  },
  'sql-drill-13': {
    id: 'sql-drill-13',
    number: 13,
    title: 'Department-wise Salary Ranking',
    tool: 'SQL' as const,
    difficulty: 'Intermediate' as Difficulty,
    skills: ['Window Functions', 'DENSE_RANK', 'CTE', 'INNER JOIN', 'Salary Analysis'],
    description: 'Identify the employees with the second highest salary and third lowest salary in each department using SQL ranking functions.',
    setup: "Your dataset contains two tables from a company's HR database:\n\n1. A Department table with the ID and name of each department\n2. An Employee table with the ID, name, salary, joining date, and department reference for each employee\n\nAnalyze department-wise salary rankings and identify specific salary positions within each department.",
    schema: {
      Department: [
        { name: 'id', type: 'INT', constraint: 'PK' },
        { name: 'name', type: 'VARCHAR(50)', constraint: '' },
      ],
      Employee: [
        { name: 'id', type: 'INT', constraint: 'PK' },
        { name: 'name', type: 'VARCHAR(50)', constraint: '' },
        { name: 'salary', type: 'DECIMAL(10,2)', constraint: '' },
        { name: 'joining_date', type: 'DATE', constraint: '' },
        { name: 'department_id', type: 'INT', constraint: 'FK' },
      ],
    },
    departmentData: [
      { id: 1, name: 'HR' },
      { id: 2, name: 'Engineering' },
      { id: 3, name: 'Marketing' },
      { id: 4, name: 'Sales' },
      { id: 5, name: 'IT' },
      { id: 6, name: 'Finance' },
      { id: 7, name: 'Graphic Designer' },
      { id: 8, name: 'Data Analyst' },
    ],
    employeeData: [
      { id: 1, name: 'Alice', salary: '70000', joining_date: '2020-01-15', department_id: 1 },
      { id: 2, name: 'Bob', salary: '85000', joining_date: '2019-03-22', department_id: 2 },
      { id: 3, name: 'Charlie', salary: '60000', joining_date: '2021-05-18', department_id: 1 },
      { id: 4, name: 'David', salary: '95000', joining_date: '2018-07-11', department_id: 3 },
      { id: 5, name: 'Eva', salary: '80000', joining_date: '2017-09-09', department_id: 2 },
      { id: 6, name: 'Frank', salary: '75000', joining_date: '2016-11-14', department_id: 3 },
      { id: 7, name: 'Grace', salary: '90000', joining_date: '2015-02-23', department_id: 1 },
      { id: 8, name: 'Henry', salary: '68000', joining_date: '2021-04-30', department_id: 2 },
      { id: 9, name: 'Irene', salary: '72000', joining_date: '2020-06-25', department_id: 1 },
      { id: 10, name: 'Jack', salary: '78000', joining_date: '2019-08-19', department_id: 3 },
      { id: 11, name: 'Karen', salary: '83000', joining_date: '2018-10-07', department_id: 4 },
      { id: 12, name: 'Leo', salary: '95000', joining_date: '2017-12-13', department_id: 1 },
      { id: 13, name: 'Mona', salary: '87000', joining_date: '2016-03-21', department_id: 2 },
      { id: 14, name: 'Nick', salary: '63000', joining_date: '2015-05-29', department_id: 5 },
      { id: 15, name: 'Olivia', salary: '77000', joining_date: '2014-07-15', department_id: 1 },
      { id: 16, name: 'Peter', salary: '82000', joining_date: '2021-01-18', department_id: 2 },
      { id: 17, name: 'Quinn', salary: '91000', joining_date: '2020-03-12', department_id: 6 },
      { id: 18, name: 'Rachel', salary: '88000', joining_date: '2019-09-28', department_id: 1 },
      { id: 19, name: 'Steve', salary: '93000', joining_date: '2018-11-06', department_id: 2 },
      { id: 20, name: 'Tina', salary: '76000', joining_date: '2017-04-16', department_id: 3 },
    ],
    task: 'Department-wise Salary Ranking: Which employees have the second highest salary and third lowest salary in their respective departments?\n\nThe final result table should have department_name, second_highest, and third_lowest columns.',
    outputColumns: ['department_name', 'second_highest', 'third_lowest'],
    expectedOutputPreview: [
      { department_name: 'Engineering', second_highest: 'Mona', third_lowest: 'Peter' },
      { department_name: 'HR', second_highest: 'Grace', third_lowest: 'Irene' },
      { department_name: 'Marketing', second_highest: 'Jack', third_lowest: 'Jack' },
    ] as Record<string, string>[],
    hint: [
      'Create one CTE to rank salaries from highest to lowest within each department.',
      'Create another CTE to rank salaries from lowest to highest within each department.',
      'Use DENSE_RANK() with PARTITION BY department so ranking restarts for every department.',
      'Join both ranked CTEs on department name, then filter rank_desc = 2 and rank_asc = 3.',
    ] as string[] | undefined,
    hintTitle: 'Before You Solve' as string | undefined,
    solution: {
      sql: `/* Department-wise Salary Ranking

Question:
List the employees who have the second highest salary and the third lowest salary
in their respective departments.

The final result table should have:
department_name | second_highest | third_lowest */

with cte as (
    select
        e.name,
        d.name as dept,
        salary,
        dense_rank() over (
            partition by d.name
            order by salary desc
        ) as rank_desc
    from employee e
    inner join department d
        on e.department_id = d.id
    group by 1, 2, 3
),

cte2 as (
    select
        e.name,
        d.name as dept,
        salary,
        dense_rank() over (
            partition by d.name
            order by salary asc
        ) as rank_asc
    from employee e
    inner join department d
        on e.department_id = d.id
    group by 1, 2, 3
)

select
    c.dept as department_name,
    c.name as second_highest,
    d.name as third_lowest
from cte c
inner join cte2 d
    on d.dept = c.dept
where rank_desc = 2
  and rank_asc = 3;`,
      howItWorks: [
        'The first CTE ranks employees department-wise from highest salary to lowest salary.',
        'DENSE_RANK() OVER (PARTITION BY d.name ORDER BY salary DESC) assigns salary rank within each department.',
        'The second CTE ranks employees department-wise from lowest salary to highest salary.',
        'DENSE_RANK() OVER (PARTITION BY d.name ORDER BY salary ASC) identifies the lowest salary ranks within each department.',
        'The two CTEs are joined on department name.',
        'rank_desc = 2 filters the employee with the second highest salary in each department.',
        'rank_asc = 3 filters the employee with the third lowest salary in each department.',
        'Departments that do not have enough employees for both ranking positions are not shown in the final result.',
      ],
      commonMistake: {
        title: 'Ranking Without Partitioning',
        points: [
          'If you forget PARTITION BY d.name, SQL ranks all employees across the company instead of ranking within each department.',
          'DENSE_RANK() is useful when salaries tie because tied salaries receive the same rank without creating rank gaps.',
        ],
      } as { title: string; points: string[] } | undefined,
      observation: undefined as { title: string; points: string[] } | undefined,
      result: [
        { department_name: 'Engineering', second_highest: 'Mona', third_lowest: 'Peter' },
        { department_name: 'HR', second_highest: 'Grace', third_lowest: 'Irene' },
        { department_name: 'Marketing', second_highest: 'Jack', third_lowest: 'Jack' },
      ] as Record<string, string>[],
    },
  },
  'sql-drill-14': {
    id: 'sql-drill-14',
    number: 14,
    title: 'Vehicle Capacity Allocation',
    tool: 'SQL' as const,
    difficulty: 'Intermediate' as Difficulty,
    skills: ['Window Functions', 'Running Total', 'SUM OVER', 'GROUP_CONCAT', 'CTE', 'Capacity Analysis'],
    description: 'Find the list of packages each vehicle can carry without exceeding its fixed capacity.',
    setup: "Your dataset contains two logistics tables:\n\n1. A Vehicle table with the vehicle ID and maximum carrying capacity\n2. A Packages table with each package ID, package weight, and the vehicle assigned to carry it\n\nAnalyze whether assigned packages can be loaded into each vehicle without crossing the vehicle's capacity.",
    schema: {
      Vehicle: [
        { name: 'ID', type: 'INT', constraint: 'PK' },
        { name: 'Capacity', type: 'INT', constraint: '' },
      ],
      Packages: [
        { name: 'ID', type: 'INT', constraint: 'PK' },
        { name: 'Weight', type: 'INT', constraint: '' },
        { name: 'vehicle_ID', type: 'INT', constraint: 'FK' },
      ],
    },
    sampleTables: [
      {
        name: 'Vehicle',
        rowCount: '4 rows',
        headers: ['ID', 'Capacity'],
        rows: [
          [1, 550],
          [2, 650],
          [3, 500],
          [4, 600],
        ],
      },
      {
        name: 'Packages',
        rowCount: '30 rows',
        headers: ['ID', 'Weight', 'vehicle_ID'],
        rows: [
          [1, 55, 1],
          [2, 60, 1],
          [3, 65, 2],
          [4, 70, 2],
          [5, 75, 3],
          [6, 80, 3],
          [7, 85, 4],
          [8, 90, 4],
          [9, 95, 1],
          [10, 100, 2],
          [11, 52, 3],
          [12, 57, 4],
          [13, 62, 1],
          [14, 67, 2],
          [15, 72, 3],
          [16, 77, 4],
          [17, 82, 1],
          [18, 87, 2],
          [19, 92, 3],
          [20, 97, 4],
          [21, 54, 1],
          [22, 59, 2],
          [23, 64, 3],
          [24, 69, 4],
          [25, 74, 1],
          [26, 79, 2],
          [27, 84, 3],
          [28, 89, 4],
          [29, 94, 1],
          [30, 99, 2],
        ],
      },
    ],
    departmentData: [] as { id: number; name: string }[],
    employeeData: [] as { id: number; name: string; salary: string; joining_date: string; department_id: number }[],
    task: 'Vehicle Capacity Allocation: What is the comma-separated list of packages each vehicle can carry without exceeding its capacity?\n\nThe packages should be selected in ascending order of their weight.\n\nThe final result table should have vehicle_id and packages columns.',
    outputColumns: ['vehicle_id', 'packages'],
    expectedOutputPreview: [
      { vehicle_id: '1', packages: '21,1,2,13,25,17,29' },
      { vehicle_id: '2', packages: '22,3,14,4,26,18,30' },
      { vehicle_id: '3', packages: '11,23,15,5,6,27' },
    ] as Record<string, string>[],
    hint: [
      'Join Packages with Vehicle so every package row also has its assigned vehicle capacity.',
      'Use SUM(Weight) OVER (PARTITION BY vehicle_ID ORDER BY Weight) to calculate a running total per vehicle.',
      'Filter rows where the running total is less than or equal to the vehicle capacity.',
      'Use GROUP_CONCAT to combine the selected package IDs into one comma-separated list per vehicle.',
    ] as string[] | undefined,
    hintTitle: 'Before You Solve' as string | undefined,
    solution: {
      sql: `/* Vehicle Capacity Allocation

Question:
Write a query to find a comma-separated list of all the packages that each vehicle can carry
without exceeding its capacity.

The packages should be selected in ascending order of their weight.

The final result table should have:
vehicle_id | packages */

with cte as (
    select
        p.ID,
        p.Weight,
        p.vehicle_ID,
        v.Capacity,
        sum(p.Weight) over (
            partition by p.vehicle_ID
            order by p.Weight
        ) as CumulativeWeight
    from packages p
    inner join vehicle v
        on p.vehicle_ID = v.ID
)

select
    vehicle_ID as vehicle_id,
    group_concat(ID order by ID asc) as packages
from cte
where CumulativeWeight <= Capacity
group by vehicle_ID
order by vehicle_ID;`,
      howItWorks: [
        "The Vehicle table stores each vehicle's maximum carrying capacity.",
        'The Packages table stores package weight and the vehicle assigned to that package.',
        'The CTE joins packages with their assigned vehicle capacity.',
        'SUM(p.Weight) OVER (PARTITION BY p.vehicle_ID ORDER BY p.Weight) calculates the running total of package weight for each vehicle.',
        'Packages are considered in ascending order of weight.',
        "WHERE CumulativeWeight <= Capacity keeps only those packages that can be loaded without crossing the vehicle's capacity.",
        'GROUP_CONCAT(ID ORDER BY ID ASC) combines the selected package IDs into a comma-separated list for each vehicle.',
        'GROUP BY vehicle_ID returns one row per vehicle.',
      ],
      commonMistake: {
        title: 'Ordering Running Totals',
        points: [
          'The running total must be ordered by Weight because the problem asks packages to be selected in ascending order of weight.',
          'GROUP_CONCAT in the final output is ordered by package ID as requested in the provided solution output.',
        ],
      } as { title: string; points: string[] } | undefined,
      observation: undefined as { title: string; points: string[] } | undefined,
      result: [
        { vehicle_id: '1', packages: '21,1,2,13,25,17,29' },
        { vehicle_id: '2', packages: '22,3,14,4,26,18,30' },
        { vehicle_id: '3', packages: '11,23,15,5,6,27' },
        { vehicle_id: '4', packages: '12,24,16,7,28,8' },
      ] as Record<string, string>[],
    },
  },
  'sql-drill-15': {
    id: 'sql-drill-15',
    number: 15,
    title: 'Quarter-wise Salesman Bonus Analysis',
    tool: 'SQL' as const,
    difficulty: 'Intermediate' as Difficulty,
    skills: ['CASE WHEN', 'CTE', 'Conditional Aggregation', 'GROUP BY', 'Pivot Output', 'Business Rules'],
    description: 'Calculate the bonus earned by each salesman in each quarter based on sales targets and car make bonus rules.',
    setup: "Your dataset contains two sales performance tables:\n\n1. A Sales table with car make, type, style, sale value, purchase date, and salesman reference\n2. A Salesman table with salesman IDs and names\n\nAnalyze quarter-wise bonus earned by each salesman based on sales performance, car make bonus, and quarterly target achievement.",
    schema: {
      Sales: [
        { name: 'sale_id', type: 'INT', constraint: 'PK' },
        { name: 'make', type: 'VARCHAR(50)', constraint: '' },
        { name: 'type', type: 'VARCHAR(50)', constraint: '' },
        { name: 'style', type: 'VARCHAR(50)', constraint: '' },
        { name: 'cost_$', type: 'DECIMAL(10,2)', constraint: '' },
        { name: 'purchased_date', type: 'DATE', constraint: '' },
        { name: 'salesman_id', type: 'INT', constraint: 'FK' },
      ],
      Salesman: [
        { name: 'salesman_id', type: 'INT', constraint: 'PK' },
        { name: 'name', type: 'VARCHAR(50)', constraint: '' },
      ],
    },
    sampleTables: [
      {
        name: 'Salesman',
        rowCount: '4 rows',
        headers: ['salesman_id', 'name'],
        rows: [
          [101, 'John Doe'],
          [102, 'Jane Smith'],
          [103, 'Robert Brown'],
          [104, 'Emily Davis'],
        ],
      },
      {
        name: 'Sales',
        rowCount: '9 rows',
        headers: ['sale_id', 'make', 'type', 'style', 'cost_$', 'purchased_date', 'salesman_id'],
        rows: [
          [1, 'Honda', 'Sedan', 'Accord', 2800, '2023-05-15', 104],
          [2, 'BMW', 'SUV', 'X5', 6000, '2023-02-20', 102],
          [3, 'Audi', 'Sedan', 'A4', 45000, '2022-11-13', 104],
          [4, 'Ford', 'Truck', 'F-150', 40000, '2023-07-24', 103],
          [5, 'Nissan', 'Hatchback', 'Civic', 2200, '2023-03-30', 103],
          [6, 'Mercedes', 'Sedan', 'C-Class', 45000, '2022-09-17', 101],
          [7, 'Toyota', 'SUV', 'GLC', 52000, '2023-01-05', 102],
          [8, 'Audi', 'SUV', 'Q5', 55000, '2022-08-21', 101],
          [9, 'BMW', 'Truck', 'Frontier', 28000, '2023-04-18', 104],
        ],
      },
      {
        name: 'Car Make Bonus',
        rowCount: '7 rules',
        headers: ['Car Make', 'Bonus per Sale'],
        rows: [
          ['Honda', 200],
          ['Ford', 350],
          ['Audi', 400],
          ['Nissan', 120],
          ['Toyota', 270],
          ['BMW', 600],
          ['Mercedes', 590],
        ],
      },
      {
        name: 'Quarterly Sales Target',
        rowCount: '4 rules',
        headers: ['Quarter', 'Months', 'Sales Target'],
        rows: [
          ['Q1', 'January, February, March', 100000],
          ['Q2', 'April, May, June', 60000],
          ['Q3', 'July, August, September', 1000000],
          ['Q4', 'October, November, December', 1000000],
        ],
      },
    ],
    departmentData: [] as { id: number; name: string }[],
    employeeData: [] as { id: number; name: string; salary: string; joining_date: string; department_id: number }[],
    task: 'Quarter-wise Salesman Bonus Analysis: What is the total bonus received by each salesman in each quarter?\n\nBonus rule: Bonus = 10% of total sales + car make bonus. If a salesman does not meet the sales target for a quarter, they receive only the car make bonus for that quarter.\n\nThe final result table should have name, q1, q2, q3, and q4 columns.',
    outputColumns: ['name', 'q1', 'q2', 'q3', 'q4'],
    expectedOutputPreview: [
      { name: 'Emily Davis', q1: '0', q2: '800', q3: '0', q4: '400' },
      { name: 'Jane Smith', q1: '870', q2: '0', q3: '0', q4: '0' },
      { name: 'John Doe', q1: '0', q2: '0', q3: '990', q4: '0' },
    ] as Record<string, string>[],
    hint: [
      'Use MONTH(purchased_date) to convert every sale into a quarter number.',
      'Use CASE WHEN to calculate the make bonus for each car sale.',
      'Aggregate total sales and make bonus by salesman_id and quarter.',
      'Compare total_sales with the quarter target before deciding whether to add the 10% sales bonus.',
      'Use conditional aggregation to pivot quarter-wise bonus rows into q1, q2, q3, and q4 columns.',
    ] as string[] | undefined,
    hintTitle: 'Before You Solve' as string | undefined,
    solution: {
      sql: `/* Quarter-wise Salesman Bonus Analysis

Question:
Find the total bonus received by each salesman in each quarter.

The final result table should have:
name | q1 | q2 | q3 | q4 */

with cte1 as
(
    with cte as
    (
        select
            salesman_id,
            case
                when month(purchased_date) between 1 and 3 then 1
                when month(purchased_date) between 4 and 6 then 2
                when month(purchased_date) between 7 and 9 then 3
                when month(purchased_date) between 10 and 12 then 4
            end as quarters,

            round(sum(cost_$), 0) as Total_sales,

            sum(
                case
                    when make = 'Honda' then 200
                    when make = 'Ford' then 350
                    when make = 'Audi' then 400
                    when make = 'Nissan' then 120
                    when make = 'Toyota' then 270
                    when make = 'BMW' then 600
                    when make = 'Mercedes' then 590
                    else 0
                end
            ) as make_bonus

        from sales
        group by 1, 2
        order by 2
    )

    select
        *,
        if(
            quarters = 1, 100000,
            if(quarters = 2, 60000, 1000000)
        ) as sales_target
    from cte
)

select
    name,
    sum(case when quarters = 1 then bonus else 0 end) as q1,
    sum(case when quarters = 2 then bonus else 0 end) as q2,
    sum(case when quarters = 3 then bonus else 0 end) as q3,
    sum(case when quarters = 4 then bonus else 0 end) as q4
from
(
    select
        salesman_id,
        quarters,
        if(
            total_sales >= sales_target,
            (total_sales * 0.1) + make_bonus,
            make_bonus
        ) as bonus
    from cte1
) c
inner join salesman
    using(salesman_id)
group by 1
order by 1;`,
      howItWorks: [
        'The inner CTE identifies the quarter for each sale using MONTH(purchased_date).',
        'SUM(cost_$) calculates total quarterly sales for each salesman.',
        'The CASE WHEN logic assigns the correct car make bonus for each sale.',
        'The second CTE assigns the quarterly sales target based on the quarter number.',
        'The bonus is calculated using the rule: if quarterly sales meet the target, bonus is 10% of total sales plus make bonus; otherwise, only make bonus is given.',
        'The final query joins the bonus data with the Salesman table to get salesman names.',
        'Conditional aggregation converts quarter-wise rows into columns using SUM(CASE WHEN quarters = ... THEN bonus ELSE 0 END).',
        'The final output shows one row per salesman with bonus values for Q1, Q2, Q3, and Q4.',
      ],
      commonMistake: {
        title: 'Pivoting Before Applying Business Rules',
        points: [
          'Calculate the bonus at the salesman-quarter level first, then pivot the result into q1, q2, q3, and q4 columns.',
          'If you pivot too early, it becomes easier to apply the wrong target or add the make bonus in the wrong quarter.',
          'Remember that Q3 and Q4 both use a target of 1000000 in this dataset.',
        ],
      } as { title: string; points: string[] } | undefined,
      observation: undefined as { title: string; points: string[] } | undefined,
      result: [
        { name: 'Emily Davis', q1: '0', q2: '800', q3: '0', q4: '400' },
        { name: 'Jane Smith', q1: '870', q2: '0', q3: '0', q4: '0' },
        { name: 'John Doe', q1: '0', q2: '0', q3: '990', q4: '0' },
        { name: 'Robert Brown', q1: '120', q2: '0', q3: '350', q4: '0' },
      ] as Record<string, string>[],
    },
  },
  'sql-drill-16': {
    id: 'sql-drill-16',
    number: 16,
    title: 'Daily Employee Salary Calculation',
    tool: 'SQL' as const,
    difficulty: 'Intermediate' as Difficulty,
    skills: ['Window Functions', 'LEAD', 'CTE', 'TIMESTAMPDIFF', 'Date Conversion', 'Salary Analysis'],
    description: 'Calculate daily salary of each employee based on login-logout swipe activity and hourly salary rate.',
    setup: "Your dataset contains two employee attendance and compensation tables:\n\n1. A Salary table with employee name and hourly salary rate\n2. A Swipe table with login and logout swipe activity timestamps\n\nAnalyze employee swipe activity and calculate salary earned by each employee on a daily basis.",
    schema: {
      Salary: [
        { name: 'employee_id', type: 'INT', constraint: '' },
        { name: 'name', type: 'VARCHAR(100)', constraint: '' },
        { name: 'salary_per_hour_$', type: 'FLOAT', constraint: '' },
      ],
      Swipe: [
        { name: 'employee_id', type: 'INT', constraint: 'FK' },
        { name: 'activity_type', type: 'VARCHAR(10)', constraint: '' },
        { name: 'activity_time', type: 'DATETIME', constraint: '' },
      ],
    },
    sampleTables: [
      {
        name: 'Salary',
        rowCount: '4 rows',
        headers: ['employee_id', 'name', 'salary_per_hour_$'],
        rows: [
          [1, 'Jeremy', 16.78],
          [2, 'Nicole', 25.87],
          [3, 'Naomi', 22.45],
          [4, 'Lyanne', 19.27],
        ],
      },
      {
        name: 'Swipe',
        rowCount: '20 rows',
        headers: ['employee_id', 'activity_type', 'activity_time'],
        rows: [
          [1, 'login', '2024-07-23 08:00:00'],
          [1, 'logout', '2024-07-23 12:00:00'],
          [1, 'login', '2024-07-23 13:00:00'],
          [1, 'logout', '2024-07-23 17:00:00'],
          [2, 'login', '2024-07-23 09:00:00'],
          [2, 'logout', '2024-07-23 11:00:00'],
          [2, 'login', '2024-07-23 12:00:00'],
          [2, 'logout', '2024-07-23 15:00:00'],
          [1, 'login', '2024-07-24 08:30:00'],
          [1, 'logout', '2024-07-24 12:30:00'],
          [2, 'login', '2024-07-24 09:30:00'],
          [2, 'logout', '2024-07-24 10:30:00'],
          [3, 'login', '2024-07-24 09:00:00'],
          [3, 'logout', '2024-07-24 13:45:00'],
          [3, 'login', '2024-07-24 14:30:00'],
          [3, 'logout', '2024-07-24 17:30:00'],
          [4, 'login', '2024-07-23 10:30:00'],
          [4, 'logout', '2024-07-23 15:00:00'],
          [4, 'login', '2024-07-23 16:30:00'],
          [4, 'logout', '2024-07-23 19:00:00'],
        ],
      },
    ],
    departmentData: [] as { id: number; name: string }[],
    employeeData: [] as { id: number; name: string; salary: string; joining_date: string; department_id: number }[],
    task: 'Daily Employee Salary Calculation: What is the total salary of each employee for each working day?\n\nThe final result table should have name, activity_date, and salary columns.',
    outputColumns: ['name', 'activity_date', 'salary'],
    expectedOutputPreview: [
      { name: 'Jeremy', activity_date: '2024-07-23', salary: '134.24' },
      { name: 'Jeremy', activity_date: '2024-07-24', salary: '67.12' },
      { name: 'Lyanne', activity_date: '2024-07-23', salary: '134.89' },
    ] as Record<string, string>[],
    hint: [
      'Use CAST(activity_time AS DATE) to group swipes by working date.',
      'Use LEAD(activity_time) to pair each login row with the next swipe timestamp.',
      'Filter only login rows after calculating the next swipe time.',
      'Use TIMESTAMPDIFF(minute, login_time, logout_time) / 60 to calculate working hours.',
      'Multiply total daily working hours by salary_per_hour_$ and round to two decimals.',
    ] as string[] | undefined,
    hintTitle: 'Before You Solve' as string | undefined,
    solution: {
      sql: `/* Daily Employee Salary Calculation

Question:
Find the total salary of each employee on a daily basis.

The final result table should have:
name | activity_date | salary */

with cte1 as
(
    with cte as
    (
        select
            employee_id,
            activity_type,
            cast(activity_time as date) as activity_date,
            activity_time as login_time,
            lead(activity_time, 1) over (
                partition by cast(activity_time as date), employee_id
                order by activity_time
            ) as logout_time
        from swipe
    )

    select
        *,
        timestampdiff(minute, login_time, logout_time) / 60 as working_hour
    from cte
    where activity_type = 'login'
)

select distinct
    name,
    activity_date,
    round(
        sum(working_hour) over (
            partition by activity_date, employee_id
        ) * salary_per_hour_$,
        2
    ) as salary
from cte1
right join salary
    using(employee_id);`,
      howItWorks: [
        'The Salary table stores the hourly salary rate of each employee.',
        'The Swipe table stores every login and logout activity recorded by the card punching machine.',
        'CAST(activity_time AS DATE) extracts the date from the swipe timestamp.',
        'LEAD(activity_time) fetches the next swipe time for the same employee on the same date.',
        'For every login row, the next swipe time becomes the matching logout_time.',
        'TIMESTAMPDIFF(minute, login_time, logout_time) / 60 calculates working hours accurately, including partial hours.',
        'The query filters only login rows because working duration is calculated from login to the next logout.',
        'SUM(working_hour) OVER (PARTITION BY activity_date, employee_id) calculates total daily working hours for each employee.',
        'The final salary is calculated as total working hours multiplied by hourly salary rate.',
        'ROUND(..., 2) shows salary up to two decimal places.',
      ],
      commonMistake: {
        title: 'Filtering Login Rows Too Early',
        points: [
          'Do not filter to activity_type = "login" before LEAD() runs. LEAD() needs to see both login and logout rows so it can pair each login with the next swipe.',
          'Partition by both activity date and employee_id so the next swipe belongs to the same employee on the same working day.',
        ],
      } as { title: string; points: string[] } | undefined,
      observation: undefined as { title: string; points: string[] } | undefined,
      result: [
        { name: 'Jeremy', activity_date: '2024-07-23', salary: '134.24' },
        { name: 'Jeremy', activity_date: '2024-07-24', salary: '67.12' },
        { name: 'Lyanne', activity_date: '2024-07-23', salary: '134.89' },
        { name: 'Naomi', activity_date: '2024-07-24', salary: '173.99' },
        { name: 'Nicole', activity_date: '2024-07-23', salary: '129.35' },
        { name: 'Nicole', activity_date: '2024-07-24', salary: '25.87' },
      ] as Record<string, string>[],
    },
  },
  'sql-drill-17': {
    id: 'sql-drill-17',
    number: 17,
    title: 'Yearly Product Sales Report',
    tool: 'SQL' as const,
    difficulty: 'Intermediate' as Difficulty,
    skills: ['Date Functions', 'CASE WHEN', 'DATEDIFF', 'YEAR', 'UNION', 'JOIN', 'Sales Analysis'],
    description: 'Calculate yearly sales amount for each product when sales periods may start and end across different years.',
    setup: "Your dataset contains two sales analysis tables:\n\n1. A Product table with product IDs and product names\n2. A Sales table with product sales periods and average daily sales amount\n\nPrepare a yearly sales report for all products between 2018 and 2020 based on the number of applicable sales days.",
    schema: {
      Product: [
        { name: 'product_id', type: 'INT', constraint: 'PK' },
        { name: 'product_name', type: 'VARCHAR(255)', constraint: '' },
      ],
      Sales: [
        { name: 'product_id', type: 'INT', constraint: 'PK, FK' },
        { name: 'period_start', type: 'DATE', constraint: '' },
        { name: 'period_end', type: 'DATE', constraint: '' },
        { name: 'average_daily_sales', type: 'INT', constraint: '' },
      ],
    },
    sampleTables: [
      {
        name: 'Product',
        rowCount: '5 rows',
        headers: ['product_id', 'product_name'],
        rows: [
          [1, 'Mouse'],
          [2, 'Keyboard'],
          [3, 'Ram'],
          [4, 'Processor'],
          [5, 'Graphic Card'],
        ],
      },
      {
        name: 'Sales',
        rowCount: '10 rows',
        headers: ['product_id', 'period_start', 'period_end', 'average_daily_sales'],
        rows: [
          [1, '2018-11-15', '2019-01-15', 120],
          [2, '2019-03-01', '2019-03-31', 80],
          [5, '2020-01-01', '2020-12-31', 5],
          [4, '2018-07-01', '2018-12-31', 70],
          [3, '2019-06-15', '2020-01-15', 120],
          [1, '2020-02-01', '2020-06-30', 120],
          [2, '2020-07-01', '2020-12-31', 80],
          [3, '2019-08-01', '2019-12-31', 45],
          [4, '2019-01-01', '2019-06-30', 25],
          [5, '2018-10-01', '2019-03-31', 15],
        ],
      },
    ],
    departmentData: [] as { id: number; name: string }[],
    employeeData: [] as { id: number; name: string; salary: string; joining_date: string; department_id: number }[],
    task: 'Yearly Product Sales Report: What is the total sales amount of each product for each year based on the number of applicable sales days?\n\nThe sales years are between 2018 and 2020.\n\nThe final result table should have product_id, product_name, report_year, and total_amount columns.',
    outputColumns: ['product_id', 'product_name', 'report_year', 'total_amount'],
    expectedOutputPreview: [
      { product_id: '1', product_name: 'Mouse', report_year: '2018', total_amount: '5640' },
      { product_id: '1', product_name: 'Mouse', report_year: '2019', total_amount: '1800' },
      { product_id: '1', product_name: 'Mouse', report_year: '2020', total_amount: '18120' },
    ] as Record<string, string>[],
    hint: [
      'Create one reporting row per product for each year from 2018 to 2020.',
      'Use CASE WHEN to calculate how many days of each sales period fall inside the reporting year.',
      'Remember that DATEDIFF returns the gap between dates, so add 1 when you need inclusive day counts.',
      'Filter out product-year combinations where the calculated amount is 0.',
    ] as string[] | undefined,
    hintTitle: 'Before You Solve' as string | undefined,
    solution: {
      sql: `/* Yearly Product Sales Report

Question:
Write an SQL query to report the total sales amount of each item for each year,
with corresponding product_id, product_name, report_year and total_amount.

The sales years are between 2018 and 2020.
Return the result table ordered by product_id and report_year. */

SELECT
    b.product_id,
    a.product_name,
    a.yr AS report_year,
    CASE
        WHEN YEAR(b.period_start) = YEAR(b.period_end)
             AND a.yr = YEAR(b.period_start)
        THEN DATEDIFF(b.period_end, b.period_start) + 1

        WHEN a.yr = YEAR(b.period_start)
        THEN DATEDIFF(DATE_FORMAT(b.period_start, '%Y-12-31'), b.period_start) + 1

        WHEN a.yr = YEAR(b.period_end)
        THEN DAYOFYEAR(b.period_end)

        WHEN a.yr > YEAR(b.period_start)
             AND a.yr < YEAR(b.period_end)
        THEN 365

        ELSE 0
    END * average_daily_sales AS total_amount
FROM
    (
        SELECT product_id, product_name, '2018' AS yr FROM Product
        UNION
        SELECT product_id, product_name, '2019' AS yr FROM Product
        UNION
        SELECT product_id, product_name, '2020' AS yr FROM Product
    ) a
JOIN Sales b
    ON a.product_id = b.product_id
HAVING total_amount > 0
ORDER BY b.product_id, a.yr;`,
      howItWorks: [
        'The Product table stores product names.',
        'The Sales table stores the sales period and average daily sales for each product.',
        'The derived table a creates one row for every product for each reporting year: 2018, 2019, and 2020.',
        'The query joins this year-wise product list with the Sales table using product_id.',
        'The CASE WHEN logic calculates how many days of the sales period fall inside each reporting year.',
        'If the sales period starts and ends in the same year, DATEDIFF(period_end, period_start) + 1 calculates the number of inclusive days.',
        'If the reporting year is the start year, the query counts days from period_start to December 31 of that year.',
        'If the reporting year is the end year, DAYOFYEAR(period_end) counts days from January 1 to period_end.',
        'The number of applicable days is multiplied by average_daily_sales to calculate total_amount.',
        'HAVING total_amount > 0 removes product-year combinations where no sales happened.',
        'The final result is ordered by product_id and report_year.',
      ],
      commonMistake: {
        title: 'Inclusive Date Counts',
        points: [
          'DATEDIFF(period_end, period_start) excludes the starting day from the count, so add 1 for inclusive sales periods.',
          'When the period spans years, calculate only the portion that belongs to the reporting year before multiplying by average_daily_sales.',
        ],
      } as { title: string; points: string[] } | undefined,
      observation: undefined as { title: string; points: string[] } | undefined,
      result: [
        { product_id: '1', product_name: 'Mouse', report_year: '2018', total_amount: '5640' },
        { product_id: '1', product_name: 'Mouse', report_year: '2019', total_amount: '1800' },
        { product_id: '1', product_name: 'Mouse', report_year: '2020', total_amount: '18120' },
        { product_id: '2', product_name: 'Keyboard', report_year: '2019', total_amount: '2480' },
        { product_id: '2', product_name: 'Keyboard', report_year: '2020', total_amount: '14720' },
        { product_id: '3', product_name: 'Ram', report_year: '2019', total_amount: '24000' },
        { product_id: '3', product_name: 'Ram', report_year: '2019', total_amount: '6885' },
        { product_id: '3', product_name: 'Ram', report_year: '2020', total_amount: '1800' },
        { product_id: '4', product_name: 'Processor', report_year: '2018', total_amount: '12880' },
        { product_id: '4', product_name: 'Processor', report_year: '2019', total_amount: '4525' },
        { product_id: '5', product_name: 'Graphic Card', report_year: '2018', total_amount: '1380' },
        { product_id: '5', product_name: 'Graphic Card', report_year: '2019', total_amount: '1350' },
        { product_id: '5', product_name: 'Graphic Card', report_year: '2020', total_amount: '1830' },
      ] as Record<string, string>[],
    },
  },
  'sql-drill-18': {
    id: 'sql-drill-18',
    number: 18,
    title: 'Batch-wise Order Packaging Allocation',
    tool: 'SQL' as const,
    difficulty: 'Advanced' as Difficulty,
    skills: ['Recursive CTE', 'ROW_NUMBER', 'LEFT JOIN', 'GROUP BY', 'Allocation Logic', 'Inventory Analysis'],
    description: 'Find which order was packaged from which batch and in what quantity using recursive CTEs and row-wise allocation logic.',
    setup: "Your dataset contains two packaging allocation tables:\n\n1. A Batches table with batch IDs and available quantity in each batch\n2. An Orders table with order numbers and required quantity for each order\n\nThe packaging company uses batches sequentially. It starts from the first batch, and only after that batch is exhausted, it moves to the next batch.",
    schema: {
      Batches: [
        { name: 'batch_id', type: 'VARCHAR(10)', constraint: '' },
        { name: 'quantity', type: 'INT', constraint: '' },
      ],
      Orders: [
        { name: 'order_number', type: 'VARCHAR(10)', constraint: '' },
        { name: 'quantity', type: 'INT', constraint: '' },
      ],
    },
    sampleTables: [
      {
        name: 'Batches',
        rowCount: '10 rows',
        headers: ['batch_id', 'quantity'],
        rows: [
          ['BA', 10],
          ['BB', 12],
          ['BC', 10],
          ['BD', 16],
          ['BE', 15],
          ['BF', 13],
          ['BG', 19],
          ['BH', 10],
          ['BI', 14],
          ['BJ', 16],
        ],
      },
      {
        name: 'Orders',
        rowCount: '20 rows',
        headers: ['order_number', 'quantity'],
        rows: [
          ['OA', 5],
          ['OB', 4],
          ['OC', 2],
          ['OD', 8],
          ['OE', 7],
          ['OF', 10],
          ['OG', 12],
          ['OH', 6],
          ['OI', 12],
          ['OJ', 10],
          ['OK', 8],
          ['OL', 16],
          ['OM', 8],
          ['ON', 5],
          ['OO', 3],
          ['OP', 4],
          ['OQ', 12],
          ['OR', 9],
          ['OS', 6],
          ['OT', 10],
        ],
      },
    ],
    departmentData: [] as { id: number; name: string }[],
    employeeData: [] as { id: number; name: string; salary: string; joining_date: string; department_id: number }[],
    task: 'Batch-wise Order Packaging Allocation: Which order was packaged from which batch and in what quantity?\n\nThe final result table should have order_number, batch_id, and quantity columns.',
    outputColumns: ['order_number', 'batch_id', 'quantity'],
    expectedOutputPreview: [
      { order_number: 'OA', batch_id: 'BA', quantity: '5' },
      { order_number: 'OB', batch_id: 'BA', quantity: '4' },
      { order_number: 'OC', batch_id: 'BA', quantity: '1' },
      { order_number: 'OC', batch_id: 'BB', quantity: '1' },
    ] as Record<string, string>[],
    hint: [
      'Use recursive CTEs to split each batch and each order into unit-level rows.',
      'Assign ROW_NUMBER() to batch units and order units to create a common sequence.',
      'Join order units to batch units by row number to simulate sequential allocation.',
      'Aggregate the unit-level matches back to order_number and batch_id.',
      'Use LEFT JOIN so any unfulfilled order units remain visible with a NULL batch_id.',
    ] as string[] | undefined,
    hintTitle: 'Before You Solve' as string | undefined,
    solution: {
      sql: `/* Batch-wise Order Packaging Allocation

Question:
Find out which order, in what quantity, was packaged from which batch.

The final result table should have:
order_number | batch_id | quantity */

with batch_cte as
(
    select
        *,
        row_number() over(order by batch_id) as rn
    from
    (
        with recursive batch_split as
        (
            select
                batch_id,
                1 as quantity
            from batches

            union all

            select
                b.batch_id,
                (cte.quantity + 1) as quantity
            from batch_split cte
            join batches b
                on b.batch_id = cte.batch_id
               and b.quantity > cte.quantity
        )

        select
            batch_id,
            1 as quantity
        from batch_split
    ) x
),

order_cte as
(
    select
        *,
        row_number() over(order by order_number) as rn
    from
    (
        with recursive order_split as
        (
            select
                order_number,
                1 as quantity
            from orders

            union all

            select
                o.order_number,
                (cte.quantity + 1) as quantity
            from order_split cte
            join orders o
                on o.order_number = cte.order_number
               and o.quantity > cte.quantity
        )

        select
            order_number,
            1 as quantity
        from order_split
    ) x
)

select
    o.order_number,
    b.batch_id,
    sum(o.quantity) as quantity
from order_cte o
left join batch_cte b
    on o.rn = b.rn
group by
    o.order_number,
    b.batch_id
order by
    o.order_number,
    b.batch_id;`,
      howItWorks: [
        'The Batches table stores the quantity available in each batch.',
        'The Orders table stores the quantity required for each order.',
        'The recursive CTE batch_split breaks each batch quantity into unit-level rows. For example, a batch with quantity 10 becomes 10 rows.',
        'ROW_NUMBER() OVER(ORDER BY batch_id) assigns a running sequence number to every available unit across all batches.',
        'The recursive CTE order_split breaks each order quantity into unit-level rows. For example, an order with quantity 5 becomes 5 rows.',
        'ROW_NUMBER() OVER(ORDER BY order_number) assigns a running sequence number to every required unit across all orders.',
        'The query joins order units with batch units using the row number. This simulates sequential allocation from batches to orders.',
        'SUM(o.quantity) aggregates unit-level matches back into order-batch level quantities.',
        'The final output shows how much of each order was fulfilled from each batch.',
        'If total order quantity is higher than total batch quantity, the remaining order quantity appears with a NULL batch_id.',
      ],
      commonMistake: {
        title: 'Losing Unfulfilled Orders',
        points: [
          'Use LEFT JOIN from order_cte to batch_cte. An INNER JOIN would hide order units that could not be matched to available batch quantity.',
          'The row number ordering controls allocation order, so use the required sequential order consistently for both batches and orders.',
        ],
      } as { title: string; points: string[] } | undefined,
      observation: undefined as { title: string; points: string[] } | undefined,
      result: [
        { order_number: 'OA', batch_id: 'BA', quantity: '5' },
        { order_number: 'OB', batch_id: 'BA', quantity: '4' },
        { order_number: 'OC', batch_id: 'BA', quantity: '1' },
        { order_number: 'OC', batch_id: 'BB', quantity: '1' },
        { order_number: 'OD', batch_id: 'BB', quantity: '8' },
        { order_number: 'OE', batch_id: 'BB', quantity: '3' },
        { order_number: 'OE', batch_id: 'BC', quantity: '4' },
        { order_number: 'OF', batch_id: 'BC', quantity: '6' },
        { order_number: 'OF', batch_id: 'BD', quantity: '4' },
        { order_number: 'OG', batch_id: 'BD', quantity: '12' },
        { order_number: 'OH', batch_id: 'BE', quantity: '6' },
        { order_number: 'OI', batch_id: 'BE', quantity: '9' },
        { order_number: 'OI', batch_id: 'BF', quantity: '3' },
        { order_number: 'OJ', batch_id: 'BF', quantity: '10' },
        { order_number: 'OK', batch_id: 'BG', quantity: '8' },
        { order_number: 'OL', batch_id: 'BG', quantity: '11' },
        { order_number: 'OL', batch_id: 'BH', quantity: '5' },
        { order_number: 'OM', batch_id: 'BH', quantity: '5' },
        { order_number: 'OM', batch_id: 'BI', quantity: '3' },
        { order_number: 'ON', batch_id: 'BI', quantity: '5' },
        { order_number: 'OO', batch_id: 'BI', quantity: '3' },
        { order_number: 'OP', batch_id: 'BI', quantity: '3' },
        { order_number: 'OP', batch_id: 'BJ', quantity: '1' },
        { order_number: 'OQ', batch_id: 'BJ', quantity: '12' },
        { order_number: 'OR', batch_id: 'BJ', quantity: '3' },
        { order_number: 'OR', batch_id: 'NULL', quantity: '6' },
        { order_number: 'OS', batch_id: 'NULL', quantity: '6' },
        { order_number: 'OT', batch_id: 'NULL', quantity: '10' },
      ] as Record<string, string>[],
    },
  },
  'sql-drill-19': {
    id: 'sql-drill-19',
    number: 19,
    title: 'Ropeway Station Route Analysis',
    tool: 'SQL' as const,
    difficulty: 'Advanced' as Difficulty,
    skills: ['CTE', 'SELF JOIN', 'CASE WHEN', 'INNER JOIN', 'Route Analysis', 'Graph-style Query'],
    description: 'Find valid ropeway transportation routes where altitude decreases from start point to middle point to end point.',
    setup: "Your dataset contains two ropeway network tables:\n\n1. A Ropeway_Stations table with station IDs, station names, and altitude\n2. A Stations table with directly connected ropeway station pairs\n\nAnalyze the ropeway station network and identify valid transportation routes for moving rocks from a higher-altitude point to a lower-altitude point. Each route in the Stations table is bidirectional.",
    schema: {
      Ropeway_Stations: [
        { name: 'id', type: 'INTEGER', constraint: '' },
        { name: 'name', type: 'VARCHAR(40)', constraint: '' },
        { name: 'altitude', type: 'INTEGER', constraint: '' },
      ],
      Stations: [
        { name: 'point1', type: 'INTEGER', constraint: '' },
        { name: 'point2', type: 'INTEGER', constraint: '' },
      ],
    },
    sampleTables: [
      {
        name: 'Ropeway_Stations',
        rowCount: '5 rows',
        headers: ['id', 'name', 'altitude'],
        rows: [
          [1, 'Girijesh', 1900],
          [2, 'Gandhamadhan', 2100],
          [3, 'Himadri', 1600],
          [4, 'Indrakeel', 782],
          [5, 'Nagaja', 1370],
        ],
      },
      {
        name: 'Stations',
        rowCount: '5 rows',
        headers: ['point1', 'point2'],
        rows: [
          [1, 3],
          [3, 2],
          [3, 5],
          [4, 5],
          [1, 5],
        ],
      },
    ],
    departmentData: [] as { id: number; name: string }[],
    employeeData: [] as { id: number; name: string; salary: string; joining_date: string; department_id: number }[],
    task: 'Ropeway Route Analysis: Which triplets of stations can be used as startpt, middlept, and endpt, where altitude decreases at every step?\n\nThe route should satisfy: start point altitude > middle point altitude > end point altitude.\n\nThe final result table should have startpt, middlept, and endpt columns.',
    outputColumns: ['startpt', 'middlept', 'endpt'],
    expectedOutputPreview: [
      { startpt: 'Girijesh', middlept: 'Himadri', endpt: 'Nagaja' },
      { startpt: 'Gandhamadhan', middlept: 'Himadri', endpt: 'Nagaja' },
      { startpt: 'Himadri', middlept: 'Nagaja', endpt: 'Indrakeel' },
    ] as Record<string, string>[],
    hint: [
      'Treat every connection in the Stations table as bidirectional.',
      'First standardize each direct connection so it points from the higher-altitude station to the lower-altitude station.',
      'Use CASE WHEN to choose the downhill start and end point for each edge.',
      'Self join the standardized downhill edges to find two-step routes where the first edge ends where the second edge starts.',
    ] as string[] | undefined,
    hintTitle: 'Before You Solve' as string | undefined,
    solution: {
      sql: `/* Ropeway Route Analysis

Question:
Create a query that finds all triplets:
startpt | middlept | endpt

The route should satisfy:
start point altitude > middle point altitude > end point altitude.

Each route in the stations table is bidirectional. */

with cte_1 as
(
    select
        t1.point1 as start_point,
        h1.name as start_point_name,
        h1.altitude as start_point_altitude,
        t1.point2 as end_point
    from ropeway_stations h1
    inner join stations t1
        on t1.point1 = h1.id
),

cte_2 as
(
    select
        t2.*,
        h2.name as end_point_name,
        h2.altitude as end_point_altitude,
        case
            when start_point_altitude > h2.altitude then 1
            else 0
        end as altitude_flag
    from cte_1 t2
    inner join ropeway_stations h2
        on h2.id = t2.end_point
),

cte_final as
(
    select
        case
            when altitude_flag = 1 then start_point
            else end_point
        end as start_point,

        case
            when altitude_flag = 1 then start_point_name
            else end_point_name
        end as start_point_name,

        case
            when altitude_flag = 1 then end_point
            else start_point
        end as end_point,

        case
            when altitude_flag = 1 then end_point_name
            else start_point_name
        end as end_point_name
    from cte_2
)

select
    c1.start_point_name as startpt,
    c1.end_point_name as middlept,
    c2.end_point_name as endpt
from cte_final c1
inner join cte_final c2
    on c1.end_point = c2.start_point;`,
      howItWorks: [
        'The ropeway_stations table contains the station name and altitude.',
        'The stations table contains directly connected station pairs.',
        'Since the routes are bidirectional, each connection must first be understood in terms of altitude direction.',
        'cte_1 joins each route with the altitude of the first point.',
        'cte_2 adds the altitude of the second point and checks whether the first point is higher than the second point.',
        'altitude_flag identifies whether the direction already follows a higher-to-lower route.',
        'cte_final standardizes every direct connection as a downhill route, where start_point is always higher than end_point.',
        'The final query joins cte_final with itself to find two connected downhill segments.',
        'The first segment gives startpt to middlept, and the second segment gives middlept to endpt.',
        'The final output contains valid three-station routes where altitude decreases from start point to middle point to end point.',
      ],
      commonMistake: {
        title: 'Forgetting Bidirectional Routes',
        points: [
          'A row such as 3 to 2 does not mean the only possible direction is Himadri to Gandhamadhan. The route is bidirectional, so altitude determines the valid downhill direction.',
          'Standardize every edge as higher altitude to lower altitude before self joining routes.',
        ],
      } as { title: string; points: string[] } | undefined,
      observation: undefined as { title: string; points: string[] } | undefined,
      result: [
        { startpt: 'Girijesh', middlept: 'Himadri', endpt: 'Nagaja' },
        { startpt: 'Gandhamadhan', middlept: 'Himadri', endpt: 'Nagaja' },
        { startpt: 'Himadri', middlept: 'Nagaja', endpt: 'Indrakeel' },
        { startpt: 'Girijesh', middlept: 'Nagaja', endpt: 'Indrakeel' },
      ] as Record<string, string>[],
    },
  },
  'sql-drill-20': {
    id: 'sql-drill-20',
    number: 20,
    title: 'Student Screening and Failed Subject Analysis',
    tool: 'SQL' as const,
    difficulty: 'Advanced' as Difficulty,
    skills: ['CTE', 'UNION ALL', 'CASE WHEN', 'GROUP_CONCAT', 'Conditional Logic', 'Ranking', 'Screening Analysis'],
    description: 'Identify students who cleared all subjects, calculate their percentage, and list failed subjects for students who did not qualify.',
    setup: "Your dataset contains three student screening tables:\n\n1. A Students table with roll numbers and student names\n2. A Scores table with marks across six subjects\n3. A Subjects table with subject names and pass marks\n\nOnly students who pass all six subjects will be considered for the interview round. The company also wants to know the subjects failed by students who did not qualify. There is an option between Subject5 and Subject6. If a student has taken both, the higher score between Subject5 and Subject6 should be considered while calculating total percentage.",
    schema: {
      Students: [
        { name: 'Roll_No', type: 'VARCHAR(20)', constraint: '' },
        { name: 'Name', type: 'VARCHAR(100)', constraint: '' },
      ],
      Scores: [
        { name: 'Student_ID', type: 'VARCHAR(20)', constraint: '' },
        { name: 'Subject1', type: 'INT', constraint: '' },
        { name: 'Subject2', type: 'INT', constraint: '' },
        { name: 'Subject3', type: 'INT', constraint: '' },
        { name: 'Subject4', type: 'INT', constraint: '' },
        { name: 'Subject5', type: 'INT', constraint: '' },
        { name: 'Subject6', type: 'INT', constraint: '' },
      ],
      Subjects: [
        { name: 'ID', type: 'VARCHAR(10)', constraint: '' },
        { name: 'Subject', type: 'VARCHAR(100)', constraint: '' },
        { name: 'Pass_Marks', type: 'INT', constraint: '' },
      ],
    },
    sampleTables: [
      {
        name: 'Subjects',
        rowCount: '6 rows',
        headers: ['ID', 'Subject', 'Pass_Marks'],
        rows: [
          ['S1', 'Excel', 50],
          ['S2', 'SQL', 50],
          ['S3', 'Python', 40],
          ['S4', 'Hadoop', 35],
          ['S5', 'Power BI', 40],
          ['S6', 'Tableau', 40],
        ],
      },
      {
        name: 'Students',
        rowCount: '6 rows',
        headers: ['Roll_No', 'Name'],
        rows: [
          ['2GR5CS011', 'Aarav Sharma'],
          ['2GR5CS012', 'Priya Gupta'],
          ['2GR5CS013', 'Rohit Singh'],
          ['2GR5CS014', 'Anjali Patel'],
          ['2GR5CS015', 'Karan Mehta'],
          ['2GR5CS016', 'Nisha Reddy'],
        ],
      },
      {
        name: 'Scores',
        rowCount: '6 rows',
        headers: ['Student_ID', 'Subject1', 'Subject2', 'Subject3', 'Subject4', 'Subject5', 'Subject6'],
        rows: [
          ['2GR5CS011', 75, 30, 57, 44, 35, 6],
          ['2GR5CS012', 70, 21, 44, 63, 99, 85],
          ['2GR5CS013', 21, 9, 66, 87, 91, 78],
          ['2GR5CS014', 84, 46, 20, 34, 100, 38],
          ['2GR5CS015', 31, 90, 63, 60, 90, 80],
          ['2GR5CS016', 95, 51, 9, 26, 26, 21],
        ],
      },
    ],
    departmentData: [] as { id: number; name: string }[],
    employeeData: [] as { id: number; name: string; salary: string; joining_date: string; department_id: number }[],
    task: 'Student Screening Analysis: Which students passed the screening test, what percentage did they score, and which subjects did failed students fail in?\n\nThe final result table should have Roll_No, Name, Percentage_marks, Failed_subjects, and Status columns.',
    outputColumns: ['Roll_No', 'Name', 'Percentage_marks', 'Failed_subjects', 'Status'],
    expectedOutputPreview: [
      { Roll_No: '2GR5CSxxx', Name: 'Student Name', Percentage_marks: '00.00', Failed_subjects: 'NULL', Status: 'Passed' },
      { Roll_No: '2GR5CSxxx', Name: 'Student Name', Percentage_marks: '00.00', Failed_subjects: 'SQL, Python', Status: 'Failed' },
    ] as Record<string, string>[],
    hint: [
      'Use UNION ALL to unpivot Subject1 through Subject6 into subject-wise rows.',
      'Join the unpivoted marks with Subjects to compare each score with its pass mark.',
      'Use GREATEST(Subject5, Subject6) while calculating percentage because Subject5 and Subject6 are optional alternatives.',
      'Use GROUP_CONCAT with CASE WHEN to list only failed subjects.',
      'Order passed students first, then sort passed students by percentage in descending order.',
    ] as string[] | undefined,
    hintTitle: 'Before You Solve' as string | undefined,
    solution: {
      sql: `/* Student Screening and Failed Subject Analysis

Question:
Find the Roll_No, Name, percentage_marks, failed_subjects and status of each student.

The final result table should have:
Roll_No | Name | Percentage_marks | Failed_subjects | Status

The output should show hired candidates in descending order of percentage marks.
Failed students can be ordered in any way. */

with score_unpivot as
(
    select
        Student_ID,
        'S1' as subject_id,
        Subject1 as marks
    from Scores

    union all

    select
        Student_ID,
        'S2' as subject_id,
        Subject2 as marks
    from Scores

    union all

    select
        Student_ID,
        'S3' as subject_id,
        Subject3 as marks
    from Scores

    union all

    select
        Student_ID,
        'S4' as subject_id,
        Subject4 as marks
    from Scores

    union all

    select
        Student_ID,
        'S5' as subject_id,
        Subject5 as marks
    from Scores

    union all

    select
        Student_ID,
        'S6' as subject_id,
        Subject6 as marks
    from Scores
),

student_result as
(
    select
        st.Roll_No,
        st.Name,

        round(
            (
                sc.Subject1 +
                sc.Subject2 +
                sc.Subject3 +
                sc.Subject4 +
                greatest(sc.Subject5, sc.Subject6)
            ) / 5,
            2
        ) as Percentage_marks,

        group_concat(
            case
                when su.marks < sub.Pass_Marks then sub.Subject
            end
            order by sub.ID
            separator ', '
        ) as Failed_subjects,

        case
            when count(
                case
                    when su.marks < sub.Pass_Marks then 1
                end
            ) = 0
            then 'Passed'
            else 'Failed'
        end as Status

    from Students st

    inner join Scores sc
        on sc.Student_ID = st.Roll_No

    inner join score_unpivot su
        on su.Student_ID = st.Roll_No

    inner join Subjects sub
        on sub.ID = su.subject_id

    group by
        st.Roll_No,
        st.Name,
        sc.Subject1,
        sc.Subject2,
        sc.Subject3,
        sc.Subject4,
        sc.Subject5,
        sc.Subject6
)

select
    Roll_No,
    Name,
    Percentage_marks,
    Failed_subjects,
    Status
from student_result
order by
    case when Status = 'Passed' then 1 else 2 end,
    case when Status = 'Passed' then Percentage_marks end desc;`,
      howItWorks: [
        'The Students table stores the roll number and name of each student.',
        'The Scores table stores subject-wise marks in separate columns.',
        'The Subjects table stores subject names and passing marks.',
        'The first CTE, score_unpivot, converts the six subject columns into row format using UNION ALL.',
        "This makes it easier to compare each student's subject marks with the corresponding passing marks.",
        'GREATEST(Subject5, Subject6) is used while calculating percentage because Subject5 and Subject6 are optional alternatives.',
        'The percentage is calculated using Subject1 to Subject4 plus the higher score between Subject5 and Subject6.',
        'GROUP_CONCAT() creates a comma-separated list of subjects where the student scored below the pass marks.',
        'The CASE WHEN logic assigns Passed only when the student has no failed subject.',
        'The final ORDER BY places passed candidates first and ranks them by percentage in descending order.',
        'Failed students are shown after the passed candidates.',
      ],
      commonMistake: {
        title: 'Mixing Percentage Logic With Pass Logic',
        points: [
          'Subject5 and Subject6 are alternatives only for percentage calculation, where the higher score is considered.',
          'The failed subject list is still produced by comparing each unpivoted subject score against that subject pass mark in the provided solution.',
        ],
      } as { title: string; points: string[] } | undefined,
      observation: {
        title: 'Sample Dataset Note',
        points: [
          'In the given sample rows, every student fails at least one subject, so all rows appear with Status = Failed.',
        ],
      } as { title: string; points: string[] } | undefined,
      result: [
        { Roll_No: '2GR5CS011', Name: 'Aarav Sharma', Percentage_marks: '48.20', Failed_subjects: 'SQL, Power BI, Tableau', Status: 'Failed' },
        { Roll_No: '2GR5CS012', Name: 'Priya Gupta', Percentage_marks: '59.40', Failed_subjects: 'SQL', Status: 'Failed' },
        { Roll_No: '2GR5CS013', Name: 'Rohit Singh', Percentage_marks: '54.80', Failed_subjects: 'Excel, SQL', Status: 'Failed' },
        { Roll_No: '2GR5CS014', Name: 'Anjali Patel', Percentage_marks: '56.80', Failed_subjects: 'SQL, Python, Hadoop, Tableau', Status: 'Failed' },
        { Roll_No: '2GR5CS015', Name: 'Karan Mehta', Percentage_marks: '66.80', Failed_subjects: 'Excel', Status: 'Failed' },
        { Roll_No: '2GR5CS016', Name: 'Nisha Reddy', Percentage_marks: '41.40', Failed_subjects: 'Python, Hadoop, Power BI, Tableau', Status: 'Failed' },
      ] as Record<string, string>[],
    },
  },
};

const corporateCaseStudySlugMap = Object.fromEntries(
  Object.values(corporateCaseStudies).map((caseStudy) => [
    slugifyCaseStudyTitle(caseStudy.title),
    caseStudy,
  ])
);

const sqlDrillSlugMap = Object.fromEntries(
  Object.values(sqlDrills).map((drill) => [
    slugifyCaseStudyTitle(drill.title),
    drill,
  ])
);

const normalizeCaseStudySlug = (slug: string) => {
  try {
    return slugifyCaseStudyTitle(decodeURIComponent(slug));
  } catch {
    return slugifyCaseStudyTitle(slug);
  }
};

// ============================================================
// HELPER COMPONENTS
// ============================================================

const DifficultyBadge: React.FC<{ difficulty: Difficulty }> = ({ difficulty }) => {
  const styles: Record<Difficulty, string> = {
    Beginner: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
    Intermediate: 'bg-amber-100 text-amber-700 border border-amber-200',
    Advanced: 'bg-red-100 text-red-700 border border-red-200',
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${styles[difficulty]}`}>
      {difficulty}
    </span>
  );
};

const ToolBadge: React.FC<{ tool: string }> = ({ tool }) => (
  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 border border-indigo-200">
    <Database className="h-3 w-3" />
    {tool}
  </span>
);

const SkillChip: React.FC<{ skill: string }> = ({ skill }) => (
  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-medium bg-slate-100 text-slate-600 border border-slate-200">
    {skill}
  </span>
);

const CodeBlock: React.FC<{ code: string }> = ({ code }) => (
  <div className="rounded-xl overflow-hidden border border-slate-700 shadow-lg">
    <div className="flex items-center gap-2 bg-slate-800 px-4 py-2.5 border-b border-slate-700">
      <span className="w-3 h-3 rounded-full bg-red-500" />
      <span className="w-3 h-3 rounded-full bg-yellow-500" />
      <span className="w-3 h-3 rounded-full bg-green-500" />
      <span className="ml-2 text-xs text-slate-400 font-mono">query.sql</span>
    </div>
    <pre className="bg-slate-900 p-5 overflow-x-auto text-sm font-mono text-slate-100 leading-relaxed">
      <code>{code}</code>
    </pre>
  </div>
);

const DataTable: React.FC<{ headers: string[]; rows: (string | number)[][] }> = ({ headers, rows }) => (
  <div className="overflow-x-auto rounded-lg border border-slate-200">
    <table className="min-w-full text-sm">
      <thead>
        <tr className="bg-slate-50 border-b border-slate-200">
          {headers.map((h) => (
            <th key={h} className="px-4 py-2.5 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {rows.map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
            {row.map((cell, j) => (
              <td key={j} className="px-4 py-2.5 text-slate-700 font-mono text-xs whitespace-nowrap">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const difficultyOrder: Difficulty[] = ['Beginner', 'Intermediate', 'Advanced'];

const difficultySectionStyles: Record<Difficulty, {
  eyebrow: string;
  title: string;
  description: string;
  panel: string;
  accent: string;
  button: string;
}> = {
  Beginner: {
    eyebrow: 'Start here',
    title: 'Beginner Drills',
    description: 'Core SQL practice for joins, grouping, filtering, and clear query structure.',
    panel: 'border-emerald-200 bg-emerald-50/50',
    accent: 'bg-emerald-500',
    button: 'border-emerald-200 text-emerald-700 hover:bg-emerald-50',
  },
  Intermediate: {
    eyebrow: 'Build fluency',
    title: 'Intermediate Drills',
    description: 'Business-style SQL problems with dates, windows, CTEs, and reporting logic.',
    panel: 'border-amber-200 bg-amber-50/50',
    accent: 'bg-amber-500',
    button: 'border-amber-200 text-amber-700 hover:bg-amber-50',
  },
  Advanced: {
    eyebrow: 'Stretch skills',
    title: 'Advanced Drills',
    description: 'Complex analytical SQL using recursive logic, graph-style joins, and screening workflows.',
    panel: 'border-red-200 bg-red-50/50',
    accent: 'bg-red-500',
    button: 'border-red-200 text-red-700 hover:bg-red-50',
  },
};

const DRILLS_PER_BATCH = 3;

const DrillCard: React.FC<{ drill: SqlDrill }> = ({ drill }) => (
  <Link
    href={`/casestudies/${slugifyCaseStudyTitle(drill.title)}`}
    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg hover:border-indigo-300 transition-all duration-300 cursor-pointer group"
  >
    <div className="relative bg-[#013a81] px-6 pt-6 pb-8 overflow-hidden">
      <div className="relative">
        <span className="text-slate-400 text-xs font-mono font-semibold uppercase tracking-widest">
          SQL Data Drill
        </span>
        <div className="text-7xl font-black text-white/10 font-mono leading-none mt-1 select-none">
          #{drill.number}
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <ToolBadge tool={drill.tool} />
          <DifficultyBadge difficulty={drill.difficulty} />
        </div>
      </div>
    </div>

    <div className="p-5">
      <h3 className="text-lg font-bold text-slate-800 mb-2">{drill.title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-4">{drill.description}</p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {drill.skills.map((s) => <SkillChip key={s} skill={s} />)}
      </div>
      <div className="flex items-center gap-1 text-sm font-semibold text-indigo-600 group-hover:gap-2 transition-all">
        Attempt Drill
        <ChevronRight className="h-4 w-4" />
      </div>
    </div>
  </Link>
);

// ============================================================
// CORPORATE DETAIL VIEW
// ============================================================
type CorporateCaseStudy = typeof corporateCaseStudies['case-study-1'];

const CorporateDetailView: React.FC<{ caseStudy: CorporateCaseStudy; onBack: () => void }> = ({ caseStudy, onBack }) => {
  const { fullContent, title, businessType, image, subtitle } = caseStudy;
  const { situation, problem, solution, impact } = fullContent;
  const detailSlug = slugifyCaseStudyTitle(title);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-[#013a81] text-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-300 hover:text-white text-sm font-medium mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </button>
          <Badge
            style={{ backgroundColor: 'rgba(78,174,195,0.15)', color: '#7dd3e8', border: '1px solid rgba(78,174,195,0.3)' }}
            className="mb-4 font-normal"
          >
            <nav className="flex items-center gap-1 text-xs">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <Link href="/casestudies" className="hover:underline">Case Studies</Link>
              <ChevronRight className="h-3 w-3" />
              <Link href={`/casestudies/${detailSlug}`} className="font-semibold text-white hover:underline">{title}</Link>
            </nav>
          </Badge>
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-slate-200 border border-white/20">
              <Building2 className="h-3.5 w-3.5" />
              Corporate
            </span>
            <span className="text-slate-400 text-xs">/</span>
            <span className="text-slate-300 text-xs font-medium">{businessType}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white max-w-4xl mb-4">
            {title}
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl italic">{subtitle}</p>
        </div>
      </div>

      {/* Image */}
      <div className="container mx-auto px-4 -mt-1">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
          <img src={image} alt={title} className="w-full object-cover max-h-[480px]" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-10 max-w-4xl space-y-6">
        {/* Situation */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-7">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-6 rounded-full bg-[#4eaec3]" />
            <h2 className="text-xl font-bold text-slate-800">Situation</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">{situation}</p>
        </div>

        {/* Problem */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-7">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-6 rounded-full bg-red-500" />
            <h2 className="text-xl font-bold text-slate-800">Problem</h2>
          </div>
          <ul className="space-y-3">
            {problem.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                <span className="text-slate-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Solution */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-7">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-6 rounded-full bg-emerald-500" />
            <h2 className="text-xl font-bold text-slate-800">Solution</h2>
          </div>
          <p className="text-slate-600 leading-relaxed mb-6">{solution.intro}</p>
          <h3 className="text-base font-semibold text-slate-700 mb-3">Key aspects of the solution included:</h3>
          <ul className="space-y-3">
            {solution.keyAspects.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500 flex-shrink-0" />
                <span className="text-slate-600">
                  <span className="font-semibold text-slate-700">{item.split(' – ')[0]}</span>
                  {item.includes(' – ') && ` – ${item.split(' – ').slice(1).join(' – ')}`}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Impact */}
        <div className="bg-[#eaf6f9] rounded-2xl shadow-sm border border-[#bee3ec] p-7">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-6 rounded-full bg-[#4eaec3]" />
            <h2 className="text-xl font-bold text-slate-800">Impact</h2>
          </div>
          <ul className="space-y-3">
            {impact.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 text-[#4eaec3]">✦</span>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <button onClick={onBack} className="flex items-center gap-2 text-[#4eaec3] hover:text-[#3d9db2] font-semibold transition-colors pt-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Case Studies
        </button>
      </div>
    </div>
  );
};

// ============================================================
// SQL DRILL DETAIL VIEW
// ============================================================
type SqlDrill = typeof sqlDrills[keyof typeof sqlDrills];

const DrillDetailView: React.FC<{ drill: SqlDrill; onBack: () => void }> = ({ drill, onBack }) => {
  const [showSolution, setShowSolution] = useState(false);
  const detailSlug = slugifyCaseStudyTitle(drill.title);

  const sampleTables = (drill as any).sampleTables as Array<{ name: string; rowCount: string; headers: string[]; rows: (string | number)[][] }> | undefined;
  const deptRows = !sampleTables ? drill.departmentData.map((r: any) => [r.id, r.name]) : [];
  const empRows = !sampleTables ? drill.employeeData.map((r: any) => [r.id, r.name, r.salary, r.joining_date, r.department_id]) : [];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-300 hover:text-white text-sm font-medium mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </button>
          <Badge
            style={{ backgroundColor: 'rgba(99,102,241,0.18)', color: '#c7d2fe', border: '1px solid rgba(129,140,248,0.35)' }}
            className="mb-4 font-normal"
          >
            <nav className="flex items-center gap-1 text-xs">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <Link href="/casestudies" className="hover:underline">Case Studies</Link>
              <ChevronRight className="h-3 w-3" />
              <Link href={`/casestudies/${detailSlug}`} className="font-semibold text-white hover:underline">{drill.title}</Link>
            </nav>
          </Badge>
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-slate-200 border border-white/20">
              <BookOpen className="h-3.5 w-3.5" />
              Learning
            </span>
            <span className="text-slate-400 text-xs">/</span>
            <span className="text-slate-300 text-xs font-mono">SQL Data Drill #{drill.number}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white mb-3">
            {drill.title}
          </h1>
          <p className="text-slate-300 text-base mb-6 max-w-2xl">{drill.description}</p>
          <div className="flex flex-wrap items-center gap-2">
            <ToolBadge tool={drill.tool} />
            <DifficultyBadge difficulty={drill.difficulty} />
            {drill.skills.map((s) => <SkillChip key={s} skill={s} />)}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-10 max-w-4xl space-y-7">

        {/* Your Objective */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-7">
          <h2 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span className="w-1 h-5 rounded-full bg-indigo-500 inline-block" />
            Your Objective
          </h2>
          <p className="text-slate-600 leading-relaxed">{drill.description}</p>
        </div>

        {/* The Setup */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-7">
          <h2 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span className="w-1 h-5 rounded-full bg-[#4eaec3] inline-block" />
            The Setup
          </h2>
          <p className="text-slate-600 leading-relaxed whitespace-pre-line">{drill.setup}</p>
        </div>

        {/* Table Schema */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-7">
          <h2 className="text-lg font-bold text-slate-800 mb-5 flex items-center gap-2">
            <span className="w-1 h-5 rounded-full bg-emerald-500 inline-block" />
            Table Schema
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {Object.entries(drill.schema).map(([tableName, columns]) => (
              <div key={tableName} className="rounded-xl border border-slate-200 overflow-hidden">
                <div className="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
                  <Database className="h-3.5 w-3.5 text-[#4eaec3]" />
                  <span className="text-white text-sm font-semibold font-mono">{tableName}</span>
                </div>
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-3 py-2 text-left text-slate-500 font-semibold uppercase tracking-wider">Column</th>
                      <th className="px-3 py-2 text-left text-slate-500 font-semibold uppercase tracking-wider">Type</th>
                      <th className="px-3 py-2 text-left text-slate-500 font-semibold uppercase tracking-wider">Key</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {columns.map((col) => (
                      <tr key={col.name} className="bg-white hover:bg-slate-50/70 transition-colors">
                        <td className="px-3 py-2 font-mono font-medium text-slate-800">{col.name}</td>
                        <td className="px-3 py-2 font-mono text-slate-500">{col.type}</td>
                        <td className="px-3 py-2">
                          {col.constraint && (
                            <span className={`px-1.5 py-0.5 rounded text-xs font-bold ${
                              col.constraint === 'PK' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                            }`}>
                              {col.constraint}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Data */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-7 space-y-6">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span className="w-1 h-5 rounded-full bg-violet-500 inline-block" />
            Sample Data
          </h2>

          {sampleTables ? (
            sampleTables.map((table) => (
              <div key={table.name}>
                <p className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">
                  {table.name} — <span className="text-slate-700 normal-case font-normal">{table.rowCount}</span>
                </p>
                <DataTable headers={table.headers} rows={table.rows} />
              </div>
            ))
          ) : (
            <>
              <div>
                <p className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">
                  Department — <span className="text-slate-700 normal-case font-normal">8 rows</span>
                </p>
                <DataTable headers={['id', 'name']} rows={deptRows} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">
                  Employee — <span className="text-slate-700 normal-case font-normal">20 rows</span>
                </p>
                <DataTable headers={['id', 'name', 'salary', 'joining_date', 'department_id']} rows={empRows} />
              </div>
            </>
          )}
        </div>

        {/* Your Task */}
        <div className="bg-[#eaf6f9] rounded-2xl border border-[#bee3ec] p-7">
          <h2 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span className="w-1 h-5 rounded-full bg-indigo-500 inline-block" />
            Your Task
          </h2>
          <p className="text-slate-700 font-medium leading-relaxed mb-5 whitespace-pre-line">{drill.task}</p>
          <p className="text-sm text-slate-600 mb-3 font-medium">Your output should look like this (partial example):</p>
          <DataTable
            headers={drill.outputColumns}
            rows={drill.expectedOutputPreview.map((r) => drill.outputColumns.map((col) => r[col]))}
          />
        </div>

        {/* Hint / Notes */}
        {drill.hint && (
          <div className="bg-amber-50 rounded-2xl border border-amber-200 p-7">
            <h2 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-amber-400 inline-block" />
              {drill.hintTitle ?? 'Hint'}
            </h2>
            <ul className="space-y-3">
              {drill.hint.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 text-amber-500 font-bold flex-shrink-0">→</span>
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Solution Toggle */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="w-full flex items-center justify-between px-7 py-5 hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="w-1 h-5 rounded-full bg-emerald-500 inline-block" />
              <span className="text-lg font-bold text-slate-800">Solution</span>
              {!showSolution && (
                <span className="text-xs text-slate-400 font-medium ml-1">Click to reveal</span>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-[#4eaec3]">
              {showSolution ? (
                <><EyeOff className="h-4 w-4" /> Hide</>
              ) : (
                <><Eye className="h-4 w-4" /> Reveal Solution</>
              )}
            </div>
          </button>

          {showSolution && (
            <div className="px-7 pb-7 space-y-6 border-t border-slate-100 pt-6">
              {/* SQL */}
              <div>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">SQL Query</p>
                <CodeBlock code={drill.solution.sql} />
              </div>

              {/* How It Works */}
              <div>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">How It Works</p>
                <ul className="space-y-3">
                  {drill.solution.howItWorks.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span className="text-slate-600 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Common Mistake */}
              {drill.solution.commonMistake && (
                <div className="bg-red-50 rounded-xl border border-red-200 p-5">
                  <p className="text-sm font-bold text-red-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="text-base">⚠️</span> Common Mistake: {drill.solution.commonMistake.title}
                  </p>
                  <ul className="space-y-2">
                    {drill.solution.commonMistake.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700 text-sm leading-relaxed">
                        <span className="mt-0.5 text-red-500 font-bold flex-shrink-0">→</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Interesting Observation */}
              {drill.solution.observation && (
                <div className="bg-indigo-50 rounded-xl border border-indigo-200 p-5">
                  <p className="text-sm font-bold text-indigo-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="text-base">🔍</span> {drill.solution.observation.title}
                  </p>
                  <ul className="space-y-2">
                    {drill.solution.observation.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700 text-sm leading-relaxed">
                        <span className="mt-0.5 text-indigo-500 font-bold flex-shrink-0">→</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Complete Result */}
              <div>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Complete Result</p>
                <DataTable
                  headers={drill.outputColumns}
                  rows={drill.solution.result.map((r) => drill.outputColumns.map((col) => r[col]))}
                />
              </div>
            </div>
          )}
        </div>

        <button onClick={onBack} className="flex items-center gap-2 text-[#4eaec3] hover:text-[#3d9db2] font-semibold transition-colors pt-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Case Studies
        </button>
      </div>
    </div>
  );
};

// ============================================================
// MAIN PAGE
// ============================================================
const CaseStudiesPage = (props: any = {}) => {
  const { initialSlug } = props as { initialSlug?: string };
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>('corporate');
  const [selectedCorporateSlug, setSelectedCorporateSlug] = useState<string | null>(null);
  const [selectedDrillId, setSelectedDrillId] = useState<string | null>(null);
  const [visibleDrillCounts, setVisibleDrillCounts] = useState<Record<Difficulty, number>>({
    Beginner: DRILLS_PER_BATCH,
    Intermediate: DRILLS_PER_BATCH,
    Advanced: DRILLS_PER_BATCH,
  });
  const normalizedInitialSlug = initialSlug ? normalizeCaseStudySlug(initialSlug) : null;
  const initialCorporateCaseStudy = normalizedInitialSlug ? corporateCaseStudySlugMap[normalizedInitialSlug] : null;
  const initialDrill = normalizedInitialSlug ? sqlDrillSlugMap[normalizedInitialSlug] : null;

  const handleCorporateCardClick = (slug: string) => {
    setSelectedCorporateSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDrillCardClick = (id: string) => {
    setSelectedDrillId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewMoreDrills = (difficulty: Difficulty) => {
    setVisibleDrillCounts((current) => ({
      ...current,
      [difficulty]: current[difficulty] + DRILLS_PER_BATCH,
    }));
  };

  const handleBack = useCallback(() => {
    if (initialSlug) {
      router.push('/casestudies');
      return;
    }

    setSelectedCorporateSlug(null);
    setSelectedDrillId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [initialSlug, router]);

  if (initialCorporateCaseStudy) {
    return (
      <>
        <Navbar />
        <CorporateDetailView
          caseStudy={initialCorporateCaseStudy as CorporateCaseStudy}
          onBack={handleBack}
        />
        <Footer />
      </>
    );
  }

  if (initialDrill) {
    return (
      <>
        <Navbar />
        <DrillDetailView
          drill={initialDrill as SqlDrill}
          onBack={handleBack}
        />
        <Footer />
      </>
    );
  }

  // Detail views
  if (selectedCorporateSlug && corporateCaseStudies[selectedCorporateSlug as keyof typeof corporateCaseStudies]) {
    return (
      <>
        <Navbar />
        <CorporateDetailView
          caseStudy={corporateCaseStudies[selectedCorporateSlug as keyof typeof corporateCaseStudies]}
          onBack={handleBack}
        />
        <Footer />
      </>
    );
  }

  if (selectedDrillId && sqlDrills[selectedDrillId as keyof typeof sqlDrills]) {
    return (
      <>
        <Navbar />
        <DrillDetailView
          drill={sqlDrills[selectedDrillId as keyof typeof sqlDrills]}
          onBack={handleBack}
        />
        <Footer />
      </>
    );
  }

  // List view
  const corporateList = Object.values(corporateCaseStudies);
  const drillList = Object.values(sqlDrills).sort((a, b) => a.number - b.number);
  const drillGroups = difficultyOrder.map((difficulty) => {
    const drills = drillList.filter((drill) => drill.difficulty === difficulty);
    const visibleCount = visibleDrillCounts[difficulty];

    return {
      difficulty,
      drills,
      visibleDrills: drills.slice(0, visibleCount),
      hiddenCount: Math.max(drills.length - visibleCount, 0),
    };
  });

  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <div className="bg-[#013a81] text-white">
        <div className="container mx-auto px-4 py-14 md:py-20">
          <Badge
            style={{ backgroundColor: 'rgba(78,174,195,0.15)', color: '#7dd3e8', border: '1px solid rgba(78,174,195,0.3)' }}
            className="mb-4 font-normal"
          >
            <nav className="flex items-center gap-1 text-xs">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="font-semibold text-white">Case Studies</span>
            </nav>
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">Case Studies</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Real-world impact stories and hands-on learning challenges from Ivy Professional School.
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveCategory('corporate')}
              className={`flex items-center gap-2 px-5 py-4 text-sm font-semibold border-b-2 transition-colors ${
                activeCategory === 'corporate'
                  ? 'border-[#4eaec3] text-[#4eaec3]'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              <Building2 className="h-4 w-4" />
              Corporate
              <span className={`ml-1 px-1.5 py-0.5 rounded-full text-xs font-bold ${
                activeCategory === 'corporate' ? 'bg-[#4eaec3]/15 text-[#4eaec3]' : 'bg-slate-100 text-slate-500'
              }`}>
                {corporateList.length}
              </span>
            </button>
            <button
              onClick={() => setActiveCategory('learning')}
              className={`flex items-center gap-2 px-5 py-4 text-sm font-semibold border-b-2 transition-colors ${
                activeCategory === 'learning'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              <BookOpen className="h-4 w-4" />
              Learning
              <span className={`ml-1 px-1.5 py-0.5 rounded-full text-xs font-bold ${
                activeCategory === 'learning' ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-500'
              }`}>
                {drillList.length}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-slate-50 min-h-[60vh]">
        <div className="container mx-auto px-4 py-10 md:py-14">

          {/* ─── CORPORATE TAB ─── */}
          {activeCategory === 'corporate' && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-1">Corporate Case Studies</h2>
                <p className="text-slate-500">Real-world enterprise training engagements and their outcomes.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {corporateList.map((cs) => (
                  <Link
                    key={cs.id}
                    href={`/casestudies/${slugifyCaseStudyTitle(cs.title)}`}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg hover:border-[#4eaec3]/40 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="w-full aspect-video overflow-hidden">
                      <img
                        src={cs.image}
                        alt={cs.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-semibold text-[#4eaec3] uppercase tracking-wider">
                        {cs.businessType}
                      </span>
                      <h3 className="mt-2 text-base font-bold text-slate-800 leading-snug line-clamp-2">
                        {cs.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-500 leading-relaxed line-clamp-2">
                        {cs.subtitle}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-[#4eaec3] group-hover:gap-2 transition-all">
                        Read Case Study
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* ─── LEARNING TAB ─── */}
          {activeCategory === 'learning' && (
            <div>
              <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-1">SQL Data Drills</h2>
                  <p className="text-slate-500 max-w-2xl">
                    Hands-on SQL challenges organized by difficulty, so learners can progress from fundamentals to advanced analytical problem solving.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2 sm:min-w-[360px]">
                  {difficultyOrder.map((difficulty) => {
                    const count = drillList.filter((drill) => drill.difficulty === difficulty).length;
                    return (
                      <div key={difficulty} className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-center shadow-sm">
                        <p className="text-lg font-black text-slate-800 leading-none">{count}</p>
                        <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500">{difficulty}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-8">
                {drillGroups.map(({ difficulty, drills, visibleDrills, hiddenCount }) => {
                  if (drills.length === 0) return null;

                  const section = difficultySectionStyles[difficulty];

                  return (
                    <section key={difficulty} className={`rounded-2xl border p-5 md:p-6 ${section.panel}`}>
                      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-start gap-3">
                          <span className={`mt-1 h-10 w-1.5 rounded-full ${section.accent}`} />
                          <div>
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{section.eyebrow}</p>
                            <h3 className="mt-1 text-xl font-bold text-slate-800">{section.title}</h3>
                            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-600">{section.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 md:justify-end">
                          <DifficultyBadge difficulty={difficulty} />
                          <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-600 border border-slate-200">
                            Showing {visibleDrills.length} of {drills.length}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {visibleDrills.map((drill) => (
                          <DrillCard key={drill.id} drill={drill as SqlDrill} />
                        ))}
                      </div>

                      {hiddenCount > 0 && (
                        <div className="mt-6 flex justify-center">
                          <button
                            type="button"
                            onClick={() => handleViewMoreDrills(difficulty)}
                            className={`inline-flex items-center gap-2 rounded-full border bg-white px-5 py-2.5 text-sm font-bold shadow-sm transition-colors ${section.button}`}
                          >
                            View more {difficulty} drills
                            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
                              +{Math.min(DRILLS_PER_BATCH, hiddenCount)}
                            </span>
                          </button>
                        </div>
                      )}
                    </section>
                  );
                })}
              </div>

              <div className="mt-8 rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-3">
                    <Database className="mt-1 h-5 w-5 text-indigo-500" />
                    <div>
                      <p className="font-bold text-slate-800">More learning formats coming soon</p>
                      <p className="text-sm text-slate-500 mt-1">Python, Excel, Power BI and additional analytics drills will be added here.</p>
                    </div>
                  </div>
                  <span className="w-fit rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-600">
                    Learning Hub
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      <Footer />
    </>
  );
};

export default CaseStudiesPage;
