import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Linkedin } from "lucide-react";
import PrateekAgarwal from "@/assests/pratilk.webp";
import EeshaniAgarwal from "@/assests/eeshani.webp";
import styles from "./article.module.css";

const title =
  "SQL Window Functions Explained: ROW_NUMBER, RANK, LAG and LEAD with Examples";
const description =
  "A SQL window function calculates a value for each row without collapsing rows. Learn OVER, PARTITION BY, ROW_NUMBER, RANK, LAG, LEAD and running totals with worked examples.";
const canonical =
  "https://ivyproschool.com/aihelpcenter/sql-db/sql-window-functions-explained";

export const metadata: Metadata = {
  title: `${title} | Ivy Professional School`,
  description,
  alternates: { canonical },
  authors: [
    { name: "Prateek Agrawal", url: "https://www.linkedin.com/in/prateekagrawal/" },
    { name: "Eeshani Agrawal", url: "https://www.linkedin.com/in/eeshani-agrawal-b674045/" },
  ],
  openGraph: {
    title,
    description,
    type: "article",
    url: canonical,
    publishedTime: "2026-10-15",
    modifiedTime: "2026-10-15",
    authors: [
      "https://www.linkedin.com/in/prateekagrawal/",
      "https://www.linkedin.com/in/eeshani-agrawal-b674045/",
    ],
  },
};

const roadmap = [
  ["why-do-window-functions-matter", "Why do window functions matter?"],
  ["what-is-a-window-function-in-sql", "What is a window function in SQL?"],
  ["what-sample-data-do-the-examples-use", "What sample data do the examples use?"],
  ["what-do-partition-by-and-order-by-do-inside-over", "What do PARTITION BY and ORDER BY do inside OVER?"],
  ["how-do-row-number-rank-and-dense-rank-differ", "How do ROW_NUMBER, RANK and DENSE_RANK differ?"],
  ["how-do-lag-and-lead-work", "How do LAG and LEAD work?"],
  ["how-do-you-calculate-running-totals-and-moving-averages", "Running totals and moving averages"],
  ["how-do-you-get-the-top-n-rows-per-group", "How do you get the top N rows per group?"],
  ["which-window-function-should-you-use-for-which-task", "Which function should you use?"],
  ["which-databases-support-window-functions", "Which databases support window functions?"],
  ["what-mistakes-do-people-make-with-window-functions", "Common mistakes"],
  ["when-should-you-not-use-a-window-function", "When should you not use one?"],
  ["what-should-you-do-next", "What should you do next?"],
  ["frequently-asked-questions", "Frequently asked questions"],
  ["references", "References"],
] as const;

const faqs = [
  {
    question: "What is the difference between GROUP BY and a window function?",
    answer:
      "GROUP BY collapses many rows into one row per group. A window function keeps every row and adds a calculated value to each one. Use GROUP BY when you want a summary table, and a window function when you need row-level detail next to a group-level number.",
  },
  {
    question: "Can I use a window function in a WHERE clause?",
    answer:
      "No. The database evaluates WHERE before it calculates window functions, so the result does not exist yet. Put the window function in a subquery or a CTE and filter in the outer query. DuckDB, Snowflake and BigQuery also offer a QUALIFY clause for this.",
  },
  {
    question: "Do window functions work in MySQL and SQLite?",
    answer:
      "Yes, in recent versions. MySQL supports window functions from version 8.0, and SQLite from version 3.25. MySQL 5.7 and older do not support them. PostgreSQL, SQL Server and DuckDB also support them.",
  },
  {
    question: "Are window functions slow?",
    answer:
      "They need the database to sort or partition the rows, which costs time on large tables. They are often faster and clearer than the self-joins they replace. Check the query plan and filter rows early if a query on a large table is slow.",
  },
  {
    question: "What does LAG return for the first row?",
    answer:
      "LAG returns NULL for the first row of each partition, because there is no earlier row to read. You can pass a default value as the third argument, such as LAG(revenue, 1, 0), or wrap the result in COALESCE.",
  },
];

