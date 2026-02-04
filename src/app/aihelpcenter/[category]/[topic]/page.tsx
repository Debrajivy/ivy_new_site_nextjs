"use client";
import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import {
    FileStack,
    GraduationCap,
    Database,
    AlertCircle,
    ArrowRight,
    Code,
    Play,
    Clock,
    Calendar,
    ChevronRight,
    Terminal,
    Layers,
    BookOpen,
    Cpu,
    BarChart3,
    Server,
    Briefcase,
    ShieldCheck,
    Zap,
    Layout,
    MessageSquare,
    Search,
    FileText,
    Star,
    Table,
    Image as ImageIcon,
    Check,
    AlertTriangle,
    Scissors,
    AlignLeft,
    MessageCircle,
    Palette,
    Gauge,
    Linkedin
} from 'lucide-react';
import data from '../../AIHelpCenter.json';
import Image from 'next/image';
import ivy from '@/assests/ivy.png';
// Import faculty images
import PrateekAgarwal from "@/assests/pratilk.webp";
import eeshani from "@/assests/eeshani.webp";
// Import chart components
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    AreaChart,
    Area
} from 'recharts';

// Icon mapping (same as before)
const iconMap: Record<string, React.ReactNode> = {
    "Code": <Code />,
    "Database": <Database />,
    "AlertCircle": <AlertCircle />,
    "ArrowRight": <ArrowRight />,
    "Play": <Play />,
    "Clock": <Clock />,
    "Calendar": <Calendar />,
    "ChevronRight": <ChevronRight />,
    "Terminal": <Terminal />,
    "Layers": <Layers />,
    "BookOpen": <BookOpen />,
    "Cpu": <Cpu />,
    "BarChart3": <BarChart3 />,
    "Server": <Server />,
    "Briefcase": <Briefcase />,
    "ShieldCheck": <ShieldCheck />,
    "Zap": <Zap />,
    "Layout": <Layout />,
    "MessageSquare": <MessageSquare />,
    "Search": <Search />,
    "FileText": <FileText />,
    "FileStack": <FileStack />,
    "Star": <Star />,
    "Table": <Table />,
    "ImageIcon": <ImageIcon />,
    "Check": <Check />,
    "AlertTriangle": <AlertTriangle />,
    "Scissors": <Scissors />,
    "AlignLeft": <AlignLeft />,
    "MessageCircle": <MessageCircle />,
    "Palette": <Palette />,
    "Gauge": <Gauge />,
    "Linkedin": <Linkedin />
};

// Theme Colors
const themeColors = {
    primary: '#009fda',
    secondary: '#f7af34',
    darkBlue: '#013a81',
    dark: '#111827',
    light: '#f8fafc'
};

// Chart data for visualization examples
const chartData = {
    // Sales vs Profit Margin data
    salesProfitData: [
        { month: 'Jan', sales: 120000, profitMargin: 0.22 },
        { month: 'Feb', sales: 135000, profitMargin: 0.21 },
        { month: 'Mar', sales: 155000, profitMargin: 0.23 },
        { month: 'Apr', sales: 165000, profitMargin: 0.20 },
        { month: 'May', sales: 180000, profitMargin: 0.18 },
        { month: 'Jun', sales: 195000, profitMargin: 0.17 },
        { month: 'Jul', sales: 210000, profitMargin: 0.16 },
        { month: 'Aug', sales: 225000, profitMargin: 0.15 },
        { month: 'Sep', sales: 240000, profitMargin: 0.14 },
        { month: 'Oct', sales: 255000, profitMargin: 0.13 },
        { month: 'Nov', sales: 270000, profitMargin: 0.12 },
        { month: 'Dec', sales: 285000, profitMargin: 0.11 }
    ],

    // Marketing Traffic vs Conversion
    marketingData: [
        { week: 'W1', traffic: 12000, conversion: 0.032 },
        { week: 'W2', traffic: 13500, conversion: 0.028 },
        { week: 'W3', traffic: 15500, conversion: 0.035 },
        { week: 'W4', traffic: 14200, conversion: 0.040 },
        { week: 'W5', traffic: 16800, conversion: 0.038 },
        { week: 'W6', traffic: 19200, conversion: 0.030 },
        { week: 'W7', traffic: 20500, conversion: 0.025 },
        { week: 'W8', traffic: 21800, conversion: 0.042 }
    ],

    // Manufacturing Output vs Defects
    manufacturingData: [
        { day: 'Mon', output: 1250, defectRate: 0.024 },
        { day: 'Tue', output: 1420, defectRate: 0.026 },
        { day: 'Wed', output: 1650, defectRate: 0.028 },
        { day: 'Thu', output: 1880, defectRate: 0.032 },
        { day: 'Fri', output: 2100, defectRate: 0.035 },
        { day: 'Sat', output: 950, defectRate: 0.020 },
        { day: 'Sun', output: 0, defectRate: 0.000 }
    ],

    // HR Productivity
    hrData: [
        { quarter: 'Q1', headcount: 85, revenuePerEmployee: 125000 },
        { quarter: 'Q2', headcount: 95, revenuePerEmployee: 122000 },
        { quarter: 'Q3', headcount: 110, revenuePerEmployee: 118000 },
        { quarter: 'Q4', headcount: 130, revenuePerEmployee: 112000 },
        { quarter: 'Q5', headcount: 145, revenuePerEmployee: 108000 }
    ]
};

