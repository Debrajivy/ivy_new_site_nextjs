const linkedinIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`;

// String.raw keeps any backslashes in the code samples exactly as written.
export const articleMarkup = String.raw`
<div class="crumb"><a href="/aihelpcenter">AI Help Center</a> › <a href="/aihelpcenter/sql-db">SQL &amp; DB</a> › <b>Normalization vs Denormalization</b></div>
<header class="hero"><div class="hero-in"><div>
<div class="pill">SQL &amp; DB · TUTORIAL</div>
<h1>Normalization vs Denormalization in Data Warehousing: A Practical Tutorial</h1>
<p class="sub">Normalize an orders table to 3NF in SQL, build the star schema from it, and learn which warehouse layer needs which form, and what denormalization really costs.</p>
<div class="meta"><span class="byline"><img class="byline-avatar" src="/images/aihelpcenter-authors/prateek-agrawal.webp" alt="Prateek Agrawal"/><img class="byline-avatar" src="/images/aihelpcenter-authors/eeshani-agrawal.webp" alt="Eeshani Agrawal"/>By <a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer">Prateek Agrawal</a> &amp; <a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer">Eeshani Agrawal</a></span><span>11 min read</span><span>Published 23 Nov 2026</span><span>Last reviewed 23 Nov 2026</span></div></div>
<div class="hcard"><div class="top">Quick insight</div><div class="in"><p><strong>This is not an either-or choice.</strong> Normalize where data is written and integrated; denormalize where it is read. The teams that argue about it are usually treating the warehouse as one thing instead of a sequence of layers with different jobs.</p></div></div></div></header>

<div class="wrap"><main>
<p class="answer">Normalize the layers where data arrives and is integrated; denormalize the layer analysts query. Staging and the integration core stay close to third normal form so each fact is stored exactly once and corrections are cheap, while the presentation layer is denormalized into star schemas so business queries stay fast and consistent.</p>

<section class="summary" id="summary"><h2>Summary: the short version</h2><ul>
<li>Normalization removes redundancy so each fact is stored once. It prevents update, insert and delete anomalies.</li>
<li>Denormalization reintroduces redundancy on purpose, to make reads faster and queries simpler to write.</li>
<li>A warehouse needs both: 3NF or Data Vault in the integration core, star schemas in the presentation layer.</li>
<li>The real cost of denormalization is not storage. It is restatement, dimension history and fact-to-fact joins.</li>
<li>Columnar warehouses make wide tables cheap, which weakens the performance case for normalizing but not the correctness case.</li>
<li>Do not build a star schema before you can finish the sentence "one row per ___".</li>
</ul></section>

<section class="card" id="why-this-comes-up"><div class="pill">SQL &amp; DB</div><h2>Why does this question keep coming up?</h2>
<p><strong>Because most teams inherit the argument rather than choose a side.</strong> Someone built the warehouse normalized, because that is what they learned for transactional systems. Analysts complained about eight-table joins. Someone else flattened everything into one wide table that nobody can restate when a figure turns out to be wrong.</p>
<p>Both camps are half right. The resolution is not a compromise in the middle; it is putting each form in the layer where it belongs. This tutorial works through both transformations on the same dataset, in SQL, so you can see what each one costs.</p>
</section>

