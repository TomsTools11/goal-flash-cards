import React from 'react';

export default function GOALPlatformResearchReport() {
  const companyProfile = [
    ['Company Name', 'Goal Platform, LLC'],
    ['Industry', 'Insurance Marketing Technology (InsurTech)'],
    ['Headquarters', 'Boston, MA, United States'],
    ['Founded', '2023'],
    ['Company Size', '11-50 employees'],
    ['Website', 'https://www.checkoutgoal.com'],
    ['Phone', '(877) 554-4461'],
  ];

  const coreOfferings = [
    {
      name: 'QuoteFunnel Forms',
      description: 'Optimized insurance quote request forms built by experts with 15+ years in insurance marketing. Can be embedded on websites, landing pages, email newsletters, social media ads, and marketing materials to capture high-intent insurance shoppers.'
    },
    {
      name: 'Done-For-You Advertising',
      description: 'Custom-branded ad campaigns across Google, Facebook, and proprietary GOAL Partner Traffic network reaching 10+ million high-intent insurance shoppers. Agents set their budget and targeting preferences while GOAL handles campaign execution.'
    },
    {
      name: 'Lead Routing & Validation',
      description: 'Automated lead delivery system with ESIGN consent capture and prospect validation. Fully integrated with popular CRMs for seamless workflow integration.'
    },
    {
      name: 'Analytics Dashboard',
      description: 'Comprehensive reporting on click-through rates, lead sources, and ROI. Provides full transparency on marketing spend and campaign performance.'
    },
    {
      name: 'Account Management',
      description: 'Dedicated account managers help agents optimize budgets and conversions, providing hands-on support for campaign setup and ongoing optimization.'
    }
  ];

  const differentiators = [
    'Exclusive leads sold to one agent only - eliminates competition from other agents calling the same prospect',
    'Claims 5x higher conversion rates versus traditional shared-lead sales funnels',
    'Pay-per-click model with flexible budget control - no long-term contracts',
    'Access to proprietary network of 10+ million high-intent insurance shoppers',
    'Full compliance stack: SOC2 Type 2, CMS, and TCPA compliant',
    'Cuts out middleman/aggregator lead sharing for direct agent-to-consumer connection'
  ];

  const competitors = [
    {
      name: 'EverQuote',
      strengths: 'Market leader with 5M+ monthly unique shoppers, public company resources, established brand since 2014',
      differentiation: 'GOAL offers exclusive leads only vs. EverQuote\'s shared model; more personalized agent branding'
    },
    {
      name: 'SmartFinancial',
      strengths: 'Sophisticated matching algorithm, covers multiple insurance lines, founded by former insurance agent',
      differentiation: 'GOAL emphasizes done-for-you campaigns; SmartFinancial focuses on lead matching'
    },
    {
      name: 'QuoteWizard (LendingTree)',
      strengths: 'High volume, LendingTree backing, extensive partner network',
      differentiation: 'GOAL provides custom-branded funnels; QuoteWizard offers generic marketplace experience'
    },
    {
      name: 'Datalot',
      strengths: 'Real-time call transfers, verified prospects, inbound-focused model',
      differentiation: 'GOAL combines web form leads and calls with full funnel customization'
    },
    {
      name: 'HomeTownQuotes',
      strengths: 'Agent-centric customer service, established since 2003',
      differentiation: 'GOAL offers modern tech platform with advanced analytics and automation'
    }
  ];

  const useCases = [
    {
      title: 'Eliminating Shared Lead Competition',
      description: 'Insurance agents struggling with low conversion rates from shared leads use GOAL to generate their own exclusive leads. Exclusive leads convert at 20-30% vs. 2-5% for shared leads, dramatically improving ROI despite higher per-lead costs.'
    },
    {
      title: 'Scaling Without Marketing Expertise',
      description: 'Independent agents lacking digital marketing skills use GOAL\'s done-for-you advertising to run professional campaigns across Google and Facebook without needing to learn ad platforms or hire marketing staff.'
    },
    {
      title: 'Building Agency Brand Recognition',
      description: 'Agencies wanting to establish their own brand use custom-branded QuoteFunnels and ad creatives featuring their logo, creating a direct relationship with prospects rather than appearing as a faceless quote comparison site.'
    },
    {
      title: 'Managing Compliance Risk',
      description: 'Agents concerned about TCPA litigation and consent requirements rely on GOAL\'s SOC2 Type 2, CMS, and TCPA-compliant infrastructure to capture proper consent and validate prospects, reducing legal exposure.'
    },
    {
      title: 'Controlling Customer Acquisition Costs',
      description: 'Agents with variable budgets use GOAL\'s flexible pay-per-click model to scale campaigns up or down based on capacity, avoiding long-term contracts and fixed monthly fees.'
    }
  ];

  const marketTrends = [
    'Insurance lead generation market estimated at $5.2-6.8B in 2024, with strong recovery after pandemic-era hard market',
    'Shift toward exclusive lead models as agents recognize 3-5x better conversion rates',
    'Increased focus on compliance following TCPA one-to-one consent rule debates and 95% YoY increase in class action filings',
    'Digital-first insurance shopping accelerating with 10M+ consumers actively shopping online',
    'CRM integration becoming table stakes as agents demand seamless workflow automation'
  ];

  const growthOpportunities = [
    'Medicare segment growth with CMS requiring one-to-one consent for TPMOs',
    'Expansion into commercial and specialty insurance lines with higher policy values',
    'White-label partnerships with insurance carriers and IMOs/FMOs',
    'International expansion as insurance digitization accelerates globally'
  ];

  const challenges = [
    'Intense competition from well-funded public companies (EverQuote market cap, MediaAlpha scale)',
    'Regulatory uncertainty - TCPA rules continue evolving at federal and state levels',
    'Customer acquisition costs rising across digital advertising platforms',
    'Agent education required to shift mindset from buying cheap shared leads to investing in exclusive leads'
  ];

  const primaryKeywords = [
    'exclusive insurance leads', 'insurance lead generation', 'insurance marketing platform',
    'auto insurance leads', 'home insurance leads', 'life insurance leads', 'medicare leads',
    'insurance sales funnel', 'TCPA compliant leads', 'insurance CRM integration'
  ];

  const verticalKeywords = [
    'P&C insurance leads', 'health insurance leads', 'commercial insurance leads',
    'renters insurance leads', 'independent agent leads', 'captive agent marketing'
  ];

  const painPointKeywords = [
    'stop buying shared leads', 'insurance lead ROI', 'lead conversion rates',
    'eliminate lead competition', 'own your insurance leads', 'insurance marketing automation'
  ];

  const outreachAngles = [
    {
      title: 'The Exclusive Lead Advantage',
      description: 'Position around the 5x conversion rate claim: "Tired of racing other agents to the same prospect? GOAL generates leads exclusively for you, eliminating competition and boosting close rates from 5% to 25%."'
    },
    {
      title: 'Compliance Peace of Mind',
      description: 'Lead with regulatory protection: "With TCPA lawsuits up 95% YoY and penalties of $43,792 per violation, GOAL\'s SOC2/TCPA-compliant infrastructure protects your agency while generating qualified leads."'
    },
    {
      title: 'Done-For-You Marketing',
      description: 'Target agents without marketing resources: "No need to become a digital marketing expert. GOAL runs your Google and Facebook campaigns, builds your branded funnels, and delivers ready-to-close leads to your CRM."'
    },
    {
      title: 'Budget Flexibility',
      description: 'Appeal to cost-conscious agents: "Unlike vendors requiring $5K+ monthly commitments, GOAL\'s pay-per-click model scales with your capacity. Start small, prove ROI, then grow."'
    }
  ];

  const partnershipTargets = [
    {
      category: 'Insurance CRM Providers',
      rationale: 'Deeper integrations with AgencyZoom, HawkSoft, Applied Epic, and EZLynx to streamline lead-to-policy workflows and increase platform stickiness.'
    },
    {
      category: 'IMOs/FMOs/Aggregators',
      rationale: 'White-label GOAL\'s platform for downstream agents, creating recurring revenue and expanding market reach without direct sales costs.'
    },
    {
      category: 'Insurance Carriers',
      rationale: 'Offer GOAL as a recruiting/retention tool for captive and independent agent force development.'
    },
    {
      category: 'Agency Management Consultants',
      rationale: 'Partner with coaches and consultants serving independent agents who recommend lead generation solutions to their clients.'
    }
  ];

  const informationGaps = [
    'Specific pricing tiers and cost-per-lead ranges',
    'Total customer count and retention metrics',
    'Detailed breakdown of insurance lines served by volume',
    'Funding status and investor backing',
    'Named customer case studies with quantified results',
    'Executive team backgrounds and prior experience',
    'Geographic coverage and state licensing details'
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white min-h-screen font-sans text-gray-800">
      <style>{`
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .page-break-before { page-break-before: always; }
          .avoid-break { page-break-inside: avoid; }
          .no-print { display: none; }
        }
      `}</style>

      {/* Header */}
      <header className="bg-slate-800 text-white px-8 py-6">
        <p className="text-sm font-medium text-slate-300 uppercase tracking-wide mb-1">Account Research Report</p>
        <h1 className="text-3xl font-bold mb-4">GOAL Platform</h1>
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-300">
          <span><strong className="text-slate-100">Date:</strong> January 11, 2026</span>
          <span><strong className="text-slate-100">Source:</strong> checkoutgoal.com</span>
          <span><strong className="text-slate-100">Analyst:</strong> Claude AI</span>
        </div>
      </header>

      <main className="px-8 py-6 space-y-8">

        {/* Executive Summary */}
        <section>
          <h2 className="text-xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-4">
            Executive Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            GOAL Platform is a Boston-based insurance marketing technology company founded in 2023 that helps insurance agents generate their own exclusive leads through done-for-you digital advertising and custom-branded sales funnels. The platform differentiates from traditional lead vendors like EverQuote and SmartFinancial by offering exclusive leads sold to only one agent, claiming 5x higher conversion rates than shared lead models. GOAL operates in the $5-7B insurance lead generation market and targets independent and captive agents across auto, home, life, health, medicare, commercial, and renters insurance lines. With SOC2 Type 2, CMS, and TCPA compliance built into their infrastructure, they're well-positioned as regulatory scrutiny intensifies in the lead generation space.
          </p>
        </section>

        {/* Company Profile */}
        <section className="avoid-break">
          <h2 className="text-xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-4">
            Company Profile
          </h2>
          <div className="bg-slate-50 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {companyProfile.map(([label, value], i) => (
                  <tr key={label} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="py-3 px-4 font-semibold text-slate-700 w-1/3 border-b border-slate-100">
                      {label}
                    </td>
                    <td className="py-3 px-4 text-slate-600 border-b border-slate-100">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-slate-700 mb-2">Known Team Members</h3>
            <div className="flex flex-wrap gap-2">
              {['Chris Nashed', 'Tom Panos', 'Nick Stamboulis, MBA', 'Ella Jay'].map(name => (
                <span key={name} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Products & Services */}
        <section>
          <h2 className="text-xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-4">
            Products & Services
          </h2>

          <h3 className="text-lg font-semibold text-slate-700 mb-3">Core Offerings</h3>
          <div className="space-y-3 mb-6">
            {coreOfferings.map((offering) => (
              <div key={offering.name} className="avoid-break pl-4 border-l-4 border-blue-500 bg-blue-50/50 py-2 pr-3 rounded-r">
                <p className="font-semibold text-slate-800">{offering.name}</p>
                <p className="text-sm text-slate-600 mt-1">{offering.description}</p>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-slate-700 mb-3">Key Differentiators</h3>
          <div className="space-y-2 mb-6">
            {differentiators.map((diff, i) => (
              <div key={i} className="pl-4 border-l-4 border-emerald-500 py-1">
                <p className="text-slate-700">{diff}</p>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-slate-700 mb-3">Technology & Compliance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <div className="flex">
              <span className="font-semibold text-slate-600 w-32">Advertising:</span>
              <span className="text-slate-500">Google Ads, Facebook Ads, Proprietary Partner Network</span>
            </div>
            <div className="flex">
              <span className="font-semibold text-slate-600 w-32">Integrations:</span>
              <span className="text-slate-500">Major insurance CRMs (specific platforms not disclosed)</span>
            </div>
            <div className="flex">
              <span className="font-semibold text-slate-600 w-32">Security:</span>
              <span className="text-slate-500">SOC2 Type 2 Certified</span>
            </div>
            <div className="flex">
              <span className="font-semibold text-slate-600 w-32">Compliance:</span>
              <span className="text-slate-500">TCPA, CMS, ESIGN</span>
            </div>
          </div>
        </section>

        {/* Target Market */}
        <section>
          <h2 className="text-xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-4">
            Target Market
          </h2>

          <h3 className="text-lg font-semibold text-slate-700 mb-2">Primary Customer Segments</h3>
          <p className="text-slate-600 mb-4">
            Insurance agents and agencies seeking to generate exclusive, high-intent leads without the complexity of managing their own digital marketing campaigns. Targets both independent agents building their own book and captive agents looking to supplement carrier-provided leads.
          </p>

          <h3 className="text-lg font-semibold text-slate-700 mb-2">Insurance Lines Served</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Auto Insurance', 'Home Insurance', 'Life Insurance', 'Health Insurance', 'Medicare', 'Commercial Insurance', 'Renters Insurance'].map(vertical => (
              <span key={vertical} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                {vertical}
              </span>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-slate-700 mb-3">Buyer Personas</h3>
          <div className="space-y-3 mb-4">
            <div className="avoid-break pl-4 border-l-4 border-violet-500 py-1">
              <p className="font-semibold text-slate-800">Independent Insurance Agent</p>
              <p className="text-sm text-slate-600">Building their own book of business, frustrated with shared leads from traditional vendors, needs scalable customer acquisition without becoming a marketing expert.</p>
            </div>
            <div className="avoid-break pl-4 border-l-4 border-violet-500 py-1">
              <p className="font-semibold text-slate-800">Small Agency Owner</p>
              <p className="text-sm text-slate-600">Growing team of 2-10 agents, wants to provide quality leads to producers, concerned about compliance and legal exposure from third-party lead sources.</p>
            </div>
            <div className="avoid-break pl-4 border-l-4 border-violet-500 py-1">
              <p className="font-semibold text-slate-800">Medicare Specialist</p>
              <p className="text-sm text-slate-600">Navigating strict CMS regulations, needs one-to-one consent capture, focused on AEP/OEP seasonal campaigns with variable budget requirements.</p>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-slate-700 mb-2">Business Model</h3>
          <p className="text-slate-600">
            Pay-per-click model with flexible budget control. Agents set their own advertising budget and targeting preferences. No long-term contracts indicated. Revenue generated from advertising spend margin and/or platform fees. Offers free demos for prospect qualification.
          </p>
        </section>

        {/* Use Cases & Pain Points */}
        <section className="page-break-before">
          <h2 className="text-xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-4">
            Use Cases & Pain Points Addressed
          </h2>
          <div className="space-y-4">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="avoid-break pl-4 border-l-4 border-amber-500 bg-amber-50/50 py-2 pr-3 rounded-r">
                <p className="font-semibold text-slate-800">{useCase.title}</p>
                <p className="text-sm text-slate-600 mt-1">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Competitive Landscape */}
        <section>
          <h2 className="text-xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-4">
            Competitive Landscape
          </h2>

          <div className="avoid-break overflow-x-auto mb-6">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700 border-b border-slate-200">
                    Competitor
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700 border-b border-slate-200">
                    Key Strengths
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700 border-b border-slate-200">
                    GOAL's Differentiation
                  </th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((comp, i) => (
                  <tr key={comp.name} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-medium text-slate-800 border-b border-slate-100">
                      {comp.name}
                    </td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-100">
                      {comp.strengths}
                    </td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-100">
                      {comp.differentiation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-slate-700 mb-2">Competitive Positioning</h3>
          <p className="text-slate-600">
            GOAL positions as a challenger brand in the $5-7B insurance lead generation market dominated by public companies like EverQuote (2024 auto revenue ~$446M) and MediaAlpha. Their competitive moat centers on the exclusive lead model and done-for-you service, targeting agents who want premium leads and are willing to pay more for exclusivity. The 2023 founding date suggests they're still in early growth phase, competing on service quality and technology rather than scale.
          </p>
        </section>

        {/* Industry Dynamics */}
        <section>
          <h2 className="text-xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-4">
            Industry Dynamics
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold text-slate-700 mb-2">Market Trends</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {marketTrends.map((trend, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{trend}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-700 mb-2">Growth Opportunities</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {growthOpportunities.map((opp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>{opp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-700 mb-2">Challenges</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Recent Developments */}
        <section>
          <h2 className="text-xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-4">
            Recent Developments
          </h2>
          <div className="space-y-3">
            <div className="avoid-break pl-4 border-l-4 border-teal-500 py-1">
              <p className="font-semibold text-slate-800">
                <span className="text-teal-600">2023</span> — Company Founded
              </p>
              <p className="text-sm text-slate-600 mt-1">Goal Platform, LLC established in Boston with focus on insurance lead generation technology. Team includes members with 15+ years of insurance marketing industry experience.</p>
            </div>
            <div className="avoid-break pl-4 border-l-4 border-teal-500 py-1">
              <p className="font-semibold text-slate-800">
                <span className="text-teal-600">2024-2025</span> — Regulatory Landscape Shift
              </p>
              <p className="text-sm text-slate-600 mt-1">FCC's one-to-one consent rule struck down by 11th Circuit Court in January 2025, but GOAL's existing compliance infrastructure (SOC2, TCPA, CMS) positions them well as agents seek compliant lead sources amid rising litigation.</p>
            </div>
            <div className="avoid-break pl-4 border-l-4 border-teal-500 py-1">
              <p className="font-semibold text-slate-800">
                <span className="text-teal-600">2025</span> — Market Recovery
              </p>
              <p className="text-sm text-slate-600 mt-1">Insurance lead generation market rebounds strongly after pandemic-era hard market slump, with EverQuote's auto revenue nearly doubling to $446M. Favorable conditions for newer entrants like GOAL.</p>
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-4 italic">
            Note: No specific press releases, funding announcements, or partnership news found for GOAL Platform in 2024-2025.
          </p>
        </section>

        {/* Lead Generation Intelligence */}
        <section className="page-break-before">
          <h2 className="text-xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-4">
            Lead Generation Intelligence
          </h2>

          <h3 className="text-lg font-semibold text-slate-700 mb-3">Recommended Keywords</h3>
          <div className="space-y-4 mb-6">
            <div>
              <p className="text-sm font-semibold text-slate-600 mb-2">Primary Service Keywords</p>
              <div className="flex flex-wrap gap-2">
                {primaryKeywords.map(kw => (
                  <span key={kw} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-600 mb-2">Vertical Keywords</p>
              <div className="flex flex-wrap gap-2">
                {verticalKeywords.map(kw => (
                  <span key={kw} className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-600 mb-2">Pain Point Keywords</p>
              <div className="flex flex-wrap gap-2">
                {painPointKeywords.map(kw => (
                  <span key={kw} className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-slate-700 mb-3">Outreach Angles</h3>
          <div className="space-y-3 mb-6">
            {outreachAngles.map((angle) => (
              <div key={angle.title} className="avoid-break pl-4 border-l-4 border-indigo-500 bg-indigo-50/50 py-2 pr-3 rounded-r">
                <p className="font-semibold text-slate-800">{angle.title}</p>
                <p className="text-sm text-slate-600 mt-1">{angle.description}</p>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-slate-700 mb-3">Partnership Targets</h3>
          <div className="space-y-3">
            {partnershipTargets.map((target) => (
              <div key={target.category} className="avoid-break pl-4 border-l-4 border-rose-500 py-1">
                <p className="font-semibold text-slate-800">{target.category}</p>
                <p className="text-sm text-slate-600 mt-1">{target.rationale}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Information Gaps */}
        <section>
          <h2 className="text-xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-4">
            Information Gaps
          </h2>
          <p className="text-sm text-slate-500 mb-3">
            The following information was not publicly available during research:
          </p>
          <ul className="space-y-1 text-sm text-slate-600">
            {informationGaps.map((gap, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-slate-400">•</span>
                <span>{gap}</span>
              </li>
            ))}
          </ul>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-50 px-8 py-4 border-t border-slate-200">
        <p className="text-xs text-slate-500">
          This report was prepared for business development and sales intelligence purposes.
          All information is based on publicly available sources and is current as of January 11, 2026.
          Verify critical details before making business decisions.
        </p>
      </footer>
    </div>
  );
}