// Chart Components
const DualAxisChartExample = ({ data, title, leftMetric, rightMetric, leftLabel, rightLabel }: any) => (
    <div className="my-8 rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 shadow-lg">
        <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
                <BarChart3 size={20} style={{ color: themeColors.primary }} />
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">{title}</h3>
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded w-fit">Dual-Axis Example</span>
        </div>

        <div className="h-48 sm:h-64">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                        dataKey="month"
                        tick={{ fill: '#64748b', fontSize: 12 }}
                        axisLine={{ stroke: '#cbd5e1' }}
                    />
                    <YAxis
                        yAxisId="left"
                        tick={{ fill: themeColors.primary, fontSize: 12 }}
                        axisLine={{ stroke: themeColors.primary }}
                        label={{
                            value: leftLabel,
                            angle: -90,
                            position: 'insideLeft',
                            offset: -10,
                            style: { fill: themeColors.primary, fontSize: 11 }
                        }}
                    />
                    <YAxis
                        yAxisId="right"
                        orientation="right"
                        tick={{ fill: themeColors.secondary, fontSize: 12 }}
                        axisLine={{ stroke: themeColors.secondary }}
                        label={{
                            value: rightLabel,
                            angle: 90,
                            position: 'insideRight',
                            offset: -10,
                            style: { fill: themeColors.secondary, fontSize: 11 }
                        }}
                    />
                    <Tooltip
                        formatter={(value, name) => {
                            if (name === leftMetric) return [`₹${Number(value).toLocaleString()}`, leftLabel];
                            if (name === rightMetric) return [`${(Number(value) * 100).toFixed(1)}%`, rightLabel];
                            return [value, name];
                        }}
                        labelStyle={{ color: '#1e293b', fontWeight: 'bold' }}
                        contentStyle={{
                            backgroundColor: 'white',
                            border: '1px solid #e2e8f0',
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                    <Bar
                        yAxisId="left"
                        dataKey={leftMetric}
                        name={leftLabel}
                        fill={themeColors.primary}
                        radius={[4, 4, 0, 0]}
                        fillOpacity={0.8}
                    />
                    <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey={rightMetric}
                        name={rightLabel}
                        stroke={themeColors.secondary}
                        strokeWidth={3}
                        dot={{ r: 4, fill: themeColors.secondary }}
                        activeDot={{ r: 6, fill: '#d97706' }}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs text-gray-600">
            <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded" style={{ backgroundColor: themeColors.primary }}></div>
                <span className="truncate">{leftLabel} (Bars, Left Axis)</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="h-0.5 w-4" style={{ backgroundColor: themeColors.secondary }}></div>
                <span className="truncate">{rightLabel} (Line, Right Axis)</span>
            </div>
        </div>
    </div>
);

const AreaLineChart = ({ data, title, areaMetric, lineMetric, areaLabel, lineLabel }: any) => (
    <div className="my-8 rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 shadow-lg">
        <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
                <BarChart3 size={20} style={{ color: themeColors.primary }} />
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">{title}</h3>
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded w-fit">Area + Line</span>
        </div>

        <div className="h-48 sm:h-64">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                        dataKey="week"
                        tick={{ fill: '#64748b', fontSize: 12 }}
                        axisLine={{ stroke: '#cbd5e1' }}
                    />
                    <YAxis
                        yAxisId="left"
                        tick={{ fill: themeColors.darkBlue, fontSize: 12 }}
                        axisLine={{ stroke: themeColors.darkBlue }}
                        label={{
                            value: areaLabel,
                            angle: -90,
                            position: 'insideLeft',
                            offset: -10,
                            style: { fill: themeColors.darkBlue, fontSize: 11 }
                        }}
                    />
                    <YAxis
                        yAxisId="right"
                        orientation="right"
                        tick={{ fill: themeColors.secondary, fontSize: 12 }}
                        axisLine={{ stroke: themeColors.secondary }}
                        label={{
                            value: lineLabel,
                            angle: 90,
                            position: 'insideRight',
                            offset: -10,
                            style: { fill: themeColors.secondary, fontSize: 11 }
                        }}
                    />
                    <Tooltip
                        formatter={(value, name) => {
                            if (name === areaMetric) return [Number(value).toLocaleString(), areaLabel];
                            if (name === lineMetric) return [`${(Number(value) * 100).toFixed(1)}%`, lineLabel];
                            return [value, name];
                        }}
                        labelStyle={{ color: '#1e293b', fontWeight: 'bold' }}
                    />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                    <Area
                        yAxisId="left"
                        type="monotone"
                        dataKey={areaMetric}
                        name={areaLabel}
                        stroke={themeColors.darkBlue}
                        fill={themeColors.darkBlue}
                        fillOpacity={0.3}
                        strokeWidth={2}
                    />
                    <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey={lineMetric}
                        name={lineLabel}
                        stroke={themeColors.secondary}
                        strokeWidth={3}
                        dot={{ r: 4, fill: themeColors.secondary }}
                        activeDot={{ r: 6, fill: '#d97706' }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>
);

// Helper function to add backlinks to text
const addBacklinks = (text: string) => {
    if (!text) return '';
    return text
        .replace(/Python for data analysis/g, `<a href="https://ivyproschool.com/courses/data-analytics-and-generative-ai-course" class="text-[#013a81] font-semibold underline decoration-blue-200 underline-offset-4 hover:text-blue-600 transition-colors">Python for data analysis</a>`)
        .replace(
            /data engineering pipelines/g,
            `<a 
    href="https://ivyproschool.com/courses/data-engineering-course"
    class="text-[#f7af34] font-semibold underline decoration-[#f7af34]/40 underline-offset-4
           hover:text-[#3e69cc] hover:decoration-[#0f172a]/40 transition-colors duration-300">
    data engineering pipelines
  </a>`)
        .replace(
            /Generative AI/g,
            `<a 
    href="https://ivyproschool.com/courses/iit-generative-ai-course"
    class="text-[#f7af34] font-semibold underline decoration-[#f7af34]/40 underline-offset-4
           hover:text-[#3e69cc] hover:decoration-[#0f172a]/40 transition-colors duration-300">
    Generative AI
  </a>`
        )
        .replace(/expert-level Tableau usage/g, `<a href=" https://ivyproschool.com/courses/data-science-and-ml-course" class="text-[#013a81] font-semibold underline decoration-orange-200 underline-offset-4 hover:text-orange-600 transition-colors">expert-level Tableau usage</a>`);
};

// Helper function to highlight Python code
const highlightPythonCode = (code: string) => {
    if (!code) return '';
    const escaped = code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    return escaped
        .replace(
            /\b(import|from|as|def|class|return|if|elif|else|for|while|in|try|except|with)\b/g,
            '<span class="text-purple-400">$1</span>'
        )
        .replace(
            /\b(pd|read_csv|DataFrame|True|False|None|concat|fillna|to_csv|glob)\b/g,
            '<span class="text-blue-400">$1</span>'
        )
        .replace(
            /('[^']*'|"[^"]*")/g,
            '<span class="text-green-400">$1</span>'
        )
        .replace(
            /^#.*$/gm,
            '<span class="text-gray-400 italic">$&</span>'
        );
};

// Helper function to highlight Tableau code
const highlightTableauCode = (code: string) => {
    if (!code) return '';
    const escaped = code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    return escaped
        .replace(
            /\b(Columns|Rows|SUM|AVG|COUNT|DISTINCT|CASE|WHEN|THEN|END|CALCULATED|FIELD|Parameter|Data Type|String|Number|Date|Boolean)\b/gi,
            '<span class="text-purple-400">$1</span>'
        )
        .replace(
            /\b(Sales|Profit|Order Date|Month|Year|Quarter|Category|Region|Margin|Conversion|Defect|Revenue|Employee)\b/gi,
            '<span class="text-blue-400">$1</span>'
        )
        .replace(
            /('[^']*'|"[^"]*"|₹|%|#,##0)/g,
            '<span class="text-green-400">$1</span>'
        )
        .replace(
            /^\/\/.*$/gm,
            '<span class="text-gray-400 italic">$&</span>'
        );
};

// Helper function to highlight GenAI/LLM code
const highlightGenAICode = (code: string) => {
    if (!code) return '';
    const escaped = code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    return escaped
        .replace(
            /\b(import|from|as|def|class|return|if|elif|else|for|while|in|try|except|with|async|await)\b/g,
            '<span class="text-purple-400">$1</span>'
        )
        .replace(
            /\b(openai|langchain|llama_index|transformers|torch|numpy|pandas|RAG|FineTuning|retrieval|generation|embedding|vector|Llama|huggingface|retriever|chain|pipeline|TrainingArguments|Trainer)\b/gi,
            '<span class="text-blue-400">$1</span>'
        )
        .replace(
            /('[^']*'|"[^"]*")/g,
            '<span class="text-green-400">$1</span>'
        )
        .replace(
            /^#.*$/gm,
            '<span class="text-gray-400 italic">$&</span>'
        );
};

// Checklist component
const Checklist = ({ items }: { items: { checked: boolean; text: string }[] }) => (
    <div className="my-6 space-y-3">
        {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
                <div className={`mt-1 h-5 w-5 rounded-full flex-shrink-0 ${item.checked ? 'bg-emerald-500' : 'bg-gray-300'} flex items-center justify-center`}>
                    {item.checked && <Check size={12} className="text-white" />}
                </div>
                <span className="text-gray-700 text-sm sm:text-base">{item.text}</span>
            </div>
        ))}
    </div>
);

// List component
const List = ({ items }: { items: string[] }) => (
    <ul className="my-6 space-y-2">
        {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
                <div className="mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: themeColors.primary }}></div>
                <span className="text-gray-700 text-sm sm:text-base">{item}</span>
            </li>
        ))}
    </ul>
);

