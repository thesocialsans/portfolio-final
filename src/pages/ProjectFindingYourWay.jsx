import { useRef } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SiteMascot from '../components/SiteMascot'
import FloatingPortfolioCTA from '../components/FloatingPortfolioCTA'
import ProjectSectionNav from '../components/ProjectSectionNav'
import useScrollReveal from '../hooks/useScrollReveal'
import '../styles/siteFrame.css'
import heroBusPhoto from '../assets/images/finding-your-way/hero-bus-photo.png'
import finalScreensCloseup from '../assets/images/finding-your-way/final-screens-closeup.png'
import understandingTnstc from '../assets/images/finding-your-way/understanding-tnstc.png'
import missionGrid from '../assets/images/finding-your-way/mission-grid.png'
import kpiGrid from '../assets/images/finding-your-way/kpi-grid.png'
import stakeholderMap from '../assets/images/finding-your-way/stakeholder-map.png'
import heuristicEvaluation from '../assets/images/finding-your-way/heuristic-evaluation.png'
import journeyMapOldApp from '../assets/images/finding-your-way/journey-map-old-app.png'
import swotAnalysis from '../assets/images/finding-your-way/swot-analysis.png'
import competitorAnalysis from '../assets/images/finding-your-way/competitor-analysis.png'
import targetAudience from '../assets/images/finding-your-way/target-audience.png'
import surveyCharts from '../assets/images/finding-your-way/survey-charts.png'
import personas from '../assets/images/finding-your-way/personas.png'
import designDirection from '../assets/images/finding-your-way/design-direction.png'
import informationArchitecture from '../assets/images/finding-your-way/information-architecture.png'
import wireframeFlowFull from '../assets/images/finding-your-way/wireframe-flow-full.png'
import uiDesignFull from '../assets/images/finding-your-way/ui-design-full.png'
import './ProjectFindingYourWay.css'

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'context', label: 'Context' },
  { id: 'process', label: 'Process' },
  { id: 'understanding-tnstc', label: 'Understanding TNSTC' },
  { id: 'kpi', label: 'KPIs' },
  { id: 'ecosystem', label: 'Ecosystem' },
  { id: 'problem', label: 'The existing app' },
  { id: 'market-research', label: 'Market research' },
  { id: 'user-research', label: 'User research' },
  { id: 'personas', label: 'Personas' },
  { id: 'journey', label: 'User journey' },
  { id: 'design-direction', label: 'Design direction' },
  { id: 'ia', label: 'Architecture' },
  { id: 'wireframes', label: 'Wireframes' },
  { id: 'visual-design', label: 'Visual design' },
  { id: 'reflection', label: 'Reflection' },
]

