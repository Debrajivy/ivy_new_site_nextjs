"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Clock,
  BookOpen,
  Database,
  Layers,
  Star,
  ChevronDown,
  ArrowUpRight,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  Table,
  Zap,
  Target,
  AlertCircle,
  GitBranch,
  BarChart3,
  TrendingUp,
  Server,
} from "lucide-react";

const LinkedInSVG = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

import ivy from "@/assests/ivy.png";
import PrateekAgarwal from "@/assests/pratilk.webp";
import eeshani from "@/assests/eeshani.webp";

/* ─── roadmap ───────────────────────────────────── */
const ROADMAP_SECTIONS = [
  { id: "introduction", title: "Introduction" },
  { id: "star-schema", title: "What is a Star Schema?" },
  { id: "snowflake-schema", title: "What is a Snowflake Schema?" },
  { id: "key-differences", title: "Key Differences" },
  { id: "sql-examples", title: "SQL Examples" },
  { id: "when-to-use", title: "When to Use Each" },
  { id: "hybrid-approach", title: "Hybrid Approach" },
  { id: "final-recommendation", title: "Final Recommendation" },
];

/* ─── when-to-use tabs ───────────────────────────── */
const WHEN_TO_USE = [
  {
    id: "star-reporting",
    icon: <BarChart3 size={20} />,
    label: "Star: Reporting",
    color: "#009fda",
    bg: "#e0f2fe",
    schema: "Star Schema",
    title: "Reporting, Dashboards & Self-Service BI",
    body: `Use a star schema when your main goal is fast reporting and simple analysis. Business users need dashboards that load quickly and are easy to filter by product, region, date, or category.`,
    detail: `Star schema is ideal for Power BI, Tableau, and Excel Pivot models. These tools perform better when the model has clear fact and dimension tables with fewer relationship paths. Analysts can build reports without needing to understand complex join logic.`,
    example: `SELECT c.City, SUM(f.Sales_Amount) AS Total_Sales FROM Fact_Sales f JOIN Dim_Customer c ON f.Customer_Key = c.Customer_Key GROUP BY c.City;`,
  },
  {
    id: "star-smalldata",
    icon: <Database size={20} />,
    label: "Star: Small–Medium Data",
    color: "#0ea5e9",
    bg: "#f0f9ff",
    schema: "Star Schema",
    title: "Small to Medium Datasets Where Speed Matters",
    body: `Choose star schema when your dataset is small to medium in size, when storage is not a major concern, and when the business needs speed more than perfect normalization.`,
    detail: `A sales dashboard for management should usually be built on a star schema because users need quick answers, not complex data relationships. The slightly higher storage cost is worth the performance gain and developer simplicity.`,
    example: `A retail chain's monthly sales dashboard: one Fact_Sales table connected to Dim_Product, Dim_Store, Dim_Customer, Dim_Date — all in one hop.`,
  },
  {
    id: "snowflake-hierarchy",
    icon: <GitBranch size={20} />,
    label: "Snowflake: Hierarchies",
    color: "#7c3aed",
    bg: "#ede9fe",
    schema: "Snowflake Schema",
    title: "Complex Hierarchies & Normalization",
    body: `Use a snowflake schema when your data has complex hierarchies and when consistency is more important than query simplicity. Geography hierarchies (Country → State → City) and product classification hierarchies (Category → Sub-category → Brand) are natural fits.`,
    detail: `In a snowflake schema, the Store table connects to a Region table, which connects to a Country table. Each level is stored once and updated in one place. This is critical in enterprise systems where reference data is shared across many teams and must remain consistent.`,
    example: `Store → Region → Country: update a region name once in the Region table and all stores automatically reflect the change.`,
  },
  {
    id: "snowflake-enterprise",
    icon: <Server size={20} />,
    label: "Snowflake: Enterprise",
    color: "#6366f1",
    bg: "#e0e7ff",
    schema: "Snowflake Schema",
    title: "Large Enterprise Warehouses With Frequent Updates",
    body: `Snowflake schema is also useful when storage efficiency matters or when reference data changes frequently. If a region name, product category, or manufacturer name changes often, a normalized structure makes updates easier and safer.`,
    detail: `For example, if your company acquires a new brand and needs to reclassify thousands of products into new categories, a snowflake schema allows you to update the Category or Brand table once. In a star schema, you would need to update potentially thousands of rows in the product dimension table.`,
    example: `Product rebrand: update Dim_Brand table once → all products using that brand_key automatically reflect the new brand name.`,
  },
];

/* ─── key differences table ──────────────────────── */
const KEY_DIFFERENCES = [
  { feature: "Design", star: "Denormalized dimension tables", snowflake: "Normalized into sub-dimension tables" },
  { feature: "Query Speed", star: "Faster — fewer joins required", snowflake: "Can be slower — more joins required" },
  { feature: "Storage Usage", star: "Higher — some data is repeated", snowflake: "Lower — duplicate data is reduced" },
  { feature: "Complexity", star: "Simple and easy to understand", snowflake: "More complex and technical" },
  { feature: "Data Redundancy", star: "Higher", snowflake: "Lower" },
  { feature: "Data Integrity", star: "Moderate", snowflake: "Stronger — reference values centrally maintained" },
  { feature: "BI Tool Usage", star: "Very suitable for Power BI, Tableau, dashboards", snowflake: "Better for backend warehouse structure and complex relationships" },
  { feature: "Best For", star: "Reporting, dashboards, self-service analytics", snowflake: "Large warehouses, governed data models, hierarchical data" },
];

/* ─── courses ────────────────────────────────────── */
const COURSES = [
  { name: "Data Engineering Course", link: "/courses/data-engineering-course" },
  { name: "Data Science & ML", link: "/courses/data-science-and-ml-course" },
  { name: "Data Analytics", link: "/courses/data-analytics-course" },
  { name: "Data Analytics & Gen AI", link: "/courses/data-analytics-and-generative-ai-course" },
  { name: "Generative AI", link: "/courses/generative-ai-course" },
  { name: "AI & Machine Learning", link: "/courses/ai-machine-learning-course" },
];

