import { useEffect, useRef, useState } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SiteMascot from '../components/SiteMascot'
import FloatingPortfolioCTA from '../components/FloatingPortfolioCTA'
import ProjectSectionNav from '../components/ProjectSectionNav'
import useScrollReveal from '../hooks/useScrollReveal'
import '../styles/siteFrame.css'
import heroCoverTiled from '../assets/images/who-are-you-when-you-vote/hero-cover-tiled.png'
import aboutProjectPhoto from '../assets/images/who-are-you-when-you-vote/about-project-photo.png'
import crisisPhoto from '../assets/images/who-are-you-when-you-vote/crisis-photo.png'
import ambedkarIllustration from '../assets/images/who-are-you-when-you-vote/ambedkar-illustration.png'
import ambedkarBooksPhoto from '../assets/images/who-are-you-when-you-vote/ambedkar-books-photo.png'
import tessellationSketchesPattern from '../assets/images/who-are-you-when-you-vote/tessellation-sketches-pattern.png'
import tessellationGroup from '../assets/images/who-are-you-when-you-vote/tessellation-group.png'
import frameworkGrid from '../assets/images/who-are-you-when-you-vote/framework-grid.png'
import stampIllustration from '../assets/images/who-are-you-when-you-vote/stamp-illustration.png'
import stampBooksPhoto from '../assets/images/who-are-you-when-you-vote/stamp-books-photo.png'
import physicalPhotos from '../assets/images/who-are-you-when-you-vote/physical-photos.png'
import documentationSpreads from '../assets/images/who-are-you-when-you-vote/documentation-spreads-clean.png'
import './ProjectWhoAreYouWhenYouVote.css'

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'about-project', label: 'About the project' },
  { id: 'crisis', label: 'Crisis of agency' },
  { id: 'ambedkar', label: 'Ambedkar portrait' },
  { id: 'tessellation', label: 'Tessellation' },
  { id: 'framework', label: 'Framework' },
  { id: 'stamp', label: 'Stamp design' },
  { id: 'documentation', label: 'Documentation' },
  { id: 'reflection', label: 'Reflection' },
]