function ProjectFindingYourWay() {
  const containerRef = useRef(null)
  useScrollReveal(containerRef, '.fy-reveal')

  return (
    <div className="fy-page" ref={containerRef}>
      <div className="site-fixed-header site-fixed-header--transparent">
        <SiteHeader activeNav="Portfolio" />
      </div>
      <ProjectSectionNav sections={SECTIONS} />

      <header id="overview" className="fy-hero">
        <p className="fy-hero__role">UX Design, Research, Synthesis, Prototyping</p>
        <h1 className="fy-hero__title">Designing for clarity in complex public systems</h1>
        <p className="fy-hero__subtitle">Improving usability in TNSTC app</p>
        <div className="fy-hero__timeline">
          <p className="fy-hero__timeline-label">Timeline</p>
          <p>4 weeks design case study</p>
        </div>
        <img className="fy-hero__image" src={finalScreensCloseup} alt="Close-up of the passenger information, book-your-bus-ticket and Chennai to Bangalore search screens" />
      </header>

      <main>
        <section id="context" className="fy-section fy-reveal">
          <p className="fy-eyebrow-small">The What?</p>
          <h2 className="fy-eyebrow">TNSTC app?</h2>
          <p>
            The Tamil Nadu state government&rsquo;s official public transportation app offers services for
            commuters to purchase bus tickets online to travel within and beyond Tamil Nadu. We attempted to
            understand this app to identify the problem areas and find relevant opportunities for design
            interventions.
          </p>
          <img className="fy-visual" src={heroBusPhoto} alt="A TNSTC bus on the road in Tamil Nadu" />
        </section>

        <section id="process" className="fy-section fy-reveal">
          <p className="fy-process-label">From Chaos to Creation</p>
          <h2 className="fy-process-title">My design process</h2>
        </section>

        <section id="understanding-tnstc" className="fy-section fy-reveal">
          <img className="fy-visual" src={understandingTnstc} alt="Understanding TNSTC: a state-owned public transport corporation formed in 1972, operating 21,000 buses, carrying 2.2 crore passengers, reaching 90% of the Tamil Nadu population" />
          <div className="fy-vision">
            <div className="fy-vision__label">
              <p className="fy-eyebrow-small">Secondary research</p>
              <h3 className="fy-italic-head">Vision</h3>
            </div>
            <div className="fy-vision__body">
              <blockquote>
                &ldquo;Make TNSTC buses affordable, people-centered and primary mode of transport for everyone in
                Tamil Nadu.&rdquo;
              </blockquote>
              <p>
                The Tamil Nadu State Transportation Corporation is the sole public transport provider in Tamil
                Nadu, serving urban, semi-urban, rural areas for people with varying socio-economic background.
              </p>
            </div>
          </div>
          <img className="fy-visual" src={missionGrid} alt="Mission: twelve points, from people-centered service delivery to intelligent transport systems and cultural integration" />
        </section>

        <section id="kpi" className="fy-section fy-reveal">
          <img className="fy-visual" src={kpiGrid} alt="Key performance indicator: ticket booking process, customer support, easy ticket cancellation, app updation, smooth onboarding, and real-time update" />
        </section>

        <section id="ecosystem" className="fy-section fy-reveal">
          <h2 className="fy-eyebrow">Ecosystem Mapping</h2>
          <dl className="fy-whatwhy">
            <dt>What?</dt>
            <dd>
              The ecosystem map is a synthetic representation capturing all the key roles that have an influence on
              the user, organisation and service environment.
            </dd>
            <dt>Why?</dt>
            <dd>Uncover existing gaps and identify valuable opportunities for synergies.</dd>
          </dl>
          <img className="fy-visual fy-visual--center" src={stakeholderMap} alt="Concentric stakeholder map: commuters, students and need-basis riders at the centre, surrounded by bus conductors, drivers, kiosk staff and the website, then IT, logistics, police and educational institutions, then product managers, executives and emergency services at the outer ring" />
        </section>

        <section id="problem" className="fy-section fy-reveal">
          <h2 className="fy-eyebrow">Existing app</h2>
          <img className="fy-visual" src={heuristicEvaluation} alt="Annotated screens of the existing TNSTC app flagging issues: no onboarding or social login, no bottom tab bar, outdated design, unclear fare breakdowns, no timers, and cluttered information" />
        </section>

        <section id="market-research" className="fy-section fy-reveal">
          <h3 className="fy-italic-head">SWOT analysis for Market research</h3>
          <img className="fy-visual" src={swotAnalysis} alt="SWOT analysis: strengths include a wide network and government support; weaknesses include ageing buses and limited technology adoption; opportunities include smart-city initiatives; threats include competition from private players and ride-hailing apps" />
          <h3 className="fy-italic-head">Competitor Analysis</h3>
          <img className="fy-visual" src={competitorAnalysis} alt="Competitor analysis of redBus, MakeMyTrip and Goibibo, comparing what works and what doesn't across each platform" />
        </section>

        <section id="user-research" className="fy-section fy-reveal">
          <img className="fy-visual" src={targetAudience} alt="Primary research, target audience: a wide range of economic backgrounds and age groups, from students to senior citizens, across rural and urban sectors" />
          <img className="fy-visual" src={surveyCharts} alt="Quantitative research - Surveys: to understand commuter behaviour, an online survey of 46 respondents was conducted from 7th to 21st December 2023, with six charts of results" />
        </section>

        <section id="personas" className="fy-section fy-reveal">
          <h2 className="fy-eyebrow">Qualitative research - Personas</h2>
          <p className="fy-section__intro">
            We covered the travel experience of every user group to understand and empathize with them better.
          </p>
          <img className="fy-visual" src={personas} alt="Three personas: Priya, a 22-year-old college student frustrated by queues and unreliable arrival times; Jeevan, a 38-year-old sales person who needs punctuality and cashless payment; Meena, a 58-year-old retired teacher who needs simpler navigation and priority seating" />
        </section>

        <section id="journey" className="fy-section fy-reveal">
          <h2 className="fy-eyebrow">User journey map</h2>
          <dl className="fy-whatwhy">
            <dt>What?</dt>
            <dd>A user journey map is a diagram that depict the stages users go through when interacting with a product or a service.</dd>
            <dt>Why?</dt>
            <dd>It helps us understand the journey of the user&rsquo;s experience with a product or a service across all touchpoints.</dd>
          </dl>
          <img className="fy-visual" src={journeyMapOldApp} alt="Journey map of downloading and using the existing TNSTC app, from entering as a guest through booking and payment, annotated with the commuter's reactions at each step" />
        </section>

        <section id="design-direction" className="fy-section fy-reveal">
          <img className="fy-visual" src={designDirection} alt="Design direction, Approaches: six design approaches - personalization, trustworthiness, accessibility and inclusivity, information transparency, efficient onboarding, and a user-friendly experience" />
        </section>

        <section id="ia" className="fy-section fy-reveal">
          <h2 className="fy-eyebrow">Information Architecture</h2>
          <img className="fy-visual" src={informationArchitecture} alt="Information architecture tree: Splash screen, Onboarding, Mobile or email signup, branching into Home screen, Bus details, My bookings and More, each with their own sub-sections" />
        </section>

        <section id="wireframes" className="fy-section fy-reveal">
          <h2 className="fy-eyebrow">Wireframes</h2>
          <p className="fy-section__intro">Ideation</p>
          <img className="fy-visual" src={wireframeFlowFull} alt="Full annotated wireframe flow: home screen with search fields, recent searches, bus ticket status and popular destinations, through bus availability, seat selection, pickup and drop-off point, coupons and offers, passenger information, payment method, to the final e-ticket" />
        </section>

        <section id="visual-design" className="fy-section fy-reveal">
          <img className="fy-visual fy-visual--full" src={uiDesignFull} alt="UI Design, Visual Design: typography (Plus Jakarta Sans in heavy, bold, medium and regular weights), color (primary slate green and comet, secondary tuna, sky, terracotta and sand), iconography (linear thick-lined icon set), and design delivery with the final home screen, bus availability, seat selection, passenger detail, offer screen, payment screen and e-ticket" />
        </section>

        <section id="reflection" className="fy-section fy-reflection fy-reveal">
          <p className="fy-reflection__label">Learning</p>
          <div className="fy-reflection__box">
            <p>
              This project taught me that meaningful design begins by listening deeply - not just to users, but to
              context. Research shaped every decision, and empathy guided every screen.
            </p>
          </div>
          <hr className="fy-reflection__rule" />
          <p className="fy-reflection__signoff">Hyderabad, India</p>
          <p className="fy-reflection__signoff">2026</p>
        </section>
      </main>

      <div className="site-fixed-footer site-fixed-footer--transparent">
        <SiteFooter />
      </div>
      <SiteMascot />
      <FloatingPortfolioCTA />
    </div>
  )
}

export default ProjectFindingYourWay