/* ─── SQL code ───────────────────────────────────── */
const STAR_SQL_TABLES = `-- Star Schema Example

CREATE TABLE Dim_Product (
    Product_Key INT PRIMARY KEY,
    Product_Name VARCHAR(100),
    Category_Name VARCHAR(100),
    Brand_Name VARCHAR(100)
);

CREATE TABLE Dim_Customer (
    Customer_Key INT PRIMARY KEY,
    Customer_Name VARCHAR(100),
    City VARCHAR(100),
    State VARCHAR(100),
    Country VARCHAR(100)
);

CREATE TABLE Dim_Date (
    Date_Key INT PRIMARY KEY,
    Full_Date DATE,
    Month_Name VARCHAR(20),
    Quarter_Name VARCHAR(20),
    Year_Number INT
);

CREATE TABLE Fact_Sales (
    Sales_ID INT PRIMARY KEY,
    Product_Key INT,
    Customer_Key INT,
    Date_Key INT,
    Sales_Amount DECIMAL(12,2),
    Quantity_Sold INT,
    FOREIGN KEY (Product_Key) REFERENCES Dim_Product(Product_Key),
    FOREIGN KEY (Customer_Key) REFERENCES Dim_Customer(Customer_Key),
    FOREIGN KEY (Date_Key) REFERENCES Dim_Date(Date_Key)
);`;

const STAR_SQL_QUERY = `SELECT
    c.City,
    SUM(f.Sales_Amount) AS Total_Sales
FROM Fact_Sales f
JOIN Dim_Customer c
    ON f.Customer_Key = c.Customer_Key
GROUP BY c.City;`;

const SNOWFLAKE_SQL_TABLES = `-- Snowflake Schema Example

CREATE TABLE Dim_Category (
    Category_Key INT PRIMARY KEY,
    Category_Name VARCHAR(100)
);

CREATE TABLE Dim_Brand (
    Brand_Key INT PRIMARY KEY,
    Brand_Name VARCHAR(100)
);

CREATE TABLE Dim_Product (
    Product_Key INT PRIMARY KEY,
    Product_Name VARCHAR(100),
    Category_Key INT,
    Brand_Key INT,
    FOREIGN KEY (Category_Key) REFERENCES Dim_Category(Category_Key),
    FOREIGN KEY (Brand_Key) REFERENCES Dim_Brand(Brand_Key)
);

CREATE TABLE Dim_City (
    City_Key INT PRIMARY KEY,
    City_Name VARCHAR(100),
    State_Key INT
);

CREATE TABLE Dim_State (
    State_Key INT PRIMARY KEY,
    State_Name VARCHAR(100),
    Country_Key INT
);

CREATE TABLE Dim_Country (
    Country_Key INT PRIMARY KEY,
    Country_Name VARCHAR(100)
);

CREATE TABLE Dim_Customer (
    Customer_Key INT PRIMARY KEY,
    Customer_Name VARCHAR(100),
    City_Key INT,
    FOREIGN KEY (City_Key) REFERENCES Dim_City(City_Key)
);

CREATE TABLE Fact_Sales (
    Sales_ID INT PRIMARY KEY,
    Product_Key INT,
    Customer_Key INT,
    Sales_Amount DECIMAL(12,2),
    Quantity_Sold INT,
    FOREIGN KEY (Product_Key) REFERENCES Dim_Product(Product_Key),
    FOREIGN KEY (Customer_Key) REFERENCES Dim_Customer(Customer_Key)
);`;

const SNOWFLAKE_SQL_QUERY = `SELECT
    cat.Category_Name,
    SUM(f.Sales_Amount) AS Total_Sales
FROM Fact_Sales f
JOIN Dim_Product p
    ON f.Product_Key = p.Product_Key
JOIN Dim_Category cat
    ON p.Category_Key = cat.Category_Key
GROUP BY cat.Category_Name;`;

/* ─── sub-components ─────────────────────────────── */

