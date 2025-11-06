import Link from "next/link";

export default function Home() {
  const stats = [
    {
      value: "706M+",
      label: "Individuals screened",
      detail: "Population-based risk assessment under NPCDCS and Ayushman Bharat HWC.",
    },
    {
      value: "101k",
      label: "Health & Wellness Centres",
      detail: "Operational community hubs providing NCD screening and continuity of care.",
    },
    {
      value: "768",
      label: "NCD District Clinics",
      detail: "Dedicated facilities delivering cancer, diabetes, CVD & stroke services.",
    },
    {
      value: "36",
      label: "States / UTs onboarded",
      detail: "Integrated reporting through the National NCD Portal and ABDM alignment.",
    },
  ];

  const programmePillars = [
    {
      title: "Early Detection & Screening",
      blurb:
        "Community-led screening through ASHAs, ANMs and NCD clinics to capture risk factors early.",
      highlights: [
        "Population-based screening via digital risk assessment apps",
        "Opportunistic screening at secondary and tertiary facilities",
        "Family health folders linked with Ayushman Bharat IDs",
      ],
    },
    {
      title: "Continuum of Care",
      blurb:
        "Standardised referral pathways, follow-up protocols, and supply chain support for chronic care.",
      highlights: [
        "National NCD registry for longitudinal case management",
        "Essential drug & diagnostics mapping for every facility tier",
        "Tele-oncology & Tele-Cardiology support for remote districts",
      ],
    },
    {
      title: "Health Promotion",
      blurb:
        "Campaigns driving lifestyle modification, tobacco control, and community mobilisation at scale.",
      highlights: [
        "Eat Right India, Fit India Movement, and school health programmes",
        "Mass awareness drives on hypertension and diabetes control",
        "Integration with Jan Andolan for TB and multi-sectoral action",
      ],
    },
  ];

  const digitalStack = [
    {
      name: "National NCD Portal",
      description:
        "Unified reporting across sub-centres, PHCs, CHCs and district hospitals with cohort tracking and dashboards.",
      features: [
        "Role-based data capture with offline sync",
        "Automatic risk stratification and follow-up alerts",
        "Analytics for programme managers at state and national levels",
      ],
    },
    {
      name: "ABDM Integration",
      description:
        "Linking Ayushman Bharat Health Accounts (ABHA) with NCD services to enable portability of records.",
      features: [
        "Health facility registry seeding for all NPCDCS units",
        "Digital prescriptions and lab results exchange",
        "Consent-based data sharing with private providers",
      ],
    },
    {
      name: "Telemedicine & eSanjeevani",
      description:
        "Specialist support for oncology, cardiology and endocrinology delivered virtually to peripheral facilities.",
      features: [
        "Tele-consultation pods at district hospitals",
        "Training for medical officers on remote case management",
        "IT-enabled referral closure and feedback loops",
      ],
    },
  ];

  const knowledgePacks = [
    {
      category: "Guideline",
      title: "Operational Guidelines – NPCDCS",
      summary:
        "Detailed framework for implementing screening, diagnosis, treatment, and health promotion components.",
      href: "https://ncd.mohfw.gov.in/assets/pdf/NPCDCS_OperationalGuidelines.pdf",
    },
    {
      category: "Toolkit",
      title: "Healthy Lifestyle Communication Suite",
      summary:
        "IEC creatives and community facilitation guides for campaigns around physical activity, diet, and tobacco control.",
      href: "https://ncd.mohfw.gov.in/iec-material",
    },
    {
      category: "Dashboard",
      title: "State Programme Monitoring",
      summary:
        "Performance dashboards with quarterly trends, gap analysis, and comparative insights across states/UTs.",
      href: "https://ncd.mohfw.gov.in/state-dashboard",
    },
  ];

  const implementationTimeline = [
    {
      year: "2010 – 2013",
      milestone:
        "NPCDCS launched with focus on cancer, diabetes, CVD & stroke; initial rollout across 100 districts.",
    },
    {
      year: "2014 – 2017",
      milestone:
        "Expansion to 640+ districts, incorporation of community-level screening and comprehensive health promotion.",
    },
    {
      year: "2018 – 2020",
      milestone:
        "Integration with Ayushman Bharat Health & Wellness Centres; national NCD portal deployed for digital tracking.",
    },
    {
      year: "2021 – Present",
      milestone:
        "ABDM alignment, telemedicine scale-up, cancer screening via National Cancer Grid, and nationwide workforce skilling.",
    },
  ];

  const stateSpotlights = [
    {
      state: "Kerala",
      impact:
        "Achieved >90% population-based screening coverage; digital decision support linked to family health surveys.",
    },
    {
      state: "Gujarat",
      impact:
        "Introduced tele-ECG and HbA1c testing at PHCs, resulting in 36% improvement in glycaemic control follow-ups.",
    },
    {
      state: "Tamil Nadu",
      impact:
        "Cancer screening vans with remote reporting; integrated oncology clinics at district hospitals covering 100% districts.",
    },
    {
      state: "Assam",
      impact:
        "Hybrid telemedicine network serving riverine islands; 24/7 call centres guiding referral and medicine adherence.",
    },
  ];

  const quickLinks = [
    { label: "Request Technical Assistance", href: "mailto:ncdcell-mohfw@gov.in" },
    { label: "View National Dashboard", href: "https://ncd.mohfw.gov.in/reports" },
    { label: "Access Training Academy", href: "https://elearning.nhp.gov.in/" },
    { label: "Download Programme Data Set", href: "https://data.gov.in/resources?q=ncd" },
  ];

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.32),transparent_55%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.3),transparent_52%)]" />
      <header className="relative z-10 border-b border-white/10 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-8 pt-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/20 text-lg font-semibold text-sky-200">
              NCD
            </span>
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-sky-200">
                Ministry of Health & Family Welfare · Government of India
              </p>
              <h1 className="text-xl font-semibold leading-tight text-white lg:text-2xl">
                National Programme for Prevention and Control of Non-Communicable Diseases
              </h1>
            </div>
          </div>
          <nav className="flex flex-wrap gap-3 text-sm font-medium text-slate-200">
            {quickLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full border border-white/20 px-4 py-2 transition hover:border-sky-300 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <section className="radial-mask">
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-16 lg:flex-row lg:items-center">
            <div className="max-w-xl space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-sky-200">
                Transforming NCD Care Nationwide
              </span>
              <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                Screening, treatment, and health promotion for every Indian – powered by digital public goods.
              </h2>
              <p className="text-lg text-slate-200">
                This programme hub surfaces insights, toolkits, and implementation support aligned with{" "}
                <span className="font-semibold text-sky-100">
                  NPCDCS, Ayushman Bharat Health & Wellness Centres, and ABDM
                </span>{" "}
                to accelerate outcomes on diabetes, hypertension, cancers, and lifestyle-related diseases.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <Link
                  href="https://ncd.mohfw.gov.in"
                  className="rounded-full bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300"
                >
                  Explore Official Portal
                </Link>
                <Link
                  href="https://main.mohfw.gov.in/"
                  className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-sky-200"
                >
                  MOHFW Initiatives
                </Link>
              </div>
            </div>
            <div className="relative w-full max-w-md shrink-0">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-sky-400/50 via-blue-500/40 to-emerald-300/40 blur-3xl opacity-75" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-sm text-slate-200">
                  <p className="text-xs uppercase tracking-wider text-sky-200">
                    Integrated Care Journey
                  </p>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-400/30 text-xs font-semibold text-white">
                        1
                      </span>
                      <div>
                        <p className="font-semibold text-white">Community Screening</p>
                        <p>Risk assessment through ASHAs & ANMs using digital tools.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-400/30 text-xs font-semibold text-white">
                        2
                      </span>
                      <div>
                        <p className="font-semibold text-white">Referral & Diagnosis</p>
                        <p>Facility-based confirmation, diagnostics, and staging protocols.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-400/30 text-xs font-semibold text-white">
                        3
                      </span>
                      <div>
                        <p className="font-semibold text-white">Continuum of Care</p>
                        <p>Follow-up plans with telemedicine support and adherence tracking.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-white/5">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_60px_rgba(125,211,252,0.08)] transition hover:border-sky-200/70"
                >
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-sky-200">
                    {stat.label}
                  </p>
                  <p className="mt-4 text-sm text-slate-200">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900/60">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
              <div className="max-w-lg">
                <h3 className="text-3xl font-semibold text-white">Programme Pillars</h3>
                <p className="mt-4 text-slate-200">
                  NPCDCS orchestrates multi-tiered action, weaving preventive, promotive, and curative
                  services across the public health network. The following pillars guide implementation.
                </p>
              </div>
              <div className="grid flex-1 gap-8">
                {programmePillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-3xl border border-white/10 bg-slate-950/60 p-8 shadow-[0_0_60px_rgba(14,165,233,0.12)]"
                  >
                    <h4 className="text-xl font-semibold text-white">{pillar.title}</h4>
                    <p className="mt-3 text-sm text-slate-200">{pillar.blurb}</p>
                    <ul className="mt-6 space-y-3 text-sm text-slate-100">
                      {pillar.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-sky-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-slate-900/70 via-slate-950 to-slate-950">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h3 className="text-3xl font-semibold text-white">Digital Infrastructure Stack</h3>
                <p className="mt-4 text-slate-200">
                  Technology underpins accountability, continuity of care, and programme scale. These core
                  platforms anchor NCD service delivery across the country.
                </p>
                <div className="mt-10 space-y-6">
                  {digitalStack.map((platform) => (
                    <div
                      key={platform.name}
                      className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:border-sky-200/80"
                    >
                      <p className="text-sm font-semibold uppercase tracking-wider text-sky-200">
                        {platform.name}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">{platform.description}</p>
                      <ul className="mt-4 space-y-3 text-sm text-slate-200">
                        {platform.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <aside className="rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-[0_0_50px_rgba(96,165,250,0.18)]">
                <p className="text-sm font-semibold uppercase tracking-widest text-sky-200">
                  Capacity Building
                </p>
                <h4 className="mt-3 text-2xl font-semibold text-white">
                  Up-skilling health teams for comprehensive care
                </h4>
                <p className="mt-4 text-sm text-slate-200">
                  Masterclasses with AIIMS & National Cancer Grid, blended learning programmes via
                  National Institute of Health & Family Welfare, and just-in-time job aids hosted on the
                  NCD Academy mobile app.
                </p>
                <div className="mt-8 space-y-4 text-sm">
                  <p className="font-semibold text-sky-100">
                    Core modules available in 12 regional languages for:
                  </p>
                  <ul className="space-y-3 text-slate-100">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                      Medical officers and staff nurses posted at HWCs and CHCs.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                      ANMs, MPWs and ASHAs trained on community-based screening and counselling.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                      Programme managers and data handlers on quality assurance of reporting.
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-white/5">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <h3 className="text-3xl font-semibold text-white">Implementation Journey</h3>
                <p className="mt-4 text-slate-200">
                  The programme has evolved with lessons from state pilots, global evidence, and ecosystem
                  partnerships to drive measurable impact across the continuum of care.
                </p>
                <div className="mt-8 space-y-6">
                  {implementationTimeline.map((item) => (
                    <div
                      key={item.year}
                      className="rounded-2xl border border-white/10 bg-slate-950/70 p-6 shadow-[0_0_45px_rgba(14,165,233,0.15)]"
                    >
                      <p className="text-sm font-semibold uppercase tracking-wider text-sky-200">
                        {item.year}
                      </p>
                      <p className="mt-2 text-sm text-slate-100">{item.milestone}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-emerald-200">
                  State Spotlights
                </p>
                <div className="mt-6 space-y-6">
                  {stateSpotlights.map((spotlight) => (
                    <div key={spotlight.state} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-base font-semibold text-white">{spotlight.state}</p>
                      <p className="mt-2 text-sm text-slate-100">{spotlight.impact}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-2xl border border-emerald-300/40 bg-emerald-500/10 p-6 text-sm text-emerald-100">
                  <p className="font-semibold text-emerald-200">Looking to scale best practices?</p>
                  <p className="mt-2">
                    Share your implementation story with the National NCD Cell to be featured in the quarterly
                    compendium.
                  </p>
                  <Link
                    href="mailto:ncdcell-mohfw@gov.in?subject=NPCDCS%20Implementation%20Showcase"
                    className="mt-4 inline-flex items-center gap-2 font-semibold text-white underline decoration-emerald-300/70 decoration-2 underline-offset-4 transition hover:text-emerald-50"
                  >
                    Submit a case study →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-slate-950/80">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
              <div className="max-w-md">
                <h3 className="text-3xl font-semibold text-white">Knowledge Centre</h3>
                <p className="mt-4 text-slate-200">
                  Access validated resources, operational playbooks, and data insights curated by the Ministry
                  and its technical partners to accelerate programme execution.
                </p>
              </div>
              <div className="grid flex-1 gap-6 sm:grid-cols-2">
                {knowledgePacks.map((pack) => (
                  <Link
                    key={pack.title}
                    href={pack.href}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left transition hover:border-sky-200/80 hover:bg-white/10"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
                      {pack.category}
                    </p>
                    <p className="mt-3 text-lg font-semibold text-white">{pack.title}</p>
                    <p className="mt-3 text-sm text-slate-200">{pack.summary}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-100">
                      View resource →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-white">Non-Communicable Diseases Cell</p>
            <p>
              Directorate General of Health Services, Ministry of Health & Family Welfare, Government of India.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://ncd.mohfw.gov.in/contact-us"
              className="rounded-full border border-white/15 px-5 py-2 transition hover:border-sky-200 hover:text-white"
            >
              Contact
            </Link>
            <Link
              href="https://main.mohfw.gov.in/about-us"
              className="rounded-full border border-white/15 px-5 py-2 transition hover:border-sky-200 hover:text-white"
            >
              About the Ministry
            </Link>
            <Link
              href="https://ncd.mohfw.gov.in/privacy-policy"
              className="rounded-full border border-white/15 px-5 py-2 transition hover:border-sky-200 hover:text-white"
            >
              Policies
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
