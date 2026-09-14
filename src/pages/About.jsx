import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SiteMascot from '../components/SiteMascot'
import illustration from '../assets/images/about-illustration.png'
import profilePhoto from '../assets/images/about-profile.png'
import groupPhoto from '../assets/images/about-group-photo.png'
import dogPhoto from '../assets/images/about-dog-photo.png'
import '../styles/siteFrame.css'
import './About.css'

function About() {
  return (
    <div className="about-page">
      <div className="site-fixed-header site-fixed-header--transparent">
        <SiteHeader activeNav="About" />
      </div>

      <section className="about-hero">
        <div className="about-hero__caption about-hero__caption--designer">
          <p className="about-hero__caption-title">
            <strong>The designer</strong> <span>(noun)</span>
          </p>
          <p className="about-hero__caption-desc">
            A problem-solver who takes responsibility for how systems affect people. Balances logic, empathy, and
            constraints to make decisions that are clear, intentional, and hold up in real use.
          </p>
        </div>

        <div className="about-hero__caption about-hero__caption--heart">
          <p className="about-hero__caption-title">
            <strong>Heart</strong> <span>(noun)</span>
          </p>
          <p className="about-hero__caption-desc">
            Understands people beyond data. Recognizes confusion, context, and behavior, ensuring solutions are not
            just usable, but meaningful and trustworthy.
          </p>
        </div>

        <div className="about-hero__caption about-hero__caption--brain">
          <p className="about-hero__caption-title">
            <strong>Brain</strong> <span>(noun)</span>
          </p>
          <p className="about-hero__caption-desc">
            Understands systems, patterns, and edge cases. Breaks down complexity, questions assumptions, and brings
            structure to decisions.
          </p>
        </div>

        <img
          className="about-hero__illustration"
          src={illustration}
          alt="Illustration of a woman with a lightbulb head, wired to a heart and a brain"
        />
      </section>

      <article className="about-article">
        <header className="about-article__intro">
          <img className="about-avatar" src={profilePhoto} alt="Portrait of Sangavi Ramesh" />
          <p className="about-eyebrow">ABOUT ME</p>
        </header>

        <h2 className="about-heading">I didn&rsquo;t start with interfaces.</h2>

        <p className="about-body">
          I started with observation. Watching how people struggle, adapt, and make decisions in everyday systems.
        </p>
        <p className="about-body">
          Coming from Architecture, I was trained to think in structure. But over time, I became more interested in
          people, their behavior, confusion, and the small moments where design either helps or fails.
          <br />
          <br />
          <span className="about-emphasis">That shift led me to User Experience Design.</span>
        </p>

        <figure className="about-figure">
          <img
            className="about-figure__image"
            src={groupPhoto}
            alt="Sangavi Ramesh with a group of women artisans"
          />
          <figcaption className="about-figure__caption">Artifacts, 2026</figcaption>
        </figure>

        <p className="about-body">
          Today, I work as a UX and Interaction Designer, focusing on designing systems that are clear, usable, and
          grounded in real-world context.
        </p>
        <p className="about-body">
          My work often begins where things are unclear, overcrowded information, low trust, poor decision-making,
          or broken flows.
        </p>
        <p className="about-body">
          Most of my work begins in places where there is friction, too much information, unclear flows, low trust,
          or difficulty in decision-making.
        </p>
        <p className="about-body about-emphasis about-emphasis--block">
          I don&rsquo;t try to remove complexity entirely.
          <br />I try to make it understandable.
        </p>

        <hr className="about-divider" />

        <blockquote className="about-pullquote">
          When I design, I focus on how a system guides,
          <br />
          not just how it looks.
        </blockquote>

        <hr className="about-divider" />

        <p className="about-body">
          I often find myself asking:{' '}
          <span className="about-emphasis">
            What would this feel like to use when someone is tired, unsure, or under pressure?
          </span>
        </p>

        <p className="about-eyebrow about-eyebrow--section">THE APPROACH</p>
        <h2 className="about-heading">How I work?</h2>

        <p className="about-body">
          I&rsquo;m organized: not in a rigid way, but in a way that helps me manage complexity. I value clear
          structures, thoughtful documentation, and designs that others can easily understand and build on.
        </p>
        <p className="about-body">
          <span className="about-emphasis">I adapt as things evolve.</span>
          <br />
          <br />
          Many of the problems I&rsquo;ve worked on have changed midway, and I&rsquo;m comfortable revisiting
          assumptions when new insights emerge. I don&rsquo;t get attached to solutions,{' '}
          <em className="about-emphasis-soft">I stay committed to clarity.</em>
        </p>
        <p className="about-body">
          Mindfulness plays a quiet role in how I design. I pay attention to cognitive load, pacing, and when a
          system should step back instead of demanding attention.
        </p>
        <p className="about-body">
          Sometimes, <em className="about-emphasis-soft">the best interaction is the one that stays out of the way.</em>
        </p>

        <figure className="about-figure about-figure--dog">
          <img className="about-figure__image about-figure__image--dog" src={dogPhoto} alt="Pixel the beagle mid-run" />
          <figcaption className="about-figure__caption about-figure__caption--center">
            Energy. Curiosity. Loyalty. Focus. Proactiveness.
            <br />
            What Pixel, my Beagle teaches me.
          </figcaption>
        </figure>

        <p className="about-eyebrow about-eyebrow--section">THE PHILOSOPHY</p>
        <h2 className="about-heading">What matters to me?</h2>
        <p className="about-body">
          I care about making systems feel calm, understandable, and genuinely helpful, especially in moments where
          people are learning, uncertain, or under pressure.
        </p>

        <blockquote className="about-pullquote about-pullquote--dark">
          I see design as a responsibility to reduce confusion, support decisions, and build systems people can
          trust.
        </blockquote>

        <p className="about-body">
          That&rsquo;s the thread across my work, making systems work better for real life.
        </p>

        <hr className="about-divider about-divider--footer about-divider--small" />

        <p className="about-signoff">
          Hyderabad, India
          <br />
          2026
        </p>
      </article>

      <div className="site-fixed-footer site-fixed-footer--transparent">
        <SiteFooter />
      </div>
      <SiteMascot />
    </div>
  )
}

export default About