function ProjectWhoAreYouWhenYouVote() {
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const [overHero, setOverHero] = useState(true)
  const [overHeroAtBottom, setOverHeroAtBottom] = useState(true)
  useScrollReveal(containerRef, '.vt-reveal')

  useEffect(() => {
    const el = heroRef.current
    if (!el) return undefined
    const handleScroll = () => {
      const heroBottom = el.getBoundingClientRect().bottom
      setOverHero(heroBottom > 88)
      setOverHeroAtBottom(heroBottom > window.innerHeight - 90)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <div className="vt-page" ref={containerRef}>
      <div className="site-fixed-header site-fixed-header--transparent">
        <SiteHeader activeNav="Portfolio" onDark={overHero} />
      </div>
      <ProjectSectionNav sections={SECTIONS} />

      <header className="vt-hero" ref={heroRef} style={{ backgroundImage: `url(${heroCoverTiled})` }} />

      <main>
        <section id="overview" className="vt-section vt-intro vt-reveal">
          <div className="vt-intro__meta">
            <p className="vt-intro__role">Publication Design, Process, Prototyping, Model</p>
            <div className="vt-intro__timeline">
              <p className="vt-intro__timeline-label">Timeline</p>
              <p>February 2026 &ndash; April 2026</p>
            </div>
          </div>
          <h1 className="vt-intro__title">
            Who are you,
            <br />
            When you vote?
          </h1>
          <p className="vt-intro__subtitle">Understanding influence and designing for informed voting</p>
        </section>

        <section id="about-project" className="vt-section vt-reveal vt-serif-body">
          <h2 className="vt-heading vt-heading--serif">About the project</h2>
          <p>
            This project was developed as part of a publication design course at <strong>IIT Hyderabad</strong>,
            this project questions the idea that voting is a fully independent choice. It looks at how influencing
            media, identity, bias, societal or family opinions shapes what we think is &ldquo;our&rdquo; decision.
          </p>
          <p>
            The book uses bold illustrations, minimal text, and interactive reveals to expose these patterns and
            disrupt passive thinking. Each spread is designed to make the reader pause, question, and take
            responsibility for how they vote.
          </p>
          <p className="vt-meta-line"><strong>Genre:</strong> Political satire</p>
          <p className="vt-meta-line"><strong>Format:</strong> Editorial</p>
          <img className="vt-photo" src={aboutProjectPhoto} alt="Open spread of the Who Are You, When You Vote? book, showing an illustrated crowd cheering a film star turned politician" />
        </section>

        <section id="crisis" className="vt-section vt-reveal">
          <h2 className="vt-heading">The Crisis of Agency</h2>
          <p>
            In the noise of modern elections, the &ldquo;voter experience&rdquo; is often one of overwhelming
            mental models and cognitive biases. So I wanted to create a physical artifact or a book, that acts as a
            mirror, forcing the reader to confront how their &ldquo;independent&rdquo; choice is often a result of
            external engineering.
          </p>
          <div className="vt-pullquote">
            <p>We think we choose. But most of the time, we follow.</p>
          </div>
          <img className="vt-photo vt-photo--full" src={crisisPhoto} alt="Interactive pop-up spread of the book: a voter engulfed in confetti at a ballot box on one page, a red flag figure rising on the other" />
        </section>

        <section id="ambedkar" className="vt-section vt-reveal">
          <div className="vt-ambedkar">
            <div className="vt-ambedkar__left">
              <img className="vt-ambedkar__illustration" src={ambedkarIllustration} alt="A biometric portrait: the ridges of a thumbprint converging to reveal Dr. Ambedkar's silhouette" />
              <p>
                A biometric portrait where the lines of a thumbprint converge to reveal Dr.&nbsp;Ambedkar,
                symbolizing that the constitutional right to vote is etched into the very core of our individual
                identity.
              </p>
            </div>
            <img className="vt-ambedkar__photo" src={ambedkarBooksPhoto} alt="Stacked printed copies of Who Are You, When You Vote? with the thumbprint cover design" />
          </div>
        </section>

        <section id="tessellation" className="vt-section vt-reveal">
          <div className="vt-tessellation">
            <img className="vt-tessellation__dev" src={tessellationSketchesPattern} alt="Development sketches of a seated figure reading a newspaper, evolving into a repeating black, white and red tessellation pattern" />
            <div className="vt-tessellation__right">
              <img className="vt-tessellation__group" src={tessellationGroup} alt="The final tessellated figures grouped together, indistinguishable from one another" />
              <p>
                Repetition is the primary tool of cognitive conditioning. In this tessellation, individual identity
                is subsumed by a seamless, interlocking grid of inherited biases and societal expectations. It
                serves as a visual warning: when every thought feels like a perfect fit with the crowd, you are no
                longer thinking for yourself, you are merely completing the pattern.
              </p>
            </div>
          </div>
        </section>

        <section id="framework" className="vt-section vt-reveal">
          <h2 className="vt-heading">Conceptual Framework: The Anatomy of Influence</h2>
          <p>
            I categorized the forces acting on a voter into distinct &ldquo;Influence Archetypes.&rdquo; The book
            explores these through a narrative that moves from external pressure to the internal realization of
            consequence.
          </p>
          <img className="vt-framework-grid" src={frameworkGrid} alt="Nine illustrations, each depicting a different influence archetype acting on a voter: distraction, family pressure, faith, misinformation, and more" />
        </section>

        <section id="stamp" className="vt-section vt-reveal">
          <div className="vt-stamp-row">
            <p className="vt-stamp-row__text">
              I&rsquo;ve designed multiple custom stamps that act as institutional signatures, certifying the weight
              of systemic influence.
            </p>
            <img className="vt-stamp-row__illustration" src={stampIllustration} alt="A custom-designed red institutional stamp reading INDIAN? with a raised microphone and the hashtag Just Asking" />
            <img className="vt-stamp-row__photo" src={stampBooksPhoto} alt="Two printed copies of the book side by side, one showing the stamp motif on its cover" />
          </div>
        </section>

        <section id="documentation" className="vt-section vt-reveal">
          <h2 className="vt-heading vt-heading--serif">Documentation and printing</h2>
          <img className="vt-spreads" src={documentationSpreads} alt="All nine printed spreads of the Japanese-bound book laid out in sequence, from Are you thinking for yourself? to Will this choice affect your life?" />
          <img className="vt-photo vt-photo--full" src={physicalPhotos} alt="Photographs of the finished, printed book: on a woven fabric surface, the cover illustration on black, stacked copies, and a reader holding the book open" />
        </section>

        <section id="reflection" className="vt-section vt-reflection vt-reveal">
          <h2 className="vt-heading vt-heading--serif">Learning</h2>
          <div className="vt-reflection__box">
            <p>
              Design is not about making people choose; it is about making people realize how they have already
              been programmed to choose.
            </p>
          </div>
          <hr className="vt-reflection__rule" />
          <p className="vt-reflection__signoff">Hyderabad, India</p>
          <p className="vt-reflection__signoff">2026</p>
        </section>
      </main>

      <div className="site-fixed-footer site-fixed-footer--transparent">
        <SiteFooter onDark={overHeroAtBottom} />
      </div>
      <SiteMascot />
      <FloatingPortfolioCTA />
    </div>
  )
}

export default ProjectWhoAreYouWhenYouVote