// Warning component
const Warning = ({ title, content }: { title: string; content: string }) => (
    <div className="my-8 rounded-2xl border-2 border-orange-200 bg-orange-50 p-4 sm:p-6">
        <div className="flex items-center gap-3 mb-3">
            <AlertTriangle style={{ color: themeColors.secondary }} size={20} />
            <h4 className="text-base sm:text-lg font-bold text-orange-800">{title}</h4>
        </div>
        <p className="text-orange-700 text-sm sm:text-base">{content}</p>
    </div>
);

// Note component
const Note = ({ title, content }: { title: string; content: string }) => (
    <div className="my-8 rounded-2xl border-2 border-blue-200 bg-blue-50 p-4 sm:p-6">
        <div className="flex items-center gap-3 mb-3">
            <BookOpen style={{ color: themeColors.primary }} size={20} />
            <h4 className="text-base sm:text-lg font-bold text-blue-800">{title}</h4>
        </div>
        <p className="text-blue-700 text-sm sm:text-base">{content}</p>
    </div>
);

// Authority Box Component for Prateek and Eeshani
const AuthorityBox = () => (
    <div className="sticky top-6 bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-5 rounded-2xl shadow-lg border border-blue-100">
        <div className="text-center mb-4">
            <h3 className="font-bold text-gray-900 text-base sm:text-lg flex items-center justify-center gap-2">
                <ShieldCheck className="h-5 w-5 text-blue-600" />
                Industry Authority
            </h3>
            <p className="text-gray-600 text-xs mt-1">
                These tutorials are authored by Ivy Pro School founders
            </p>
        </div>

        <div className="space-y-4">
            {/* Prateek Agarwal Card */}
            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-200">
                            <Image
                                src={PrateekAgarwal}
                                alt="Prateek Agarwal"
                                className="w-full h-full object-cover"
                                width={56}
                                height={56}
                            />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1">
                            <Star className="h-3 w-3 text-white" />
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 text-sm truncate">Prateek Agarwal</h4>
                        <p className="text-gray-600 text-xs truncate">Founder, Ivy Pro School</p>
                        <div className="flex items-center gap-1 mt-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                            <span className="text-xs text-gray-500">16+ years experience</span>
                        </div>
                    </div>
                    <a
                        href="https://www.linkedin.com/in/prateekagrawal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 bg-blue-50 hover:bg-blue-100 p-2 rounded-lg transition-colors"
                        title="View LinkedIn Profile"
                    >
                        <Linkedin className="h-5 w-5 text-blue-600" />
                    </a>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-gray-700 text-xs">
                        Worked with 50+ global firms, trained students from IIT KGP, IIM Kolkata, IIT Delhi
                    </p>
                </div>
            </div>

            {/* Eeshani Agrawal Card */}
            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-orange-200">
                            <Image
                                src={eeshani}
                                alt="Eeshani Agrawal"
                                className="w-full h-full object-cover"
                                width={56}
                                height={56}
                            />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-orange-500 rounded-full p-1">
                            <Star className="h-3 w-3 text-white" />
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 text-sm truncate">Eeshani Agrawal</h4>
                        <p className="text-gray-600 text-xs truncate">Co-Founder, Ivy Pro School</p>
                        <div className="flex items-center gap-1 mt-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                            <span className="text-xs text-gray-500">16+ years experience</span>
                        </div>
                    </div>
                    <a
                        href="https://www.linkedin.com/in/eeshani-agrawal-b674045"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 bg-orange-50 hover:bg-orange-100 p-2 rounded-lg transition-colors"
                        title="View LinkedIn Profile"
                    >
                        <Linkedin className="h-5 w-5 text-blue-600" />
                    </a>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-gray-700 text-xs">
                        Trained 9,000+ professionals across Top IITs, IIMs, and ISI
                    </p>
                </div>
            </div>
        </div>

        <div className="mt-4 pt-4 border-t border-blue-100">
            <div className="flex items-center justify-between text-xs text-gray-600">
                <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-blue-500" />
                    <span>Industry Experts</span>
                </div>
                <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-blue-500" />
                    <span>16+ Years Each</span>
                </div>
            </div>
            <p className="text-xs text-center text-gray-500 mt-3 italic">
                All content reviewed by Ivy's expert faculty team
            </p>
        </div>
    </div>
);

interface PageProps {
    params: Promise<{
        category: string;
        topic: string;
    }>;
}

