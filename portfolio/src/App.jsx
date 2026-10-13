import { useState } from 'react'
import './App.css'

const projects = [
  { title: 'Merch by Lucius', type: 'Product platform', detail: 'A creator marketplace with role-aware auth, OTP verification, product review, and buyer dashboards.', stack: ['React', 'Node.js', 'MongoDB'], number: '01', accent: 'cobalt' },
  { title: 'Review Queue', type: 'Workflow system', detail: 'A moderation surface that turns raw submissions into clear, accountable approval decisions.', stack: ['Express', 'JWT', 'REST API'], number: '02', accent: 'coral' },
  { title: 'Learning Library', type: 'Content experience', detail: 'A responsive browsing experience built for scanning, filtering, and returning to useful resources.', stack: ['React', 'CSS', 'Vite'], number: '03', accent: 'lime' },
]

const skills = ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Authentication', 'Responsive UI']

function App() {
  const [activeFilter, setActiveFilter] = useState('All work')
  const filters = ['All work', 'Product', 'Systems']
  const visibleProjects = activeFilter === 'All work' ? projects : projects.filter((project) => activeFilter === 'Product' ? project.type === 'Product platform' : project.type === 'Workflow system')

  return (
    <main>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="wordmark" href="#top">LUCIUS<span>/DEV</span></a>
        <div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#approach">Approach</a><a href="#contact">Contact</a></div>
        <a className="status-pill" href="mailto:hello@lucius.dev"><i /> Available for work</a>
      </nav>

      <section className="hero-section" id="top">
        <div className="hero-copy"><p className="eyebrow">FULL-STACK DEVELOPER <span>///</span> 2026</p><h1>Building the<br /><em>useful</em> web.</h1><p className="hero-lede">I turn ambitious product ideas into clear, resilient digital experiences, from the first database model to the last responsive detail.</p><div className="hero-actions"><a className="button button-dark" href="#work">See selected work <span>↓</span></a><a className="text-link" href="mailto:hello@lucius.dev">Start a conversation <span>↗</span></a></div></div>
        <div className="system-card" aria-label="Developer system map"><div className="system-top"><span>system_map.exe</span><span>01 / 04</span></div><div className="orbit orbit-one"><span>API</span></div><div className="orbit orbit-two"><span>UI</span></div><div className="core-node"><b>FULL<br />STACK</b><small>lucius.dev</small></div><div className="system-label label-one">01 &nbsp; Model the problem</div><div className="system-label label-two">02 &nbsp; Shape the system</div><div className="system-label label-three">03 &nbsp; Ship with care</div><div className="system-footer"><span>STATUS: ONLINE</span><span>LATENCY: LOW</span></div></div>
      </section>

      <section className="marquee" aria-label="Capabilities"><div>PRODUCT THINKING <span>✳</span> CLEAN CODE <span>✳</span> HUMAN INTERFACES <span>✳</span> PRODUCT THINKING <span>✳</span> CLEAN CODE <span>✳</span></div></section>

      <section className="content-section work-section" id="work"><div className="section-heading"><div><p className="eyebrow">SELECTED WORK</p><h2>Things I have<br /><em>made useful.</em></h2></div><div className="filter-tabs" role="group" aria-label="Filter projects">{filters.map((filter) => <button key={filter} className={activeFilter === filter ? 'active' : ''} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div></div><div className="project-grid">{visibleProjects.map((project) => <article className={`project-card ${project.accent}`} key={project.title}><div className="project-visual"><span className="project-number">{project.number}</span><div className="visual-lines"><b>{project.type.toUpperCase()}</b><span>→</span></div><div className="visual-bars"><i /><i /><i /></div></div><div className="project-meta"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.detail}</p><div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div></article>)}</div></section>

      <section className="content-section about-section" id="about"><div><p className="eyebrow">A LITTLE ABOUT ME</p><h2>Curious by<br /><em>default.</em></h2></div><div className="about-copy"><p>I’m Lucius, a full-stack developer who enjoys turning complex requirements into products that feel simple to use. I work across the interface and the infrastructure behind it, with a particular interest in authentication, marketplaces, and thoughtful workflows.</p><p>When I’m away from the editor, I’m usually learning something new, refining an idea, or looking for a better way to explain a technical problem.</p><a className="text-link" href="#contact">Let’s build something useful <span>↗</span></a></div></section>

      <section className="content-section split-section" id="approach"><div><p className="eyebrow">HOW I WORK</p><h2>Good software<br />feels <em>inevitable.</em></h2></div><div className="approach-copy"><p>I like the part where a messy idea becomes a calm interface. My work lives at the intersection of product judgment, dependable backend systems, and the small details that make people trust what they are using.</p><div className="skill-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div></section>

      <section className="contact-section" id="contact"><div><p className="eyebrow">HAVE A PROJECT IN MIND?</p><h2>Let’s make it<br /><em>real.</em></h2></div><a className="contact-arrow" href="mailto:hello@lucius.dev">hello@lucius.dev <span>↗</span></a></section><footer><span>LUCIUS/DEV</span><span>Designed + built with intention</span><span>© 2026</span></footer>
    </main>
  )
}

export default App
