// src/lib/faq-schema-hold.ts (import as "@/lib/faq-schema-hold")
// FAQ answers kept OUT of the FAQPage JSON-LD until marketing approves the wording (SEO-012).
// They stay visible on the page; only the structured data skips them.
// Held for: job guarantee or refund, salary figures, figures not in company-facts.ts, or
// certification claims by outside bodies (only "Recognised by MeitY" is approved).
// Matching is on the exact answer text. When marketing approves an answer as it is, delete its line.
// When an answer is rewritten, its old line stops matching and the new text appears in the schema,
// so get the new wording approved before it ships.
export const FAQ_SCHEMA_HOLD: ReadonlySet<string> = new Set<string>([
  "4-5 LPA is the average for freshers. Experienced professionals may earn more.", // 4-5 LPA
  "80% throughout 10th and 12th grade, no gap year or month, science background, no commerce, no arts", // 80%
  "All sessions are recorded and uploaded to your LMS portal within 24 hours for you to catch up.", // 24 hours
  "An average package of 8-12 LPA is reported for qualified candidates.", // 8-12 LPA
  "Around ₹12 LPA for full-time roles, depending on profile and experience.", // ₹12 LPA
  "Average salary provided is 12 LPA, depending on background and role.", // 12 LPA
  "Bangalore is a key hub for AI and machine learning talent in India. With an increasing demand for AI-driven solutions, job growth in this field is expected to rise by 25% annually, offering numerous career opportunities for skilled professionals.", // 25%
  "Businesses implementing AI tools typically save 5-10 hours per week on manual tasks and reduce content and operational costs by up to 40%.", // 40%; 5-10 hours
  "Courses range from 6 weeks (AI for Beginners, AI for Entrepreneurs) to 12 months (Data Science Pay After Placement). Most popular programs run 7–11 months. Weekend batches (Sat–Sun), weekday batches (Mon–Fri), and hybrid batches are all available to suit working professionals.", // 12 months; 6 weeks; 7–11 months
  "Eligible students can opt for our job guarantee program, which ensures you land a role within 6 months of graduation or receive a full tuition refund, providing peace of mind for your career transition.", // 6 months; guarantee; refund
  "Entry-level AI roles typically range from 6-10 LPA, significantly higher than standard software engineering roles.", // 6-10 LPA
  "Entry-level Data Scientists in Kolkata typically earn ₹5–8 LPA. With 3–5 years of experience, this grows to ₹12–22 LPA. Senior Data Scientists with 6+ years of expertise can command ₹28–60 LPA. When adjusted for Kolkata's lower cost of living versus cities like Bengaluru, these salaries offer exceptional purchasing power.", // 3–5 years; 6+ years; ₹12–22 LPA; ₹28–60 LPA; ₹5–8 LPA
  "Entry-level salaries start around ₹8–10 LPA, while experienced GenAI professionals earn ₹25–35 LPA depending on skillset and domain.", // ₹25–35 LPA; ₹8–10 LPA
  "Entry-level salaries typically range from ₹8–10 LPA, while experienced GenAI professionals can earn ₹25–35 LPA.", // ₹25–35 LPA; ₹8–10 LPA
  "Generative AI professionals in Delhi earn competitive salaries, ranging from ₹12 lakhs per annum for entry-level roles to ₹30 lakhs or more for senior positions.", // ₹12 lakhs per annum; ₹30 lakhs
  "Generative AI professionals in Mumbai can expect competitive salaries. Entry-level roles typically start at ₹10-15 lakhs per annum, while experienced professionals can earn ₹30 lakhs or more.", // ₹10-15 lakhs per annum; ₹30 lakhs
  "High-school level linear algebra and probability are sufficient; the course covers the necessary 'Math for ML' within the 80 hours.", // 80 hours
  "It is a live, instructor-led program featuring real-time interaction, complemented by 24/7 access to recorded sessions for review.", // 24
  "Ivy Pro School follows a flexible hybrid learning model — live online classes with IIT & IIM faculty via video platform, plus optional offline sessions at centers in Kolkata, Delhi, Bangalore, and Pune. All live sessions are recorded and accessible for lifetime. You also get 30-minute daily practice classes before and after main sessions.", // 30
  "Ivy Professional School offers 10+ certified courses: Data Science with ML & AI (11 months), Generative AI with IIT Guwahati (5 months), Data Engineering (8 months), Data Analytics with Visualization (8 months), Data Analytics & GenAI (7 months), AI for Product Managers (2 months), AI & Machine Learning (4 months), AI for Entrepreneurs (6 weeks), AI for Beginners (6 weeks), and a unique Pay-After-Placement Data Science program. All programs are NASSCOM, IBM, or MEITY certified.", // 10+; 11 months; 2 months; 4 months; 5 months; 6 weeks; 7 months; 8 months; certification claim
  "Ivy offers competitive fee structures with flexible EMI options to ensure financial constraints are never a barrier. Fees vary by program (3-month bootcamps to 12-month PG Diplomas). Contact Ivy's admissions team at ivyproschool.com for the latest fee schedules and available scholarships.", // 12 month; 3 month
  "Learners get access to live interactive classes, dedicated project mentors, and 24/7 online labs. There are also 'DoubtBuster' sessions to resolve technical queries in real-time.", // 24
  "Most learners are placed within 3–6 months.", // 3–6 months
  "Most learners complete the program within 6 to 8 months, depending on batch type, pace of learning, and project involvement.", // 6 to 8 months
  "Mumbai offers excellent career prospects for Generative AI professionals, with the demand for skilled talent growing at an accelerated rate. The job market is expected to expand by over 20% annually as more companies adopt AI technologies.", // 20%
  "Over 10 projects and 30+ case studies are included.", // 10 projects; 30+ case studies
  "Participants can build a finance prompt library, Copilot Project and Agent blueprints, Claude Skills starter frameworks, reconciliation and exception toolkits, a finance automation playbook and a 30-day implementation action plan.", // 30 day
  "Participants can create reusable HR prompt libraries, recruitment toolkits, HR analytics and payroll validation packs, workflow templates, Copilot-agent instructions and a prioritized 30-day HR AI action plan. The exact outputs can be adapted to the programme scope.", // 30 day
  "Salaries for Generative AI professionals in Bangalore can range from ₹12 lakhs annually for entry-level positions to ₹30 lakhs or more for senior roles, depending on experience and expertise.", // ₹12 lakhs; ₹30 lakhs
  "Students who have scored 80% or above in their most recent class are eligible for the discount.", // 80%
  "Students work on 10+ industry-standard projects including RAG-powered Enterprise Assistants, Multimodal AI Chatbots (Text+Image), and Fine-tuning LLMs using LangChain and Pinecone. These projects focus on solving actual business problems faced by Bangalore-based tech startups.", // 10+
  "The 80 hours structure itself is a fast-track designed to make you 'job-ready' without unnecessary academic filler.", // 80 hours
  "The AI course duration is 6 weeks.", // 6 weeks
  "The average CTC is around 12 LPA, with roles in top firms.", // 12 LPA
  "The average salary for a Generative AI professional in Bangalore ranges from ₹12 lakhs per year for entry-level positions to upwards of ₹30 lakhs annually for experienced professionals.", // ₹12 lakhs; ₹30 lakhs
  "The average salary for a Generative AI professional in Mumbai ranges from ₹12 lakhs per annum for entry-level positions to ₹30 lakhs or more for senior-level roles.", // ₹12 lakhs per annum; ₹30 lakhs
  "The course covers the following topics:\n· Week 1–2: AI Foundations & Creative Tools\n· Week 3: Coding & App Building\n· Week 4: Data, Research & Analysis\n· Week 5: Presentations & Communication\n· Week 6: Capstone Project & Showcase", // 1–2
  "The course duration generally ranges between 6 to 11 months, depending on the batch type (weekday or weekend) and learning mode selected.", // 6 to 11 months
  "The course duration is designed to balance depth and flexibility, typically ranging from 6 to 11 months depending on the batch type.", // 6 to 11 months
  "The course duration is flexible, spanning between 6 to 11 months depending on whether you opt for a weekday or weekend batch and your pace of learning.", // 6 to 11 months
  "The course duration ranges from 6 to 10 months depending on the learning pace and batch selection.", // 6 to 10 months
  "The course duration ranges from 6 to 10 months depending on your learning pace and batch selection.", // 6 to 10 months
  "The course duration ranges from 6 to 11 months, depending on your learning pace and the mode of study chosen (weekday or weekend batch).", // 6 to 11 months
  "The course duration typically ranges from 6 to 11 months, depending on the chosen learning path and batch schedule (weekday or weekend).", // 6 to 11 months
  "The course duration typically ranges from 6 to 11 months, depending on the learning mode (weekday or weekend batches) and specialization track.", // 6 to 11 months
  "The course duration typically ranges from 6 to 11 months, depending on the learning mode (weekday/weekend) and specialization track chosen.", // 6 to 11 months
  "The course duration typically ranges from 6 to 8 months, depending on the learning mode (weekday or weekend) and batch structure.", // 6 to 8 months
  "The course is 20 hours, delivered through live online and classroom sessions across 8 modules designed specifically for business owners.", // 20 hours
  "The course lasts for 45 weeks and includes 7 modules with 50 sessions totaling 225 hours.", // 225 hours; 45 weeks; 50 sessions
  "The course runs for 225 hours over approximately 8 months and includes 5 structured modules and real-world projects.", // 225 hours; 8 months
  "The course runs for 6–8 weeks with 25–30 hours of live and recorded sessions, providing flexible weekday, weekend, and fast-track options for working professionals.", // 25–30 hours; 6–8 weeks
  "The course spans 225 hours across 14 weeks and includes live sessions, projects, and hands-on practice.", // 14 weeks; 225 hours
  "The course spans 225 hours and is completed over 12 weeks, covering 8 modules and 62 lessons.", // 12 weeks; 225 hours; 62
  "The course spans 225 hours over 14 weeks, including 9 modules and 103 lessons.", // 103; 14 weeks; 225 hours
  "The course typically lasts between 6 and 10 months. Depending on the pace you set, it can be completed in a more intensive full-time format or a flexible part-time format.", // 10 months
  "The demand for GenAI talent in Kolkata is projected to grow by 25% annually. Entry-level salaries range from ₹8-12 LPA, while experienced professionals can earn upwards of ₹25 LPA due to the specialized nature of these skills.", // 25%; ₹25 LPA; ₹8-12 LPA
  "The demand for Generative AI professionals in Chennai is growing at over 25% annually due to enterprise AI adoption and GenAI-led digital transformation.", // 25%
  "The demand for Generative AI professionals in Pune is growing at over 25% annually due to enterprise AI adoption and GenAI-led transformation in 2025.", // 25%
  "The duration is optimized to balance conceptual depth, practical exposure, and flexibility, typically ranging from 6 to 11 months.", // 6 to 11 months
  "The duration of the course ranges from 6 to 10 months depending on your learning pace and chosen batch schedule. You can select the format that best fits your availability.", // 6 to 10 months
  "The flagship format is an 8-hour applied workshop. The programme can also be extended into role-based labs, implementation sprints or a broader finance AI capability journey depending on organizational requirements.", // 8 hour
  "The job market in Delhi for Generative AI professionals is growing rapidly. Industries like media, IT, and e-commerce are actively seeking AI talent, and the demand for professionals in this field is projected to grow by 25% annually.", // 25%
  "The program is 70% hands-on, involving live coding labs and 30% theory to understand the underlying algorithms.", // 30%; 70%
  "The program is an intensive 80 hours certification course designed to provide deep technical expertise in a condensed timeframe.", // 80 hours
  "The program is designed to be completed within 6 to 8 months, depending on learning pace, batch schedule, and project submissions.", // 6 to 8 months
  "The program typically ranges from 6 to 11 months, depending on the track (weekday/weekend) and depth of cloud specializations selected.", // 6 to 11 months
  "The program typically spans 6 to 9 months, depending on the intensity of the track and whether you choose weekday or weekend batches.", // 6 to 9 months
  "The program typically spans 6 to 9 months, depending on the learning pace and whether you opt for intensive weekday sessions or weekend batches.", // 6 to 9 months
  "The program typically spans 6 to 9 months, depending on the learning track and batch type (weekday or weekend) you select.", // 6 to 9 months
  "The program typically spans 6 to 9 months, providing a balance of theoretical depth and extensive hands-on laboratory sessions to ensure industry readiness.", // 6 to 9 months
  "The program typically spans 6 to 9 months, providing a balance of theoretical depth and extensive hands-on laboratory sessions.", // 6 to 9 months
  "The program usually takes 6 to 8 months to complete, depending on the selected batch, learning format, and pace of project work.", // 6 to 8 months
  "The programme is designed to move teams from individual AI experimentation toward controlled, repeatable finance workflows. Expected outputs include reusable finance assets, prioritized use cases, defined owners, controls, success KPIs and a 30-day action plan.", // 30 day
  "The programme is designed to move the team from individual AI productivity toward controlled, repeatable HR workflows. Expected outputs include practical AI assets, prioritized use cases, defined owners, implementation controls and a 30-day action plan.", // 30 day
  "The scope is exceptional. Kolkata saw a 28% year-on-year growth in Data Science and AI job postings in 2024, and this trend is accelerating. With over 3,200 IT companies, major MNCs, and a fast-growing startup ecosystem, Kolkata offers thousands of data roles with competitive salaries. The demand-supply gap remains wide, giving candidates an edge in negotiations.", // 28% year; 3,200
  "The total time commitment is approximately 20 hours across the program.", // 20 hours
  "There are 12 sessions in total.", // 12 sessions
  "There are over 10 capstone projects and 30 case studies.", // 10; 30 case studies
  "There are over 10 capstone projects and 30+ case studies.", // 10; 30+ case studies
  "This AI course is highly practical. You will work with 15+ AI tools and build real use cases.", // 15+
  "Top companies like Amazon, IBM, PwC, Deloitte, and many Fortune 500 firms.", // 500
  "We offer live doubt-clearing sessions and 24/7 access to teaching assistants. Our Delhi campus near Barakhamba Road and South Ex also provides in-person mentorship from approachable experts like Pratik Sir and Eshani Mam.", // 24
  "We provide 24/7 access to our dedicated Slack community and LMS. For Bangalore students, we also offer face-to-face doubt-clearing sessions at our local center and 1-on-1 mentorship with industry professionals working in the local AI ecosystem.", // 24
  "We provide 24/7 technical support via our dedicated community forums. For Mumbai classroom students, we offer on-site lab access and face-to-face mentorship. Online students get live screen-sharing support to debug complex neural network code in real-time.", // 24
  "We recommend at least 1–2 years of professional or project experience, but motivated freshers and final-year students can also benefit.", // 1–2 years
  "With Ivy's structured programs, most students with a science or engineering background become job-ready in 4–6 months. Students from non-technical backgrounds typically take 8–12 months. The key is consistent practice, completing real projects, and building a strong portfolio — all of which are built into Ivy's curriculum.", // 4–6 months; 8–12 months
  "Yes, Generative AI professionals in Delhi are highly compensated. Entry-level roles start from ₹10-15 lakhs per annum, with experienced professionals earning upwards of ₹25-30 lakhs annually.", // ₹10-15 lakhs per annum; ₹25-30 lakhs
  "Yes, a 6-month job guarantee is available for eligible learners.", // 6 month; guarantee
  "Yes, a certificate co-branded by IBM and Ivy, aligned with NASSCOM standards.", // certification claim
  "Yes, a significant portion of the 80 hours is dedicated to CNNs for computer vision and RNNs/LSTMs for sequence data.", // 80 hours
  "Yes, an industry-recognized certification from Ivy, co-branded with NASSCOM.", // certification claim
  "Yes, by Fortune 500 companies and hiring managers.", // 500 companies
  "Yes, eligible students are covered under a 6-month job guarantee program.", // 6 month; guarantee
  "Yes, eligible students can opt into the job guarantee program.", // guarantee
  "Yes, eligible students may avail the 6-month job guarantee option.", // 6 month; guarantee
  "Yes, it’s aligned with NASSCOM’s FutureSkills Prime initiative.", // certification claim
  "Yes, it’s aligned with the FutureSkills Prime initiative by NASSCOM.", // certification claim
  "Yes, it’s well-recognized across Fortune 500 and mid-sized firms.", // 500
  "Yes, many working professionals enroll to switch to a data science career. But 85% attendance is mandatory.", // 85%
  "Yes, no-cost EMI and 4-month installment plans are available.", // 4 month
  "Yes, the curriculum is updated for 2026 to include Large Language Models (LLMs), Transformer architectures, and Generative AI integration.", // 2026 to
  "Yes, there are 30-minute practice sessions before and after each main class.", // 30
  "Yes, through NASSCOM’s FutureSkills Prime initiative.", // certification claim
  "Yes, we guide you in documenting your 80 hours journey into a professional portfolio that showcases your technical depth.", // 80 hours
  "Yes, you receive a certificate co-branded by IBM and NASSCOM.", // certification claim
  "Yes, you will earn a joint Executive Certification in Generative AI from Ivy Professional School and E&ICT Academy, IIT Guwahati. Additional certifications from IBM and NASSCOM are also provided.", // certification claim
  "Yes, you will work on 10+ industry-aligned projects, including building real-time data streaming pipelines and architecting cloud data warehouses.", // 10+
  "Yes. Ivy Pro School is one of India's few institutes with certifications from NASSCOM (India's premier IT body), IBM, IIT Guwahati (for premium programs), and Govt. of India MEITY. These certifications are recognized by our 500+ hiring partners including TCS, Infosys, Accenture, Deloitte, PwC, Capgemini, JP Morgan, Google, and Amazon.", // certification claim
  "Yes. Ivy Pro School offers no-cost EMI (0% interest), 4-month installment plans, and a unique Pay-After-Placement option for the Data Science course where you pay zero upfront and only after landing your first job. Corporate sponsorship facilitation is also available.", // 0%; 4 month
  "Yes. The programme includes an implementation roadmap covering the current process, problem, input data, workflow, risks, controls, owner, next 30-day action and success measure. This gives HR teams a practical path from an AI use case to an approved pilot.", // 30 day
  "Yes. The programme includes an implementation roadmap that defines the workflow, inputs, outputs, controls, owner, KPI and next 30-day action. Candidate workflows can then be prioritized for controlled pilots.", // 30 day
  "You receive 90 days of dedicated post-program support to ensure your AI tools and workflows are successfully running in your business.", // 90 days
  "You will build 10+ industry-relevant projects including AI-powered Financial Fraud Detectors for Mumbai's fintech sector, Multimodal Content Creators for media agencies, and RAG-based Legal Assistants for corporate firms in BKC. These projects utilize LangChain, Vector DBs, and OpenAI APIs.", // 10+
  "You will complete 5+ capstone projects, including:\n1. **ChatPal AI**: A conversational chatbot using OpenAI APIs.\n2. **SocioGenie AI**: An automated social media content generation and scheduling tool.\n3. **ResumeGen AI**: An AI-powered tool for generating professional resumes.\n4. **VoiceMate AI**: A speech-to-text and text-to-speech assistant using Whisper.", // 5+
  "You will complete over 10 projects and 30+ case studies.", // 10 projects; 30+ case studies
  "You will work on 20+ real-life projects, including building GenAI-powered chatbots with Python, fine-tuning LLMs with LangChain, and image generation using Stable Diffusion. These projects are designed to build a professional portfolio that attracts top tech firms in Delhi.", // 20+
  "yes max age is 28", // 28
  "· Standard Fee: ₹10,000 + GST\n· Discounted Fee: ₹8,500 + GST (for eligible students)", // ₹10,000; ₹8,500
]);