<section class="card" id="what-is-normalization"><div class="pill">SQL &amp; DB</div><h2>What is normalization, and what problem does it solve?</h2>
<p><strong>Normalization is the process of splitting data into tables so that each fact is stored exactly once, with no repeating groups and no column depending on anything other than the whole primary key.</strong> It exists to prevent update, insert and delete anomalies. The normal forms come from Edgar Codd's 1970 paper, which introduced both n-ary relations and a normal form for database relations.</p>
<p>Here is the table every tutorial starts with. It is worth understanding exactly why it is broken.</p>
<div class="code"><div class="fname">00_orders_raw.sql: the unnormalized starting point</div><pre><code>-- orders_raw: one row per order, line items spread across repeating columns
CREATE TABLE orders_raw (
  order_id        INT,
  order_date      DATE,
  customer_name   VARCHAR(120),
  customer_city   VARCHAR(60),
  customer_state  VARCHAR(60),
  product_1       VARCHAR(120),
  qty_1           INT,
  price_1         DECIMAL(10,2),
  product_2       VARCHAR(120),
  qty_2           INT,
  price_2         DECIMAL(10,2)
);</code></pre></div>
<div class="tbl"><table>
<thead><tr><th scope="col">Anomaly</th><th scope="col">What goes wrong in this table</th></tr></thead>
<tbody>
<tr><td>Update</td><td>A customer moves from Pune to Mumbai. You must update every order row they appear in. Miss one and the warehouse disagrees with itself.</td></tr>
<tr><td>Insert</td><td>You cannot record a new product until somebody orders it, because product data exists only inside an order row.</td></tr>
<tr><td>Delete</td><td>Delete the only order containing a product and the product disappears from your records entirely.</td></tr>
</tbody></table></div>
<p>Note also that the table holds only two line items. An order with three products does not fit, and the usual fix (adding <code>product_3</code>) is how these tables reach forty columns.</p>
</section>

<section class="card" id="tutorial-normalize"><div class="pill">Tutorial · Part 1</div><h2>How do you normalize a table to third normal form?</h2>
<p><strong>Each normal form removes one specific kind of dependency, so work through them in order.</strong> Skipping to 3NF without understanding what each step removed is how people end up unable to explain their own schema.</p>
<h3>Step 1: first normal form: atomic values, no repeating groups</h3>
<p>1NF requires that each column holds a single value and that there are no repeating groups of columns. The repeating <code>product_n</code> columns have to become rows.</p>
<div class="code"><div class="fname">01_first_normal_form.sql</div><pre><code>-- 1NF: one row per order line instead of repeating columns
CREATE TABLE order_lines_1nf AS
SELECT order_id, order_date, customer_name, customer_city, customer_state,
       product_1 AS product_name, qty_1 AS quantity, price_1 AS unit_price
FROM orders_raw
WHERE product_1 IS NOT NULL
UNION ALL
SELECT order_id, order_date, customer_name, customer_city, customer_state,
       product_2, qty_2, price_2
FROM orders_raw
WHERE product_2 IS NOT NULL;</code></pre></div>
<p>The primary key is now the composite <code>(order_id, product_name)</code>, and an order can hold any number of lines. The table is still highly redundant: the order date and the full customer address repeat on every line.</p>
<h3>Step 2: second normal form: no partial dependencies</h3>
<p>2NF requires that every non-key column depends on the <em>whole</em> composite key, not just part of it. Here <code>order_date</code> and the customer columns depend on <code>order_id</code> alone, which is half the key. That is a partial dependency, so those columns move to their own table.</p>
<div class="code"><div class="fname">02_second_normal_form.sql</div><pre><code>-- 2NF: split order-level attributes away from line-level attributes
CREATE TABLE orders_2nf AS
SELECT DISTINCT order_id, order_date, customer_name, customer_city, customer_state
FROM order_lines_1nf;

CREATE TABLE order_lines_2nf AS
SELECT order_id, product_name, quantity, unit_price
FROM order_lines_1nf;</code></pre></div>
<h3>Step 3: third normal form: no transitive dependencies</h3>
<p>3NF requires that no non-key column depends on another non-key column. In <code>orders_2nf</code>, <code>customer_city</code> does not really depend on the order; it depends on the customer, who happens to be named on the order. That is a transitive dependency, and customers get their own table.</p>
<div class="code"><div class="fname">03_third_normal_form.sql</div><pre><code>-- 3NF: four tables, each fact stored exactly once
CREATE TABLE customers (
  customer_id   INT PRIMARY KEY,
  customer_name VARCHAR(120),
  city          VARCHAR(60),
  state         VARCHAR(60)
);

CREATE TABLE products (
  product_id   INT PRIMARY KEY,
  product_name VARCHAR(120),
  category     VARCHAR(60)
);

CREATE TABLE orders (
  order_id    INT PRIMARY KEY,
  order_date  DATE,
  customer_id INT REFERENCES customers (customer_id)
);