const articleHtml = `
  <div class="answer">
    <p><strong>A SQL window function calculates a value for each row using a related set of rows, called a window, without collapsing the rows the way GROUP BY does. You write it with <code>OVER()</code>, using <code>PARTITION BY</code> to form groups and <code>ORDER BY</code> to sequence rows. It is used for ranking, running totals and row comparisons.</strong></p>
  </div>

  <nav class="toc" aria-label="Table of contents">
    <p class="toc-title">In this article</p>
    <ol>
      <li><a href="#why-do-window-functions-matter">Why do window functions matter?</a></li>
      <li><a href="#what-is-a-window-function-in-sql">What is a window function in SQL?</a></li>
      <li><a href="#what-sample-data-do-the-examples-use">What sample data do the examples use?</a></li>
      <li><a href="#what-do-partition-by-and-order-by-do-inside-over">What do PARTITION BY and ORDER BY do inside OVER?</a></li>
      <li><a href="#how-do-row-number-rank-and-dense-rank-differ">How do ROW_NUMBER, RANK and DENSE_RANK differ?</a></li>
      <li><a href="#how-do-lag-and-lead-work">How do LAG and LEAD work?</a></li>
      <li><a href="#how-do-you-calculate-running-totals-and-moving-averages">How do you calculate running totals and moving averages?</a></li>
      <li><a href="#how-do-you-get-the-top-n-rows-per-group">How do you get the top N rows per group?</a></li>
      <li><a href="#which-window-function-should-you-use-for-which-task">Which window function should you use for which task?</a></li>
      <li><a href="#which-databases-support-window-functions">Which databases support window functions?</a></li>
      <li><a href="#what-mistakes-do-people-make-with-window-functions">What mistakes do people make with window functions?</a></li>
      <li><a href="#when-should-you-not-use-a-window-function">When should you not use a window function?</a></li>
      <li><a href="#what-should-you-do-next">What should you do next?</a></li>
      <li><a href="#frequently-asked-questions">Frequently asked questions</a></li>
      <li><a href="#references">References</a></li>
    </ol>
  </nav>

  <h2 id="why-do-window-functions-matter">Why do window functions matter?</h2>
  <p>Analysts keep hitting the same wall. You write a <code>GROUP BY</code> to get the total revenue per region, and the detail rows disappear. You then need the detail and the total side by side, so you reach for a self-join or a messy subquery. Window functions remove that detour.</p>
  <p>They also appear regularly in SQL interviews for analyst and data roles, usually as "find the top 3 per group" or "compare this month with last month". If you can write these four or five patterns without looking them up, you are ahead of most candidates.</p>

  <h2 id="what-is-a-window-function-in-sql">What is a window function in SQL?</h2>
  <p>A window function performs a calculation across a set of rows that are related to the current row, and returns one result for every row in the input. The set of related rows is the "window".</p>
  <p>The general shape is:</p>
  <pre><code>function_name(column) OVER (
    PARTITION BY group_column
    ORDER BY sort_column
    frame_clause
)</code></pre>
  <p>Only <code>OVER</code> is compulsory. The other three parts are optional and are explained in the next section.</p>

  <h3>How is a window function different from GROUP BY?</h3>
  <p><code>GROUP BY</code> returns one row per group. A window function returns every original row and attaches the calculated value to each one. In the sample data used below, <code>GROUP BY region</code> returns 2 rows. <code>SUM(revenue_lakh) OVER (PARTITION BY region)</code> returns all 8 rows, with the regional total (62 for East, 73 for West) repeated on each row.</p>

  <h2 id="what-sample-data-do-the-examples-use">What sample data do the examples use?</h2>
  <p>Every example below uses one small table, <code>monthly_sales</code>, with revenue in INR lakh for two regions over four months. The numbers are made up to keep the arithmetic easy to check. You can run the code in DuckDB, SQLite 3.25 or later, PostgreSQL or MySQL 8.0 or later. If you have not picked a tool yet, read our comparison of <a href="/aihelpcenter/sql-db/duckdb-vs-sqlite">DuckDB vs SQLite</a>.</p>
  <pre><code>CREATE TABLE monthly_sales (
    region        VARCHAR(10),
    month_start   DATE,
    revenue_lakh  INTEGER
);

INSERT INTO monthly_sales VALUES
  ('East', '2026-01-01', 12), ('East', '2026-02-01', 15),
  ('East', '2026-03-01', 15), ('East', '2026-04-01', 20),
  ('West', '2026-01-01', 18), ('West', '2026-02-01', 14),
  ('West', '2026-03-01', 22), ('West', '2026-04-01', 19);</code></pre>

  <h2 id="what-do-partition-by-and-order-by-do-inside-over">What do PARTITION BY and ORDER BY do inside OVER?</h2>
  <p><code>PARTITION BY</code> splits the rows into independent groups, and <code>ORDER BY</code> sets the sequence of rows inside each group. The function restarts for every partition.</p>
  <ul>
    <li><code>PARTITION BY region</code> means East and West are calculated separately. If you leave it out, the whole table is one partition.</li>
    <li><code>ORDER BY month_start</code> puts the rows in time order inside each partition. Functions such as <code>LAG</code>, <code>ROW_NUMBER</code> and running totals need it, because "previous" and "running" have no meaning without an order.</li>
    <li>The <strong>frame clause</strong>, for example <code>ROWS BETWEEN 2 PRECEDING AND CURRENT ROW</code>, narrows the window to a sliding set of rows around the current one. You need it for moving averages.</li>
  </ul>

  <figure>
    <div class="partition-diagram">
      <div class="diagram-labels">
        <span class="partition-label">Partitions: East and West</span>
        <span class="frame-label">Frame at East Apr: 2 preceding to current row</span>
      </div>
      <div class="table-scroll">
        <table class="diagram-table">
          <thead><tr><th>Region</th><th>Month</th><th>Revenue (lakh)</th></tr></thead>
          <tbody>
            <tr class="east-row"><td>East</td><td>Jan 2026</td><td>12</td></tr>
            <tr class="east-row frame-row"><td>East</td><td>Feb 2026</td><td>15</td></tr>
            <tr class="east-row frame-row"><td>East</td><td>Mar 2026</td><td>15</td></tr>
            <tr class="east-row frame-row"><td>East</td><td>Apr 2026</td><td>20</td></tr>
            <tr class="west-row"><td>West</td><td>Jan 2026</td><td>18</td></tr>
            <tr class="west-row"><td>West</td><td>Feb 2026</td><td>14</td></tr>
            <tr class="west-row"><td>West</td><td>Mar 2026</td><td>22</td></tr>
            <tr class="west-row"><td>West</td><td>Apr 2026</td><td>19</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <figcaption>Figure 1. Partitions split the table into groups, and a frame selects the rows around the current row.</figcaption>
  </figure>

  <h2 id="how-do-row-number-rank-and-dense-rank-differ">How do ROW_NUMBER, RANK and DENSE_RANK differ?</h2>
  <p>All three number rows inside a partition, and they differ only in how they treat ties. <code>ROW_NUMBER</code> gives every row a unique number, <code>RANK</code> gives tied rows the same number and then skips, and <code>DENSE_RANK</code> gives tied rows the same number without skipping.</p>
  <pre><code>SELECT
    month_start,
    revenue_lakh,
    ROW_NUMBER() OVER (ORDER BY revenue_lakh DESC, month_start) AS row_num,
    RANK()       OVER (ORDER BY revenue_lakh DESC)              AS rnk,
    DENSE_RANK() OVER (ORDER BY revenue_lakh DESC)              AS dense_rnk
FROM monthly_sales
WHERE region = 'East'
ORDER BY revenue_lakh DESC, month_start;</code></pre>
  <p>East had 15 lakh in both February and March, which creates the tie:</p>

  <div class="table-scroll">
    <table>
      <thead><tr><th>Month</th><th>revenue_lakh</th><th>row_num</th><th>rnk</th><th>dense_rnk</th></tr></thead>
      <tbody>
        <tr><td>Apr 2026</td><td>20</td><td>1</td><td>1</td><td>1</td></tr>
        <tr><td>Feb 2026</td><td>15</td><td>2</td><td>2</td><td>2</td></tr>
        <tr><td>Mar 2026</td><td>15</td><td>3</td><td>2</td><td>2</td></tr>
        <tr><td>Jan 2026</td><td>12</td><td>4</td><td>4</td><td>3</td></tr>
      </tbody>
    </table>
  </div>
  <p>Notice that <code>RANK</code> jumps from 2 to 4 after the tie, while <code>DENSE_RANK</code> goes from 2 to 3. Also note the tiebreaker <code>month_start</code> inside <code>ROW_NUMBER</code>. Without it, the database may order the two tied rows differently on different runs.</p>

  <h2 id="how-do-lag-and-lead-work">How do LAG and LEAD work?</h2>
  <p><code>LAG(column, n)</code> returns the value from n rows before the current row, and <code>LEAD(column, n)</code> returns the value from n rows after it. If you leave out n, it defaults to 1. Both return NULL when no such row exists, though you can supply a default as the third argument.</p>
  <p>This is the standard way to calculate a month-on-month change, and it replaces a self-join on the previous month. The query below also adds a running total, which is covered in the next section.</p>
  <pre><code>SELECT
    region,
    month_start,
    revenue_lakh,
    LAG(revenue_lakh) OVER (PARTITION BY region ORDER BY month_start)
        AS prev_month,
    revenue_lakh
      - LAG(revenue_lakh) OVER (PARTITION BY region ORDER BY month_start)
        AS change,
    SUM(revenue_lakh) OVER (PARTITION BY region ORDER BY month_start)
        AS running_total
FROM monthly_sales
ORDER BY region, month_start;</code></pre>

  <div class="table-scroll">
    <table>
      <thead><tr><th>Region</th><th>Month</th><th>revenue_lakh</th><th>prev_month</th><th>change</th><th>running_total</th></tr></thead>
      <tbody>
        <tr><td>East</td><td>Jan 2026</td><td>12</td><td>NULL</td><td>NULL</td><td>12</td></tr>
        <tr><td>East</td><td>Feb 2026</td><td>15</td><td>12</td><td>+3</td><td>27</td></tr>
        <tr><td>East</td><td>Mar 2026</td><td>15</td><td>15</td><td>0</td><td>42</td></tr>
        <tr><td>East</td><td>Apr 2026</td><td>20</td><td>15</td><td>+5</td><td>62</td></tr>
        <tr><td>West</td><td>Jan 2026</td><td>18</td><td>NULL</td><td>NULL</td><td>18</td></tr>
        <tr><td>West</td><td>Feb 2026</td><td>14</td><td>18</td><td>-4</td><td>32</td></tr>
        <tr><td>West</td><td>Mar 2026</td><td>22</td><td>14</td><td>+8</td><td>54</td></tr>
        <tr><td>West</td><td>Apr 2026</td><td>19</td><td>22</td><td>-3</td><td>73</td></tr>
      </tbody>
    </table>
  </div>
  <p>Each region's first row has NULL for <code>prev_month</code>, because <code>PARTITION BY region</code> restarts the window. West's January does not borrow East's April.</p>

  <h2 id="how-do-you-calculate-running-totals-and-moving-averages">How do you calculate running totals and moving averages?</h2>
  <p>For a running total, use <code>SUM(...) OVER (PARTITION BY ... ORDER BY ...)</code>. The <code>running_total</code> column above is exactly that: East reaches 62 lakh and West reaches 73 lakh by April.</p>
  <p>For a moving average, add a frame clause that limits how many rows the function can see.</p>
  <pre><code>SELECT
    region,
    month_start,
    revenue_lakh,
    ROUND(AVG(revenue_lakh) OVER (
        PARTITION BY region
        ORDER BY month_start
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ), 2) AS moving_avg_3m
FROM monthly_sales
ORDER BY region, month_start;</code></pre>
  <p>For East this gives 12.00, 13.50, 14.00 and 16.67. March is (12 + 15 + 15) / 3 = 14.00 and April is (15 + 15 + 20) / 3 = 16.67. For West it gives 18.00, 16.00, 18.00 and 18.33. The first two rows of each region average fewer than three values, because fewer rows exist. Decide whether that is acceptable for your report, or filter those rows out.</p>

  <h2 id="how-do-you-get-the-top-n-rows-per-group">How do you get the top N rows per group?</h2>
  <p>Number the rows with <code>ROW_NUMBER</code> inside each group, then filter on that number in an outer query. You cannot filter on a window function in the same <code>WHERE</code> clause, because the database applies <code>WHERE</code> before it calculates the window.</p>
  <pre><code>WITH ranked AS (
    SELECT
        region,
        month_start,
        revenue_lakh,
        ROW_NUMBER() OVER (
            PARTITION BY region
            ORDER BY revenue_lakh DESC, month_start
        ) AS rn
    FROM monthly_sales
)
SELECT region, month_start, revenue_lakh
FROM ranked
WHERE rn &lt;= 2;</code></pre>
  <p>This returns East's April (20) and February (15), and West's March (22) and April (19). DuckDB, Snowflake and BigQuery also offer a <code>QUALIFY</code> clause that lets you filter on the window function directly. It is not available in PostgreSQL, MySQL or SQLite, so the CTE pattern is the portable one.</p>

  <h2 id="which-window-function-should-you-use-for-which-task">Which window function should you use for which task?</h2>
  <p>Match the task to the function using the table below.</p>
  <div class="table-scroll">
    <table>
      <thead><tr><th>Task</th><th>Function</th><th>Notes</th></tr></thead>
      <tbody>
        <tr><td>Unique row number per group</td><td><code>ROW_NUMBER()</code></td><td>Add a tiebreaker column to ORDER BY.</td></tr>
        <tr><td>Rank, ties share a position, gaps follow</td><td><code>RANK()</code></td><td>1, 2, 2, 4</td></tr>
        <tr><td>Rank, ties share a position, no gaps</td><td><code>DENSE_RANK()</code></td><td>1, 2, 2, 3</td></tr>
        <tr><td>Split rows into n equal buckets</td><td><code>NTILE(n)</code></td><td>Useful for quartiles and deciles.</td></tr>
        <tr><td>Compare with the previous row</td><td><code>LAG()</code></td><td>NULL on the first row unless you give a default.</td></tr>
        <tr><td>Compare with the next row</td><td><code>LEAD()</code></td><td>NULL on the last row unless you give a default.</td></tr>
        <tr><td>First or last value in the window</td><td><code>FIRST_VALUE()</code>, <code>LAST_VALUE()</code></td><td>Check the frame. See the mistakes below.</td></tr>
        <tr><td>Running total</td><td><code>SUM() OVER (... ORDER BY ...)</code></td><td>Default frame runs from the first row to the current row.</td></tr>
        <tr><td>Moving average</td><td><code>AVG() OVER (... ROWS BETWEEN ...)</code></td><td>Frame clause sets the window size.</td></tr>
      </tbody>
    </table>
  </div>

  <h2 id="which-databases-support-window-functions">Which databases support window functions?</h2>
  <p>All major databases support them in current versions, but older installations may not. Check your version before you rely on them.</p>
  <div class="table-scroll">
    <table>
      <thead><tr><th>Database</th><th>Support</th></tr></thead>
      <tbody>
        <tr><td>PostgreSQL</td><td>Version 8.4 and later</td></tr>
        <tr><td>MySQL</td><td>Version 8.0 and later. Not in 5.7.</td></tr>
        <tr><td>SQLite</td><td>Version 3.25 and later</td></tr>
        <tr><td>SQL Server</td><td>Ranking functions from 2005. LAG, LEAD and full frame support from 2012.</td></tr>
        <tr><td>DuckDB</td><td>Supported, including the QUALIFY clause</td></tr>
      </tbody>
    </table>
  </div>

  <h2 id="what-mistakes-do-people-make-with-window-functions">What mistakes do people make with window functions?</h2>
  <ol>
    <li><strong>Filtering with WHERE.</strong> As shown above, wrap the query in a CTE or subquery, then filter.</li>
    <li><strong>Forgetting the tiebreaker.</strong> <code>ROW_NUMBER() OVER (ORDER BY revenue_lakh DESC)</code> is not repeatable when two rows tie. Add a second sort column.</li>
    <li><strong>Misreading LAST_VALUE.</strong> When you add <code>ORDER BY</code> and no frame, the default frame ends at the current row, so <code>LAST_VALUE</code> returns the current row's own value. Specify <code>ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING</code> if you want the last row of the whole partition.</li>
    <li><strong>Ignoring NULLs from LAG and LEAD.</strong> A subtraction involving NULL gives NULL. Use a default value or <code>COALESCE</code> when you need a number.</li>
    <li><strong>Dropping PARTITION BY by accident.</strong> Without it, the window spans the whole table and your "per region" numbers become "overall" numbers. The query still runs, which makes this error easy to miss.</li>
  </ol>

  <h2 id="when-should-you-not-use-a-window-function">When should you not use a window function?</h2>
  <p>You may not need one. A window function is the right tool for row-level detail next to a group-level number, and plain SQL is often enough otherwise.</p>
  <ul>
    <li><strong>You only need a summary.</strong> If the output is one row per region, <code>GROUP BY</code> is shorter and easier to read. Do not add <code>OVER</code> and then remove duplicates with <code>DISTINCT</code>.</li>
    <li><strong>Your database is too old.</strong> MySQL 5.7 and older do not support window functions. Upgrade, or use a self-join or a variable-based workaround, and note that the workaround is harder to maintain.</li>
    <li><strong>The table is very large and the sort is expensive.</strong> Each distinct <code>PARTITION BY</code> and <code>ORDER BY</code> combination can force another sort. Filter rows early, check the query plan, and avoid defining five different windows in one query without a reason.</li>
    <li><strong>Your team cannot read it.</strong> A window query that a colleague cannot maintain is a cost. Use a CTE, name your columns clearly and add a comment when the logic is not obvious.</li>
    <li><strong>The calculation belongs elsewhere.</strong> A moving average that feeds a chart may be simpler to compute in pandas or in your BI tool, if the data is already there.</li>
  </ul>

  <h2 id="what-should-you-do-next">What should you do next?</h2>
  <ol>
    <li><strong>Run the sample.</strong> Create the <code>monthly_sales</code> table in DuckDB or SQLite and reproduce every result table above. If your numbers differ, find out why before you move on.</li>
    <li><strong>Rewrite one of your own queries.</strong> Pick a report where you used a self-join to get the previous period, and rewrite it with <code>LAG</code>. Compare the two outputs row by row. Our guide to <a href="/ai-help-center/sql-joins-explained">SQL joins</a> will help you recognise the pattern.</li>
    <li><strong>Practise the interview patterns.</strong> Write from memory: top N per group, month-on-month change, running total and a 3-month moving average. Then try the same tasks on a CSV file with DuckDB, as shown in our guide to <a href="/ai-help-center/query-csv-parquet-duckdb-python">querying CSV and Parquet files with DuckDB in Python</a>. If your <code>GROUP BY</code> basics are shaky, revise them first in <a href="/ai-help-center/sql-group-by-explained">SQL GROUP BY explained</a>.</li>
  </ol>
  <p>Ivy has been teaching data science and AI since 2008 and has trained 37,500+ alumni. Learners practise SQL on real business datasets, with a trainer reviewing their queries.</p>

  <section class="faq">
    <h2 id="frequently-asked-questions">Frequently asked questions</h2>
    <h3>What is the difference between GROUP BY and a window function?</h3>
    <p>GROUP BY collapses many rows into one row per group. A window function keeps every row and adds a calculated value to each one. Use GROUP BY when you want a summary table, and a window function when you need row-level detail next to a group-level number.</p>
    <h3>Can I use a window function in a WHERE clause?</h3>
    <p>No. The database evaluates WHERE before it calculates window functions, so the result does not exist yet. Put the window function in a subquery or a CTE and filter in the outer query. DuckDB, Snowflake and BigQuery also offer a QUALIFY clause for this.</p>
    <h3>Do window functions work in MySQL and SQLite?</h3>
    <p>Yes, in recent versions. MySQL supports window functions from version 8.0, and SQLite from version 3.25. MySQL 5.7 and older do not support them. PostgreSQL, SQL Server and DuckDB also support them.</p>
    <h3>Are window functions slow?</h3>
    <p>They need the database to sort or partition the rows, which costs time on large tables. They are often faster and clearer than the self-joins they replace. Check the query plan and filter rows early if a query on a large table is slow.</p>
    <h3>What does LAG return for the first row?</h3>
    <p>LAG returns NULL for the first row of each partition, because there is no earlier row to read. You can pass a default value as the third argument, such as <code>LAG(revenue_lakh, 1, 0)</code>, or wrap the result in COALESCE.</p>
  </section>

  <h2 id="references">References</h2>
  <ol class="refs">
    <li>PostgreSQL documentation, Tutorial: Window Functions. <a href="https://www.postgresql.org/docs/current/tutorial-window.html">postgresql.org/docs/current/tutorial-window.html</a></li>
    <li>SQLite documentation, Window Functions. <a href="https://www.sqlite.org/windowfunctions.html">sqlite.org/windowfunctions.html</a></li>
    <li>MySQL 8.0 Reference Manual, Window Functions. <a href="https://dev.mysql.com/doc/refman/8.0/en/window-functions.html">dev.mysql.com/doc/refman/8.0/en/window-functions.html</a></li>
    <li>DuckDB documentation, Window Functions. <a href="https://duckdb.org/docs/stable/sql/functions/window_functions">duckdb.org/docs/stable/sql/functions/window_functions</a></li>
  </ol>
`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: title,
      description,
      datePublished: "2026-10-15",
      dateModified: "2026-10-15",
      mainEntityOfPage: canonical,
      author: [
        {
          "@type": "Person",
          name: "Prateek Agrawal",
          url: "https://www.linkedin.com/in/prateekagrawal/",
        },
        {
          "@type": "Person",
          name: "Eeshani Agrawal",
          url: "https://www.linkedin.com/in/eeshani-agrawal-b674045/",
        },
      ],
      publisher: { "@type": "Organization", name: "Ivy Professional School" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "AI Help Center", item: "https://ivyproschool.com/aihelpcenter" },
        { "@type": "ListItem", position: 2, name: "SQL & DB", item: "https://ivyproschool.com/aihelpcenter/sql-db" },
        { "@type": "ListItem", position: 3, name: "SQL Window Functions Explained", item: canonical },
      ],
    },
  ],
};