const CodeBlock = ({ code, title }: { code: string; title?: string }) => (
  <div className="rounded-xl overflow-hidden border border-gray-800 shadow-lg">
    <div className="bg-[#1e293b] px-4 py-2.5 flex items-center gap-2">
      <div className="flex gap-1.5">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-[#009fda]" />
      </div>
      <span className="text-white/70 text-xs font-semibold ml-2">{title || "SQL"}</span>
    </div>
    <pre className="bg-[#0f172a] p-4 overflow-x-auto text-[12px] sm:text-[13px] leading-relaxed">
      <code className="text-green-300 font-mono whitespace-pre">{code}</code>
    </pre>
  </div>
);

const WhenToUseTab = ({ item, active, onClick }: {
  item: typeof WHEN_TO_USE[0];
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 w-full text-left"
    style={{
      backgroundColor: active ? item.color : "transparent",
      color: active ? "#fff" : "#6b7280",
      border: `1.5px solid ${active ? item.color : "#e5e7eb"}`,
    }}
  >
    <span
      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
      style={{ backgroundColor: active ? "rgba(255,255,255,0.2)" : item.bg, color: item.color }}
    >
      {item.icon}
    </span>
    {item.label}
  </button>
);

/* ─── Star Schema Diagram ────────────────────────── */
const StarSchemaDiagram = () => (
  <div className="rounded-xl bg-white border border-gray-200 shadow-md p-4 sm:p-6">
    <p className="text-[10px] font-black uppercase tracking-widest text-[#009fda] mb-4 text-center">Star Schema — Cleaner Schema</p>
    <div className="relative flex flex-col items-center gap-2">
      {/* Date - top */}
      <div className="bg-[#f7af34] text-white rounded-xl px-4 py-2 text-[11px] font-bold text-center shadow-sm w-36">
        <div className="text-xs font-black mb-1">Date</div>
        <div className="text-[9px] font-normal opacity-90 leading-tight">Date_ID · Date · Month · Year</div>
      </div>
      <div className="w-px h-3 bg-gray-300" />
      {/* Middle row */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Product - left */}
        <div className="bg-[#f7af34] text-white rounded-xl px-3 py-2 text-[10px] font-bold text-center shadow-sm w-28">
          <div className="text-xs font-black mb-1">Product</div>
          <div className="text-[9px] font-normal opacity-90 leading-tight">Product_ID<br />Product_Name<br />Category · Price</div>
        </div>
        <div className="w-4 h-px bg-gray-300 flex-shrink-0" />
        {/* Center Fact table */}
        <div className="bg-[#f7af34] text-white rounded-xl px-4 py-3 text-[11px] font-bold text-center shadow-lg border-2 border-amber-400 w-40">
          <div className="text-sm font-black mb-1">Sales</div>
          <div className="text-[9px] font-normal opacity-90 leading-tight space-y-0.5">
            <div>🔑 Product_ID</div>
            <div>Date_ID</div>
            <div>🔑 Sales_ID</div>
            <div>Customer_ID</div>
            <div>Units_Sold</div>
            <div>Sales_Amount</div>
            <div>Salesperson_ID</div>
            <div>Store_ID</div>
          </div>
        </div>
        <div className="w-4 h-px bg-gray-300 flex-shrink-0" />
        {/* Customer - right */}
        <div className="bg-[#f7af34] text-white rounded-xl px-3 py-2 text-[10px] font-bold text-center shadow-sm w-28">
          <div className="text-xs font-black mb-1">Customer</div>
          <div className="text-[9px] font-normal opacity-90 leading-tight">Customer_ID<br />Customer_Name<br />Location</div>
        </div>
      </div>
      <div className="w-px h-3 bg-gray-300" />
      {/* Bottom row */}
      <div className="flex items-center gap-6 sm:gap-12">
        <div className="bg-[#f7af34] text-white rounded-xl px-3 py-2 text-[10px] font-bold text-center shadow-sm w-28">
          <div className="text-xs font-black mb-1">Store</div>
          <div className="text-[9px] font-normal opacity-90 leading-tight">Store_ID<br />Store_Name<br />Region</div>
        </div>
        <div className="bg-[#f7af34] text-white rounded-xl px-3 py-2 text-[10px] font-bold text-center shadow-sm w-28">
          <div className="text-xs font-black mb-1">Sales_Person</div>
          <div className="text-[9px] font-normal opacity-90 leading-tight">Salesperson_ID<br />Salesperson_Name<br />Level</div>
        </div>
      </div>
    </div>
  </div>
);

/* ─── Snowflake Schema Diagram ───────────────────── */
const SnowflakeSchemaDiagram = () => (
  <div className="rounded-xl bg-white border border-gray-200 shadow-md p-4 sm:p-6">
    <p className="text-[10px] font-black uppercase tracking-widest text-[#009fda] mb-4 text-center">Snowflake Schema — Normalized Model</p>
    <div className="space-y-2">
      {/* Top: Date */}
      <div className="flex justify-center">
        <div className="bg-[#f7af34] text-white rounded-xl px-4 py-2 text-[11px] font-bold text-center shadow-sm w-32">
          <div className="text-xs font-black mb-0.5">Date</div>
          <div className="text-[9px] font-normal opacity-90">Date_ID · Month · Year</div>
        </div>
      </div>
      <div className="flex justify-center"><div className="w-px h-2 bg-gray-300" /></div>
      {/* Middle row: Manufacturer/Category | Product | Sales | Customer | Transaction */}
      <div className="flex items-start justify-center gap-2 flex-wrap">
        {/* Left side sub-tables */}
        <div className="flex flex-col items-center gap-1">
          <div className="bg-[#f7af34] text-white rounded-xl px-3 py-2 text-[10px] font-bold text-center shadow-sm w-28">
            <div className="text-xs font-black mb-0.5">Manufacturer</div>
            <div className="text-[9px] font-normal opacity-90 leading-tight">Product_ID<br />Manufacturer_ID<br />Manufacturer_Name</div>
          </div>
          <div className="w-px h-2 bg-gray-300" />
          <div className="bg-[#f7af34] text-white rounded-xl px-3 py-2 text-[10px] font-bold text-center shadow-sm w-28">
            <div className="text-xs font-black mb-0.5">Category</div>
            <div className="text-[9px] font-normal opacity-90 leading-tight">Category_ID<br />Category_Name</div>
          </div>
        </div>
        <div className="flex items-center mt-8"><div className="w-3 h-px bg-gray-300" /></div>
        {/* Product */}
        <div className="bg-[#f7af34] text-white rounded-xl px-3 py-2 text-[10px] font-bold text-center shadow-sm w-28 mt-4">
          <div className="text-xs font-black mb-0.5">Product</div>
          <div className="text-[9px] font-normal opacity-90 leading-tight">Product_ID<br />Product_Name<br />Category_ID</div>
        </div>
        <div className="flex items-center mt-8"><div className="w-3 h-px bg-gray-300" /></div>
        {/* Center Sales */}
        <div className="bg-[#f7af34] text-white rounded-xl px-4 py-3 text-[11px] font-bold text-center shadow-lg border-2 border-amber-400 w-36">
          <div className="text-sm font-black mb-0.5">Sales</div>
          <div className="text-[9px] font-normal opacity-90 leading-tight space-y-0.5">
            <div>🔑 Sales_ID</div>
            <div>Date_ID</div>
            <div>Product_ID</div>
            <div>Customer_ID</div>
            <div>Store_ID</div>
            <div>Sales_Amount</div>
            <div>Units_Sold</div>
          </div>
        </div>
        <div className="flex items-center mt-8"><div className="w-3 h-px bg-gray-300" /></div>
        {/* Customer */}
        <div className="bg-[#f7af34] text-white rounded-xl px-3 py-2 text-[10px] font-bold text-center shadow-sm w-28 mt-4">
          <div className="text-xs font-black mb-0.5">Customer</div>
          <div className="text-[9px] font-normal opacity-90 leading-tight">Customer_ID<br />Customer_Name<br />Location_ID</div>
        </div>
        <div className="flex items-center mt-8"><div className="w-3 h-px bg-gray-300" /></div>
        {/* Right side */}
        <div className="flex flex-col items-center gap-1">
          <div className="bg-[#f7af34] text-white rounded-xl px-3 py-2 text-[10px] font-bold text-center shadow-sm w-28">
            <div className="text-xs font-black mb-0.5">Transaction</div>
            <div className="text-[9px] font-normal opacity-90 leading-tight">Customer_ID<br />Transaction_ID<br />Transaction_Amount<br />Payment_Method</div>
          </div>
          <div className="w-px h-2 bg-gray-300" />
          <div className="bg-[#f7af34] text-white rounded-xl px-3 py-2 text-[10px] font-bold text-center shadow-sm w-28">
            <div className="text-xs font-black mb-0.5">Location</div>
            <div className="text-[9px] font-normal opacity-90 leading-tight">Location_ID<br />Country<br />State · City</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-8 mt-1">
        <div className="w-px h-2 bg-gray-300" />
      </div>
      {/* Bottom: Store → Region */}
      <div className="flex justify-center gap-6">
        <div className="flex flex-col items-center gap-1">
          <div className="bg-[#f7af34] text-white rounded-xl px-3 py-2 text-[10px] font-bold text-center shadow-sm w-28">
            <div className="text-xs font-black mb-0.5">Region</div>
            <div className="text-[9px] font-normal opacity-90 leading-tight">Region_ID<br />Region_Name</div>
          </div>
          <div className="w-px h-2 bg-gray-300" />
          <div className="bg-[#f7af34] text-white rounded-xl px-3 py-2 text-[10px] font-bold text-center shadow-sm w-28">
            <div className="text-xs font-black mb-0.5">Store</div>
            <div className="text-[9px] font-normal opacity-90 leading-tight">Store_ID<br />Store_Name<br />Region_ID</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ─── main page ──────────────────────────────────── */

export default function StarSchemaVsSnowflakePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSection, setActiveSection] = useState("introduction");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showReviewPrompt, setShowReviewPrompt] = useState(false);
  const [reviewPromptShown, setReviewPromptShown] = useState(false);
  const [openDiff, setOpenDiff] = useState<number | null>(null);

  const active = WHEN_TO_USE[activeTab];

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      if (documentHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrolled / documentHeight) * 100));
        setScrollProgress(progress);
        if (progress >= 95 && !reviewPromptShown) {
          setShowReviewPrompt(true);
          setReviewPromptShown(true);
        }
      }
      for (const sec of [...ROADMAP_SECTIONS].reverse()) {
        const el = document.getElementById(sec.id);
        if (el && el.getBoundingClientRect().top <= 160) {
          setActiveSection(sec.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [reviewPromptShown]);

  const openReviewPage = () => {
    window.open(
      "https://www.google.com/search?q=ivy+professional+school&rlz=1C1ONGR_enIN1115IN1115&oq=&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7Mg0IARAuGK8BGMcBGIAEMgcIAhAAGIAEMhAIAxAuGIMBGLEDGIAEGOUEMgcIBBAAGIAEMgYIBRBFGDwyBggGEEUYQTIGCAcQRRg80gEIMzA0N2owajeoAgiwAgHxBRMMy4WLy7978QUTMMy4WLy_ew&sourceid=chrome&ie=UTF-8#lrd=0x3a02771797fccdc1:0xca64261fceaf2af6,3,,,",
      "_blank"
    );
    setShowReviewPrompt(false);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: "smooth" }); setActiveSection(id); }
  };

  return (
    <div className="min-h-screen bg-[#f0fdf9]">

      {/* ── Scroll Progress ───────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
        <div className="h-full transition-all duration-300" style={{ width: `${scrollProgress}%`, background: "linear-gradient(90deg, #009fda, #f7af34)" }} />
      </div>

      {/* ── Review Prompt ─────────────────────── */}
      {showReviewPrompt && (
        <div className="fixed top-16 sm:top-20 right-2 sm:right-4 md:right-6 z-50 max-w-xs sm:max-w-sm">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-4 sm:p-6 border border-blue-100">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="h-8 sm:h-10 w-8 sm:w-10 rounded-full flex items-center justify-center bg-gradient-to-br from-[#009fda] to-[#013a81]">
                <Star className="h-4 sm:h-6 w-4 sm:w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">Enjoying this guide?</h3>
                <p className="text-xs sm:text-sm text-gray-600">Share your feedback!</p>
              </div>
            </div>
            <p className="text-gray-700 mb-3 sm:mb-4 text-xs sm:text-sm">
              You&apos;ve completed {Math.round(scrollProgress)}% of this guide. Help others by sharing your experience with Ivy Professional School.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button onClick={openReviewPage} className="flex-1 text-white font-bold py-2 sm:py-3 rounded-lg sm:rounded-xl hover:opacity-90 transition-opacity text-sm bg-gradient-to-r from-[#009fda] to-[#013a81]">
                Write a Review
              </button>
              <button onClick={() => setShowReviewPrompt(false)} className="px-3 sm:px-4 py-2 text-gray-600 hover:text-gray-900 font-medium text-sm">
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Breadcrumb ────────────────────────── */}
      <div className="bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-xs text-gray-500 flex-wrap">
          <Link href="/aihelpcenter" className="hover:text-[#013a81] transition-colors">AI Help Center</Link>
          <ChevronRight size={12} />
          <Link href="/aihelpcenter/data-engineering" className="hover:text-[#013a81] transition-colors">Data Engineering</Link>
          <ChevronRight size={12} />
          <span className="text-gray-800 font-medium">Star Schema vs Snowflake Schema</span>
        </div>
      </div>

      {/* ── Hero ─────────────────────────────── */}
      <div className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="h-1.5 w-full bg-gradient-to-r from-[#009fda] via-[#f7af34] to-[#013a81]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-bold text-[#013a81] uppercase tracking-wider mb-5">
              <Database size={12} className="text-[#009fda]" />
              Data Engineering · Data Warehouse Design
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
              <span className="bg-gradient-to-r from-[#009fda] to-[#013a81] bg-clip-text text-transparent">
                Star Schema
              </span>{" "}
              vs{" "}
              <span className="bg-gradient-to-r from-[#f7af34] to-[#013a81] bg-clip-text text-transparent">
                Snowflake Schema
              </span>
              : Differences, Use Cases, SQL Examples &amp; How to Choose
            </h1>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-7">
              The schema you choose decides whether your queries run in seconds or minutes, whether dashboards feel smooth or frustrating. This guide covers everything you need to make the right call.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <Image src={ivy} alt="Ivy Pro School" width={16} height={16} className="rounded-full" />
                Ivy Pro School
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <Clock size={11} />
                ~15 minutes read
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <BookOpen size={11} />
                May 5, 2026
              </div>
            </div>
          </div>

          {/* right — schema visual */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white">
              <div className="bg-[#013a81] px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-[#009fda]" />
                </div>
                <span className="text-white text-xs font-semibold ml-2">Schema Design — At a Glance</span>
              </div>
              <div className="p-5 space-y-3">
                {/* Star Schema mini */}
                <div className="rounded-xl bg-blue-50 border border-blue-100 p-4">
                  <p className="text-[10px] font-bold text-[#009fda] uppercase tracking-widest mb-2">Star Schema — Direct Connections</p>
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    {["Dim_Product", "Dim_Customer", "Dim_Date", "Dim_Store"].map((t, i) => (
                      <div key={i} className="flex items-center gap-1">
                        <div className="bg-[#f7af34] text-white text-[9px] font-bold px-2 py-1 rounded">{t}</div>
                        <ArrowRight size={10} className="text-[#009fda]" />
                      </div>
                    ))}
                    <div className="bg-[#009fda] text-white text-[9px] font-bold px-3 py-1.5 rounded-lg border-2 border-blue-300">Fact_Sales</div>
                  </div>
                </div>
                {/* Snowflake mini */}
                <div className="rounded-xl bg-amber-50 border border-amber-100 p-4">
                  <p className="text-[10px] font-bold text-amber-700 uppercase tracking-widest mb-2">Snowflake Schema — Normalized</p>
                  <div className="flex items-center justify-center gap-1 text-[9px]">
                    <div className="flex flex-col items-center gap-1">
                      <div className="bg-[#f7af34] text-white font-bold px-2 py-1 rounded">Category</div>
                      <div className="w-px h-2 bg-gray-400" />
                      <div className="bg-[#f7af34] text-white font-bold px-2 py-1 rounded">Product</div>
                    </div>
                    <ArrowRight size={10} className="text-gray-400 mx-1" />
                    <div className="bg-[#009fda] text-white font-bold px-2 py-2 rounded-lg border-2 border-blue-300">Fact_Sales</div>
                    <ArrowRight size={10} className="text-gray-400 mx-1 rotate-180" />
                    <div className="flex flex-col items-center gap-1">
                      <div className="bg-[#f7af34] text-white font-bold px-2 py-1 rounded">City</div>
                      <div className="w-px h-2 bg-gray-400" />
                      <div className="bg-[#f7af34] text-white font-bold px-2 py-1 rounded">Customer</div>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#009fda] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Star size={12} className="text-white" />
                  </div>
                  <p className="text-[10px] text-[#013a81] leading-snug">
                    <strong>Key insight:</strong> Star Schema = simpler, faster queries. Snowflake Schema = cleaner, more consistent data. Modern platforms use both in a layered architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Authority Strip ───────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-0">
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl px-4 sm:px-5 py-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-blue-600 flex-shrink-0" />
            <span className="text-xs font-bold text-blue-900 uppercase tracking-wide">Authored by Ivy Pro School Founders</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <div className="flex items-center gap-2">
              <Image src={PrateekAgarwal} alt="Prateek Agarwal" width={28} height={28} className="rounded-full object-cover flex-shrink-0 border border-blue-200" />
              <div className="flex items-center gap-1">
                <span className="text-xs font-semibold text-gray-900">Prateek Agarwal</span>
                <span className="text-xs text-gray-500"> · 20+ yrs AI/ML Leader</span>
                <a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer" title="View LinkedIn Profile" className="ml-1 text-blue-600 hover:text-blue-800">
                  <LinkedInSVG className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Grid ────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-8 lg:gap-10 lg:grid-cols-4">

          {/* ── LEFT: article ────────────────── */}
          <article className="lg:col-span-3 space-y-6">

            {/* Table of Contents */}
            <div className="rounded-2xl bg-white border border-blue-100 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-[#009fda] to-[#013a81] px-5 py-3 flex items-center gap-2">
                <BookOpen size={14} className="text-white" />
                <span className="text-sm font-bold text-white uppercase tracking-widest">Table of Contents</span>
              </div>
              <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-1">
                {ROADMAP_SECTIONS.map((item, i) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="group flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-blue-50 transition-colors text-left w-full"
                  >
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#013a81] flex items-center justify-center text-[10px] font-bold flex-shrink-0 group-hover:bg-[#009fda] group-hover:text-white transition-colors">
                      {i + 1}
                    </span>
                    <span className="text-sm text-gray-600 group-hover:text-[#013a81] transition-colors font-medium">{item.title}</span>
                    <ArrowRight size={12} className="text-[#009fda] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>

            {/* ── Introduction ──────────────── */}
            <section id="introduction" className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-[#009fda] to-[#f7af34]" />
              <div className="p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#ccfbf1", color: "#0f766e" }}>
                  <Database size={12} /> Overview
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Why Schema Design Decides the Speed of Your Insights
                </h2>
                <p className="text-base sm:text-lg border-l-4 border-[#009fda] pl-4 italic text-gray-700 mb-5">
                  &ldquo;In today&apos;s data-driven world, businesses don&apos;t struggle because they lack data. They struggle because they cannot access insights fast enough.&rdquo;
                </p>
                <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Behind every dashboard, report, or KPI you see, there is a data structure silently working in the background. The way this data is organized decides whether your queries run in seconds or minutes, whether your dashboards feel smooth or frustrating.
                  </p>
                  <p>
                    This is where <strong className="text-gray-900">data warehouse schema design</strong> becomes critical. Two of the most widely used approaches are <strong className="text-gray-900">Star Schema</strong> and <strong className="text-gray-900">Snowflake Schema</strong>. While both serve the same purpose, they are built very differently and impact performance, storage, and usability in completely different ways.
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-blue-50 border border-blue-100 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Star size={15} className="text-[#009fda]" />
                      <span className="text-xs font-bold text-[#013a81] uppercase tracking-wide">Star Schema</span>
                    </div>
                    <p className="text-sm text-[#013a81]">Denormalized design. Fact table at center, dimension tables connected directly. Fewer joins, faster queries, BI-friendly.</p>
                  </div>
                  <div className="rounded-xl bg-amber-50 border border-amber-100 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Layers size={15} className="text-amber-700" />
                      <span className="text-xs font-bold text-amber-700 uppercase tracking-wide">Snowflake Schema</span>
                    </div>
                    <p className="text-sm text-amber-800">Normalized design. Dimension tables split into sub-tables. Less storage, better integrity, handles complex hierarchies.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Star Schema ───────────────── */}
            <section id="star-schema" className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-[#009fda] to-[#009fda]" />
              <div className="p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#dbeafe", color: "#1d4ed8" }}>
                  <Star size={12} /> Star Schema
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  What is a Star Schema?
                </h2>
                <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  <p>
                    A star schema is one of the most commonly used data modeling structures in data warehousing. It is designed to make reporting, dashboarding, and business analysis <strong className="text-gray-900">faster and easier</strong>.
                  </p>
                  <p>
                    In a star schema, there is one central table called the <strong className="text-gray-900">fact table</strong>. This table stores measurable business values such as sales amount, quantity sold, profit, revenue, discount, or transaction count. Around the fact table, there are multiple <strong className="text-gray-900">dimension tables</strong> that describe the facts — product details, customer details, region, date, channel, employee, or store.
                  </p>
                  <p>
                    The structure looks like a star because the fact table sits in the center and all dimension tables connect directly to it. For example, in a retail business, the fact table may store sales transactions while the dimension tables store product, customer, date, and store details.
                  </p>
                </div>

                {/* Star Schema Diagram */}
                <StarSchemaDiagram />

                <div className="mt-6 space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Key Features of Star Schema</h3>
                  <div className="space-y-3">
                    {[
                      { icon: <Zap size={16} />, color: "#009fda", title: "Simplicity", desc: "All dimension tables connect directly to the fact table, so queries usually require fewer joins. Easier for analysts, BI developers, and non-technical users." },
                      { icon: <Database size={16} />, color: "#6366f1", title: "Denormalized", desc: "Related descriptive information is stored together in the same dimension table. For example, a product dimension may contain product name, category, brand, and manufacturer in one table." },
                      { icon: <BarChart3 size={16} />, color: "#f59e0b", title: "BI Friendliness", desc: "Power BI, Tableau, Looker, and Excel-based models perform better when the data model is simple, clean, and easy to navigate." },
                      { icon: <AlertCircle size={16} />, color: "#ef4444", title: "Trade-off: Storage", desc: "Some information may be repeated multiple times. Category name stored across thousands of rows increases storage and creates maintenance challenges." },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4 hover:border-blue-200 hover:bg-blue-50/30 transition-all">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${item.color}18`, color: item.color }}>
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <p className="text-sm font-semibold text-[#013a81] mb-1">Advantages of Star Schema</p>
                  <ul className="space-y-1.5">
                    {[
                      "Fast query performance — fewer joins reduce complexity and improve dashboard response time",
                      "Easy to understand — reflects how business users think about business questions",
                      "BI-friendly — works very well with Power BI, Tableau; filters flow predictably",
                    ].map((t, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#013a81]">
                        <CheckCircle2 size={13} className="text-[#009fda] flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* ── Snowflake Schema ──────────── */}
            <section id="snowflake-schema" className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-[#f7af34] to-[#013a81]" />
              <div className="p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#fef3c7", color: "#b45309" }}>
                  <Layers size={12} /> Snowflake Schema
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  What is a Snowflake Schema?
                </h2>
                <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  <p>
                    A snowflake schema is another data warehouse design where the dimension tables are <strong className="text-gray-900">normalized into smaller related tables</strong>. Instead of keeping all descriptive information in one large dimension table, the snowflake schema splits it into multiple connected tables.
                  </p>
                  <p>
                    For example, in a star schema the product table may contain product name, category name, and manufacturer name in the same table. In a snowflake schema, the product table may only store product details and keys — while category and manufacturer details are stored in separate tables.
                  </p>
                  <p>
                    This creates a structure that <strong className="text-gray-900">looks like a snowflake</strong> because dimension tables branch out into sub-dimension tables.
                  </p>
                </div>

                {/* Snowflake Schema Diagram */}
                <SnowflakeSchemaDiagram />

                <div className="mt-6 space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Key Features of Snowflake Schema</h3>
                  <div className="space-y-3">
                    {[
                      { icon: <Database size={16} />, color: "#f59e0b", title: "Normalized Design", desc: "Reduces data duplication by storing repeated information only once. Instead of repeating 'Electronics' for thousands of products, it is stored once in a category table." },
                      { icon: <CheckCircle2 size={16} />, color: "#10b981", title: "Better Data Consistency", desc: "If reference data changes, the update happens in one table. This reduces the risk of inconsistent values across the warehouse." },
                      { icon: <GitBranch size={16} />, color: "#6366f1", title: "Handles Complex Hierarchies", desc: "Useful when dimensions have multiple levels: country → state → city → area, or product category → sub-category → brand → manufacturer." },
                      { icon: <AlertCircle size={16} />, color: "#ef4444", title: "Trade-off: Query Complexity", desc: "Since data is spread across more tables, queries need more joins. This can make the model harder for business users to understand and may slow down some reporting systems." },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4 hover:border-amber-200 hover:bg-amber-50/30 transition-all">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${item.color}18`, color: item.color }}>
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-100">
                  <p className="text-sm font-semibold text-amber-800 mb-1">Advantages of Snowflake Schema</p>
                  <ul className="space-y-1.5">
                    {[
                      "Reduced data redundancy — reference values stored exactly once",
                      "Better data consistency — one update propagates everywhere automatically",
                      "Better handling of complex hierarchies — geography, products, org structure",
                    ].map((t, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-amber-800">
                        <CheckCircle2 size={13} className="text-amber-600 flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* ── Key Differences ───────────── */}
            <section id="key-differences" className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-[#013a81] to-[#009fda]" />
              <div className="p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#ede9fe", color: "#7c3aed" }}>
                  <Table size={12} /> Key Differences
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Star Schema vs Snowflake Schema: Key Differences
                </h2>
                <p className="text-gray-500 text-sm sm:text-base mb-6">
                  A feature-by-feature comparison to help you understand the trade-offs before choosing a design.
                </p>

                {/* Desktop table */}
                <div className="hidden sm:block overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#013a81]">
                        <th className="text-left px-4 py-3 text-white font-bold text-xs uppercase tracking-wider w-1/4">Feature</th>
                        <th className="text-left px-4 py-3 text-white font-bold text-xs uppercase tracking-wider w-[37.5%]">
                          <span className="flex items-center gap-1.5"><Star size={12} className="text-[#f7af34]" /> Star Schema</span>
                        </th>
                        <th className="text-left px-4 py-3 text-white font-bold text-xs uppercase tracking-wider w-[37.5%]">
                          <span className="flex items-center gap-1.5"><Layers size={12} className="text-[#f7af34]" /> Snowflake Schema</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {KEY_DIFFERENCES.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="px-4 py-3 font-semibold text-gray-900 text-xs border-b border-gray-100">{row.feature}</td>
                          <td className="px-4 py-3 text-gray-600 text-xs border-b border-gray-100">
                            <span className="flex items-start gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#009fda] flex-shrink-0 mt-1.5" />
                              {row.star}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-gray-600 text-xs border-b border-gray-100">
                            <span className="flex items-start gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#f7af34] flex-shrink-0 mt-1.5" />
                              {row.snowflake}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile accordion */}
                <div className="sm:hidden space-y-2">
                  {KEY_DIFFERENCES.map((row, i) => (
                    <div key={i} className="rounded-xl border border-gray-200 overflow-hidden">
                      <button
                        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 text-left"
                        onClick={() => setOpenDiff(openDiff === i ? null : i)}
                      >
                        <span className="text-sm font-bold text-gray-900">{row.feature}</span>
                        <ChevronDown size={16} className="text-gray-400 transition-transform" style={{ transform: openDiff === i ? "rotate(180deg)" : "" }} />
                      </button>
                      {openDiff === i && (
                        <div className="px-4 py-3 space-y-2">
                          <div className="rounded-lg bg-blue-50 p-3">
                            <p className="text-[10px] font-bold text-[#009fda] uppercase tracking-wide mb-1 flex items-center gap-1"><Star size={10} /> Star Schema</p>
                            <p className="text-xs text-gray-700">{row.star}</p>
                          </div>
                          <div className="rounded-lg bg-amber-50 p-3">
                            <p className="text-[10px] font-bold text-amber-600 uppercase tracking-wide mb-1 flex items-center gap-1"><Layers size={10} /> Snowflake Schema</p>
                            <p className="text-xs text-gray-700">{row.snowflake}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── SQL Examples ──────────────── */}
            <section id="sql-examples" className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-[#009fda] to-[#f7af34]" />
              <div className="p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#d1fae5", color: "#065f46" }}>
                  <Database size={12} /> SQL Examples
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  SQL Examples: Star Schema vs Snowflake Schema
                </h2>
                <p className="text-gray-500 text-sm sm:text-base mb-7">
                  See exactly how the CREATE TABLE statements and queries differ between the two approaches.
                </p>

                {/* Star Schema SQL */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Star size={14} className="text-[#009fda]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">Star Schema SQL</h3>
                  </div>
                  <CodeBlock code={STAR_SQL_TABLES} title="star_schema_tables.sql" />
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 mb-3">A simple reporting query in a star schema. Notice how customer details are available directly — just one join needed:</p>
                    <CodeBlock code={STAR_SQL_QUERY} title="star_schema_query.sql" />
                  </div>
                </div>

                {/* Snowflake Schema SQL */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <Layers size={14} className="text-amber-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">Snowflake Schema SQL</h3>
                  </div>
                  <CodeBlock code={SNOWFLAKE_SQL_TABLES} title="snowflake_schema_tables.sql" />
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 mb-3">The snowflake query requires more joins — notice you need to join Product and then Category to get the category name:</p>
                    <CodeBlock code={SNOWFLAKE_SQL_QUERY} title="snowflake_schema_query.sql" />
                  </div>
                  <div className="mt-4 rounded-xl bg-amber-50 border border-amber-100 p-4 flex items-start gap-3">
                    <AlertCircle size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                      <strong>Query complexity trade-off:</strong> This query is still logical, but it is more complex than the star schema version because category details are stored in a separate table. In large warehouses with many hierarchy levels, the number of joins increases significantly.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ── When to Use ───────────────── */}
            <section id="when-to-use" className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-[#009fda] via-[#f7af34] to-[#013a81]" />
              <div className="p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#fef3c7", color: "#b45309" }}>
                  <Target size={12} /> When to Use Each
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  When to Use Star Schema vs Snowflake Schema
                </h2>
                <p className="text-gray-500 text-sm sm:text-base mb-7">
                  Click each scenario to see the full explanation and example.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                  {/* Tabs */}
                  <div className="flex flex-col gap-2">
                    {WHEN_TO_USE.map((item, i) => (
                      <WhenToUseTab key={item.id} item={item} active={activeTab === i} onClick={() => setActiveTab(i)} />
                    ))}
                  </div>
                  {/* Detail panel */}
                  <div className="lg:col-span-2 rounded-2xl border-2 p-5 sm:p-6 transition-all duration-300" style={{ borderColor: active.color, backgroundColor: active.bg + "40" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full text-white" style={{ backgroundColor: active.color }}>
                        {active.schema}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{active.title}</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">{active.body}</p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{active.detail}</p>
                    <div className="rounded-xl bg-white border p-4" style={{ borderColor: active.color + "40" }}>
                      <p className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: active.color }}>Example</p>
                      <p className="text-xs sm:text-sm text-gray-700 font-medium">{active.example}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Hybrid Approach ───────────── */}
            <section id="hybrid-approach" className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-[#013a81] border border-[#013a81] p-6 sm:p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/70 mb-4">
                  <TrendingUp size={12} className="text-[#f7af34]" /> Best of Both Worlds
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  The Hybrid Approach
                </h2>
                <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto">
                  In modern data platforms, the best answer is often not star schema or snowflake schema. The better answer is a <strong className="text-white">hybrid architecture</strong>.
                </p>
              </div>
              <div className="space-y-3 mb-8">
                <p className="text-white/80 text-sm sm:text-base leading-relaxed text-center max-w-2xl mx-auto">
                  Many organizations maintain a normalized structure in the core warehouse layer and then create star-shaped reporting tables or views for business users. This gives data engineers a clean and governed backend while giving analysts a fast and simple reporting layer.
                </p>
              </div>
              {/* Layered table */}
              <div className="rounded-2xl overflow-hidden border border-white/20">
                <div className="grid grid-cols-3 bg-white/10 px-4 py-3">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/50">Layer</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/50">Recommended Model</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/50">Purpose</p>
                </div>
                {[
                  { layer: "Raw / Bronze Layer", model: "Source-like structure", purpose: "Store incoming data as received", color: "#94a3b8" },
                  { layer: "Clean / Silver Layer", model: "Snowflake-style normalized model", purpose: "Maintain consistency, quality, and governance", color: "#f7af34" },
                  { layer: "Reporting / Gold Layer", model: "Star schema or denormalized views", purpose: "Provide fast dashboards and easy BI consumption", color: "#009fda" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 border-t border-white/10 px-4 py-4 hover:bg-white/5 transition-colors">
                    <div>
                      <div className="w-2 h-2 rounded-full mb-1" style={{ backgroundColor: row.color }} />
                      <p className="text-xs sm:text-sm font-bold text-white">{row.layer}</p>
                    </div>
                    <p className="text-xs sm:text-sm text-white/70 font-medium pr-2">{row.model}</p>
                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{row.purpose}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href="https://ivyproschool.com/courses/data-engineering-course" className="flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 px-4 py-3 hover:bg-white/20 transition-colors group">
                  <Database size={16} className="text-[#f7af34] flex-shrink-0" />
                  <span className="text-xs font-semibold text-white/80 group-hover:text-white flex-1">Data Engineering Course</span>
                  <ArrowUpRight size={12} className="text-white/40 flex-shrink-0" />
                </a>
                <a href="https://ivyproschool.com/courses/data-analytics-course" className="flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 px-4 py-3 hover:bg-white/20 transition-colors group">
                  <BarChart3 size={16} className="text-[#009fda] flex-shrink-0" />
                  <span className="text-xs font-semibold text-white/80 group-hover:text-white flex-1">Data Analytics with Visualization</span>
                  <ArrowUpRight size={12} className="text-white/40 flex-shrink-0" />
                </a>
              </div>
            </section>

            {/* ── Final Recommendation ──────── */}
            <section id="final-recommendation" className="rounded-2xl bg-gradient-to-br from-[#009fda] to-[#013a81] p-6 sm:p-8 text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
                <BookOpen size={12} /> Final Recommendation
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Star Schema or Snowflake Schema — Which Should You Choose?
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-white/85 leading-relaxed mb-7">
                <p>
                  The <strong className="text-white">star schema</strong> is best when your priority is speed, simplicity, and business-friendly reporting. It is the right choice for dashboards, self-service BI, and analytical models where users need quick answers.
                </p>
                <p>
                  The <strong className="text-white">snowflake schema</strong> is best when your priority is data integrity, storage efficiency, and complex hierarchy management. It is more suitable for enterprise-grade warehouse design where consistency matters across systems.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  {[
                    { icon: "⭐", label: "Star Schema", text: "Use for insight delivery — reporting, dashboards, BI tools" },
                    { icon: "❄️", label: "Snowflake Schema", text: "Use for data governance — consistency, hierarchies, enterprise warehouses" },
                    { icon: "🔀", label: "Hybrid Architecture", text: "Use for scalable enterprise analytics — the strongest modern choice" },
                  ].map((item, i) => (
                    <div key={i} className="rounded-xl bg-white/15 border border-white/20 p-4 text-center">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <p className="text-xs font-black uppercase tracking-wider text-white/70 mb-1">{item.label}</p>
                      <p className="text-xs text-white/80 leading-snug">{item.text}</p>
                    </div>
                  ))}
                </div>
                <p className="font-semibold text-white mt-4">
                  In simple words: use star schema for insight delivery, snowflake schema for data governance, and hybrid architecture for scalable enterprise analytics.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/courses/data-engineering-course" className="inline-flex items-center gap-2 rounded-xl bg-white text-[#013a81] font-bold text-sm px-5 py-2.5 hover:bg-blue-50 transition-colors shadow-sm">
                  Data Engineering Course <ArrowUpRight size={14} />
                </Link>
                <a href="https://ivyproschool.com/bootcampregister" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white/20 border border-white/30 text-white font-bold text-sm px-5 py-2.5 hover:bg-white/30 transition-colors">
                  Live Data Engineering Workshop <ArrowUpRight size={14} />
                </a>
              </div>
            </section>

            {/* Back links */}
            <div className="flex flex-wrap gap-3 pb-4">
              <Link href="/aihelpcenter/data-engineering" className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 hover:border-[#009fda] hover:text-[#013a81] transition-all shadow-sm">
                ← Back to Data Engineering
              </Link>
              <Link href="/aihelpcenter" className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 hover:border-[#009fda] hover:text-[#013a81] transition-all shadow-sm">
                ← All Topics
              </Link>
            </div>

          </article>

          {/* ── RIGHT: sidebar ────────────── */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">

              {/* Roadmap */}
              <div className="rounded-2xl bg-white p-4 sm:p-6 shadow-sm ring-1 ring-gray-200">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4 sm:mb-6">Roadmap</h4>
                <div className="flex flex-col gap-3">
                  {ROADMAP_SECTIONS.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollTo(sec.id)}
                      className={`text-left text-xs sm:text-sm font-bold transition-all border-l-4 pl-3 ${
                        activeSection === sec.id
                          ? "text-[#013a81] border-[#009fda]"
                          : "text-gray-400 border-transparent hover:text-gray-600"
                      }`}
                    >
                      {sec.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Authority Box */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-5 rounded-2xl shadow-lg border border-blue-100">
                <div className="text-center mb-4">
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg flex items-center justify-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-blue-600" />
                    Industry Authority
                  </h3>
                  <p className="text-gray-600 text-xs mt-1">These tutorials are authored by Ivy Pro School founders</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-200">
                          <Image src={PrateekAgarwal} alt="Prateek Agarwal" className="w-full h-full object-cover" width={56} height={56} loading="lazy" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1">
                          <Star className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 text-sm truncate">Prateek Agarwal</h4>
                        <p className="text-gray-600 text-xs truncate">Founder, Ivy Pro School</p>
                        <div className="flex items-center gap-1 mt-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#009fda]" />
                          <span className="text-xs text-gray-500">20+ years as AI/ML Leader</span>
                        </div>
                      </div>
                      <a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-blue-50 hover:bg-blue-100 p-2 rounded-lg transition-colors">
                        <LinkedInSVG className="h-5 w-5 text-blue-600" />
                      </a>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-gray-700 text-xs">Worked with 50+ global firms, trained students from IIT KGP, IIM Kolkata, IIT Delhi</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-orange-200">
                          <Image src={eeshani} alt="Eeshani Agrawal" className="w-full h-full object-cover" width={56} height={56} loading="lazy" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-orange-500 rounded-full p-1">
                          <Star className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 text-sm truncate">Eeshani Agrawal</h4>
                        <p className="text-gray-600 text-xs truncate">Co-Founder, Ivy Pro School</p>
                        <div className="flex items-center gap-1 mt-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#009fda]" />
                          <span className="text-xs text-gray-500">20+ years Data/AI Consultant</span>
                        </div>
                      </div>
                      <a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-orange-50 hover:bg-orange-100 p-2 rounded-lg transition-colors">
                        <LinkedInSVG className="h-5 w-5 text-blue-600" />
                      </a>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-gray-700 text-xs">Trained 9,000+ professionals across Top IITs, IIMs, and ISI</p>
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
                      <span>20+ Years Each</span>
                    </div>
                  </div>
                  <p className="text-xs text-center text-gray-500 mt-3 italic">All content reviewed by Ivy&apos;s expert faculty team</p>
                </div>
              </div>

              {/* Advanced Courses */}
              <div className="p-4 sm:p-5 rounded-3xl shadow-2xl text-white" style={{ background: "linear-gradient(135deg, #009fda, #013a81)" }}>
                <div className="text-center mb-5">
                  <h3 className="font-extrabold text-lg sm:text-xl leading-tight">Advanced Courses</h3>
                  <p className="text-blue-100 text-[11px] opacity-70 mt-1">Fast-track your career with Ivy.</p>
                </div>
                <div className="flex flex-col gap-2">
                  {COURSES.map((course, i) => (
                    <a key={i} href={course.link} className="group flex items-center justify-between w-full p-2 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-8 flex-shrink-0 flex items-center justify-center overflow-hidden">
                          <Image loading="lazy" src={ivy} alt="Ivy Logo" className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <span className="text-[12px] font-bold leading-tight text-white group-hover:text-[#003366] transition-colors duration-300 truncate">
                          {course.name}
                        </span>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0 opacity-40 group-hover:opacity-100 group-hover:text-[#003366] transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
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
}