CREATE TABLE order_lines (
  order_id   INT REFERENCES orders (order_id),
  product_id INT REFERENCES products (product_id),
  quantity   INT,
  unit_price DECIMAL(10,2),
  PRIMARY KEY (order_id, product_id)
);</code></pre></div>
<p>The customer's city is now stored once. Correcting it is a single-row update, and every report built on this schema immediately agrees. That is the entire value proposition of normalization, and it is a real one.</p>
<div class="callout"><div class="eyebrow">Where to stop</div><p>Beyond 3NF there is Boyce-Codd normal form, which tightens 3NF for tables with overlapping candidate keys. In warehouse work 3NF is almost always the stopping point. Going further is a modelling exercise with little practical payoff.</p></div>
</section>

<section class="card" id="what-is-denormalization"><div class="pill">SQL &amp; DB</div><h2>What is denormalization, and what is a star schema?</h2>
<p><strong>Denormalization is deliberately reintroducing redundancy to make reads faster and queries simpler.</strong> In a warehouse it almost always means building a star schema: one fact table of measurements surrounded by dimension tables of descriptive context.</p>
<p>Star schemas consist of fact tables linked to dimension tables through primary and foreign key relationships, and they are the standard output of Kimball dimensional modelling, the set of techniques drawn from <em>The Data Warehouse Toolkit</em>.</p>
<figure class="diagram"><svg viewBox="0 0 720 336" role="img" aria-label="A star schema. A central fact table called fact_order_line, with the grain one row per order line and measures quantity and net amount, is joined by foreign keys to four surrounding dimension tables: dim_date, dim_customer, dim_product and dim_store." style="width:100%;height:auto"><g font-family="Poppins,sans-serif" font-size="12" fill="#14202b">
<text x="0" y="14" font-family="Montserrat,sans-serif" font-weight="700" font-size="15">The star: one fact table, four flat dimensions</text>
<line x1="190" y1="76" x2="282" y2="140" stroke="#1a98cb" stroke-width="2"/>
<line x1="530" y1="76" x2="438" y2="140" stroke="#1a98cb" stroke-width="2"/>
<line x1="190" y1="256" x2="282" y2="196" stroke="#1a98cb" stroke-width="2"/>
<line x1="530" y1="256" x2="438" y2="196" stroke="#1a98cb" stroke-width="2"/>
<rect x="270" y="130" width="180" height="76" rx="8" fill="#0b5394"/>
<text x="360" y="152" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="700" font-size="13" fill="#ffffff">fact_order_line</text>
<text x="360" y="170" text-anchor="middle" font-size="11" fill="#cfe4f5">grain: one order line</text>
<text x="360" y="187" text-anchor="middle" font-size="11" fill="#cfe4f5">quantity · net_amount</text>
<rect x="40" y="34" width="150" height="56" rx="8" fill="#ffffff" stroke="#1a98cb" stroke-width="2"/>
<text x="115" y="56" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="600" font-size="12.5">dim_date</text>
<text x="115" y="74" text-anchor="middle" font-size="10.5" fill="#3c4a57">month · quarter · FY</text>
<rect x="530" y="34" width="165" height="56" rx="8" fill="#ffffff" stroke="#1a98cb" stroke-width="2"/>
<text x="612" y="56" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="600" font-size="12.5">dim_customer</text>
<text x="612" y="74" text-anchor="middle" font-size="10.5" fill="#3c4a57">city · state · region</text>
<rect x="40" y="246" width="150" height="56" rx="8" fill="#ffffff" stroke="#1a98cb" stroke-width="2"/>
<text x="115" y="268" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="600" font-size="12.5">dim_product</text>
<text x="115" y="286" text-anchor="middle" font-size="10.5" fill="#3c4a57">sub-category · category</text>
<rect x="530" y="246" width="150" height="56" rx="8" fill="#ffffff" stroke="#1a98cb" stroke-width="2"/>
<text x="605" y="268" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="600" font-size="12.5">dim_store</text>
<text x="605" y="286" text-anchor="middle" font-size="10.5" fill="#3c4a57">format · city · cluster</text>
<text x="360" y="330" text-anchor="middle" font-size="11" font-style="italic" fill="#556">dimensions are wide and flat · the fact table is narrow and additive</text>
</g></svg><figcaption>The hierarchy that 3NF would split across three tables (product, sub-category, category) becomes three columns on one dimension row. That repetition is the denormalization, and it is the point.</figcaption></figure>
<p>The key move is flattening hierarchies. In 3NF you would store product, sub-category and category in three tables. In a dimension you store all three as columns on one row, accepting that "Electronics" is repeated thousands of times.</p>
</section>

