// Sakshi Rathod - Portfolio Data Configuration
const portfolioData = {
  personal: {
    name: "Sakshi Rathod",
    role: "Data Analyst & AI Specialist",
    tagline: "Transforming raw data into strategic intelligence, interactive dashboards & predictive AI solutions.",
    location: "Nagpur, Maharashtra, India",
    email: "rathodsakshi290@gmail.com",
    phone: "+91-9370865179",
    github: "https://github.com/rathodsakshi290",
    githubHandle: "rathodsakshi290",
    linkedin: "https://www.linkedin.com/in/sakshi-rathod-1499532bb",
    linkedinHandle: "sakshi-rathod-1499532bb",
    cgpa: "9.9 / 10",
    status: "Available for Data Analyst & AI Roles",
    avatar: "assets/avatar.jpg",
    bio: "Data Analyst with hands-on experience in Excel, SQL, Python, and Power BI. Skilled in data cleaning, dashboard development, exploratory data analysis, and transforming raw data into actionable business insights. Passionate about solving high-impact business problems through data-driven decision-making."
  },

  stats: [
    { value: "9.9", suffix: "/10", label: "B.Tech CGPA", subtitle: "Top Academic Rank", target: 9.9, isDecimal: true },
    { value: "6", suffix: "+", label: "GitHub Projects", subtitle: "BI, ML & Dashboards", target: 6, isDecimal: false },
    { value: "3", suffix: "+", label: "Industry Internships", subtitle: "Analytics & AI/ML", target: 3, isDecimal: false },
    { value: "100", suffix: "%", label: "Data-Driven Focus", subtitle: "Business Intelligence", target: 100, isDecimal: false }
  ],

  skills: {
    programming: [
      { name: "Python", level: 92, icon: "code", category: "Core", tag: "Pandas, NumPy, Scikit-learn" },
      { name: "SQL", level: 94, icon: "database", category: "Core", tag: "PostgreSQL, MySQL, Complex Queries" },
      { name: "JavaScript", level: 85, icon: "file-code", category: "Core", tag: "ES6+, DOM, Asynchronous" },
      { name: "HTML5", level: 90, icon: "globe", category: "Web", tag: "Semantic Markup" },
      { name: "CSS3", level: 88, icon: "layers", category: "Web", tag: "Modern Layouts & Animations" },
      { name: "C", level: 78, icon: "cpu", category: "Foundational", tag: "Algorithms & Logic" }
    ],
    analytics: [
      { name: "Power BI", level: 96, icon: "bar-chart-2", category: "BI", tag: "DAX, Power Query, Data Modeling" },
      { name: "Tableau", level: 86, icon: "pie-chart", category: "BI", tag: "Visual Stories & Dashboards" },
      { name: "Advanced Excel", level: 94, icon: "table", category: "Spreadsheets", tag: "Pivot Tables, XLOOKUP, Modeling" },
      { name: "Google Sheets", level: 90, icon: "file-spreadsheet", category: "Spreadsheets", tag: "Formulas & Automation" },
      { name: "Looker", level: 82, icon: "activity", category: "BI", tag: "Enterprise BI Reports" }
    ],
    databaseTools: [
      { name: "PostgreSQL", level: 90, icon: "server", category: "Database", tag: "Relational Queries & Indexing" },
      { name: "MySQL", level: 92, icon: "database", category: "Database", tag: "RDBMS Architecture" },
      { name: "Microsoft Office Suite", level: 95, icon: "briefcase", category: "Tools", tag: "Excel, PowerPoint, Word" },
      { name: "Scikit-Learn / ML", level: 88, icon: "zap", category: "AI/ML", tag: "Classification & Feature Engineering" },
      { name: "Electron.js", level: 82, icon: "monitor", category: "Frameworks", tag: "Desktop Applications" },
      { name: "Flask & APIs", level: 84, icon: "terminal", category: "Backend", tag: "Model Deployment & REST" }
    ],
    designing: [
      { name: "Figma", level: 88, icon: "layout", category: "UI/UX", tag: "Dashboard Wireframing & Prototyping" },
      { name: "Canva", level: 92, icon: "image", category: "Design", tag: "Infographics & Visual Presentation" }
    ],
    competencies: [
      { title: "Problem Solving", desc: "Translating ambiguous business challenges into clear, actionable analytical workflows.", icon: "target" },
      { title: "Data Storytelling", desc: "Translating complex statistical metrics into executive-ready dashboards and narratives.", icon: "trending-up" },
      { title: "Team Collaboration", desc: "Proven track record in cross-functional agile teams and peer technical cohorts.", icon: "users" },
      { title: "Leadership & Community", desc: "Active Google Developer Group Cloud Core Member driving tech events and developer initiatives.", icon: "award" }
    ]
  },

  experience: [
    {
      id: "planitt",
      role: "Data Analyst Intern",
      company: "Planitt Solutions Pvt. Ltd.",
      type: "Internship",
      period: "Mar 2026 – Present",
      status: "Current Role",
      badge: "Active Intern",
      location: "Nagpur, Maharashtra",
      highlights: [
        "Collect, clean, and preprocess structured and unstructured datasets to ensure high data integrity for enterprise analysis.",
        "Architect and maintain interactive executive dashboards and reports using Power BI to support real-time decision-making.",
        "Perform exploratory data analysis (EDA) to diagnose operational performance, customer drop-offs, and critical KPIs.",
        "Collaborate with cross-functional leadership to transform raw business requirements into automated analytical pipelines."
      ],
      skillsUsed: ["Power BI", "Data Cleaning", "DAX", "SQL", "Excel", "Data Preprocessing", "Dashboard Design"]
    },
    {
      id: "infosys",
      role: "AI/ML Intern",
      company: "Infosys Springboard",
      type: "Virtual Internship",
      period: "Dec 2025 – Feb 2026",
      status: "Completed",
      badge: "AI & ML",
      location: "Remote / Virtual",
      highlights: [
        "Developed a predictive machine learning model to evaluate the potential habitability of exoplanets using NASA astronomical datasets.",
        "Conducted extensive feature engineering on planetary radius, orbital period, equilibrium temperature, and stellar flux.",
        "Documented project findings, validation benchmarks, and presented analytical results adhering to industry standards.",
        "Implemented hyperparameter optimization and model explainability techniques using Python, Pandas, and Scikit-learn."
      ],
      skillsUsed: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-Learn", "Data Validation", "Jupyter"]
    },
    {
      id: "aicte-edunet",
      role: "AI/ML Intern",
      company: "AICTE Edunet Foundation",
      type: "Virtual Internship",
      period: "July 2025 – Aug 2025",
      status: "Completed",
      badge: "GenAI & LLMs",
      location: "Remote / Virtual",
      highlights: [
        "Gained hands-on experience in Artificial Intelligence, Large Language Models (LLMs), and Retrieval-Augmented Generation (RAG) architectures.",
        "Executed guided modules covering vector embeddings, context injection, semantic search, and prompt optimization.",
        "Participated in practical assignments evaluating model performance across structured domain datasets.",
        "Delivered collaborative proof-of-concept AI solutions within a structured government-backed technical fellowship."
      ],
      skillsUsed: ["Large Language Models", "RAG Architectures", "Prompt Engineering", "Python", "Deep Learning Foundations"]
    }
  ],

  projects: [
    {
      id: "meta-ad",
      title: "Meta Ad Performance Dashboard",
      year: "2026",
      category: "powerbi",
      categoryName: "Power BI & Analytics",
      tagline: "End-to-End Advertising Campaign Performance & ROAS Intelligence",
      summary: "Designed and developed an interactive Power BI dashboard to analyze Meta (Facebook & Instagram) advertising campaign performance across CTR, CPA, ROAS, and audience demographics.",
      image: "assets/meta-ad.jpg",
      tools: ["Power BI", "Power Query", "DAX", "Advanced Excel", "Data Visualization"],
      githubUrl: "https://github.com/rathodsakshi290/Meta-Ad-Performance-Dashboard",
      liveUrl: null,
      metrics: [
        { label: "ROAS Multiplier", value: "4.8x Peak" },
        { label: "Ad Spend Analyzed", value: "$120K+" },
        { label: "CPA Reduction", value: "-24% Optimized" },
        { label: "Reporting Efficiency", value: "90% Automated" }
      ],
      details: {
        problem: "Marketing managers faced fragmented analytics across Facebook Ads Manager and Instagram campaigns with delayed conversion attribution.",
        solution: "Built an automated Power Query data ETL pipeline with customized DAX measures calculating weighted ROAS, CAC, impression share, and demographic heatmaps.",
        keyFeatures: [
          "Dynamic date slicers & custom campaign attribution drilldowns",
          "Automated DAX measures for weighted CTR, CPC, and ROI simulations",
          "Visual funnel conversion diagnostics identifying drop-off stages",
          "Executive KPI summary cards for rapid budget decision-making"
        ]
      },
      chartKey: "metaAd",
      featured: true
    },
    {
      id: "exohabit-ai",
      title: "ExoHabitAI – Exoplanet Habitability Prediction",
      year: "2025",
      category: "aiml",
      categoryName: "AI & Machine Learning",
      tagline: "Classifying Potentially Habitable Exoplanets with Machine Learning",
      summary: "Designed and built an AI-powered system to classify potentially habitable exoplanets using NASA astronomical datasets, feature extraction, and Scikit-learn algorithms deployed with an interactive frontend.",
      image: "assets/exohabit-ai.jpg",
      tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "Flask", "Jupyter Notebook"],
      githubUrl: "https://github.com/rathodsakshi290/ExoHabitAI",
      liveUrl: "https://exohabitai-frontend-nu.vercel.app",
      metrics: [
        { label: "Model Accuracy", value: "94.2%" },
        { label: "Planets Evaluated", value: "5,000+" },
        { label: "Features Analyzed", value: "18 Parameters" },
        { label: "Inference Time", value: "< 45ms" }
      ],
      details: {
        problem: "Astronomical surveys yield massive unclassified candidate catalogs, making manual habitability verification slow and challenging.",
        solution: "Trained Random Forest and Gradient Boosting classification algorithms on planetary radius, orbital distance, insolation flux, and host star temperature.",
        keyFeatures: [
          "Data cleaning and imputation pipeline on noisy astronomical datasets",
          "Feature correlation heatmaps for habitable zone boundary detection",
          "Lightweight Flask REST API for real-time candidate score prediction",
          "Deployed interactive web application hosted on Vercel"
        ]
      },
      chartKey: "exoplanet",
      featured: true
    },
    {
      id: "motorola-sales",
      title: "Motorola Sales Analysis",
      year: "2025",
      category: "sql",
      categoryName: "SQL & Business Intelligence",
      tagline: "Multi-Region Sales Intelligence, Profitability & Trend Forecaster",
      summary: "Analyzed multi-region smartphone sales data to identify sales trends, customer purchasing patterns, margin bottlenecks, and key performance indicators for business strategy.",
      image: "assets/motorola-sales.jpg",
      tools: ["Power BI", "PostgreSQL", "SQL Queries", "Advanced Excel", "Data Modeling"],
      githubUrl: "https://github.com/rathodsakshi290/Motorola-Sales-Analysis-Dashboard",
      liveUrl: null,
      metrics: [
        { label: "Data Records", value: "50,000+ Rows" },
        { label: "Profit Focus", value: "+15% YoY Lift" },
        { label: "Regional Zones", value: "8 Key Territories" },
        { label: "Query Speed", value: "3x Optimized" }
      ],
      details: {
        problem: "Fragmented distributor spreadsheets prevented sales leadership from pinpointing underperforming models and regional inventory shortages.",
        solution: "Authored advanced SQL queries with multi-table joins, window functions, and CTEs, feeding a star-schema Power BI reporting model.",
        keyFeatures: [
          "Year-over-Year (YoY) and Quarter-over-Quarter (QoQ) growth rate dashboards",
          "Product category profitability matrix and discount elasticity analysis",
          "Regional distributor performance ranking with target vs actual variance",
          "Interactive geographic map visualizer with drill-through capability"
        ]
      },
      chartKey: "sales",
      featured: true
    },
    {
      id: "justimind",
      title: "JustiMind – AI Legal Agent",
      year: "2026",
      category: "aiml",
      categoryName: "AI & Machine Learning",
      tagline: "Intelligent Case Law Research & Legal Document QA Agent",
      summary: "Architected an AI-powered legal intelligence agent leveraging Large Language Models and Retrieval-Augmented Generation (RAG) to parse complex legal texts and statute references.",
      image: "assets/justimind.jpg",
      tools: ["Python", "LLMs", "RAG", "LangChain", "Vector DB", "Prompt Engineering"],
      githubUrl: "https://github.com/rathodsakshi290/JustiMind",
      liveUrl: null,
      metrics: [
        { label: "Domain", value: "Legal Intelligence" },
        { label: "Architecture", value: "RAG & Vector Search" },
        { label: "Model Basis", value: "Transformer LLMs" },
        { label: "Context Window", value: "Multi-Doc Index" }
      ],
      details: {
        problem: "Legal document analysis and case precedence search require hours of manual indexing across dense statutory corpora.",
        solution: "Engineered a semantic retrieval pipeline that extracts key clauses, generates concise case summaries, and resolves statutory cross-references with citations.",
        keyFeatures: [
          "Semantic chunking and embedding of legal statutes and case documents",
          "Grounded RAG architecture preventing hallucinations in legal queries",
          "Interactive query interface with source citation drill-down",
          "Custom prompt templates tailored for legal precedence synthesis"
        ]
      },
      chartKey: "exoplanet",
      featured: false
    },
    {
      id: "smart-task",
      title: "Smart Task Dashboard",
      year: "2026",
      category: "tools",
      categoryName: "Desktop Apps & Productivity",
      tagline: "Modern Desktop Task Intelligence & Productivity Application",
      summary: "Built a modern desktop productivity dashboard application with Electron.js, HTML5, CSS3, and JavaScript, featuring real-time task management, reminder schedules, automated cleaning, and desktop notifications.",
      image: "assets/smart-task.jpg",
      tools: ["Electron", "JavaScript", "HTML5", "CSS3", "LocalStorage", "Node.js"],
      githubUrl: "https://github.com/rathodsakshi290/smart-task-dashboard",
      liveUrl: null,
      metrics: [
        { label: "Architecture", value: "Electron Desktop" },
        { label: "Storage", value: "Persistent Offline" },
        { label: "Notification", value: "Native System" },
        { label: "Performance", value: "Lightweight (<50MB)" }
      ],
      details: {
        problem: "Busy data analysts and students require a fast, distraction-free desktop application to organize data pipelines, meeting deadlines, and project milestones.",
        solution: "Created an Electron-powered desktop application with a sleek dark aesthetic, instant scheduling, auto-delete completed filters, and local persistence.",
        keyFeatures: [
          "Desktop reminder notifications synchronized with OS native notification system",
          "Task priority tagging with due-date countdown clocks",
          "Automated garbage collection for completed pipeline tasks",
          "Zero-latency LocalStorage integration for 100% offline data safety"
        ]
      },
      chartKey: "metaAd",
      featured: false
    },
    {
      id: "aicte-genai",
      title: "AICTE GenAI & RAG Architecture Framework",
      year: "2025",
      category: "aiml",
      categoryName: "AI & Machine Learning",
      tagline: "Enterprise LLM Embeddings & Context Retrieval Framework",
      summary: "End-to-end practical AI and Data Analytics framework developed during the AICTE Edunet Foundation internship, implementing transformer architectures, vector databases, and semantic search.",
      image: "assets/exohabit-ai.jpg",
      tools: ["Python", "Jupyter Notebook", "PyTorch / Transformers", "Vector Search", "LLMs"],
      githubUrl: "https://github.com/rathodsakshi290/AICTE-Project",
      liveUrl: null,
      metrics: [
        { label: "Focus", value: "GenAI & RAG" },
        { label: "Internship", value: "AICTE Edunet" },
        { label: "Framework", value: "Jupyter & PyTorch" },
        { label: "Evaluation", value: "Top Grade Dist." }
      ],
      details: {
        problem: "Practical deployment of Generative AI requires structured data pipelines for fine-tuning, embeddings, and context-injected reasoning.",
        solution: "Built interactive Jupyter modules exploring transformer tokenization, vector cosine similarity indexes, and prompt orchestration.",
        keyFeatures: [
          "Hands-on implementation of contextual retrieval algorithms",
          "Comparative benchmark across diverse prompt engineering strategies",
          "Comprehensive documentation conforming to AICTE industry standards",
          "Validated data pipelines for structured NLP evaluation tasks"
        ]
      },
      chartKey: "exoplanet",
      featured: false
    }
  ],

  education: [
    {
      institution: "JD College of Engineering and Management",
      degree: "Bachelor of Technology in Artificial Intelligence",
      grade: "CGPA: 9.9 / 10",
      period: "2023 – 2027",
      location: "Nagpur, Maharashtra",
      badge: "Dean's Merit / Top Ranker",
      highlights: "Specializing in Data Analytics, Database Management Systems, Machine Learning, Statistical Inference, and Neural Networks.",
      icon: "graduation-cap"
    },
    {
      institution: "VMV Junior College",
      degree: "Higher Secondary Certificate (HSC)",
      grade: "71.50%",
      period: "2021 – 2023",
      location: "Nagpur, Maharashtra",
      badge: "Science Stream",
      highlights: "Core foundation in Higher Mathematics, Physics, Chemistry, and Computer Science fundamentals.",
      icon: "book-open"
    },
    {
      institution: "Saroj High School",
      degree: "Secondary School Certificate (SSC)",
      grade: "86.00%",
      period: "2020 – 2021",
      location: "Nagpur, Maharashtra",
      badge: "Distinction",
      highlights: "Graduated with honors and first-class distinction in Science & Mathematics.",
      icon: "award"
    }
  ],

  certifications: [
    {
      title: "Google Developer Group: Google Cloud Core Team Member",
      issuer: "Google Developer Groups",
      year: "Active Core Member",
      type: "Leadership & Community",
      badge: "Google Cloud",
      desc: "Serving as core team lead organizing cloud tech bootcamps, developer workshops, and hands-on Google Cloud solution days.",
      icon: "cloud"
    },
    {
      title: "Academic Excellence Award (CGPA 9.8/10 & 9.9/10)",
      issuer: "JD College of Engineering and Management",
      year: "2024 – 2025",
      type: "Academic Honors",
      badge: "Top Merit",
      desc: "Honored with the prestigious college Academic Excellence Award for securing top percentile ranks across consecutive semesters.",
      icon: "trophy"
    },
    {
      title: "AI-ML & Data Analytics Virtual Internship Certification",
      issuer: "Eduskill - AICTE",
      year: "2025",
      type: "Technical Certification",
      badge: "Govt / Industry",
      desc: "Comprehensive certification covering data analysis pipelines, predictive algorithms, model deployment, and statistical verification.",
      icon: "check-circle-2"
    },
    {
      title: "Deloitte Data Analytics Job Simulation",
      issuer: "Deloitte / Forage",
      year: "2025",
      type: "Job Simulation",
      badge: "Industry Verified",
      desc: "Completed real-world corporate analytics engagements: client data wrangling, forensic data inspection, executive dashboard storytelling, and business strategy presentations.",
      icon: "briefcase"
    }
  ],

  // Live Sandbox Chart Presets
  liveSandboxData: {
    metaAd: {
      title: "Meta Ad Campaign Performance (Live Simulation)",
      subtitle: "ROAS Multiplier vs. Conversion Rate across Ad Placements",
      type: "bar",
      labels: ["Retargeting IG", "Lookalike FB", "Broad Audience", "Story Ads", "Reels Video", "Catalog Sales"],
      datasets: [
        {
          label: "ROAS (Return on Ad Spend)",
          data: [4.8, 3.9, 2.7, 4.2, 5.1, 3.4],
          backgroundColor: "rgba(184, 134, 91, 0.8)",
          borderColor: "#966844",
          borderWidth: 2,
          borderRadius: 6
        },
        {
          label: "Conversion Rate (%)",
          data: [5.6, 4.1, 2.9, 4.8, 6.2, 3.8],
          backgroundColor: "rgba(92, 61, 41, 0.85)",
          borderColor: "#3d2719",
          borderWidth: 2,
          borderRadius: 6
        }
      ]
    },
    exoplanet: {
      title: "ExoHabitAI – Parameter Habitability Radar",
      subtitle: "Relative Habitability Index (%) compared against Earth Baseline",
      type: "radar",
      labels: ["Equilibrium Temp", "Planetary Radius", "Stellar Flux", "Orbital Eccentricity", "Host Star Mass", "Atmospheric Retention"],
      datasets: [
        {
          label: "Earth Standard",
          data: [100, 100, 100, 95, 100, 100],
          backgroundColor: "rgba(184, 134, 91, 0.25)",
          borderColor: "#b8865b",
          borderWidth: 2,
          pointBackgroundColor: "#b8865b"
        },
        {
          label: "Candidate Kepler-452b",
          data: [92, 110, 105, 88, 104, 96],
          backgroundColor: "rgba(92, 61, 41, 0.35)",
          borderColor: "#5c3d29",
          borderWidth: 2,
          pointBackgroundColor: "#5c3d29"
        }
      ]
    },
    sales: {
      title: "Motorola Smartphone Sales & Profit Growth",
      subtitle: "Monthly Revenue ($k) vs Gross Margin Percentage (%)",
      type: "line",
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Monthly Revenue ($k)",
          data: [65, 72, 88, 80, 95, 110, 104, 125, 138, 142, 168, 190],
          borderColor: "#b8865b",
          backgroundColor: "rgba(184, 134, 91, 0.15)",
          tension: 0.35,
          fill: true,
          borderWidth: 3,
          pointRadius: 4,
          pointHoverRadius: 7
        },
        {
          label: "Gross Profit Margin (%)",
          data: [28, 29, 31, 30, 33, 35, 34, 37, 39, 40, 42, 45],
          borderColor: "#4a3020",
          backgroundColor: "transparent",
          tension: 0.35,
          borderWidth: 2,
          borderDash: [5, 5],
          pointRadius: 3
        }
      ]
    }
  },

  // Interactive SQL & DAX Query Playground Simulation
  sqlDaxPlayground: [
    {
      id: "sql-roas",
      title: "Customer Segment ROAS & Margin Analysis",
      type: "SQL (PostgreSQL)",
      badge: "SQL Query",
      code: `WITH campaign_metrics AS (
  SELECT 
    c.campaign_id,
    c.channel,
    c.region,
    SUM(c.ad_spend) AS total_spend,
    SUM(o.revenue) AS gross_revenue,
    COUNT(DISTINCT o.order_id) AS total_orders
  FROM dim_campaigns c
  JOIN fact_orders o ON c.campaign_id = o.campaign_id
  WHERE c.date >= CURRENT_DATE - INTERVAL '90 days'
  GROUP BY 1, 2, 3
)
SELECT 
  channel,
  region,
  ROUND(gross_revenue / NULLIF(total_spend, 0), 2) AS calculated_roas,
  ROUND(total_spend / NULLIF(total_orders, 0), 2) AS blended_cac,
  RANK() OVER (PARTITION BY region ORDER BY gross_revenue DESC) AS region_rank
FROM campaign_metrics
ORDER BY calculated_roas DESC;`,
      explanation: "Calculates 90-day multi-channel ROAS and Customer Acquisition Cost (CAC) partitioned by sales territory with windowed rankings.",
      executionTime: "18.4 ms",
      headers: ["Channel", "Region", "Calculated ROAS", "Blended CAC ($)", "Region Rank"],
      rows: [
        ["Instagram Reels", "North America", "5.12x", "$14.20", "#1"],
        ["Facebook Lookalike", "Europe (EMEA)", "4.85x", "$18.60", "#1"],
        ["Instagram Story", "APAC", "4.20x", "$12.40", "#1"],
        ["Google Search", "North America", "3.90x", "$24.50", "#2"],
        ["Display Retargeting", "LATAM", "3.40x", "$16.80", "#1"]
      ]
    },
    {
      id: "dax-sales",
      title: "YoY Revenue Growth & Rolling 90-Day DAX Measure",
      type: "DAX (Power BI)",
      badge: "DAX Measure",
      code: `YoY Revenue Growth % = 
VAR CurrentRevenue = [Total Revenue]
VAR PriorYearRevenue = 
    CALCULATE(
        [Total Revenue],
        SAMEPERIODLASTYEAR('DimDate'[Date])
    )
VAR Rolling90DayAvg = 
    CALCULATE(
        AVERAGEX(
            DATESINPERIOD('DimDate'[Date], LASTDATE('DimDate'[Date]), -90, DAY),
            [Daily Revenue]
        )
    )
RETURN
    DIVIDE(CurrentRevenue - PriorYearRevenue, PriorYearRevenue, 0)`,
      explanation: "Advanced DAX pattern leveraging SAMEPERIODLASTYEAR and DATESINPERIOD time-intelligence functions for executive variance reporting.",
      executionTime: "4.2 ms (DAX Engine)",
      headers: ["Quarter / Period", "Current Revenue ($)", "Prior Year ($)", "YoY Growth (%)", "Rolling 90D Trend"],
      rows: [
        ["2026 Q1", "$190,450", "$142,000", "+34.1%", "Accelerating ↑"],
        ["2025 Q4", "$168,200", "$135,100", "+24.5%", "Steady Growth ↑"],
        ["2025 Q3", "$138,500", "$118,900", "+16.5%", "Positive ↑"],
        ["2025 Q2", "$110,000", "$98,400", "+11.8%", "Baseline"]
      ]
    },
    {
      id: "python-ml",
      title: "Random Forest Planetary Habitability Classifier",
      type: "Python (Scikit-Learn)",
      badge: "ML Pipeline",
      code: `from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import classification_report, roc_auc_score

# Feature Matrix & Preprocessing Pipeline
scaler = StandardScaler()
X_scaled = scaler.fit_transform(df[['radius_earth', 'orbital_period', 'insol_flux', 'teff_star']])
y = df['habitable_label']

# Model Initialization with Class Weight Balancing
clf = RandomForestClassifier(n_estimators=200, max_depth=12, class_weight='balanced', random_state=42)
clf.fit(X_train, y_train)

# Evaluation Benchmark
y_pred = clf.predict(X_test)
print(f"ROC-AUC Benchmark: {roc_auc_score(y_test, clf.predict_proba(X_test)[:, 1]):.4f}")`,
      explanation: "Production-ready machine learning pipeline with automated scaling, class balancing, and ROC-AUC benchmarking on NASA exoplanet datasets.",
      executionTime: "34.1 ms",
      headers: ["Target Candidate", "Habitability Score", "Classification", "Confidence", "Key Deciding Feature"],
      rows: [
        ["Kepler-452b", "0.942", "Potentially Habitable", "96.4%", "Insolation Flux (1.10 Earth)"],
        ["Proxima Centauri b", "0.891", "Habitable Zone", "91.8%", "Stellar Temperature Equilibrium"],
        ["TRAPPIST-1e", "0.915", "High Probability", "94.7%", "Planetary Radius (0.91 Earth)"],
        ["Kepler-22b", "0.784", "Super-Earth Candidate", "84.2%", "Atmospheric Retention Index"]
      ]
    }
  ]
};

if (typeof window !== "undefined") {
  window.portfolioData = portfolioData;
}
