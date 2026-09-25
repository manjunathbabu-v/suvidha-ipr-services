import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.jpeg";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);

    e.target.reset();
  };

  return (
    <div className="app">
      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="container nav-container">
          <button className="brand" onClick={() => scrollTo("home")}>
            <img src={logo} alt="Suvidha IPR Services" className="brand-logo-image" />

            <div className="brand-text">
              <strong>SUVIDHA</strong>
              <span>IPR SERVICES</span>
            </div>
          </button>

          <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <button onClick={() => scrollTo("home")}>Home</button>
            <button onClick={() => scrollTo("about")}>About</button>
            <button onClick={() => scrollTo("services")}>Services</button>
            <button onClick={() => scrollTo("process")}>How It Works</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>

            <button
              className="mobile-filing"
              onClick={() => scrollTo("filing")}
            >
              Start Your Filing
            </button>
          </nav>

          <div className="nav-actions">
            <button
              className="nav-cta"
              onClick={() => scrollTo("filing")}
            >
              Start Your Filing
            </button>

            <button
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* ================= HERO ================= */}

        <section className="hero" id="home">
          <div className="hero-circle circle-one"></div>
          <div className="hero-circle circle-two"></div>

          <div className="container hero-container">
            <div className="hero-content">
              <div className="eyebrow">
                PATENT & COPYRIGHT FILING ASSISTANCE
              </div>

              <h1>
                Protect Your Ideas.
                <span> Secure Your Innovation.</span>
              </h1>

              <p className="hero-description">
                Professional assistance for patent filing and copyright
                registration. From your first idea to filing and tracking,
                Suvidha IPR Services helps simplify your intellectual
                property journey.
              </p>

              <div className="hero-buttons">
                <button
                  className="primary-button"
                  onClick={() => scrollTo("filing")}
                >
                  Start Your IP Journey
                  <span>→</span>
                </button>

                <button
                  className="secondary-button"
                  onClick={() => scrollTo("contact")}
                >
                  Book a Consultation
                </button>
              </div>

              <div className="hero-features">
                <span>✓ Patent Assistance</span>
                <span>✓ Copyright Assistance</span>
                <span>✓ Transparent Process</span>
              </div>
            </div>

            <div className="hero-panel">
              <div className="gold-line"></div>

              <div className="panel-heading">
                <div className="panel-logo">IP</div>

                <div>
                  <h3>Your Innovation Matters</h3>
                  <p>Take the first step towards protecting it.</p>
                </div>
              </div>

              <div className="panel-service">
                <div className="panel-icon">P</div>

                <div>
                  <h4>Protect an Invention</h4>
                  <p>
                    Patent search, documentation and filing assistance.
                  </p>
                </div>
              </div>

              <div className="panel-service">
                <div className="panel-icon">C</div>

                <div>
                  <h4>Protect Creative Work</h4>
                  <p>
                    Copyright registration assistance for original work.
                  </p>
                </div>
              </div>

              <div className="panel-service">
                <div className="panel-icon">✓</div>

                <div>
                  <h4>Track Your Journey</h4>
                  <p>
                    Stay informed about important steps and updates.
                  </p>
                </div>
              </div>

              <button
                className="panel-button"
                onClick={() => scrollTo("filing")}
              >
                Get Started →
              </button>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}

        <section className="section services" id="services">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">OUR SERVICES</span>

              <h2>
                Protect What You've <em>Created</em>
              </h2>

              <p>
                Whether you're an inventor, researcher, startup or creator,
                we help simplify your intellectual property filing journey.
              </p>
            </div>

            <div className="services-grid">
              <article className="service-card">
                <div className="service-top">
                  <div className="large-service-icon">P</div>
                  <span>01</span>
                </div>

                <small>PATENT SERVICES</small>

                <h3>Protect Your Inventions</h3>

                <p>
                  Assistance throughout your patent journey, from initial
                  research and documentation to filing coordination.
                </p>

                <div className="service-list">
                  <span>✓ Patent Search</span>
                  <span>✓ Prior-Art Search</span>
                  <span>✓ Patentability Assessment Support</span>
                  <span>✓ Provisional Patent Assistance</span>
                  <span>✓ Complete Specification Assistance</span>
                  <span>✓ Patent Filing Assistance</span>
                  <span>✓ Patent Prosecution Support</span>
                  <span>✓ PCT / International Assistance</span>
                </div>

                <button onClick={() => scrollTo("filing")}>
                  Start Patent Enquiry →
                </button>
              </article>

              <article className="service-card">
                <div className="service-top">
                  <div className="large-service-icon">C</div>
                  <span>02</span>
                </div>

                <small>COPYRIGHT SERVICES</small>

                <h3>Protect Your Creative Work</h3>

                <p>
                  Registration assistance for original software, literary,
                  artistic and educational works.
                </p>

                <div className="service-list">
                  <span>✓ Copyright Search</span>
                  <span>✓ Copyright Application Assistance</span>
                  <span>✓ Software Copyright</span>
                  <span>✓ Literary Work</span>
                  <span>✓ Artistic Work</span>
                  <span>✓ Educational Content</span>
                  <span>✓ Website Content</span>
                  <span>✓ Registration Assistance</span>
                </div>

                <button onClick={() => scrollTo("filing")}>
                  Start Copyright Enquiry →
                </button>
              </article>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}

        <section className="section about" id="about">
          <div className="container about-grid">
            <div className="about-copy">
              <span className="section-label">ABOUT SUVIDHA</span>

              <h2>
                Making Intellectual Property <em>Simpler</em>
              </h2>

              <p>
                Suvidha IPR Services is focused on making patent and
                copyright filing assistance easier to understand and
                access for innovators and creators.
              </p>

              <p>
                We aim to support students, faculty, researchers, startups,
                MSMEs and individual inventors through a clear and
                transparent intellectual property journey.
              </p>

              <button
                className="primary-button"
                onClick={() => scrollTo("contact")}
              >
                Talk to Us →
              </button>
            </div>

            <div className="about-features">
              <div className="about-feature">
                <div>01</div>

                <span>
                  <h3>Research-Driven</h3>
                  <p>
                    Supporting innovators, students, faculty and researchers.
                  </p>
                </span>
              </div>

              <div className="about-feature">
                <div>02</div>

                <span>
                  <h3>Startup-Friendly</h3>
                  <p>
                    Accessible IP assistance for startups and growing MSMEs.
                  </p>
                </span>
              </div>

              <div className="about-feature">
                <div>03</div>

                <span>
                  <h3>End-to-End Support</h3>
                  <p>
                    From initial enquiry and documentation to filing support.
                  </p>
                </span>
              </div>

              <div className="about-feature">
                <div>04</div>

                <span>
                  <h3>Transparent Process</h3>
                  <p>
                    Clear communication throughout the IP filing journey.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROCESS ================= */}

        <section className="section process" id="process">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">HOW IT WORKS</span>

              <h2>
                Your IP Journey, <em>Simplified</em>
              </h2>

              <p>
                A straightforward process designed to help you understand
                each stage of your filing journey.
              </p>
            </div>

            <div className="process-grid">
              <article className="process-card">
                <div className="process-number">01</div>
                <div className="process-dot"></div>
                <h3>Submit Your Idea</h3>
                <p>
                  Tell us about your invention, software or creative work.
                </p>
              </article>

              <article className="process-card">
                <div className="process-number">02</div>
                <div className="process-dot"></div>
                <h3>Initial Assessment</h3>
                <p>
                  Information, documents and filing requirements are
                  reviewed.
                </p>
              </article>

              <article className="process-card">
                <div className="process-number">03</div>
                <div className="process-dot"></div>
                <h3>Search & Documentation</h3>
                <p>
                  Relevant research and required documentation are prepared.
                </p>
              </article>

              <article className="process-card">
                <div className="process-number">04</div>
                <div className="process-dot"></div>
                <h3>Review & Approval</h3>
                <p>
                  Documents are reviewed and prepared for the next step.
                </p>
              </article>

              <article className="process-card">
                <div className="process-number">05</div>
                <div className="process-dot"></div>
                <h3>Filing Coordination</h3>
                <p>
                  Filing is coordinated through the applicable official
                  mechanism.
                </p>
              </article>

              <article className="process-card">
                <div className="process-number">06</div>
                <div className="process-dot"></div>
                <h3>Status Tracking</h3>
                <p>
                  Important application information and updates can be
                  followed.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ================= WHO WE HELP ================= */}

        <section className="section audience">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">WHO WE HELP</span>

              <h2>
                Built for People Who <em>Create & Innovate</em>
              </h2>

              <p>
                Supporting innovation from classrooms and research labs to
                startups, businesses and individual inventors.
              </p>
            </div>

            <div className="audience-grid">
              <article className="audience-card">
                <div className="audience-icon">ST</div>
                <h3>Students</h3>
                <p>
                  Have an innovative academic project? Take the first step
                  towards protecting it.
                </p>
              </article>

              <article className="audience-card">
                <div className="audience-icon">FR</div>
                <h3>Faculty & Researchers</h3>
                <p>
                  Support for research, technical innovations and original
                  academic work.
                </p>
              </article>

              <article className="audience-card">
                <div className="audience-icon">SU</div>
                <h3>Startups</h3>
                <p>
                  Protect your technology and original work as your startup
                  grows.
                </p>
              </article>

              <article className="audience-card">
                <div className="audience-icon">MS</div>
                <h3>MSMEs</h3>
                <p>
                  Build and protect intellectual property that supports your
                  competitive advantage.
                </p>
              </article>

              <article className="audience-card">
                <div className="audience-icon">IN</div>
                <h3>Individual Inventors</h3>
                <p>
                  Get assistance turning an innovative idea into an IP
                  filing journey.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ================= WHY SUVIDHA ================= */}

        <section className="section why">
          <div className="container why-grid">
            <div>
              <span className="section-label">WHY SUVIDHA</span>

              <h2>
                Your Ideas Deserve the
                <em> Right Support</em>
              </h2>

              <p className="why-description">
                Intellectual property can feel complicated. Our approach is
                designed around clarity, accessibility and transparent
                communication.
              </p>
            </div>

            <div className="why-items">
              <div className="why-item">
                <span>01</span>
                <div>
                  <h3>Simple Process</h3>
                  <p>
                    Understand what happens at each stage of your journey.
                  </p>
                </div>
              </div>

              <div className="why-item">
                <span>02</span>
                <div>
                  <h3>Clear Communication</h3>
                  <p>
                    Receive understandable guidance instead of unnecessary
                    complexity.
                  </p>
                </div>
              </div>

              <div className="why-item">
                <span>03</span>
                <div>
                  <h3>Focused Assistance</h3>
                  <p>
                    Dedicated to patent and copyright filing assistance.
                  </p>
                </div>
              </div>

              <div className="why-item">
                <span>04</span>
                <div>
                  <h3>Transparent Approach</h3>
                  <p>
                    Designed around clear steps, information and
                    communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FILING FORM ================= */}

        <section className="section filing" id="filing">
          <div className="container filing-grid">
            <div className="filing-copy">
              <span className="light-label">START YOUR FILING</span>

              <h2>
                Ready to Protect
                <em> Your Work?</em>
              </h2>

              <p>
                Tell us what you would like to protect and provide some
                basic information to begin your enquiry.
              </p>

              <div className="filing-benefits">
                <span>✓ Patent enquiries</span>
                <span>✓ Copyright enquiries</span>
                <span>✓ Consultation requests</span>
                <span>✓ Simple initial questionnaire</span>
              </div>

              <div className="filing-note">
                <strong>Not sure which service you need?</strong>
                <p>
                  Submit a brief description of your work and select
                  "Not Sure / Other" in the form.
                </p>
              </div>
            </div>

            <form className="filing-form" onSubmit={handleSubmit}>
              <div className="form-heading">
                <span>IP ENQUIRY</span>
                <h3>Start Your IP Journey</h3>
                <p>Complete the form below to submit your enquiry.</p>
              </div>

              <label>
                What do you want to protect? *
                <select required defaultValue="">
                  <option value="" disabled>
                    Select your work
                  </option>
                  <option>Invention / Technology</option>
                  <option>Software</option>
                  <option>Book / Article / Content</option>
                  <option>Artwork / Creative Work</option>
                  <option>Educational Material</option>
                  <option>Not Sure / Other</option>
                </select>
              </label>

              <div className="form-row">
                <label>
                  Full Name *
                  <input
                    type="text"
                    placeholder="Your full name"
                    required
                  />
                </label>

                <label>
                  Mobile Number *
                  <input
                    type="tel"
                    placeholder="Your mobile number"
                    required
                  />
                </label>
              </div>

              <label>
                Email Address *
                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                Applicant Type
                <select defaultValue="">
                  <option value="" disabled>
                    Select applicant type
                  </option>
                  <option>Individual</option>
                  <option>Student</option>
                  <option>Startup</option>
                  <option>MSME</option>
                  <option>Company</option>
                  <option>University</option>
                  <option>Research Institution</option>
                  <option>Other</option>
                </select>
              </label>

              <label>
                Brief Description *
                <textarea
                  rows="5"
                  placeholder="Briefly describe your invention or creative work..."
                  required
                ></textarea>
              </label>

              <button className="form-submit" type="submit">
                Submit Enquiry →
              </button>

              {submitted && (
                <div className="success-message">
                  ✓ Demo enquiry submitted successfully.
                </div>
              )}

              <small className="demo-notice">
                Frontend demonstration only — this prototype does not store
                submitted information.
              </small>
            </form>
          </div>
        </section>

        {/* ================= CONTACT ================= */}

        <section className="section contact" id="contact">
          <div className="container">
            <div className="contact-card">
              <div>
                <span>NEED GUIDANCE?</span>

                <h2>Let's Talk About Your Idea.</h2>

                <p>
                  Have questions about patents or copyright? Begin your
                  journey with Suvidha IPR Services.
                </p>
              </div>

              <button onClick={() => scrollTo("filing")}>
                Book a Consultation →
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-company">
            <div className="footer-brand">
              <img src={logo} alt="Suvidha IPR Services" className="brand-logo-image" />

              <div className="brand-text">
                <strong>SUVIDHA</strong>
                <span>IPR SERVICES</span>
              </div>
            </div>

            <p>
              Patent & Copyright Filing Assistance
            </p>

            <p className="footer-tagline">
              Protect Your Ideas. Secure Your Innovation.
            </p>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <button onClick={() => scrollTo("services")}>
              Patent Services
            </button>
            <button onClick={() => scrollTo("services")}>
              Copyright Services
            </button>
            <button onClick={() => scrollTo("filing")}>
              IP Consultation
            </button>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <button onClick={() => scrollTo("about")}>About Us</button>
            <button onClick={() => scrollTo("process")}>
              How It Works
            </button>
            <button onClick={() => scrollTo("filing")}>
              Start Your Filing
            </button>
          </div>

          <div className="footer-column">
            <h4>Suvidha IPR Services</h4>
            <p>Patent & Copyright Filing Assistance</p>
            <p>India</p>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>
            <strong>Disclaimer:</strong> Suvidha IPR Services provides
            intellectual property filing assistance, documentation and
            related support. Registration or grant of an intellectual
            property right is subject to applicable law, examination and
            the decision of the competent authority. Information on this
            prototype is for general informational purposes and should not
            be construed as legal advice.
          </p>

          <div>
            © 2026 Suvidha IPR Services. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;