<section class="card" id="tutorial-star-schema"><div class="pill">Tutorial · Part 2</div><h2>How do you build the star schema from 3NF tables?</h2>
<p><strong>Starting from the four 3NF tables above, the dimensional version adds surrogate keys, flattened hierarchies and validity columns.</strong> Those last two do work the 3NF schema cannot do at all.</p>
<div class="code"><div class="fname">04_star_schema.sql</div><pre><code>-- Dimensions: flattened hierarchies, surrogate keys, history tracking
CREATE TABLE dim_customer (
  customer_key  BIGINT PRIMARY KEY,   -- surrogate key, meaningless by design
  customer_id   INT,                  -- natural key from the source system
  customer_name VARCHAR(120),
  city          VARCHAR(60),
  state         VARCHAR(60),
  region        VARCHAR(60),          -- hierarchy flattened into columns
  valid_from    DATE,
  valid_to      DATE,
  is_current    BOOLEAN               -- slowly changing dimension, type 2
);

CREATE TABLE dim_product (
  product_key  BIGINT PRIMARY KEY,
  product_id   INT,
  product_name VARCHAR(120),
  sub_category VARCHAR(60),
  category     VARCHAR(60),
  brand        VARCHAR(60)
);

CREATE TABLE dim_date (
  date_key    INT PRIMARY KEY,        -- e.g. 20261123
  full_date   DATE,
  month_name  VARCHAR(12),
  quarter     VARCHAR(2),
  fiscal_year INT,
  is_weekend  BOOLEAN
);

-- Fact: one row per order line, the grain stated once and never varied
CREATE TABLE fact_order_line (
  date_key        INT    REFERENCES dim_date (date_key),
  customer_key    BIGINT REFERENCES dim_customer (customer_key),
  product_key     BIGINT REFERENCES dim_product (product_key),
  order_id        INT,                 -- degenerate dimension
  quantity        INT,
  gross_amount    DECIMAL(12,2),
  discount_amount DECIMAL(12,2),
  net_amount      DECIMAL(12,2)
);</code></pre></div>
<p>Three things in that schema deserve naming, because they are the parts people leave out and then wonder why the warehouse misbehaves.</p>
<ol class="steps">
<li><strong>Surrogate keys.</strong> <code>customer_key</code> is generated by the warehouse and carries no business meaning, so it survives a source system renumbering its customers.</li>
<li><strong>Type 2 history.</strong> When a customer moves city you insert a new dimension row rather than updating the old one, so last year's revenue by state stays correct.</li>
<li><strong>A stated grain.</strong> One row per order line. Every measure in the table must be true at that grain.</li>
</ol>
<div class="callout warning"><div class="eyebrow">The expensive mistake</div><p>Mixing grains in one fact table. Putting order-level shipping charges on an order-line fact table means every query that sums shipping multiplies it by the number of lines. If a measure is not true at the stated grain, it belongs in a different fact table.</p></div>
<h3>What you actually gain</h3>
<div class="code"><div class="fname">05_same_question_both_ways.sql</div><pre><code>-- 3NF: revenue by state and month needs three joins and a derived measure
SELECT c.state,
       DATE_TRUNC('month', o.order_date) AS month,
       SUM(ol.quantity * ol.unit_price)  AS revenue
FROM order_lines ol
JOIN orders    o ON o.order_id    = ol.order_id
JOIN customers c ON c.customer_id = o.customer_id
GROUP BY 1, 2;