const TopicPage = ({ params }: PageProps) => {
    // Use the use() hook to unwrap the params promise
    const unwrappedParams = use(params);
    const { category: categorySlug, topic: topicSlug } = unwrappedParams;
    
    const [activeSection, setActiveSection] = useState('intro');
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showReviewPrompt, setShowReviewPrompt] = useState(false);
    const [reviewPromptShown, setReviewPromptShown] = useState(false);

    useEffect(() => {
        const calculateScrollProgress = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrolled = window.scrollY;

            if (documentHeight > 0) {
                const progress = (scrolled / documentHeight) * 100;
                setScrollProgress(Math.min(100, Math.max(0, progress)));

                if (progress >= 95 && !reviewPromptShown) {
                    setShowReviewPrompt(true);
                    setReviewPromptShown(true);
                }
            }
        };

        window.addEventListener('scroll', calculateScrollProgress);
        calculateScrollProgress();

        return () => {
            window.removeEventListener('scroll', calculateScrollProgress);
        };
    }, [reviewPromptShown]);

    const category = data.categories[categorySlug as keyof typeof data.categories];

    if (!category) {
        return (
            <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-24 sm:pt-32 text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-gray-900 mb-4">Category not found</h1>
                    <Link href="/aihelpcenter" className="text-blue-600 hover:text-blue-800 font-medium">
                        Return to Home
                    </Link>
                </div>
            </div>
        );
    }

    // Find topic by searching through all subcategories
    let topicData = null;
    let foundSubcategory = null;

    if ('subcategories' in category && category.subcategories) {
        for (const subcatKey in category.subcategories) {
            const subcat = category.subcategories[subcatKey as keyof typeof category.subcategories] as any;
            if ('topics' in subcat && subcat.topics) {
                const topic = subcat.topics.find((t: any) => t.id === topicSlug);
                if (topic) {
                    topicData = topic;
                    foundSubcategory = subcat;
                    break;
                }
            }
        }
    }

    if (!topicData) {
        return (
            <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-24 sm:pt-32 text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-gray-900 mb-4">Topic not found</h1>
                    <Link href={`/aihelpcenter/${categorySlug}`} className="text-blue-600 hover:text-blue-800 font-medium">
                        Return to {category.title}
                    </Link>
                </div>
            </div>
        );
    }

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    const openReviewPage = () => {
        window.open('https://www.google.com/search?q=ivy+professional+school&rlz=1C1ONGR_enIN1115IN1115&oq=&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7Mg0IARAuGK8BGMcBGIAEMgcIAhAAGIAEMhAIAxAuGIMBGLEDGIAEGOUEMgcIBBAAGIAEMgYIBRBFGDwyBggGEEUYQTIGCAcQRRg80gEIMzA0N2owajeoAgiwAgHxBRMMy4WLy7978QUTMMy4WLy_ew&sourceid=chrome&ie=UTF-8#lrd=0x3a02771797fccdc1:0xca64261fceaf2af6,3,,,', '_blank');
        setShowReviewPrompt(false);
    };

    const renderTopicContent = () => {
        const content = topicData.content;

        return (
            <article className="lg:col-span-3">
                <div className="rounded-2xl sm:rounded-[2.5rem] bg-white p-4 sm:p-6 md:p-8 lg:p-14 shadow-sm ring-1 ring-gray-200">
                    {/* Introduction Section */}
                    <section id="intro" className="max-w-none mb-8 sm:mb-16">
                        {content.sections?.find((s: any) => s.id === 'intro')?.content?.map((item: any, idx: number) => (
                            <div key={idx}>
                                {item.type === 'paragraph' && item.hasBar && (
                                    <div className="relative pl-4 sm:pl-6 mb-6 sm:mb-8">
                                        <div className="absolute left-0 top-1.5 w-1.5 h-6 sm:h-8" style={{ backgroundColor: themeColors.primary }}></div>
                                        <p className="text-base sm:text-xl leading-relaxed text-gray-600" dangerouslySetInnerHTML={{
                                            __html: addBacklinks(item.text)
                                        }} />
                                    </div>
                                )}
                                {item.type === 'paragraph' && !item.hasBar && (
                                    <p className="text-base sm:text-xl leading-relaxed text-gray-600 mb-6 sm:mb-8" dangerouslySetInnerHTML={{
                                        __html: addBacklinks(item.text)
                                    }} />
                                )}
                            </div>
                        ))}
                    </section>

                    {/* Table of Contents for GenAI */}
                    {content.sections?.find((s: any) => s.type === 'toc') && (
                        <div className="my-8 sm:my-16 rounded-2xl bg-gray-50 p-4 sm:p-6 md:p-8 border border-gray-200">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                                <BookOpen size={20} /> {content.sections.find((s: any) => s.type === 'toc')?.title}
                            </h3>
                            <ul className="space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                                {content.sections.find((s: any) => s.type === 'toc')?.content?.map((item: string, idx: number) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <ChevronRight size={16} style={{ color: themeColors.primary }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Analogy Section */}
                    {content.sections?.find((s: any) => s.type === 'analogy') && (
                        <div className="my-8 sm:my-16 rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 md:p-10 text-white shadow-lg sm:shadow-2xl" style={{ backgroundColor: themeColors.darkBlue }}>
                            <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                                <div className="rounded-2xl bg-white/20 p-2 sm:p-3 w-fit">
                                    {iconMap[content.sections.find((s: any) => s.type === 'analogy')?.icon || 'Layers']}
                                </div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{content.sections.find((s: any) => s.type === 'analogy')?.title}</h3>
                            </div>
                            <p className="text-base sm:text-xl leading-relaxed text-blue-100 mb-6 sm:mb-8">
                                {content.sections.find((s: any) => s.type === 'analogy')?.content?.main}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                {content.sections.find((s: any) => s.type === 'analogy')?.content?.cards?.map((card: any, idx: number) => (
                                    <div key={idx} className={`rounded-2xl ${idx === 1 ? 'bg-blue-500 border-white/20' : 'bg-blue-700/50 border-white/10'} border p-4 sm:p-6`}>
                                        <h4 className="font-black uppercase text-xs tracking-widest text-blue-300 mb-2 sm:mb-3">{card.title}</h4>
                                        <p className="text-blue-50 font-medium text-sm sm:text-base">{card.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Content Sections */}
                    {content.sections?.filter((s: any) => !['intro', 'toc', 'analogy'].includes(s.type || s.id)).map((section: any) => (
                        <section key={section.id} id={section.id} className="mt-12 sm:mt-20">
                            {section.phase && (
                                <div className="mb-6 sm:mb-8">
                                    <div className="inline-flex items-center gap-3 rounded-full bg-gray-100 px-3 sm:px-4 py-1 text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 sm:mb-4">
                                        {section.phase}
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{section.title}</h2>
                                </div>
                            )}
                            {!section.phase && (
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">{section.title}</h2>
                            )}

                            {section.content?.map((item: any, idx: number) => {
                                if (item.type === 'paragraph') {
                                    return <p key={idx} className="text-base sm:text-lg leading-relaxed text-gray-600 mb-6 sm:mb-8" dangerouslySetInnerHTML={{
                                        __html: addBacklinks(item.text)
                                    }} />;
                                }
                                if (item.type === 'subtitle') {
                                    return <h3 key={idx} className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 mt-8 sm:mt-12">{item.text}</h3>;
                                }
                                if (item.type === 'code') {
                                    const borderColors: Record<string, string> = {
                                        'indigo': 'border-blue-500',
                                        'emerald': 'border-emerald-500',
                                        'blue': 'border-blue-500',
                                        'purple': 'border-purple-500',
                                        'pink': 'border-pink-500',
                                        'amber': 'border-orange-500'
                                    };
                                    const borderClass = borderColors[item.borderColor] || 'border-blue-500';

                                    return (
                                        <div key={idx} className={`my-6 sm:my-8 overflow-hidden rounded-2xl bg-black font-mono text-xs sm:text-sm shadow-xl border-l-[4px] sm:border-l-[6px] ${borderClass}`}>
                                            <div className="bg-gray-900 px-4 sm:px-6 py-2 sm:py-3 border-b border-gray-800 flex justify-between items-center">
                                                <span className="text-gray-400 text-xs font-medium truncate">{item.title}</span>
                                                <Terminal size={14} className="text-gray-500 flex-shrink-0" />
                                            </div>
                                            <pre className="p-4 sm:p-6 md:p-8 leading-6 sm:leading-8 overflow-x-auto text-gray-100" style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                                                <code dangerouslySetInnerHTML={{
                                                    __html: categorySlug === 'genai-llm' ? highlightGenAICode(item.code) :
                                                        categorySlug === 'visualization' ? highlightTableauCode(item.code) :
                                                            highlightPythonCode(item.code)
                                                }} />
                                            </pre>
                                        </div>
                                    );
                                }
                                if (item.type === 'explanation') {
                                    const colorMap: Record<string, { border: string, bg: string, text: string }> = {
                                        'indigo': { border: 'border-blue-50', bg: 'bg-blue-50/30', text: themeColors.darkBlue },
                                        'emerald': { border: 'border-emerald-50', bg: 'bg-emerald-50/30', text: '#059669' },
                                        'blue': { border: 'border-blue-50', bg: 'bg-blue-50/30', text: themeColors.primary },
                                        'purple': { border: 'border-purple-50', bg: 'bg-purple-50/30', text: '#7c3aed' },
                                        'pink': { border: 'border-pink-50', bg: 'bg-pink-50/30', text: '#db2777' },
                                        'amber': { border: 'border-orange-50', bg: 'bg-orange-50/30', text: themeColors.secondary }
                                    };
                                    const color = colorMap[item.borderColor] || colorMap.blue;

                                    return (
                                        <div key={idx} className={`my-6 sm:my-8 rounded-2xl border-2 p-4 sm:p-6 md:p-8 ${color.border} ${color.bg}`}>
                                            <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest mb-4 sm:mb-6" style={{ color: color.text }}>
                                                <Search size={16} /> {item.title}
                                            </h4>
                                            <div className="space-y-3 sm:space-y-4">
                                                {item.content.split('\n\n').map((paragraph: string, pIdx: number) => (
                                                    <p key={pIdx} className="text-gray-700 leading-relaxed italic text-sm sm:text-base">
                                                        {paragraph}
                                                    </p>
                                                ))}
                                            </div>
                                            {item.note && (
                                                <p className="mt-3 sm:mt-4 text-gray-700 font-medium text-sm sm:text-base">{item.note}</p>
                                            )}
                                        </div>
                                    );
                                }
                                if (item.type === 'quote') {
                                    return (
                                        <p key={idx} className="text-base sm:text-lg leading-relaxed text-gray-600 mb-6 sm:mb-8 italic border-l-4 border-blue-200 pl-4 sm:pl-6">
                                            {item.text}
                                        </p>
                                    );
                                }
                                if (item.type === 'table') {
                                    return (
                                        <div key={idx} className="my-6 sm:my-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
                                            <div className="bg-gray-50 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                                                <div className="flex items-center gap-2">
                                                    <Table size={16} style={{ color: themeColors.primary }} />
                                                    <span className="text-sm font-semibold text-gray-700">{item.title}</span>
                                                </div>
                                                <span className="text-xs text-gray-500">Comparison Table</span>
                                            </div>
                                            <div className="overflow-x-auto">
                                                <table className="w-full min-w-full">
                                                    <thead>
                                                        <tr className="bg-gray-100">
                                                            {item.headers?.map((header: string, hIdx: number) => (
                                                                <th key={hIdx} className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200 whitespace-nowrap">
                                                                    {header}
                                                                </th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200">
                                                        {item.rows?.map((row: any[], rIdx: number) => (
                                                            <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                                {row.map((cell: string, cIdx: number) => (
                                                                    <td key={cIdx} className="px-3 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm text-gray-700 border-r border-gray-200 last:border-r-0 whitespace-nowrap">
                                                                        {cell}
                                                                    </td>
                                                                ))}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    );
                                }
                                if (item.type === 'image') {
                                    return (
                                        <div key={idx} className="my-6 sm:my-8">
                                            <div className="rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-lg">
                                                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                                    <ImageIcon size={16} style={{ color: themeColors.primary }} />
                                                    <span className="text-sm font-semibold text-gray-700 truncate">{item.title}</span>
                                                </div>
                                                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                                                    <iframe
                                                        src={item.url}
                                                        className="w-full h-full border-0"
                                                        title={item.title}
                                                        allow="autoplay"
                                                    />
                                                </div>
                                                {item.caption && (
                                                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600 text-center">{item.caption}</p>
                                                )}
                                            </div>
                                        </div>
                                    );
                                }
                                if (item.type === 'list') {
                                    return <List key={idx} items={item.items} />;
                                }
                                if (item.type === 'checklist') {
                                    return <Checklist key={idx} items={item.items} />;
                                }
                                if (item.type === 'warning') {
                                    return <Warning key={idx} title={item.title} content={item.content} />;
                                }
                                if (item.type === 'note') {
                                    return <Note key={idx} title={item.title} content={item.content} />;
                                }
                                if (item.type === 'analogy') {
                                    const colorMap: Record<string, { bg: string, border: string, text: string }> = {
                                        'pink': { bg: 'bg-pink-600', border: 'border-pink-500', text: 'text-pink-50' },
                                        'red': { bg: 'bg-red-600', border: 'border-red-500', text: 'text-red-50' },
                                        'emerald': { bg: 'bg-emerald-600', border: 'border-emerald-500', text: 'text-emerald-50' }
                                    };
                                    const color = colorMap[item.color] || colorMap.pink;

                                    return (
                                        <div key={idx} className="my-8 sm:my-16 rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 md:p-10 text-white shadow-lg sm:shadow-2xl" style={{ backgroundColor: themeColors.darkBlue }}>
                                            <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                                                <div className={`rounded-2xl border-2 p-2 sm:p-3 w-fit`} style={{ borderColor: themeColors.secondary }}>
                                                    {iconMap[item.icon]}
                                                </div>
                                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{item.title}</h3>
                                            </div>
                                            <p className="text-base sm:text-xl leading-relaxed mb-6 sm:mb-8 opacity-90">
                                                {item.content?.main}
                                            </p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                                {item.content?.cards?.map((card: any, cardIdx: number) => (
                                                    <div key={cardIdx} className={`rounded-2xl ${cardIdx === 1 ? 'border-white/30' : 'border-white/20'} border p-4 sm:p-6`}>
                                                        <h4 className="font-black uppercase text-xs tracking-widest opacity-80 mb-2 sm:mb-3">{card.title}</h4>
                                                        <p className="font-medium text-sm sm:text-base">{card.content}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                }
                                return null;
                            })}

                            {/* Add Chart Examples for Visualization Category */}
                            {categorySlug === 'visualization' && topicSlug === 'dual-axis-charts' && (
                                <>
                                    {section.id === 'sales-profit-analysis' && (
                                        <DualAxisChartExample
                                            data={chartData.salesProfitData}
                                            title="Sales vs Profit Margin Analysis"
                                            leftMetric="sales"
                                            rightMetric="profitMargin"
                                            leftLabel="Sales (₹)"
                                            rightLabel="Profit Margin (%)"
                                        />
                                    )}

                                    {section.id === 'marketing-effectiveness' && (
                                        <AreaLineChart
                                            data={chartData.marketingData}
                                            title="Marketing: Traffic vs Conversion Rate"
                                            areaMetric="traffic"
                                            lineMetric="conversion"
                                            areaLabel="Website Traffic"
                                            lineLabel="Conversion Rate (%)"
                                        />
                                    )}

                                    {section.id === 'manufacturing-quality' && (
                                        <DualAxisChartExample
                                            data={chartData.manufacturingData}
                                            title="Manufacturing: Output vs Defect Rate"
                                            leftMetric="output"
                                            rightMetric="defectRate"
                                            leftLabel="Daily Output"
                                            rightLabel="Defect Rate (%)"
                                        />
                                    )}

                                    {section.id === 'hr-productivity' && (
                                        <DualAxisChartExample
                                            data={chartData.hrData}
                                            title="HR Analytics: Headcount vs Revenue per Employee"
                                            leftMetric="headcount"
                                            rightMetric="revenuePerEmployee"
                                            leftLabel="Headcount"
                                            rightLabel="Revenue/Employee (₹)"
                                        />
                                    )}
                                </>
                            )}
                        </section>
                    ))}

                    {/* Troubleshooting Section */}
                    {content.troubleshooting && (
                        <section id="troubleshooting" className="mt-12 sm:mt-24 border-t border-gray-100 pt-12 sm:pt-20">
                            <div className="mb-8 sm:mb-12">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 sm:mb-4">{content.troubleshooting.title}</h2>
                                <p className="text-lg sm:text-xl text-gray-500">{content.troubleshooting.subtitle}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                                {content.troubleshooting.cards?.map((card: any, idx: number) => {
                                    const colorMap: Record<string, { border: string, shadow: string, bg: string, text: string }> = {
                                        'red': { border: 'border-red-50', shadow: 'shadow-red-50/50', bg: 'bg-red-100', text: '#dc2626' },
                                        'amber': { border: 'border-orange-50', shadow: 'shadow-orange-50/50', bg: 'bg-orange-100', text: themeColors.secondary },
                                        'indigo': { border: 'border-blue-50', shadow: 'shadow-blue-50/50', bg: 'bg-blue-100', text: themeColors.primary },
                                        'pink': { border: 'border-pink-50', shadow: 'shadow-pink-50/50', bg: 'bg-pink-100', text: '#db2777' },
                                        'blue': { border: 'border-blue-50', shadow: 'shadow-blue-50/50', bg: 'bg-blue-100', text: themeColors.primary },
                                        'purple': { border: 'border-purple-50', shadow: 'shadow-purple-50/50', bg: 'bg-purple-100', text: '#7c3aed' }
                                    };
                                    const color = colorMap[card.color] || colorMap.blue;

                                    return (
                                        <div key={idx} className={`rounded-2xl sm:rounded-3xl border-2 ${color.border} bg-white p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform`}>
                                            <div className={`mb-4 sm:mb-6 inline-flex h-10 sm:h-14 w-10 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl ${color.bg}`}>
                                                {iconMap[card.icon]}
                                            </div>
                                            <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{card.title}</h4>
                                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{card.content}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    )}

                    {/* Conclusion Section */}
                    {content.conclusion && (
                        <section className="mt-12 sm:mt-24 space-y-6 sm:space-y-10">
                            <div className="rounded-2xl sm:rounded-[2.5rem] bg-gray-900 p-6 sm:p-8 md:p-12 text-white">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">{content.conclusion.title}</h2>
                                <div className="space-y-4 sm:space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
                                    <p dangerouslySetInnerHTML={{
                                        __html: addBacklinks(content.conclusion.content)
                                    }} />
                                </div>
                            </div>

                            {content.conclusion.checklist && (
                                <div className="rounded-2xl sm:rounded-3xl border-4 p-4 sm:p-6 md:p-10" style={{ borderColor: themeColors.primary }}>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-6 sm:mb-8 uppercase tracking-tighter">Summary Checklist</h3>
                                    <div className="space-y-4 sm:space-y-6">
                                        {content.conclusion.checklist.map((step: any, idx: number) => (
                                            <div key={idx} className="flex items-center gap-3 sm:gap-4 group">
                                                <div className="h-6 sm:h-8 w-6 sm:w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">✓</div>
                                                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                                                    <span className="font-black text-gray-900 text-sm sm:text-base">{step.item}:</span>
                                                    <span className="text-blue-600 font-mono text-xs sm:text-sm bg-blue-50 px-2 sm:px-3 py-1 rounded-lg">{step.text}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {content.conclusion.finalNote && (
                                <p className="text-lg sm:text-xl font-medium text-gray-600 pt-6 sm:pt-10 text-center italic">
                                    {content.conclusion.finalNote}
                                </p>
                            )}

                            {content.conclusion.finalParagraph && (
                                <p className="text-base sm:text-lg text-gray-500 text-center leading-relaxed max-w-2xl mx-auto">
                                    {content.conclusion.finalParagraph}
                                </p>
                            )}
                        </section>
                    )}

                    {/* CTA Section */}
                    <div className="mt-12 sm:mt-20 flex flex-col items-center justify-center rounded-2xl sm:rounded-[3rem] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-10 text-center text-white shadow-xl sm:shadow-2xl"
                        style={{ backgroundColor: themeColors.darkBlue }}>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
                            Identify Your Knowledge Gaps with Intelligent Quizzes
                        </h2>

                        <p className="text-blue-100 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-3xl leading-relaxed">
                            Take personalized quizzes tailored to your domain, topic, and difficulty level.
                            Get detailed feedback on your strengths and weaknesses. Receive a customized
                            learning plan to improve based on your quiz performance. Join 50,000+ learners
                            who've improved their skills with <strong><a href="https://prepai.ivyproschool.com/diagnose" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-yellow-300">PrepAI Diagnose</a></strong>.
                        </p>

                        <a
                            href="https://prepai.ivyproschool.com/diagnose"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block rounded-full bg-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 text-base sm:text-lg font-black shadow-lg sm:shadow-xl hover:scale-105 active:scale-95 transition-all uppercase tracking-wide"
                            style={{ color: themeColors.darkBlue }}
                        >
                            Start Your PrepAI Diagnose
                        </a>
                    </div>
                </div>
            </article>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-700">
            <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
                <div
                    className="h-full transition-all duration-300"
                    style={{
                        width: `${scrollProgress}%`,
                        background: `linear-gradient(90deg, ${themeColors.primary}, ${themeColors.secondary})`
                    }}
                ></div>
            </div>

            {showReviewPrompt && (
                <div className="fixed top-16 sm:top-20 right-2 sm:right-4 md:right-6 z-50 max-w-xs sm:max-w-sm animate-fade-in">
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-4 sm:p-6 border border-blue-100">
                        <div className="flex items-center gap-3 mb-3 sm:mb-4">
                            <div className="h-8 sm:h-10 w-8 sm:w-10 rounded-full flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${themeColors.primary}, ${themeColors.secondary})` }}>
                                <Star className="h-4 sm:h-6 w-4 sm:w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-sm sm:text-base">Enjoying this tutorial?</h3>
                                <p className="text-xs sm:text-sm text-gray-600">Share your feedback!</p>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-3 sm:mb-4 text-xs sm:text-sm">
                            You've completed {Math.round(scrollProgress)}% of this tutorial. Help others by sharing your experience with Ivy Professional School.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                            <button
                                onClick={openReviewPage}
                                className="flex-1 text-white font-bold py-2 sm:py-3 rounded-lg sm:rounded-xl hover:opacity-90 transition-opacity text-sm sm:text-base"
                                style={{ background: `linear-gradient(90deg, ${themeColors.primary}, ${themeColors.darkBlue})` }}
                            >
                                Write a Review
                            </button>
                            <button
                                onClick={() => setShowReviewPrompt(false)}
                                className="px-3 sm:px-4 py-2 text-gray-600 hover:text-gray-900 font-medium text-sm sm:text-base"
                            >
                                Maybe Later
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-6 sm:pt-8">
                <nav className="flex flex-wrap items-center gap-2 text-sm font-medium text-gray-500 mb-4 sm:mb-6">
                    <Link href="/aihelpcenter" className="hover:text-blue-600 transition-colors text-sm sm:text-base">
                        Home
                    </Link>
                    <ChevronRight size={14} />
                    <Link href={`/aihelpcenter/${categorySlug}`} className="hover:text-blue-600 transition-colors text-sm sm:text-base">
                        {category.title}
                    </Link>
                    <ChevronRight size={14} />
                    {foundSubcategory && (
                        <>
                            <Link href={`/aihelpcenter/${categorySlug}`} className="hover:text-blue-600 transition-colors text-sm sm:text-base">
                                {foundSubcategory.title}
                            </Link>
                            <ChevronRight size={14} />
                        </>
                    )}
                    <span className="text-blue-600 font-medium text-sm sm:text-base">
                        {topicData.title}
                    </span>
                </nav>
            </div>

            <header className="bg-white px-4 sm:px-6 pt-4 sm:pt-6 pb-8 sm:pb-16">
                <div className="mx-auto max-w-7xl">
                    <h1 className="mb-6 sm:mb-8 max-w-4xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.15] text-gray-900">
                        {topicData.content.hero.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-6 border-t border-gray-100 pt-4 sm:pt-8 text-xs sm:text-sm font-medium text-gray-500">
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <div className="h-8 sm:h-10 w-8 sm:w-10 rounded-full overflow-hidden border-2 border-blue-200">
                                    {categorySlug === 'genai-llm' ||
                                        categorySlug === 'ai-strategy-pm' ||
                                        categorySlug === 'mlops' ? (
                                        <Image
                                            src={PrateekAgarwal}
                                            alt="Prateek Agarwal"
                                            className="w-full h-full object-cover"
                                            width={40}
                                            height={40}
                                        />
                                    ) : (
                                        <Image
                                            src={eeshani}
                                            alt="Eeshani Agrawal"
                                            className="w-full h-full object-cover"
                                            width={40}
                                            height={40}
                                        />
                                    )}
                                </div>
                                <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-0.5 sm:p-1">
                                    <Star className="h-2 w-2 sm:h-3 sm:w-3 text-white" />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span>By <span className="text-gray-900 font-semibold">
                                        {categorySlug === 'genai-llm' ||
                                            categorySlug === 'ai-strategy-pm' ||
                                            categorySlug === 'mlops' ?
                                            'Prateek Agarwal' : 'Eeshani Agrawal'}
                                    </span></span>
                                    <a
                                        href={
                                            categorySlug === 'genai-llm' ||
                                                categorySlug === 'ai-strategy-pm' ||
                                                categorySlug === 'mlops'
                                                ? "https://www.linkedin.com/in/prateekagrawal/"
                                                : "https://www.linkedin.com/in/eeshani-agrawal-b674045/"
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 transition-colors"
                                        title="View LinkedIn Profile"
                                    >
                                        <Linkedin className="h-4 w-4" />
                                    </a>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="h-1 w-1 rounded-full bg-emerald-500"></div>
                                    <span className="text-xs text-gray-500">16+ years experience</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 border-l border-gray-200 pl-3 sm:pl-6">
                            <Calendar size={14} />
                            <span>{topicData.content.hero.date}</span>
                        </div>
                        <div className="flex items-center gap-2 border-l border-gray-200 pl-3 sm:pl-6">
                            <Clock size={14} />
                            <span>{topicData.content.hero.readTime}</span>
                        </div>
                    </div>
                </div>
            </header>

            {topicData.content.video?.youtubeId && (
                <div className="mx-auto -mt-4 sm:-mt-8 max-w-5xl px-4 sm:px-6">
                    <div className="group relative aspect-video overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gray-900 shadow-lg sm:shadow-2xl">
                        <iframe
                            className="absolute inset-0 h-full w-full"
                            src={`https://www.youtube.com/embed/${topicData.content.video.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${topicData.content.video.youtubeId}&controls=1`}
                            title={topicData.content.video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-transparent to-transparent">
                            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8">
                                <span className="mb-1 sm:mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                                    Interactive Lesson
                                </span>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{topicData.content.video.title}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <main className="mx-auto mt-8 sm:mt-12 md:mt-16 max-w-7xl px-4 sm:px-6 pb-16 sm:pb-24">
                <div className="grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-4">
                    {renderTopicContent()}

                    <aside className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6 sm:space-y-8">
                            {/* Roadmap Section */}
                            <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white p-4 sm:p-6 shadow-sm ring-1 ring-gray-200">
                                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4 sm:mb-6">Roadmap</h4>
                                <div className="flex flex-col gap-2 sm:gap-4">
                                    {categorySlug === 'visualization' && topicSlug === 'dual-axis-charts' ? (
                                        <>
                                            {[
                                                { id: 'intro', label: 'Introduction' },
                                                { id: 'what-is', label: 'What is Dual-Axis?' },
                                                { id: 'importance', label: 'Business Importance' },
                                                { id: 'when-to-use', label: 'When to Use' },
                                                { id: 'when-not-to-use', label: 'When to Avoid' },
                                                { id: 'core-concepts', label: 'Core Concepts' },
                                                { id: 'basic-chart', label: 'Basic Chart Setup' },
                                                { id: 'add-second-measure', label: 'Add Second Measure' },
                                                { id: 'convert-dual-axis', label: 'Convert to Dual-Axis' },
                                                { id: 'synchronize-axes', label: 'Axis Synchronization' },
                                                { id: 'mark-types', label: 'Mark Types' },
                                                { id: 'formatting', label: 'Formatting' },
                                                { id: 'sales-profit-analysis', label: 'Sales Analysis' },
                                                { id: 'marketing-effectiveness', label: 'Marketing' },
                                                { id: 'manufacturing-quality', label: 'Manufacturing' },
                                                { id: 'hr-productivity', label: 'HR Analytics' },
                                                { id: 'calculated-fields', label: 'Calculated Fields' },
                                                { id: 'reference-lines', label: 'Reference Lines' },
                                                { id: 'parameters', label: 'Parameters' },
                                                { id: 'decision-guide', label: 'Decision Guide' },
                                                { id: 'misinterpretations', label: 'Common Issues' },
                                                { id: 'pre-publish-checklist', label: 'Pre-Publish Checklist' },
                                                { id: 'power-vs-risk', label: 'Power vs Risk' },
                                                { id: 'troubleshooting', label: 'Troubleshooting' }
                                            ].map((link) => (
                                                <button
                                                    key={link.id}
                                                    onClick={() => scrollTo(link.id)}
                                                    className={`text-left text-xs sm:text-sm font-bold transition-all border-l-2 sm:border-l-4 pl-2 sm:pl-4 ${activeSection === link.id
                                                        ? 'text-blue-600 border-blue-600'
                                                        : 'text-gray-400 border-transparent hover:text-gray-600'
                                                        }`}
                                                >
                                                    {link.label}
                                                </button>
                                            ))}
                                        </>
                                    ) : (
                                        data.navigation.toc.map((link: any) => (
                                            <button
                                                key={link.id}
                                                onClick={() => scrollTo(link.id)}
                                                className={`text-left text-xs sm:text-sm font-bold transition-all border-l-2 sm:border-l-4 pl-2 sm:pl-4 ${activeSection === link.id
                                                    ? 'text-blue-600 border-blue-600'
                                                    : 'text-gray-400 border-transparent hover:text-gray-600'
                                                    }`}
                                            >
                                                {link.label}
                                            </button>
                                        ))
                                    )}
                                </div>
                            </div>

                            {/* Authority Box - Shows Prateek and Eeshani */}
                            <AuthorityBox />

                            {/* Advanced Courses Section */}
                            <div className="sticky top-6 bg-gradient-to-br p-4 sm:p-5 rounded-3xl shadow-2xl text-white"
                                style={{ background: `linear-gradient(135deg, ${themeColors.primary}, ${themeColors.darkBlue})` }}>

                                <div className="text-center mb-6">
                                    <h3 className="font-extrabold text-lg sm:text-xl leading-tight">
                                        Advanced Courses
                                    </h3>
                                    <p className="text-blue-100 text-[11px] opacity-70 mt-1">
                                        Fast-track your career with Ivy.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    {[
                                        { name: "AI Product Manager", link: "/courses/ai-product-manager-course" },
                                        { name: "Data Science & ML", link: "/courses/data-science-and-ml-course" },
                                        { name: "Data Engineering", link: "/courses/data-engineering-course" },
                                        { name: "Data Analytics", link: "/courses/data-analytics-course" },
                                        { name: "Data Analytics & Gen AI", link: "/courses/data-analytics-and-generative-ai-course" },
                                        { name: "Generative AI", link: "/courses/iit-generative-ai-course" },
                                        { name: "AI & Machine Learning", link: "/courses/ai-machine-learning-course" },
                                        { name: "Data Science (Pay after placement)", link: "/courses/no-upfront-fees-data-science-and-ml-course" },
                                    ].map((course, index) => (
                                        <a
                                            key={index}
                                            href={course.link}
                                            className="group flex items-center justify-between w-full p-2 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl"
                                        >
                                            <div className="flex items-center gap-4 min-w-0">
                                                <div className="w-12 h-10 flex-shrink-0 flex items-center justify-center overflow-hidden">
                                                    <Image
                                                        src={ivy}
                                                        alt="Ivy Logo"
                                                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                                    />
                                                </div>

                                                <span className="text-[13px] sm:text-[14px] font-bold leading-tight text-white group-hover:text-[#003366] transition-colors duration-300">
                                                    {course.name}
                                                </span>
                                            </div>

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 flex-shrink-0 opacity-40 group-hover:opacity-100 group-hover:text-[#003366] transition-all"
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default TopicPage;