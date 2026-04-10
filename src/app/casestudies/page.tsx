// /app/casestudies/page.tsx
'use client'

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
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

// ============================================================
// CORPORATE DETAIL VIEW
// ============================================================
type CorporateCaseStudy = typeof corporateCaseStudies['case-study-1'];

const CorporateDetailView: React.FC<{ caseStudy: CorporateCaseStudy; onBack: () => void }> = ({ caseStudy, onBack }) => {
  const { fullContent, title, businessType, image, subtitle } = caseStudy;
  const { situation, problem, solution, impact } = fullContent;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-[#013a81] text-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-300 hover:text-white text-sm font-medium mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </button>
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
type SqlDrill = typeof sqlDrills['sql-drill-1'];

const DrillDetailView: React.FC<{ drill: SqlDrill; onBack: () => void }> = ({ drill, onBack }) => {
  const [showSolution, setShowSolution] = useState(false);

  const deptRows = drill.departmentData.map((r) => [r.id, r.name]);
  const empRows = drill.employeeData.map((r) => [r.id, r.name, r.salary, r.joining_date, r.department_id]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-300 hover:text-white text-sm font-medium mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </button>
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
          <p className="text-slate-600 leading-relaxed">
            Practice SQL <span className="font-mono text-indigo-600 text-sm font-semibold">JOIN</span>s and aggregate functions by calculating the total salary expenditure for each department in a company.
          </p>
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
            <DataTable
              headers={['id', 'name', 'salary', 'joining_date', 'department_id']}
              rows={empRows}
            />
          </div>
        </div>

        {/* Your Task */}
        <div className="bg-[#eaf6f9] rounded-2xl border border-[#bee3ec] p-7">
          <h2 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span className="w-1 h-5 rounded-full bg-indigo-500 inline-block" />
            Your Task
          </h2>
          <p className="text-slate-700 font-medium leading-relaxed mb-5">{drill.task}</p>
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
const CaseStudiesPage = () => {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>('corporate');
  const [selectedCorporateSlug, setSelectedCorporateSlug] = useState<string | null>(null);
  const [selectedDrillId, setSelectedDrillId] = useState<string | null>(null);

  const handleCorporateCardClick = (slug: string) => {
    setSelectedCorporateSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDrillCardClick = (id: string) => {
    setSelectedDrillId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = useCallback(() => {
    setSelectedCorporateSlug(null);
    setSelectedDrillId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
  const drillList = Object.values(sqlDrills);

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
                  <div
                    key={cs.id}
                    onClick={() => handleCorporateCardClick(cs.id)}
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
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── LEARNING TAB ─── */}
          {activeCategory === 'learning' && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-1">SQL Data Drills</h2>
                <p className="text-slate-500">Hands-on SQL challenges to sharpen your data skills with real-world problems.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {drillList.map((drill) => (
                  <div
                    key={drill.id}
                    onClick={() => handleDrillCardClick(drill.id)}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg hover:border-indigo-300 transition-all duration-300 cursor-pointer group"
                  >
                    {/* Card Header */}
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

                    {/* Card Body */}
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
                  </div>
                ))}
              </div>

              {/* Coming Soon placeholder */}
              <div className="mt-8 rounded-2xl border-2 border-dashed border-slate-200 p-10 text-center">
                <Database className="h-10 w-10 text-slate-300 mx-auto mb-3" />
                <p className="text-slate-400 font-medium">More drills coming soon</p>
                <p className="text-slate-300 text-sm mt-1">Python, Excel, Power BI and more</p>
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