-- Star: two joins, measure already computed, no business logic in the query
SELECT dc.state,
       dd.month_name,
       SUM(f.net_amount) AS revenue
FROM fact_order_line f
JOIN dim_customer dc ON dc.customer_key = f.customer_key
JOIN dim_date     dd ON dd.date_key     = f.date_key
GROUP BY 1, 2;</code></pre></div>
<div class="callout strong-opinion"><div class="eyebrow">Strong opinion</div><p>The join count is the least interesting difference. Look at <code>quantity * unit_price</code>: that is business logic sitting in a query. Every analyst who writes it slightly differently (before or after discount, with or without tax) produces a different revenue number. Moving that calculation into <code>net_amount</code> once, in the pipeline, is most of what a presentation layer is for.</p></div>
</section>

<section class="card" id="which-layer"><div class="pill">Architecture</div><h2>Which layer should be normalized, and which denormalized?</h2>
<p><strong>Both, in order.</strong> The argument only looks like a contradiction when you treat the warehouse as one thing rather than a sequence of layers with different jobs.</p>
<figure class="diagram"><svg viewBox="0 0 720 180" role="img" aria-label="A five-stage warehouse pipeline: source systems, raw or landing, staging, integration core, and presentation marts. The first three keep the source shape. The integration core is normalized to third normal form. The presentation marts are denormalized into star schemas." style="width:100%;height:auto"><g font-family="Poppins,sans-serif" font-size="12" fill="#14202b">
<text x="0" y="14" font-family="Montserrat,sans-serif" font-weight="700" font-size="15">Each layer has a different job, so each has a different shape</text>
<rect x="6" y="34" width="128" height="46" rx="8" fill="#f6f9fc" stroke="#c9d6e2" stroke-width="2"/>
<text x="70" y="56" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="600" font-size="12">Source systems</text>
<text x="70" y="72" text-anchor="middle" font-size="10.5" fill="#556">OLTP, apps, files</text>
<rect x="148" y="34" width="128" height="46" rx="8" fill="#f6f9fc" stroke="#c9d6e2" stroke-width="2"/>
<text x="212" y="56" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="600" font-size="12">Raw / landing</text>
<text x="212" y="72" text-anchor="middle" font-size="10.5" fill="#556">append-only</text>
<rect x="290" y="34" width="128" height="46" rx="8" fill="#f6f9fc" stroke="#c9d6e2" stroke-width="2"/>
<text x="354" y="56" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="600" font-size="12">Staging</text>
<text x="354" y="72" text-anchor="middle" font-size="10.5" fill="#556">typed, deduplicated</text>
<rect x="432" y="34" width="128" height="46" rx="8" fill="#ffffff" stroke="#0b5394" stroke-width="2.5"/>
<text x="496" y="56" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="600" font-size="12" fill="#0b5394">Integration core</text>
<text x="496" y="72" text-anchor="middle" font-size="10.5" fill="#556">3NF or Data Vault</text>
<rect x="574" y="34" width="128" height="46" rx="8" fill="#fff6e5" stroke="#f7a61b" stroke-width="2.5"/>
<text x="638" y="56" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="600" font-size="12">Presentation</text>
<text x="638" y="72" text-anchor="middle" font-size="10.5" fill="#556">star schemas</text>
<g stroke="#0b5394" stroke-width="2" fill="#0b5394">
<line x1="134" y1="57" x2="142" y2="57"/><path d="M140 52 l8 5 l-8 5z"/>
<line x1="276" y1="57" x2="284" y2="57"/><path d="M282 52 l8 5 l-8 5z"/>
<line x1="418" y1="57" x2="426" y2="57"/><path d="M424 52 l8 5 l-8 5z"/>
<line x1="560" y1="57" x2="568" y2="57"/><path d="M566 52 l8 5 l-8 5z"/>
</g>
<path d="M6 104 L6 110 L418 110 L418 104" stroke="#c9d6e2" stroke-width="2" fill="none"/>
<text x="212" y="128" text-anchor="middle" font-size="11.5" fill="#556">source shape, no modelling decisions yet</text>
<path d="M432 104 L432 110 L560 110 L560 104" stroke="#0b5394" stroke-width="2" fill="none"/>
<text x="496" y="128" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="700" font-size="11.5" fill="#0b5394">NORMALIZED</text>
<text x="496" y="145" text-anchor="middle" font-size="10.5" fill="#556">store each fact once</text>
<path d="M574 104 L574 110 L702 110 L702 104" stroke="#f7a61b" stroke-width="2" fill="none"/>
<text x="638" y="128" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="700" font-size="11.5" fill="#0b5394">DENORMALIZED</text>
<text x="638" y="145" text-anchor="middle" font-size="10.5" fill="#556">fast, consistent reads</text>
</g></svg><figcaption>Data is normalized where it is integrated and denormalized where it is read. Most warehouses built today are Inmon in the middle and Kimball at the edge, whatever the team calls it.</figcaption></figure>
<div class="tbl"><table>
<thead><tr><th scope="col">Layer</th><th scope="col">Modelling style</th><th scope="col">Why it is that way</th></tr></thead>
<tbody>
<tr><td>Raw / landing</td><td>None: source shape, append-only</td><td>Lets you replay history without re-extracting from the source</td></tr>
<tr><td>Staging</td><td>Lightly cleaned, still source-shaped</td><td>Typing, deduplication, basic validation</td></tr>
<tr><td>Integration / core</td><td>3NF or Data Vault</td><td>One copy of each fact; survives source systems changing underneath you</td></tr>
<tr><td>Presentation / marts</td><td>Star schemas</td><td>Fast, understandable queries; consistent measure definitions</td></tr>
</tbody></table></div>
<p>This is also the real content of the old Inmon-versus-Kimball argument. Bill Inmon's corporate information factory puts a normalized enterprise warehouse at the centre and builds dimensional marts from it. Ralph Kimball's approach builds conformed dimensional models directly and ties them together with a bus architecture.</p>
<h3>Where column stores change the calculation</h3>
<p>On a columnar warehouse (BigQuery, Snowflake, Redshift), a wide denormalized table is cheaper than people trained on row stores expect, because unreferenced columns are never read and repeated values compress well.</p>
<p>Google's BigQuery documentation makes denormalization an explicit best practice, on the grounds that it localises data to individual slots so execution can happen in parallel. But it recommends nested and repeated fields rather than fully flattening, which preserves one-to-many relationships inline where the data is hierarchical and queried together.</p>
</section>

