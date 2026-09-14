import { useRef } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SiteMascot from '../components/SiteMascot'
import FloatingPortfolioCTA from '../components/FloatingPortfolioCTA'
import ProjectSectionNav from '../components/ProjectSectionNav'
import useScrollReveal from '../hooks/useScrollReveal'
import '../styles/siteFrame.css'
import gaPresenterVideo from '../assets/images/covermitra/gia-presenter.mp4'
import adPoster from '../assets/images/covermitra/ad-poster.png'
import understandingProblem from '../assets/images/covermitra/understanding-problem.png'
import concept from '../assets/images/covermitra/concept.png'
import userJourney from '../assets/images/covermitra/user-journey.png'
import interactionFlow from '../assets/images/covermitra/interaction-flow.png'
import visualDesign from '../assets/images/covermitra/visual-design.png'
import './ProjectCoverMitra.css'

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'The problem' },
  { id: 'concept', label: 'Concept' },
  { id: 'journey', label: 'User journey' },
  { id: 'interaction-flow', label: 'Interaction flow' },
  { id: 'visual-design', label: 'Visual design' },
  { id: 'impact', label: 'Impact' },
  { id: 'reflection', label: 'Reflection' },
]

function ProjectCoverMitra() {
  const containerRef = useRef(null)
  useScrollReveal(containerRef, '.cm-reveal')

  return (
    <div className="cm-page" ref={containerRef}>
      <div className="site-fixed-header site-fixed-header--transparent">
        <SiteHeader activeNav="Portfolio" />
      </div>
      <ProjectSectionNav sections={SECTIONS} />

      <header className="cm-hero">
        <div className="cm-hero__intro">
          <p className="cm-hero__role">Interaction Design, Flow, Validation, Prototyping</p>
          <h1 className="cm-hero__title">
            Interactive digital insurance ad experiences for engagement
          </h1>
          <p className="cm-hero__subtitle">Covermitra &mdash; Interactive ad experience</p>
          <div className="cm-hero__timeline">
            <p className="cm-hero__timeline-label">Timeline</p>
            <p>March 2025 (2-day deliverable at KappaX.io)</p>
          </div>
        </div>
        <div className="cm-hero__stage">
          <div className="cm-hero__phone">
            <video
              className="cm-hero__video"
              src={gaPresenterVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
          </div>
          <div className="cm-hero__brand">
            <p className="cm-hero__brand-logo">
              <span className="cm-hero__brand-cover">COVER</span>
              <span className="cm-hero__brand-mitra">MITRA</span>
            </p>
            <p className="cm-hero__brand-tagline">Insure Peace of Mind</p>
            <p className="cm-hero__brand-caption">Website embedded interactive ad experience design.</p>
          </div>
        </div>
      </header>

      <main>
        <section id="overview" className="cm-section cm-reveal">
          <h2 className="cm-eyebrow">Overview</h2>
          <div className="cm-overview">
            <div className="cm-overview__text">
              <h3 className="cm-italic-head">Brief</h3>
              <p>
                Create an interactive Q&amp;A ad experience for CoverMitra to address low engagement and high
                drop-offs in traditional insurance ads by making information clearer, structured, and easier for
                users to understand and act on.
              </p>
              <h3 className="cm-italic-head">Why this matters?</h3>
              <p>
                <strong>Traditional insurance ads often rely on static information.</strong> They lack clarity,
                feel overwhelming, and fail to guide users, leading to high drop-offs and low conversion.
              </p>
              <h3 className="cm-italic-head">Constraints</h3>
              <ul>
                <li>Interaction limited to click-only inputs</li>
                <li>No typing, voice, or advanced interaction</li>
                <li>Had to work within ad-format limitations</li>
                <li>Designed for quick engagement and low attention span</li>
              </ul>
            </div>
            <img className="cm-overview__poster" src={adPoster} alt="The original CoverMitra display ad: 'Do you want to save upto Rs 10,000/- on your Car Insurance?' with a Contact Us CTA, offering an 85% discount on car insurance" />
          </div>
        </section>

        <section id="problem" className="cm-section cm-reveal">
          <img className="cm-visual" src={understandingProblem} alt="Understanding the Problem. Business challenges: high drop-off rates, low engagement, poor conversion, lack of brand familiarity, ineffective communication of complex insurance offerings. User challenges: overcrowded and complex information, limited understanding of insurance, low trust in digital ads, difficulty in making decisions, lack of guided support while exploring options" />
        </section>

        <section id="concept" className="cm-section cm-reveal">
          <img className="cm-visual" src={concept} alt="Concept sketch: Q&A-based interaction moving from a traditional in-person sales agent to an AI-driven interface where an agent named Gia speaks, answers, and guides the user through a pre-recorded video, followed by a four-panel storyboard of the interaction. Rooted from my home: insurance decisions are often built on trust and human interaction. Traditionally, people relied on agents who explained options, answered questions, and built confidence over time." />
        </section>

        <section id="journey" className="cm-section cm-reveal">
          <img className="cm-visual" src={userJourney} alt="User journey table across eight stages: Splash screen, Onboarding screen, Discover Covermitra, Explore services, Why Covermitra, Constant menu CTA, Get in touch, Completion, each mapped to user action, thoughts, emotion and design opportunity" />
        </section>

        <section id="interaction-flow" className="cm-section cm-reveal">
          <img className="cm-visual" src={interactionFlow} alt="Interaction flow diagram: Start, intro of Gia, Let's get started, What is Covermitra, would you like to explore more, explore services branching into Life, Health, Motor, Property and Corporate insurance, why choose Covermitra, vision and mission, how we work, contact us, end" />
          <div className="cm-flow-video">
            <video
              className="cm-flow-video__el"
              src={gaPresenterVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
            <p className="cm-caption">Gia, the AI-presented guide the interaction flow is built around.</p>
          </div>
        </section>

        <section id="visual-design" className="cm-section cm-reveal">
          <img className="cm-visual" src={visualDesign} alt="Seven phone screens of the final CoverMitra interactive ad: Gia's introduction, a menu of explore options, an explore-services navigation panel, what-is-Covermitra explanation, how CoverMitra simplifies insurance, an insurance-type picker, and why choose Covermitra" />
        </section>

        <section id="impact" className="cm-section cm-reveal">
          <h2 className="cm-eyebrow">Impact</h2>
          <div className="cm-pullquote">
            <p>Drove 15% lower bounce rate with guided Q/A, boosting clarity, trust and lead intent.</p>
          </div>
        </section>

        <section id="reflection" className="cm-section cm-reflection cm-reveal">
          <p className="cm-reflection__label">Learning</p>
          <div className="cm-reflection__box">
            <p>
              I learned to guide users gently, by simplifying steps, limiting choices and designing honest,
              trustful conversation.
            </p>
          </div>
          <hr className="cm-reflection__rule" />
          <p className="cm-reflection__signoff">Hyderabad, India</p>
          <p className="cm-reflection__signoff">2026</p>
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

export default ProjectCoverMitra