export default function SqlWindowFunctionsExplainedPage() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className={styles.shell}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/aihelpcenter">AI Help Center</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <Link href="/aihelpcenter/sql-db">SQL &amp; DB</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span>SQL Window Functions Explained</span>
        </nav>

        <div className={styles.layout}>
          <article className={styles.article}>
            <p className={styles.eyebrow}>SQL &amp; DB</p>
            <h1 className={styles.title}>
              SQL Window Functions Explained:{" "}
              <span className={styles.accent}>
                ROW_NUMBER, RANK, LAG and LEAD with Examples
              </span>
            </h1>

            <div className={styles.byline}>
              <span className={styles.reviewed}>Reviewed by</span>
              <a
                className={styles.authorLink}
                href="https://www.linkedin.com/in/prateekagrawal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Prateek Agrawal's LinkedIn profile"
              >
                <Image className={styles.avatar} src={PrateekAgarwal} alt="Prateek Agrawal" width={34} height={34} />
                <span>Prateek Agrawal</span>
                <Linkedin size={14} aria-hidden="true" />
              </a>
              <a
                className={styles.authorLink}
                href="https://www.linkedin.com/in/eeshani-agrawal-b674045/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Eeshani Agrawal's LinkedIn profile"
              >
                <Image className={styles.avatar} src={EeshaniAgarwal} alt="Eeshani Agrawal" width={34} height={34} />
                <span>Eeshani Agrawal</span>
                <Linkedin size={14} aria-hidden="true" />
              </a>
              <span className={styles.date}>Last updated 15 October 2026</span>
            </div>

            <div
              className={styles.articleBody}
              dangerouslySetInnerHTML={{ __html: articleHtml }}
            />

            <footer className={styles.articleFooter}>
              Ivy Professional School (Ivy Knowledge Services Pvt Ltd). Teaching AI and data science since 2008. Recognized by MeitY.
            </footer>
          </article>

          <aside className={styles.roadmap} aria-label="Article roadmap">
            <h2 className={styles.roadmapTitle}>Roadmap</h2>
            <ol>
              {roadmap.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </div>
  );
}