<section class="card" id="what-denormalization-costs"><div class="pill">SQL &amp; DB</div><h2>What does denormalization actually cost?</h2>
<p><strong>Storage is the cost people quote and the one that matters least.</strong> Three costs matter more.</p>
<h3>Restatement</h3>
<p>A denormalized table bakes business logic into stored values. When the definition of net revenue changes, or a source system corrects six months of history, you rebuild the table. If the logic lives only in the pipeline and the pipeline is not reproducible, that rebuild is a project rather than a job run.</p>
<h3>Dimension maintenance</h3>
<p>Type 2 history means every attribute change inserts rows, and somebody has to decide, per column, whether a change should create history or simply overwrite. That decision is a business question which arrives as a technical ticket.</p>
<h3>Fact-to-fact joins</h3>
<p>This one bites hardest. Joining two fact tables at different grains (order lines to shipments on <code>order_id</code>, say) multiplies rows and silently inflates every <code>SUM</code> in the query. The dimensional answer is not a cleverer join. It is to aggregate each fact table separately and combine the results on conformed dimensions, which Kimball's own technique list calls multipass SQL to avoid fact-to-fact table joins.</p>
<div class="callout rule-of-thumb"><div class="eyebrow">Rule of thumb</div><p>If a query joins two tables that both contain measures, stop and check the row count before you trust the total. An inflated <code>SUM</code> looks exactly like a good quarter.</p></div>
</section>

