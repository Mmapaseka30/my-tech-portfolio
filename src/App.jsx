import './App.css'

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <h2 className="logo">MK<span>.</span></h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-content">
          <p className="greeting">HELLO, I'M</p>

          <h1 className="hero-name">
            Mmapaseka Kgaka<span>.</span>
          </h1>

          <h2>
            <span className="blue-title">Software Developer &</span>
            <br />
            <span>Data Scientist</span>
          </h2>

          <p className="hero-description">
            I build software solutions, develop web applications
            and transform data into meaningful insights.
            Passionate about technology, innovation and solving
            real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore My Work →
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="social-links">

            <a
              href="https://github.com/Mmapaseka30"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/mmapaseka-kgaka-19a416337/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

          </div>
        </div>

        {/* Hero Visual */}
        <div className="hero-visual">
          <div className="visual-circle">
            <span>&lt;/&gt;</span>
          </div>

          <p>Building ideas into reality.</p>
        </div>

      </section>

      {/* About Section */}
      <section className="section" id="about">

        <p className="section-label">GET TO KNOW ME</p>

        <h2>
          About Me<span className="blue-dot">.</span>
        </h2>

        <p>
          I am an emerging technology professional with interests
          in software development, web technologies and data analytics.

          I enjoy creating practical applications, working with data
          and continuously expanding my technical knowledge.
        </p>

      </section>

      {/* Skills Section */}
      <section className="section" id="skills">

        <p className="section-label">MY EXPERTISE</p>

        <h2>
          Technical Skills<span className="blue-dot">.</span>
        </h2>

        <div className="skills-grid">

          {[
            'Python',
            'JavaScript',
            'React',
            'HTML5',
            'CSS3',
            'SQL',
            'Power BI',
            'Excel',
            'Git & GitHub'
          ].map(skill => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}

        </div>

      </section>

      {/* Projects Section */}
      <section className="section" id="projects">

        <p className="section-label">MY WORK</p>

        <h2>
          Featured Projects<span className="blue-dot">.</span>
        </h2>

        <div className="projects-grid">

          <div className="project-card">
            <span className="project-number">01</span>

            <h3>COVID-19 Dashboard</h3>

            <p>
              An interactive dashboard visualising COVID-19
              statistics across different countries.
            </p>

            <div className="tags">
              JavaScript · HTML · CSS
            </div>
          </div>

          <div className="project-card">
            <span className="project-number">02</span>

            <h3>Sales Analytics Dashboard</h3>

            <p>
              A business intelligence project analysing sales
              performance and generating insights.
            </p>

            <div className="tags">
              Power BI · Excel
            </div>
          </div>

          <div className="project-card">
            <span className="project-number">03</span>

            <h3>Python Data Analysis</h3>

            <p>
              Data exploration, cleaning and visualisation
              using Python.
            </p>

            <div className="tags">
              Python · Pandas · Matplotlib
            </div>
          </div>

        </div>

      </section>

      {/* Contact Section */}
      <section className="section contact-section" id="contact">

        <p className="section-label">GET IN TOUCH</p>

        <h2>
          Let's Build Something Great.
        </h2>

        <p>
          I'm interested in software development opportunities,
          internships, graduate programmes and collaborations.
        </p>

        <a
          href="mailto:mmapasekakgaka@gmail.com"
          className="primary-button"
        >
          Contact Me →
        </a>

      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Mmapaseka Kgaka. Built with React.</p>
      </footer>

    </div>
  )
}

export default App