<section class="card" id="when-not-to"><div class="pill">SQL &amp; DB</div><h2>When should you not do either?</h2>
<p><strong>Both forms are over-applied, in opposite directions.</strong> Four cases where the honest answer is to stop.</p>
<h3>Do not normalize the presentation layer</h3>
<p>If analysts and BI tools query 3NF tables directly, you are paying in join complexity and inconsistent measures for an integrity benefit that only matters where data is written. Nothing writes to a warehouse the way an application writes to a transactional database.</p>
<h3>Do not denormalize before you know the grain</h3>
<p>A star schema is a commitment to a specific grain and a specific set of measures. If the business cannot yet tell you what it measures, building marts produces tables that get abandoned. Model the core, let people query it awkwardly for a quarter, and build marts for the questions that actually recur.</p>
<h3>Do not flatten a star schema further out of habit</h3>
<p>BigQuery's own documentation notes that star schemas are typically already optimised for analytics, and that denormalising further may not change performance significantly. One Big Table is a real pattern, but it should follow a measurement, not a preference.</p>
<h3>Do not normalize small reference data</h3>
<p>A forty-row country list split across three tables for purity's sake costs you joins and buys nothing. Normal forms are a tool for managing update anomalies, and a table nobody updates has none.</p>
</section>

<section class="card concl" id="what-to-do-next"><div class="pill">SQL &amp; DB</div><h2>What should you do next?</h2>
<p><strong>Work out which layer your problem is actually in before you change any schema.</strong> If analysts complain about joins, the presentation layer is missing. If numbers disagree between reports, the integration layer is missing or measures are defined in queries instead of pipelines.</p>
<div class="check"><ul>
<li>Write the grain statement before any DDL: "one row per ___". If you cannot finish that sentence, you are not ready to build a fact table.</li>
<li>Keep the integration core normalized, and make every correction a single-row update.</li>
<li>Build one star schema for the most-asked question rather than a full set of marts.</li>
<li>Move every derived measure out of analyst queries and into the fact table.</li>
<li>Decide per dimension column whether a change creates history or overwrites, and write it down.</li>
<li>Check row counts before trusting any total from a query that joins two fact tables.</li>
<li>Measure whether two analysts now get the same revenue figure. That is the actual test.</li>
</ul></div>
<p>If the wider question is which data and analytics capabilities your organisation should build first, our <a href="/enterprise/ai-for-leaders-and-cxos">AI for Leaders and CXOs workshop</a> helps leadership teams rank use cases by value, feasibility and risk.</p>
</section>

<section class="card" id="frequently-asked-questions"><div class="pill">FAQ</div><h2>Frequently asked questions</h2>
<h3>Should a data warehouse be normalized or denormalized?</h3><p>Both, in different layers. The integration core is normalized so each fact is stored once and corrections are cheap; the presentation layer is denormalized into star schemas so analysts get fast queries and consistent measures. Treating the warehouse as a single modelling decision is what makes this look like a contradiction.</p>
<h3>Is a star schema denormalized?</h3><p>Yes. Dimension tables flatten hierarchies that a normalized design would split across several tables, so product, sub-category and category become three columns on one dimension row. Fact tables stay narrow and additive; the denormalization is in the dimensions.</p>
<h3>What is the difference between a star schema and a snowflake schema?</h3><p>A star schema keeps each dimension as a single flat table. A snowflake schema normalizes the dimension hierarchies into separate tables, so category becomes its own table joined to product. Snowflaking saves a little storage and costs query simplicity, which is usually the wrong trade in a presentation layer.</p>
<h3>Does normalization still matter on modern cloud warehouses?</h3><p>Yes, in the integration layer. Columnar storage and cheap compute make wide tables more affordable than they were on row stores, which weakens the performance argument for normalizing. It does not weaken the correctness argument: storing a fact once is what makes a correction a one-row update instead of a backfill.</p>
<h3>What is 3NF in simple terms?</h3><p>A table is in third normal form when every column depends on the key, the whole key and nothing but the key. In practice that means no repeating groups of columns, no column that depends on only part of a composite key, and no column that depends on another non-key column.</p>
<h3>Which normal form should a data warehouse core use?</h3><p>Third normal form is the usual stopping point, and it is what Inmon-style enterprise warehouses use. Some teams use Data Vault instead, which splits data into hubs, links and satellites to handle changing sources and auditability. Boyce-Codd and higher normal forms rarely earn their complexity in warehouse work.</p>
</section>

<section class="card" id="sources"><div class="pill">Sources</div><h2>Sources</h2><ul>
<li>Codd, E. F. "A Relational Model of Data for Large Shared Data Banks." <em>Communications of the ACM</em>, 13(6), 377–387. 1970. <a href="https://doi.org/10.1145/362384.362685" target="_blank" rel="noopener">https://doi.org/10.1145/362384.362685</a></li>
<li>Kimball Group. "Dimensional Modeling Techniques." <a href="https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling/" target="_blank" rel="noopener">https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling/</a></li>
<li>Google Cloud. "Use nested and repeated fields" (BigQuery documentation). <a href="https://docs.cloud.google.com/bigquery/docs/best-practices-performance-nested" target="_blank" rel="noopener">https://docs.cloud.google.com/bigquery/docs/best-practices-performance-nested</a></li>
</ul></section>

<section class="card" id="related-articles"><div class="pill">Keep reading</div><h2>Related articles</h2><ul>
<li><a href="/aihelpcenter/data-engineering/star-schema-vs-snowflake-schema">Star schema vs snowflake schema</a></li>
<li><a href="/aihelpcenter/data-engineering/etl-vs-elt-2026">ETL vs ELT: key differences and when to use each</a></li>
<li><a href="/aihelpcenter/data-engineering/data-lake-vs-data-warehouse-vs-data-lakehouse">Data lake vs data warehouse vs data lakehouse</a></li>
</ul>
<p>More in <a href="/aihelpcenter/sql-db">SQL &amp; DB</a>.</p>
<div class="cta"><p><strong>Build warehouses that analysts can actually query.</strong> Ivy's Data Engineering programme covers dimensional modelling end to end: normalizing an integration core, designing fact grain and conformed dimensions, slowly changing dimensions, and building marts on cloud warehouses. Live classes, capstone projects, certification and placement support.</p>
<a class="btn" href="/courses/data-engineering-course">See the course modules</a><a class="btn alt" href="https://prepai.ivyproschool.com" target="_blank" rel="noopener">Take the free PrepAI Diagnose</a>
<p>New to data engineering? Our <a href="/bootcamp">free live AI bootcamp</a> is a good place to start. To book two free demo classes, call or WhatsApp +91 7676882222.</p></div></section>
</main>
<aside><div class="stick"><nav class="box" aria-label="Article roadmap"><div class="lbl">ROADMAP</div><a href="#summary">Summary</a><a href="#why-this-comes-up">Why this question comes up</a><a href="#what-is-normalization">What is normalization?</a><a href="#tutorial-normalize">Tutorial 1: normalize to 3NF</a><a href="#what-is-denormalization">What is denormalization?</a><a href="#tutorial-star-schema">Tutorial 2: build the star schema</a><a href="#which-layer">Which layer needs which?</a><a href="#what-denormalization-costs">What denormalization costs</a><a href="#when-not-to">When not to do either</a><a href="#what-to-do-next">What to do next</a><a href="#frequently-asked-questions">Frequently asked questions</a><a href="#sources">Sources</a><a href="#related-articles">Related articles</a></nav><div class="box author"><div class="lbl">WRITTEN BY</div><div class="author-person"><img class="author-photo" src="/images/aihelpcenter-authors/prateek-agrawal.webp" alt="Prateek Agrawal"/><div class="author-info"><a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer">Prateek Agrawal</a><p>Founder · AI/ML Leader</p></div><a class="author-linkedin" href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer" aria-label="Prateek Agrawal on LinkedIn">${linkedinIcon}</a></div><div class="author-person"><img class="author-photo" src="/images/aihelpcenter-authors/eeshani-agrawal.webp" alt="Eeshani Agrawal"/><div class="author-info"><a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer">Eeshani Agrawal</a><p>Co-founder · Data/AI Consultant</p></div><a class="author-linkedin" href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer" aria-label="Eeshani Agrawal on LinkedIn">${linkedinIcon}</a></div></div></div></aside>
</div>
`;
